/* ==========================================================
   ASCANIA — Main JS
   Nav · Hamburger · Smooth Scroll · Scroll Animations · Cookie
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Sticky Nav ---- */
  const navbar = document.getElementById('navbar');
  const SCROLL_THRESHOLD = 60;

  function updateNav() {
    navbar.classList.toggle('scrolled', window.scrollY > SCROLL_THRESHOLD);
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ---- Hamburger Menu ---- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Close on link click */
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      });
    });

    /* Close on outside click */
    document.addEventListener('click', e => {
      if (mobileMenu.classList.contains('open') &&
          !mobileMenu.contains(e.target) &&
          !hamburger.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---- Smooth Scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = navbar ? navbar.offsetHeight + 16 : 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---- Intersection Observer: Fade-Up Animations ---- */
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 6) * 80}ms`;
      observer.observe(el);
    });
  }

  /* ---- Cookie Banner ---- */
  const cookieBanner = document.getElementById('cookie-banner');
  const COOKIE_KEY = 'ascania-cookie-consent';

  if (cookieBanner && !localStorage.getItem(COOKIE_KEY)) {
    setTimeout(() => cookieBanner.classList.add('visible'), 1200);
  }

  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    cookieBanner.classList.remove('visible');
    /* GA4 load after consent */
    loadGA4();
  });

  document.getElementById('cookie-decline')?.addEventListener('click', () => {
    localStorage.setItem(COOKIE_KEY, 'declined');
    cookieBanner.classList.remove('visible');
  });

  /* Auto-load GA4 if already consented */
  if (localStorage.getItem(COOKIE_KEY) === 'accepted') {
    loadGA4();
  }

  /* ---- Contact Form ---- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = '…';

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          showFormSuccess(form);
        } else {
          btn.disabled = false;
          btn.textContent = originalText;
          showFormError(form);
        }
      } catch {
        btn.disabled = false;
        btn.textContent = originalText;
        showFormError(form);
      }
    });
  }

  /* ---- Active Nav Link Highlighting ---- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .mobile-menu a[href^="#"]');

  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.style.color = link.getAttribute('href') === '#' + entry.target.id
              ? '#fff'
              : '';
          });
        }
      });
    }, { threshold: 0.3 });
    sections.forEach(s => sectionObserver.observe(s));
  }
});

/* ---- GA4 Loader ---- */
function loadGA4() {
  const GA4_ID = 'G-XXXXXXXXXX'; /* Replace with your Measurement ID */
  if (window.__ga4loaded || GA4_ID === 'G-XXXXXXXXXX') return;
  window.__ga4loaded = true;

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA4_ID);
}

/* ---- Form Feedback ---- */
function showFormSuccess(form) {
  const lang = window.__currentLang || 'en';
  const msg = lang === 'de'
    ? 'Vielen Dank! Wir melden uns innerhalb von 24 Stunden.'
    : 'Thank you! We\'ll be in touch within 24 hours.';

  const div = document.createElement('div');
  div.className = 'form-success';
  div.style.cssText = 'background:#2E7D8C;color:#fff;padding:20px 24px;border-radius:8px;font-size:.9375rem;font-weight:600;text-align:center;margin-top:16px;';
  div.textContent = msg;
  form.innerHTML = '';
  form.appendChild(div);
}

function showFormError(form) {
  const lang = window.__currentLang || 'en';
  const existing = form.querySelector('.form-error');
  if (existing) existing.remove();

  const div = document.createElement('div');
  div.className = 'form-error';
  div.style.cssText = 'background:#ba1a1a;color:#fff;padding:14px 18px;border-radius:8px;font-size:.875rem;margin-top:12px;';
  div.textContent = lang === 'de'
    ? 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.'
    : 'Something went wrong. Please try again or email us directly.';
  form.appendChild(div);
}
