import {groundWorkbook} from './groundWorkbook';
import {airWorkbook} from './airWorkbook';

// User workbooks A (3) and A_1; original embedded PNGs, unchanged.
// Per user clarification, main-row items are choices, not one item per officer.
const field=(sheet,offset=0,purpleRow=20,targetRow=25)=>({sheet,offset,purpleRow,targetRow,purple:['knife','knuckles'],target:['shotgun','map'],alternatives:['headset','launcher']});
const assault=sheet=>({sheet,offset:0,purpleRow:14,targetRow:19,purple:['knife','tablet'],target:['headset','shield'],alternatives:[]});
export const workbookGear={
 ...Object.fromEntries(Object.entries(airWorkbook).map(([key,{sheet,gearRows}])=>[key,{sheet,rows:gearRows}])),
 ...Object.fromEntries(Object.entries(groundWorkbook).map(([key,{sheet,gear}])=>[key,{sheet,...gear}])),
 'light-f2p:rapier+haymaker':field('Легкий танк '),
 'light-f2p:lady-shadow+rapier':field('Легкий танк ',10),
 'light-p2w:catseye+haymaker':field('Легкий танк ',20,25,30),
 'mbt-field-f2p:lady-shadow+haymaker':field('МВТ F2P'),
 'mbt-field-f2p:lady-shadow+madame-havoc':{...field('МВТ F2P',10),purple:['knife','launcher'],target:['map','launcher'],alternatives:[]},
 'mbt-field-p2w:desert-jaeger+haymaker':{...field('MBT P2W',0,26,31),alternatives:[]},
 'mbt-field-p2w:catseye+haymaker':{...field('MBT P2W',10,26,31),alternatives:[]},
 'mbt-field-p2w:wings-of-wanderlust+lady-shadow':{...field('MBT P2W',20,26,31),target:['launcher','map'],alternatives:[]},
 'mbt-b2b-f2p:iron-cavalier+dawn-anthem':assault('MBT B2B F2P'),
 'mbt-b2b-p2w:the-arbitrator+iron-cavalier':assault('MBT B2B P2W'),
 'mbt-garrison:uncle-ivankov+gridlock-architect':{...assault('MBT Гарнизон'),purpleRow:19,targetRow:24},
 'helicopter-f2p:haymaker+lady-shadow':{...field('Helicopter F2P',0,14,19),alternatives:['launcher','headset']},
 'helicopter-p2w:haymaker+desert-jaeger':{...field('Helicopter P2W'),alternatives:['launcher','headset']},
 'superheavy-b2b-p2w:the-arbitrator+iron-cavalier':assault('SH Tank B2B P2W'),
};
export const workbookGearCopy={
  "ru": {
    "heading": "Снаряжение по этапам",
    "purple": "Фиолетовое · варианты на выбор",
    "target": "Итоговое · варианты на выбор",
    "alternatives": "Альтернативы",
    "note": "Подходящее фиолетовое снаряжение можно использовать, пока итоговый вариант недоступен. Отдельные предметы справа в таблице — дополнительные альтернативы для замены. Все показанные предметы собирать не требуется. Это план SyndiCate; конкретные бонусы проверяй в игре.",
    "credit": "Снаряжение: таблица SyndiCate",
    "skillsPending": "Обучаемые навыки пока не указаны.",
    "roles": "Роли командира и помощника ещё не назначены.",
    "skillsNote": "Навыки перенесены по портретам и расположению иконок. Выбирай целый вариант: смешивание навыков из разных строк автором не задано. Роли командира и помощника не указаны.",
    "items": {
      "knife": "Нож",
      "knuckles": "Кастет",
      "tablet": "Планшет",
      "shotgun": "Дробовик",
      "map": "Карта",
      "launcher": "Ракетница",
      "headset": "Гарнитура",
      "shield": "Щит"
    },
    "choice": "В каждой основной строке два предмета на выбор. Они не назначены по одному каждому офицеру."
  },
  "en": {
    "heading": "Gear progression",
    "purple": "Purple gear · choose an option",
    "target": "Target gear · choose an option",
    "alternatives": "Alternatives",
    "note": "Use suitable purple gear while the target option is unavailable. Items placed separately on the right of the workbook are additional replacements. You do not need to collect every item shown. This is SyndiCate’s plan; check individual bonuses in the game.",
    "credit": "Gear: SyndiCate workbook",
    "skillsPending": "Trained skills have not been specified yet.",
    "roles": "Leader and aide roles have not been assigned yet.",
    "skillsNote": "Skills follow the portraits and icon positions. Choose a complete variant; mixing skills across rows was not specified by the author. Leader and aide roles are unspecified.",
    "items": {
      "knife": "Knife",
      "knuckles": "Knuckles",
      "tablet": "Tablet",
      "shotgun": "Shotgun",
      "map": "Map",
      "launcher": "Rocket launcher",
      "headset": "Headset",
      "shield": "Shield"
    },
    "choice": "Each main row offers two items to choose from. They are not assigned one per officer."
  },
  pl: {
    "heading": "Postęp w sprzęcie",
    "purple": "Fioletowy sprzęt · wybierz opcję",
    "target": "Bieg docelowy · wybierz opcję",
    "alternatives": "Alternatywy",
    "note": "Użyj odpowiedniego fioletowego sprzętu, gdy opcja celu jest niedostępna. Elementy umieszczone osobno po prawej stronie skoroszytu stanowią dodatkowe zamienniki. Nie musisz zbierać wszystkich pokazanych przedmiotów. To jest plan SyndiCate; sprawdź indywidualne bonusy w grze.",
    "credit": "Sprzęt: skoroszyt SyndiCate",
    "skillsPending": "Wyszkolone umiejętności nie zostały jeszcze określone.",
    "roles": "Role lidera i pomocnika nie zostały jeszcze przydzielone.",
    "skillsNote": "Umiejętności odpowiadają portretom i pozycjom ikon. Wybierz kompletny wariant; Autor nie określił mieszania umiejętności w rzędach. Role przywódcy i pomocnika są nieokreślone.",
    "items": {
      "knife": "Nóż",
      "knuckles": "Knykcie",
      "tablet": "Tablet",
      "shotgun": "Strzelba",
      "map": "Mapa",
      "launcher": "Wyrzutnia rakiet",
      "headset": "Zestaw słuchawkowy",
      "shield": "Tarcza"
    },
    "choice": "W każdym głównym rzędzie znajdują się dwie pozycje do wyboru. Nie przydziela się im jednego na funkcjonariusza."
  },
  pt: {
    "heading": "Progressão de marcha",
    "purple": "Equipamento roxo · escolha uma opção",
    "target": "Equipamento alvo · escolha uma opção",
    "alternatives": "Alternativas",
    "note": "Use equipamento roxo adequado enquanto a opção de alvo estiver indisponível. Os itens colocados separadamente à direita da apostila são substituições adicionais. Você não precisa coletar todos os itens mostrados. Este é o plano de SyndiCate; verifique os bônus individuais no jogo.",
    "credit": "Equipamento: pasta de trabalho SyndiCate",
    "skillsPending": "As habilidades treinadas ainda não foram especificadas.",
    "roles": "As funções de líder e assessor ainda não foram atribuídas.",
    "skillsNote": "As habilidades seguem os retratos e as posições dos ícones. Escolha uma variante completa; misturar habilidades entre linhas não foi especificado pelo autor. As funções de líder e assessor não são especificadas.",
    "items": {
      "knife": "Faca",
      "knuckles": "Nós dos dedos",
      "tablet": "Tábua",
      "shotgun": "Espingarda",
      "map": "Mapa",
      "launcher": "Lançador de foguetes",
      "headset": "Fone de ouvido",
      "shield": "Escudo"
    },
    "choice": "Cada linha principal oferece dois itens para você escolher. Eles não são atribuídos um por oficial."
  },
  "vi": {
    "heading": "Trang bị theo giai đoạn",
    "purple": "Trang bị tím · chọn một phương án",
    "target": "Trang bị mục tiêu · chọn một phương án",
    "alternatives": "Lựa chọn thay thế",
    "note": "Dùng trang bị tím phù hợp khi chưa có lựa chọn mục tiêu. Vật phẩm đặt riêng bên phải bảng là lựa chọn thay thế bổ sung. Không cần thu thập mọi vật phẩm được hiển thị. Đây là kế hoạch SyndiCate; kiểm tra thưởng cụ thể trong trò chơi.",
    "credit": "Trang bị: bảng SyndiCate",
    "skillsPending": "Chưa chỉ định kỹ năng huấn luyện.",
    "roles": "Chưa phân vai chỉ huy và trợ lý.",
    "skillsNote": "Kỹ năng theo chân dung và vị trí biểu tượng. Chọn trọn một phương án; tác giả chưa chỉ định việc trộn kỹ năng giữa các hàng. Chưa phân vai chỉ huy và trợ lý.",
    "items": {
      "knife": "Dao",
      "knuckles": "Tay đấm",
      "tablet": "Máy tính bảng",
      "shotgun": "Súng shotgun",
      "map": "Bản đồ",
      "launcher": "Súng phóng tên lửa",
      "headset": "Tai nghe",
      "shield": "Khiên"
    },
    "choice": "Mỗi hàng chính có hai vật phẩm để lựa chọn, không phải mỗi sĩ quan một vật phẩm."
  },
  "ar": {
    "heading": "المعدات حسب المرحلة",
    "purple": "المعدات البنفسجية · اختر بديلاً",
    "target": "المعدات النهائية · اختر بديلاً",
    "alternatives": "البدائل",
    "note": "استخدم المعدات البنفسجية المناسبة حتى يتوفر الخيار النهائي. العناصر المنفصلة على يمين الجدول بدائل إضافية للاستبدال. لا يلزم جمع كل العناصر المعروضة. هذه خطة SyndiCate؛ تحقق من مكافآت كل عنصر داخل اللعبة.",
    "credit": "المعدات: جدول SyndiCate",
    "skillsPending": "لم تُحدد المهارات المدرّبة بعد.",
    "roles": "لم تُحدد أدوار القائد والمساعد بعد.",
    "skillsNote": "تتبع المهارات الصور ومواضع الأيقونات. اختر بديلاً كاملاً؛ لم يحدد المؤلف مزج المهارات بين الصفوف. لم تُحدد أدوار القائد والمساعد.",
    "items": {
      "knife": "سكين",
      "knuckles": "قبضة معدنية",
      "tablet": "جهاز لوحي",
      "shotgun": "بندقية خرطوش",
      "map": "خريطة",
      "launcher": "قاذفة صواريخ",
      "headset": "سماعة",
      "shield": "درع"
    },
    "choice": "يقدم كل صف رئيسي عنصرين للاختيار بينهما، وليس عنصراً مخصصاً لكل ضابط."
  }
};
