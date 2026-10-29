import React from 'react';
import Why from './Why';

export default function OfficerPair({ pair, officers, lang, label, reason, featured = false }) {
  return <div className={`tank-pair${featured ? ' tank-pair-featured' : ''}`}>
    <p className="eyebrow">{label}</p>
    <div className="tank-pair-portraits">{pair.map((id, index) => {
      const officer = officers[id];
      return <React.Fragment key={id}>{index > 0 && <span className="tank-pair-plus" aria-hidden="true">+</span>}<div className="tank-officer">
        <div className="tank-portrait"><img src={`${import.meta.env.BASE_URL}officers/${id}.png`} alt={lang === 'ru' ? officer.ru : officer.en} width={id === 'scavenger' ? 136 : 216} height={id === 'scavenger' ? 192 : 180} loading="lazy"/></div>
        <strong>{lang === 'ru' ? officer.ru : officer.en}</strong><span lang="en" dir="ltr">{lang === 'ru' ? officer.en : officer.name}</span>
      </div></React.Fragment>;
    })}</div>
    <Why lang={lang}>{reason}</Why>
  </div>;
}
