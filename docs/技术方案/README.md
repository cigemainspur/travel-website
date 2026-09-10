# 春之声国际旅行社 · 落地页 Demo — 技术方案

> 版本：v1.0 · 日期：2026-09-10 · 状态：待评审（含 §10 待确认问题）

---

## 1. 技术选型

| 维度 | 选择 | 理由 |
| ---- | ---- | ---- |
| 站点类型 | **纯静态（Static Site）** | 用户明确要求"纯静态 demo" |
| 框架 | **不引入框架（Vanilla HTML/CSS/JS）** | 演示 demo，零构建、零依赖、易部署；如后期需要可平滑迁移到 Vite + Vue/React |
| 样式 | 原生 CSS（**CSS Variables + BEM 风命名**） | 主题切换、国际化都依赖 CSS 变量驱动 |
| 图标 | 内联 SVG | 无图标字体依赖、可配色 |
| 图片 | JPEG / PNG，已从 PPT 提取并规整 | 无需引入额外素材 |
| 字体 | Google Fonts（Playfair Display + Inter）+ 思源宋体/黑体（中文兜底） | 体现江南文化质感 |
| 构建 | **无构建** | 直接 `<script>` 引用 |
| 部署 | 任意静态服务（`python -m http.server`、`npx serve`、Nginx、CDN） | 无服务端逻辑 |

## 2. 项目结构

```
travel-website/
├── docs/
│   ├── 春之声国际旅行社简介.pptx          # 原始素材
│   ├── 需求文档/
│   │   └── README.md
│   └── 技术方案/
│       └── README.md
├── index.html                              # 公司介绍（主页）
├── products.html                           # 产品 listing
├── product-custom.html                     # 定制化详情
├── product-traditional.html                # 传统详情
├── product-family.html                     # 亲子详情
├── product-culture.html                    # 文化体验详情
├── guides.html                             # 攻略
├── contact.html                            # 联系我们
├── guides/                                 # 攻略详情（Demo 占位）
│   └── README.md
└── assets/
    ├── css/
    │   ├── reset.css                       # 浏览器样式重置
    │   └── style.css                       # 主样式（包含 CSS 变量、组件）
    ├── js/
    │   ├── i18n.js                         # 多语言字典 + 切换逻辑
    │   ├── main.js                         # 导航高亮、Tab 行为、表单校验
    │   └── forms.js                        # 4 个差异化表单的配置 + 校验
    └── images/                             # 60+ 张 PPT 提取的图片
        ├── hero-*.jpg
        ├── about-*.{jpg,png,jpeg}
        ├── custom-*.jpeg
        ├── family-*.jpeg
        ├── culture-*.{jpg,png,jpeg}
        ├── client-*.{png,jpeg}
        └── contact-*.jpg
```

## 3. 页面实现方案

### 3.1 顶部导航（5 个 Tab）

- 在每页 `<header>` 中复用同一段 `<nav class="site-nav">` 结构
- 当前页通过 `data-active="key"` 高亮（`key` 取 `home / products / guides / contact / lang`）
- "语言选择" 渲染为下拉（`<select>`），onChange 调用 `i18n.setLanguage(lang)`
- 移动端：折叠为汉堡菜单（`<details>` 实现，零依赖）

### 3.2 主页（index.html）

按 §5.1 需求分 7 个 `<section>`：

1. Hero：全屏背景图 `hero-hangzhou-skyline.jpg`，叠加文字 + CTA
2. 关于我们：两栏布局（文字 + 图组）
3. 公司愿景：双 quote 样式
4. 业务板块：4 张卡片网格
5. 核心数据：4 个数字大字
6. 主要客户：Logo 墙（横向滚动条）
7. 底部 CTA + Footer

### 3.3 产品 listing（products.html）

- 顶部产品线筛选（4 个 chip，可点击过滤高亮当前分类）
- 4 张产品卡片网格：图标 + 标题 + 简介 + "查看详情"按钮
- 卡片悬停：轻微上浮 + 阴影增强
- 卡片配色与产品语义呼应：
  - 定制化：深绿
  - 传统：暖橘
  - 亲子：玫粉
  - 文化体验：朱砂红

### 3.4 产品详情页

4 个详情页结构相同，差异仅在：

- Hero 配图（`custom-*` / `family-*` / `culture-*` 系列）
- 文案（从 PPT 提炼 + 自由发挥）
- 表单配置（见 §5）

每个详情页模板：

```html
<section class="product-hero">...</section>
<section class="product-intro">...</section>
<section class="product-itinerary">...</section>
<section class="product-gallery">...</section>
<section class="product-form">...</section> <!-- 表单由 forms.js 注入 -->
```

为减少重复代码，**详情页可以接受少量 HTML 重复**（Demo 体量可控）；
如需进一步抽象，可将通用 section 抽成 `<template>` + JS 注入。

## 4. 多语言 i18n 实现

### 4.1 字典结构

`assets/js/i18n.js`：

```js
const I18N = {
  en: {
    'nav.home': 'Company',
    'nav.products': 'Tours',
    'nav.guides': 'Guides',
    'nav.contact': 'Contact',
    'hero.title': 'Sound Of Spring',
    // ... 集中维护
  },
  ru: { /* 俄语 */ },
  zh: { /* 简体中文 */ }
};
```

### 4.2 DOM 标记

```html
<h1 data-i18n="hero.title">Sound Of Spring</h1>
<input data-i18n-placeholder="form.email" placeholder="Email" />
<button data-i18n="cta.submit">Submit</button>
```

### 4.3 切换逻辑

```js
function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (I18N[lang][key]) el.placeholder = I18N[lang][key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (I18N[lang][key]) el.setAttribute('aria-label', I18N[lang][key]);
  });
}
```

- 默认语言：浏览器 `navigator.language` → 若为 `zh*` 选 `zh`，其他选 `en`
- 持久化：`localStorage['lang']`
- 语言变更后**不刷新页面**，无抖动
- 切换语言下拉在所有页面同步显示当前语言

### 4.4 字典规模预估

- 5 个页面 × 关键区块 ≈ 60~80 条 key
- 三个语言版本 = 180~240 条文案
- Demo 阶段允许部分条目先填英文/中文，俄语补齐关键区块

## 5. 留资表单差异化

`assets/js/forms.js` 定义每种产品的字段配置：

```js
const FORM_SCHEMAS = {
  custom: {
    common: ['name', 'email', 'phone', 'date', 'people'],
    extra: [
      { key: 'budget', type: 'select', required: true,
        options: ['< ¥3,000', '¥3,000-8,000', '¥8,000-20,000', '> ¥20,000'] },
      { key: 'themes', type: 'checkbox-group', required: false,
        options: ['culture', 'food', 'photography', 'outdoor'] },
      { key: 'note', type: 'textarea', required: false }
    ]
  },
  traditional: {
    common: ['name', 'email', 'phone', 'date', 'people'],
    extra: [
      { key: 'days', type: 'radio', required: true,
        options: ['1', '2', '3', '5', '7+'] },
      { key: 'mode', type: 'radio', required: true,
        options: ['group', 'semi-self'] }
    ]
  },
  family: {
    common: ['name', 'email', 'phone', 'date', 'people'],
    extra: [
      { key: 'childAge', type: 'radio', required: true,
        options: ['0-3', '4-6', '7-12', '13-17'] },
      { key: 'childCount', type: 'number', required: true, min: 1, max: 5 },
      { key: 'kidsMeal', type: 'checkbox', required: false }
    ]
  },
  culture: {
    common: ['name', 'email', 'phone', 'date', 'people'],
    extra: [
      { key: 'modules', type: 'checkbox-group', required: true,
        options: ['roleplay', 'museum', 'diy', 'dining'] },
      { key: 'guideLang', type: 'radio', required: true,
        options: ['zh', 'en', 'ru'] }
    ]
  }
};
```

- 通用字段（name/email/phone/date/people）放在每个详情页 HTML 中以保证 SEO
- 差异化字段由 JS 在 `DOMContentLoaded` 时动态渲染到 `<form data-form="custom">`
- 前端校验：HTML5 `required` + 自定义 JS（手机正则、邮箱正则）
- 提交：阻止默认行为 → 收集数据到 `console` → 弹 Toast 提示（生产时再接后端）
- **i18n**：所有 label/option 也通过 `data-i18n` 翻译

## 6. 响应式策略

- 桌面：≥ 1200px，主内容区 `max-width: 1200px`
- 平板：768~1199px，卡片网格 2 列
- 移动：< 768px，卡片单列、导航折叠为汉堡、Hero 文字缩小
- 移动端图片 `loading="lazy"`、视频/动效禁用
- 关键断点用 CSS 变量：

```css
:root {
  --container-max: 1200px;
  --gap: 24px;
  --radius-card: 16px;
}
@media (max-width: 768px) {
  :root { --gap: 16px; --radius-card: 12px; }
}
```

## 7. 性能与可访问性

- 图片：HTML `<img loading="lazy" decoding="async">`，首屏 hero 用 `fetchpriority="high"`
- 字体：`<link rel="preconnect">` + `font-display: swap`
- 颜色对比度：主文字 #2A2A2A on #FAF7F2 = 12:1（远高于 WCAG AA 4.5:1）
- ARIA：表单 `aria-required`、错误信息 `aria-live="polite"`
- 键盘：Tab 顺序自然、`:focus-visible` 描边清晰

## 8. 部署与本地预览

本地预览：

```bash
cd travel-website
python3 -m http.server 8080
# 浏览器打开 http://localhost:8080
```

或：

```bash
npx serve .
```

部署：上传整个目录到任意静态托管即可，无服务端、无环境变量。

## 9. 浏览器兼容矩阵

| 浏览器 | 最低版本 |
| ------ | -------- |
| Chrome | 110+ |
| Safari | 15+ |
| Edge | 110+ |
| Firefox | 110+ |

（不使用任何实验性 CSS/JS 特性，确保宽兼容）

## 10. 待确认问题 ❓

以下问题在动手前需要您确认（每条已给出我的**默认假设**，如无异议即按假设执行）：

### Q1. 「传统」产品的具体定位
- **问题**：原始 PPT 中没有专门的"传统旅游"板块（重点放在定制游 / 剧本游 / 亲子游 / 精致体验），「传统 (Classic Tours)」应如何理解？
- **默认假设**：定义为面向大众游客的**经典必游路线**（西湖、灵隐寺、龙井茶园、河坊街、飞来峰、宋城等），行程为 1~3 天可选，标准跟团 / 拼小团。
- **如需调整**：请告知您心中的"传统"具体是什么（如"传统跟团游" vs "传统江南文化路线" vs "经典一日游"）。

### Q2. 攻略页内容深度
- **问题**：6~8 篇攻略是否需要写出完整正文（每篇 500~1000 字）？
- **默认假设**：Demo 阶段每篇只写**摘要（100~200 字）+ 占位 "Read More"**，不展开完整正文（避免过度投入在文案上）；详情正文留空卡片。
- **如需展开**：请告知是否需要我撰写完整正文（我会基于公开资料生成，不保证事实准确性）。

### Q3. 联系信息是否使用真实数据
- **问题**：邮箱、电话、地址、WeChat 等。
- **默认假设**：全部使用**占位信息**（如 `hello@soundofspring.travel` / `+86 138-XXXX-XXXX` / "杭州市西湖区..."），并在底部注明 "Demo placeholders"。
- **如需真实**：请提供正式信息后再替换。

### Q4. 多语言翻译的完整性
- **问题**：俄语 / 简体中文版本是否需要**逐字翻译**所有文案？
- **默认假设**：Demo 阶段**所有 key 三语齐备**，但部分装饰性文案允许先按英文直译/机翻占位，正式上线前再润色。
- **如需高品质**：建议交给专业翻译，我会在 `i18n.js` 顶部标记 `TODO: review by native speaker`。

### Q5. 留资表单的提交目标
- **问题**：Demo 中表单提交到哪？
- **默认假设**：仅前端模拟（弹成功提示 + 控制台打印 JSON），**不接后端**。
- **如需真实上报**：请告知后端接口或邮件接收地址。

### Q6. 是否需要暗黑模式 / 主题切换
- **问题**：用户要求"明亮色"，是否需要反向支持？
- **默认假设**：**不做**暗色模式，仅维护 `theme.css` 一套亮色变量。
- **如需暗色**：请确认需求。

### Q7. 顶部 Tab 是否需要下划线动效
- **问题**：交互细节。
- **默认假设**：Tab 切换时下划线平滑移动（CSS `transition`），无下拉菜单逻辑。
- **如需 Mega Menu / 下拉二级菜单**：请告知。

### Q8. 「语言选择」在 Tab 中的位置
- **问题**：是否真的要作为 Tab 一项，还是仅右上角图标？
- **默认假设**：作为 Tab 末项 + 同时在右上角显眼位置再放一个下拉（避免误以为它能跳转到某个页面）。
- **如不需要**：请告知，我移除其一。

---

## 11. 开发与交付节奏

| 阶段 | 内容 | 产出 |
| ---- | ---- | ---- |
| Step 1 | 需求文档 + 技术方案 | docs/ 目录 |
| Step 2 | 项目骨架 + 全局 CSS + i18n | index.html / products.html 可访问 + 三语切换 |
| Step 3 | 4 个产品详情页 + 差异化表单 | 4 个详情页 |
| Step 4 | 攻略 / 联系我们页 + Footer | 全部页面 |
| Step 5 | 响应式 / 性能 / 可访问性优化 | 验收通过 |

> 注：本方案在 §10 待确认问题得到回复后即开始 Step 2+。如未回复，按默认假设执行。