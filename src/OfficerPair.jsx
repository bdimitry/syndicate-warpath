import React from 'react';
import SkillItem from './SkillItem';
import GearIcon from './GearIcon';
import Why from './Why';
import {cardCopy,cardContext,unitExamples,referenceLoadouts,noSkillsCopy} from './officerCards';
import './officerCards.css';

export default function OfficerPair({ pair, officers, lang, label, reason, groupId, featured = false }) {
  const t=cardCopy[lang], context=cardContext(groupId), loadout=referenceLoadouts[`${groupId}:${pair.join('+')}`];
  const names=pair.map(id=>lang==='ru'?officers[id].ru:officers[id].en);
  const portraitSize=id=>officers[id].portrait||(id==='scavenger'?{width:136,height:192}:{width:216,height:180});
  return <div className={`tank-pair officer-build-card${featured ? ' tank-pair-featured' : ''}`} data-pair={pair.join('+')}>
    <div className="build-visual">
      <div className="build-classification"><span>{label}</span><span>SYNDICATE</span></div>
      <div className="tank-pair-portraits build-portrait-stage">
        <div className="tank-portrait build-portrait build-portrait-first"><img src={`${import.meta.env.BASE_URL}officers/${pair[0]}.png`} alt={names[0]} width={portraitSize(pair[0]).width} height={portraitSize(pair[0]).height} loading="lazy"/></div>
        <div className={`build-unit${context.type==='artillery'?' build-unit-combined':''}`}>{(context.type==='artillery'?['howitzer','rocket']:[context.type]).map(type=><img key={type} src={`${import.meta.env.BASE_URL}guides/officers/units/${type}.png`} alt="" width="300" height="300" loading="lazy"/>)}<div className="build-unit-label"><strong>{t.types[context.type]}</strong><span lang="en" dir="ltr">{unitExamples[context.type]}</span></div><span className="build-unit-rank" role="img" aria-label={`${t.types[context.type]} · 9.2`} style={{backgroundImage:`url(${import.meta.env.BASE_URL}guides/officers/references/skill-reference.jpg)`}}/></div>
        <div className="tank-portrait build-portrait build-portrait-second"><img src={`${import.meta.env.BASE_URL}officers/${pair[1]}.png`} alt={names[1]} width={portraitSize(pair[1]).width} height={portraitSize(pair[1]).height} loading="lazy"/></div>
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
        {loadout?<><p className="build-field-label">{t.skills}</p>{loadout.officers[index].noSkillsToTrain?<p className="build-no-skills">{noSkillsCopy[lang]}</p>:<ul className="build-item-list">{loadout.officers[index].skills.map(item=><SkillItem key={item.name} item={item} lang={lang}/>)}</ul>}<p className="build-field-label build-gear-heading">{t.gear}</p><div className="build-gear-item" data-gear={loadout.officers[index].gear.name}><GearIcon name={loadout.officers[index].gear.name}/><span lang="en" dir="ltr">{loadout.officers[index].gear.name}</span></div><small className="build-example-level">{loadout.copy?loadout.copy[lang].level:t.exampleLevel}</small></>:<p className="build-pending">{t.pending}</p>}
      </div>)}</div>
      <p className="build-role-note">{loadout?(loadout.copy?loadout.copy[lang].note:t.referenceNote):t.rolesNote}</p>
      {loadout&&<span className="build-reference-label">{loadout.copy?loadout.copy[lang].credit:t.reference}</span>}
      <Why lang={lang}>{reason}</Why>
    </div>
  </div>;
}
