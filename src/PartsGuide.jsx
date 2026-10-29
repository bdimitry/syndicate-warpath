import React from 'react';
import { parts, partSources } from './parts';
import './parts.css';
import Why from './Why';
import {rationale} from './rationale';

import PartScreenshot from './PartScreenshot';
import { partScreenshots, screenshotCopy } from './partScreenshots';

export default function PartsGuide({ lang }) {
  const t = parts[lang];
  const screenshots = screenshotCopy[lang];

  return (
    <main id="guide" className="guide parts-guide">
      <div className="guide-cover section">
        <a className="text-link" href={`?lang=${lang}`}>← {t.back}</a>
        <p className="eyebrow">SYNDICATE / {t.tag}</p>
        <h1>{t.title}</h1>
        <p className="intro">{t.intro}</p>
      </div>
      <div className="guide-layout section">
        <aside>
          <p className="eyebrow">{t.toc}</p>
          <nav aria-label={t.toc}>
            {t.sections.map((section, i) => (
              <a key={section.id} href={`#parts-${section.id}`}>
                <span>{String(i + 1).padStart(2, '0')}</span>{section.title}
              </a>
            ))}
          </nav>
        </aside>
        <article>
          <ul className="lesson-checks parts-summary">
            {t.summary.map(item => <li key={item}>{item}</li>)}
          </ul>
          <p className="part-shot-note">{screenshots.note}</p>
          {t.sections.map((section, i) => (
            <section id={`parts-${section.id}`} key={section.id}>
              <p className="eyebrow">{String(i + 1).padStart(2, '0')} / SYNDICATE FIELD MANUAL</p>
              <h2>{section.title}</h2>
              {section.paragraphs?.map(p => <p key={p}>{p}</p>)}
              <Why lang={lang}>{rationale[lang].parts[section.id]}</Why>
              {section.bullets && (
                <ol className="parts-steps">
                  {section.bullets.map(item => <li key={item}>{item}</li>)}
                </ol>
              )}
              {section.rows && (
                <dl className="parts-choices">
                  {section.rows.map(([label, description]) => (
                    <div key={label}><dt>{label}</dt><dd>{description}</dd></div>
                  ))}
                </dl>
              )}
              {section.example && (
                <div className="parts-example">
                  <h3>{section.example.title}</h3>
                  <p>{section.example.text}</p>
                </div>
              )}
              {section.callout && <p className="lesson-warning">{section.callout}</p>}
              {partScreenshots.filter(screenshot => screenshot.section === section.id).map(screenshot => (
                <PartScreenshot key={screenshot.id} screenshot={screenshot} copy={screenshots.items[screenshot.id]} labels={screenshots} />
              ))}
              {section.sources && (
                <div className="parts-references">
                  <span>{t.sourceLabel}:</span>
                  {section.sources.map(key => (
                    <a key={key} href={partSources[key][1]}>{partSources[key][0]} ↗</a>
                  ))}
                </div>
              )}
            </section>
          ))}
          <p className="lesson-source">{t.evidence}</p>
          <a className="text-link" href={`?lang=${lang}`}>← {t.back}</a>
        </article>
      </div>
    </main>
  );
}
