/* ============================================================
   main.js · 导航 / 语言切换 / 产品筛选 / Toast 工具
   ============================================================ */
(function () {
  'use strict';

  /* ----- 渠道标识：query ?channel= 优先（兼容旧 path /c/{code}），存 localStorage ----- */
  const CHANNEL_KEY = 'channel';

  function readChannelFromUrl() {
    const q = new URLSearchParams(location.search).get('channel');
    if (q) return q;
    const seg = location.pathname.split('/').filter(Boolean);
    if (seg[0] === 'c' && seg[1]) return seg[1];
    return null;
  }

  function currentChannel() {
    return readChannelFromUrl() || localStorage.getItem(CHANNEL_KEY) || null;
  }

  function isInternalLink(href) {
    if (!href) return false;
    const h = href.trim();
    if (!h) return false;
    if (/^(#|javascript:|mailto:|tel:|data:)/i.test(h)) return false;
    if (/^https?:\/\//i.test(h)) {
      try { return new URL(h).origin === location.origin; } catch (e) { return false; }
    }
    return true;
  }

  function withChannel(href, channel) {
    if (!channel) return href;
    try {
      const u = new URL(href, location.origin);
      if (u.origin !== location.origin) return href;
      u.searchParams.set('channel', channel);
      return u.pathname + u.search + u.hash;
    } catch (e) {
      return href;
    }
  }

  (function initChannel() {
    const c = readChannelFromUrl();
    if (c) localStorage.setItem(CHANNEL_KEY, c);
  })();

  /* 站内链接透传渠道参数：内部跳转不丢失 channel */
  (function propagateChannel() {
    const channel = currentChannel();
    if (!channel) return;
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!isInternalLink(href)) return;
      a.setAttribute('href', withChannel(href, channel));
    });
  })();

  /* ----- Mobile nav ----- */
  const toggle = document.querySelector('.nav-toggle');
  const tabs = document.querySelector('.nav-tabs');
  if (toggle && tabs) {
    toggle.addEventListener('click', () => {
      const open = tabs.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  /* ----- Language switch ----- */
  document.querySelectorAll('select[data-lang-select]').forEach(sel => {
    sel.value = I18n.getCurrent();
    sel.addEventListener('change', e => {
      I18n.setLanguage(e.target.value);
      // notify others (eg. the other dropdown if any)
      document.querySelectorAll('select[data-lang-select]').forEach(s => { s.value = e.target.value; });
    });
  });

  /* ----- Product filter chips (products.html) ----- */
  const chips = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.product-card');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.setAttribute('aria-pressed', 'false'));
      chip.setAttribute('aria-pressed', 'true');
      const key = chip.getAttribute('data-filter');
      cards.forEach(card => {
        const match = key === 'all' || card.getAttribute('data-key') === key;
        card.style.display = match ? '' : 'none';
      });
    });
  });

  /* ----- Toast helper (used by forms.js) ----- */
  window.showToast = function (msg) {
    let el = document.querySelector('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      el.setAttribute('role', 'status');
      el.setAttribute('aria-live', 'polite');
      document.body.appendChild(el);
    }
    el.textContent = msg;
    requestAnimationFrame(() => el.classList.add('show'));
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
  };

  /* ----- Reveal on scroll (subtle) ----- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('fade-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();