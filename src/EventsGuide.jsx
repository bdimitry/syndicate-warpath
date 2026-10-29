import React from 'react';
import { events, eventSources } from './events';
import Why from './Why';
import {rationale} from './rationale';


function StageTimes({ lang, text }) {
  const locale = { ru: 'ru', en: 'en-GB', vi: 'vi', ar: 'ar' }[lang];
  const today = new Date();
  const formatter = new Intl.DateTimeFormat(locale, {
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  });
  return <div className="stage-times">
    <h3>{text.clock}</h3>
    <p className="time-zone">{Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
    <div className="time-grid">
      {[0, 4, 8, 12, 16, 20].map(hour => {
        const date = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), hour));
        return <div key={hour}><bdi>{String(hour).padStart(2, '0')}:00 {text.utc}</bdi><span>{text.local}</span><strong><bdi>{formatter.format(date)}</bdi></strong></div>;
      })}
    </div>
    <p>{text.timeNote}</p>
  </div>;
}

export default function EventsGuide({ lang }) {
  const t = events[lang];
  const why = rationale[lang].events;
  return <main id="guide" className="guide">
    <div className="guide-cover section">
      <a className="text-link" href={`?lang=${lang}`}>← {t.back}</a>
      <p className="eyebrow">SYNDICATE / {t.tag}</p>
      <h1>{t.title}</h1><p className="intro">{t.intro}</p>
    </div>
    <div className="guide-layout section">
      <aside><p className="eyebrow">{t.toc}</p><nav aria-label={t.toc}>
        {t.headings.map((h, i) => <a key={h} href={`#event-${i}`}><span>0{i + 1}</span>{h}</a>)}
      </nav></aside>
      <article>
        <section id="event-0"><h2>{t.headings[0]}</h2><p>{t.note}</p>
          <div className="calendar-days">{t.days.map(([day, action, stage], i) => <div className="calendar-day" key={day}>
            <div className="calendar-day-title"><span>0{i + 1}</span><h3>{day}</h3></div>
            <p>{action}</p><Why lang={lang}>{why.days[i]}</Why><div className="calendar-stage"><strong>{t.columns[2]}</strong><p>{stage}</p></div>
          </div>)}</div>
        </section>
        <section id="event-1"><h2>{t.headings[1]}</h2><p>{t.definition}</p>
          <StageTimes lang={lang} text={t}/>
          {t.steps.map(([h, p], i) => <div className="event-step" key={h}><span>0{i + 1}</span><div><h3>{h}</h3><p>{p}</p><Why lang={lang}>{why.steps[i]}</Why></div></div>)}
        </section>
        <section id="event-2"><h2>{t.headings[2]}</h2><p>{t.why}</p>
          <div className="lesson-callout"><h3>{t.overlap}</h3><p>{t.whyMore}</p></div><p>{t.exception}</p><Why lang={lang}>{why.honors}</Why>
        </section>
        <section id="event-3"><h2>{t.headings[3]}</h2><ul className="lesson-checks">{t.checks.map(c => <li key={c}>{c}</li>)}</ul><p className="lesson-warning">{t.caution}</p><Why lang={lang}>{why.plan}</Why></section>
        <section id="event-4"><h2>{t.headings[4]}</h2><p className="lesson-source">{t.sources}</p><Why lang={lang}>{why.sources}</Why>
          <ul className="event-sources">{eventSources.map(([label, url]) => <li key={url}><a href={url}>{label} ↗</a></li>)}</ul>
        </section>
        <a className="text-link" href={`?lang=${lang}`}>← {t.back}</a>
      </article>
    </div>
  </main>;
}
