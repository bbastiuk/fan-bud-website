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
    'hero.eyebrow':       'Poznań · Wielkopolska',
    'hero.h1.line1':      'Budowa',
    'hero.h1.line2':      'lub',
    'hero.h1.line3':      'rozbiórka',
    'hero.slogan':        'FAN-BUD — Fani swojej pracy',
    'hero.desc':          'Generalne wykonawstwo, roboty betonowe, murarskie i\u00a0wyburzenia dla inwestorów w\u00a0Poznaniu i\u00a0całej Wielkopolsce. Własna ekipa. Terminowo. Solidnie.',
    'hero.cta1':          'Bezpłatna wycena',
    'hero.cta2':          'O firmie',
    'hero.trust.label':   'Certyfikowany wykonawca',
    'hero.trust.val':     'ISO 9001 · Ubezpieczenie OC',
    'stat.1.num':         '10<span style="font-size:.7em">+</span>',
    'stat.1.label':       'Lata doświadczenia',
    'stat.2.num':         '150<span style="font-size:.7em">+</span>',
    'stat.2.label':       'Zrealizowanych projektów',
    'stat.3.num':         '100%',
    'stat.3.label':       'Własna ekipa',
    'stat.4.num':         'Gwarancja',
    'stat.4.label':       'Jakości wykonania',
    'services.eyebrow':   'Usługi',
    'services.title':     'Co <span class="gold">robimy</span>',
    'service.1.title':    'Roboty<br>betonowe',
    'service.2.title':    'Roboty<br>murarskie',
    'service.3.title':    'Wyburzenia<br>i\u00a0rozbiórki',
    'service.4.title':    'Roboty<br>zbrojarskie',
    'about.eyebrow':      'O nas',
    'about.title':        'Budujemy<br>zaufanie',
    'about.desc':         'FAN-BUD to doświadczony zespół specjalistów z\u00a0Poznania. Budujemy od fundamentów po dach — terminowo, solidnie i\u00a0z\u00a0dbałością o\u00a0każdy detal.',
    'about.mark.1':       'Własna wykwalifikowana ekipa',
    'about.mark.2':       'Ubezpieczenie OC 1\u00a0mln\u00a0zł',
    'about.mark.3':       'Certyfikaty jakości ISO',
    'about.mark.4':       'Bezpłatna wycena w\u00a048h',
    'about.badge.num':    '10',
    'about.badge.lbl':    'Lata na rynku budowlanym',
    'process.eyebrow':    'Jak działamy',
    'process.title':      'Prosty <span class="gold">proces</span>',
    'step.1.num':         '01 · Krok',
    'step.1.title':       'Kontakt',
    'step.1.desc':        'Zadzwoń lub napisz do nas — odpowiadamy w\u00a0ciągu 24\u00a0godzin.',
    'step.2.num':         '02 · Krok',
    'step.2.title':       'Wycena',
    'step.2.desc':        'Bezpłatna wycena i\u00a0ustalenie pełnego zakresu prac.',
    'step.3.num':         '03 · Krok',
    'step.3.title':       'Realizacja',
    'step.3.desc':        'Wykonujemy prace terminowo i\u00a0na bieżąco informujemy o\u00a0postępach.',
    'step.4.num':         '04 · Krok',
    'step.4.title':       'Odbiór',
    'step.4.desc':        'Oddajemy gotowy obiekt z\u00a0pełną dokumentacją i\u00a0gwarancją.',
    'blueprint.eyebrow':  'Nasze DNA',
    'blueprint.title':    'Precyzja<br><span class="gold">w każdym projekcie</span>',
    'blueprint.desc':     'Każda realizacja to inżynierski dokument — każda linia obliczona, każdy etap zaplanowany i wykonany bez kompromisów.',
    'careers.eyebrow':    'Kariera',
    'careers.title':      'Dołącz do <span class="gold">zespołu</span>',
    'careers.desc':       'Szukamy doświadczonych pracowników budowlanych. Oferujemy stabilne zatrudnienie, godziwe wynagrodzenie i pracę w zgranym zespole.',
    'careers.perk.1':     'Stabilne zatrudnienie',
    'careers.perk.2':     'Godziwe wynagrodzenie',
    'careers.perk.3':     'Praca w zgranym zespole',
    'careers.perk.4':     'Nowoczesny sprzęt',
    'careers.fname':      'Imię',
    'careers.lname':      'Nazwisko',
    'careers.phone':      'Telefon',
    'careers.email':      'E-mail',
    'careers.submit':     'Wyślij zgłoszenie',
    'careers.success':    'Dziękujemy! Skontaktujemy się wkrótce.',
    'cta.eyebrow':        'Kontakt',
    'cta.title':          'Masz pytania?<br><span class="gold">Zadzwoń do nas</span>',
    'cta.desc':           'Odpowiadamy w\u00a0ciągu 24\u00a0godzin. Bezpłatna wycena, doradztwo techniczne, jasno określony zakres prac.',
    'cta.phone.lbl':      'Telefon · 24/7',
    'cta.email.lbl':      'E-mail',
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
    'footer.desc':        'FAN-BUD — budowa lub\u00a0rozbiórka obiektów w\u00a0Poznaniu i\u00a0Wielkopolsce. Generalne wykonawstwo dla\u00a0wymagających inwestorów.',
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
    'hero.eyebrow':       'Познань · Великопольща',
    'hero.h1.line1':      'Будівництво',
    'hero.h1.line2':      'або',
    'hero.h1.line3':      'знесення',
    'hero.slogan':        'FAN-BUD — Фанати своєї справи',
    'hero.desc':          'Генеральний підряд, бетонні та мулярські роботи, знесення для інвесторів у Познані та всій Великопольщі. Власна бригада. Вчасно. Надійно.',
    'hero.cta1':          'Безкоштовна оцінка',
    'hero.cta2':          'Про компанію',
    'hero.trust.label':   'Сертифікований підрядник',
    'hero.trust.val':     'ISO 9001 · Страхування відповідальності',
    'stat.1.num':         '10<span style="font-size:.7em">+</span>',
    'stat.1.label':       'Роки досвіду',
    'stat.2.num':         '150<span style="font-size:.7em">+</span>',
    'stat.2.label':       'Реалізованих проєктів',
    'stat.3.num':         '100%',
    'stat.3.label':       'Власна бригада',
    'stat.4.num':         'Гарантія',
    'stat.4.label':       'Якості виконання',
    'services.eyebrow':   'Послуги',
    'services.title':     'Що ми <span class="gold">робимо</span>',
    'service.1.title':    'Бетонні<br>роботи',
    'service.2.title':    'Мулярські<br>роботи',
    'service.3.title':    'Знесення<br>та\u00a0розбирання',
    'service.4.title':    'Арматурні<br>роботи',
    'about.eyebrow':      'Про нас',
    'about.title':        'Будуємо<br>довіру',
    'about.desc':         'FAN-BUD — це досвідчена команда фахівців з Познані. Будуємо від фундаменту до даху — вчасно, надійно та з увагою до кожної деталі.',
    'about.mark.1':       'Власна кваліфікована бригада',
    'about.mark.2':       'Страхування відповідальності 1 млн зл.',
    'about.mark.3':       'Сертифікати якості ISO',
    'about.mark.4':       'Безкоштовна оцінка за 48 год',
    'about.badge.num':    '10',
    'about.badge.lbl':    'Роки на будівельному ринку',
    'process.eyebrow':    'Як ми працюємо',
    'process.title':      'Простий <span class="gold">процес</span>',
    'step.1.num':         '01 · Крок',
    'step.1.title':       'Контакт',
    'step.1.desc':        'Зателефонуйте або напишіть нам — відповідаємо протягом 24 годин.',
    'step.2.num':         '02 · Крок',
    'step.2.title':       'Оцінка',
    'step.2.desc':        'Безкоштовна оцінка та визначення повного обсягу робіт.',
    'step.3.num':         '03 · Крок',
    'step.3.title':       'Реалізація',
    'step.3.desc':        'Виконуємо роботи вчасно, з повною прозорістю.',
    'step.4.num':         '04 · Крок',
    'step.4.title':       'Здача',
    'step.4.desc':        'Здаємо готовий об\'єкт з повною документацією та гарантією.',
    'blueprint.eyebrow':  'Наше ДНК',
    'blueprint.title':    'Точність<br><span class="gold">у кожному проєкті</span>',
    'blueprint.desc':     'Кожна реалізація — це інженерний документ: кожна лінія розрахована, кожен етап спланований і виконаний без компромісів.',
    'careers.eyebrow':    'Кар\'єра',
    'careers.title':      'Приєднуйся до <span class="gold">команди</span>',
    'careers.desc':       'Шукаємо досвідчених будівельників. Пропонуємо стабільну роботу, гідну оплату та згуртовану команду.',
    'careers.perk.1':     'Стабільна робота',
    'careers.perk.2':     'Гідна оплата праці',
    'careers.perk.3':     'Робота в дружній команді',
    'careers.perk.4':     'Сучасне обладнання',
    'careers.fname':      'Ім\'я',
    'careers.lname':      'Прізвище',
    'careers.phone':      'Телефон',
    'careers.email':      'E-mail',
    'careers.submit':     'Надіслати заявку',
    'careers.success':    'Дякуємо! Ми зв\'яжемося з вами найближчим часом.',
    'cta.eyebrow':        'Контакт',
    'cta.title':          'Маєте питання?<br><span class="gold">Зателефонуйте нам</span>',
    'cta.desc':           'Відповідаємо протягом 24 годин. Безкоштовна оцінка, технічна консультація, чітко визначений обсяг робіт.',
    'cta.phone.lbl':      'Телефон · 24/7',
    'cta.email.lbl':      'E-mail',
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

  // Sync both lang switchers (desktop + mobile)
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

/* ── HEADER SCROLL + HERO PARALLAX ────────────────── */
const header = document.getElementById('header');
const heroBg = document.querySelector('.hero__bg');
let vh = window.innerHeight;
window.addEventListener('resize', () => { vh = window.innerHeight; }, { passive: true });

const onScroll = () => {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 30);
  // Parallax: translate bg DOWN slightly so it appears to scroll slower
  // hero__bg has top:-30% overhang so there's room to move without gaps
  if (heroBg && y < vh) {
    heroBg.style.setProperty('--parallax', (y * 0.18) + 'px');
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── MOBILE BURGER ─────────────────────────────────── */
const burger = document.getElementById('burger');
const menu = document.getElementById('mMenu');
const toggleMenu = (force) => {
  const open = force ?? !menu.classList.contains('open');
  burger.classList.toggle('open', open);
  menu.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
};
burger.addEventListener('click', () => toggleMenu());
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

/* ── REVEAL ON SCROLL ──────────────────────────────── */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ── SMOOTH ANCHOR SCROLL ──────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── MAGNETIC BUTTONS ──────────────────────────────── */
const magneticBtns = document.querySelectorAll('.btn-primary, .btn-outline');
if (!matchMedia('(hover: none)').matches) {
  magneticBtns.forEach(btn => {
    let rafId;
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        btn.style.setProperty('--mx', (x * 0.12) + 'px');
        btn.style.setProperty('--my', (y * 0.2) + 'px');
      });
    });
    btn.addEventListener('mouseleave', () => {
      cancelAnimationFrame(rafId);
      btn.style.setProperty('--mx', '0px');
      btn.style.setProperty('--my', '0px');
    });
  });
}

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

if (careersForm) {
  careersForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fname = careersForm.fname.value.trim();
    const lname = careersForm.lname.value.trim();
    const phone = careersForm.phone.value.trim();
    const email = careersForm.email.value.trim();

    if (!fname || !lname || !phone || !email) return;

    const submitBtn = careersForm.querySelector('.careers__submit');
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.6';

    try {
      await submitLead({ fname, lname, phone, email });
    } catch (err) {
      console.warn('Lead submission failed:', err);
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

/* ── MOBILE: move stats below hero for clean first screen ── */
(function() {
  if (window.innerWidth > 768) return;
  const hero  = document.querySelector('.hero');
  const stats = hero && hero.querySelector('.stats');
  if (hero && stats) hero.after(stats);
})();

/* ── BLUEPRINT DRAW ANIMATION ─────────────────────── */
const bpSvg = document.getElementById('blueprintSvg');
if (bpSvg) {
  const bpObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        bpSvg.classList.add('bp-animated');
        bpObserver.unobserve(bpSvg);
      }
    });
  }, { threshold: 0.25 });
  bpObserver.observe(bpSvg);
}

/* ── STATS COUNTER ANIMATION ───────────────────────── */
(function() {
  const statsEl = document.querySelector('.stats');
  if (!statsEl) return;

  // [targetValue, suffix, finalHTML] — null means text, just fade in
  const COUNTERS = [
    { to: 10,  suffix: '+', final: '10<span style="font-size:.7em">+</span>' },
    { to: 150, suffix: '+', final: '150<span style="font-size:.7em">+</span>' },
    { to: 100, suffix: '%', final: '100%' },
    { to: null },   // stat 4 — "Gwarancja" text, fade in
  ];

  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function countUp(el, cfg, delay) {
    if (cfg.to === null) {
      // Text stat: smooth fade in
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.9s ease ' + (delay / 1000) + 's';
      requestAnimationFrame(() => { el.style.opacity = '1'; });
      return;
    }

    const duration = cfg.to <= 10 ? 1200 : cfg.to <= 100 ? 1600 : 2000;
    let startTime = null;

    setTimeout(() => {
      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased    = easeOutExpo(progress);
        const value    = Math.round(cfg.to * eased);
        el.textContent = value + cfg.suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.innerHTML = cfg.final; // restore HTML (e.g. the + superscript span)
        }
      }
      requestAnimationFrame(step);
    }, delay);
  }

  let fired = false;
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting || fired) return;
      fired = true;
      countObserver.disconnect();

      const statNums = statsEl.querySelectorAll('.stat__num');
      statNums.forEach((el, i) => {
        countUp(el, COUNTERS[i] || { to: null }, i * 120);
      });
    });
  }, { threshold: 0.5 });

  countObserver.observe(statsEl);
})();
