import React from 'react';
import { research } from './research';
import './research.css';

export default function ResearchGuide({ lang }) {
  const t = research[lang];
  return <main id="guide" className="guide research-guide">
    <div className="guide-cover section">
      <a className="text-link" href={`?lang=${lang}`}>← {t.back}</a>
      <p className="eyebrow">SYNDICATE / {t.tag}</p>
      <h1>{t.title}</h1><p className="intro">{t.intro}</p>
    </div>
    <div className="guide-layout section">
      <aside><p className="eyebrow">{t.toc}</p><nav aria-label={t.toc}>
        {t.stages.map((stage, i) => <a href={`#research-${i}`} key={stage.title}><span>0{i + 1}</span>{stage.title}</a>)}
      </nav></aside>
      <article>
        <p className="research-route">{t.summary}</p>
        {t.stages.map((stage, i) => <section id={`research-${i}`} key={stage.title}>
          <p className="eyebrow">0{i + 1} / SYNDICATE FIELD MANUAL</p>
          <h2>{stage.title}</h2><p>{stage.text}</p>
          {stage.tracks && <div className="research-parallel"><h3>{t.parallel}</h3><dl>
            {stage.tracks.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}
          </dl></div>}
          <div className="research-gate"><strong>{t.finish}</strong><p>{stage.gate}</p></div>
        </section>)}
        <p className="lesson-warning">{t.reminder}</p>
        <p className="lesson-source">{t.attribution}</p>
        <a className="text-link" href={`?lang=${lang}`}>← {t.back}</a>
      </article>
    </div>
  </main>;
}
