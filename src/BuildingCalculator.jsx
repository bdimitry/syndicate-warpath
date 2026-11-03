import React, {useState} from 'react';
import buildings from './buildingCosts.json';
import {buildingName} from './buildingNames';
import Why from './Why';
import './buildingCalculator.css';

const source = 'https://i.dmzgame.com/warpath/wiki/json/db-building-en.json';
const key = 'iron-atlas-build-plan-v1';
const copy = {
  ru: ['Калькулятор строительства','Здание','Текущий уровень','Целевой уровень','Все здания','Итог плана','Расход','В наличии','Не хватает','Выбери уровни, чтобы увидеть затраты.','Для выбранного диапазона есть пропуски в таблице.','Таблица затрат Warpath','Сравни итог с запасами до запуска улучшений. Так видно, какие материалы нужно подготовить. Сверь стоимость с игрой перед тратой ресурсов.','Военное финансирование|Сталь|Нефть|Доски|Кирпичи|Цемент|Стальные балки|Асфальт|Бетон'],
  en: ['Building calculator','Building','Current level','Target level','All buildings','Plan total','Cost','Available','Shortage','Select levels to see costs.','The cost table has gaps in the selected range.','Warpath cost table','Compare the total with your stock before upgrading to see which materials to prepare. Check the costs in the game before spending.','Military funds|Steel|Oil|Planks|Bricks|Cement|Steel beams|Asphalt|Concrete'],
  pl: ["Kalkulator budowy","Budynek","Aktualny poziom","Poziom docelowy","Wszystkie budynki","Suma planu","Koszt","Dostępne","Niedobór","Wybierz poziomy, aby zobaczyć koszty.","Tabela kosztów zawiera luki w wybranym zakresie.","Tabela kosztów Warpath","Przed modernizacją porównaj sumę z zapasami, aby zobaczyć, jakie materiały przygotować. Przed wydaniem sprawdź koszty w grze.","Fundusze wojskowe|Stal|Olej|Deski|Cegły|Cement|Belki stalowe|Asfalt|Beton"],
  pt: ["Calculadora de construção","Edifício","Nível atual","Nível alvo","Todos os edifícios","Total do plano","Custo","Disponível","Escassez","Selecione os níveis para ver os custos.","A tabela de custos apresenta lacunas no intervalo selecionado.","Tabela de custos do Warpath","Compare o total com o seu estoque antes de atualizar para ver quais materiais preparar. Verifique os custos do jogo antes de gastar.","Fundos militares|Aço|Petróleo|Pranchas|Tijolos|Cimento|Vigas de aço|Asfalto|Concreto"],
  vi: ['Máy tính xây dựng','Công trình','Cấp hiện tại','Cấp mục tiêu','Tất cả công trình','Tổng kế hoạch','Chi phí','Hiện có','Còn thiếu','Chọn cấp để xem chi phí.','Bảng chi phí thiếu dữ liệu cho khoảng cấp đã chọn.','Bảng chi phí Warpath','So sánh tổng chi phí với kho trước khi nâng cấp để biết cần chuẩn bị vật liệu nào. Kiểm tra chi phí trong trò chơi trước khi sử dụng tài nguyên.','Quân phí|Thép|Dầu|Ván gỗ|Gạch|Xi măng|Dầm thép|Nhựa đường|Bê tông'],
  ar: ['حاسبة البناء','المبنى','المستوى الحالي','المستوى المستهدف','جميع المباني','إجمالي الخطة','التكلفة','المتوفر','النقص','اختر المستويات لعرض التكلفة.','جدول التكلفة يفتقر إلى بيانات لبعض المستويات المختارة.','جدول تكاليف Warpath','قارن الإجمالي بمخزونك قبل الترقية لمعرفة المواد التي تحتاج إلى تجهيزها. تحقق من التكلفة داخل اللعبة قبل إنفاق الموارد.','التمويل العسكري|الفولاذ|النفط|الألواح|الطوب|الإسمنت|العوارض الفولاذية|الأسفلت|الخرسانة'],
};
export const calculatorTitle = lang => copy[lang][0];

function readPlan() {
  try { return JSON.parse(localStorage.getItem(key)) || {}; }
  catch { return {}; }
}

function level(value, max) {
  return Math.max(0, Math.min(max, Math.trunc(Number(value)) || 0));
}

function range(building, plan) {
  const saved = plan[building.id] || {};
  const current = level(saved.current, building.max);
  return {current, target: Math.max(current, level(saved.target, building.max))};
}

export default function BuildingCalculator({lang}) {
  const [title, buildingLabel, currentLabel, targetLabel, all, totalLabel, costLabel, stockLabel, shortageLabel, empty, missing, sourceLabel, why, resourceNames] = copy[lang];
  const [plan, setPlan] = useState(readPlan);
  const [stock, setStock] = useState({});
  const [focus, setFocus] = useState('');
  const [selection, setSelection] = useState(buildings[0].id);
  const names = resourceNames.split('|');
  const format = new Intl.NumberFormat(lang);
  const totals = names.map(() => 0);
  let incomplete = false;
  let hasUpgrades = false;
  function update(building, field, value) {
    const next = range(building, plan);
    next[field] = level(value, building.max);
    next.target = Math.max(next.current, next.target);
    const updated = {...plan, [building.id]: next};
    setPlan(updated);
    try { localStorage.setItem(key, JSON.stringify(updated)); } catch {}
  }
  for (const building of buildings) {
    if (focus && focus !== building.id) continue;
    const {current, target} = range(building, plan);
    if (target > current) hasUpgrades = true;
    for (let n = current + 1; n <= target; n++) {
      const row = building.levels[n];
      if (!row) { incomplete = true; continue; }
      row.forEach((value, i) => { totals[i] += value; });
    }
  }
  const visible = buildings.filter(building => building.id === selection || range(building, plan).target > range(building, plan).current);
  return <section id="construction-calculator" className="building-calculator">
    <h2>{title}</h2>
    <label>{buildingLabel}<select value={selection} onChange={event => setSelection(event.target.value)}>
      {buildings.map(building => <option key={building.id} value={building.id}>{buildingName(building, lang)}</option>)}
    </select></label>
    <div className="building-plan">{visible.map(building => {
      const {current, target} = range(building, plan);
      return <fieldset key={building.id}><legend><bdi>{buildingName(building, lang)}</bdi></legend>
        <label>{currentLabel}<input type="number" min="0" max={building.max} value={current} onChange={event => update(building, 'current', event.target.value)}/></label>
        <label>{targetLabel}<input type="number" min={current} max={building.max} value={target} onChange={event => update(building, 'target', event.target.value)}/></label>
      </fieldset>;
    })}</div>
    <label>{totalLabel}<select value={focus} onChange={event => setFocus(event.target.value)}>
      <option value="">{all}</option>
      {buildings.map(building => <option key={building.id} value={building.id}>{buildingName(building, lang)}</option>)}
    </select></label>
    {!hasUpgrades && <p>{empty}</p>}
    {incomplete && <p role="status">{missing}</p>}
    {hasUpgrades && !incomplete && <ul className="building-resources">{totals.map((cost, i) => cost > 0 && <li key={names[i]}>
      <strong>{names[i]}</strong>
      <span>{costLabel} · {format.format(cost)}</span>
      <label>{stockLabel}<input aria-label={`${names[i]} · ${stockLabel}`} type="number" min="0" value={stock[i] ?? ''} onChange={event => setStock({...stock, [i]: event.target.value})}/></label>
      {stock[i] !== undefined && stock[i] !== '' && <span>{shortageLabel} · {format.format(Math.max(0, cost - Math.max(0, Number(stock[i]) || 0)))}</span>}
    </li>)}</ul>}
    <Why lang={lang}>{why}</Why>
    <a className="text-link" href={source}>{sourceLabel} ↗</a>
  </section>;
}
