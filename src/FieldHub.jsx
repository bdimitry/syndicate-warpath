import React from 'react';
import {content, languages} from './content';
import {rationale} from './rationale';
import Why from './Why';
import {calculatorTitle} from './BuildingCalculator';

const labels = {
  ru: ['Полевой штаб','Офицерские сборки','Развитие и ресурсы','Инструменты','Стоимость улучшений и нехватка ресурсов','Раздел готовится'],
  en: ['Field headquarters','Officer builds','Progression and resources','Tools','Upgrade costs and resource shortages','In preparation'],
  pl: ["Sztab polowy","Zestawy oficerów","Postęp i zasoby","Narzędzia","Koszty aktualizacji i niedobory zasobów","W przygotowaniu"],
  pt: ["Quartel-general de campo","Formações de oficiais","Progressão e recursos","Ferramentas","Custos de atualização e escassez de recursos","Em preparação"],
  vi: ['Sở chỉ huy','Đội hình sĩ quan','Phát triển và tài nguyên','Công cụ','Chi phí nâng cấp và tài nguyên còn thiếu','Đang chuẩn bị'],
  ar: ['المقر الميداني','تشكيلات الضباط','التطوير والموارد','الأدوات','تكاليف الترقية والموارد الناقصة','قيد الإعداد'],
};
const officerRoutes = [
  ['tanks','mbt'], ['infantry','infantry'], ['artillery','howitzer'], ['aircraft','fighter'], ['naval','carrier'],
];
const guideRoutes = ['construction','units','research','parts','events'];

export default function FieldHub({lang, setLang, guides}) {
  const t = content[lang];
  const [headquarters, builds, progression, tools, calculatorInfo, soon] = labels[lang];
  const link = route => `?page=${route}&lang=${lang}`;
  const calculator = `${link('construction')}#construction-calculator`;
  return <main className="field-hub">
    <section className="hub-hero" aria-labelledby="hub-title">
      <img className="hub-banner" src={`${import.meta.env.BASE_URL}syndicate-banner.png`} alt="" width="1984" height="793" fetchPriority="high"/>
      <div className="hub-hero-content">
        <p className="hub-kicker">SYNDICATE <span> / </span> {headquarters}</p>
        <h1 id="hub-title">{t.title[0]} <span>{t.title[1]}</span></h1>
        <p className="intro">{t.intro}</p>
        <div className="hub-actions">
          <a className="button" href="#officer-builds">{builds} <span aria-hidden="true">↗</span></a>
          <a className="hub-secondary" href="#manual">{t.nav[0]} <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>

    <div className="hub-content">
      <section id="officer-builds" aria-labelledby="hub-builds">
        <div className="hub-heading"><span>01</span><h2 id="hub-builds">{builds}</h2></div>
        <div className="hub-builds">{officerRoutes.map(([route, art]) => <a className="hub-build" key={route} href={link(route)}>
          <img src={`${import.meta.env.BASE_URL}guides/officers/units/${art}.png`} width="300" height="300" alt="" loading="lazy"/>
          <div><h3>{guides[route].title}</h3><span aria-hidden="true">↗</span></div>
        </a>)}</div>
      </section>

      <div className="hub-library">
        <section id="manual" aria-labelledby="hub-guides">
          <div className="hub-heading"><span>02</span><h2 id="hub-guides">{progression}</h2></div>
          <div className="hub-guides">{guideRoutes.map((route, index) => <a href={link(route)} key={route}>
            <span className="hub-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div><h3>{guides[route].title}</h3><p>{guides[route].intro}</p></div>
            <span className="hub-arrow" aria-hidden="true">↗</span>
          </a>)}</div>
        </section>
        <section aria-labelledby="hub-tools">
          <div className="hub-heading"><span>03</span><h2 id="hub-tools">{tools}</h2></div>
          <a className="hub-tool" href={calculator}>
            <span className="hub-tool-symbol" aria-hidden="true">∑</span>
            <h3>{calculatorTitle(lang)}</h3>
            <p>{calculatorInfo}</p>
            <span className="hub-arrow" aria-hidden="true">↗</span>
          </a>
          <div className="hub-coming"><span>{soon}</span><h3>{t.cards[2][1]}</h3><p>{t.cards[2][3]}</p></div>
        </section>
      </div>

      <section id="approach" className="hub-approach">
        <p className="hub-kicker">{t.principle}</p><h2>{t.manifest}</h2><p>{t.body}</p>
        <Why lang={lang}>{rationale[lang].home}</Why>
      </section>
      <section id="alliance" className="alliance">
        <p className="hub-kicker">SYNDICATE / WARPATH</p><h2>{t.about}</h2>
        <div className="language-links">{Object.entries(languages).map(([code, name]) => <button type="button" lang={code} aria-pressed={lang === code} key={code} onClick={() => setLang(code)}>{name}</button>)}</div>
      </section>
    </div>
  </main>;
}
