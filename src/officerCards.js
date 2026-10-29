import {baseBufferLoadout} from './baseBuffer';
import {vanyaLoadouts} from './vanyaBuilds';

export const cardCopy = {
  ru:{requirements:'Комплектация',leader:'Командир',aide:'Помощник',officer:'Офицер',skills:'Обучаемые навыки',gear:'Снаряжение',pending:'Навыки и снаряжение пока не указаны.',rolesNote:'Роли командира и помощника для этой пары ещё не назначены.',reference:'Образец SyndiCate',referenceNote:'Комплектация по образцу SyndiCate. Уровень 40 показан на скриншоте; подпись допускает любой уровень снаряжения.',example:'Иллюстрация',exampleLevel:'На примере: 40',types:{infantry:'Пехота',light:'Лёгкий танк',mbt:'Основной боевой танк',superheavy:'Сверхтяжёлый танк',helicopter:'Вертолёт',howitzer:'Гаубица',rocket:'Ракетная установка',antitank:'Противотанковое орудие'},modes:{attack:'Атакующая',tank:'Танкующая',field:'Поле',b2b:'B2B · штурм',garrison:'Гарнизон'}},
  en:{requirements:'Loadout',leader:'Leader',aide:'Aide',officer:'Officer',skills:'Trained skills',gear:'Gear',pending:'Skills and gear have not been specified yet.',rolesNote:'Leader and aide roles have not been assigned for this pair.',reference:'SyndiCate reference',referenceNote:'Loadout from the SyndiCate reference. Level 40 appears in the screenshot; its caption allows any gear level.',example:'Illustration',exampleLevel:'Example: Lv 40',types:{infantry:'Infantry',light:'Light Tank',mbt:'Main Battle Tank',superheavy:'Super Heavy Tank',helicopter:'Helicopter',howitzer:'Howitzer',rocket:'Rocket Launcher',antitank:'Anti-Tank Gun'},modes:{attack:'Attacking',tank:'Tanking',field:'Field',b2b:'B2B · assault',garrison:'Garrison'}},
  vi:{requirements:'Trang bị đội hình',leader:'Chỉ huy',aide:'Trợ lý',officer:'Sĩ quan',skills:'Kỹ năng huấn luyện',gear:'Trang bị',pending:'Chưa chỉ định kỹ năng và trang bị.',rolesNote:'Chưa phân vai chỉ huy và trợ lý cho cặp này.',reference:'Mẫu SyndiCate',referenceNote:'Trang bị theo mẫu SyndiCate. Ảnh hiển thị cấp 40; chú thích cho phép trang bị ở bất kỳ cấp nào.',example:'Minh họa',exampleLevel:'Ví dụ: cấp 40',types:{infantry:'Bộ binh',light:'Tăng nhẹ',mbt:'Tăng chiến đấu chủ lực',superheavy:'Tăng siêu nặng',helicopter:'Trực thăng',howitzer:'Lựu pháo',rocket:'Bệ phóng tên lửa',antitank:'Pháo chống tăng'},modes:{attack:'Tấn công',tank:'Chống chịu',field:'Ngoài đồng',b2b:'B2B · công thành',garrison:'Đồn trú'}},
  ar:{requirements:'التجهيز',leader:'القائد',aide:'المساعد',officer:'الضابط',skills:'المهارات المدرّبة',gear:'المعدات',pending:'لم تُحدّد المهارات والمعدات بعد.',rolesNote:'لم يُحدّد دور القائد والمساعد لهذا الزوج بعد.',reference:'نموذج SyndiCate',referenceNote:'التجهيز من نموذج SyndiCate. يظهر المستوى 40 في الصورة؛ ويسمح التعليق بأي مستوى للمعدات.',example:'صورة توضيحية',exampleLevel:'مثال: مستوى 40',types:{infantry:'المشاة',light:'الدبابة الخفيفة',mbt:'دبابة القتال الرئيسية',superheavy:'الدبابة فائقة الثقل',helicopter:'المروحية',howitzer:'الهاوتزر',rocket:'راجمة الصواريخ',antitank:'مدفع مضاد للدبابات'},modes:{attack:'هجومية',tank:'تحمّل الضرر',field:'الميدان',b2b:'B2B · هجوم',garrison:'الحامية'}},
};

export const unitExamples={infantry:'SR-556',light:'M6 Linebacker',mbt:'Leopard 2',superheavy:'P.1500 Monster',helicopter:'AH-64E Apache',howitzer:'M777',rocket:'TOS-2 Tosochka',antitank:'PzH-2000'};

export function cardContext(groupId='') {
  const type=['light','mbt','superheavy','helicopter','howitzer','rocket','antitank'].find(type=>groupId.startsWith(type))||'infantry';
  const mode=['garrison','b2b','field','attack','tank'].find(mode=>groupId.split('-').includes(mode));
  return {type,mode};
}

// Coordinates reference the unchanged user JPEGs, never generated replacements.
const icon=(name,atlas,x,y,size)=>({name,atlas,x,y,size});
export const referenceLoadouts={
  ...vanyaLoadouts,
  'helicopter-garrison:gridlock-architect+uncle-ivankov':baseBufferLoadout,
  'superheavy-b2b-f2p:iron-cavalier+dawn-anthem':{
    source:'superheavy',
    officers:[
      {skills:[icon('Ruthless Outlaw','superheavy',118,732,70),icon('Sweetheart of the Troops','superheavy',118,821,70)],gear:icon('Bulwark Shield','superheavy',118,972,70)},
      {skills:[icon('Absolute Justice','superheavy',554,732,70),icon('Custom Warhead','superheavy',554,821,70)],gear:icon('Omni Keycard','superheavy',554,972,70)},
    ],
  },
  'mbt-field-f2p:lady-shadow+madame-havoc':{
    source:'skill',
    officers:[
      {skills:[icon('Adrenalin','skill',112,751,64),icon("Highlander’s Grit",'skill',112,841,64)],gear:icon('Sheriff Shotgun','skill',112,978,64)},
      {skills:[icon('Invictus','skill',534,751,64),icon('Dual Dominance','skill',534,841,64)],gear:icon('Sand Table Kit','skill',534,978,64)},
    ],
  },
};

export const referenceAtlases={superheavy:{file:'superheavy-reference.jpg',width:1026,height:1280},skill:{file:'skill-reference.jpg',width:974,height:1280}};
