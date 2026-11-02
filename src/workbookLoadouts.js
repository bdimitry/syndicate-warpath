// User workbook A.xlsx: Легкие танки, ОБТ F2P, MBT P2W. Duplicate light-tank layouts in A (2).xlsx are counted once.
// Each skill row is a complete alternative; positions map to the portrait above, not to an assumed leader/aide role.
export const workbookCopy={
 ru:{variant:'Навыки из таблицы',original:'Исходная комплектация',credit:'Таблицы SyndiCate',note:'Навыки перенесены по портретам и расположению иконок в таблице. Роли командира/помощника и снаряжение не указаны. Выбирай целый вариант: сочетание отдельных навыков из разных строк автором не задано.',gear:'Снаряжение не указано.'},
 en:{variant:'Workbook skills',original:'Original loadout',credit:'SyndiCate workbooks',note:'Skills follow the portraits and icon positions in the workbook. Leader/aide roles and gear are unspecified. Choose a complete variant; mixing skills across rows was not specified by the author.',gear:'Gear is not specified.'},
 vi:{variant:'Kỹ năng từ bảng',original:'Trang bị ban đầu',credit:'Bảng SyndiCate',note:'Kỹ năng theo chân dung và vị trí biểu tượng trong bảng. Chưa chỉ định vai trò chỉ huy/trợ lý và trang bị. Chọn trọn một phương án; tác giả chưa chỉ định việc trộn kỹ năng giữa các hàng.',gear:'Chưa chỉ định trang bị.'},
 ar:{variant:'مهارات الجدول',original:'التجهيز الأصلي',credit:'جداول SyndiCate',note:'تتبع المهارات الصور ومواضع الأيقونات في الجدول. لم تُحدد أدوار القائد والمساعد أو المعدات. اختر بديلاً كاملاً؛ لم يحدد المؤلف مزج المهارات بين الصفوف.',gear:'لم تُحدد المعدات.'}
};
const make=(rows)=>rows.map(row=>({source:'syndicate-workbooks',rolesAssigned:false,officers:[{skills:row.slice(0,2).map(name=>({name}))},{skills:row.slice(2).map(name=>({name}))}],copy:Object.fromEntries(Object.entries(workbookCopy).map(([lang,t])=>[lang,{credit:t.credit,note:t.note}]))}));
const normal=['Meld Into Shadows','Artillery Advisor','Cold Hearted','Tactical Blueprint'];
const heavy=['Meld Into Shadows','Heavy Barrage','Armed to the Teeth','Full Suppression'];
export const workbookLoadouts={
 'light-f2p:rapier+haymaker':make([['Rapid Reload','Artillery Advisor','Covert Connections','Tactical Blueprint'],['Field Observation','Heavy Barrage','Declared Strike','Full Suppression']]),
 'light-f2p:lady-shadow+rapier':make([['Shaped Charge','Artillery Advisor','Cold Hearted','Tactical Blueprint'],['Shaped Charge','Heavy Barrage','Declared Strike','Full Suppression']]),
 'light-p2w:catseye+haymaker':make([['Meld Into Shadows','Artillery Advisor','Covert Connections','Tactical Blueprint'],['Meld Into Shadows','Heavy Barrage','Declared Strike','Full Suppression'],['Heat Core','Loyal Battalion','Animosity','Full Suppression']]),
 'mbt-field-f2p:lady-shadow+haymaker':make([normal,['Heat Core','Artillery Advisor','Cold Hearted','Tactical Blueprint']]),
 'mbt-field-f2p:lady-shadow+madame-havoc':make([['Shaped Charge','Heavy Barrage','Armed to the Teeth','Full Suppression'],['Sweetheart of the Troops','Heavy Barrage','Armed to the Teeth','Full Suppression']]),
 'mbt-field-p2w:desert-jaeger+haymaker':make([normal,heavy,["Highlander’s Grit",'Loyal Battalion','Heavy Barrage','Full Suppression']]),
 'mbt-field-p2w:catseye+haymaker':make([normal,heavy,['Heat Core','Loyal Battalion','Heavy Barrage','Full Suppression']]),
 'mbt-field-p2w:wings-of-wanderlust+lady-shadow':make([['Meld Into Shadows','Armed to the Teeth','Artillery Advisor','Full Suppression'],['Shaped Charge','Heavy Barrage','Armed to the Teeth','Full Suppression'],['Shaped Charge','Loyal Battalion','Armed to the Teeth','Full Suppression']])
};
