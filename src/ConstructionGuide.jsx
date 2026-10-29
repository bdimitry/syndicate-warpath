import React from 'react';
import {construction} from './construction';
import Why from './Why';
import './research.css';

export default function ConstructionGuide({lang}) {
  const t=construction[lang];
  return <main id="guide" className="guide research-guide construction-guide">
    <div className="guide-cover section"><a className="text-link" href={`?lang=${lang}`}>← {t.back}</a><p className="eyebrow">SYNDICATE / {t.tag}</p><h1>{t.title}</h1><p className="intro">{t.intro}</p></div>
    <div className="guide-layout section"><aside><p className="eyebrow">{t.toc}</p><nav aria-label={t.toc}>{t.headings.map((heading,i)=><a href={`#construction-${i}`} key={heading}><span>{String(i+1).padStart(2,'0')}</span>{heading.replace(/^\d+ · /,'')}</a>)}</nav></aside>
      <article>
        <section id="construction-0"><h2>{t.headings[0]}</h2><p>{t.principle}</p><Why lang={lang}>{t.principleWhy}</Why></section>
        {t.stages.map((stage,i)=><section id={`construction-${i+1}`} key={stage.title}><p className="eyebrow">{String(i+1).padStart(2,'0')} / SYNDICATE</p><h2>{stage.title}</h2><p>{stage.text}</p><Why lang={lang}>{stage.why}</Why><div className="research-gate"><strong>{t.checkLabel}</strong><p>{stage.check}</p></div></section>)}
        <section id="construction-5"><h2>{t.cycleTitle}</h2><ol className="lesson-checks">{t.cycle.map(text=><li key={text}>{text}</li>)}</ol><Why lang={lang}>{t.cycleWhy}</Why></section>
        <section id="construction-6"><h2>{t.headings[6]}</h2><p>{t.verification}</p><Why lang={lang}>{t.verificationWhy}</Why><p className="eyebrow">{t.sourceLabel}</p><ul className="event-sources"><li><a href="https://forum-global-share.lilithgame.com/warpath/post/49874?lang=en-US" lang="en" dir="ltr">Lilith · New Base Upgrade Explained ↗</a></li><li><a href="https://forum-global-share.lilithgame.com/warpath/post/49815?lang=en-US" lang="en" dir="ltr">Lilith · Developer War Room 3.0 ↗</a></li><li><a href="https://warpath.fandom.com/wiki/Engineering_Center" lang="en" dir="ltr">Warpath Wiki · Engineering Center ↗</a></li></ul></section>
        <div className="officer-guide-links"><a className="text-link" href={`?page=research&lang=${lang}`}>{t.researchLink}</a><a className="text-link" href={`?page=events&lang=${lang}`}>{t.eventsLink}</a></div>
      </article>
    </div>
  </main>;
}
