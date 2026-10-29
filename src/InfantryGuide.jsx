import React from 'react';
import { infantry, infantryGroups, infantryOfficers } from './infantry';
import OfficerPair from './OfficerPair';
import Why from './Why';
import './tanks.css';

export default function InfantryGuide({ lang }) {
  const t = infantry[lang];
  return <main id="guide" className="guide tank-guide infantry-guide">
    <div className="guide-cover section"><a className="text-link" href={`?lang=${lang}`}>← {t.back}</a><p className="eyebrow">SYNDICATE / {t.tag}</p><h1>{t.title}</h1><p className="intro">{t.intro}</p></div>
    <div className="guide-layout section"><aside><p className="eyebrow">{t.toc}</p><nav aria-label={t.toc}>{t.headings.map((heading,i)=><a href={`#infantry-${i}`} key={heading}><span>0{i+1}</span>{heading}</a>)}</nav></aside>
      <article><p className="lesson-source">{t.origin}</p>
        <section id="infantry-0"><h2>{t.headings[0]}</h2><p>{t.roles}</p><Why lang={lang}>{t.rolesWhy}</Why></section>
        {infantryGroups.map((group,i)=><section id={`infantry-${i+1}`} key={group.id}>
          <div className={`tank-section-heading tank-section-${group.category}`}><span>{group.category.toUpperCase()}</span><h2>{t.headings[i+1]}</h2></div>
          <p>{t.groupIntros[i]}</p><Why lang={lang}>{t.groupWhys[i]}</Why>
          <div className="tank-pair-grid">{group.pairs.map((pair,index)=><OfficerPair key={pair.join('-')} pair={pair} officers={infantryOfficers} lang={lang} label={`${group.category.toUpperCase()} / ${t.variant} ${String(index+1).padStart(2,'0')}`} reason={t.reasons[i][index]}/>)}</div>
        </section>)}
        <section id="infantry-5"><h2>{t.headings[5]}</h2><ul className="lesson-checks">{t.checks.map(text=><li key={text}>{text}</li>)}</ul><Why lang={lang}>{t.chooseWhy}</Why></section>
        <section id="infantry-6"><h2>{t.headings[6]}</h2><p>{t.note}</p><ul className="event-sources">{Object.entries(infantryOfficers).map(([id,officer])=><li key={id}><a href={`https://warpath-planet.com/blogs/officers/${id}`} lang="en" dir="ltr">{officer.en} ↗</a></li>)}</ul></section>
        <a className="text-link" href={`?page=tanks&lang=${lang}`}>{t.tankLink}</a>
      </article>
    </div>
  </main>;
}
