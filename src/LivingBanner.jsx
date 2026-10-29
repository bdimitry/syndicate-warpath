import React,{useEffect,useRef} from 'react';
import './living-banner.css';

const vertex=`attribute vec2 a; varying vec2 uv; void main(){uv=a*.5+.5;gl_Position=vec4(a,0.,1.);}`;
const fragment=`precision highp float;
uniform sampler2D picture; uniform vec2 size; uniform vec2 imageSize; uniform float time;
varying vec2 uv;
float spot(vec2 p,vec2 c,vec2 r){return 1.-smoothstep(.45,1.,length((p-c)/r));}
float noise(vec2 p){return sin(p.x*7.+sin(p.y*5.))*sin(p.y*9.+sin(p.x*4.));}
void main(){
  vec2 box=vec2(uv.x,1.-uv.y);
  float scale=max(size.x/imageSize.x,size.y/imageSize.y);
  vec2 visible=size/(imageSize*scale);
  float vertical=size.x<600.?0.:.4;
  vec2 p=box*visible+(1.-visible)*vec2(.5,vertical);
  // Protect the complete central emblem and its lettering, plus soldiers and ships.
  float emblem=(1.-smoothstep(.19,.225,abs(p.x-.5)))*(1.-smoothstep(.68,.74,p.y));
  float smoke=spot(p,vec2(.23,.48),vec2(.17,.16))+spot(p,vec2(.77,.66),vec2(.14,.12))+spot(p,vec2(.57,.86),vec2(.2,.14))+spot(p,vec2(.88,.87),vec2(.13,.09))+spot(p,vec2(.16,.09),vec2(.14,.09));
  smoke=min(smoke,1.)*(1.-emblem);
  vec2 drift=vec2(noise(p*3.+vec2(time*.075,-time*.055)),noise(p*3.5+vec2(-time*.035,time*.06)));
  vec2 displacement=drift*vec2(.004,.006)*smoke;
  float cloth=spot(p,vec2(.06,.22),vec2(.04,.21))+spot(p,vec2(.215,.245),vec2(.024,.15))+spot(p,vec2(.493,.79),vec2(.068,.16))+spot(p,vec2(.983,.41),vec2(.021,.17));
  float wave=sin(p.y*39.-time*1.9)+.35*sin(p.y*73.-time*2.7);
  displacement.x+=wave*.0035*min(cloth,1.)*(1.-emblem);
  vec3 color=texture2D(picture,clamp(p+displacement,vec2(.001),vec2(.999))).rgb;
  float fire=smoothstep(.12,.4,color.r-max(color.g,color.b))*smoothstep(.57,.7,p.y)*(1.-emblem);
  float flicker=.92+.15*sin(time*3.1+p.x*71.)+.07*sin(time*7.3+p.y*91.);
  color*=mix(1.,flicker,fire);
  float redMetal=smoothstep(.18,.5,color.r-max(color.g,color.b))*emblem;
  color*=1.+redMetal*(.06+.1*sin(time*1.3+p.y*9.));
  gl_FragColor=vec4(color,1.);
}`;

export default function LivingBanner({paused}){
  const canvas=useRef(null),play=useRef(null);
  useEffect(()=>{play.current?.(paused);},[paused]);
  useEffect(()=>{
    const element=canvas.current,gl=element.getContext('webgl',{alpha:false,antialias:false,preserveDrawingBuffer:true});
    if(!gl)return;
    const motion=matchMedia('(prefers-reduced-motion: reduce)');
    let frame=0,last=0,elapsed=0,stopped=paused,visible=true,ready=false,disposed=false;
    const compile=(type,source)=>{const shader=gl.createShader(type);gl.shaderSource(shader,source);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)){gl.deleteShader(shader);return null;}return shader;};
    const vs=compile(gl.VERTEX_SHADER,vertex),fs=compile(gl.FRAGMENT_SHADER,fragment);
    if(!vs||!fs)return;
    const program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);
    if(!gl.getProgramParameter(program,gl.LINK_STATUS))return;
    gl.useProgram(program);
    const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
    const position=gl.getAttribLocation(program,'a');gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
    const viewport=gl.getUniformLocation(program,'size'),imageSize=gl.getUniformLocation(program,'imageSize'),time=gl.getUniformLocation(program,'time');
    const texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
    function draw(now){
      frame=0;if(!ready||disposed||stopped||!visible||document.hidden||motion.matches){last=0;return;}
      if(last)elapsed+=Math.min(now-last,80)/1000;last=now;
      const ratio=Math.min(devicePixelRatio||1,1.5),width=Math.round(element.clientWidth*ratio),height=Math.round(element.clientHeight*ratio);
      if(element.width!==width||element.height!==height){element.width=width;element.height=height;gl.viewport(0,0,width,height);}
      gl.uniform2f(viewport,element.clientWidth,element.clientHeight);gl.uniform1f(time,elapsed);gl.drawArrays(gl.TRIANGLES,0,6);
      element.classList.add('is-ready');frame=requestAnimationFrame(draw);
    }
    function resume(){cancelAnimationFrame(frame);frame=0;last=0;draw(performance.now());}
    function contextLost(event){event.preventDefault();ready=false;cancelAnimationFrame(frame);element.classList.remove('is-ready');}
    play.current=value=>{stopped=value;resume();};
    const source=new Image();source.onload=()=>{if(disposed)return;gl.bindTexture(gl.TEXTURE_2D,texture);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,source);gl.uniform2f(imageSize,source.naturalWidth,source.naturalHeight);ready=true;resume();};source.src=import.meta.env.BASE_URL+'syndicate-banner.png';
    const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;resume();});observer.observe(element);
    motion.addEventListener('change',resume);document.addEventListener('visibilitychange',resume);element.addEventListener('webglcontextlost',contextLost);
    return ()=>{disposed=true;cancelAnimationFrame(frame);observer.disconnect();motion.removeEventListener('change',resume);document.removeEventListener('visibilitychange',resume);element.removeEventListener('webglcontextlost',contextLost);play.current=null;gl.deleteTexture(texture);gl.deleteBuffer(buffer);gl.deleteProgram(program);gl.deleteShader(vs);gl.deleteShader(fs);};
  },[]);
  return <canvas className="living-banner" ref={canvas} aria-hidden="true"/>;
}
