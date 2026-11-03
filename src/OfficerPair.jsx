import React,{useState} from 'react';
import {workbookLoadouts,workbookCopy} from './workbookLoadouts';
import SkillItem from './SkillItem';
import GearIcon from './GearIcon';
import {loadoutName} from './loadoutNames';
import Why from './Why';
import WorkbookGear from './WorkbookGear.jsx';
import {workbookGear,workbookGearCopy} from './workbookGear';
import {cardCopy,cardContext,unitExamples,referenceLoadouts,noSkillsCopy} from './officerCards';
import './officerCards.css';

export default function OfficerPair({ pair, officers, lang, label, reason, groupId, featured = false }) {
  const t=cardCopy[lang], context=cardContext(groupId), key=`${groupId}:${pair.join('+')}`, original=referenceLoadouts[key];
  const stagedGear=workbookGear[key], gearCopy=workbookGearCopy[lang];
  const options=[...(original?[original]:[]),...(workbookLoadouts[key]||[])], [selected,setSelected]=useState(0), loadout=options[selected];
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
      {options.length>1&&<label className="build-variant-select">{workbookCopy[lang].variant}<select value={selected} onChange={event=>setSelected(Number(event.target.value))}>{options.map((option,i)=><option key={i} value={i}>{option===original?workbookCopy[lang].original:`${workbookCopy[lang].variant} ${i+(original?0:1)}`}</option>)}</select></label>}
      <div className="build-role-grid">{pair.map((id,index)=><div className={`build-role-panel build-role-${index}`} key={id}>
        <p className="build-role-label"><span aria-hidden="true"/>{loadout&&loadout.rolesAssigned!==false?(index===0?t.leader:t.aide):`${t.officer} ${String(index+1).padStart(2,'0')}`}</p>
        <strong className="build-role-name"><bdi>{names[index]}</bdi></strong>
        {loadout?<><p className="build-field-label">{t.skills}</p>{loadout.officers[index].noSkillsToTrain?<p className="build-no-skills">{noSkillsCopy[lang]}</p>:loadout.officers[index].skills.length===0?<p className="build-pending">{gearCopy.skillsPending}</p>:<ul className="build-item-list">{loadout.officers[index].skills.map(item=><SkillItem key={item.name} item={item} lang={lang}/>)}</ul>}{(!stagedGear||loadout.officers[index].gear)&&<p className="build-field-label build-gear-heading">{t.gear}</p>}{loadout.officers[index].gear?<><div className="build-gear-item" data-gear={loadout.officers[index].gear.name}><GearIcon name={loadout.officers[index].gear.name}/><span><bdi>{loadoutName(loadout.officers[index].gear.name,lang)}</bdi></span></div><small className="build-example-level">{loadout.copy?loadout.copy[lang].level:t.exampleLevel}</small></>:!stagedGear&&<p className="build-pending">{workbookCopy[lang].gear}</p>}</>:<p className="build-pending">{stagedGear?gearCopy.skillsPending:t.pending}</p>}
      </div>)}</div>
      {stagedGear&&<WorkbookGear gear={stagedGear} lang={lang}/>}
      <p className="build-role-note">{loadout?(stagedGear&&loadout.source==='syndicate-workbooks'?gearCopy.skillsNote:loadout.copy?loadout.copy[lang].note:t.referenceNote):t.rolesNote}</p>
      {loadout&&<span className="build-reference-label">{loadout.copy?loadout.copy[lang].credit:t.reference}</span>}
      <Why lang={lang}>{reason}</Why>
    </div>
  </div>;
}
