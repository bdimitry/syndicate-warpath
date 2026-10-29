// Alliance progression policy supplied by the user. No invented node names or costs.
export const research = {
  ru: {
    title: 'Исследования: порядок развития SyndiCate',
    intro: 'Сначала экономика и городские почести, затем углубление в один основной юнит. Проходи этапы последовательно и не распыляй исследования между всеми типами войск.',
    tag: 'ИССЛЕДОВАНИЯ / РАЗВИТИЕ', back: 'На главную', ready: 'Читать руководство', toc: 'Маршрут развития', parallel: 'Три направления параллельно', finish: 'Когда переходить дальше',
    summary: 'Индустрия + продвинутая промышленность → все городские почести → 200-й уровень → первая нужная карточка → равномерное развитие.',
    stages: [
      {title:'Экономика, путь по почестям и 120-й уровень', text:'Главный приоритет — полностью прокачать Индустрию и полностью Продвинутую промышленность. Одновременно веди ещё два направления: путь к последнему исследованию городских почестей и открытие 120-го уровня для выбранного боевого юнита.', tracks:[['Экономика','Доведи обе промышленные ветки до максимума. Не бросай их ради широкого развития военных веток.'],['Городские почести','Продвигайся к последнему исследованию. Промежуточные узлы улучшай лишь до минимума, необходимого для прохода дальше; полное заполнение всей ветки будет следующим этапом.'],['Основной юнит','Параллельно исследуй возможность максимального уровня 120 для нужного юнита. Речь об открытии лимита исследованиями, а не об автоматическом повышении самого юнита до 120.']], gate:'Обе промышленные ветки завершены; путь к последнему исследованию почестей пройден и лимит 120 для нужного юнита открыт.'},
      {title:'Полностью прокачай городские почести',text:'Вернись к оставшимся узлам и доведи все городские почести до максимума. На первом этапе мы прокладывали маршрут по минимальным требованиям, теперь закрываем ветку целиком.',gate:'Все исследования городских почестей прокачаны максимально.'},
      {title:'Открой 200-й уровень нужного юнита',text:'Только после полных городских почестей делай нужное исследование, открывающее 200-й уровень выбранного юнита. Не переносим эту дорогую цель вперёд экономического этапа и почестей.',gate:'Исследование лимита 200 выполнено для основного юнита.'},
      {title:'Один тип войск — до первой нужной карточки',text:'Развивай продвинутые исследования одного нужного типа юнита вплоть до первой карточки на нужный юнит. Не запускай такой же глубокий путь для нескольких типов одновременно.',gate:'Первая нужная карточка в выбранном направлении получена.'},
      {title:'Постепенно и равномерно развивай нужное',text:'После этой контрольной точки постепенно подтягивай исследования, которые нужны твоему составу и задачам. Равномерно — среди нужных направлений, а не поровну во все ветки подряд.',gate:'Дальше поддерживай баланс полезных исследований под текущий состав.'},
    ],
    reminder:'Не путай два подхода к городским почестям: сначала минимальные уровни для прохода к последнему исследованию, затем полная прокачка всей ветки. Исследование на 200-й уровень идёт только после этого.',
    attribution:'Порядок развития для игроков SyndiCate, заданный руководством альянса. Названия отдельных узлов и стоимость не подменяем догадками — выбирай их по нужному юниту в своей игре.',
  },
  en: {
    title:'Research: the SyndiCate progression plan',intro:'Economy and City Honors first, then focus on one core unit. Follow the stages in order instead of spreading research across every troop type.',
    tag:'RESEARCH / DEVELOPMENT',back:'Back to home',ready:'Read the guide',toc:'Progression route',parallel:'Three parallel tracks',finish:'When to move on',
    summary:'Industry + Advanced Industry → complete City Honors → level 200 cap → first target unit card → balanced development.',
    stages:[
      {title:'Economy, the City Honors route and level 120',text:'Your main priority is to fully maximize Industry and Advanced Industry. In parallel, work toward the final City Honors research and unlock the level 120 cap for your chosen combat unit.',tracks:[['Economy','Max both industrial branches. Do not abandon them for broad military research.'],['City Honors','Reach the final research by upgrading intermediate nodes only as far as the prerequisites require. Fully completing the whole branch comes next.'],['Core unit','Research the level 120 cap for the unit you need. This unlocks the cap; it does not automatically level the unit to 120.']],gate:'Both industrial branches are complete, the route to the final City Honors research is cleared, and the target unit’s level 120 cap is unlocked.'},
      {title:'Fully maximize City Honors',text:'Return to the remaining nodes and maximize all City Honors research. The first stage followed minimum prerequisites; now complete the entire branch.',gate:'Every City Honors research node is maxed.'},
      {title:'Unlock your target unit’s level 200 cap',text:'Only after completing City Honors, perform the research that unlocks level 200 for your chosen unit. Do not move this goal ahead of economy and City Honors.',gate:'Your core unit’s level 200 cap research is complete.'},
      {title:'One unit type, up to the first target card',text:'Develop advanced research for one needed unit type until you obtain the first card for your target unit. Do not pursue several equally deep paths at once.',gate:'The first target card in your chosen research path is obtained.'},
      {title:'Gradually balance the research you need',text:'After that milestone, steadily improve the research relevant to your army and its tasks. Balanced means among useful paths, not equal spending on every branch.',gate:'Maintain a useful balance for your current army.'},
    ],reminder:'City Honors has two distinct phases: first follow minimum prerequisites toward the final research, then maximize the entire branch. Level 200 cap research comes only after that.',
    attribution:'Progression policy provided by SyndiCate leadership. Individual node names and costs are not guessed; choose them for your target unit in game.',
  },
  vi: {
    title:'Nghiên cứu: lộ trình phát triển SyndiCate',intro:'Ưu tiên kinh tế và City Honors, sau đó tập trung một đơn vị chủ lực. Đi theo thứ tự, không phân tán nghiên cứu cho mọi loại quân.',
    tag:'NGHIÊN CỨU / PHÁT TRIỂN',back:'Về trang chủ',ready:'Đọc hướng dẫn',toc:'Lộ trình phát triển',parallel:'Ba hướng song song',finish:'Khi nào chuyển bước',
    summary:'Công nghiệp + Công nghiệp nâng cao → tối đa City Honors → giới hạn cấp 200 → thẻ đơn vị mục tiêu đầu tiên → phát triển cân bằng.',
    stages:[
      {title:'Kinh tế, đường City Honors và cấp 120',text:'Ưu tiên chính là nâng tối đa toàn bộ Công nghiệp và Công nghiệp nâng cao. Song song, tiến tới nghiên cứu cuối City Honors và mở giới hạn cấp 120 cho đơn vị chiến đấu đã chọn.',tracks:[['Kinh tế','Hoàn thành tối đa cả hai nhánh công nghiệp. Không bỏ dở để mở rộng mọi nhánh quân sự.'],['City Honors','Nâng các nút trung gian chỉ đến mức tối thiểu để đi tới nghiên cứu cuối. Tối đa toàn bộ nhánh là bước sau.'],['Đơn vị chủ lực','Nghiên cứu mở giới hạn cấp 120 cho đơn vị cần dùng. Mở giới hạn không tự nâng đơn vị lên cấp 120.']],gate:'Hai nhánh công nghiệp hoàn tất, đã đi tới nghiên cứu cuối City Honors và mở giới hạn cấp 120 cho đơn vị mục tiêu.'},
      {title:'Nâng tối đa toàn bộ City Honors',text:'Quay lại các nút còn lại và nâng tối đa toàn bộ City Honors. Bước đầu chỉ mở đường theo yêu cầu tối thiểu, còn bước này hoàn thiện cả nhánh.',gate:'Mọi nghiên cứu City Honors đều đạt tối đa.'},
      {title:'Mở giới hạn cấp 200 cho đơn vị cần dùng',text:'Chỉ sau khi hoàn tất City Honors mới làm nghiên cứu mở cấp 200 cho đơn vị đã chọn. Không đưa mục tiêu này lên trước kinh tế và City Honors.',gate:'Nghiên cứu giới hạn cấp 200 của đơn vị chủ lực hoàn thành.'},
      {title:'Một loại quân đến thẻ mục tiêu đầu tiên',text:'Nâng nghiên cứu nâng cao của một loại đơn vị cần dùng tới thẻ đầu tiên của đơn vị mục tiêu. Không đào sâu nhiều hướng cùng lúc.',gate:'Đã nhận thẻ mục tiêu đầu tiên trong hướng đã chọn.'},
      {title:'Phát triển dần và cân bằng các hướng cần thiết',text:'Sau mốc này, nâng dần nghiên cứu phù hợp với đội hình và nhiệm vụ. Cân bằng trong những hướng hữu ích, không chia đều vào tất cả nhánh.',gate:'Duy trì cân bằng hữu ích cho đội hình hiện tại.'},
    ],reminder:'City Honors có hai giai đoạn: đầu tiên đi theo yêu cầu tối thiểu tới nghiên cứu cuối, sau đó nâng tối đa cả nhánh. Nghiên cứu cấp 200 chỉ làm sau đó.',
    attribution:'Lộ trình do lãnh đạo SyndiCate cung cấp. Không đoán tên nút hay chi phí; chọn theo đơn vị mục tiêu trong game.',
  },
  ar: {
    title:'الأبحاث: مسار تطوير SyndiCate',intro:'الاقتصاد وCity Honors أولًا، ثم التركيز على وحدة أساسية واحدة. اتبع المراحل بالترتيب ولا تشتت الأبحاث بين كل أنواع القوات.',
    tag:'الأبحاث / التطوير',back:'العودة للرئيسية',ready:'اقرأ الدليل',toc:'مسار التطوير',parallel:'ثلاثة مسارات بالتوازي',finish:'متى تنتقل للمرحلة التالية',
    summary:'الصناعة + الصناعة المتقدمة ← إكمال City Honors ← حد المستوى 200 ← أول بطاقة للوحدة المطلوبة ← تطوير متوازن.',
    stages:[
      {title:'الاقتصاد ومسار City Honors والمستوى 120',text:'الأولوية الأساسية هي تطوير الصناعة والصناعة المتقدمة بالكامل إلى الحد الأقصى. بالتوازي تقدم نحو آخر بحث في City Honors وافتح حد المستوى 120 لوحدتك القتالية المختارة.',tracks:[['الاقتصاد','أكمل فرعي الصناعة إلى أقصى مستوى. لا تتركهما لتوسيع جميع الفروع العسكرية.'],['City Honors','ارفع العقد الوسيطة إلى الحد الأدنى المطلوب للوصول إلى البحث الأخير. الإكمال الأقصى للفرع كله يأتي في المرحلة التالية.'],['الوحدة الأساسية','ابحث فتح حد المستوى 120 للوحدة المطلوبة. فتح الحد لا يرفع الوحدة تلقائيًا إلى المستوى 120.']],gate:'اكتمل فرعا الصناعة، ووصل المسار إلى البحث الأخير في City Honors، وفُتح حد المستوى 120 للوحدة المطلوبة.'},
      {title:'أكمل City Honors بالكامل',text:'عد إلى العقد المتبقية وطور كل أبحاث City Honors إلى الحد الأقصى. في البداية فتحت الطريق بالمتطلبات الدنيا، والآن أكمل الفرع كله.',gate:'كل عقد أبحاث City Honors بلغت الحد الأقصى.'},
      {title:'افتح حد المستوى 200 للوحدة المطلوبة',text:'بعد إكمال City Honors فقط نفّذ البحث الذي يفتح المستوى 200 لوحدتك المختارة. لا تقدّم هذا الهدف على الاقتصاد وCity Honors.',gate:'اكتمل بحث حد المستوى 200 للوحدة الأساسية.'},
      {title:'نوع واحد حتى أول بطاقة مطلوبة',text:'طور الأبحاث المتقدمة لنوع واحد تحتاجه حتى أول بطاقة للوحدة المطلوبة. لا تتعمق في عدة أنواع في الوقت نفسه.',gate:'حصلت على أول بطاقة مطلوبة في المسار المختار.'},
      {title:'طور احتياجاتك تدريجيًا وبالتوازن',text:'بعد هذه النقطة طور الأبحاث المناسبة لتشكيلتك ومهامك تدريجيًا. التوازن بين المسارات المفيدة، وليس الإنفاق بالتساوي على كل الفروع.',gate:'حافظ على توازن مفيد لتشكيلتك الحالية.'},
    ],reminder:'لمسار City Honors مرحلتان: الوصول للبحث الأخير بالمتطلبات الدنيا، ثم تطوير الفرع كله إلى أقصى مستوى. بحث حد المستوى 200 يأتي بعد ذلك فقط.',
    attribution:'مسار تطوير مقدم من قيادة SyndiCate. لا نفترض أسماء العقد أو تكلفتها؛ اخترها لوحدتك المطلوبة داخل اللعبة.',
  },
};
