import React from 'react';
import {pageUrl} from './siteRoutes';
import {combat} from './combat';
import Why from './Why';
import './research.css';

export default function CombatGuide({lang}) {
  const t = combat[lang];
  return <main id="guide" className="guide research-guide">
    <div className="guide-cover section"><a className="text-link" href={pageUrl(lang)}>← {t.back}</a><p className="eyebrow">SYNDICATE / WARPATH</p><h1>{t.title}</h1><p className="intro">{t.intro}</p><div className="research-gate"><p>{t.caution}</p></div></div>
    <div className="guide-layout section"><aside><nav aria-label={t.title}>{t.sections.map((s,i)=><a href={`#combat-${i}`} key={i}><span>{String(i+1).padStart(2,'0')}</span>{s[0]}</a>)}</nav></aside><article>
      {t.sections.map(([title,text,why,check],i)=><section id={`combat-${i}`} key={i}><h2>{title}</h2>{text.map((p,j)=><p key={j}>{p}</p>)}<Why lang={lang}>{why}</Why>{check && <div className="research-gate"><strong>{t.test}</strong><p>{check}</p></div>}</section>)}
      <section id="combat-source"><h2>{t.source}</h2><p>{t.sourceNote}</p><a className="text-link" href="https://chatgpt.com/s/t_6aeb0ce3880c8191b37ceaaaa6c4d1fd">{t.sourceLink} ↗</a></section>
    </article></div>
  </main>;
}
