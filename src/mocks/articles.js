export const DIRECTIONS = [
  { id: 500, name: 'Арктика' },
  { id: 1280, name: 'Восток' },
  { id: 180, name: 'Кавказ' },
  { id: 1281, name: 'Поволжье' },
  { id: 1285, name: 'Север' },
  { id: 188, name: 'Северо-Запад' },
  { id: 499, name: 'Сибирь' },
  { id: 1282, name: 'Урал' },
  { id: 191, name: 'Центр' },
  { id: 181, name: 'Черноземье' },
  { id: 192, name: 'Юг' }
];

export const REGIONS = [
  { id: 108, name: 'Алтайский край', directionsId: [499] },
  { id: 26, name: 'Архангельская область', directionsId: [1285, 500] },
  { id: 109, name: 'Волгоградская область', directionsId: [1281] },
  { id: 89, name: 'Еврейская автономная область', directionsId: [1280] },
  { id: 96, name: 'Иркутская область', directionsId: [499] },
  { id: 29, name: 'Республика Дагестан', directionsId: [180] },
  { id: 25, name: 'Республика Карелия', directionsId: [1285, 500] },
  { id: 98, name: 'Свердловская область', directionsId: [1282] },
  { id: 93, name: 'Челябинская область', directionsId: [1282] },
  { id: 51, name: 'Тверская область', directionsId: [191] },
  { id: 92, name: 'Вологодская область', directionsId: [1285] }
];

export const TAGS = [
  { id: 114, name: 'Зима' },
  { id: 111, name: 'С детьми' },
  { id: 222, name: 'С подростком' },
  { id: 31, name: 'Автомаршрут' },
  { id: 34, name: 'Межсезонье' },
  { id: 33, name: 'На выходные' },
  { id: 29, name: 'Активный отдых' },
  { id: 32, name: 'Лето' },
  { id: 30, name: 'Круглый год' }
];

const IMG = {
  volgograd: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
  enisey: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
  vladivostok: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200',
  belomore: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200',
  polyarny: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200',
  stars: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200',
  saratov: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
  nizhegorod: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200',
  kamensk: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200',
  ural: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=1200',
  bam: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
  birobidzhan: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200',
  kurgan: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200',
  karelia: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200',
  sayano: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
  chelyabinsk: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
  tver: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200',
  ivanovo: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200',
  dagestan: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=1200',
  vytegra: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200'
};

export const ARTICLES = [
  { id: 5122, title: 'По пути к неизведанному: автомаршрут по Волгоградской области', image: IMG.volgograd, link: '/article/po-puti-k-neizvedannomu', description: 'Загадки старых подземелий, тайны звездного неба и «марсианские» пески.', tags: ['С детьми','Автомаршрут','С подростком','Лето','Межсезонье'], properties: { distance: '660 км', timezone: 'GMT+3', duration: '3 дня', season: 'апрель-октябрь' }, route: ['Волгоград','Калачевский р-н','Иловлинский р-н','Ольховский р-н','Жирновский р-н'] },
  { id: 5110, title: 'Енисейский тракт', image: IMG.enisey, link: '/article/eniseyskiy-trakt', description: 'Автомобильное путешествие по сибирской земле, где оживает история.', tags: ['С подростком','Зима','Круглый год','Межсезонье','Лето','Автомаршрут','С детьми'], properties: { distance: '440 км', timezone: 'GMT+7', duration: '3 дня', season: 'круглый год' }, route: ['Красноярск','Барабаново','Казачинское','Енисейск'] },
  { id: 5104, title: 'Маяки Владивостока', image: IMG.vladivostok, link: '/article/mayaki-vladivostoka', description: 'Любуемся маяками в однодневном путешествии по столице Дальнего Востока.', tags: ['Автомаршрут','На выходные','С детьми','Межсезонье','Лето','С подростком'], properties: { distance: '42 км', timezone: 'GMT+10', duration: '1 день', season: 'июнь-сентябрь' }, route: ['Владивосток'] },
  { id: 5068, title: 'Белое море', image: IMG.belomore, link: '/article/beloe-more', description: 'Недельное автопутешествие по морскому побережью Архангельской области.', tags: ['Межсезонье','Лето','Круглый год','Активный отдых','Автомаршрут','Зима','С детьми','С подростком'], properties: { distance: '1120 км', timezone: 'GMT+3', duration: '8 дней', season: 'круглый год' }, route: ['Архангельск','Малые Карелы','Рикасово','Левковка','Северодвинск','Нёнокса','Уна','Луда','Пурнема','Онега...'] },
  { id: 5063, title: 'Полярный', image: IMG.polyarny, link: '/article/polyarnyy', description: 'Трехдневное автопутешествие по российской Арктике.', tags: ['С подростком','Активный отдых','Межсезонье','Зима','Автомаршрут','С детьми','Лето'], properties: { distance: '1210 км', timezone: 'GMT+5', duration: '3 дня', season: 'круглый год' }, route: ['Ноябрьск','Пуровский р-н','Новый Уренгой','Надымский р-н','Горнокнязевск','Салехард'] },
  { id: 5020, title: 'Под светом звезд', image: IMG.stars, link: '/article/pod-svetom-zvezd', description: 'Трехдневная поездка по горным дорогам Карачаево-Черкесии.', tags: ['Круглый год','Межсезонье','Зима','С детьми','Лето','Активный отдых','Автомаршрут','С подростком'], properties: { distance: '590 км', timezone: 'GMT+3', duration: '3 дня', season: 'круглый год' }, route: ['Нижний Архыз','Архыз','Теберда','Домбай','Черкесск'] },
  { id: 5018, title: 'Саратовская область своими глазами', image: IMG.saratov, link: '/article/saratovskaya-oblast', description: 'На авто по берегам Великой Волги.', tags: ['С детьми','Межсезонье','Круглый год','Автомаршрут','С подростком','Зима','Лето'], properties: { distance: '370 км', timezone: 'GMT+4', duration: '3 дня', season: 'круглый год' }, route: ['Саратов','Зоркино','Вольск','Хвалынск'] },
  { id: 4967, title: 'От нижегородских святынь до саратовских широт', image: IMG.nizhegorod, link: '/article/nizhny-saratov', description: 'Пятидневная поездка по городам и селам Поволжья.', tags: ['С подростком','Лето','Зима','Межсезонье','С детьми','Автомаршрут','Круглый год'], properties: { distance: '950 км', timezone: 'GMT+3', duration: '5 дней', season: 'круглый год' }, route: ['Арзамас','Дивеево','Лукоянов','Большое Болдино','Саранск','Пенза','Саратов'] },
  { id: 4936, title: 'Дорогами князей и мастеров Нижегородского края', image: IMG.nizhegorod, link: '/article/nnovgorod-gorodets', description: 'Любуемся ремесленными изделиями, вспоминаем историю Второго народного ополчения, знакомимся с биографией Чкалова.', tags: ['Автомаршрут','С детьми','На выходные','Зима','С подростком','Межсезонье','Круглый год','Лето'], properties: { distance: '240 км', timezone: 'GMT+3', duration: '2 дня', season: 'круглый год' }, route: ['Нижний Новгород','Балахна','Пурех','Чкаловск','Заволжье','Городец','Нижний Новгород'] },
  { id: 4873, title: 'Вдоль Исети на звук колокола: путешествие в Каменск-Уральский', image: IMG.kamensk, link: '/article/kamensk-uralskiy', description: 'Старинное оружие, современные колокола и живописные скалы.', tags: ['Межсезонье','Круглый год','С подростком','Лето','На выходные','С детьми','Автомаршрут','Зима'], properties: { distance: '70 км', timezone: 'GMT+5', duration: '2 дня', season: 'круглый год' }, route: ['Каменск-Уральский','Рыбниковское','Бекленищева'] },
  { id: 4871, title: 'Северный Урал: путешествие через века и вершины', image: IMG.ural, link: '/article/severnyy-ural', description: 'Четырехдневный автомаршрут по Свердловской области.', tags: ['Автомаршрут','Межсезонье','Лето','Активный отдых','Зима','С подростком','Круглый год'], properties: { distance: '1920 км', timezone: 'GMT+5', duration: '4 дня', season: 'круглый год' }, route: ['Екатеринбург','Невьянск','Верхотурье','Меркушино','Карпинск','Краснотурьинск','Серов...'] },
  { id: 4798, title: 'БАМ туристический: путешествие по Иркутской области', image: IMG.bam, link: '/article/bam-turistichesky', description: 'Иркутск, Байкал и легендарный БАМ — изучаем регион в большом автопутешествии.', tags: ['Лето','С детьми','Автомаршрут','Активный отдых','Круглый год','Зима','Межсезонье'], properties: { distance: '1300 км', timezone: 'GMT+8', duration: '8 дней', season: 'круглый год' }, route: ['Иркутск','Тальцы','Листвянка','Ангарск','Черемхово','Братск','Усть-Кут'] }
];