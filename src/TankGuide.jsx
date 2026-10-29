import React from 'react';
import { tanks, tankOfficers, tankGroups } from './tanks';
import Why from './Why';
import OfficerPair from './OfficerPair';
import './tanks.css';

function Pair(props) { return <OfficerPair {...props} officers={tankOfficers}/>; }

export default function TankGuide({ lang }) {
  const t = tanks[lang];
  return <main id="guide" className="guide tank-guide">
    <div className="guide-cover section"><a className="text-link" href={`?lang=${lang}`}>← {t.back}</a><p className="eyebrow">SYNDICATE / {t.tag}</p><h1>{t.title}</h1><p className="intro">{t.intro}</p></div>
    <div className="guide-layout section">
      <aside><p className="eyebrow">{t.toc}</p><nav aria-label={t.toc}>{t.headings.map((heading, i) => <a href={`#tanks-${i}`} key={heading}><span>{String(i + 1).padStart(2,'0')}</span>{heading}</a>)}</nav></aside>
      <article>
        <p className="lesson-source">{t.origin}</p>
        <section id="tanks-0"><h2>{t.headings[0]}</h2><p>{t.overview}</p><Why lang={lang}>{t.overviewWhy}</Why></section>
        {tankGroups.map((group, i) => <section id={`tanks-${i + 1}`} data-build-group={group.id} key={group.id}>
          <div className={`tank-section-heading tank-section-${group.category || 'garrison'}`}><span>{group.category ? group.category.toUpperCase() : t.garrison}</span><h2>{t.headings[i + 1]}</h2></div>
          <p>{t.groupIntros[i]}</p><Why lang={lang}>{t.groupWhys[i]}</Why>
          <div className="tank-pair-grid">{group.pairs.map((pair, index) => <Pair key={pair.join('-')} pair={pair} lang={lang} label={`${group.category ? group.category.toUpperCase() : t.garrison} / ${t.variant} ${String(index + 1).padStart(2,'0')}`} reason={t.reasons[i][index]}/>)}</div>
        </section>)}
        <section id="tanks-8"><h2>{t.headings[8]}</h2><ul className="lesson-checks">{t.checks.map(text => <li key={text}>{text}</li>)}</ul><Why lang={lang}>{t.chooseWhy}</Why></section>
        <section id="tanks-9"><h2>{t.headings[9]}</h2><ul className="lesson-checks">{t.upcoming.map(text=><li key={text}><strong>{text}</strong> — {t.pending}</li>)}</ul><Why lang={lang}>{t.pendingWhy}</Why></section>
        <section id="tanks-10"><h2>{t.headings[10]}</h2><p>{t.note}</p><ul className="event-sources">{Object.entries(tankOfficers).map(([id, officer]) => <li key={id}><a href={`https://warpath-planet.com/blogs/officers/${id}`} lang="en" dir="ltr">{officer.en} ↗</a></li>)}</ul></section>
        <a className="text-link" href={`?page=infantry&lang=${lang}`}>{t.infantryLink}</a>
      </article>
    </div>
  </main>;
}
