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
  { id: 301, name: 'Круглый год' },
  { id: 302, name: 'Осень' },
  { id: 303, name: 'Весна' },
  { id: 304, name: 'Спокойный отдых' },
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
  { id: 5122, title: 'По пути к неизведанному: автомаршрут по Волгоградской области', image: IMG.volgograd, link: '/article/polyarny/', description: 'Загадки старых подземелий, тайны звездного неба и марсианские пески.', tags: ['С детьми','Автомаршрут','С подростком','Лето','Межсезонье'], properties: { distance: '660 км', timezone: 'GMT+3', duration: '3 дня', season: 'апрель-октябрь' }, route: ['Волгоград','Калачевский р-н','Иловлинский р-н','Ольховский р-н','Жирновский р-н'] },
  { id: 5110, title: 'Енисейский тракт', image: IMG.enisey, link: '/article/polyarny/', description: 'Автомобильное путешествие по сибирской земле, где оживает история.', tags: ['С подростком','Зима','Круглый год','Межсезонье','Лето','Автомаршрут','С детьми'], properties: { distance: '440 км', timezone: 'GMT+7', duration: '3 дня', season: 'круглый год' }, route: ['Красноярск','Барабаново','Казачинское','Енисейск'] },
  { id: 5104, title: 'Маяки Владивостока', image: IMG.vladivostok, link: '/article/polyarny/', description: 'Любуемся маяками в однодневном путешествии по столице Дальнего Востока.', tags: ['Автомаршрут','На выходные','С детьми','Межсезонье','Лето','С подростком'], properties: { distance: '42 км', timezone: 'GMT+10', duration: '1 день', season: 'июнь-сентябрь' }, route: ['Владивосток'] },
  { id: 5068, title: 'Белое море', image: IMG.belomore, link: '/article/polyarny/', description: 'Недельное автопутешествие по морскому побережью Архангельской области.', tags: ['Межсезонье','Лето','Круглый год','Активный отдых','Автомаршрут','Зима','С детьми','С подростком'], properties: { distance: '1120 км', timezone: 'GMT+3', duration: '8 дней', season: 'круглый год' }, route: ['Архангельск','Малые Карелы','Рикасово','Левковка','Северодвинск','Нёнокса','Уна','Луда','Пурнема','Онега...'] },
  { id: 5063, title: 'Полярный', image: IMG.polyarny, link: '/article/polyarny/', description: 'Трехдневное автопутешествие по российской Арктике.', tags: ['С подростком','Активный отдых','Межсезонье','Зима','Автомаршрут','С детьми','Лето'], properties: { distance: '1210 км', timezone: 'GMT+5', duration: '3 дня', season: 'круглый год' }, route: ['Ноябрьск','Пуровский р-н','Новый Уренгой','Надымский р-н','Горнокнязевск','Салехард'] },
  { id: 5020, title: 'Под светом звезд', image: IMG.stars, link: '/article/polyarny/', description: 'Трехдневная поездка по горным дорогам Карачаево-Черкесии.', tags: ['Круглый год','Межсезонье','Зима','С детьми','Лето','Активный отдых','Автомаршрут','С подростком'], properties: { distance: '590 км', timezone: 'GMT+3', duration: '3 дня', season: 'круглый год' }, route: ['Нижний Архыз','Архыз','Теберда','Домбай','Черкесск'] },
  { id: 5018, title: 'Саратовская область своими глазами', image: IMG.saratov, link: '/article/polyarny/', description: 'На авто по берегам Великой Волги.', tags: ['С детьми','Межсезонье','Круглый год','Автомаршрут','С подростком','Зима','Лето'], properties: { distance: '370 км', timezone: 'GMT+4', duration: '3 дня', season: 'круглый год' }, route: ['Саратов','Зоркино','Вольск','Хвалынск'] },
  { id: 4967, title: 'От нижегородских святынь до саратовских широт', image: IMG.nizhegorod, link: '/article/polyarny/', description: 'Пятидневная поездка по городам и селам Поволжья.', tags: ['С подростком','Лето','Зима','Межсезонье','С детьми','Автомаршрут','Круглый год'], properties: { distance: '950 км', timezone: 'GMT+3', duration: '5 дней', season: 'круглый год' }, route: ['Арзамас','Дивеево','Лукоянов','Большое Болдино','Саранск','Пенза','Саратов'] },
  { id: 4936, title: 'Дорогами князей и мастеров Нижегородского края', image: IMG.nizhegorod, link: '/article/polyarny/', description: 'Любуемся ремесленными изделиями, вспоминаем историю Второго народного ополчения, знакомимся с биографией Чкалова.', tags: ['Автомаршрут','С детьми','На выходные','Зима','С подростком','Межсезонье','Круглый год','Лето'], properties: { distance: '240 км', timezone: 'GMT+3', duration: '2 дня', season: 'круглый год' }, route: ['Нижний Новгород','Балахна','Пурех','Чкаловск','Заволжье','Городец','Нижний Новгород'] },
  { id: 4873, title: 'Вдоль Исети на звук колокола: путешествие в Каменск-Уральский', image: IMG.kamensk, link: '/article/polyarny/', description: 'Старинное оружие, современные колокола и живописные скалы.', tags: ['Межсезонье','Круглый год','С подростком','Лето','На выходные','С детьми','Автомаршрут','Зима'], properties: { distance: '70 км', timezone: 'GMT+5', duration: '2 дня', season: 'круглый год' }, route: ['Каменск-Уральский','Рыбниковское','Бекленищева'] },
  { id: 4871, title: 'Северный Урал: путешествие через века и вершины', image: IMG.ural, link: '/article/polyarny/', description: 'Четырехдневный автомаршрут по Свердловской области.', tags: ['Автомаршрут','Межсезонье','Лето','Активный отдых','Зима','С подростком','Круглый год'], properties: { distance: '1920 км', timezone: 'GMT+5', duration: '4 дня', season: 'круглый год' }, route: ['Екатеринбург','Невьянск','Верхотурье','Меркушино','Карпинск','Краснотурьинск','Серов...'] },
  { id: 4798, title: 'БАМ туристический: путешествие по Иркутской области', image: IMG.bam, link: '/article/polyarny/', description: 'Иркутск, Байкал и легендарный БАМ — изучаем регион в большом автопутешествии.', tags: ['Лето','С детьми','Автомаршрут','Активный отдых','Круглый год','Зима','Межсезонье'], properties: { distance: '1300 км', timezone: 'GMT+8', duration: '8 дней', season: 'круглый год' }, route: ['Иркутск','Тальцы','Листвянка','Ангарск','Черемхово','Братск','Усть-Кут'] }
];

export const ARTICLE_CONTENT = {
  'polyarny': {
    hero: {
      image: 'https://vmeste-rf.tv/upload/resize_cache/iblock/48a/1040_650_2/lori_0002385926_a6.jpg',
      imageAlt: 'Заснеженная тундра Ямала с оленьей упряжкой',
      photoCredit: 'Unsplash / Christopher Burns',
    },
    breadcrumbs: [
      { label: 'Главная', href: '/' },
      { label: 'Маршруты', href: '/' },
      { label: 'Полярный' },
    ],
    lead:
      'Трехдневное автопутешествие по российской Арктике — земле бескрайних просторов, вечной мерзлоты и несметных природных богатств.',
    intro: [
      'Маршрут проведет через три знаковых города Ямала. Салехард — единственный в мире город на линии Полярного круга. Молодой Ноябрьск, выросший среди тайги и болот благодаря освоению нефтяных месторождений. И Новый Уренгой — газовая столица России.',
      'Ямал — это место, где каждый километр пути открывает новую грань Севера: то молчаливую тундру, то бурлящую жизнь городов, то древние обряды, то передовые технологии.',
    ],
    howToGet: [
      { from: 'Из Москвы', text: '3057 км. Время в пути: примерно 40 часов' },
      { from: 'Из Санкт-Петербурга', text: '3700 км. Время в пути: примерно 2 дня. Есть платные участки' },
      { from: 'Из Екатеринбурга', text: '1950 км. Время в пути: чуть больше 1 дня' },
    ],
    routeMap: {
      summary: {
        totalDistance: '1210 км',
        duration: '3 дня',
        transport: 'Автомобиль',
        difficulty: 'Средняя',
      },

      points: [
        {
          id: 'noyabrsk',
          order: 1,
          name: 'Ноябрьск',
          type: 'city',
          description: 'Южные ворота Ямала, начало путешествия в Арктику.',
          address: 'ЯНАО, г. Ноябрьск',
          coordinates: [63.1935, 75.4511],
          dayRef: 'day-1-noyabrsk',
        },
        {
          id: 'novyy-urengoy',
          order: 2,
          name: 'Новый Уренгой',
          type: 'city',
          description: 'Газовая столица России, крупнейший город Ямала.',
          address: 'ЯНАО, г. Новый Уренгой',
          coordinates: [66.0833, 76.6333],
          dayRef: 'day-2-novyy-urengoy',
        },
        {
          id: 'nadym',
          order: 3,
          name: 'Надым',
          type: 'city',
          description: 'Город-первопроходец газовой отрасли.',
          address: 'ЯНАО, г. Надым',
          coordinates: [65.5319, 72.5172],
          dayRef: 'day-2-novyy-urengoy',
        },
        {
          id: 'salekhard',
          order: 4,
          name: 'Салехард',
          type: 'city',
          description: 'Единственный город в мире, расположенный на Полярном круге.',
          address: 'ЯНАО, г. Салехард',
          coordinates: [66.5299, 66.6137],
          dayRef: 'day-3-salekhard',
        },
      ],

      segments: [
        {
          from: 'noyabrsk',
          to: 'novyy-urengoy',
          distance: '560 км',
          duration: '7 часов',
          road: 'Р-404',
        },
        {
          from: 'novyy-urengoy',
          to: 'nadym',
          distance: '300 км',
          duration: '4 часа',
          road: 'автодорога Сургут — Салехард',
        },
        {
          from: 'nadym',
          to: 'salekhard',
          distance: '350 км',
          duration: '5 часов',
          road: 'автозимник',
        },
      ],

      gpxUrl: '/routes/polyarnyy.gpx',

      externalMaps: {
        yandex: 'https://yandex.ru/maps/?rtext=63.1935,75.4511~66.0833,76.6333~65.5319,72.5172~66.5299,66.6137&rtt=auto',
        osm: 'https://www.openstreetmap.org/directions?route=63.1935,75.4511;66.5299,66.6137',
      },
    },
    days: [
      {
        id: 'day-1-noyabrsk',
        title: 'День 1. Ноябрьск',
        description:
          'Путешествие начнется с южных ворот Ямала — Ноябрьска. Молодой город сочетает в себе индустриальное наследие, северные природные ландшафты и культурные особенности.',
        objects: [
          {
            id: 'noyabrsk-park',
            title: '«Ноябрьск-парк»',
            description:
              'Со времен зарождения Ноябрьска в центре города удалось сохранить обширный участок реликтового хвойного леса, который превратили в самый современный парк региона.',
            gallery: [
              {
                src: 'https://klau.club/uploads/posts/2023-06/1686132263_klau-club-p-derevyannie-dorozhki-v-lesu-instagram-29.jpg',
                alt: 'Хвойный лес парка с деревянными пешеходными дорожками',
                credit: 'Unsplash / Lukasz Szmigiel',
              },
            ],
            info: [
              { label: 'Адрес', value: 'г. Ноябрьск, ул. Ленина' },
              { label: 'Время работы', value: 'ежедневно' },
              { label: 'Время на осмотр', value: '90 минут' },
              { label: 'Цена билета', value: 'бесплатно' },
            ],
            features: [
              'Инклюзивность (подходит для людей с ограниченными возможностями)',
              'Работает летом', 'Работает зимой', 'Можно с животными',
              'Красивый вид', 'Интересно с детьми',
            ],
          },
          {
            id: 'etnopark-num',
            title: 'Этнопарк «Нум»',
            description:
              'Посреди Ноябрьск-парка есть уголок, где живут легенды и предания коренных народов Ямала. Назван он в честь главного божества ненцев — Нума.',
            gallery: [
              { src: 'https://tse2.mm.bing.net/th/id/OIP.mbc2OZoasdL6rv-X3J1YYgHaFb?rs=1&pid=ImgDetMain&o=7&rm=3', alt: 'Традиционный чум в этнопарке', credit: 'Unsplash' },
              { src: 'https://foresthouse.ru/wp-content/uploads/2022/12/severnyj-olen-yagel.jpg', alt: 'Северные олени в вольере', credit: 'Unsplash / Casey Horner' },
            ],
            info: [
              { label: 'Адрес', value: 'г. Ноябрьск, ул. Ленина, Ноябрьск-парк' },
              { label: 'Время работы', value: 'вт-пт 11:00-21:00, сб-вс 10:00-22:00' },
              { label: 'Время на осмотр', value: '60 минут' },
              { label: 'Контакты', value: '8 (800) 301-18-66' },
              { label: 'Цена билета', value: 'платно' },
              { label: 'Сайт', value: 'https://visitnoyabrsk.ru/num/', isLink: true },
            ],
            features: ['Инклюзивность (подходит для людей с ограниченными возможностями)'],
          },
          {
            id: 'komar',
            title: 'Памятник «Комар — хранитель Сибири»',
            description:
              'В поселке Ладный возвышается двухметровая скульптура комара весом 1,5 тонны. Футуристичный объект в стиле техно-арт сваяли рабочие из списанного металлолома.',
            gallery: [
              { src: 'https://www.ttelegraf.ru/wp-content/uploads/2019/08/e06a4e8dbc855473cf7a032290c765d4.jpg', alt: 'Металлическая скульптура комара в стиле техно-арт', credit: 'Unsplash / Sung Wang' },
            ],
            info: [
              { label: 'Адрес', value: 'г.о. Ноябрьск, п. Ладный, сквер Ветеранов' },
              { label: 'Время работы', value: 'пн-вс 08:30-20:00' },
              { label: 'Время на осмотр', value: '10 минут' },
              { label: 'Цена билета', value: 'бесплатно' },
            ],
            features: ['Работает летом', 'Работает зимой', 'Интересно с детьми'],
          },
        ],
        hotels: [
          { name: 'Ресторанно-гостиничный комплекс Аляска', stars: 3, distance: '1.2 км от центра', url: 'https://hotelalaska.ru/', image: 'https://static.tildacdn.com/tild3662-3661-4334-a338-346332353465/5H3A5431.jpg', classified: true },
          { name: 'Гостиница Россия', stars: 3, distance: '2 км от центра', url: 'https://russia-noyabrsk.ru/', image: 'https://tse4.mm.bing.net/th/id/OIP.izNXVh-cmAeMGg0GyK5juAHaFi?rs=1&pid=ImgDetMain&o=7&rm=3', classified: true },
          { name: 'Отель Европа', stars: 3, distance: '2.8 км от центра', url: 'https://evropahotel.ru/', image: 'https://n1s1.hsmedia.ru/ef/17/db/ef17dba5ef9951b84f00281aa902ba91/728x546_1_501c16119ee54b5cd3b78f0d1f28c38b@1706x1280_0xac120003_20890043461637573872.jpeg', classified: true },
        ],
        restaurants: [
          { name: 'Ресторан Перчини', distance: '900 м от центра', cuisine: 'Европейская, Итальянская', url: 'https://perchini.ru/noyabrsk/', image: 'https://tse2.mm.bing.net/th/id/OIP.cLnPV-RTAL-Tcf1Up-JJlgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' },
          { name: 'Ресторан Мука', distance: '1 км от центра', cuisine: 'Русская', url: 'https://vk.com/club170944734', image: 'https://irecommend.ru/sites/default/files/product-images/42995/YzI6kUjZVcrYH6gtMr9zDw.jpeg' },
          { name: 'Кафе Мидийный дом', distance: '1 км от центра', cuisine: 'Европейская, Средиземноморская', url: 'https://musselhouse.ru/nojabrsk-soviet', image: 'https://tse4.mm.bing.net/th/id/OIP.NkexwyvPOHnvPD-M1bUSUAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3' },
        ],
      },
      {
        id: 'day-2-novyy-urengoy',
        title: 'День 2. Новый Уренгой',
        description:
          'Путешествие продолжится в газовой столице России. Здесь синтез современной промышленной истории и древних традиций народов Севера.',
        objects: [
          {
            id: 'skvazhina-r2',
            title: 'Памятник первой буровой скважине Р-2',
            description:
              'Композиция из стальной трубы-обелиска и символического газового факела появилась на месте, где в 1966 году бригада Владимира Полупанова обнаружила крупнейшее на тот момент месторождение газа в мире.',
            gallery: [
              { src: 'https://tse2.mm.bing.net/th/id/OIP.wtYNbiyyIXILg1Ee3az0hwHaDt?rs=1&pid=ImgDetMain&o=7&rm=3', alt: 'Стальной обелиск и символический газовый факел', credit: 'Unsplash / Marek Piwnicki' },
            ],
            info: [
              { label: 'Адрес', value: 'Пуровский р-н' },
              { label: 'Время работы', value: 'круглосуточно' },
              { label: 'Время на осмотр', value: '15 минут' },
              { label: 'Цена билета', value: 'бесплатно' },
            ],
            features: [],
          },
          {
            id: 'dusha-yamala',
            title: 'Этнопарк «Душа Ямала»',
            description:
              'В пределах Нового Уренгоя можно посетить настоящую ненецкую мини-деревню. Здесь гостей ждут экскурсии по чумам, поездки на оленьих и собачьих упряжках, блюда национальной кухни.',
            gallery: [
              { src: 'https://ic.pics.livejournal.com/bepowerback/76977204/3124399/3124399_original.jpg', alt: 'Ненецкая мини-деревня с чумами зимой', credit: 'Unsplash' },
            ],
            info: [
              { label: 'Адрес', value: 'г. Новый Уренгой, Северная магистраль, 18А' },
              { label: 'Время работы', value: 'пн-вс 09:00-20:00' },
              { label: 'Время на осмотр', value: '60 минут' },
              { label: 'Контакты', value: '+7 (985) 070-76-35' },
              { label: 'Цена билета', value: 'платно' },
              { label: 'Сайт', value: 'https://душаямала.рф/', isLink: true },
            ],
            features: ['Работает летом', 'Работает зимой', 'Интересно с детьми'],
          },
        ],
        hotels: [
          { name: 'Гостиница Амакс Полярная Звезда', stars: 3, distance: '300 м от центра', url: 'https://nurengoj.amaks-hotels.ru/', image: 'https://tse4.mm.bing.net/th/id/OIP.tUWFureqWxWZZj_SVxG7ZwHaEO?rs=1&pid=ImgDetMain&o=7&rm=3', classified: true },
          { name: 'Гостиница Diamond', stars: 3, distance: '3.4 км от центра', url: 'https://diamond-nur.com/', image: 'https://tse3.mm.bing.net/th/id/OIP.GuoxpTeF53bbXoOavJpFKgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3', classified: true },
          { name: 'Отель Газовик', stars: 3, distance: '9.4 км от центра', url: 'https://www.gazovik89.ru/', image: 'https://cdn.worldota.net/t/640x400/extranet/8c/98/8c98c94baf051fc747a870180a5725b3c6c505b8.jpeg', classified: true },
        ],
        restaurants: [],
      },
      {
        id: 'day-3-salehard',
        title: 'День 3. Салехард',
        description:
          'Финал маршрута — единственный в мире город на линии Полярного круга. Старинный острог, превратившийся в современную столицу Ямала.',
        objects: [
          {
            id: 'polar-circle',
            title: 'Стела «Полярный круг»',
            description:
              'Монументальная стела на 66-й параллели северной широты, символизирующая пересечение Полярного круга. Обязательное место для фотографии каждого путешественника.',
            gallery: [
              { src: 'https://tse2.mm.bing.net/th/id/OIP.6BtQ_ZLTbcjmYmIkax3LFQHaEz?rs=1&pid=ImgDetMain&o=7&rm=3', alt: 'Стела Полярный круг на фоне заснеженной равнины', credit: 'Unsplash' },
            ],
            info: [
              { label: 'Адрес', value: 'г. Салехард, трасса Салехард—Лабытнанги' },
              { label: 'Время работы', value: 'круглосуточно' },
              { label: 'Время на осмотр', value: '20 минут' },
              { label: 'Цена билета', value: 'бесплатно' },
            ],
            features: ['Работает летом', 'Работает зимой', 'Интересно с детьми', 'Красивый вид'],
          },
        ],
        hotels: [],
        restaurants: [],
      },
    ],
    photoCredits:
      'Администрация г. Ноябрьска, Департамент культуры ЯНАО, Комаров Александр, Unsplash.',
  },
};