import React from 'react';
import {gearIcons} from './gearIcons';

export default function GearIcon({name}){
  const icon=gearIcons[name];
  if(!icon)return null;
  if(icon.file)return <img className="build-item-icon" src={`${import.meta.env.BASE_URL}guides/officers/gear/${icon.file}`} alt="" width="300" height="300" loading="lazy"/>;
  return <span className="build-item-icon" aria-hidden="true" style={{backgroundImage:`url(${import.meta.env.BASE_URL}guides/officers/gear/game-gear-atlas.png)`,backgroundSize:`${488/icon.size*100}% ${966/icon.size*100}%`,backgroundPosition:`${icon.x/(488-icon.size)*100}% ${icon.y/(966-icon.size)*100}%`}}/>;
}
