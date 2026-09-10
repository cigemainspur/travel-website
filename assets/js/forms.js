/* ============================================================
   forms.js · 4 个差异化留资表单
   在 [data-form="custom|traditional|family|culture"] 节点中
   渲染对应的差异化字段，并处理校验与提交。
   ============================================================ */

const FORM_SCHEMAS = {
  custom: {
    extra: [
      { type: 'select', key: 'budget', required: true,
        options: [
          { v: 'u3k',  k: 'form.budget.opt1' },
          { v: '3-8',  k: 'form.budget.opt2' },
          { v: '8-20', k: 'form.budget.opt3' },
          { v: 'a20',  k: 'form.budget.opt4' }
        ] },
      { type: 'checkbox-group', key: 'themes', required: false,
        options: [
          { v: 'culture', k: 'form.themes.culture' },
          { v: 'food',    k: 'form.themes.food' },
          { v: 'photo',   k: 'form.themes.photo' },
          { v: 'outdoor', k: 'form.themes.outdoor' }
        ] },
      { type: 'textarea', key: 'note', required: false }
    ]
  },
  traditional: {
    extra: [
      { type: 'radio', key: 'days', required: true,
        options: [
          { v: '1', k: 'form.days.opt1' },
          { v: '2', k: 'form.days.opt2' },
          { v: '3', k: 'form.days.opt3' },
          { v: '5', k: 'form.days.opt4' },
          { v: '7', k: 'form.days.opt5' }
        ] },
      { type: 'radio', key: 'mode', required: true,
        options: [
          { v: 'group', k: 'form.mode.group' },
          { v: 'semi',  k: 'form.mode.semi'  }
        ] }
    ]
  },
  family: {
    extra: [
      { type: 'radio', key: 'childAge', required: true,
        options: [
          { v: '0-3',   k: 'form.childAge.opt1' },
          { v: '4-6',   k: 'form.childAge.opt2' },
          { v: '7-12',  k: 'form.childAge.opt3' },
          { v: '13-17', k: 'form.childAge.opt4' }
        ] },
      { type: 'number', key: 'childCount', required: true, min: 1, max: 8 },
      { type: 'checkbox', key: 'kidsMeal', required: false }
    ]
  },
  culture: {
    extra: [
      { type: 'checkbox-group', key: 'modules', required: true,
        options: [
          { v: 'roleplay', k: 'form.modules.roleplay' },
          { v: 'museum',   k: 'form.modules.museum'   },
          { v: 'diy',      k: 'form.modules.diy'      },
          { v: 'dining',   k: 'form.modules.dining'   }
        ] },
      { type: 'radio', key: 'guideLang', required: true,
        options: [
          { v: 'zh', k: 'form.guideLang.zh' },
          { v: 'en', k: 'form.guideLang.en' },
          { v: 'ru', k: 'form.guideLang.ru' }
        ] }
    ]
  }
};

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

    // collect
    const data = {};
    new FormData(form).forEach((v, k) => { if (v !== '') data[k] = v; });
    console.log('[Sound Of Spring · Demo inquiry]', data);

    form.reset();
    if (window.showToast) window.showToast(I18n.t('toast.success'));
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
    console.log('[Sound Of Spring · Contact]', { name, email, msg });
    form.reset();
    if (window.showToast) window.showToast(I18n.t('toast.success'));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initProductForms();
  initContactForm();
});