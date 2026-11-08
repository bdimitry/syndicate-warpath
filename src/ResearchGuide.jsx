import {pageUrl} from './siteRoutes';
import React from 'react';
import { research } from './research';
import './research.css';
import Why from './Why';
import {rationale} from './rationale';
import PartScreenshot from './PartScreenshot';
import {screenshotCopy} from './partScreenshots';
import {researchScreenshots, researchVisuals} from './researchScreenshots';

const trackScreenshots = [['industry', 'advanced'], ['city'], ['military']];

export default function ResearchGuide({ lang }) {
  const t = research[lang];
  const why = rationale[lang];
  const visuals = researchVisuals[lang];
  const renderScreenshot = id => {
    const [title, alt, ...points] = visuals[id];
    return <PartScreenshot key={id} screenshot={researchScreenshots[id]} copy={{title, alt, points}}
      labels={screenshotCopy[lang]} directory="research" width={1920} height={1080} />;
  };
  return <main id="guide" className="guide research-guide">
    <div className="guide-cover section">
      <a className="text-link" href={pageUrl(lang)}>← {t.back}</a>
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
          <h2>{stage.title}</h2><p>{stage.text}</p><Why lang={lang}>{why.research[i]}</Why>
          {stage.tracks && <div className="research-parallel"><h3>{t.parallel}</h3><dl>
            {stage.tracks.map(([title, text], index) => <div key={title}>
              <dt>{title}</dt>
              <dd>
                {text}
                <Why lang={lang}>{why.researchTracks[index]}</Why>
                {trackScreenshots[index].map(renderScreenshot)}
              </dd>
            </div>)}
          </dl></div>}
          {i === 2 && <>
            <div className="lesson-callout"><h3>{visuals.deferTitle}</h3><p>{visuals.defer}</p></div>
            {renderScreenshot('level200')}
          </>}
          <div className="research-gate"><strong>{t.finish}</strong><p>{stage.gate}</p></div>
        </section>)}
        <p className="lesson-warning">{t.reminder}</p>
        <p className="lesson-source">{t.attribution}</p>
        <p className="lesson-source"><a href="https://forum-global-share.lilithgame.com/warpath/post/40435/?lang=en-US">Warpath · Research / City Honors ↗</a></p>
        <a className="text-link" href={pageUrl(lang)}>← {t.back}</a>
      </article>
    </div>
  </main>;
}
