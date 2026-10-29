import React from 'react';
import Why from './Why';
import {cardCopy,cardContext,unitExamples,referenceLoadouts,referenceAtlases} from './officerCards';
import './officerCards.css';

function ReferenceIcon({item}) {
  if(!item.atlas)return null;
  const atlas=referenceAtlases[item.atlas];
  return <span className="build-item-icon" aria-hidden="true" style={{backgroundImage:`url(${import.meta.env.BASE_URL}guides/officers/references/${atlas.file})`,backgroundSize:`${atlas.width/item.size*100}% ${atlas.height/item.size*100}%`,backgroundPosition:`${item.x/(atlas.width-item.size)*100}% ${item.y/(atlas.height-item.size)*100}%`}}/>;
}

export default function OfficerPair({ pair, officers, lang, label, reason, groupId, featured = false }) {
  const t=cardCopy[lang], context=cardContext(groupId), loadout=referenceLoadouts[`${groupId}:${pair.join('+')}`];
  const names=pair.map(id=>lang==='ru'?officers[id].ru:officers[id].en);
  return <div className={`tank-pair officer-build-card${featured ? ' tank-pair-featured' : ''}`} data-pair={pair.join('+')}>
    <div className="build-visual">
      <div className="build-classification"><span>{label}</span><span>SYNDICATE</span></div>
      <div className="tank-pair-portraits build-portrait-stage">
        <div className="tank-portrait build-portrait build-portrait-first"><img src={`${import.meta.env.BASE_URL}officers/${pair[0]}.png`} alt={names[0]} width={pair[0]==='scavenger'?136:216} height={pair[0]==='scavenger'?192:180} loading="lazy"/></div>
        <div className="build-unit"><img src={`${import.meta.env.BASE_URL}guides/officers/units/${context.type}.png`} alt="" width="300" height="300" loading="lazy"/><div className="build-unit-label"><strong>{t.types[context.type]}</strong><span lang="en" dir="ltr">{unitExamples[context.type]}</span><small>{t.example}</small></div></div>
        <div className="tank-portrait build-portrait build-portrait-second"><img src={`${import.meta.env.BASE_URL}officers/${pair[1]}.png`} alt={names[1]} width={pair[1]==='scavenger'?136:216} height={pair[1]==='scavenger'?192:180} loading="lazy"/></div>
      </div>
    </div>
    <div className="build-body">
      <div className="build-tags"><span>{t.types[context.type]}</span>{context.mode&&<span>{t.modes[context.mode]}</span>}</div>
      {loadout?.title&&<p className="build-loadout-title" lang="en" dir="ltr">{loadout.title}</p>}
      <h3 className="build-pair-title"><bdi>{names[0]}</bdi><span aria-hidden="true"> + </span><bdi>{names[1]}</bdi></h3>
      <p className="build-requirements-title">{t.requirements}</p>
      <div className="build-role-grid">{pair.map((id,index)=><div className={`build-role-panel build-role-${index}`} key={id}>
        <p className="build-role-label"><span aria-hidden="true"/>{loadout?(index===0?t.leader:t.aide):`${t.officer} ${String(index+1).padStart(2,'0')}`}</p>
        <strong className="build-role-name"><bdi>{names[index]}</bdi></strong>
        {loadout?<><p className="build-field-label">{t.skills}</p><ul className="build-item-list">{loadout.officers[index].skills.map(item=><li key={item.name}><ReferenceIcon item={item}/><span lang="en" dir="ltr">{item.name}</span></li>)}</ul><p className="build-field-label build-gear-heading">{t.gear}</p><div className="build-gear-item"><ReferenceIcon item={loadout.officers[index].gear}/><span lang="en" dir="ltr">{loadout.officers[index].gear.name}</span></div><small className="build-example-level">{loadout.copy?loadout.copy[lang].level:t.exampleLevel}</small></>:<p className="build-pending">{t.pending}</p>}
      </div>)}</div>
      <p className="build-role-note">{loadout?(loadout.copy?loadout.copy[lang].note:t.referenceNote):t.rolesNote}</p>
      {loadout&&<span className="build-reference-label">{loadout.copy?loadout.copy[lang].credit:t.reference}</span>}
      <Why lang={lang}>{reason}</Why>
    </div>
  </div>;
}
