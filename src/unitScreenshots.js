export const unitScreenshots = {
  assembly: {file: 'assembly.webp', marks: [[85.7, 10.6], [74.8, 46.2]]},
  faction: {file: 'faction-crate.webp', marks: [[15.2, 63], [45, 81.7]]},
  progress: {file: 'crate-progress.webp', marks: [[52, 78.4], [84.9, 10.7]]},
  prototypes: {file: 'prototype-research.webp', marks: [[72.6, 65.1], [46.3, 89.8]]},
  disassembly: {file: 'advanced-disassembly.webp', marks: [[14.2, 39], [19.8, 43.7]]},
};

// Each entry supplies the caption, image description and numbered legend.
const localized = {
  ru: {
    assembly: ['Сборка: вкладка фракции и звёзды на карточке', 'Экран сборки с выбранной фракцией «Дозор мучеников».', 'Вкладка фракции над списком помогает искать юниты нужного лагеря. Сверяй название модели на карточке, когда ищешь одинаковую копию.', 'Звёзды показаны внизу карточки. Например, у подлодки типа «Кит» две золотые звезды без полосок — это 7.0.'],
    faction: ['Ящики: экран закрытой фракции', 'В списке ящиков выбрана закрытая «Дивизия авангарда».', 'Замок показывает, что ящик фракции пока недоступен. Перед открытием сверь выбранную фракцию с планом своего состава.', 'Под шкалой видны таймер и цена досрочного открытия. Если нет причины спешить, дождись открытия по таймеру; цену проверяй в игре.'],
    progress: ['Ящики: шкала купонов и обзор наград', 'Ящик наземных и военно-морских сил со шкалой 43 из 100.', 'Шкала показывает текущий прогресс на экране ящиков. Здесь 43 из 100 — пример из игры.', 'В «Обзоре наград» можно сверить содержимое выбранного ящика перед расходованием купонов.'],
    disassembly: ["Где получить фрагменты прототипов","Разборочный комплекс с выбранным кораблём и списком возврата.","Открой вкладку «Улучшенный разбор» в разборочном комплексе.","Проверь фракцию фрагментов в списке «Вернётся» перед подтверждением."],
    prototypes: ['Как узнать экран исследования прототипов', 'Экран с чертежами фракций и универсальных прототипов.', 'Чертежи и надпись «Исследование универсальных прототипов» помогают отличить этот экран от ящиков фракций.', 'Не используй «Исследование прототипов» как основной источник фрагментов. Купоны лучше сохранить для ящиков основной фракции.'],
  },
  en: {
    assembly: ['Assembly: faction tab and stars on a unit card', 'Assembly screen with the Martyrs’ Watch faction selected.', 'Use the faction tab above the list to find units from the right camp. Check the model name on the card when looking for an identical copy.', 'Stars appear at the bottom of the card. For example, the Kit-class submarine has two gold stars without stripes: tier 7.0.'],
    faction: ['Crates: a locked faction crate', 'The locked Vanguard Division crate is selected in the crate list.', 'The padlock shows that the faction crate is currently unavailable. Check that the selected faction matches your roster plan before opening it.', 'The timer and the early unlock price are below the progress bar. If there’s no reason to rush, wait for the timer; check the price in your game.'],
    progress: ['Crates: coupon progress and reward overview', 'Ground and naval forces crate with a progress bar at 43 out of 100.', 'The bar shows current progress on the crates screen. Here it reads 43 out of 100 as an in-game example.', 'Use the reward overview to check what the selected crate contains before spending coupons.'],
    disassembly: ["Where to get prototype pieces","Disassembly Plant with a selected ship and the return preview.","Open Advanced Unit Disassembly in the Disassembly Plant.","Check the faction of the pieces in the return preview before confirming."],
    prototypes: ['How to recognize the prototype research screen', 'Prototype research screen with faction and universal blueprints.', 'The blueprints and the universal prototype research label distinguish this screen from the faction crates.', 'Avoid Prototype Research as your main source of prototype pieces. Save coupons for your main faction’s crates.'],
  },
  vi: {
    assembly: ['Ghép đơn vị: thẻ phe và số sao trên thẻ đơn vị', 'Màn hình ghép đơn vị đang chọn phe Martyrs’ Watch.', 'Dùng thẻ phe phía trên danh sách để tìm đơn vị đúng phe. Kiểm tra tên mẫu trên thẻ khi tìm bản sao giống hệt.', 'Số sao nằm ở dưới thẻ. Ví dụ, tàu ngầm lớp Kit có hai sao vàng và không có vạch: bậc 7.0.'],
    faction: ['Hòm: hòm phe đang khóa', 'Hòm Vanguard Division đang khóa được chọn trong danh sách.', 'Biểu tượng ổ khóa cho biết hòm phe chưa mở. Trước khi mở, hãy kiểm tra phe đã chọn có phù hợp với kế hoạch đội hình không.', 'Bên dưới thanh tiến độ có bộ đếm thời gian và giá mở sớm. Nếu không cần gấp, hãy đợi hết giờ và kiểm tra giá trong trò chơi.'],
    progress: ['Hòm: tiến độ dùng phiếu và tổng quan phần thưởng', 'Hòm lực lượng mặt đất và hải quân với thanh tiến độ 43 trên 100.', 'Thanh này hiển thị tiến độ hiện tại trên màn hình hòm. Mức 43 trên 100 là ví dụ trong trò chơi.', 'Xem tổng quan phần thưởng để kiểm tra hòm đã chọn có gì trước khi dùng phiếu.'],
    disassembly: ["Nơi lấy mảnh nguyên mẫu","Xưởng tháo dỡ với tàu đã chọn và danh sách hoàn trả.","Mở mục tháo dỡ nâng cao trong xưởng tháo dỡ.","Kiểm tra phe của các mảnh trong danh sách hoàn trả trước khi xác nhận."],
    prototypes: ['Cách nhận biết màn hình nghiên cứu nguyên mẫu', 'Màn hình nghiên cứu với bản vẽ theo phe và bản vẽ phổ dụng.', 'Các bản vẽ và dòng chữ nghiên cứu nguyên mẫu phổ dụng giúp phân biệt màn hình này với hòm phe.', 'Tránh dùng Nghiên cứu nguyên mẫu làm nguồn mảnh chính. Giữ phiếu cho hòm phe chủ lực.'],
  },
  ar: {
    assembly: ['التجميع: تبويب الفصيل والنجوم على بطاقة الوحدة', 'شاشة التجميع مع اختيار فصيل حرس الشهداء.', 'استخدم تبويب الفصيل أعلى القائمة للعثور على وحدات المعسكر المطلوب. تحقّق من اسم الطراز على البطاقة عند البحث عن نسخة مطابقة.', 'تظهر النجوم أسفل البطاقة. مثلًا، تحمل غواصة فئة كيت نجمتين ذهبيتين دون شرائط، أي الدرجة 7.0.'],
    faction: ['الصناديق: صندوق فصيل مغلق', 'اختيار صندوق فرقة الطليعة المغلق في قائمة الصناديق.', 'يدل القفل على أن صندوق الفصيل غير متاح حاليًا. قبل الفتح، تأكّد من أن الفصيل المحدد يناسب خطة تشكيلتك.', 'يظهر المؤقّت وسعر الفتح المبكر أسفل شريط التقدّم. إذا لم تكن مستعجلًا، فانتظر انتهاء المؤقّت وتحقّق من السعر داخل اللعبة.'],
    progress: ['الصناديق: تقدّم القسائم ونظرة على المكافآت', 'صندوق القوات البرية والبحرية مع شريط تقدّم عند 43 من 100.', 'يعرض الشريط التقدّم الحالي في شاشة الصناديق. الرقم 43 من 100 هنا مثال من اللعبة.', 'استخدم نظرة المكافآت للتحقّق من محتويات الصندوق المحدد قبل إنفاق القسائم.'],
    disassembly: ["أين تحصل على قطع النماذج الأولية","مصنع التفكيك مع سفينة محددة ومعاينة العائد.","افتح تبويب تفكيك الوحدات المتقدّم في مصنع التفكيك.","تحقّق من فصيل القطع في معاينة العائد قبل التأكيد."],
    prototypes: ['كيف تتعرّف على شاشة أبحاث النماذج الأولية', 'شاشة أبحاث النماذج الأولية تعرض مخططات للفصائل ومخططات عامة.', 'المخططات وعبارة أبحاث النماذج الأولية العامة تميّز هذه الشاشة عن صناديق الفصائل.', 'تجنّب اعتماد أبحاث النماذج الأولية مصدرًا أساسيًا للقطع. احتفظ بالقسائم لصناديق فصيلك الأساسي.'],
  },
  pl: {
    assembly: ['Montaż: zakładka frakcji i gwiazdki na karcie', 'Ekran montażu z wybraną frakcją Martyrs’ Watch.', 'Użyj zakładki nad listą, aby znaleźć jednostki właściwej frakcji. Szukając identycznej kopii, sprawdź nazwę modelu na karcie.', 'Gwiazdki są na dole karty. Na przykład okręt podwodny typu Kit ma dwie złote gwiazdki bez pasków, czyli stopień 7.0.'],
    faction: ['Skrzynie: zablokowana skrzynia frakcji', 'Na liście wybrano zablokowaną skrzynię Vanguard Division.', 'Kłódka oznacza, że skrzynia frakcji nie jest jeszcze dostępna. Przed otwarciem sprawdź, czy wybrana frakcja pasuje do planu twojego składu.', 'Pod paskiem postępu widać licznik i cenę wcześniejszego otwarcia. Jeśli ci się nie spieszy, poczekaj do końca odliczania; sprawdź cenę w grze.'],
    progress: ['Skrzynie: postęp kuponów i przegląd nagród', 'Skrzynia sił lądowych i morskich z postępem 43 ze 100.', 'Pasek pokazuje bieżący postęp na ekranie skrzyń. 43 ze 100 to przykład z gry.', 'Przed wydaniem kuponów sprawdź zawartość wybranej skrzyni w przeglądzie nagród.'],
    disassembly: ["Gdzie zdobyć fragmenty prototypów","Zakład demontażu z wybranym okrętem i podglądem zwrotu.","Otwórz kartę zaawansowanego demontażu jednostek w zakładzie demontażu.","Przed zatwierdzeniem sprawdź frakcję fragmentów w podglądzie zwrotu."],
    prototypes: ['Jak rozpoznać ekran badań prototypów', 'Ekran badań prototypów z planami frakcji i planami uniwersalnymi.', 'Plany i napis o badaniu uniwersalnych prototypów odróżniają ten ekran od skrzyń frakcji.', 'Unikaj badań prototypów jako głównego źródła fragmentów. Zachowaj kupony na skrzynie głównej frakcji.'],
  },
  pt: {
    assembly: ['Montagem: aba da facção e estrelas na carta', 'Tela de montagem com a facção Martyrs’ Watch selecionada.', 'Use a aba acima da lista para encontrar unidades da facção certa. Confira o nome do modelo na carta ao procurar uma cópia idêntica.', 'As estrelas ficam na parte inferior da carta. Por exemplo, o submarino da classe Kit tem duas estrelas douradas sem marcas: grau 7.0.'],
    faction: ['Caixas: uma caixa de facção bloqueada', 'A caixa bloqueada da Vanguard Division está selecionada na lista.', 'O cadeado indica que a caixa da facção está indisponível. Antes de abrir, confirme se a facção selecionada combina com seu plano de formação.', 'O cronômetro e o preço para abrir antes do prazo ficam abaixo da barra de progresso. Se não houver pressa, espere o cronômetro e confira o preço no jogo.'],
    progress: ['Caixas: progresso dos cupons e resumo das recompensas', 'Caixa das forças terrestres e navais com a barra de progresso em 43 de 100.', 'A barra mostra o progresso atual na tela de caixas. O valor de 43 de 100 é um exemplo do jogo.', 'Consulte o resumo das recompensas para verificar o conteúdo da caixa selecionada antes de gastar cupons.'],
    disassembly: ["Onde obter fragmentos de protótipos","Instalação de desmontagem com um navio selecionado e a prévia do retorno.","Abra a aba de desmontagem avançada de unidades na instalação.","Confira a facção dos fragmentos na prévia do retorno antes de confirmar."],
    prototypes: ['Como reconhecer a tela de pesquisa de protótipos', 'Tela de pesquisa de protótipos com projetos de facções e projetos universais.', 'Os projetos e o texto sobre pesquisa de protótipos universais ajudam a distinguir esta tela das caixas de facção.', 'Evite usar a Pesquisa de Protótipos como fonte principal de fragmentos. Guarde os cupons para as caixas da facção principal.'],
  },
};

export function unitScreenshotCopy(lang, id) {
  const [title, alt, ...points] = localized[lang][id];
  return {title, alt, points};
}
