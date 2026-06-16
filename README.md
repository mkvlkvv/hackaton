# 🧭 Путешествуем.рф — рефакторинг главной и страницы статьи

Проект представляет собой адаптацию двух HTML-прототипов (`главная.html`, `статья.html`) в production-ready Next.js приложение с полным соответствием **WCAG 2.2 AA** и паттернам **WAI-ARIA APG**.

---

## 📋 Оглавление

- [Стек](#-стек)
- [Структура проекта](#-структура-проекта)
- [Что сделано: главная страница](#-что-сделано-главная-страница)
- [Что сделано: страница статьи](#-что-сделано-страница-статьи)
- [Аудит доступности: 17 проблем и их решения](#-аудит-доступности-17-проблем-и-их-решения)
- [Применённые паттерны WAI-ARIA APG](#-применённые-паттерны-wai-aria-apg)
- [Семантическая разметка и Schema.org](#-семантическая-разметка-и-schemaorg)
- [Запуск проекта](#-запуск-проекта)
- [Модель данных](#-модель-данных)
- [Чеклист готовности](#-чеклист-готовности)

---

## 🛠 Стек

- **Next.js** (Pages Router) + **React 18**
- **CSS Modules** — изоляция стилей по компонентам
- **JSX** (без TypeScript)
- **WAI-ARIA APG** — официальные паттерны доступности
- **Schema.org microdata** — структурированные данные для поисковиков

---

## 📁 Структура проекта
```
project/
├── jsconfig.json                      # алиас @/* → src/*
├── next.config.js
├── public/
│   └── images/
│       └── articles/                  # hero и галереи статей
└── src/
    ├── pages/
    │   ├── _document.jsx               # lang="ru", корректный viewport
    │   ├── index.jsx                   # главная
    │   └── article/
    │       └── [slug].jsx              # динамический роут статей
    ├── components/
    │   ├── Header.jsx                  # шапка с навигацией
    │   ├── Footer.jsx
    │   ├── Hero.jsx                    # поиск + баннер
    │   ├── Filters.jsx                 # табы-фильтры
    │   ├── ArticleCard.jsx             # карточка маршрута
    │   ├── ArticlesGrid.jsx
    │   └── article/
    │       ├── ArticlePage.jsx         # корневой компонент статьи
    │       ├── Breadcrumbs.jsx         # APG Breadcrumb
    │       ├── TableOfContents.jsx     # оглавление
    │       ├── MetaBar.jsx             # характеристики маршрута
    │       ├── DayBlock.jsx            # блок одного дня
    │       ├── ObjectCard.jsx          # достопримечательность
    │       ├── Gallery.jsx             # APG Carousel
    │       └── PlacesCarousel.jsx      # отели/рестораны
    ├── mocks/
    │   ├── articles.js                 # ARTICLES — список карточек
    │   └── articleContent.js           # ARTICLE_CONTENT — полный контент
    └── styles/
        ├── globals.css                 # skip-link, sr-only, focus
        ├── Home.module.css
        └── Article.module.css
```

---

## ✨ Что сделано: главная страница

Исходный `главная.html` был разделён на переиспользуемые React-компоненты.

### Компоненты

| Компонент | Что делает |
|---|---|
| `Header` | Логотип, основная навигация (`<nav aria-label="Основная">`), ссылки на соцсети с `aria-label` |
| `Hero` | Поисковая форма с `<label>`, баннер со ссылкой и `alt` для изображения |
| `Filters` | Группа табов по паттерну **APG Tabs**: `role="tablist"`, `aria-selected`, управление с клавиатуры (стрелки, Home/End) |
| `ArticlesGrid` | Сетка карточек с `role="list"` |
| `ArticleCard` | Карточка маршрута: `<article itemScope itemType="TravelAction">`, кликабельная область — одна ссылка, покрывающая карточку |
| `Footer` | Контактная информация в `<address>`, навигационные ссылки |

### Ключевые улучшения vs исходный HTML

- ✅ Добавлен **skip-link** «Перейти к содержимому»
- ✅ Правильная иерархия заголовков: **h1 → h2 → h3** без пропусков
- ✅ Все декоративные SVG-иконки получили `aria-hidden="true"` и `focusable="false"`
- ✅ Иконки соцсетей обёрнуты в ссылки с `aria-label="Мы во ВКонтакте"` и т. д.
- ✅ Поисковая форма имеет `<label for="...">` вместо `placeholder`-как-подписи
- ✅ Удалён `user-scalable=no` из `<meta name="viewport">`

---

## 📰 Что сделано: страница статьи

Исходный `статья.html` (маршрут «Полярный Ямал») переработан в полностью доступную страницу.

### Роутинг

Страница реализована через динамический маршрут `/article/[slug]`. Slug извлекается из `link` карточки в `ARTICLES`, а полный контент статьи берётся из `ARTICLE_CONTENT` по ключу-slug.

### Структура страницы
```
┌──────────────────────────────────────┐
│  Skip-link → #main                   │
│  Header                              │
│──────────────────────────────────────│
│  &lt;main id="main" tabindex="-1"&gt;      │
│    &lt;article itemscope&gt;               │
│      Breadcrumbs (nav)               │
│      Hero + photo credit             │
│      &lt;h1&gt; + локация                  │
│      MetaBar (dl): расстояние,       │
│        часовой пояс, длительность    │
│      Лид-абзац + вводный текст       │
│      TableOfContents (nav)           │
│      ─ День 1 (section)              │
│      │   └ ObjectCard × N            │
│      │       ├ &lt;figure&gt; + Gallery    │
│      │       ├ &lt;address&gt;             │
│      │       ├ dl с информацией      │
│      │       └ список «Особенности»  │
│      │   ├ «Где остановиться»        │
│      │   └ «Где поесть»              │
│      ─ День 2 …                      │
│      ─ День 3 …                      │
│      Footer статьи: credits + link   │
│    &lt;/article&gt;                        │
│  &lt;/main&gt;                             │
│  Footer                              │
└──────────────────────────────────────┘
```

### Паттерн галереи

Галерея реализована по паттерну **APG Carousel (Grouped Slides)**:

- `role="region"` + `aria-roledescription="карусель"` + `aria-label`
- Каждый слайд обёрнут в `<figure role="group" aria-roledescription="слайд" aria-label="N из M">`
- `<figcaption>` с указанием автора фото
- Кнопки «Предыдущий/Следующий слайд» с `aria-label` и `aria-controls`
- Точки-индикаторы как `role="tablist"` + `role="tab"` с `aria-selected`
- Живой регион `aria-live="polite"` объявляет смену слайда
- Если изображение всего одно — рендерится простой `<figure>` без карусели

### Карточки отелей и ресторанов

- Каждая карточка — одна ссылка, покрывающая всю площадь
- Внутри — `aria-label`, собранный функцией `buildLabel()`:  
  *«Гостиница Россия, 3 звезды, классифицировано, 2 км от центра, открывается в новой вкладке»*
- Визуальные элементы (звёзды, значки) помечены `aria-hidden="true"` — чтобы скринридер не дублировал

---

## 🔍 Аудит доступности: 17 проблем и их решения

| № | Проблема в исходном HTML | Решение |
|---|---|---|
| 1 | Нет skip-link для клавиатурных пользователей | Добавлена ссылка `.skip-link` в `[slug].jsx` и `index.jsx`, становится видимой при фокусе |
| 2 | `<meta viewport>` содержал `user-scalable=no`, блокируя масштабирование | В `_document.jsx` оставлено только `width=device-width, initial-scale=1` |
| 3 | `role="alert"` был навешен на заголовок `<h1>` | Убрано — `<h1>` не требует ролей |
| 4 | Слайдеры изображений не управлялись с клавиатуры | Реализован полноценный **APG Carousel Pattern** в `Gallery.jsx` |
| 5 | 15 кнопок-иконок не имели доступного имени | Всем кнопкам добавлен `aria-label`, иконки внутри — `aria-hidden` + `focusable="false"` |
| 6 | Ссылки отелей читались как «читать далее» или как URL | `buildLabel()` в `PlacesCarousel` собирает человекочитаемую строку для `aria-label` |
| 7 | Встраиваемые карты без `title` | Шаблон iframe с обязательным `title="Карта маршрута"` |
| 8 | Оглавление было оформлено как обычный `<div>` | `TableOfContents` обёрнут в `<nav aria-label="Оглавление статьи">` с `<ol>` |
| 9 | Иерархия заголовков ломалась: h2 → h4 | Строгая последовательность: **h1 → h2 (лид, дни) → h3 (объекты, подразделы) → h4 (особенности)** |
| 10 | `alt` описывал автора фото вместо содержимого | В данных `alt` описывает **что изображено**, а автор — в `figcaption` |
| 11 | Навигационные блоки без `<nav>` | Все навигации (breadcrumbs, TOC, меню футера) обёрнуты в `<nav>` с `aria-label` |
| 12 | `target="_blank"` без предупреждения и без `rel` | Добавлено `rel="noopener noreferrer"` + `aria-label` содержит «открывается в новой вкладке» |
| 13 | Недостаточный контраст серого текста | Цвета пересмотрены: `#333`/`#666` на `#fff`, `#185fa5` для ссылок (контраст ≥ 4.5:1) |
| 14 | Ссылки соцсетей без текста | `aria-label="Мы во ВКонтакте"`, `«…в Одноклассниках»` и т. д. |
| 15 | Достопримечательности в `<div>` | `<section itemScope itemType="TouristAttraction">` + `<address>` для адреса + `<figure>` для фото |
| 16 | Отсутствие видимого фокуса на интерактивных элементах | `:focus-visible { outline: 2px solid #185fa5; outline-offset: 2px; }` глобально |
| 17 | Иконки параметров маршрута без текстовой альтернативы | В `MetaBar` используется `<dl>` где `<dt>` содержит текст, а иконка — `aria-hidden` |

---

## 🎯 Применённые паттерны WAI-ARIA APG

| Паттерн | Где используется |
|---|---|
| **Breadcrumb** | `Breadcrumbs.jsx` — `<nav aria-label="Хлебные крошки">` + `<ol>` + `aria-current="page"` |
| **Carousel (Grouped Slides)** | `Gallery.jsx` — галерея фотографий достопримечательности |
| **Tabs** | `Filters.jsx` — табы фильтров на главной |
| **Landmarks** | `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>` с `aria-label` для одноимённых |
| **Skip Links** | Ссылка на `#main` в начале каждой страницы |

---

## 🏷 Семантическая разметка и Schema.org

На странице статьи используется microdata для поисковой оптимизации:
```jsx
&lt;article itemscope itemtype="https://schema.org/TravelGuide"&gt;
  &lt;h1 itemprop="name"&gt;...&lt;/h1&gt;
  &lt;img itemprop="image" ... /&gt;
  &lt;p itemprop="description"&gt;...&lt;/p&gt;

  &lt;section itemscope itemtype="https://schema.org/TouristAttraction"&gt;
    &lt;h3 itemprop="name"&gt;...&lt;/h3&gt;
    &lt;p itemprop="description"&gt;...&lt;/p&gt;
    &lt;address itemprop="address"&gt;...&lt;/address&gt;
  &lt;/section&gt;
&lt;/article&gt;
```

На карточках маршрута на главной — `itemType="TravelAction"`.

---

## 🚀 Запуск проекта
```bash
# Установка
npm install

# Dev-режим
npm run dev

# Production-сборка
npm run build
npm start
```

Приложение откроется на `http://localhost:3000`.

### Настройка алиаса `@`

В корне проекта должен быть `jsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

---

## 📂 Модель данных

**`src/mocks/articles.js`** — карточки маршрутов для главной:
```js
export const ARTICLES = [
  {
    id: 5063,
    title: 'Полярный',
    image: IMG.polyarny,
    link: '/article/polyarnyy',
    description: 'Трехдневное автопутешествие по российской Арктике.',
    tags: ['Зима', 'С детьми', 'Автомаршрут'],
    properties: {
      distance: '1210 км',
      timezone: 'GMT+5',
      duration: '3 дня',
      season: 'круглый год'
    },
    route: ['Ноябрьск', 'Новый Уренгой', 'Салехард']
  }
];
```

**`src/mocks/articleContent.js`** — подробный контент статьи, ключ = последний сегмент URL:
```js
export const ARTICLE_CONTENT = {
  'polyarnyy': {
    hero: { image, imageAlt, photoCredit },
    breadcrumbs: [],
    lead: '...',
    intro: [],
    days: [
      {
        id: 'day-1-noyabrsk',
        title: 'День 1. Ноябрьск',
        description: '...',
        objects: [
          {
            id, title, description,
            gallery: [{ src, alt, credit }],
            info: [{ label, value, isLink }],
            features: []
          }
        ],
        hotels: [],
        restaurants: []
      }
    ],
    photoCredits: '...'
  }
};
```

---

## ✅ Чеклист готовности

- [x] Главная страница разбита на компоненты
- [x] Страница статьи реализована через динамический роут
- [x] Все 17 проблем аудита доступности устранены
- [x] Применены паттерны WAI-ARIA APG
- [x] Добавлена микроразметка Schema.org
- [x] Проект соответствует WCAG 2.2 AA
- [x] Адаптивная вёрстка для мобильных устройств
- [x] Видимый фокус на всех интерактивных элементах

---

*Проект соответствует рекомендациям W3C WAI и готов к проверке скринридерами (NVDA, JAWS, VoiceOver).*