import { officers } from './officers';

export const infantryOfficers = Object.fromEntries(['rogue-edge','lady-shadow','herald-of-peace','wings-of-wanderlust','everbloom','angel-of-light','scavenger','the-arbitrator'].map(id=>[id,officers[id]]));
// Submitted order is preserved; positions do not assign commander/aide roles.
export const infantryGroups = [
  {id:'attack-f2p',category:'f2p',pairs:[['rogue-edge','lady-shadow'],['rogue-edge','herald-of-peace']]},
  {id:'attack-p2w',category:'p2w',pairs:[['wings-of-wanderlust','rogue-edge'],['wings-of-wanderlust','lady-shadow']]},
  {id:'tank-f2p',category:'f2p',pairs:[['everbloom','angel-of-light'],['everbloom','scavenger']]},
  {id:'tank-p2w',category:'p2w',pairs:[['the-arbitrator','everbloom']]},
];

export const infantry = {
  ru: {
    title:'Офицеры для пехоты',intro:'Семь пар SyndiCate: атакующая и танкующая пехота, с вариантами F2P и P2W. Выбери роль, затем состав под свою прокачку.',
    tag:'ОФИЦЕРЫ / ПЕХОТА',back:'На главную',toc:'Выбери направление',ready:'Смотреть сборки',variant:'Вариант',tankLink:'Офицеры для танков →',
    headings:['Сначала выбери роль','Атакующая · F2P','Атакующая · P2W','Танкующая · F2P','Танкующая · P2W','Как выбрать пару','Источники'],
    origin:'Составы и категории предоставлены SyndiCate. Обоснования — разбор навыков, а не сравнительный тест. Порядок карточек не является рейтингом и не назначает командира или помощника.',
    roles:'Атакующая пехота давит на выбранную цель. Танкующая принимает урон и помогает строю держаться в бою. Танкующая роль здесь означает задачу пехоты, а не тип юнита «танк».',
    rolesWhy:'Для урона нужны атакующие усиления и возможность продолжать атаковать; для переднего края — запас здоровья, снижение урона и восстановление. Одна и та же пара не обязана одинаково хорошо решать обе задачи.',
    groupIntros:['Два атакующих состава из плана альянса. Развивай одну выбранную пару последовательно.','Два атакующих варианта для длительного боя. Проверь открытые навыки до вложений.','Две пары для пехоты, которая должна выдерживать давление.','Защитная пара с дополнительными условиями для штурма базы.'],
    groupWhys:['Распыление ресурсов задерживает развитие навыков основной пары. F2P — категория плана SyndiCate; доступность офицеров проверь на своём аккаунте.','Накопительные и пробуждённые эффекты требуют времени в бою и соответствующей прокачки. Само получение офицера ещё не даёт полной отдачи.','Выживаемость даёт пехоте больше времени выполнять задачу. Выбирай восстановление или сочетание защиты с усилением огня по тому, чего не хватает твоему отряду.','Щиты и сопротивления поддерживают передний край, но часть преимуществ Арбитра относится именно к вражескому гарнизону базы. Учитывай режим боя.'],
    reasons:[
      ['Клинок ослабляет сопротивление цели эффектом Breach и усиливает обычные атаки пехоты. Госпожа теней добавляет усиления обычной атаки и навыка: оба офицера поддерживают давление на цель. Бонус Клинка против танков и вертолётов не распространяй на любые войска.', 'Клинок ослабляет цель, Вестник мира усиливает урон и обычные атаки, а атаками пехоты замедляет противника. Это помогает продолжать давление по выбранной цели; замедление и дополнительные срабатывания имеют свои интервалы.'],
      ['Крылья скитальца набирают атакующие и защитные усиления в бою, Клинок добавляет ослабление цели и поддержку атак пехоты. Поэтому пара подходит под продолжительное столкновение. Не считай накопления полными с первой секунды, а вероятностные эффекты — постоянными.', 'Крылья скитальца накапливают атакующие и защитные усиления в бою, Госпожа теней усиливает атаки и навыки. Это поддерживает давление атакующей пехоты в длительном столкновении. Накопления требуют времени, а условные эффекты не работают постоянно.'],
      ['Цветок даёт щит и защитные бонусы пехоте, Ангел света добавляет лечение и снижение входящего урона. Защита помогает пережить давление, лечение — восстановиться в бою. Эффекты действуют по условиям и длительности навыков, а не непрерывно.', 'Цветок поддерживает пехоту щитом и защитными бонусами; Мусорщик добавляет здоровье, сопротивление и временное усиление огневой мощи со щитом. Пара сочетает выживаемость с ответным огнём. Не складывай коэффициенты щитов без проверки их наложения в игре.'],
      ['Арбитр и Цветок дают щиты и защитные усиления; бонусы здоровья и устойчивости помогают выдерживать фокус. У Арбитра есть отдельная защита от гарнизона базы, а усиление при низком здоровье имеет порог. Это полезно учитывать при штурме, но не переносить все бонусы на полевой бой.'],
    ],
    checks:['Выбери задачу пехоты: урон по цели или удержание переднего края.','Сравни доступные уровни навыков и пробуждение обоих офицеров.','Проверяй пару на том же юните, с теми же деталями и против похожей цели; позицию командира и помощника проверяй отдельно.'],
    chooseWhy:'Так ты отличишь пользу сочетания от разницы в экипировке, цели или прокачке. Сильная готовая пара часто практичнее новой, у которой ещё не открыты нужные эффекты.',
    note:'Игровые PNG-портреты и описания навыков: Warpath Planet. Английские имена помогают найти офицера в другой локализации. Проверено 29 октября 2026 года.',
  },
  en: {
    title:'Infantry officers',intro:'Seven SyndiCate pairs for attacking and tanking Infantry, with F2P and P2W options. Choose a role, then a pair that fits your development.',
    tag:'OFFICERS / INFANTRY',back:'Home',toc:'Choose a direction',ready:'View pairings',variant:'Option',tankLink:'Tank officers →',
    headings:['Choose a role first','Attacking · F2P','Attacking · P2W','Tanking · F2P','Tanking · P2W','Choose your pair','Sources'],
    origin:'Compositions and categories supplied by SyndiCate. Explanations interpret skills rather than report comparative tests. Card order is not a ranking and does not assign commander or aide positions.',
    roles:'Attacking Infantry pressures a selected target. Tanking Infantry absorbs pressure to help the formation stay in combat. Tanking describes the Infantry role here, not the Tank unit class.',
    rolesWhy:'Damage needs offensive boosts and time to keep attacking; the frontline needs HP, mitigation and recovery. One pair does not necessarily perform both jobs equally well.',
    groupIntros:['Two offensive options from the alliance plan. Develop one chosen pair consistently.','Two offensive options for sustained combat. Check unlocked skills before investing.','Two options for Infantry that needs to withstand pressure.','A defensive pair with additional conditions for Base assaults.'],
    groupWhys:['Splitting resources delays your main pair’s skills. F2P is a SyndiCate planning category; check officer access on your account.','Stacking and awakened effects need time in combat and the relevant development. Simply obtaining an officer does not unlock their full value.','Surviving gives Infantry more time to do its job. Choose recovery or defense with added Firepower according to what your troop lacks.','Shields and resistance support the frontline, but some Arbitrator advantages apply specifically against a Base garrison. Consider the combat mode.'],
    reasons:[
      ['Rogue Edge weakens target resistance with Breach and boosts Infantry normal attacks. Lady Shadow supports normal attacks and skills, helping both officers maintain target pressure. Rogue Edge’s anti-Tank and anti-Helicopter bonus does not apply against every troop type.', 'Rogue Edge weakens the target; Herald of Peace boosts damage and normal attacks while Infantry attacks slow the enemy. This helps maintain pressure on the selected target. Slows and additional triggers have their own intervals.'],
      ['Wings of Wanderlust builds offensive and defensive benefits in combat; Rogue Edge adds target weakening and Infantry attack support. This supports sustained engagements. Do not assume full stacks at the start or permanent activation of chance-based effects.', 'Wings of Wanderlust builds offensive and defensive effects in combat; Lady Shadow boosts attacks and skills. This supports attacking Infantry pressure in sustained engagements. Stacks take time, and conditional effects are not permanent.'],
      ['Everbloom supplies a shield and Infantry defenses; Angel of Light adds healing and damage reduction. Protection helps survive pressure and healing supports recovery during combat. Effects follow their skill conditions and durations, rather than running continuously.', 'Everbloom supplies Infantry shielding and defenses; Scavenger adds HP, resistance and a temporary Firepower boost with a shield. The pair combines survival with return fire. Do not add shield coefficients without checking their interaction in game.'],
      ['The Arbitrator and Everbloom provide shields and defenses; HP and resilience help withstand focused attacks. The Arbitrator has separate protection against Base garrisons, and his low-HP benefit has a threshold. Account for these during assaults without transferring every benefit to field combat.'],
    ],
    checks:['Choose the Infantry job: damage a target or hold the frontline.','Compare both officers’ available skill levels and awakening.','Test on the same unit, with the same parts and comparable targets; check commander and aide positions separately.'],
    chooseWhy:'This separates pair value from differences in gear, targets or development. An established pair can be more practical than a new one whose key effects remain locked.',
    note:'Game PNG portraits and skill descriptions: Warpath Planet. English names help identify officers across localizations. Checked October 29, 2026.',
  },
  vi: {
    title:'Sĩ quan cho bộ binh',intro:'Bảy cặp SyndiCate cho bộ binh tấn công và chống chịu, gồm lựa chọn F2P và P2W. Chọn vai trò trước, rồi chọn cặp phù hợp với tiến độ nâng cấp.',
    tag:'SĨ QUAN / BỘ BINH',back:'Trang chủ',toc:'Chọn hướng phát triển',ready:'Xem đội hình',variant:'Lựa chọn',tankLink:'Sĩ quan xe tăng →',
    headings:['Chọn vai trò trước','Tấn công · F2P','Tấn công · P2W','Chống chịu · F2P','Chống chịu · P2W','Cách chọn cặp','Nguồn'],
    origin:'Đội hình và nhóm do SyndiCate cung cấp. Giải thích dựa trên cách phối hợp kỹ năng, không phải kết quả thử nghiệm so sánh. Thứ tự thẻ không phải xếp hạng và không chỉ định chỉ huy hay trợ lý.',
    roles:'Bộ binh tấn công gây áp lực lên mục tiêu đã chọn. Bộ binh chống chịu nhận sát thương để đội hình duy trì giao tranh. Chống chịu ở đây là vai trò bộ binh, không phải loại đơn vị xe tăng.',
    rolesWhy:'Gây sát thương cần tăng cường tấn công và thời gian tiếp tục bắn; tuyến đầu cần HP, giảm sát thương và hồi phục. Một cặp không nhất thiết làm tốt cả hai nhiệm vụ như nhau.',
    groupIntros:['Hai lựa chọn tấn công trong kế hoạch liên minh. Tập trung phát triển một cặp đã chọn.','Hai lựa chọn tấn công cho giao tranh kéo dài. Kiểm tra kỹ năng đã mở trước khi đầu tư.','Hai lựa chọn cho bộ binh cần chịu áp lực.','Cặp phòng thủ có thêm điều kiện khi tấn công căn cứ.'],
    groupWhys:['Chia nhỏ tài nguyên làm chậm kỹ năng của cặp chính. F2P là nhóm trong kế hoạch SyndiCate; hãy kiểm tra khả năng sở hữu trên tài khoản.','Hiệu ứng tích lũy và thức tỉnh cần thời gian giao tranh và mức nâng cấp tương ứng. Sở hữu sĩ quan chưa đồng nghĩa với đủ hiệu quả.','Sống lâu giúp bộ binh có thêm thời gian làm nhiệm vụ. Chọn hồi phục hoặc phòng thủ kèm hỏa lực tùy điểm thiếu của đội.','Khiên và kháng sát thương hỗ trợ tuyến đầu, nhưng một số lợi thế của The Arbitrator chỉ áp dụng với quân đồn trú căn cứ. Hãy xét chế độ chiến đấu.'],
    reasons:[
      ['Rogue Edge giảm kháng của mục tiêu bằng Breach và tăng đánh thường cho bộ binh. Lady Shadow hỗ trợ đánh thường và kỹ năng, giúp duy trì áp lực. Thưởng chống xe tăng và trực thăng của Rogue Edge không áp dụng cho mọi loại quân.', 'Rogue Edge làm yếu mục tiêu; Herald of Peace tăng sát thương, đánh thường và làm chậm địch bằng đòn đánh bộ binh. Điều này giúp duy trì áp lực lên mục tiêu. Làm chậm và hiệu ứng kích hoạt thêm có khoảng thời gian riêng.'],
      ['Wings of Wanderlust tích lũy lợi ích tấn công và phòng thủ trong giao tranh; Rogue Edge làm yếu mục tiêu và hỗ trợ đòn đánh bộ binh. Cặp này phù hợp với giao tranh kéo dài. Không coi số cộng dồn là tối đa ngay từ đầu hay hiệu ứng xác suất luôn hoạt động.', 'Wings of Wanderlust tích lũy hiệu ứng tấn công và phòng thủ trong trận; Lady Shadow tăng đòn đánh và kỹ năng. Cặp hỗ trợ bộ binh tấn công trong giao tranh kéo dài. Cộng dồn cần thời gian, hiệu ứng có điều kiện không hoạt động liên tục.'],
      ['Everbloom tạo khiên và tăng phòng thủ bộ binh; Angel of Light thêm hồi máu và giảm sát thương. Phòng thủ giúp sống qua áp lực, hồi máu hỗ trợ phục hồi trong trận. Hiệu ứng tuân theo điều kiện và thời lượng kỹ năng, không hoạt động liên tục.', 'Everbloom hỗ trợ khiên và phòng thủ bộ binh; Scavenger thêm HP, kháng sát thương và tăng hỏa lực tạm thời kèm khiên. Cặp này kết hợp sống sót với bắn trả. Không cộng hệ số khiên khi chưa kiểm tra cách chúng tương tác trong trò chơi.'],
      ['The Arbitrator và Everbloom cung cấp khiên và phòng thủ; HP và khả năng chống chịu giúp chịu đòn tập trung. The Arbitrator có bảo vệ riêng trước quân đồn trú căn cứ, còn lợi ích khi ít HP có ngưỡng kích hoạt. Hãy xét các điều kiện khi công thành, không áp mọi lợi ích sang đánh ngoài đồng.'],
    ],
    checks:['Chọn nhiệm vụ: gây sát thương hoặc giữ tuyến đầu.','So sánh cấp kỹ năng và thức tỉnh hiện có của cả hai sĩ quan.','Thử trên cùng đơn vị, cùng phụ tùng và mục tiêu tương đương; kiểm tra riêng vị trí chỉ huy và trợ lý.'],
    chooseWhy:'Nhờ vậy bạn phân biệt hiệu quả cặp với khác biệt về trang bị, mục tiêu hay nâng cấp. Cặp đã hoàn thiện có thể thực tế hơn cặp mới chưa mở các hiệu ứng quan trọng.',
    note:'Ảnh PNG trong trò chơi và mô tả kỹ năng: Warpath Planet. Tên tiếng Anh giúp nhận diện sĩ quan giữa các bản ngôn ngữ. Kiểm tra ngày 29 tháng 10 năm 2026.',
  },
  ar: {
    title:'ضباط المشاة',intro:'سبعة أزواج من SyndiCate للمشاة الهجومية ومشاة تحمّل الضرر، مع خيارات F2P وP2W. اختر الدور ثم الزوج المناسب لمستوى تطويرك.',
    tag:'الضباط / المشاة',back:'الرئيسية',toc:'اختر المسار',ready:'عرض التشكيلات',variant:'الخيار',tankLink:'ضباط الدبابات ←',
    headings:['اختر الدور أولاً','هجومية · F2P','هجومية · P2W','تحمّل الضرر · F2P','تحمّل الضرر · P2W','كيف تختار الزوج','المصادر'],
    origin:'التشكيلات والفئات مقدمة من SyndiCate. الشرح تحليل لتكامل المهارات وليس نتائج اختبارات مقارنة. ترتيب البطاقات ليس تصنيفاً ولا يحدد موقع القائد أو المساعد.',
    roles:'المشاة الهجومية تضغط على هدف محدد. مشاة تحمّل الضرر تستقبل الضغط لتساعد التشكيل على مواصلة القتال. المقصود هنا دور المشاة وليس فئة وحدات الدبابات.',
    rolesWhy:'إحداث الضرر يحتاج تعزيزات هجومية ووقتاً لمواصلة الهجوم؛ والخط الأمامي يحتاج نقاط صحة وتخفيف ضرر وتعافياً. ليس بالضرورة أن يؤدي زوج واحد المهمتين بالكفاءة نفسها.',
    groupIntros:['خياران هجوميّان من خطة التحالف. طوّر زوجاً واحداً تختاره باستمرار.','خياران هجوميّان للقتال المطوّل. تحقق من المهارات المفتوحة قبل الاستثمار.','خياران للمشاة التي تحتاج إلى تحمّل الضغط.','زوج دفاعي له شروط إضافية عند مهاجمة القواعد.'],
    groupWhys:['توزيع الموارد يؤخر مهارات الزوج الأساسي. F2P فئة في خطة SyndiCate؛ تحقق من إمكانية الحصول على الضباط في حسابك.','التأثيرات التراكمية ومهارات الإيقاظ تحتاج وقتاً في القتال والتطوير المناسب. الحصول على الضابط وحده لا يمنح كامل فائدته.','البقاء يمنح المشاة وقتاً أطول لأداء مهمتها. اختر التعافي أو الدفاع مع تعزيز القوة النارية بحسب ما ينقص وحدتك.','الدروع والمقاومة تدعمان الخط الأمامي، لكن بعض مزايا The Arbitrator تخص حامية قاعدة العدو تحديداً. راعِ نمط القتال.'],
    reasons:[
      ['يضعف Rogue Edge مقاومة الهدف بتأثير Breach ويعزز الهجمات العادية للمشاة. تدعم Lady Shadow الهجمات العادية والمهارات، فيساعدان على استمرار الضغط. مكافأة Rogue Edge ضد الدبابات والمروحيات لا تشمل جميع أنواع القوات.', 'يضعف Rogue Edge الهدف؛ ويعزز Herald of Peace الضرر والهجمات العادية ويبطئ العدو بهجمات المشاة. يساعد ذلك على مواصلة الضغط على الهدف المختار. للإبطاء والتفعيلات الإضافية فواصلها الخاصة.'],
      ['يراكم Wings of Wanderlust تعزيزات هجومية ودفاعية أثناء القتال؛ ويضيف Rogue Edge إضعاف الهدف ودعم هجمات المشاة. يناسب ذلك الاشتباكات المطوّلة. لا تفترض اكتمال التراكم من البداية أو استمرار التأثيرات الاحتمالية دائماً.', 'يراكم Wings of Wanderlust تأثيرات هجومية ودفاعية في القتال؛ وتعزز Lady Shadow الهجمات والمهارات. يدعم ذلك ضغط المشاة الهجومية في الاشتباكات المطوّلة. تحتاج التراكمات وقتاً، والتأثيرات المشروطة ليست دائمة.'],
      ['تمنح Everbloom درعاً وتعزيزات دفاعية للمشاة؛ وتضيف Angel of Light العلاج وتقليل الضرر. تساعد الحماية على تحمّل الضغط والعلاج على التعافي أثناء القتال. تعمل التأثيرات وفق شروط المهارات ومددها وليست مستمرة بلا انقطاع.', 'تدعم Everbloom المشاة بالدرع والدفاع؛ ويضيف Scavenger نقاط صحة ومقاومة وتعزيزاً مؤقتاً للقوة النارية مع درع. يجمع الزوج بين البقاء والرد بالنيران. لا تجمع معاملات الدروع دون التحقق من تفاعلها داخل اللعبة.'],
      ['يوفر The Arbitrator وEverbloom الدروع والدفاع؛ وتساعد نقاط الصحة والتحمل على مقاومة تركيز النيران. لدى The Arbitrator حماية خاصة ضد حامية القاعدة، كما أن تعزيز انخفاض الصحة له عتبة. راعِ ذلك عند الهجوم على القواعد ولا تنقل جميع المزايا إلى القتال الميداني.'],
    ],
    checks:['اختر مهمة المشاة: إلحاق الضرر بهدف أو الصمود في الخط الأمامي.','قارن مستويات المهارات والإيقاظ المتاحة لكلا الضابطين.','اختبر على الوحدة نفسها وبالقطع نفسها وضد أهداف متقاربة؛ وتحقق من موقعي القائد والمساعد بشكل منفصل.'],
    chooseWhy:'يساعدك ذلك على فصل فائدة الزوج عن اختلاف المعدات أو الهدف أو التطوير. قد يكون الزوج المطوّر عملياً أكثر من زوج جديد لم تُفتح تأثيراته الأساسية بعد.',
    note:'صور PNG من اللعبة وأوصاف المهارات: Warpath Planet. تساعد الأسماء الإنجليزية على التعرف على الضباط بين اللغات. تم التحقق في 29 أكتوبر 2026.',
  },
};
