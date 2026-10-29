import { officers } from './officers';
import { tanks } from './tanks';
import {artilleryExpansion} from './artilleryExpansion';
import {mergedArtilleryCopy} from './mergedArtillery';

// Preserve the alliance list and pair order; no spending category was assigned to garrisons.
export const artilleryGroups = [
  {id:'artillery-b2b-f2p',aliases:['howitzer-b2b-f2p'],category:'f2p',pairs:[['futurus-venturer','eye-of-providence']]},
  {id:'artillery-b2b-p2w',aliases:['howitzer-b2b-p2w'],category:'p2w',pairs:[['silent-thunder','eye-of-providence'],['silent-thunder','madame-vindicta']]},
  {id:'artillery-garrison',aliases:['howitzer-garrison'],category:null,pairs:[['steel-angel','stinger-fist'],['argent-flame','stinger-fist'],['stinger-fist','red-heat']]},
  {id:'artillery-field-f2p',aliases:['rocket-field-f2p'],category:'f2p',pairs:[['lady-shadow','champion-of-the-people'],['frostfire','champion-of-the-people']]},
  {id:'artillery-field-p2w',aliases:['howitzer-field-p2w','rocket-field-p2w'],category:'p2w',pairs:[['red-heat','fighting-falcon'],['silent-thunder','madame-vindicta'],['silent-thunder','champion-of-the-people']]},
  {id:'antitank-garrison',category:null,pairs:[['steel-angel','terrain-tactician'],['steel-angel','maestro'],['steel-angel','lady-shadow']]},
];
export const artilleryOfficers = Object.fromEntries([...new Set(artilleryGroups.flatMap(group=>group.pairs.flat()))].map(id=>[id,officers[id]]));

const localized = {
  ru: {
    title:'Офицеры для артиллерии',intro:'11 пар SyndiCate для гаубиц, ракетных установок и противотанковых орудий. Раздельно — штурм базы, поле и гарнизон; с вариантами F2P и P2W.',tag:'ОФИЦЕРЫ / АРТИЛЛЕРИЯ',
    headings:['Выбери задачу артиллерии','Гаубица · B2B · F2P','Гаубица · B2B · P2W','Гаубица · гарнизон','Ракетная установка · поле · F2P','Ракетная установка · поле · P2W','Противотанковое орудие · гарнизон','Как выбрать пару','Следующие разделы','Источники'],
    overview:'B2B для гаубицы здесь — атака вражеской базы. Поле — бой с войсками на карте. Гарнизон — защита своей базы. Для гарнизонных сборок в списке не задана категория F2P/P2W.',
    overviewWhy:'Урон по укреплениям, полевые усиления и бонусы своего гарнизона включаются в разных условиях. Правильный выбор задачи помогает использовать навыки пары, а не оценивать её по неподходящему бою.',
    groupIntros:['F2P-пара гаубицы для штурма базы.','Два P2W-варианта гаубицы для B2B.','Две пары гаубицы для защиты своей базы.','Два F2P-варианта ракетной установки в поле.','Два P2W-варианта ракетной установки в поле.','Две пары противотанкового орудия для своего гарнизона.'],
    groupWhys:['Совпадающие бонусы против укреплений направляют вложения на штурмовую задачу. F2P — категория плана альянса; доступность офицеров проверяй в своём аккаунте.','Выбирай по прокачке и цели: осадные усиления и критические навыки дают разные преимущества. Стоимость офицера не заменяет развитых навыков.','Размещение в своём гарнизоне включает специальные усиления урона и защиты. Не путай их с бонусами при атаке чужой базы.','Дальность и возможность продолжать стрелять помогают реализовать урон. Не подставляй артиллерию под фокус только ради усиления одного удара.','Критические и дистанционные эффекты зависят от позиции и открытых навыков. Сравнивай пары при одинаковой дистанции и прокачке.','Здесь важны и ответный огонь, и ослабление атакующей цели. Гарнизонные эффекты проверяй в своей базе, а не только в полевых отчётах.'],
    reasons:[
      ['Оба офицера усиливают урон по укреплениям; Искатель поддерживает цикл навыков, Глаз — артиллерийскую огневую мощь. Это общий осадный план. Дополнительная огневая мощь Глаза зависит от боя вне активной территории альянса.'],
      ['Глаз добавляет осадные усиления, Гром — артиллерийский урон и критические механики. Пара соединяет давление по базе с уроном навыка; бонусы Грома с условием «в поле» и дистанцией оценивай отдельно по условиям боя.','Виндикта повышает шанс критов навыков, Гром — их критический урон, поэтому механики дополняют друг друга. Дальность Виндикты требует пробуждения; дополнительные бонусы «в поле» не считай автоматически гарнизонными.'],
      ['У Ангела и Кулака есть усиления при размещении в гарнизоне. Ангел ослабляет цель, Кулак поддерживает урон и сопротивление базы. Бонус Ангела по щитам требует пробуждения, а дополнительной цели для урона — наличия противника в радиусе.','Пламя даёт артиллерийскую огневую мощь и гарнизонный урон; Кулак добавляет свой гарнизонный урон и защиту базы. Бонус Пламени к навыку помощника работает именно в роли командира: эту позицию нельзя считать взаимозаменяемой.'],
      ['Госпожа теней усиливает атаки и навыки, Защитник народа добавляет артиллерийскую огневую мощь и усиление навыков. Дальность Защитника требует пробуждения; его отдельный гарнизонный бонус не является полевым.','Морозный огонь усиливает артиллерию и получает выгоду от дистанции; Защитник добавляет огневую мощь и усиление навыков. Его дальность после пробуждения поддерживает позиционную игру. Не считай защитные срабатывания Морозного огня постоянными.'],
      ['Гром даёт дистанционное и критическое давление, Защитник — артиллерийскую огневую мощь, усиление навыков и дальность после пробуждения. Это помогает работать издалека; гарнизонный бонус Защитника в поле не включается.','Шанс критов навыков Виндикты дополняет критический урон Грома. В поле работают и соответствующие полевые усиления. Дополнительная дальность требует пробуждения; итоговую прибавку дальности отряд получает не более одной клетки.'],
      ['Ангел усиливает гарнизонный урон и ослабляет цель; Говорящая с ветром добавляет пробивной урон, темп стрельбы и артиллерийскую защиту. Её активный навык получает бонус от брони цели — это условие, а не одинаковый прирост против любого врага.','Ангел даёт гарнизонные усиления, Маэстро поддерживает пробивной урон и снижает сопротивление помеченной цели. Его метки и горение полезны против плотной группы, но требуют попаданий, меток и врагов в радиусе.'],
    ],
    checks:['Выбери гаубицу, ракетную установку или противотанковое орудие и нужный режим.','Проверь навыки и пробуждение. Для Серебристого пламени отдельно учти роль командира.','Сравнивай одинаковые цели, детали и дистанцию. Прибавки дальности не складывай сверх лимита одной клетки.'],
    chooseWhy:'Так ты сравниваешь пользу пары, а не разницу позиции или экипировки. Открытый ключевой навык и работающие условия важнее перехода на новую, но недокачанную сборку.',
    armorLink:'Танки и вертолёты →',
  },
  en: {
    title:'Artillery officer pairings',intro:'11 SyndiCate pairs for Howitzers, Rocket Launchers and Anti-Tank Guns. Separate Base assault, field and garrison roles, with F2P and P2W options.',tag:'OFFICERS / ARTILLERY',
    headings:['Choose the artillery job','Howitzer · B2B · F2P','Howitzer · B2B · P2W','Howitzer · garrison','Rocket Launcher · field · F2P','Rocket Launcher · field · P2W','Anti-Tank Gun · garrison','Choose your pair','Upcoming sections','Sources'],
    overview:'B2B for Howitzers here means attacking an enemy Base. Field means fighting map troops; garrison means defending your own Base. No F2P/P2W category was assigned to garrison compositions.',
    overviewWhy:'Fortification damage, field boosts and your own garrison bonuses have different conditions. Matching the role lets you use the pair’s skills instead of judging it in an unsuitable fight.',
    groupIntros:['An F2P Howitzer pair for Base assaults.','Two P2W Howitzer options for B2B.','Two Howitzer pairs for your own Base defense.','Two F2P field Rocket Launcher options.','Two P2W field Rocket Launcher options.','Two Anti-Tank Gun pairs for your own garrison.'],
    groupWhys:['Matching fortification bonuses focus investment on siege work. F2P is an alliance planning category; check access on your account.','Choose by development and target: siege scaling and skill crits offer different strengths. Officer cost does not replace developed skills.','Your own garrison assignment activates dedicated damage and defense bonuses. These differ from attacking another Base.','Range and uninterrupted fire help realize damage. Do not expose Artillery to focused fire simply to improve one hit.','Crit and distance effects depend on positioning and unlocked skills. Compare pairs at the same distance and development.','Return fire and weakening attackers both matter. Test garrison effects in your own Base, not only in field reports.'],
    reasons:[
      ['Both support fortification damage; Futurus supports skill cycling and Eye adds Artillery Firepower. This aligns their siege role. Eye’s additional Firepower depends on fighting outside Active Alliance Territory.'],
      ['Eye adds siege scaling; Thunder adds Artillery damage and crit mechanics. The pair combines Base pressure with skill damage; assess Thunder’s field-only and distance conditions separately.','Vindicta supports skill crit chance and Thunder supports critical damage, so their mechanics align. Vindicta’s range needs awakening; do not automatically treat field-only benefits as garrison bonuses.'],
      ['Both have garrison boosts. Angel weakens targets; Fist supports damage and Base resistance. Angel’s shield-specific effect requires awakening, and additional-target damage requires an enemy within range.','Flame adds Artillery Firepower and garrison damage; Fist adds garrison damage and Base defense. Flame’s Aide skill boost specifically requires him to be Troop Captain, so the positions are not interchangeable for that effect.'],
      ['Lady Shadow boosts attacks and skills; Champion adds Artillery Firepower and skill boost. Champion’s range requires awakening; her separate garrison bonus is not a field benefit.','Frostfire supports Artillery and benefits from distance; Champion adds Firepower and skill boost. Her awakened range supports positioning. Frostfire’s defensive triggers are not permanent protection.'],
      ['Thunder brings distance and critical pressure; Champion adds Artillery Firepower, skill boost and awakened range. This supports ranged fighting; Champion’s garrison bonus does not activate in the field.','Vindicta’s skill crit chance complements Thunder’s critical damage. Their field boosts also apply in the field. Additional range requires awakening; the troop’s total range increase is capped at one Map Grid.'],
      ['Angel supports garrison damage and weakens targets; Terrain Tactician adds penetration damage, firing tempo and Artillery defense. Her active scales with target armor, not an identical gain against every enemy.','Angel supplies garrison benefits; Maestro supports penetration damage and lowers stained-target resistance. Stains and Burning reward clustered enemies but require attacks, marks and targets within range.'],
    ],
    checks:['Choose Howitzer, Rocket Launcher or Anti-Tank Gun and the combat mode.','Check skills and awakening. Account separately for Argent Flame’s Troop Captain role.','Compare the same targets, parts and distance. Do not stack range increases beyond the one-Map-Grid cap.'],
    chooseWhy:'This compares pairing value rather than positioning or gear differences. Unlocked key skills and fulfilled conditions matter more than switching to a new but unfinished composition.',
    armorLink:'Tanks and Helicopters →',
  },
  vi: {
    title:'Cặp sĩ quan pháo binh',intro:'11 cặp SyndiCate cho lựu pháo, bệ phóng tên lửa và pháo chống tăng. Tách nhiệm vụ công thành, ngoài đồng và đồn trú, với lựa chọn F2P và P2W.',tag:'SĨ QUAN / PHÁO BINH',
    headings:['Chọn nhiệm vụ pháo binh','Lựu pháo · B2B · F2P','Lựu pháo · B2B · P2W','Lựu pháo · đồn trú','Bệ phóng tên lửa · ngoài đồng · F2P','Bệ phóng tên lửa · ngoài đồng · P2W','Pháo chống tăng · đồn trú','Cách chọn cặp','Các mục tiếp theo','Nguồn'],
    overview:'B2B cho lựu pháo ở đây là đánh căn cứ địch. Ngoài đồng là đánh quân trên bản đồ; đồn trú là bảo vệ căn cứ của bạn. Các cặp đồn trú chưa được gán F2P/P2W.',
    overviewWhy:'Sát thương công sự, thưởng ngoài đồng và thưởng đồn trú có điều kiện khác nhau. Chọn đúng nhiệm vụ giúp dùng kỹ năng thực sự hoạt động, thay vì đánh giá trong trận không phù hợp.',
    groupIntros:['Cặp lựu pháo F2P công thành.','Hai lựa chọn lựu pháo P2W cho B2B.','Hai cặp lựu pháo phòng thủ căn cứ của bạn.','Hai lựa chọn tên lửa F2P ngoài đồng.','Hai lựa chọn tên lửa P2W ngoài đồng.','Hai cặp pháo chống tăng cho đồn trú của bạn.'],
    groupWhys:['Thưởng công sự cùng hướng giúp tập trung đầu tư vào công thành. F2P là nhóm kế hoạch liên minh; kiểm tra khả năng sở hữu trên tài khoản.','Chọn theo nâng cấp và mục tiêu: thưởng công thành và chí mạng kỹ năng có lợi thế khác nhau. Giá sĩ quan không thay kỹ năng đã phát triển.','Đồn trú của bạn kích hoạt thưởng sát thương và phòng thủ riêng. Khác với đánh căn cứ địch.','Tầm bắn và tiếp tục khai hỏa giúp tạo sát thương. Đừng để pháo binh bị tập trung hỏa lực chỉ để tăng một đòn đánh.','Chí mạng và khoảng cách phụ thuộc vị trí và kỹ năng đã mở. So các cặp cùng khoảng cách và nâng cấp.','Bắn trả và làm yếu quân tấn công đều quan trọng. Thử hiệu ứng đồn trú trong căn cứ của bạn, không chỉ báo cáo ngoài đồng.'],
    reasons:[
      ['Cả hai hỗ trợ sát thương công sự; Futurus hỗ trợ chu kỳ kỹ năng, Eye thêm hỏa lực pháo binh. Cùng phục vụ công thành. Hỏa lực thêm của Eye phụ thuộc giao tranh ngoài lãnh thổ liên minh đang hoạt động.'],
      ['Eye thêm thưởng công thành; Thunder thêm sát thương pháo binh và chí mạng. Cặp kết hợp áp lực lên căn cứ với sát thương kỹ năng; xét riêng điều kiện ngoài đồng và khoảng cách của Thunder.','Vindicta tăng cơ hội chí mạng kỹ năng, Thunder tăng sát thương chí mạng nên bổ trợ nhau. Tầm bắn Vindicta cần thức tỉnh; không tự coi thưởng ngoài đồng là thưởng đồn trú.'],
      ['Cả hai có thưởng đồn trú. Angel làm yếu mục tiêu; Fist hỗ trợ sát thương và kháng cho căn cứ. Hiệu ứng riêng với khiên của Angel cần thức tỉnh; sát thương mục tiêu thêm cần có địch trong tầm.','Flame thêm hỏa lực pháo binh và sát thương đồn trú; Fist thêm sát thương đồn trú và phòng thủ căn cứ. Thưởng kỹ năng trợ lý của Flame yêu cầu làm chỉ huy, nên không đổi chỗ tùy ý cho hiệu ứng này.'],
      ['Lady Shadow tăng đòn đánh và kỹ năng; Champion thêm hỏa lực pháo binh và tăng kỹ năng. Tầm bắn Champion cần thức tỉnh; thưởng đồn trú riêng của cô không phải thưởng ngoài đồng.','Frostfire hỗ trợ pháo binh và hưởng lợi từ khoảng cách; Champion thêm hỏa lực và tăng kỹ năng. Tầm bắn khi thức tỉnh hỗ trợ chọn vị trí. Hiệu ứng phòng thủ Frostfire không thường trực.'],
      ['Thunder tạo áp lực theo khoảng cách và chí mạng; Champion thêm hỏa lực pháo binh, tăng kỹ năng và tầm bắn khi thức tỉnh. Hỗ trợ đánh xa; thưởng đồn trú Champion không bật ngoài đồng.','Cơ hội chí mạng kỹ năng Vindicta bổ trợ sát thương chí mạng Thunder. Thưởng ngoài đồng cũng hoạt động trong chế độ này. Tầm bắn thêm cần thức tỉnh; tổng tăng tầm của đội bị giới hạn một ô bản đồ.'],
      ['Angel hỗ trợ sát thương đồn trú và làm yếu mục tiêu; Terrain Tactician thêm sát thương xuyên giáp, nhịp bắn và phòng thủ pháo binh. Kỹ năng chủ động phụ thuộc giáp mục tiêu, không tăng bằng nhau trước mọi địch.','Angel cho thưởng đồn trú; Maestro hỗ trợ xuyên giáp và giảm kháng mục tiêu có dấu sơn. Dấu và cháy hữu ích trước địch tụ đông nhưng cần đòn đánh, dấu và mục tiêu trong tầm.'],
    ],
    checks:['Chọn lựu pháo, tên lửa hoặc pháo chống tăng và chế độ chiến đấu.','Kiểm tra kỹ năng, thức tỉnh và riêng vai trò chỉ huy của Argent Flame.','So cùng mục tiêu, phụ tùng và khoảng cách. Không cộng tầm bắn quá giới hạn một ô bản đồ.'],
    chooseWhy:'Nhờ vậy bạn so hiệu quả cặp thay vì vị trí hay trang bị. Kỹ năng quan trọng đã mở và đúng điều kiện hữu ích hơn chuyển sang cặp mới chưa hoàn thiện.',
    armorLink:'Xe tăng và trực thăng →',
  },
  ar: {
    title:'تشكيلات ضباط المدفعية',intro:'11 زوجاً من SyndiCate للهاوتزر وراجمات الصواريخ والمدافع المضادة للدبابات. مهام منفصلة للهجوم على القواعد والميدان والحامية، مع خيارات F2P وP2W.',tag:'الضباط / المدفعية',
    headings:['اختر مهمة المدفعية','الهاوتزر · B2B · F2P','الهاوتزر · B2B · P2W','الهاوتزر · الحامية','راجمة الصواريخ · الميدان · F2P','راجمة الصواريخ · الميدان · P2W','مدفع مضاد للدبابات · الحامية','كيف تختار الزوج','الأقسام القادمة','المصادر'],
    overview:'B2B للهاوتزر هنا يعني مهاجمة قاعدة العدو. الميدان هو قتال القوات على الخريطة؛ والحامية هي الدفاع عن قاعدتك. لم تُحدّد فئات F2P/P2W لأزواج الحامية.',
    overviewWhy:'لضرر التحصينات وتعزيزات الميدان ومكافآت حاميتك شروط مختلفة. اختيار المهمة المناسبة يستفيد من مهارات الزوج بدلاً من تقييمه في معركة غير مناسبة.',
    groupIntros:['زوج هاوتزر F2P للهجوم على القواعد.','خياران P2W للهاوتزر في B2B.','زوجان للهاوتزر لحماية قاعدتك.','خياران F2P لراجمات الصواريخ في الميدان.','خياران P2W لراجمات الصواريخ في الميدان.','زوجان للمدفع المضاد للدبابات في حاميتك.'],
    groupWhys:['مكافآت التحصينات المتوافقة تركّز الاستثمار على الحصار. F2P فئة في خطة التحالف؛ تحقق من التوفر في حسابك.','اختر بحسب التطوير والهدف: لتعزيزات الحصار والضربات الحرجة للمهارات مزايا مختلفة. تكلفة الضابط لا تعوض المهارات المطوّرة.','التمركز في حاميتك يفعّل تعزيزات ضرر ودفاع مخصصة. تختلف عن مهاجمة قاعدة أخرى.','المدى واستمرار إطلاق النار يساعدان على تحقيق الضرر. لا تعرّض المدفعية لتركيز النيران لتحسين ضربة واحدة فقط.','تأثيرات الضربات الحرجة والمسافة تعتمد على التمركز والمهارات المفتوحة. قارن الأزواج بالمسافة والتطوير نفسيهما.','النيران المضادة وإضعاف المهاجمين مهمان. اختبر تأثيرات الحامية في قاعدتك، وليس في تقارير الميدان وحدها.'],
    reasons:[
      ['يدعم الاثنان ضرر التحصينات؛ ويدعم Futurus دورة المهارات ويضيف Eye قوة نارية للمدفعية. تتوافق مهمة الحصار. قوة Eye النارية الإضافية تعتمد على القتال خارج منطقة التحالف النشطة.'],
      ['يضيف Eye تعزيزات الحصار؛ ويضيف Thunder ضرر المدفعية وآليات الضربات الحرجة. يجمع الزوج ضغط القاعدة وضرر المهارة؛ وقيّم شروط Thunder الخاصة بالميدان والمسافة منفصلة.','تدعم Vindicta احتمال الضربات الحرجة للمهارات ويدعم Thunder ضررها الحرج. مدى Vindicta يحتاج الإيقاظ؛ ولا تعتبر تعزيزات الميدان مكافآت للحامية تلقائياً.'],
      ['لدى الاثنين تعزيزات للحامية. تضعف Angel الهدف ويدعم Fist الضرر ومقاومة القاعدة. تأثير Angel الخاص بالدروع يحتاج الإيقاظ، والضرر لهدف إضافي يحتاج عدواً ضمن المدى.','يضيف Flame قوة نارية للمدفعية وضرر حامية؛ ويضيف Fist ضرر حامية ودفاع القاعدة. تعزيز Flame لمهارة المساعد يتطلب دوره كقائد، فلا يمكن تبديل الموقعين لهذا التأثير.'],
      ['تعزز Lady Shadow الهجمات والمهارات؛ وتضيف Champion قوة نارية للمدفعية وتعزيز مهارات. مدى Champion يحتاج الإيقاظ؛ ومكافأتها المنفصلة للحامية ليست تعزيزاً ميدانياً.','يدعم Frostfire المدفعية ويستفيد من المسافة؛ وتضيف Champion قوة نارية وتعزيز مهارات. مداها بعد الإيقاظ يدعم التمركز. تفعيلات دفاع Frostfire ليست حماية دائمة.'],
      ['يوفر Thunder ضغطاً بالمسافة والضربات الحرجة؛ وتضيف Champion قوة نارية للمدفعية وتعزيز مهارات ومدى بعد الإيقاظ. يدعم ذلك القتال البعيد؛ ولا تتفعّل مكافأة حامية Champion في الميدان.','يكمل احتمال ضربات مهارات Vindicta الحرجة ضرر Thunder الحرج. تعمل تعزيزات الميدان أيضاً في هذا النمط. المدى الإضافي يحتاج الإيقاظ؛ وزيادة مدى الوحدة الإجمالية محدودة بمربع خريطة واحد.'],
      ['تدعم Angel ضرر الحامية وتضعف الهدف؛ وتضيف Terrain Tactician ضرر الاختراق ووتيرة إطلاق النار ودفاع المدفعية. مهارتها النشطة تتأثر بدرع الهدف، وليست زيادة متساوية ضد كل عدو.','تمنح Angel مزايا الحامية؛ ويدعم Maestro ضرر الاختراق ويخفض مقاومة الهدف الملطخ. تفيد العلامات والحرق ضد تجمعات الأعداء، لكنها تحتاج هجمات وعلامات وأهدافاً ضمن المدى.'],
    ],
    checks:['اختر الهاوتزر أو راجمة الصواريخ أو المدفع المضاد للدبابات ونمط القتال.','تحقق من المهارات والإيقاظ ودور Argent Flame كقائد بشكل منفصل.','قارن الأهداف والقطع والمسافة نفسها. لا تجمع زيادات المدى بما يتجاوز مربع خريطة واحداً.'],
    chooseWhy:'هكذا تقارن فائدة الزوج بدلاً من اختلاف التمركز أو المعدات. المهارات الأساسية المفتوحة وشروطها المتحققة أهم من الانتقال إلى تشكيل جديد غير مكتمل.',
    armorLink:'الدبابات والمروحيات ←',
  },
};

export const artillery = Object.fromEntries(Object.entries(localized).map(([lang,t])=>{
  const extra=artilleryExpansion[lang], merged=mergedArtilleryCopy[lang];
  const result={...tanks[lang],...t,intro:t.intro.replace(/^\d+ /,`${artilleryGroups.reduce((total,group)=>total+group.pairs.length,0)} `),headings:[t.headings[0],...merged.headings,...t.headings.slice(7)],overview:merged.overview,overviewWhy:`${t.overviewWhy} ${merged.why}`,groupIntros:merged.intros,groupWhys:[...t.groupWhys],reasons:t.reasons.map(reasons=>[...reasons])};
  result.reasons[0][0]=extra.f2pWhy;result.reasons[1][1]=extra.loungeWhy;
  result.reasons[2].push(extra.splashWhy);result.reasons[5].push(extra.atgWhy);
  result.reasons[4]=[extra.burnWhy,extra.loungeWhy,t.reasons[4][0]];
  result.groupWhys[4]=`${t.groupWhys[4]} ${extra.why}`;
  return [lang,result];
}));
