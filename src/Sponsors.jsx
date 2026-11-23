import React from 'react';
import './sponsors.css';

export const sponsors = {
  ru: {title: 'Спонсоры', intro: 'Спасибо первым игрокам, которые поддержали SyndiCate.'},
  en: {title: 'Sponsors', intro: 'Thank you to the first players who supported SyndiCate.'},
  vi: {title: 'Nhà tài trợ', intro: 'Cảm ơn những người chơi đầu tiên đã ủng hộ SyndiCate.'},
  ar: {title: 'الرعاة', intro: 'شكرًا لأوائل اللاعبين الذين دعموا SyndiCate.'},
  pl: {title: 'Sponsorzy', intro: 'Dziękujemy pierwszym graczom, którzy wsparli SyndiCate.'},
  pt: {title: 'Patrocinadores', intro: 'Agradecemos aos primeiros jogadores que apoiaram a SyndiCate.'},
};

const players = ['MARCCUUSS', 'Hmkd~Astartes'];

export default function Sponsors({lang}) {
  const {title, intro} = sponsors[lang];
  return <main id="guide" className="sponsors">
    <h1>{title}</h1>
    <p>{intro}</p>
    <ul>{players.map(name => <li key={name}><bdi dir="ltr">{name}</bdi></li>)}</ul>
  </main>;
}
