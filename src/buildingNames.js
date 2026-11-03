const labels = {
  ru: ['Командный центр','Казарма','Инженерный цех','Исследовательский центр','Сторожевая башня','Авиабаза','Казарма резерва','Офис связи альянса','Стена','Казначейство','Сталелитейный завод','Нефтехранилище','Ангар','Зенитная батарея','Верфь','Укреплённая стена'],
  pl: ['Centrum dowodzenia','Koszary','Centrum inżynieryjne','Centrum badawcze','Wieża strażnicza','Baza lotnicza','Koszary rezerwy','Biuro łącznikowe sojuszu','Mur','Skarbiec','Huta stali','Magazyn ropy','Hangar','Bateria przeciwlotnicza','Stocznia','Ufortyfikowany mur'],
  pt: ['Centro de comando','Quartel','Centro de engenharia','Centro de pesquisa','Torre de vigia','Base aérea','Quartel da reserva','Escritório de ligação da aliança','Muralha','Tesouraria','Siderúrgica','Reserva de petróleo','Hangar','Bateria antiaérea','Estaleiro','Muralha fortificada'],
  vi: ['Trung tâm chỉ huy','Doanh trại','Trung tâm kỹ thuật','Trung tâm nghiên cứu','Tháp canh','Căn cứ không quân','Doanh trại dự bị','Văn phòng liên lạc liên minh','Tường thành','Kho bạc','Nhà máy thép','Kho dầu thô','Nhà chứa máy bay','Trận địa phòng không','Xưởng đóng tàu','Tường thành kiên cố'],
  ar: ['مركز القيادة','ثكنة','المركز الهندسي','مركز الأبحاث','برج المراقبة','القاعدة الجوية','ثكنة الاحتياط','مكتب اتصال التحالف','السور','الخزانة','مصنع الصلب','مخزن النفط الخام','حظيرة الطائرات','بطارية الدفاع الجوي','حوض بناء السفن','السور المحصن'],
};

// IDs come from the same cost table as buildingCosts.json.
const groups = [
  ['1'], ['2','3','4','5','6'], ['7'], ['8'], ['9'], ['10'], ['11'], ['12'], ['13'],
  ['14','15','16','17'], ['18','19','20','21'], ['22','23','24','25'],
  ['26','27','28'], ['29'], ['30','31','32'], ['33','34','35','36'],
];
const roman = ['', ' II', ' III', ' IV'];
const numberedGroups = new Set([1,12,14]);
const names = Object.fromEntries(Object.entries(labels).map(([lang, translated]) => [
  lang,
  Object.fromEntries(groups.flatMap((ids, group) => ids.map((id, index) => [
    id,
    translated[group] + (numberedGroups.has(group) ? ' ' + (index + 1) : roman[index]),
  ]))),
]));

export function buildingName(building, lang) {
  return names[lang]?.[building.id] ?? building.name;
}
