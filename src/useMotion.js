import {useEffect} from 'react';
import './motion.css';

// Content stays visible if motion APIs are unavailable or motion is disabled.
export default function useMotion(){
  useEffect(()=>{
    const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
    if(!('IntersectionObserver' in window)||!Element.prototype.animate)return;
    let observer;
    const running=new Set();
    function start(){
      observer?.disconnect();
      running.forEach(animation=>animation.cancel());
      running.clear();
      if(preference.matches)return;
      observer=new IntersectionObserver(entries=>{
        entries.forEach(({target,isIntersecting})=>{
          if(!isIntersecting)return;
          observer.unobserve(target);
          const siblings=[...target.parentElement.children];
          const delay=target.matches('.card')?(siblings.indexOf(target)%3)*70:0;
          const animation=target.animate([
            {opacity:0,translate:'0 20px'},
            {opacity:1,translate:'0 0'}
          ],{duration:600,delay,fill:'backwards',easing:'cubic-bezier(.2,.7,.2,1)'});
          running.add(animation);
          animation.onfinish=()=>running.delete(animation);
        });
      },{threshold:0,rootMargin:'0px 0px -24px 0px'});
      document.querySelectorAll('.section-heading, .card, .manifest, .alliance, .guide-layout article > section').forEach(element=>observer.observe(element));
    }
    start();
    preference.addEventListener('change',start);
    return ()=>{
      observer?.disconnect();
      running.forEach(animation=>animation.cancel());
      preference.removeEventListener('change',start);
    };
  },[]);
}
