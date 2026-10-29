import React from 'react';
import Why from './Why';
import OfficerPair from './OfficerPair';
import './tanks.css';
import {directions,directionLinks} from './airNaval';

export default function OfficerGuide({lang,data,groups,officers,prefix,links}) {
  const t=data[lang], end=groups.length+1;
  const related=directionLinks(lang,prefix), headings=t.headings.map((heading,i)=>i===end+1?directions[lang].title:heading);
  return <main id="guide" className={`guide tank-guide ${prefix}-guide`}>
    <div className="guide-cover section"><a className="text-link" href={`?lang=${lang}`}>← {t.back}</a><p className="eyebrow">SYNDICATE / {t.tag}</p><h1>{t.title}</h1><p className="intro">{t.intro}</p></div>
    <div className="guide-layout section"><aside><p className="eyebrow">{t.toc}</p><nav aria-label={t.toc}>{headings.map((heading,i)=><a href={`#${prefix}-${i}`} key={heading}><span>{String(i+1).padStart(2,'0')}</span>{heading}</a>)}</nav></aside>
      <article><p className="lesson-source">{t.origin}</p>
        <section id={`${prefix}-0`}><h2>{headings[0]}</h2><p>{t.overview}</p><Why lang={lang}>{t.overviewWhy}</Why></section>
        {groups.map((group,i)=><section id={`${prefix}-${i+1}`} data-build-group={group.id} key={group.id}>
          {[group.id,...(group.aliases||[])].map(id=><span id={`builds-${id}`} aria-hidden="true" key={id}/>)}
          <div className={`tank-section-heading tank-section-${group.category||'garrison'}`}><span>{group.badge?.[lang]||(group.category?group.category.toUpperCase():t.garrison)}</span><h2>{headings[i+1]}</h2></div>
          <p>{t.groupIntros[i]}</p><Why lang={lang}>{t.groupWhys[i]}</Why>
          <div className="tank-pair-grid">{group.pairs.map((pair,index)=><OfficerPair key={pair.join('-')} pair={pair} groupId={group.id} officers={officers} lang={lang} label={`${group.badge?.[lang]||(group.category?group.category.toUpperCase():t.garrison)} / ${t.variant} ${String(index+1).padStart(2,'0')}`} reason={t.reasons[i][index]}/>)}</div>
        </section>)}
        <section id={`${prefix}-${end}`}><h2>{headings[end]}</h2><ul className="lesson-checks">{t.checks.map(text=><li key={text}>{text}</li>)}</ul><Why lang={lang}>{t.chooseWhy}</Why></section>
        <section id={`${prefix}-${end+1}`}><h2>{headings[end+1]}</h2><ul className="lesson-checks">{related.map(link=><li key={link.page}><a href={`?page=${link.page}&lang=${lang}`}>{link.label}</a></li>)}</ul><Why lang={lang}>{directions[lang].why}</Why></section>
        <section id={`${prefix}-${end+2}`}><h2>{headings[end+2]}</h2><p>{t.note}</p><ul className="event-sources">{Object.entries(officers).map(([id,officer])=><li key={id}><a href={`https://warpath-planet.com/blogs/officers/${id}`} lang="en" dir="ltr">{officer.en} ↗</a></li>)}</ul></section>
        <div className="officer-guide-links">{related.map(link=><a className="text-link" key={link.page} href={`?page=${link.page}&lang=${lang}`}>{link.label}</a>)}</div>
      </article>
    </div>
  </main>;
}
