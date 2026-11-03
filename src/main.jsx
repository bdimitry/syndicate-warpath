import React, {useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {content,languages} from './content';
import './style.css';

import UnitsGuide from './UnitsGuide';
import ConstructionGuide from './ConstructionGuide';
import {construction} from './construction';
import EventsGuide from './EventsGuide';
import PartsGuide from './PartsGuide';
import ResearchGuide from './ResearchGuide';
import TankGuide from './TankGuide';
import ArtilleryGuide from './ArtilleryGuide';
import AircraftGuide from './AircraftGuide';
import NavalGuide from './NavalGuide';
import {aircraft,naval} from './airNaval';
import {artillery} from './artillery';
import InfantryGuide from './InfantryGuide';
import {infantry} from './infantry';
import {tanks} from './tanks';
import {research} from './research';
import {parts} from './parts';
import {events} from './events';
import {units} from './units';
import './polish.css';
import SiteNavigation from './SiteNavigation';
import FieldHub from './FieldHub';
import './fieldHub.css';
function initialLanguage(){const query=new URLSearchParams(location.search).get('lang'); if(content[query])return query; try{const saved=localStorage.getItem('syndicate-language');if(content[saved])return saved;}catch{} const browser=navigator.language.split('-')[0];return content[browser]?browser:'en';}
function App(){const [lang,setLang]=useState(initialLanguage);const t=content[lang];const page=new URLSearchParams(location.search).get('page');const isGuide=page==='units';const isEvents=page==='events';const isParts=page==='parts';const isResearch=page==='research';const isTanks=page==='tanks';const isInfantry=page==='infantry';const isAircraft=page==='aircraft';const isNaval=page==='naval';const isArtillery=page==='artillery';const isConstruction=page==='construction';const home=`?lang=${lang}`;const guides=Object.fromEntries(Object.entries({construction,units,research,parts,events,tanks,infantry,artillery,aircraft,naval}).map(([id,data])=>[id,data[lang]]));
useEffect(()=>{document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.title=`SyndiCate | ${isGuide?units[lang].title:isEvents?events[lang].title:isParts?parts[lang].title:isResearch?research[lang].title:isTanks?tanks[lang].title:isInfantry?infantry[lang].title:isAircraft?aircraft[lang].title:isNaval?naval[lang].title:isArtillery?artillery[lang].title:isConstruction?construction[lang].title:t.nav[0]} — Warpath`;document.querySelector('meta[name="description"]').content=isGuide?units[lang].intro:isEvents?events[lang].intro:isParts?parts[lang].intro:isResearch?research[lang].intro:isTanks?tanks[lang].intro:isInfantry?infantry[lang].intro:isAircraft?aircraft[lang].intro:isNaval?naval[lang].intro:isArtillery?artillery[lang].intro:isConstruction?construction[lang].intro:t.intro;const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);try{localStorage.setItem('syndicate-language',lang);}catch{}},[lang,t]);
return <><a className="skip" href={isGuide||isEvents||isParts||isResearch||isTanks||isInfantry||isAircraft||isNaval||isArtillery||isConstruction?'#guide':'#manual'}>{t.skip}</a><header className="header"><a className="brand" href={home} aria-label="SyndiCate home"><span className="brand-mark">S</span><span>SyndiCate<small>WARPATH ALLIANCE</small></span></a><nav aria-label={t.nav[0]}><a href={`${home}#manual`}>{t.nav[0]}</a><a href={`${home}#approach`}>{t.nav[1]}</a><a href={`${home}#alliance`}>{t.nav[2]}</a></nav><SiteNavigation lang={lang} page={page} homeLabels={t.nav} guides={guides}/><div className="language"><span aria-hidden="true">文 / A</span><select aria-label="Language / Язык / اللغة / Ngôn ngữ" value={lang} onChange={e=>setLang(e.target.value)}>{Object.entries(languages).map(([code,name])=><option key={code} value={code} lang={code}>{name}</option>)}</select></div></header>
{isGuide?<UnitsGuide lang={lang}/>:isEvents?<EventsGuide lang={lang}/>:isParts?<PartsGuide lang={lang}/>:isResearch?<ResearchGuide lang={lang}/>:isTanks?<TankGuide lang={lang}/>:isInfantry?<InfantryGuide lang={lang}/>:isAircraft?<AircraftGuide lang={lang}/>:isNaval?<NavalGuide lang={lang}/>:isArtillery?<ArtilleryGuide lang={lang}/>:isConstruction?<ConstructionGuide lang={lang}/>:<FieldHub lang={lang} setLang={setLang} guides={guides}/>}
<footer><a className="footer-brand" href={home}>SyndiCate<span>Strength · Strategy · Unity</span></a><p>{t.footer}</p><span>© {new Date().getFullYear()} SyndiCate</span></footer></>;
}createRoot(document.getElementById('root')).render(<App/>);
