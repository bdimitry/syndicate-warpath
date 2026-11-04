import React, {useEffect,useState} from 'react';

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
import CombatGuide from './CombatGuide';
import {combat} from './combat';
import './fieldHub.css';
import {pageUrl} from './siteRoutes';

const pages = {
  combat: [CombatGuide, combat],
  construction: [ConstructionGuide, construction], units: [UnitsGuide, units],
  research: [ResearchGuide, research], parts: [PartsGuide, parts], events: [EventsGuide, events],
  tanks: [TankGuide, tanks], infantry: [InfantryGuide, infantry], artillery: [ArtilleryGuide, artillery],
  aircraft: [AircraftGuide, aircraft], naval: [NavalGuide, naval],
};

export function pageMetadata(lang, page) {
  const guide = pages[page]?.[1][lang];
  return {
    title: guide ? `${guide.title} | SyndiCate Warpath` : `SyndiCate Warpath | ${content[lang].nav[0]}`,
    description: guide?.intro ?? content[lang].intro,
  };
}

export default function App({initialLanguage, page}) {
  const [lang,setLang] = useState(initialLanguage);
  const t = content[lang];
  const home = pageUrl(lang);
  const guides = Object.fromEntries(Object.entries(pages).map(([id,[, data]]) => [id,data[lang]]));
  const Guide = pages[page]?.[0];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    const {title,description} = pageMetadata(lang,page);
    document.title = title;
    document.querySelector('meta[name="description"]').content = description;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.content = title;
    if (ogDescription) ogDescription.content = description;
    try { localStorage.setItem('syndicate-language',lang); } catch {}
  }, [lang,page]);

  useEffect(() => {
    document.getElementById(location.hash.slice(1))?.scrollIntoView({behavior:'instant'});
  }, []);

  function changeLanguage(nextLanguage) {
    const url = new URL(location.href);
    url.pathname = pageUrl(nextLanguage,page);
    url.searchParams.delete('lang');
    url.searchParams.delete('page');
    history.replaceState(null,'',url);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.href = new URL(url.pathname,canonical.href).href;
      document.querySelector('meta[property="og:url"]')?.setAttribute('content',canonical.href);
    }
    setLang(nextLanguage);
  }

  return <>
    <a className="skip" href={Guide ? '#guide' : '#manual'}>{t.skip}</a>
    <header className="header">
      <a className="brand" href={home} aria-label="SyndiCate"><span className="brand-mark">S</span><span>SyndiCate<small>WARPATH ALLIANCE</small></span></a>
      <nav aria-label={t.nav[0]}>
        {['manual','approach','alliance'].map((id,index) => <a key={id} href={`${home}#${id}`}>{t.nav[index]}</a>)}
      </nav>
      <SiteNavigation lang={lang} page={page} homeLabels={t.nav} guides={guides}/>
      <div className="language"><span aria-hidden="true">文 / A</span>
        <select aria-label="Language / Язык / اللغة / Ngôn ngữ / Język / Idioma" value={lang} onChange={event => changeLanguage(event.target.value)}>
          {Object.entries(languages).map(([code,name]) => <option key={code} value={code} lang={code}>{name}</option>)}
        </select>
      </div>
    </header>
    {Guide ? <Guide lang={lang}/> : <FieldHub lang={lang} setLang={changeLanguage} guides={guides}/>}
    <footer><a className="footer-brand" href={home}>SyndiCate<span>Strength · Strategy · Unity</span></a><p>{t.footer}</p><span>© {new Date().getFullYear()} SyndiCate</span></footer>
  </>;
}
