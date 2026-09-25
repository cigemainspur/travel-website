/* ============================================================
   forms.js · 4 个差异化留资表单
   在 [data-form="biz|scn|cul|food"] 节点中
   渲染对应的差异化字段，并处理校验与提交。
   ============================================================ */

const FORM_SCHEMAS = {
  biz: {
    extra: [
      { type: 'select', key: 'delegationSize', required: true,
        options: [
          { v: '1-5',   k: 'form.delegationSize.opt1' },
          { v: '6-15',  k: 'form.delegationSize.opt2' },
          { v: '16-30', k: 'form.delegationSize.opt3' },
          { v: '30+',   k: 'form.delegationSize.opt4' }
        ] },
      { type: 'checkbox-group', key: 'interests', required: true,
        options: [
          { v: 'robotics',      k: 'form.interests.robotics' },
          { v: 'ecommerce',     k: 'form.interests.ecommerce' },
          { v: 'manufacturing', k: 'form.interests.manufacturing' },
          { v: 'academia',      k: 'form.interests.academia' }
        ] },
      { type: 'textarea', key: 'goals', required: false }
    ]
  },
  scn: {
    extra: [
      { type: 'radio', key: 'days', required: true,
        options: [
          { v: '1', k: 'form.days.opt1' },
          { v: '2', k: 'form.days.opt2' },
          { v: '3', k: 'form.days.opt3' },
          { v: '5', k: 'form.days.opt4' },
          { v: '7', k: 'form.days.opt5' }
        ] },
      { type: 'radio', key: 'pace', required: true,
        options: [
          { v: 'relaxed',  k: 'form.pace.relaxed' },
          { v: 'standard', k: 'form.pace.standard' },
          { v: 'compact',  k: 'form.pace.compact' }
        ] },
      { type: 'checkbox-group', key: 'hl', required: false,
        options: [
          { v: 'temples', k: 'form.hl.temples' },
          { v: 'shows',   k: 'form.hl.shows' },
          { v: 'tea',     k: 'form.hl.tea' },
          { v: 'nature',  k: 'form.hl.nature' }
        ] }
    ]
  },
  cul: {
    extra: [
      { type: 'checkbox-group', key: 'workshops', required: true,
        options: [
          { v: 'calligraphy', k: 'form.workshops.calligraphy' },
          { v: 'crafts',      k: 'form.workshops.crafts' },
          { v: 'opera',       k: 'form.workshops.opera' },
          { v: 'tcm',         k: 'form.workshops.tcm' }
        ] },
      { type: 'radio', key: 'guideLang', required: true,
        options: [
          { v: 'zh', k: 'form.guideLang.zh' },
          { v: 'en', k: 'form.guideLang.en' },
          { v: 'ru', k: 'form.guideLang.ru' }
        ] }
    ]
  },
  food: {
    extra: [
      { type: 'checkbox-group', key: 'dinners', required: true,
        options: [
          { v: 'teagarden', k: 'form.dinners.teagarden' },
          { v: 'bamboo',    k: 'form.dinners.bamboo' },
          { v: 'songmenu',  k: 'form.dinners.songmenu' },
          { v: 'hangzhou',  k: 'form.dinners.hangzhou' },
          { v: 'yacht',     k: 'form.dinners.yacht' }
        ] },
      { type: 'radio', key: 'diet', required: true,
        options: [
          { v: 'none',       k: 'form.diet.none' },
          { v: 'vegetarian', k: 'form.diet.vegetarian' },
          { v: 'halal',      k: 'form.diet.halal' },
          { v: 'allergies',  k: 'form.diet.allergies' }
        ] }
    ]
  }
};

/* 差异化字段 → 收集到 extra 的映射 */
const DIFF_FIELDS = {
  budget: 'single',
  themes: 'multi',
  days: 'single',
  mode: 'single',
  childAge: 'single',
  childCount: 'number',
  kidsMeal: 'bool',
  modules: 'multi',
  guideLang: 'single',
  delegationSize: 'single',
  interests: 'multi',
  goals: 'single',
  pace: 'single',
  hl: 'multi',
  workshops: 'multi',
  dinners: 'multi',
  diet: 'single',
};

function getApiBase() {
  return (window.APP_CONFIG && window.APP_CONFIG.API_BASE) || 'http://localhost:8000';
}

function getChannelCode() {
  return localStorage.getItem('channel') || null;
}

async function submitLead(productType, form) {
  const fd = new FormData(form);
  const extra = {};
  Object.entries(DIFF_FIELDS).forEach(([key, kind]) => {
    if (kind === 'multi') {
      const vals = fd.getAll(key);
      if (vals.length) extra[key] = vals;
    } else if (kind === 'bool') {
      if (fd.get(key)) extra[key] = true;
    } else if (kind === 'number') {
      const v = fd.get(key);
      if (v) extra[key] = Number(v);
    } else {
      const v = fd.get(key);
      if (v) extra[key] = v;
    }
  });

  const payload = {
    name: fd.get('name') || '',
    email: fd.get('email') || '',
    phone: fd.get('phone') || null,
    preferred_date: fd.get('date') || null,
    travelers: fd.get('people') ? Number(fd.get('people')) : null,
    product_type: productType,
    message: fd.get('note') || null,
    channel_code: getChannelCode(),
    extra: extra,
  };

  const res = await fetch(`${getApiBase()}/api/v1/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || 'submit failed');
  }
}

function reqMark() {
  return '<span class="req" aria-hidden="true">*</span>';
}

function renderExtraField(schema) {
  const k = `form.${schema.key}`;
  switch (schema.type) {
    case 'select':
      return `
        <div class="field" data-field="${schema.key}">
          <label>${I18n.t(k)}${schema.required ? reqMark() : ''}</label>
          <select name="${schema.key}" ${schema.required ? 'required' : ''}>
            <option value="" disabled selected hidden></option>
            ${schema.options.map(o => `<option value="${o.v}">${I18n.t(o.k)}</option>`).join('')}
          </select>
          <span class="error-msg" aria-live="polite"></span>
        </div>`;
    case 'radio':
      return `
        <div class="field" data-field="${schema.key}">
          <label>${I18n.t(k)}${schema.required ? reqMark() : ''}</label>
          <div class="options" role="radiogroup">
            ${schema.options.map(o => `
              <label>
                <input type="radio" name="${schema.key}" value="${o.v}" ${schema.required ? 'required' : ''}>
                <span>${I18n.t(o.k)}</span>
              </label>`).join('')}
          </div>
          <span class="error-msg" aria-live="polite"></span>
        </div>`;
    case 'checkbox':
      return `
        <div class="field" data-field="${schema.key}">
          <div class="options">
            <label>
              <input type="checkbox" name="${schema.key}" value="yes">
              <span>${I18n.t(k)}</span>
            </label>
          </div>
        </div>`;
    case 'checkbox-group':
      return `
        <div class="field" data-field="${schema.key}">
          <label>${I18n.t(k)}${schema.required ? reqMark() : ''}</label>
          <div class="options">
            ${schema.options.map(o => `
              <label>
                <input type="checkbox" name="${schema.key}" value="${o.v}">
                <span>${I18n.t(o.k)}</span>
              </label>`).join('')}
          </div>
          <span class="error-msg" aria-live="polite"></span>
        </div>`;
    case 'textarea':
      return `
        <div class="field" data-field="${schema.key}">
          <label>${I18n.t(k)}</label>
          <textarea name="${schema.key}" rows="3"></textarea>
        </div>`;
    case 'number':
      return `
        <div class="field" data-field="${schema.key}">
          <label>${I18n.t(k)}${schema.required ? reqMark() : ''}</label>
          <input type="number" name="${schema.key}" min="${schema.min || 0}" max="${schema.max || 99}" ${schema.required ? 'required' : ''}>
          <span class="error-msg" aria-live="polite"></span>
        </div>`;
    default:
      return '';
  }
}

function bindForm(root) {
  const form = root.querySelector('form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const fields = form.querySelectorAll('.field');
    let ok = true;
    fields.forEach(f => f.classList.remove('invalid'));

    fields.forEach(f => {
      const input = f.querySelector('input, select, textarea');
      if (!input) return;
      const required = input.hasAttribute('required');
      const val = (input.value || '').trim();
      const isRadio = input.type === 'radio';
      const isCheckboxGroup = f.querySelectorAll('input[type="checkbox"]').length > 1;

      if (required) {
        if (isRadio) {
          const checked = f.querySelector('input[type="radio"]:checked');
          if (!checked) { ok = false; f.classList.add('invalid'); f.querySelector('.error-msg').textContent = '\u2026'; }
        } else if (isCheckboxGroup) {
          const checked = f.querySelector('input[type="checkbox"]:checked');
          if (!checked) { ok = false; f.classList.add('invalid'); f.querySelector('.error-msg').textContent = '\u2026'; }
        } else if (!val) {
          ok = false; f.classList.add('invalid'); f.querySelector('.error-msg').textContent = '\u2026';
        }
      }
      // email format
      if (input.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        ok = false; f.classList.add('invalid'); f.querySelector('.error-msg').textContent = '...';
      }
      // phone: allow +, digits, spaces, dashes
      if (input.name === 'phone' && val && !/^[+\d\s\-()]{6,}$/.test(val)) {
        ok = false; f.classList.add('invalid'); f.querySelector('.error-msg').textContent = '...';
      }
    });

    if (!ok) return;

    const productType = root.getAttribute('data-form');
    submitLead(productType, form)
      .then(() => {
        form.reset();
        if (window.showToast) window.showToast(I18n.t('toast.success'));
      })
      .catch(err => {
        console.error('[lead submit error]', err);
        if (window.showToast) window.showToast('提交失败，请稍后再试');
      });
  });
}

function initProductForms() {
  document.querySelectorAll('[data-form]').forEach(root => {
    const key = root.getAttribute('data-form');
    const schema = FORM_SCHEMAS[key];
    if (!schema) return;
    const slot = root.querySelector('[data-extra-fields]');
    if (!slot) return;
    slot.innerHTML = schema.extra.map(renderExtraField).join('');
    bindForm(root);
  });
}

function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const msg = form.querySelector('[name="msg"]').value.trim();
    if (!name || !email || !msg) {
      form.querySelectorAll('.field').forEach(f => {
        const input = f.querySelector('input,textarea');
        if (input && !input.value.trim()) f.classList.add('invalid');
      });
      return;
    }
    const payload = {
      name,
      email,
      phone: form.querySelector('[name="phone"]')?.value || null,
      message: msg,
      channel_code: getChannelCode(),
      extra: {},
    };
    fetch(`${getApiBase()}/api/v1/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(res => {
        if (!res.ok) throw new Error('submit failed');
        form.reset();
        if (window.showToast) window.showToast(I18n.t('toast.success'));
      })
      .catch(err => {
        console.error('[contact submit error]', err);
        if (window.showToast) window.showToast('提交失败，请稍后再试');
      });
  });
}

function initInquiryForm() {
  const form = document.getElementById('inquiry-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const contact = form.querySelector('[name="contact"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    if (!name || !contact || !message) {
      if (window.showToast) window.showToast('请填写完整信息');
      return;
    }
    const payload = {
      name,
      phone: contact,          // 联系方式存 phone 字段
      message,
      product_type: 'inquiry', // 用户诉求收集
      channel_code: getChannelCode(),
      extra: {},
    };
    fetch(`${getApiBase()}/api/v1/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(res => {
        if (!res.ok) throw new Error('submit failed');
        form.reset();
        if (window.showToast) window.showToast(I18n.t('toast.success'));
      })
      .catch(err => {
        console.error('[inquiry submit error]', err);
        if (window.showToast) window.showToast('提交失败，请稍后再试');
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initProductForms();
  initContactForm();
  initInquiryForm();
});