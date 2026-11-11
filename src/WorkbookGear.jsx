import React from 'react';
import {workbookGearCopy} from './workbookGear';
import {groundGearNames} from './groundWorkbook';
import {loadoutName} from './loadoutNames';

const singleRowCopy = {
 ru: ['Снаряжение на выбор', 'Сравни бонусы предметов с задачей сборки и выбери доступный вариант. В таблице для этой пары одна строка снаряжения.'],
 en: ['Gear options', 'Compare item bonuses against the build’s role and choose an available option. The workbook gives this pair one gear row.'],
 vi: ['Lựa chọn trang bị', 'So sánh chỉ số trang bị với vai trò đội hình và chọn món hiện có. Bảng có một hàng trang bị cho cặp này.'],
 ar: ['خيارات المعدات', 'قارن مزايا المعدات بدور التشكيلة واختر خياراً متاحاً. يخصص الجدول صف معدات واحداً لهذا الثنائي.'],
 pl: ['Opcje wyposażenia', 'Porównaj premie przedmiotów z rolą zestawu i wybierz dostępną opcję. Skoroszyt podaje jeden wiersz wyposażenia dla tej pary.'],
 pt: ['Opções de equipamento', 'Compare os bônus dos itens com a função da formação e escolha uma opção disponível. A planilha traz uma linha de equipamento para esta dupla.'],
};

export default function WorkbookGear({gear,lang}){
 const t=workbookGearCopy[lang];
 const [optionsLabel,optionsNote]=singleRowCopy[lang];
 const stages=gear.options?.length ? ['options'] : ['purple','target','alternatives'];
 return <section className="workbook-gear" aria-label={t.heading}>
  <h4>{gear.options?.length?optionsLabel:t.heading}</h4>
  <div className="workbook-gear-stages">{stages.filter(stage=>gear[stage].length).map(stage=><div className={`workbook-gear-stage workbook-gear-${stage}`} key={stage}>
   {stage!=='options'&&<h5>{t[stage]}</h5>}
   <ul>{gear[stage].map((item,index)=><li key={`${item}-${index}`}><img src={`${import.meta.env.BASE_URL}guides/officers/gear/workbook/${item}.png`} alt="" width="64" height="64" loading="lazy"/><span><bdi>{groundGearNames[item]?loadoutName(groundGearNames[item],lang):t.items[item]}</bdi></span></li>)}</ul>
  </div>)}</div>
  <p>{gear.options?.length?optionsNote:t.note}</p><p>{t.choice}</p><small>{t.credit}</small>
 </section>;
}
