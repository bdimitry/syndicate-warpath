const labels = {
  ru: ['Командный центр','Казарма','Инженерный цех','Исследовательский центр','Сторожевая башня','Авиабаза','Казарма резерва','Офис связи альянса','Стена','Казначейство','Сталелитейный завод','Нефтехранилище','Ангар','Зенитная батарея','Верфь','Укреплённая стена'],
  pl: ['Centrum dowodzenia','Koszary','Centrum inżynieryjne','Centrum badawcze','Wieża strażnicza','Baza lotnicza','Koszary rezerwy','Biuro łącznikowe sojuszu','Mur','Skarbiec','Huta stali','Magazyn ropy','Hangar','Bateria przeciwlotnicza','Stocznia','Ufortyfikowany mur'],
  pt: ['Centro de comando','Quartel','Centro de engenharia','Centro de pesquisa','Torre de vigia','Base aérea','Quartel da reserva','Escritório de ligação da aliança','Muralha','Tesouraria','Siderúrgica','Reserva de petróleo','Hangar','Bateria antiaérea','Estaleiro','Muralha fortificada'],
  vi: ['Trung tâm chỉ huy','Doanh trại','Trung tâm kỹ thuật','Trung tâm nghiên cứu','Tháp canh','Căn cứ không quân','Doanh trại dự bị','Văn phòng liên lạc liên minh','Tường thành','Kho bạc','Nhà máy thép','Kho dầu thô','Nhà chứa máy bay','Trận địa phòng không','Xưởng đóng tàu','Tường thành kiên cố'],
  ar: ['مركز القيادة','ثكنة','المركز الهندسي','مركز الأبحاث','برج المراقبة','القاعدة الجوية','ثكنة الاحتياط','مكتب اتصال التحالف','السور','الخزانة','مصنع الصلب','مخزن النفط الخام','حظيرة الطائرات','بطارية الدفاع الجوي','حوض بناء السفن','السور المحصن'],
};

// The cost table reuses some IDs across buildings with identical cost schedules.
const groups = [
  ['Command Center'], ['No.1 Barracks','No.2 Barracks','No.3 Barracks','No.4 Barracks','No.5 Barracks'],
  ['Engineering Center'], ['Research Center'], ['Watchtower'], ['Air Force Base'],
  ['Reserves Barracks'], ['Alliance Liaison Office'], ['Wall'],
  ['Treasury','TreasuryⅡ','Treasury Ⅲ','TreasuryⅣ'],
  ['Steelworks','SteelworksⅡ','SteelworksⅢ','SteelworksⅣ'],
  ['Crude Oil Reserve','Crude Oil ReserveⅡ','Crude Oil ReserveⅢ','Crude Oil ReserveⅣ'],
  ['Hangar 1','Hangar 2','Hangar 3'], ['AA Firebase'],
  ['No.1 Shipyard','No.2 Shipyard','No.3 Shipyard'],
  ['Fortified Wall','Fortified WallⅡ','Fortified Wall Ⅲ','Fortified Wall Ⅳ'],
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
  return names[lang]?.[building.name] ?? building.name;
}
