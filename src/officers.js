// Shared identities keep names consistent across troop guides.
export const officers = {
  'red-heat':{ru:'Красная жара',en:'Red Heat',name:'Fiona Kelly'},
  'fighting-falcon':{ru:'Боевой сокол',en:'Fighting Falcon',name:'Aliya Yumagulova',portrait:{width:136,height:192}},
  margarita:{ru:'Маргарита',en:'Margarita',name:'Matilde Sanchez'},
  'golden-eagle':{ru:'Золотой орёл',en:'Golden Eagle',name:'Jake Barnes'},
  'lady-shadow': {ru:'Госпожа теней',en:'Lady Shadow',name:'Mulian'},
  haymaker: {ru:'Стальная коса',en:'Haymaker',name:'Jackson Hays'},
  rapier: {ru:'Рапира',en:'Rapier',name:'Ye Qiming'},
  catseye: {ru:'Хитрая кошка',en:'Catseye',name:'Elena Loch'},
  'desert-jaeger': {ru:'Егерь пустыни',en:'Desert Jaeger',name:'Hans Seckler'},
  'steel-phoenix': {ru:'Стальной феникс',en:'Steel Phoenix',name:'Klaudia Nowak'},
  'rogue-edge': {ru:'Клинок беззакония',en:'Rogue Edge',name:'Mason Walker'},
  'herald-of-peace': {ru:'Вестник мира',en:'Herald of Peace',name:'Harmonix'},
  'wings-of-wanderlust': {ru:'Крылья скитальца',en:'Wings of Wanderlust',name:'Ethan Brown'},
  everbloom: {ru:'Неувядающий цветок',en:'Everbloom',name:'Nguyen Thu Suong'},
  'angel-of-light': {ru:'Ангел света',en:'Angel of Light',name:'Florence Borden'},
  scavenger: {ru:'Мусорщик',en:'Scavenger',name:'Bruno Stahl'},
  'the-arbitrator': {ru:'Арбитр',en:'The Arbitrator',name:'Robert Brown'},
  'madame-havoc': {ru:'Мадам хаос',en:'Madame Havoc',name:'Kyra Adler'},
  'iron-cavalier': {ru:'Железный всадник',en:'Iron Cavalier',name:'Mikhail Baturin'},
  'dawn-anthem': {ru:'Песнь рассвета',en:'Dawn Anthem',name:'Aminah Zanduni'},
  'uncle-ivankov': {ru:'Дядюшка Иванков',en:'Uncle Ivankov',name:'Ruslan Ivankov'},
  'gridlock-architect': {ru:'Железная роза',en:'Gridlock Architect',name:'Victoria Thorne'},
  "futurus-venturer": {"ru":"Искатель будущего","en":"Futurus Venturer","name":"Gavrilo Jolic"},
  "eye-of-providence": {"ru":"Глаз провидения","en":"Eye of Providence","name":"Aaron Matthews"},
  "silent-thunder": {"ru":"Безмолвный гром","en":"Silent Thunder","name":"Dai Gong"},
  "madame-vindicta": {"ru":"Мадам Виндикта","en":"Madame Vindicta","name":"Carolyn Heller"},
  "steel-angel": {"ru":"Стальной ангел","en":"Steel Angel","name":"Elif Demir"},
  "stinger-fist": {"ru":"Разящий кулак","en":"Stinger Fist","name":"Michel Louis"},
  "argent-flame": {"ru":"Серебристое пламя","en":"Argent Flame","name":"Steven Hammer"},
  "frostfire": {"ru":"Морозный огонь","en":"Frostfire","name":"Viktor Ivanovich"},
  "champion-of-the-people": {"ru":"Защитник народа","en":"Champion of the People","name":"Antonina Shevchenko"},
  "terrain-tactician": {"ru":"Говорящая с ветром","en":"Terrain Tactician","name":"Alicia Fels"},
  "maestro": {"ru":"Маэстро","en":"Maestro","name":"Emilio Solari"},
};

const identities=[
 ['shadow-chaser','Преследующая тень','Shadow Chaser','Valentina Cruz',true],['silver-fox','Серебряный лис','Silver Fox','Nicolás Acosta'],['fleeting-arrow','Стремительная стрела','Fleeting Arrow','Isabella Romano'],['nighthawk','Ночная птица','Nighthawk','Felix Fogel'],['bladewing','Крылатый клинок','Bladewing','Vasily Sokolov'],['cloud-buster','Небесная охотница','Cloud-Buster','Alina Lebed'],['darkwing','Чёрное крыло','Darkwing','Connor Lawrence'],['sky-jockey','Небесная наездница','Sky Jockey','Isabel Gómez'],
 ['captain-unbeaten','Непобедимый капитан','Captain Unbeaten','James Patrick'],['surf-strider','Скользящий по волнам','Surf Strider','David Knight'],['ripcurrent','Дитя прилива','Ripcurrent','Loic Messier'],['liberty-blaze','Пламя свободы','Liberty Blaze','Lucas Oliveira'],['la-sirena','Сирена','La Sirena','Camila Morales'],['tidal-fang','Клык приливов','Tidal Fang','Esmeralda Del Rio'],['skiptide','Волнорез','Skiptide','Leon Del Rio'],['dame-sombra','Сумрачная дама','Dame Sombra','Elena Casar'],['black-jack','Блэкджек','Black Jack','Jack Callahan',true],['steel-commodore','Стальной командор','Steel Commodore','Victoria Taylor'],
];
for(const [id,ru,en,name,tall] of identities) officers[id]={ru,en,name,...(tall?{portrait:{width:136,height:192}}:{})};

