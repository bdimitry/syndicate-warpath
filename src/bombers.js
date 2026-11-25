const badges = {
 ru:'БОМБАРДИРОВЩИК', en:'BOMBER', vi:'MÁY BAY NÉM BOM', ar:'قاذفة', pl:'BOMBOWIEC', pt:'BOMBARDEIRO',
};

export const bomberGroups = [
 {id:'bomber-liberty',category:null,badge:badges,pairs:[['ol-stache','lone-eagle']]},
 {id:'bomber-precision',category:null,badge:badges,pairs:[['ol-stache','dawn-striker']]},
];

export const bomberCopy = {
 ru:{
  intro:'Пять пар для истребителей и две для бомбардировщиков: сборки SyndiCate, совместимость с фракциями и условия навыков.',
  headings:['Бомбардировщик · Либерти','Точечные бомбардировщики · Авангард и Мученики'],
  intros:['Усатый + Одинокий орёл для бомбардировщика Либерти.','Усатый + Утренний удар для точечных бомбардировщиков Авангарда и Мучеников.'],
  whys:['Фракционная привязка позволяет учитывать специальные бонусы Одинокого орла для бомбардировщика Либерти.','Эта пара — выбор SyndiCate для точечных бомбардировщиков двух указанных фракций; проверяй класс самолёта перед назначением.'],
  reasons:[
   'Усатый усиливает бомбардировщик, а Одинокий орёл добавляет бонусы эффективности бомбометания именно для Либерти. При смене фракции пересмотри пару: доступные эффекты изменятся. Пробуждённые усиления требуют пробуждения.',
   'Навыки Усатого и Утреннего удара наносят урон при заходах бомбардировщика, поддерживая давление на выбранную цель. Это рекомендация SyndiCate для Авангарда и Мучеников. Защитный щит Утреннего удара срабатывает условно; учитывай риск перехвата.',
  ],
  types:['Бомбардировщик Либерти','Точечный бомбардировщик'],
 },
 en:{
  intro:'Five fighter pairs and two bomber pairs: SyndiCate builds, faction compatibility and skill conditions.',
  headings:['Bomber · Liberty','Precision bombers · Vanguard and Martyrs'],
  intros:["Ol’ Stache + Lone Eagle for the Liberty Bomber.","Ol’ Stache + Dawn Striker for Vanguard and Martyrs precision bombers."],
  whys:['The faction choice accounts for Lone Eagle’s Liberty Bomber bonuses.','SyndiCate recommends this pair for precision bombers of these two factions; check the aircraft class before assigning it.'],
  reasons:[
   'Ol’ Stache strengthens the bomber; Lone Eagle adds bombing-efficiency bonuses specifically for Liberty. Reassess the pair when changing factions because available effects change. Awakened bonuses require awakening.',
   'Ol’ Stache and Dawn Striker deal damage during bombing runs, sustaining pressure on the selected target. SyndiCate recommends this pair for Vanguard and Martyrs. Dawn Striker’s shield is conditional; account for interception risk.',
  ],
  types:['Liberty Bomber','Precision bomber'],
 },
 vi:{
  intro:'Năm cặp tiêm kích và hai cặp máy bay ném bom: đội hình SyndiCate, tương thích phe và điều kiện kỹ năng.',
  headings:['Máy bay ném bom · Liberty','Máy bay ném bom chính xác · Vanguard và Martyrs'],
  intros:['Ol’ Stache + Lone Eagle cho máy bay ném bom Liberty.','Ol’ Stache + Dawn Striker cho máy bay ném bom chính xác Vanguard và Martyrs.'],
  whys:['Lựa chọn phe giúp tận dụng hiệu ứng riêng của Lone Eagle dành cho máy bay ném bom Liberty.','SyndiCate chọn cặp này cho máy bay ném bom chính xác của hai phe trên; kiểm tra loại máy bay trước khi bố trí.'],
  reasons:[
   'Ol’ Stache tăng sức mạnh máy bay ném bom; Lone Eagle bổ sung hiệu suất ném bom riêng cho Liberty. Khi đổi phe, đánh giá lại cặp vì các hiệu ứng áp dụng sẽ thay đổi. Hiệu ứng thức tỉnh cần được mở khóa.',
   'Ol’ Stache và Dawn Striker gây sát thương trong các lượt ném bom, duy trì sức ép lên mục tiêu đã chọn. SyndiCate đề xuất cặp này cho Vanguard và Martyrs. Khiên của Dawn Striker có điều kiện; cân nhắc nguy cơ bị đánh chặn.',
  ],
  types:['Máy bay ném bom Liberty','Máy bay ném bom chính xác'],
 },
 ar:{
  intro:'خمسة أزواج للمقاتلات وزوجان للقاذفات مع تشكيلات SyndiCate وتوافق الفصائل وشروط المهارات.',
  headings:['قاذفة · Liberty','قاذفات دقيقة · Vanguard وMartyrs'],
  intros:['Ol’ Stache + Lone Eagle لقاذفة Liberty.','Ol’ Stache + Dawn Striker للقاذفات الدقيقة من Vanguard وMartyrs.'],
  whys:['اختيار الفصيل يراعي مزايا Lone Eagle الخاصة بقاذفات Liberty.','يوصي SyndiCate بهذا الثنائي للقاذفات الدقيقة من هذين الفصيلين؛ تحقق من فئة الطائرة قبل التعيين.'],
  reasons:[
   'يعزز Ol’ Stache القاذفة ويضيف Lone Eagle مزايا كفاءة القصف الخاصة بـLiberty. أعد تقييم الثنائي عند تغيير الفصيل لأن التأثيرات المتاحة تتغير. تتطلب مزايا الإيقاظ إيقاظ الضابط.',
   'يسبب Ol’ Stache وDawn Striker ضرراً خلال طلعات القصف لاستمرار الضغط على الهدف المحدد. يوصي SyndiCate بهذا الثنائي لـVanguard وMartyrs. درع Dawn Striker مشروط؛ راع خطر الاعتراض.',
  ],
  types:['قاذفة Liberty','قاذفة دقيقة'],
 },
 pl:{
  intro:'Pięć par myśliwców i dwie pary bombowców: zestawy SyndiCate, zgodność frakcji i warunki umiejętności.',
  headings:['Bombowiec · Liberty','Bombowce precyzyjne · Vanguard i Martyrs'],
  intros:['Ol’ Stache + Lone Eagle dla bombowca Liberty.','Ol’ Stache + Dawn Striker dla bombowców precyzyjnych Vanguard i Martyrs.'],
  whys:['Wybór frakcji uwzględnia premie Lone Eagle dla bombowca Liberty.','SyndiCate poleca tę parę do bombowców precyzyjnych tych dwóch frakcji; sprawdź klasę samolotu przed przydzieleniem.'],
  reasons:[
   'Ol’ Stache wzmacnia bombowiec, a Lone Eagle dodaje premie skuteczności bombardowania dla Liberty. Przy zmianie frakcji oceń parę ponownie, ponieważ zmieniają się dostępne efekty. Premie przebudzenia wymagają przebudzenia.',
   'Ol’ Stache i Dawn Striker zadają obrażenia podczas nalotów, utrzymując nacisk na wybrany cel. SyndiCate poleca tę parę dla Vanguard i Martyrs. Tarcza Dawn Striker jest warunkowa; uwzględnij ryzyko przechwycenia.',
  ],
  types:['Bombowiec Liberty','Bombowiec precyzyjny'],
 },
 pt:{
  intro:'Cinco duplas de caças e duas de bombardeiros: formações SyndiCate, compatibilidade de facções e condições das habilidades.',
  headings:['Bombardeiro · Liberty','Bombardeiros de precisão · Vanguard e Martyrs'],
  intros:['Ol’ Stache + Lone Eagle para o bombardeiro Liberty.','Ol’ Stache + Dawn Striker para bombardeiros de precisão Vanguard e Martyrs.'],
  whys:['A escolha da facção considera os bônus de Lone Eagle para bombardeiros Liberty.','A SyndiCate recomenda esta dupla para bombardeiros de precisão dessas duas facções; confira a classe da aeronave antes de designá-la.'],
  reasons:[
   'Ol’ Stache fortalece o bombardeiro; Lone Eagle acrescenta bônus de eficiência de bombardeio específicos de Liberty. Reavalie a dupla ao mudar de facção, pois os efeitos disponíveis mudam. Os bônus de despertar exigem o despertar.',
   'Ol’ Stache e Dawn Striker causam dano durante as passagens de bombardeio, mantendo pressão no alvo escolhido. A SyndiCate recomenda esta dupla para Vanguard e Martyrs. O escudo de Dawn Striker é condicional; considere o risco de interceptação.',
  ],
  types:['Bombardeiro Liberty','Bombardeiro de precisão'],
 },
};
