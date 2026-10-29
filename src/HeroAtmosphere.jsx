import React,{useState} from 'react';
import LivingBanner from './LivingBanner';

const labels={
  ru:['Приостановить анимацию','Включить анимацию'],
  en:['Pause animation','Play animation'],
  vi:['Tạm dừng hiệu ứng','Bật hiệu ứng'],
  ar:['إيقاف الحركة مؤقتًا','تشغيل الحركة']
};
export default function HeroAtmosphere({lang}){
  const [paused,setPaused]=useState(false);
  return <>
    <LivingBanner paused={paused}/>
    <button className="motion-toggle" aria-pressed={paused} onClick={()=>{
      const next=!paused;
      document.querySelector('.hero')?.classList.toggle('hero-paused',next);
      setPaused(next);
    }}><span aria-hidden="true">{paused?'▶':'Ⅱ'}</span>{labels[lang][paused?1:0]}</button>
  </>;
}
