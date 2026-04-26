# FAN-BUD — преміум-лендинг будівельної компанії

Статичний сайт. Один HTML + один CSS + один JS. Ніяких збірок, npm, фреймворків. Відкриваєш `index.html` у браузері — все працює.

---

## Структура проєкту

```
fanbud-project/
├── index.html              ← головна сторінка (HTML-розмітка)
├── README.md               ← цей файл
│
├── css/
│   └── styles.css          ← ВСІ стилі тут (дизайн-токени, секції, адаптив)
│
├── js/
│   └── main.js             ← вся інтерактивність (меню, скрол, анімації)
│
└── assets/
    ├── fonts/              ← сюди клади BENZIN, якщо маєш ліцензію (див. нижче)
    │   └── README.md
    │
    └── images/             ← ВСІ зображення сайту
        ├── hero.jpg        ← головне фото на першому екрані ✅ (вже завантажене)
        ├── about.jpg       ← фото в блоці "О нас" (зараз плейсхолдер)
        ├── cta-bg.jpg      ← фото у блоці "Зателефонуй" (зараз плейсхолдер)
        │
        ├── services/       ← 3 фонові зображення для карток послуг
        │   ├── concrete.jpg       ← Roboty betonowe
        │   ├── masonry.jpg        ← Roboty murarskie
        │   └── demolition.jpg     ← Wyburzenia
        │
        └── projects/       ← 5 фото твоїх реалізацій
            ├── project-1.jpg      ← Osiedle Śródmiejskie (великий, 4:4)
            ├── project-2.jpg      ← Hala produkcyjna
            ├── project-3.jpg      ← Rozbiórka zakładu
            ├── project-4.jpg      ← Centrum biurowe
            └── project-5.jpg      ← Magazyn logistyczny
```

---

## Як запустити локально

**Варіант 1 — просто відкрий**
Двічі клікни на `index.html`. Відкриється у браузері. Все буде працювати, крім шрифтів (якщо немає інтернету) і картинок (якщо браузер блокує локальні файли — залежить від політики браузера).

**Варіант 2 — локальний сервер** (рекомендую)
Якщо в тебе встановлений Python:
```bash
cd fanbud-project
python3 -m http.server 8000
```
Потім відкрий: `http://localhost:8000`

Або через Node.js:
```bash
npx serve
```

---

## Як замінити зображення на свої

Це найпростіше. Просто **збережи свої фото з тими самими іменами** в тих самих папках:

| Що замінити | Файл | Рекомендований розмір |
|---|---|---|
| Головне фото хіро | `assets/images/hero.jpg` | **2400×1600** або більше, horizontal |
| Фото "О нас" | `assets/images/about.jpg` | 1800×1200, vertical композиція |
| Фон у блоці контакту | `assets/images/cta-bg.jpg` | 2400×1200, horizontal |
| Картка послуги (бетон) | `assets/images/services/concrete.jpg` | 1400×1680, vertical |
| Картка послуги (мур) | `assets/images/services/masonry.jpg` | 1400×1680, vertical |
| Картка послуги (розбір) | `assets/images/services/demolition.jpg` | 1400×1680, vertical |
| Проєкт 1 (великий) | `assets/images/projects/project-1.jpg` | 1400×1300, square-ish |
| Проєкт 2 | `assets/images/projects/project-2.jpg` | 1200×960 |
| Проєкт 3 | `assets/images/projects/project-3.jpg` | 1200×960 |
| Проєкт 4 | `assets/images/projects/project-4.jpg` | 1200×960 |
| Проєкт 5 | `assets/images/projects/project-5.jpg` | 1200×960 |

**Важливо:** зберігай формат `.jpg`. Якщо маєш PNG — переконвертуй (або онлайн, або через macOS Preview → Export).

Розмір файлу для веб — **до 500KB на кожне фото**. Якщо більше — стисни через https://squoosh.app або https://tinyjpg.com

---

## Як редагувати тексти

Відкрий `index.html` у текстовому редакторі (VS Code, Sublime, або навіть Notepad). Знайди через Ctrl+F потрібний текст і заміни. Наприклад:

- Телефон `+48 000 000 000` — знайди та заміни на свій
- E-mail `biuro@fan-bud.pl` — те саме
- Текст у хіро "Budowa i rozbiórka pod klucz" — знайди та заміни
- Назви проєктів (рядки типу "Osiedle Śródmiejskie") — зміни на свої

Все текстове редагується напряму в HTML.

---

## Як змінювати кольори / шрифти / відступи

Відкрий `css/styles.css`. У самому верху файлу є блок `:root { ... }` — це **дизайн-токени**. Там всі кольори й відстані в одному місці:

```css
--gold:          #d4a244;   ← головний акцентний колір
--gold-soft:     #e6b956;   ← світліший відтінок для hover
--gold-deep:     #b28632;   ← темніший відтінок

--bg:            #0a0a0b;   ← основний чорний фон
--text:          #ffffff;   ← основний білий текст

--gutter:        40px;      ← відступи по краях сторінки
```

Якщо зміниш `--gold`, колір автоматично застосується скрізь на сайті (в кнопках, цифрах, акцентах).

---

## Шрифт BENZIN

Зараз сайт використовує **Oswald + Bebas Neue** (через Google Fonts) — це безкоштовна заміна BENZIN, дуже близька за геометрією.

Якщо маєш ліцензію на BENZIN:

1. Поклади файли шрифту (`.woff2`, `.woff`, `.ttf`) у папку `assets/fonts/`
2. У `css/styles.css` додай зверху:

```css
@font-face {
  font-family: 'Benzin';
  src: url('../assets/fonts/Benzin-Regular.woff2') format('woff2'),
       url('../assets/fonts/Benzin-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Benzin';
  src: url('../assets/fonts/Benzin-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
/* додай інші weights які маєш — 500, 700 */
```

3. Знайди у `:root` рядок:
```css
--f-display: 'Oswald', 'Bebas Neue', 'Benzin', 'Impact', sans-serif;
```
і поміняй на:
```css
--f-display: 'Benzin', 'Oswald', 'Impact', sans-serif;
```

Перезавантаж сторінку — скрізь буде BENZIN.

---

## Навігація по коду

### `index.html` — секції позначені коментарями
- `<!-- HEADER -->` — шапка з логотипом і меню
- `<!-- HERO -->` — перший екран з головним фото
- `<!-- SERVICES -->` — блок "Co robimy" (3 картки послуг)
- `<!-- ABOUT -->` — блок "Budujemy zaufanie"
- `<!-- PROJECTS -->` — сітка реалізацій
- `<!-- PROCESS -->` — блок "Prosty proces" (4 кроки)
- `<!-- CTA -->` — контактна секція "Zadzwoń do nas"
- `<!-- FOOTER -->` — футер

### `css/styles.css` — розбито на пронумеровані секції
1. Design tokens (змінні)
2. Reset
3. Layout primitives
4. Buttons
5. Header
6. Hero
7. Stats strip
8. Section base
9. Services
10. About
11. Projects
12. Process
13. CTA
14. Footer
15. Mobile menu
16. Reveal on scroll
17. Responsive (media queries)

### `js/main.js` — 5 блоків
1. Header scroll + hero parallax
2. Mobile burger toggle
3. Language switcher (PL/UA)
4. Reveal on scroll (IntersectionObserver)
5. Smooth anchor scroll + magnetic buttons

---

## Чекліст перед публікацією на продакшен

- [ ] Замінити ВСІ 10 плейсхолдерних фото на справжні
- [ ] Замінити телефон `+48 000 000 000` на справжній
- [ ] Замінити e-mail `biuro@fan-bud.pl` на справжній
- [ ] Замінити NIP `000 000 00 00` у футері
- [ ] Перевірити Facebook / Instagram / LinkedIn посилання (зараз `#`)
- [ ] Додати справжні URL у "Polityka prywatności" і "Regulamin"
- [ ] Перевірити на мобільному (Chrome DevTools → toggle device)
- [ ] Оптимізувати фото (стиснути до <500KB кожне)

---

## Контакт

Питання — пиши 🤝
