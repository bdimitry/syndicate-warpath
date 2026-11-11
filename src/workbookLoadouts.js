import {groundWorkbook} from './groundWorkbook';

// User workbook A.xlsx: Легкие танки, ОБТ F2P, MBT P2W. Duplicate light-tank layouts in A (2).xlsx are counted once.
// Each skill row is a complete alternative; positions map to the portrait above, not to an assumed leader/aide role.
export const workbookCopy={
 ru:{variant:'Навыки из таблицы',original:'Исходная комплектация',credit:'Таблицы SyndiCate',note:'Навыки перенесены по портретам и расположению иконок в таблице. Роли командира/помощника и снаряжение не указаны. Выбирай целый вариант: сочетание отдельных навыков из разных строк автором не задано.',gear:'Снаряжение не указано.'},
 en:{variant:'Workbook skills',original:'Original loadout',credit:'SyndiCate workbooks',note:'Skills follow the portraits and icon positions in the workbook. Leader/aide roles and gear are unspecified. Choose a complete variant; mixing skills across rows was not specified by the author.',gear:'Gear is not specified.'},
  pl: {variant:"Umiejętności zeszytu ćwiczeń",original:"Oryginalne wyposażenie",credit:"Skoroszyty SyndiCate",note:"Umiejętności odpowiadają portretom i pozycjom ikon w skoroszycie. Role i wyposażenie lidera/pomocnika są nieokreślone. Wybierz kompletny wariant; Autor nie określił mieszania umiejętności w rzędach.",gear:"Sprzęt nie jest określony."},
  pt: {variant:"Habilidades da pasta de trabalho",original:"Carregamento original",credit:"Pastas de trabalho SyndiCate",note:"As habilidades seguem os retratos e as posições dos ícones na pasta de trabalho. As funções e equipamentos de líder/assessor não são especificados. Escolha uma variante completa; misturar habilidades entre linhas não foi especificado pelo autor.",gear:"A engrenagem não está especificada."},
 vi:{variant:'Kỹ năng từ bảng',original:'Trang bị ban đầu',credit:'Bảng SyndiCate',note:'Kỹ năng theo chân dung và vị trí biểu tượng trong bảng. Chưa chỉ định vai trò chỉ huy/trợ lý và trang bị. Chọn trọn một phương án; tác giả chưa chỉ định việc trộn kỹ năng giữa các hàng.',gear:'Chưa chỉ định trang bị.'},
 ar:{variant:'مهارات الجدول',original:'التجهيز الأصلي',credit:'جداول SyndiCate',note:'تتبع المهارات الصور ومواضع الأيقونات في الجدول. لم تُحدد أدوار القائد والمساعد أو المعدات. اختر بديلاً كاملاً؛ لم يحدد المؤلف مزج المهارات بين الصفوف.',gear:'لم تُحدد المعدات.'}
};
const make=(rows)=>rows.map(row=>({source:'syndicate-workbooks',rolesAssigned:false,officers:[{skills:row.slice(0,2).filter(Boolean).map(skill=>typeof skill==='string'?{name:skill}:skill)},{skills:row.slice(2).filter(Boolean).map(skill=>typeof skill==='string'?{name:skill}:skill)}],copy:Object.fromEntries(Object.entries(workbookCopy).map(([lang,t])=>[lang,{credit:t.credit,note:t.note}]))}));
const normal=['Meld Into Shadows','Artillery Advisor','Cold Hearted','Tactical Blueprint'];
const heavy=['Meld Into Shadows','Heavy Barrage','Armed to the Teeth','Full Suppression'];
const workbookIcon=(id,name)=>({name,workbookIcon:`workbook-${id}.png`});
// The workbook shows Iron Cavalier first. The site lists The Arbitrator first.
const assaultP2w=['Sweetheart of the Troops','Full Suppression','Ruthless Outlaw',workbookIcon(135,'Resilient Charge')];
export const workbookLoadouts={
 ...Object.fromEntries(Object.entries(groundWorkbook).map(([key,build])=>[key,make(build.skills)])),
 'mbt-b2b-f2p:iron-cavalier+dawn-anthem':make([['Ruthless Outlaw','Crimebuster','Sweetheart of the Troops','Full Suppression']]),
 'mbt-b2b-p2w:the-arbitrator+iron-cavalier':make([assaultP2w]),
 // The workbook shows Gridlock Architect before Uncle Ivankov. Row 13 only supplies Gridlock's skills.
 'mbt-garrison:uncle-ivankov+gridlock-architect':make([
  ['Sweetheart of the Troops',workbookIcon(79,'Formidable Defense'),'Shaped Charge','Best of the Best'],
  [null,null,'Shaped Charge',workbookIcon(62,'Underworld Protection')],
 ]),
 'helicopter-f2p:haymaker+lady-shadow':make([normal]),
 'helicopter-p2w:haymaker+desert-jaeger':make([normal,heavy]),
 'superheavy-b2b-p2w:the-arbitrator+iron-cavalier':make([assaultP2w]),
 'light-f2p:rapier+haymaker':make([['Rapid Reload','Artillery Advisor','Covert Connections','Tactical Blueprint'],['Field Observation','Heavy Barrage','Declared Strike','Full Suppression']]),
 'light-f2p:lady-shadow+rapier':make([['Shaped Charge','Artillery Advisor','Cold Hearted','Tactical Blueprint'],['Shaped Charge','Heavy Barrage','Declared Strike','Full Suppression']]),
 'light-p2w:catseye+haymaker':make([['Meld Into Shadows','Artillery Advisor','Covert Connections','Tactical Blueprint'],['Meld Into Shadows','Heavy Barrage','Declared Strike','Full Suppression'],['Heat Core','Loyal Battalion','Animosity','Full Suppression']]),
 'mbt-field-f2p:lady-shadow+haymaker':make([normal,['Heat Core','Artillery Advisor','Cold Hearted','Tactical Blueprint']]),
 'mbt-field-f2p:lady-shadow+madame-havoc':make([['Shaped Charge','Heavy Barrage','Armed to the Teeth','Full Suppression'],['Sweetheart of the Troops','Heavy Barrage','Armed to the Teeth','Full Suppression']]),
 'mbt-field-p2w:desert-jaeger+haymaker':make([normal,heavy,["Highlander’s Grit",'Loyal Battalion','Heavy Barrage','Full Suppression']]),
 'mbt-field-p2w:catseye+haymaker':make([normal,heavy,['Heat Core','Loyal Battalion','Heavy Barrage','Full Suppression']]),
 'mbt-field-p2w:wings-of-wanderlust+lady-shadow':make([['Meld Into Shadows','Armed to the Teeth','Artillery Advisor','Full Suppression'],['Shaped Charge','Heavy Barrage','Armed to the Teeth','Full Suppression'],['Shaped Charge','Loyal Battalion','Armed to the Teeth','Full Suppression']])
};
