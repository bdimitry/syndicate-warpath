import React,{useId,useState} from 'react';
import {skillIcons} from './skillIcons';

const copy={ru:{owner:'Офицер-источник'},en:{owner:'Source officer'},vi:{owner:'Sĩ quan gốc'},ar:{owner:'الضابط صاحب المهارة'}};
const atlases={normal:{file:'normal-reference.jpg',width:975,height:1280},superheavy:{file:'superheavy-reference.jpg',width:1026,height:1280}};

export default function SkillItem({item,lang}){
  const skill=skillIcons[item.name],tooltipId=useId(),[open,setOpen]=useState(false);
  const atlas=skill?.atlas&&atlases[skill.atlas];
  return <li className="build-skill" data-skill={item.name} tabIndex={0} aria-describedby={open?tooltipId:undefined} onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)} onFocus={()=>setOpen(true)} onBlur={()=>setOpen(false)} onKeyDown={event=>{if(event.key==='Escape')setOpen(false);}}>
    {skill?.file?<img className="build-item-icon" src={`${import.meta.env.BASE_URL}guides/officers/skills/${skill.file}`} alt="" width="70" height="70" loading="lazy"/>:atlas?<span className="build-item-icon" aria-hidden="true" style={{backgroundImage:`url(${import.meta.env.BASE_URL}guides/officers/references/${atlas.file})`,backgroundSize:`${atlas.width/skill.size*100}% ${atlas.height/skill.size*100}%`,backgroundPosition:`${skill.x/(atlas.width-skill.size)*100}% ${skill.y/(atlas.height-skill.size)*100}%`}}/>:null}
    <span lang="en" dir="ltr">{item.name}</span>
    {open&&skill&&<span className="build-skill-tooltip" id={tooltipId} role="tooltip"><strong lang="en" dir="ltr">{item.name}</strong><span>{copy[lang].owner}</span><bdi>{skill.owner[lang]}</bdi><small lang="en" dir="ltr">{skill.personal}</small></span>}
  </li>;
}
