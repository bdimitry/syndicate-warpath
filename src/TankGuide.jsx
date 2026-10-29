import React from 'react';
import { tanks, tankOfficers, tankPairs } from './tanks';
import Why from './Why';
import './tanks.css';

function Officer({ id, lang }) {
  const officer = tankOfficers[id];
  return <div className="tank-officer">
    <div className="tank-portrait"><img src={`${import.meta.env.BASE_URL}officers/${id}.png`} alt={lang === 'ru' ? officer.ru : officer.en} width="216" height="180" loading="lazy"/></div>
    <strong>{lang === 'ru' ? officer.ru : officer.en}</strong>
    <span lang="en" dir="ltr">{lang === 'ru' ? officer.en : officer.name}</span>
  </div>;
}

function Pair({ pair, lang, label, reason, featured = false }) {
  return <div className={`tank-pair${featured ? ' tank-pair-featured' : ''}`}>
    <p className="eyebrow">{label}</p>
    <div className="tank-pair-portraits"><Officer id={pair[0]} lang={lang}/><span className="tank-pair-plus" aria-hidden="true">+</span><Officer id={pair[1]} lang={lang}/></div>
    <Why lang={lang}>{reason}</Why>
  </div>;
}

export default function TankGuide({ lang }) {
  const t = tanks[lang];
  return <main id="guide" className="guide tank-guide">
    <div className="guide-cover section"><a className="text-link" href={`?lang=${lang}`}>← {t.back}</a><p className="eyebrow">SYNDICATE / {t.tag}</p><h1>{t.title}</h1><p className="intro">{t.intro}</p></div>
    <div className="guide-layout section">
      <aside><p className="eyebrow">{t.toc}</p><nav aria-label={t.toc}>{t.headings.map((heading, i) => <a href={`#tanks-${i}`} key={heading}><span>0{i + 1}</span>{heading}</a>)}</nav></aside>
      <article>
        <p className="lesson-source">{t.origin}</p>
        <section id="tanks-0"><h2>{t.headings[0]}</h2><p>{t.universal}</p><Pair pair={tankPairs.universal} lang={lang} label={t.featured} reason={t.universalWhy} featured/></section>
        {['f2p','p2w'].map((category, i) => <section id={`tanks-${i + 1}`} key={category}>
          <div className={`tank-section-heading tank-section-${category}`}><span>{category.toUpperCase()}</span><h2>{t.headings[i + 1]}</h2></div>
          <p>{t[`${category}Intro`]}</p><Why lang={lang}>{t[`${category}Why`]}</Why>
          <div className="tank-pair-grid">{tankPairs[category].map((pair, index) => <Pair key={pair.join('-')} pair={pair} lang={lang} label={`${category.toUpperCase()} / ${t.variant} ${String(index + 1).padStart(2,'0')}`} reason={t[`${category}Reasons`][index]}/>)}</div>
        </section>)}
        <section id="tanks-3"><h2>{t.headings[3]}</h2><ul className="lesson-checks">{t.checks.map(text => <li key={text}>{text}</li>)}</ul><Why lang={lang}>{t.chooseWhy}</Why></section>
        <section id="tanks-4"><h2>{t.headings[4]}</h2><p>{t.note}</p><p className="eyebrow">{t.sourcesLabel}</p><ul className="event-sources">{Object.entries(tankOfficers).map(([id, officer]) => <li key={id}><a href={`https://warpath-planet.com/blogs/officers/${id}`}>{officer.en} ↗</a></li>)}</ul></section>
        <a className="text-link" href={`?lang=${lang}`}>← {t.back}</a>
      </article>
    </div>
  </main>;
}
