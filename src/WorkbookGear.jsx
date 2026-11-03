import React from 'react';
import {workbookGearCopy} from './workbookGear';

export default function WorkbookGear({gear,lang}){
 const t=workbookGearCopy[lang];
 return <section className="workbook-gear" aria-label={t.heading}>
  <h4>{t.heading}</h4>
  <div className="workbook-gear-stages">{['purple','target','alternatives'].filter(stage=>gear[stage].length).map(stage=><div className={`workbook-gear-stage workbook-gear-${stage}`} key={stage}>
   <h5>{t[stage]}</h5>
   <ul>{gear[stage].map((item,index)=><li key={`${item}-${index}`}><img src={`${import.meta.env.BASE_URL}guides/officers/gear/workbook/${item}.png`} alt="" width="64" height="64" loading="lazy"/><span>{t.items[item]}</span></li>)}</ul>
  </div>)}</div>
  <p>{t.note}</p><p>{t.choice}</p><small>{t.credit}</small>
 </section>;
}
