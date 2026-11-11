import React from 'react';
import {workbookGearCopy} from './workbookGear';
import {groundGearNames} from './groundWorkbook';
import {airGearNames} from './airWorkbook';
import {loadoutName} from './loadoutNames';

const singleRowCopy = {
 ru: ['Снаряжение на выбор', 'Сравни бонусы предметов с задачей сборки и выбери доступный вариант. В таблице для этой пары одна строка снаряжения.'],
 en: ['Gear options', 'Compare item bonuses against the build’s role and choose an available option. The workbook gives this pair one gear row.'],
 vi: ['Lựa chọn trang bị', 'So sánh chỉ số trang bị với vai trò đội hình và chọn món hiện có. Bảng có một hàng trang bị cho cặp này.'],
 ar: ['خيارات المعدات', 'قارن مزايا المعدات بدور التشكيلة واختر خياراً متاحاً. يخصص الجدول صف معدات واحداً لهذا الثنائي.'],
 pl: ['Opcje wyposażenia', 'Porównaj premie przedmiotów z rolą zestawu i wybierz dostępną opcję. Skoroszyt podaje jeden wiersz wyposażenia dla tej pary.'],
 pt: ['Opções de equipamento', 'Compare os bônus dos itens com a função da formação e escolha uma opção disponível. A planilha traz uma linha de equipamento para esta dupla.'],
};

const airGearNote = {
 ru:'Каждый ряд повторяет вариант из таблицы. Сравни бонусы с задачей сборки и доступным снаряжением. Таблица не назначает предметы конкретным офицерам.',
 en:'Each row shows an option from the workbook. Compare the bonuses with the build’s role and the gear you have. The workbook leaves individual gear assignments open.',
 vi:'Mỗi hàng là một phương án trong bảng. So sánh hiệu ứng với vai trò đội hình và trang bị đang có. Bảng chưa chỉ định món đồ cho từng sĩ quan.',
 ar:'يعرض كل صف خياراً من الجدول. قارن المزايا بدور التشكيلة والمعدات المتوفرة لديك. يترك الجدول توزيع المعدات على الضباط مفتوحاً.',
 pl:'Każdy wiersz przedstawia wariant ze skoroszytu. Porównaj premie z rolą zestawu i dostępnym wyposażeniem. Skoroszyt pozostawia przydział przedmiotów oficerom otwarty.',
 pt:'Cada linha mostra uma opção da planilha. Compare os bônus com a função da formação e os itens disponíveis. A planilha deixa em aberto a distribuição dos itens entre os oficiais.',
};

function GearItems({items,lang}) {
 return <ul>{items.map(item=>{
  const name=airGearNames[item] ?? groundGearNames[item];
  return <li key={item}>
   <img src={`${import.meta.env.BASE_URL}guides/officers/gear/workbook/${item}.png`} alt="" width="64" height="64" loading="lazy"/>
   <span><bdi>{name?loadoutName(name,lang):workbookGearCopy[lang].items[item]}</bdi></span>
  </li>;
 })}</ul>;
}

export default function WorkbookGear({gear,lang}){
 const t=workbookGearCopy[lang];
 const [optionsLabel,optionsNote]=singleRowCopy[lang];
 if (gear.rows) return <section className="workbook-gear" aria-label={optionsLabel}>
  <h4>{optionsLabel}</h4>
  <div className="workbook-gear-stages">{gear.rows.map(items=><div className="workbook-gear-stage" key={items.join('+')}>
   <GearItems items={items} lang={lang}/>
  </div>)}</div>
  <p>{airGearNote[lang]}</p><small>{t.credit}</small>
 </section>;
 const stages=gear.options?.length ? ['options'] : ['purple','target','alternatives'];
 return <section className="workbook-gear" aria-label={t.heading}>
  <h4>{gear.options?.length?optionsLabel:t.heading}</h4>
  <div className="workbook-gear-stages">{stages.filter(stage=>gear[stage].length).map(stage=><div className={`workbook-gear-stage workbook-gear-${stage}`} key={stage}>
   {stage!=='options'&&<h5>{t[stage]}</h5>}
   <GearItems items={gear[stage]} lang={lang}/>
  </div>)}</div>
  <p>{gear.options?.length?optionsNote:t.note}</p><p>{t.choice}</p><small>{t.credit}</small>
 </section>;
}
