import React,{useState} from 'react';
import './fleet.css';

const labels={
  ru:['Приостановить анимацию','Включить анимацию'],
  en:['Pause animation','Play animation'],
  vi:['Tạm dừng hiệu ứng','Bật hiệu ứng'],
  ar:['إيقاف الحركة مؤقتًا','تشغيل الحركة']
};
export default function HeroAtmosphere({lang}){
  const [paused,setPaused]=useState(false);
  return <>
    <div className="hero-fleet" aria-hidden="true">
      {['near','far','return'].map(depth=><div key={depth} className={`hero-ship hero-ship-${depth}`}><img src={`${import.meta.env.BASE_URL}scene/battlecruiser.png`} alt="" width="768" height="256"/><span className="ship-engine"/></div>)}
    </div>
    <div className="hero-atmosphere" aria-hidden="true">{Array.from({length:8},(_,i)=><i key={i} style={{'--spark':i}}/>)}</div>
    <button className="motion-toggle" aria-pressed={paused} onClick={()=>{
      const next=!paused;
      document.querySelector('.hero')?.classList.toggle('hero-paused',next);
      setPaused(next);
    }}><span aria-hidden="true">{paused?'▶':'Ⅱ'}</span>{labels[lang][paused?1:0]}</button>
  </>;
}
