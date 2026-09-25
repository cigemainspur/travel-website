/* ============================================================
   registration.js · 入境小包团报名登记
   - 任一 [data-register] 按钮点击 → 弹出报名弹窗
   - [data-purpose] 指定默认「旅游目的」勾选（对应产品详情页）
   - 提交时自动附带渠道参数 channel_code（localStorage）
   - 弹窗文字通过 data-i18n 跟随主站语言切换
   ============================================================ */
(function () {
  'use strict';

  const CHANNEL_KEY = 'channel';

  function getApiBase() {
    return (window.APP_CONFIG && window.APP_CONFIG.API_BASE) || 'http://localhost:8000';
  }

  function getChannelCode() {
    return localStorage.getItem(CHANNEL_KEY) || null;
  }

  const MODAL_HTML = `
    <div class="reg-overlay" data-close></div>
    <div class="reg-dialog" role="dialog" aria-modal="true" aria-label="报名登记">
      <button class="reg-close" type="button" data-close aria-label="关闭">&times;</button>
      <div class="reg-head">
        <h2 data-i18n="reg.title">旅行报名表</h2>
        <p class="reg-tip" data-i18n="reg.tip">我们仅收集与旅行相关的信息；健康相关资料将由合作医疗机构在后续环节单独收集</p>
      </div>
      <form class="reg-form" novalidate>
        <div class="reg-scroll">
          <div class="reg-section">
            <h3 data-i18n="reg.section.passenger">个人信息</h3>
            <div class="reg-grid">
              <div class="reg-field"><label><span data-i18n="reg.full_name">姓名（与护照一致）</span><span class="req">*</span></label><input name="full_name" required data-i18n-placeholder="reg.ph.full_name" placeholder="请填写护照上的全名"></div>
              <div class="reg-field"><label><span data-i18n="reg.passport_no">护照号码</span></label><input name="passport_no" data-i18n-placeholder="reg.ph.passport_no" placeholder="护照号"></div>
              <div class="reg-field"><label><span data-i18n="reg.passport_expiry">护照有效期</span></label><input type="date" name="passport_expiry"></div>
              <div class="reg-field"><label><span data-i18n="reg.nationality">国籍</span></label><input name="nationality" data-i18n-placeholder="reg.ph.nationality" placeholder="如 Russia / 俄罗斯"></div>
              <div class="reg-field"><label><span data-i18n="reg.birth_date">出生日期</span></label><input type="date" name="birth_date"></div>
              <div class="reg-field"><label><span data-i18n="reg.email">联系邮箱</span></label><input type="email" name="email" placeholder="email@example.com"></div>
              <div class="reg-field"><label><span data-i18n="reg.contact">Telegram 或 WhatsApp</span></label><input name="contact" data-i18n-placeholder="reg.ph.contact" placeholder="@username 或手机号"></div>
              <div class="reg-field"><label><span data-i18n="reg.companions_count">同行人数</span></label><input type="number" name="companions_count" min="0" value="0"></div>
              <div class="reg-field reg-wide"><label><span data-i18n="reg.companions_names">同行人姓名（与护照一致，如有）</span></label><input name="companions_names" data-i18n-placeholder="reg.ph.companions_names" placeholder="多人用顿号或逗号分隔"></div>
            </div>
          </div>

          <div class="reg-section">
            <h3 data-i18n="reg.section.itinerary">行程信息</h3>
            <div class="reg-grid">
              <div class="reg-field"><label><span data-i18n="reg.arrival_date">预计抵达日期（上海/杭州）</span></label><input type="date" name="arrival_date"></div>
              <div class="reg-field"><label><span data-i18n="reg.departure_date">预计离境日期</span></label><input type="date" name="departure_date"></div>
              <div class="reg-field reg-wide">
                <label><span data-i18n="reg.route">感兴趣的行程</span></label>
                <div class="reg-options">
                  <label><input type="radio" name="route" value="7d"><span data-i18n="reg.route.7d">7天沪杭小包团</span></label>
                  <label><input type="radio" name="route" value="12d"><span data-i18n="reg.route.12d">12天沪杭小包团</span></label>
                  <label><input type="radio" name="route" value="other"><span data-i18n="reg.route.other">其他（请说明）</span></label>
                </div>
                <input name="route_other" data-i18n-placeholder="reg.ph.route_other" placeholder="其他线路说明" style="margin-top:8px;">
              </div>
              <div class="reg-field reg-wide">
                <label><span data-i18n="reg.purposes">旅行目的（可多选）</span></label>
                <div class="reg-options">
                  <label><input type="checkbox" name="purposes" value="business"><span data-i18n="reg.purpose.business">商务考察</span></label>
                  <label><input type="checkbox" name="purposes" value="cultural"><span data-i18n="reg.purpose.cultural">文化旅游</span></label>
                  <label><input type="checkbox" name="purposes" value="family"><span data-i18n="reg.purpose.family">亲子游</span></label>
                  <label><input type="checkbox" name="purposes" value="sightseeing"><span data-i18n="reg.purpose.sightseeing">休闲观光</span></label>
                  <label><input type="checkbox" name="purposes" value="other"><span data-i18n="reg.purpose.other">其他</span></label>
                </div>
                <input name="purpose_other" data-i18n-placeholder="reg.ph.purpose_other" placeholder="其他目的说明" style="margin-top:8px;">
              </div>
              <div class="reg-field reg-wide">
                <label><span data-i18n="reg.room_types">房型偏好</span></label>
                <div class="reg-options">
                  <label><input type="checkbox" name="room_types" value="twin"><span data-i18n="reg.room.twin">双床</span></label>
                  <label><input type="checkbox" name="room_types" value="double"><span data-i18n="reg.room.double">大床</span></label>
                  <label><input type="checkbox" name="room_types" value="nonsmoking"><span data-i18n="reg.room.nonsmoking">无烟房</span></label>
                </div>
                <input name="room_other" data-i18n-placeholder="reg.ph.room_other" placeholder="其他需求" style="margin-top:8px;">
              </div>
              <div class="reg-field"><label><span data-i18n="reg.total_travelers">出行总人数</span></label><input type="number" name="total_travelers" min="1" data-i18n-placeholder="reg.ph.total_travelers" placeholder="含本人"></div>
            </div>
          </div>

          <div class="reg-section">
            <h3 data-i18n="reg.section.special">特殊需求（选填）</h3>
            <div class="reg-grid">
              <div class="reg-field reg-wide"><label><span data-i18n="reg.allergies">食物/药物过敏</span></label><input name="allergies" data-i18n-placeholder="reg.ph.allergies" placeholder="如有请说明"></div>
              <div class="reg-field reg-wide"><label><span data-i18n="reg.medical">健康状况或协助需求</span></label><input name="medical" data-i18n-placeholder="reg.ph.medical" placeholder="如有请说明"></div>
              <div class="reg-field reg-wide"><label><span data-i18n="reg.dietary">饮食偏好</span></label><input name="dietary" data-i18n-placeholder="reg.ph.dietary" placeholder="如素食、清真、忌口等"></div>
            </div>
          </div>

          <div class="reg-section">
            <h3 data-i18n="reg.section.compliance">请确认以下须知</h3>
            <div class="reg-compliance">
              <label><input type="checkbox" name="compliance_medical" required><span data-i18n="reg.compliance.medical">我已知悉：本服务仅提供旅游、接送、翻译、住宿、游览与旅拍服务，不包含医疗诊疗与建议，也不承诺医疗效果；牙科、眼科、中医等医疗服务由国内合作医疗机构独立对接并独立收费。</span></label>
              <label><input type="checkbox" name="compliance_fee" required><span data-i18n="reg.compliance.fee">我已知悉报价的包含项目与不含项目（国际机票、餐饮、医疗费用等需自理）。</span></label>
            </div>
          </div>
        </div>

        <div class="reg-actions">
          <button type="submit" class="btn btn-primary" data-i18n="reg.submit">提交报名</button>
        </div>
      </form>
    </div>
  `;

  let modalEl = null;

  function ensureModal() {
    if (modalEl) return modalEl;
    modalEl = document.createElement('div');
    modalEl.className = 'reg-modal';
    modalEl.innerHTML = MODAL_HTML;
    document.body.appendChild(modalEl);

    modalEl.querySelectorAll('[data-close]').forEach(el => {
      el.addEventListener('click', close);
    });
    modalEl.querySelector('form').addEventListener('submit', onSubmit);

    // 应用当前语言（弹窗是动态创建的，需手动触发一次 i18n）
    if (window.I18n && window.I18n.apply) window.I18n.apply();
    return modalEl;
  }

  function open(purpose) {
    const m = ensureModal();
    if (purpose) {
      m.querySelectorAll('input[name="purposes"]').forEach(cb => {
        cb.checked = cb.value === purpose;
      });
    }
    m.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    if (!modalEl) return;
    modalEl.classList.remove('open');
    document.body.style.overflow = '';
  }

  function collect(form) {
    const val = name => (form.elements[name] ? form.elements[name].value.trim() : '') || null;
    const dateVal = name => (form.elements[name] ? form.elements[name].value : '') || null;
    const checkedList = name =>
      Array.from(form.querySelectorAll('input[name="' + name + '"]:checked')).map(c => c.value);

    return {
      full_name: val('full_name'),
      passport_no: val('passport_no'),
      passport_expiry: dateVal('passport_expiry'),
      nationality: val('nationality'),
      birth_date: dateVal('birth_date'),
      email: val('email'),
      contact: val('contact'),
      companions_count: form.elements['companions_count'] && form.elements['companions_count'].value !== '' ? Number(form.elements['companions_count'].value) : null,
      companions_names: val('companions_names'),
      arrival_date: dateVal('arrival_date'),
      departure_date: dateVal('departure_date'),
      route: form.elements['route'] && form.elements['route'].value || null,
      route_other: val('route_other'),
      purposes: checkedList('purposes'),
      purpose_other: val('purpose_other'),
      room_types: checkedList('room_types'),
      room_other: val('room_other'),
      total_travelers: form.elements['total_travelers'] && form.elements['total_travelers'].value !== '' ? Number(form.elements['total_travelers'].value) : null,
      allergies: val('allergies'),
      medical: val('medical'),
      dietary: val('dietary'),
      compliance_confirmed: !!form.elements['compliance_medical'] && !!form.elements['compliance_medical'].checked && !!form.elements['compliance_fee'] && !!form.elements['compliance_fee'].checked,
      channel_code: getChannelCode(),
      product_type: 'registration',
    };
  }

  function t(key) {
    return (window.I18n && window.I18n.t) ? window.I18n.t(key) : key;
  }

  function onSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const fullName = form.elements['full_name'];
    const c1 = form.elements['compliance_medical'];
    const c2 = form.elements['compliance_fee'];
    let ok = true;
    if (!fullName.value.trim()) {
      fullName.classList.add('invalid');
      ok = false;
    } else {
      fullName.classList.remove('invalid');
    }
    if (!c1.checked || !c2.checked) {
      [c1, c2].forEach(c => c.closest('label').classList.add('invalid'));
      ok = false;
    } else {
      [c1, c2].forEach(c => c.closest('label').classList.remove('invalid'));
    }
    if (!ok) {
      if (window.showToast) window.showToast(t('toast.reg.required'));
      return;
    }

    const payload = collect(form);

    fetch(getApiBase() + '/api/v1/registrations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(res => {
        if (!res.ok) throw new Error('submit failed');
        form.reset();
        close();
        if (window.showToast) window.showToast(t('toast.reg.success'));
      })
      .catch(err => {
        console.error('[registration submit error]', err);
        if (window.showToast) window.showToast(t('toast.reg.fail'));
      });
  }

  // 全局委托：点击 [data-register] 打开弹窗
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-register]');
    if (!btn) return;
    e.preventDefault();
    open(btn.getAttribute('data-purpose') || '');
  });

  // ESC 关闭
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });
})();
