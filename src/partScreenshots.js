// Positions use original image coordinates, never mirrored for RTL.
export const partScreenshots = [
  {
    "id": "base-workshop",
    "section": "materials",
    "file": "base-workshop.jpg",
    "marks": [
      [
        52,
        54
      ],
      [
        39,
        29
      ]
    ]
  },
  {
    "id": "campaign-auto-disassembly",
    "section": "campaign",
    "file": "campaign-auto-disassembly.jpg",
    "marks": [
      [
        7.3,
        94
      ],
      [
        64,
        82
      ]
    ]
  },
  {
    "id": "conversion-selection",
    "section": "blueprints",
    "file": "conversion-selection.jpg",
    "marks": [
      [
        10,
        14
      ],
      [
        55,
        27
      ],
      [
        87,
        13
      ],
      [
        80,
        91
      ]
    ]
  },
  {
    "id": "conversion-filter",
    "section": "blueprints",
    "file": "conversion-filter.jpg",
    "marks": [
      [
        88,
        12
      ],
      [
        18,
        32
      ],
      [
        18,
        54
      ],
      [
        60,
        85
      ]
    ]
  },
  {
    "id": "conversion-store",
    "section": "blueprints",
    "file": "conversion-store.jpg",
    "marks": [
      [
        8,
        28
      ],
      [
        74,
        5
      ],
      [
        43,
        31
      ],
      [
        86,
        53
      ]
    ]
  },
  {
    "id": "dismantling",
    "section": "dismantle",
    "file": "dismantling.jpg",
    "marks": [
      [
        8,
        36
      ],
      [
        21,
        47
      ],
      [
        58,
        19
      ],
      [
        79,
        88
      ]
    ]
  },
  {
    "id": "alliance-store",
    "section": "sources",
    "file": "alliance-store.jpg",
    "marks": [
      [
        91,
        13
      ],
      [
        91,
        32
      ],
      [
        60,
        58
      ]
    ]
  },
  {
    "id": "arena-store",
    "section": "sources",
    "file": "arena-store.jpg",
    "marks": [
      [
        15,
        50
      ],
      [
        53,
        25
      ],
      [
        10,
        12
      ]
    ]
  }
];

export const screenshotCopy = {
  "ru": {
    "zoom": "Увеличить скриншот",
    "close": "Закрыть",
    "original": "Открыть оригинал",
    "note": "Скриншоты предоставлены игроком. Интерфейс на русском; цены, остатки и скидки — пример с этого аккаунта, а не постоянные условия магазина.",
    "items": {
      "conversion-filter": {
        "title": "Шаг 2. Отфильтруй ненужные чертежи",
        "alt": "Окно фильтра конверсии: выбраны все лагеря и все показанные типы юнитов.",
        "points": [
          "Вход в фильтр. На скриншоте открыто окно, которое меняет показ чертежей; сам фильтр ничего не конвертирует.",
          "Лагерь и универсальные чертежи. Проверь эти категории отдельно: универсальное не означает ненужное.",
          "Тип юнита. Сейчас отмечены все типы. Например, если сохраняешь гаубицы, оставь для просмотра ненужные типы, а «Гаубицы» убери из фильтра. Серебряное качество проверяй на самих карточках: на этом экране отдельного фильтра качества нет.",
          "Нажми «ОК», вернись к карточкам и проверь итоговый выбор до подтверждения конверсии. Настройка фильтра — не защита от ошибочного массового выбора."
        ]
      },
      "conversion-store": {
        "title": "Шаг 3. Обменяй очки в магазине конверсии",
        "alt": "Магазин конверсии с двумя разными балансами: 650 и 2000, ящиками чертежей, материалов и ключами оружейника.",
        "points": [
          "После конверсии открой «Магазин конверсии» слева. Здесь выбирают награду, а не исходные чертежи.",
          "Две валюты учитываются отдельно. На примере 650 синих и 2000 коричневых очков: не складывай их и сопоставляй значок цены со значком баланса.",
          "Ящик материалов стоит 800 синих очков, а ящик чертежей рядом — 1800. При балансе 650 на них пока не хватает. Открой описание: «ящик» не гарантирует выбор конкретной детали.",
          "Ящик для среднего танка стоит 6000 коричневых очков — при 2000 купить его нельзя. Сначала выбери нужный тип войск, сравни цену и лимит. Ключ оружейника на этом экране относится к механику; это не ключ снаряжения для календаря ивентов."
        ]
      },
      "dismantling": {
        "title": "Разбор: что возвращается и что теряется",
        "alt": "Разборочный комплекс, вкладка «Разборка детали» и правило возврата материалов и чертежей.",
        "points": [
          "Открой «Разборочный комплекс» → «Разборка детали». Не путай с разбором юнитов, сбросом и вкладкой «Улучшенный разбор».",
          "Правило прямо в игре: золото ++ возвращает 50% потраченных материалов; при разборе других деталей возвращаются все материалы. Чертежи не возвращаются.",
          "Здесь видны три детали. Их присутствие в списке не означает, что все они ненужные. Быстрый выбор обязательно перепроверь, особенно для редких деталей и полезных копий.",
          "«Разобрать» — подтверждение уничтожения детали. Пример: из 100 потраченных единиц материала золото ++ вернёт 50; повторное изготовление потребует недостающие материалы и новый чертёж. Это расчёт по правилу, не показанный на скриншоте предпросмотр."
        ]
      },
      "alliance-store": {
        "title": "Магазин альянса: покупай под свой состав",
        "alt": "Магазин с монетами вклада и ящиками чертежей разных типов войск.",
        "points": [
          "Монеты вклада — валюта этого магазина. На примере их 173; сравни этот баланс с ценой выбранного ящика.",
          "На скриншоте ящик чертежа гаубицы стоит 2360, а многие другие типы — 4720. Это цены данного предложения. Не выбирай случайный тип только потому, что он доступен.",
          "Различай типы наград: ящик материалов и ящик чертежа закрывают разные потребности. «Распродано» означает, что текущее предложение исчерпано; следи за обновлением магазина."
        ]
      },
      "arena-store": {
        "title": "Магазин арены: чертежи, материалы и механик",
        "alt": "Магазин арены с ящиками, ключами оружейника, ценами и отметками распроданных товаров.",
        "points": [
          "На витрине несколько ящиков с похожими названиями. Открой описание до покупки и проверь: чертёж это или материалы, какого качества, случайная награда или выбор.",
          "Ключи оружейника нужны для механика, а не для создания деталей напрямую. Шестерёнки ниже — запчасти для юнитов, их не следует считать материалами крафта деталей.",
          "Скидки, наличие и таймер относятся к текущей витрине. Сравнивай покупки за валюту арены с потребностями основного состава; не покупай всё ради скидки."
        ]
      },
      "base-workshop": {
        "title": "Где находятся мастерская и разборочный комплекс",
        "alt": "База с Мастерской запчастей в центре и разборочным комплексом слева сверху.",
        "points": [
          "«Мастерская запчастей» — так здание подписано на этом экране. Здесь ищи изготовление деталей и переход к конверсии чертежей; в тексте гайда оно также называется Мастерской деталей.",
          "«Разборочный комплекс» — отдельное здание. Здесь находится показанная ранее вкладка «Разборка детали». Не путай два здания и две операции."
        ]
      },
      "campaign-auto-disassembly": {
        "title": "Кампания: включи «Автоматически разбирать детали уровня Медь»",
        "alt": "Экран кампании «Страшный штурм», внизу слева включена галочка автоматического разбора деталей уровня «Медь».",
        "points": [
          "Нужная галочка находится прямо внизу слева на основном экране кампании. Точная подпись: «Автоматически разбирать детали уровня Медь». На скриншоте она уже включена; «Медь» — это та бронза, о которой мы говорим в гайде.",
          "Справа от центра — область получения накопленных наград, сейчас «Всё получено». Галочка отвечает за авторазбор соответствующей добычи. Она не превращает предметы в золото, не повышает качество дропа и не является покупкой энергии."
        ]
      },
      "conversion-selection": {
        "title": "Шаг 1. Открой конверсию и проверь карточки",
        "alt": "Основной экран конверсии с двумя чертежами, фильтром и кнопкой подтверждения.",
        "points": [
          "Открой вкладку «Конвертировать». Подсказка слева объясняет: чертежи превращаются в очки исследований или продвинутых исследований для магазина конверсии.",
          "Здесь показаны чертежи авиационной пушки НС-37 и 48-зарядной ракетной установки. Это примеры карточек, а не рекомендация уничтожить именно их. Сначала сопоставь каждый чертёж со своим планом юнитов.",
          "Для отбора по лагерю и типу юнита открой «Фильтр». Следующий скриншот показывает его настройки.",
          "После проверки нужных карточек нажимают «Конвертировать». До подтверждения оцени, какие чертежи расходуются и какая валюта поступит; к магазину переходят уже после обмена."
        ]
      }
    }
  },
  "en": {
    "zoom": "Enlarge screenshot",
    "close": "Close",
    "original": "Open original",
    "note": "Player-provided screenshots. The game UI is in Russian; prices, stock and discounts illustrate this account, not permanent store conditions.",
    "items": {
      "conversion-filter": {
        "title": "Step 2. Filter unwanted blueprints",
        "alt": "Blueprint conversion filter with all camps and displayed unit types selected.",
        "points": [
          "Filter entry. This window controls which blueprints are shown; filtering does not convert anything.",
          "Camp and universal categories. Review universal blueprints separately: universal does not mean unwanted.",
          "Unit type. Every type is currently checked. For example, to keep howitzer blueprints, display only unwanted types and uncheck “Гаубицы” (Howitzers). Check silver quality on the cards; this screen has no separate quality filter.",
          "Press “ОК”, return to the cards and inspect the actual selection before confirming conversion. A display filter does not protect against an incorrect bulk selection."
        ]
      },
      "conversion-store": {
        "title": "Step 3. Spend points in the Conversion Store",
        "alt": "Conversion Store with separate 650 and 2000 balances, blueprint and material chests, and Armorer’s Wrenches.",
        "points": [
          "After conversion, open “Магазин конверсии” on the left. Here you choose rewards, not the blueprints to sacrifice.",
          "The two currencies are separate. This account has 650 blue and 2000 brown points. Do not add them together; match the price icon to the balance icon.",
          "The materials chest costs 800 blue points; the adjacent blueprint chest costs 1800. A balance of 650 is insufficient. Read the description: a chest does not guarantee selection of a specific part.",
          "The medium-tank blueprint chest costs 6000 brown points, so 2000 is insufficient. Choose the unit type you need and compare cost and stock. The wrench shown here is for Mechanic, not a gear key from the event calendar."
        ]
      },
      "dismantling": {
        "title": "Dismantling: returns and losses",
        "alt": "Disassembly Plant, part dismantling tab and the in-game material and blueprint return rule.",
        "points": [
          "Open the Disassembly Plant → “Разборка детали” (Part dismantling). This differs from unit dismantling, reset and the “Улучшенный разбор” tab.",
          "The in-game rule: gold ++ returns 50% of materials spent; other parts return all materials. Blueprints are not returned.",
          "Three parts are visible here. Being listed does not mean every part is unwanted. Always review Quick Select, especially for rare parts and useful duplicates.",
          "“Разобрать” confirms destruction. Example: of 100 materials spent on gold ++, 50 return; recrafting needs the missing materials and a new blueprint. This calculation illustrates the rule, not a return preview shown in this screenshot."
        ]
      },
      "alliance-store": {
        "title": "Alliance Store: buy for your army",
        "alt": "Alliance contribution store with different unit blueprint chests.",
        "points": [
          "Contribution coins pay for these offers. The example balance is 173; compare it with the chest price.",
          "The howitzer blueprint chest is priced at 2360 here, while many other unit types cost 4720. These are this offer’s prices. Do not buy an irrelevant unit type just because it is available.",
          "Material chests and blueprint chests solve different shortages. “Распродано” means sold out; check the refresh timer."
        ]
      },
      "arena-store": {
        "title": "Arena Store: blueprints, materials and Mechanic",
        "alt": "Arena Store with chests, Armorer’s Wrenches, prices and sold-out labels.",
        "points": [
          "Several chests have similar names. Open each description before buying: blueprint or materials, what quality, random or selectable?",
          "Armorer’s Wrenches develop Mechanic rather than craft parts directly. The cogs below are unit components, not part-crafting materials.",
          "Discounts, stock and the timer belong to this store rotation. Prioritize your core army rather than buying everything on sale."
        ]
      },
      "base-workshop": {
        "title": "Find the workshop and Disassembly Plant",
        "alt": "Base with the Parts Workshop near the center and Disassembly Plant toward the upper left.",
        "points": [
          "The building labeled “Мастерская запчастей” is the Parts Workshop. Look here for crafting and the entry to blueprint conversion.",
          "The “Разборочный комплекс” is a separate building: the Disassembly Plant with the part dismantling tab shown earlier. These buildings and operations differ."
        ]
      },
      "campaign-auto-disassembly": {
        "title": "Campaign: enable automatic Copper part disassembly",
        "alt": "Campaign screen with the Copper part auto-disassembly checkbox enabled at the bottom left.",
        "points": [
          "The checkbox is directly at the bottom left of the main campaign screen: “Автоматически разбирать детали уровня Медь”. It is enabled here. “Медь” means Copper, the bronze tier discussed in this guide.",
          "The accumulated reward area is right of center and currently says all rewards claimed. The checkbox recycles the relevant loot; it does not turn items into gold, improve drop quality or purchase energy."
        ]
      },
      "conversion-selection": {
        "title": "Step 1. Open conversion and inspect the cards",
        "alt": "Main blueprint conversion screen with two blueprint cards, filter and confirmation button.",
        "points": [
          "Open “Конвертировать”. The left description explains that blueprints become research or advanced research points for the Conversion Store.",
          "The cards show an NS-37 aircraft gun and a 48-round rocket launcher blueprint. They illustrate the interface, not a recommendation to destroy these particular items. Check each against your unit plan.",
          "Open “Фильтр” to filter by camp and unit type. The next screenshot explains those settings.",
          "Use “Конвертировать” only after reviewing your actual selection. Check the blueprints spent and the currency gained before confirming; visit the store after conversion."
        ]
      }
    }
  },
  "vi": {
    "zoom": "Phóng to ảnh",
    "close": "Đóng",
    "original": "Mở ảnh gốc",
    "note": "Ảnh do người chơi cung cấp. Giao diện tiếng Nga; giá, số lượng và giảm giá là ví dụ của tài khoản này, không phải điều kiện cố định.",
    "items": {
      "conversion-filter": {
        "title": "Bước 2. Lọc bản vẽ không cần",
        "alt": "Bộ lọc chuyển đổi bản vẽ đang chọn mọi phe và loại quân hiển thị.",
        "points": [
          "Nút bộ lọc. Cửa sổ này đổi danh sách hiển thị, chưa chuyển đổi bản vẽ nào.",
          "Phe và nhóm đa dụng. Kiểm tra riêng bản vẽ đa dụng; đa dụng không có nghĩa là thừa.",
          "Loại quân. Hiện mọi loại đều được chọn. Ví dụ muốn giữ lựu pháo, chỉ hiển thị loại không cần và bỏ chọn “Гаубицы”. Kiểm tra chất lượng bạc trên thẻ; màn hình này không có bộ lọc chất lượng riêng.",
          "Nhấn “ОК”, quay lại thẻ và kiểm tra lựa chọn thực tế trước khi xác nhận. Bộ lọc hiển thị không bảo vệ khỏi chọn hàng loạt sai."
        ]
      },
      "conversion-store": {
        "title": "Bước 3. Dùng điểm ở cửa hàng chuyển đổi",
        "alt": "Cửa hàng chuyển đổi có hai số dư riêng 650 và 2000, rương và cờ lê.",
        "points": [
          "Sau chuyển đổi, mở “Магазин конверсии” bên trái để chọn thưởng, không phải chọn bản vẽ đem đổi.",
          "Hai tiền tệ tách biệt: ví dụ 650 điểm xanh và 2000 điểm nâu. Không cộng chung; so đúng biểu tượng giá và số dư.",
          "Rương vật liệu giá 800 điểm xanh, rương bản vẽ cạnh đó giá 1800. Có 650 thì chưa đủ. Đọc mô tả vì rương không bảo đảm được chọn linh kiện cụ thể.",
          "Rương bản vẽ tăng hạng trung giá 6000 điểm nâu; 2000 chưa đủ. Chọn đúng quân, xem giá và giới hạn. Cờ lê ở đây dùng cho Thợ máy, không phải chìa khóa trang bị trong lịch sự kiện."
        ]
      },
      "dismantling": {
        "title": "Tháo: hoàn lại và mất đi",
        "alt": "Nhà máy tháo, mục tháo linh kiện và quy tắc hoàn vật liệu, bản vẽ.",
        "points": [
          "Vào nhà máy tháo → “Разборка детали”. Khác với tháo đơn vị, đặt lại và tab “Улучшенный разбор”.",
          "Quy tắc trong game: vàng ++ hoàn 50% vật liệu đã dùng; linh kiện khác hoàn toàn bộ vật liệu. Không hoàn bản vẽ.",
          "Ở đây có ba linh kiện hiển thị. Có trong danh sách không có nghĩa đều là đồ thừa. Xem lại chọn nhanh, nhất là món hiếm và bản sao cần giữ.",
          "“Разобрать” xác nhận hủy. Ví dụ dùng 100 vật liệu cho vàng ++ thì nhận lại 50; chế tạo lại cần bù vật liệu và bản vẽ mới. Đây là phép tính minh họa, không phải xem trước hoàn đồ có trong ảnh."
        ]
      },
      "alliance-store": {
        "title": "Cửa hàng liên minh: mua theo đội hình",
        "alt": "Cửa hàng dùng xu đóng góp và rương bản vẽ các loại quân.",
        "points": [
          "Xu đóng góp dùng để mua ở đây. Ví dụ đang có 173; so với giá rương.",
          "Rương bản vẽ lựu pháo trong ảnh giá 2360, nhiều loại khác 4720. Đây là giá của đề nghị này. Đừng mua loại quân ngoài kế hoạch chỉ vì có hàng.",
          "Rương vật liệu và rương bản vẽ giải quyết hai nhu cầu khác nhau. “Распродано” nghĩa là hết hàng; theo dõi giờ làm mới."
        ]
      },
      "arena-store": {
        "title": "Cửa hàng đấu trường: bản vẽ, vật liệu, Thợ máy",
        "alt": "Cửa hàng đấu trường có rương, cờ lê, giá và nhãn hết hàng.",
        "points": [
          "Nhiều rương có tên gần giống. Mở mô tả để biết bản vẽ hay vật liệu, chất lượng, ngẫu nhiên hay tự chọn.",
          "Cờ lê tăng Thợ máy, không trực tiếp chế tạo linh kiện. Bánh răng phía dưới là phụ tùng đơn vị, không phải vật liệu chế tạo linh kiện.",
          "Giảm giá, tồn kho và bộ đếm thuộc lượt cửa hàng hiện tại. Ưu tiên quân chủ lực thay vì mua mọi món giảm giá."
        ]
      },
      "base-workshop": {
        "title": "Vị trí xưởng linh kiện và nhà máy tháo",
        "alt": "Căn cứ có xưởng linh kiện gần giữa và nhà máy tháo phía trên bên trái.",
        "points": [
          "Công trình “Мастерская запчастей” là xưởng linh kiện. Tìm chế tạo và lối vào chuyển đổi bản vẽ ở đây.",
          "“Разборочный комплекс” là nhà máy tháo riêng, có tab tháo linh kiện đã minh họa. Đừng nhầm hai công trình và hai thao tác."
        ]
      },
      "campaign-auto-disassembly": {
        "title": "Chiến dịch: bật tự tháo linh kiện Đồng",
        "alt": "Màn hình chiến dịch với ô tự tháo linh kiện Đồng đã bật ở góc dưới trái.",
        "points": [
          "Ô ở ngay góc dưới trái màn hình chiến dịch chính: “Автоматически разбирать детали уровня Медь”. Trong ảnh đã bật. “Медь” là đồng, tức bậc bronze của hướng dẫn.",
          "Khu nhận thưởng tích lũy nằm bên phải giữa, hiện báo đã nhận hết. Ô này tái chế đồ rơi phù hợp; không đổi thành vàng, tăng chất lượng đồ rơi hay mua năng lượng."
        ]
      },
      "conversion-selection": {
        "title": "Bước 1. Mở chuyển đổi và kiểm tra thẻ",
        "alt": "Màn hình chuyển đổi chính có hai thẻ bản vẽ, bộ lọc và nút xác nhận.",
        "points": [
          "Mở “Конвертировать”. Mô tả bên trái cho biết bản vẽ đổi thành điểm nghiên cứu hoặc nghiên cứu nâng cao dùng tại cửa hàng chuyển đổi.",
          "Có bản vẽ pháo máy bay NS-37 và bệ phóng 48 ống. Đây chỉ là ví dụ giao diện, không phải yêu cầu hủy hai món này. So từng món với kế hoạch đơn vị.",
          "Mở “Фильтр” để lọc phe và loại quân. Ảnh tiếp theo giải thích bộ lọc.",
          "Chỉ nhấn “Конвертировать” sau khi kiểm tra lựa chọn thực tế. Xem bản vẽ tiêu hao và loại điểm nhận trước xác nhận; sau đó mới sang cửa hàng."
        ]
      }
    }
  },
  "ar": {
    "zoom": "تكبير الصورة",
    "close": "إغلاق",
    "original": "فتح الصورة الأصلية",
    "note": "صور مقدمة من لاعب. الواجهة بالروسية؛ الأسعار والمخزون والخصومات أمثلة من هذا الحساب وليست شروطًا ثابتة للمتجر.",
    "items": {
      "conversion-filter": {
        "title": "الخطوة 2. تصفية المخططات غير المطلوبة",
        "alt": "مرشح تحويل المخططات مع تحديد كل المعسكرات وأنواع الوحدات المعروضة.",
        "points": [
          "مدخل المرشح. هذه النافذة تغير العرض فقط ولا تحول أي مخطط.",
          "المعسكر والمخططات العامة. راجع العامة منفصلة؛ كونها عامة لا يعني أنها غير مطلوبة.",
          "نوع الوحدة. كل الأنواع محددة حاليًا. مثلًا للاحتفاظ بمخططات الهاوتزر أظهر الأنواع غير المطلوبة وأزل تحديد “Гаубицы”. راجع الجودة الفضية على البطاقات؛ لا يوجد مرشح جودة منفصل في هذه النافذة.",
          "اضغط “ОК” وعد إلى البطاقات وافحص التحديد الفعلي قبل تأكيد التحويل. مرشح العرض لا يحمي من التحديد الجماعي الخاطئ."
        ]
      },
      "conversion-store": {
        "title": "الخطوة 3. إنفاق النقاط في متجر التحويل",
        "alt": "متجر التحويل برصيدين منفصلين 650 و2000 وصناديق ومفاتيح الميكانيكي.",
        "points": [
          "بعد التحويل افتح “Магазин конверсии” يسارًا. هنا تختار المكافأة لا المخططات المستهلكة.",
          "العملتان منفصلتان: في المثال 650 نقطة زرقاء و2000 بنية. لا تجمعهما وطابق رمز السعر مع رمز الرصيد.",
          "صندوق المواد بسعر 800 نقطة زرقاء وصندوق المخططات بجواره بسعر 1800؛ رصيد 650 لا يكفي. اقرأ الوصف لأن الصندوق لا يضمن اختيار قطعة محددة.",
          "صندوق مخططات الدبابة المتوسطة بسعر 6000 نقطة بنية؛ 2000 لا تكفي. اختر نوع الوحدة المطلوب وافحص السعر والمخزون. المفتاح هنا للميكانيكي وليس مفتاح العتاد في تقويم الأحداث."
        ]
      },
      "dismantling": {
        "title": "التفكيك: ما يعود وما يُفقد",
        "alt": "منشأة التفكيك وقاعدة إعادة المواد وعدم إعادة المخططات.",
        "points": [
          "افتح منشأة التفكيك ← “Разборка детали”. تختلف عن تفكيك الوحدات وإعادة الضبط وتبويب “Улучшенный разбор”.",
          "القاعدة داخل اللعبة: الذهبي ++ يعيد 50% من المواد المستهلكة؛ القطع الأخرى تعيد كل المواد. المخططات لا تعود.",
          "تظهر هنا ثلاث قطع. ظهور القطعة في القائمة لا يعني أنها غير مطلوبة. راجع الاختيار السريع خصوصًا للقطع النادرة والنسخ المفيدة.",
          "زر “Разобрать” يؤكد الإتلاف. مثال: من 100 مادة مستهلكة للذهبي ++ تعود 50؛ إعادة التصنيع تحتاج تعويض المواد ومخططًا جديدًا. هذا حساب توضيحي وليس معاينة عائد ظاهرة في الصورة."
        ]
      },
      "alliance-store": {
        "title": "متجر التحالف: اشترِ حسب جيشك",
        "alt": "متجر بعملات المساهمة وصناديق مخططات أنواع الوحدات.",
        "points": [
          "عملات المساهمة تُستخدم هنا. الرصيد في المثال 173؛ قارنه بسعر الصندوق.",
          "صندوق مخطط الهاوتزر بسعر 2360 هنا وكثير من الأنواع الأخرى بسعر 4720. هذه أسعار العرض المصور. لا تشترِ نوعًا لا تحتاجه لمجرد توفره.",
          "صندوق المواد يختلف عن صندوق المخططات. “Распродано” تعني نفاد المعروض؛ تابع موعد تحديث المتجر."
        ]
      },
      "arena-store": {
        "title": "متجر الساحة: المخططات والمواد والميكانيكي",
        "alt": "متجر الساحة مع الصناديق والمفاتيح والأسعار وعلامات نفاد المعروض.",
        "points": [
          "أسماء بعض الصناديق متشابهة. افتح الوصف لتعرف هل هي مخططات أم مواد، وجودتها وهل هي عشوائية أم اختيارية.",
          "مفاتيح الميكانيكي تطوره ولا تصنع القطع مباشرة. التروس أدناه مكونات للوحدات وليست مواد تصنيع القطع.",
          "الخصومات والمخزون والمؤقت تخص الدورة الحالية. أعطِ أولوية لوحدتك الأساسية بدل شراء كل ما عليه خصم."
        ]
      },
      "base-workshop": {
        "title": "موقع ورشة القطع ومنشأة التفكيك",
        "alt": "قاعدة فيها ورشة القطع قرب الوسط ومنشأة التفكيك أعلى اليسار.",
        "points": [
          "المبنى المسمى “Мастерская запчастей” هو ورشة القطع. ابحث هنا عن التصنيع ومدخل تحويل المخططات.",
          "“Разборочный комплекс” مبنى منفصل هو منشأة التفكيك وفيه تبويب تفكيك القطع الموضح سابقًا. لا تخلط المبنيين أو العمليتين."
        ]
      },
      "campaign-auto-disassembly": {
        "title": "الحملة: فعّل التفكيك التلقائي للقطع النحاسية",
        "alt": "شاشة الحملة مع تفعيل خيار تفكيك القطع النحاسية أسفل اليسار.",
        "points": [
          "الخيار مباشرة أسفل يسار شاشة الحملة الرئيسية بعنوان “Автоматически разбирать детали уровня Медь”. هو مفعّل في الصورة. كلمة “Медь” تعني النحاس، وهي درجة البرونز المقصودة في الدليل.",
          "منطقة استلام المكافآت المتراكمة يمين الوسط وتعرض أن الكل مستلم. الخيار يعيد تدوير الغنائم المعنية؛ لا يحولها إلى ذهب ولا يرفع جودة السقوط ولا يشتري الطاقة."
        ]
      },
      "conversion-selection": {
        "title": "الخطوة 1. افتح التحويل وافحص البطاقات",
        "alt": "شاشة تحويل المخططات الرئيسية ببطاقتين ومرشح وزر تأكيد.",
        "points": [
          "افتح “Конвертировать”. يوضح النص يسارًا أن المخططات تتحول إلى نقاط بحث أو بحث متقدم لمتجر التحويل.",
          "تظهر مخططات مدفع الطائرة NS-37 وقاذف 48 صاروخًا. هي أمثلة للواجهة وليست توصية بإتلاف هذين العنصرين. راجع كل مخطط وفق خطة وحداتك.",
          "افتح “Фильтр” لتصفية المعسكر ونوع الوحدة. الصورة التالية تشرح الإعدادات.",
          "استخدم “Конвертировать” بعد فحص التحديد الفعلي فقط. تحقق من المخططات المستهلكة والعملة المكتسبة قبل التأكيد ثم انتقل للمتجر."
        ]
      }
    }
  }
};
