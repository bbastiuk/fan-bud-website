/* =====================================================
   FAN-BUD — main.js

   Lead submission flow:
   The careers form posts to /api/lead — a Vercel
   serverless function (see api/lead.js) that holds the
   Telegram bot token in env vars (TG_TOKEN, TG_CHAT_ID).
   The token is NEVER exposed to the client.
   ===================================================== */

/* ── TRANSLATIONS ──────────────────────────────────── */
const i18n = {
  pl: {
    'nav.services':       'Usługi',
    'nav.about':          'O nas',
    'nav.process':        'Jak działamy',
    'nav.careers':        'Kariera',
    'nav.contact':        'Kontakt',
    'header.cta':         'Bezpłatna wycena',
    'header.cta.short':   'Wycena',
    'hero.eyebrow':       'Poznań · Wielkopolska',
    'hero.h1.line1':      'Budowa',
    'hero.h1.line2':      'lub',
    'hero.h1.line3':      'rozbiórka',
    'hero.slogan':        'FAN-BUD — Fani swojej pracy',
    'hero.desc':          'Generalne wykonawstwo, roboty betonowe, murarskie, zbrojarskie i wyburzenia w Poznaniu i całej Wielkopolsce. Własna ekipa. Terminowo. Solidnie.',
    'hero.cta1':          'Bezpłatna wycena',
    'hero.phone.lbl':     'lub zadzwoń',
    'stat.1.num':         '10+',
    'stat.1.label':       'Lata doświadczenia',
    'stat.2.num':         '150+',
    'stat.2.label':       'Zrealizowanych projektów',
    'stat.3.num':         '100%',
    'stat.3.label':       'Własna ekipa',
    'stat.4.num':         'Gwarancja',
    'stat.4.label':       'Jakości wykonania',
    'services.eyebrow':   'Usługi',
    'services.title':     'Co robimy',
    'services.lead':      'Budujemy od fundamentów po dach albo rozbieramy obiekty — w Poznaniu i całej Wielkopolsce. Każdą usługę wykonuje nasza własna ekipa.',
    'service.1.title':    'Roboty betonowe',
    'service.1.desc':     'Fundamenty i konstrukcje betonowe budynku. Betonowanie łączymy z robotami zbrojarskimi, więc oba etapy prowadzi jedna ekipa.',
    'service.2.title':    'Roboty murarskie',
    'service.2.desc':     'Wznoszenie ścian i murów — kolejny etap budowy od fundamentów po dach, prowadzony przez tę samą, własną ekipę.',
    'service.3.title':    'Wyburzenia i rozbiórki',
    'service.3.desc':     'Rozbiórka budynków i ich części w Poznaniu i Wielkopolsce — druga połowa naszej specjalizacji: budowa lub rozbiórka.',
    'service.4.title':    'Roboty zbrojarskie',
    'service.4.desc':     'Przygotowanie i montaż zbrojenia pod fundamenty i inne elementy betonowe.',
    'services.gc':        'Potrzebujesz kilku usług naraz? Poprowadzimy całą budowę jako generalny wykonawca.',
    'services.gc.link':   'Zapytaj o wycenę',
    'about.eyebrow':      'O nas',
    'about.title':        'Własna ekipa<br>z Wielkopolski',
    'about.desc':         'FAN-BUD to firma budowlana z siedzibą w Bogdanowie. Pracujemy w Poznaniu i całej Wielkopolsce: budujemy od fundamentów po dach albo rozbieramy obiekty.',
    'about.desc2':        'Wszystkie prace wykonuje nasza własna, wykwalifikowana ekipa. Każdy etap planujemy przed startem, a potem prowadzimy go terminowo i z dbałością o detale.',
    'about.f.region.k':   'Region',
    'about.f.region.v':   'Poznań i cała Wielkopolska',
    'about.f.hq.k':       'Siedziba',
    'about.f.team.k':     'Ekipa',
    'about.f.team.v':     '100% własna',
    'about.f.exp.k':      'Doświadczenie',
    'about.f.exp.v':      '10+ lat na rynku budowlanym',
    'about.f.oc.k':       'Ubezpieczenie',
    'about.f.oc.v':       'OC 1 mln zł',
    'about.f.iso.k':      'Jakość',
    'about.f.iso.v':      'Certyfikaty jakości ISO',
    'process.eyebrow':    'Jak działamy',
    'process.title':      'Od telefonu do odbioru',
    'process.lead':       'Cztery kroki — od pierwszej rozmowy do przekazania gotowego obiektu.',
    'step.1.title':       'Kontakt',
    'step.1.desc':        'Dzwonisz lub piszesz. Odpowiadamy w ciągu 24 godzin.',
    'step.2.title':       'Wycena',
    'step.2.desc':        'Ustalamy pełny zakres prac i przygotowujemy bezpłatną wycenę — w 48 godzin.',
    'step.3.title':       'Realizacja',
    'step.3.desc':        'Prace wykonuje nasza własna ekipa — terminowo i z bieżącą informacją o postępach.',
    'step.4.title':       'Odbiór',
    'step.4.desc':        'Oddajemy gotowy obiekt z pełną dokumentacją i gwarancją.',
    'process.cta':        'Zacznij od bezpłatnej wyceny',
    'careers.eyebrow':    'Kariera',
    'careers.title':      'Dołącz do zespołu',
    'careers.desc':       'Szukamy doświadczonych pracowników budowlanych. Oferujemy stabilne zatrudnienie, godziwe wynagrodzenie i pracę w zgranym zespole.',
    'careers.perk.1':     'Stabilne zatrudnienie',
    'careers.perk.2':     'Godziwe wynagrodzenie',
    'careers.perk.3':     'Praca w zgranym zespole',
    'careers.perk.4':     'Nowoczesny sprzęt',
    'careers.fname':      'Imię',
    'careers.lname':      'Nazwisko',
    'careers.phone':      'Telefon',
    'careers.error':      'Nie udało się wysłać zgłoszenia. Spróbuj ponownie.',
    'careers.submit':     'Wyślij zgłoszenie',
    'careers.success':    'Dziękujemy! Skontaktujemy się wkrótce.',
    'cta.eyebrow':        'Kontakt',
    'cta.title':          'Bezpłatna <span class="hl">wycena</span>',
    'cta.desc':           'Zadzwoń lub napisz — odpowiadamy w ciągu 24 godzin, a bezpłatną wycenę przygotowujemy w 48 godzin.',
    'cta.need.title':     'Co warto podać:',
    'cta.need.1':         'Rodzaj prac — budowa, rozbiórka lub konkretna usługa',
    'cta.need.2':         'Lokalizację obiektu',
    'cta.need.3':         'Przybliżony zakres lub wymiary',
    'cta.need.4':         'Projekt lub zdjęcia, jeśli je masz',
    'cta.phone.lbl':      'Zadzwoń · 24/7',
    'cta.phone.hint':     'Omówimy zakres prac od razu przez telefon.',
    'cta.email.lbl':      'Napisz e-mail',
    'cta.email.hint':     'Opisz prace i dołącz zdjęcia lub projekt.',
    'cta.address.lbl':    'Siedziba',
    'cta.address.val':    'Bogdanowo, Słoneczna 1',
    'footer.nav.title':   'Nawigacja',
    'footer.nav.home':    'Strona główna',
    'footer.nav.services':'Usługi',
    'footer.nav.about':   'O nas',
    'footer.nav.process': 'Jak działamy',
    'footer.nav.careers': 'Kariera',
    'footer.nav.contact': 'Kontakt',
    'footer.services.title':'Usługi',
    'footer.services.1':  'Roboty betonowe',
    'footer.services.2':  'Roboty murarskie',
    'footer.services.3':  'Wyburzenia',
    'footer.services.4':  'Generalne wykonawstwo',
    'footer.contact.title':'Kontakt',
    'footer.desc':        'FAN-BUD — budowa lub rozbiórka obiektów w Poznaniu i Wielkopolsce. Generalne wykonawstwo dla wymagających inwestorów.',
    'footer.slogan':      'Fani swojej pracy',
    'footer.copy':        '© 2023 FAN-BUD. Wszystkie prawa zastrzeżone.',
    'footer.privacy':     'Polityka prywatności',
    'footer.terms':       'Regulamin',
    'm.contact.label':    'Zadzwoń do nas',
  },
  ua: {
    'nav.services':       'Послуги',
    'nav.about':          'Про нас',
    'nav.process':        'Як ми працюємо',
    'nav.careers':        'Кар\'єра',
    'nav.contact':        'Контакт',
    'header.cta':         'Безкоштовна оцінка',
    'header.cta.short':   'Оцінка',
    'hero.eyebrow':       'Познань · Великопольща',
    'hero.h1.line1':      'Будівництво',
    'hero.h1.line2':      'або',
    'hero.h1.line3':      'знесення',
    'hero.slogan':        'FAN-BUD — Фанати своєї справи',
    'hero.desc':          'Генеральний підряд, бетонні, мулярські й арматурні роботи та знесення у Познані та всій Великопольщі. Власна бригада. Вчасно. Надійно.',
    'hero.cta1':          'Безкоштовна оцінка',
    'hero.phone.lbl':     'або зателефонуйте',
    'stat.1.num':         '10+',
    'stat.1.label':       'Роки досвіду',
    'stat.2.num':         '150+',
    'stat.2.label':       'Реалізованих проєктів',
    'stat.3.num':         '100%',
    'stat.3.label':       'Власна бригада',
    'stat.4.num':         'Гарантія',
    'stat.4.label':       'Якості виконання',
    'services.eyebrow':   'Послуги',
    'services.title':     'Що ми робимо',
    'services.lead':      'Будуємо від фундаменту до даху або зносимо об\'єкти — у Познані та всій Великопольщі. Кожну послугу виконує наша власна бригада.',
    'service.1.title':    'Бетонні роботи',
    'service.1.desc':     'Фундаменти й бетонні конструкції будівлі. Бетонування поєднуємо з арматурними роботами, тож обидва етапи веде одна бригада.',
    'service.2.title':    'Мулярські роботи',
    'service.2.desc':     'Зведення стін і мурів — наступний етап будівництва від фундаменту до даху, який веде та сама власна бригада.',
    'service.3.title':    'Знесення та розбирання',
    'service.3.desc':     'Розбирання будівель та їхніх частин у Познані й Великопольщі — друга половина нашої спеціалізації: будівництво або знесення.',
    'service.4.title':    'Арматурні роботи',
    'service.4.desc':     'Підготовка й монтаж арматури під фундаменти та інші бетонні елементи.',
    'services.gc':        'Потрібно кілька послуг одразу? Поведемо все будівництво як генеральний підрядник.',
    'services.gc.link':   'Запитати оцінку',
    'about.eyebrow':      'Про нас',
    'about.title':        'Власна бригада<br>з Великопольщі',
    'about.desc':         'FAN-BUD — будівельна компанія з офісом у Богданові (Bogdanowo). Працюємо в Познані та всій Великопольщі: будуємо від фундаменту до даху або зносимо об\'єкти.',
    'about.desc2':        'Усі роботи виконує наша власна кваліфікована бригада. Кожен етап плануємо до старту, а потім ведемо його вчасно й з увагою до деталей.',
    'about.f.region.k':   'Регіон',
    'about.f.region.v':   'Познань і вся Великопольща',
    'about.f.hq.k':       'Офіс',
    'about.f.team.k':     'Бригада',
    'about.f.team.v':     '100% власна',
    'about.f.exp.k':      'Досвід',
    'about.f.exp.v':      '10+ років на будівельному ринку',
    'about.f.oc.k':       'Страхування',
    'about.f.oc.v':       'Відповідальність (OC) 1 млн зл.',
    'about.f.iso.k':      'Якість',
    'about.f.iso.v':      'Сертифікати якості ISO',
    'process.eyebrow':    'Як ми працюємо',
    'process.title':      'Від дзвінка до здачі',
    'process.lead':       'Чотири кроки — від першої розмови до передачі готового об\'єкта.',
    'step.1.title':       'Контакт',
    'step.1.desc':        'Ви телефонуєте або пишете. Відповідаємо протягом 24 годин.',
    'step.2.title':       'Оцінка',
    'step.2.desc':        'Визначаємо повний обсяг робіт і готуємо безкоштовну оцінку — за 48 годин.',
    'step.3.title':       'Реалізація',
    'step.3.desc':        'Роботи виконує наша власна бригада — вчасно, з регулярною інформацією про хід робіт.',
    'step.4.title':       'Здача',
    'step.4.desc':        'Здаємо готовий об\'єкт з повною документацією та гарантією.',
    'process.cta':        'Почніть з безкоштовної оцінки',
    'careers.eyebrow':    'Кар\'єра',
    'careers.title':      'Приєднуйся до команди',
    'careers.desc':       'Шукаємо досвідчених будівельників. Пропонуємо стабільну роботу, гідну оплату та згуртовану команду.',
    'careers.perk.1':     'Стабільна робота',
    'careers.perk.2':     'Гідна оплата праці',
    'careers.perk.3':     'Робота в дружній команді',
    'careers.perk.4':     'Сучасне обладнання',
    'careers.fname':      'Ім\'я',
    'careers.lname':      'Прізвище',
    'careers.phone':      'Телефон',
    'careers.error':      'Не вдалося надіслати заявку. Спробуйте ще раз.',
    'careers.submit':     'Надіслати заявку',
    'careers.success':    'Дякуємо! Ми зв\'яжемося з вами найближчим часом.',
    'cta.eyebrow':        'Контакт',
    'cta.title':          'Безкоштовна <span class="hl">оцінка</span>',
    'cta.desc':           'Зателефонуйте або напишіть — відповідаємо протягом 24 годин, а безкоштовну оцінку готуємо за 48 годин.',
    'cta.need.title':     'Що варто вказати:',
    'cta.need.1':         'Вид робіт — будівництво, знесення чи конкретна послуга',
    'cta.need.2':         'Розташування об\'єкта',
    'cta.need.3':         'Приблизний обсяг або розміри',
    'cta.need.4':         'Проєкт або фото, якщо є',
    'cta.phone.lbl':      'Зателефонуйте · 24/7',
    'cta.phone.hint':     'Обговоримо обсяг робіт одразу телефоном.',
    'cta.email.lbl':      'Напишіть e-mail',
    'cta.email.hint':     'Опишіть роботи й додайте фото або проєкт.',
    'cta.address.lbl':    'Офіс',
    'cta.address.val':    'Bogdanowo, Słoneczna 1',
    'footer.nav.title':   'Навігація',
    'footer.nav.home':    'Головна сторінка',
    'footer.nav.services':'Послуги',
    'footer.nav.about':   'Про нас',
    'footer.nav.process': 'Як ми працюємо',
    'footer.nav.careers': 'Кар\'єра',
    'footer.nav.contact': 'Контакт',
    'footer.services.title':'Послуги',
    'footer.services.1':  'Бетонні роботи',
    'footer.services.2':  'Мулярські роботи',
    'footer.services.3':  'Знесення',
    'footer.services.4':  'Генеральний підряд',
    'footer.contact.title':'Контакт',
    'footer.desc':        'FAN-BUD — будівництво або знесення об\'єктів у Познані та Великопольщі. Генеральний підряд для вимогливих інвесторів.',
    'footer.slogan':      'Фанати своєї справи',
    'footer.copy':        '© 2023 FAN-BUD. Усі права захищені.',
    'footer.privacy':     'Політика конфіденційності',
    'footer.terms':       'Умови використання',
    'm.contact.label':    'Зателефонуйте нам',
  }
};

/* ── LANGUAGE SYSTEM ───────────────────────────────── */
let currentLang = 'pl';

function applyLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Sync language switcher state
  document.querySelectorAll('.lang button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'ua' ? 'uk' : 'pl';
}

document.querySelectorAll('.lang button[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    if (lang !== currentLang) applyLang(lang);
  });
});

/* ── HEADER SCROLL STATE ───────────────────────────── */
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── MOBILE BURGER ─────────────────────────────────── */
const burger = document.getElementById('burger');
const menu = document.getElementById('mMenu');
const toggleMenu = (force) => {
  const open = force ?? !menu.classList.contains('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
};
burger.addEventListener('click', () => toggleMenu());
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));
// Close the menu if the header quote button is used while it is open
document.querySelectorAll('.header a[href^="#"]').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

/* ── REVEAL ON SCROLL ──────────────────────────────── */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}

/* ── SMOOTH ANCHOR SCROLL (offset for fixed header) ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - header.offsetHeight + 1;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── CAREERS FORM → /api/lead ──────────────────────────
   Posts to our own serverless endpoint (Vercel function
   in api/lead.js), which forwards the lead to Telegram
   using server-side env vars. Token never reaches the
   browser.
   ──────────────────────────────────────────────────── */
async function submitLead(data) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 10000);

  let res;
  try {
    res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      signal: ctrl.signal,
    });
  } finally {
    clearTimeout(timer);
  }

  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.ok === false) {
    const reason = json.error || `HTTP ${res.status}`;
    console.error('[Lead] Submission failed:', reason);
    throw new Error(reason);
  }
  console.log('[Lead] Submitted successfully');
  return json;
}

const careersForm = document.getElementById('careersForm');
const formSuccess = document.getElementById('formSuccess');
const formError = document.getElementById('formError');

if (careersForm) {
  careersForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fname = careersForm.fname.value.trim();
    const lname = careersForm.lname.value.trim();
    const phone = careersForm.phone.value.trim();

    if (!fname || !lname || !phone) return;
    formError.hidden = true;

    const submitBtn = careersForm.querySelector('.careers__submit');
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.6';

    try {
      await submitLead({ fname, lname, phone });
    } catch (err) {
      console.warn('Lead submission failed:', err);
      formError.hidden = false;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '';
      return;
    }

    // Update success message text for current language
    const successSpan = formSuccess.querySelector('[data-i18n="careers.success"]');
    if (successSpan && i18n[currentLang]['careers.success']) {
      successSpan.textContent = i18n[currentLang]['careers.success'];
    }

    careersForm.reset();
    submitBtn.style.display = 'none';
    formSuccess.classList.add('visible');
  });
}

/* ── STATS COUNTER ANIMATION ───────────────────────── */
(function() {
  const statsEl = document.querySelector('.stats');
  if (!statsEl || !('IntersectionObserver' in window)) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const COUNTERS = [
    { to: 10,  suffix: '+' },
    { to: 150, suffix: '+' },
    { to: 100, suffix: '%' },
    { to: null },   // stat 4 is text
  ];

  const easeOutExpo = t => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

  function countUp(el, cfg, delay) {
    if (cfg.to === null) return;
    const finalText = el.textContent; // keeps the current language's text
    const duration = cfg.to <= 10 ? 1000 : 1500;
    let startTime = null;
    setTimeout(() => {
      function step(ts) {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        el.textContent = Math.round(cfg.to * easeOutExpo(progress)) + cfg.suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = finalText;
      }
      requestAnimationFrame(step);
    }, delay);
  }

  const countObserver = new IntersectionObserver(entries => {
    if (!entries.some(e => e.isIntersecting)) return;
    countObserver.disconnect();
    statsEl.querySelectorAll('.stat__num').forEach((el, i) => {
      countUp(el, COUNTERS[i] || { to: null }, i * 100);
    });
  }, { threshold: 0.5 });

  countObserver.observe(statsEl);
})();
