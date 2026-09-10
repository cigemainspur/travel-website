/* ============================================================
   i18n.js · Sound Of Spring
   Three languages: en (default) · ru · zh
   Keys are flat with dot-notation; DOM uses data-i18n / data-i18n-placeholder / data-i18n-aria.
   Persistence: localStorage['lang'].
   ============================================================ */

const I18N = {

  /* =========================== English =========================== */
  en: {
    /* nav */
    'nav.home':     'About',
    'nav.products': 'Tours',
    'nav.guides':   'Guides',
    'nav.contact':  'Contact',
    'nav.lang':     'Language',
    'nav.menu':     'Menu',

    /* hero (index) */
    'hero.eyebrow':  'Hangzhou · Since 2005',
    'hero.title':    'Sound Of Spring',
    'hero.lead':     'A boutique travel house weaving Jiangnan culture into every journey. Over 50 years of family heritage, now the official supplier of Wild China (Top 12 worldwide).',
    'hero.cta.products': 'Explore Tours',
    'hero.cta.contact':  'Talk to Us',

    /* about */
    'about.eyebrow': 'Who We Are',
    'about.title':   'A forward-thinking team, evolving beyond traditional travel.',
    'about.p1':      'Born on the shores of Hangzhou\u2019s Xixi Lake, our family has been rooted in local tourism for over 50 years. Twenty years ago we founded Sound Of Spring on our own, fully devoted to the travel and culture industry \u2014 a leading boutique tour operator in Hangzhou.',
    'about.p2':      'We are the official supplier of Wild China, one of the top 12 travel agencies in the world.',
    'about.p3':      'Our services span cultural tourism, scripted roleplay team-building, productivity-boosting trips, and conferences & exhibitions.',

    /* vision */
    'vision.eyebrow': 'Our Vision',
    'vision.title':   'Sharing the history and stories of Hangzhou with friends around the world.',
    'vision.subtitle':'Through the marriage of travel and culture, we let you not only see the landscape, but feel a journey that touches the heart.',

    /* services */
    'service.eyebrow':'What We Do',
    'service.title':  'Four lines, one philosophy.',
    'service.s1.t':   'Cultural Tourism',
    'service.s1.d':   'Deep-dive itineraries that connect travelers with local people, heritage and everyday life.',
    'service.s2.t':   'Roleplay Travel',
    'service.s2.d':   'Scripted immersive journeys: NPCs, plotlines and characters that carry you from dawn to midnight.',
    'service.s3.t':   'Productivity Trips',
    'service.s3.d':   'Off-sites that actually recharge teams \u2014 ideas, wellness, and shared challenges.',
    'service.s4.t':   'MICE',
    'service.s4.d':   'Boutique conferences, exhibitions and bespoke corporate events in Jiangnan.',

    /* stats */
    'stats.n1.num':   '50+',
    'stats.n1.label': 'Years of family heritage',
    'stats.n2.num':   '20',
    'stats.n2.label': 'Years as Sound Of Spring',
    'stats.n3.num':   '120+',
    'stats.n3.label': 'Curated Jiangnan routes',
    'stats.n4.num':   '12',
    'stats.n4.label': 'Languages our guides speak',

    /* clients */
    'clients.eyebrow':'Trusted By',
    'clients.title':  'Partners and clients we\u2019ve journeyed with.',

    /* products listing */
    'products.eyebrow':'Our Tours',
    'products.title':  'Four journeys, one Jiangnan.',
    'products.subtitle':'Pick the style that fits you \u2014 every tour is fully customizable.',

    'filter.all':         'All',
    'filter.custom':      'Custom',
    'filter.traditional': 'Classic',
    'filter.family':      'Family',
    'filter.culture':     'Cultural',

    'pc.custom.tag':      'Custom Travel',
    'pc.custom.title':    'Crafted around you.',
    'pc.custom.desc':     'Private, fully bespoke journeys designed around your dates, interests and pace \u2014 from one-day immersions to multi-week explorations of Jiangnan.',
    'pc.custom.h1':       'Bespoke itinerary',
    'pc.custom.h2':       'Local hosts & experts',
    'pc.custom.h3':       'Flexible pace',
    'pc.custom.cta':      'Plan my trip',

    'pc.traditional.tag': 'Classic Tours',
    'pc.traditional.title':'The must-see Jiangnan.',
    'pc.traditional.desc':'Curated classic routes covering the icons of Hangzhou and beyond \u2014 West Lake, Lingyin Temple, Longjing tea fields, Hefang Street and more.',
    'pc.traditional.h1':  'Iconic landmarks',
    'pc.traditional.h2':  'Small group',
    'pc.traditional.h3':  '1\u20137 day options',
    'pc.traditional.cta': 'Browse classics',

    'pc.family.tag':      'Family Trip',
    'pc.family.title':    'Travel that bonds generations.',
    'pc.family.desc':     'Designed around parent\u2013child togetherness \u2014 hands-on culture, gentle adventure, and moments no one wants to miss.',
    'pc.family.h1':       'Kid-friendly pacing',
    'pc.family.h2':       'Hands-on workshops',
    'pc.family.h3':       'Safe & vetted',
    'pc.family.cta':      'Plan with kids',

    'pc.culture.tag':     'Cultural Experience',
    'pc.culture.title':   'Live the culture, don\u2019t just see it.',
    'pc.culture.desc':    'Roleplay scripts, palace banquets, hands-on DIY, and curator-led museum visits \u2014 Jiangnan\u2019s living heritage made tangible.',
    'pc.culture.h1':      'Roleplay scripts',
    'pc.culture.h2':      'Banquets & cuisine',
    'pc.culture.h3':      'Museums & DIY',
    'pc.culture.cta':     'Discover culture',

    /* product detail common */
    'pd.intro.title':    'About this journey',
    'pd.gallery.title':  'Glimpses of the experience',
    'pd.form.title':     'Tell us about you',
    'pd.form.subtitle':  'We\u2019ll reply within 24 hours with a tailored proposal.',
    'pd.related':        'You may also like',

    /* common form fields */
    'form.name':       'Full name',
    'form.email':      'Email',
    'form.phone':      'Mobile / WhatsApp',
    'form.date':       'Preferred start date',
    'form.people':     'Number of travelers',
    'form.submit':     'Send inquiry',
    'form.required':   '*',

    /* custom-only extras */
    'form.budget':     'Budget per person',
    'form.budget.opt1':'Under \u00a53,000',
    'form.budget.opt2':'\u00a53,000 \u2013 8,000',
    'form.budget.opt3':'\u00a58,000 \u2013 20,000',
    'form.budget.opt4':'Above \u00a520,000',
    'form.themes':     'Interests (multi-select)',
    'form.themes.culture':  'Culture & heritage',
    'form.themes.food':     'Food & dining',
    'form.themes.photo':    'Photography',
    'form.themes.outdoor':  'Outdoors & hiking',
    'form.note':       'Anything else we should know?',

    /* traditional-only extras */
    'form.days':       'Tour length',
    'form.days.opt1':  '1 day',
    'form.days.opt2':  '2 days',
    'form.days.opt3':  '3 days',
    'form.days.opt4':  '5 days',
    'form.days.opt5':  '7+ days',
    'form.mode':       'Travel style',
    'form.mode.group': 'Group tour',
    'form.mode.semi':  'Semi-self-guided',

    /* family-only extras */
    'form.childAge':   'Children\u2019s age range',
    'form.childAge.opt1':'0\u20133',
    'form.childAge.opt2':'4\u20136',
    'form.childAge.opt3':'7\u201312',
    'form.childAge.opt4':'13\u201317',
    'form.childCount': 'How many children',
    'form.kidsMeal':   'Please arrange kids\u2019 meals',

    /* culture-only extras */
    'form.modules':     'Modules you want to include',
    'form.modules.roleplay':'Roleplay script',
    'form.modules.museum':  'Museum visits',
    'form.modules.diy':     'DIY workshop',
    'form.modules.dining':  'Banquets & cuisine',
    'form.guideLang':   'Preferred guide language',
    'form.guideLang.zh':'Chinese',
    'form.guideLang.en':'English',
    'form.guideLang.ru':'Russian',

    /* toast */
    'toast.success': 'Thanks! We\u2019ll be in touch within 24 hours.',

    /* guides page */
    'guides.eyebrow':   'Travel Guides',
    'guides.title':     'Insider notes from the road.',
    'guides.subtitle':  'Practical tips, hidden corners, and cultural context \u2014 written by our local guides.',

    'g1.title':'West Lake at Dawn',
    'g1.desc': 'Why locals wake up before sunrise \u2014 and the four corners every first-timer should hit.',
    'g1.meta':'6 min read \u00b7 Hangzhou',
    'g2.title':'A Slow Day in Longjing Village',
    'g2.desc': 'Tea-picking seasons, where to taste the freshest Longjing, and a quiet path most tourists miss.',
    'g2.meta':'5 min read \u00b7 Hangzhou',
    'g3.title':'Lingyin Temple, Beyond the Crowds',
    'g3.desc': 'A 1500-year-old Buddhist complex \u2014 here\u2019s how to feel it without the tour-bus rush.',
    'g3.meta':'7 min read \u00b7 Hangzhou',
    'g4.title':'Hefang Street: A Souvenir Map',
    'g4.desc': 'What to buy, what to skip, and the family-run shops that have been here for generations.',
    'g4.meta':'4 min read \u00b7 Hangzhou',
    'g5.title':'Wuzhen Water Town Overnight',
    'g5.desc': 'Two days, one canal town \u2014 boats, lanterns, and the calmest morning you\u2019ll have all year.',
    'g5.meta':'8 min read \u00b7 Tongxiang',
    'g6.title':'Song Dynasty on a Plate',
    'g6.desc': 'What is Song-style banquet cuisine, and the four restaurants that still cook it properly.',
    'g6.meta':'5 min read \u00b7 Hangzhou',

    /* contact page */
    'contact.eyebrow':  'Get in touch',
    'contact.title':    'We\u2019d love to plan your Jiangnan journey.',
    'contact.lead':     'Tell us a little about what you have in mind \u2014 we typically reply within 24 hours, with a tailored proposal and a transparent quote.',
    'contact.email':    'hello@soundofspring.travel',
    'contact.mobile':   '+86 138 0000 0000',
    'contact.tel':      '+86 571 0000 0000',
    'contact.wechat':   'SoundOfSpring',
    'contact.address':  'Room 1208, Xixi Mansion, Hangzhou, China',
    'contact.hours':    'Mon\u2013Sat, 09:00\u201318:00 (GMT+8)',

    'cform.name':   'Your name',
    'cform.email':  'Email',
    'cform.phone':  'Mobile (optional)',
    'cform.msg':    'How can we help?',
    'cform.submit': 'Send message',
    'cform.consent':'By submitting you agree to our replying via email or phone.',

    /* footer */
    'footer.about':  'Sound Of Spring International Travel Agency (Shanghai) Ltd. A boutique travel house devoted to Jiangnan culture since 2005.',
    'footer.explore':'Explore',
    'footer.support':'Support',
    'footer.contact':'Contact',
    'footer.privacy':'Privacy',
    'footer.terms':  'Terms',
    'footer.copy':   '\u00a9 2026 Sound Of Spring International Travel Agency (Shanghai) Ltd. All rights reserved.',
    'footer.demo':   'Demo placeholders \u2014 production data pending.',

    /* itinerary (used by detail pages — keep generic) */
    'itin.d1.title': 'Arrival & Welcome',
    'itin.d1.desc':  'Pick-up from airport, hotel check-in, and an evening welcome dinner in a heritage teahouse.',
    'itin.d2.title': 'Deep Dive',
    'itin.d2.desc':  'A full day of curated cultural immersion with local hosts and hands-on experiences.',
    'itin.d3.title': 'Hidden Jiangnan',
    'itin.d3.desc':  'Off-the-map villages, tea terraces and a private boat ride along the canal.',
    'itin.d4.title': 'Farewell & Departure',
    'itin.d4.desc':  'A relaxed morning, a final tasting, and private transfer to the airport.',
  },

  /* =========================== Russian =========================== */
  ru: {
    /* nav */
    'nav.home':     '\u041e \u043d\u0430\u0441',
    'nav.products': '\u0422\u0443\u0440\u044b',
    'nav.guides':   '\u0413\u0430\u0439\u0434\u044b',
    'nav.contact':  '\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b',
    'nav.lang':     '\u042f\u0437\u044b\u043a',
    'nav.menu':     '\u041c\u0435\u043d\u044e',

    /* hero */
    'hero.eyebrow':  '\u0425\u0430\u043d\u0447\u0436\u043e\u0443 \u00b7 \u0441 2005 \u0433\u043e\u0434\u0430',
    'hero.title':    '\u0417\u0432\u0443\u043a \u0412\u0435\u0441\u043d\u044b',
    'hero.lead':     '\u0411\u0443\u0442\u0438\u043a\u043e\u0432\u043e\u0435 \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0430\u0433\u0435\u043d\u0442\u0441\u0442\u0432\u043e, \u0432\u043f\u043b\u0435\u0442\u0430\u044e\u0449\u0435\u0435 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0443 \u0426\u0437\u044f\u043d\u044c\u043d\u0430\u043d\u0430 \u0432 \u043a\u0430\u0436\u0434\u043e\u0435 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435. \u0411\u043e\u043b\u0435\u0435 50 \u043b\u0435\u0442 \u0441\u0435\u043c\u0435\u0439\u043d\u043e\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u0438 \u2014 \u043c\u044b \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0442\u043d\u0451\u0440 Wild China (Top 12 \u0432 \u043c\u0438\u0440\u0435).',
    'hero.cta.products': '\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0442\u0443\u0440\u044b',
    'hero.cta.contact':  '\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438',

    /* about */
    'about.eyebrow': '\u041a\u0442\u043e \u043c\u044b',
    'about.title':   '\u042d\u043d\u0435\u0440\u0433\u0438\u0447\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430, \u0432\u044b\u0445\u043e\u0434\u044f\u0449\u0430\u044f \u0437\u0430 \u0440\u0430\u043c\u043a\u0438 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0442\u0443\u0440\u0438\u0437\u043c\u0430.',
    'about.p1':      '\u041c\u044b \u0440\u043e\u0434\u0438\u043b\u0438\u0441\u044c \u043d\u0430 \u0431\u0435\u0440\u0435\u0433\u0443 \u043e\u0437\u0435\u0440\u0430 \u0421\u0438\u0441\u0438 \u0432 \u0425\u0430\u043d\u0447\u0436\u043e\u0443. \u0411\u043e\u043b\u0435\u0435 50 \u043b\u0435\u0442 \u043d\u0430\u0448\u0430 \u0441\u0435\u043c\u044c\u044f \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u043c\u0435\u0441\u0442\u043d\u044b\u043c \u0442\u0443\u0440\u0438\u0437\u043c\u043e\u043c. \u0414\u0432\u0430\u0434\u0446\u0430\u0442\u044c \u043b\u0435\u0442 \u043d\u0430\u0437\u0430\u0434 \u043c\u044b \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0441\u043d\u043e\u0432\u0430\u043b\u0438 \u00ab\u0417\u0432\u0443\u043a \u0412\u0435\u0441\u043d\u044b\u00bb, \u0446\u0435\u043b\u0438\u043a\u043e\u043c \u043f\u043e\u0441\u0432\u044f\u0442\u0438\u0432 \u0441\u0435\u0431\u044f \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0443 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439 \u0438 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0445 \u0426\u0437\u044f\u043d\u044c\u043d\u0430\u043d\u0430.',
    'about.p2':      '\u041c\u044b \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u0435\u043c \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u043e\u043c Wild China \u2014 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 12 \u043b\u0443\u0447\u0448\u0438\u0445 \u0442\u0443\u0440\u0430\u0433\u0435\u043d\u0442\u0441\u0442\u0432 \u0432 \u043c\u0438\u0440\u0435.',
    'about.p3':      '\u041d\u0430\u0448\u0438 \u0443\u0441\u043b\u0443\u0433\u0438: \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u043d\u044b\u0439 \u0442\u0443\u0440\u0438\u0437\u043c, \u0441\u044e\u0436\u0435\u0442\u043d\u044b\u0435 \u0442\u0438\u043c\u0431\u0438\u043b\u0434\u0438\u043d\u0433\u0438, \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u043f\u043e\u0435\u0437\u0434\u043a\u0438 \u0438 MICE.',

    /* vision */
    'vision.eyebrow': '\u041d\u0430\u0448\u0435 \u0432\u0438\u0434\u0435\u043d\u0438\u0435',
    'vision.title':   '\u0414\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u0435\u0439 \u0438 \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u043c\u0438 \u0425\u0430\u043d\u0447\u0436\u043e\u0443 \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438 \u043f\u043e \u0432\u0441\u0435\u043c\u0443 \u043c\u0438\u0440\u0443.',
    'vision.subtitle':'\u0421\u043e\u0435\u0434\u0438\u043d\u044f\u044f \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0438 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0443, \u043c\u044b \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u043c \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u044e\u043b\u044c\u0442\u0443\u0440\u043e\u0439 \u043b\u0430\u043d\u0434\u0448\u0430\u0444\u0442\u0430, \u043d\u043e \u0438 \u043f\u043e\u0447\u0443\u0432\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043a\u0430\u0441\u0430\u0435\u0442\u0441\u044f \u0441\u0435\u0440\u0434\u0446\u0430.',

    /* services */
    'service.eyebrow':'\u0427\u0435\u043c \u043c\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u043c\u0441\u044f',
    'service.title':  '\u0427\u0435\u0442\u044b\u0440\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u043e\u0434\u043d\u0430 \u0444\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u044f.',
    'service.s1.t':   '\u041a\u0443\u043b\u044c\u0442\u0443\u0440\u043d\u044b\u0439 \u0442\u0443\u0440\u0438\u0437\u043c',
    'service.s1.d':   '\u0413\u043b\u0443\u0431\u043e\u043a\u0438\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0432\u044f\u0437\u044b\u0432\u0430\u044e\u0442 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u043e\u0432 \u0441 \u043c\u0435\u0441\u0442\u043d\u044b\u043c\u0438 \u0436\u0438\u0442\u0435\u043b\u044f\u043c\u0438 \u0438 \u043d\u0430\u0441\u043b\u0435\u0434\u0438\u0435\u043c.',
    'service.s2.t':   '\u0420\u043e\u043b\u0435\u0432\u044b\u0435 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044f',
    'service.s2.d':   '\u0421\u044e\u0436\u0435\u0442\u043d\u044b\u0435 \u0438\u043c\u043c\u0435\u0440\u0441\u0438\u0432\u043d\u044b\u0435 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f: NPC, \u0441\u044e\u0436\u0435\u0442 \u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0438 \u043e\u0442 \u0443\u0442\u0440\u0430 \u0434\u043e \u043f\u043e\u043b\u0443\u043d\u043e\u0447\u0438.',
    'service.s3.t':   '\u042d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u043f\u043e\u0435\u0437\u0434\u043a\u0438',
    'service.s3.d':   '\u041a\u043e\u043c\u0430\u043d\u0434\u043d\u044b\u0435 \u0432\u044b\u0435\u0437\u0434\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0436\u0430\u044e\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0443: \u0438\u0434\u0435\u0438, \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435, \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u044b\u0435 \u0432\u044b\u0437\u043e\u0432\u044b.',
    'service.s4.t':   'MICE',
    'service.s4.d':   '\u041a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0438, \u0432\u044b\u0441\u0442\u0430\u0432\u043a\u0438 \u0438 \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f \u043f\u043e\u0434 \u043a\u043b\u044e\u0447 \u0432 \u0426\u0437\u044f\u043d\u044c\u043d\u0430\u043d\u0435.',

    /* stats */
    'stats.n1.num':   '50+',
    'stats.n1.label': '\u041b\u0435\u0442 \u0441\u0435\u043c\u0435\u0439\u043d\u043e\u0439 \u0438\u0441\u0442\u043e\u0440\u0438\u0438',
    'stats.n2.num':   '20',
    'stats.n2.label': '\u041b\u0435\u0442 \u043a\u0430\u043a \u00ab\u0417\u0432\u0443\u043a \u0412\u0435\u0441\u043d\u044b\u00bb',
    'stats.n3.num':   '120+',
    'stats.n3.label': '\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u043e\u0432 \u043f\u043e \u0426\u0437\u044f\u043d\u044c\u043d\u0430\u043d\u0443',
    'stats.n4.num':   '12',
    'stats.n4.label': '\u042f\u0437\u044b\u043a\u043e\u0432 \u043d\u0430\u0448\u0438\u0445 \u0433\u0438\u0434\u043e\u0432',

    /* clients */
    'clients.eyebrow':'\u041d\u0430\u043c \u0434\u043e\u0432\u0435\u0440\u044f\u044e\u0442',
    'clients.title':  '\u041f\u0430\u0440\u0442\u043d\u0451\u0440\u044b \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u044b, \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u043c\u044b \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u0438.',

    /* products listing */
    'products.eyebrow':'\u041d\u0430\u0448\u0438 \u0442\u0443\u0440\u044b',
    'products.title':  '\u0427\u0435\u0442\u044b\u0440\u0435 \u043f\u0443\u0442\u0438, \u043e\u0434\u0438\u043d \u0426\u0437\u044f\u043d\u044c\u043d\u0430\u043d.',
    'products.subtitle':'\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0438\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0432\u0430\u043c \u2014 \u043b\u044e\u0431\u043e\u0439 \u0442\u0443\u0440 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c.',

    'filter.all':         '\u0412\u0441\u0435',
    'filter.custom':      '\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0435',
    'filter.traditional': '\u041a\u043b\u0430\u0441\u0441\u0438\u043a\u0430',
    'filter.family':      '\u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0435',
    'filter.culture':     '\u041a\u0443\u043b\u044c\u0442\u0443\u0440\u0430',

    'pc.custom.tag':      '\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0443\u0440',
    'pc.custom.title':    '\u0421\u043e\u0437\u0434\u0430\u043d \u0432\u043e\u043a\u0440\u0443\u0433 \u0432\u0430\u0441.',
    'pc.custom.desc':     '\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0435 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044f, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u0434 \u0432\u0430\u0448\u0438 \u0434\u0430\u0442\u044b, \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u044b \u0438 \u0442\u0435\u043c\u043f.',
    'pc.custom.h1':       '\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442',
    'pc.custom.h2':       '\u041c\u0435\u0441\u0442\u043d\u044b\u0435 \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u044b',
    'pc.custom.h3':       '\u0413\u0438\u0431\u043a\u0438\u0439 \u0442\u0435\u043c\u043f',
    'pc.custom.cta':      '\u0421\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c',

    'pc.traditional.tag': '\u041a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0442\u0443\u0440\u044b',
    'pc.traditional.title':'\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0426\u0437\u044f\u043d\u044c\u043d\u0430\u043d.',
    'pc.traditional.desc':'\u041a\u0443\u0440\u0430\u0442\u043e\u0440\u044b \u043f\u043e \u0437\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u043c\u0435\u0441\u0442\u0430\u043c \u0425\u0430\u043d\u0447\u0436\u043e\u0443 \u0438 \u043e\u043a\u0440\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u0435\u0439 \u2014 \u0417\u0430\u043f\u0430\u0434\u043d\u043e\u0435 \u043e\u0437\u0435\u0440\u043e, \u041b\u0438\u043d\u044c\u0438\u043d\u044c, \u041b\u043e\u043d\u0433\u0446\u0437\u0438\u043d, \u0425\u044d\u0444\u0430\u043d.',
    'pc.traditional.h1':  '\u0417\u043d\u0430\u043a\u043e\u0432\u044b\u0435 \u043c\u0435\u0441\u0442\u0430',
    'pc.traditional.h2':  '\u041c\u0430\u043b\u044b\u0435 \u0433\u0440\u0443\u043f\u043f\u044b',
    'pc.traditional.h3':  '1\u20137 \u0434\u043d\u0435\u0439',
    'pc.traditional.cta':'\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c',

    'pc.family.tag':      '\u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0439 \u0442\u0443\u0440',
    'pc.family.title':    '\u041f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u043f\u043e\u043a\u043e\u043b\u0435\u043d\u0438\u044f.',
    'pc.family.desc':     '\u0414\u043b\u044f \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439 \u0438 \u0434\u0435\u0442\u0435\u0439 \u2014 \u0441 \u043c\u0430\u0441\u0442\u0435\u0440-\u043a\u043b\u0430\u0441\u0441\u0430\u043c\u0438, \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u044b\u043c \u0442\u0435\u043c\u043f\u043e\u043c \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u043c\u0438 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430\u043c\u0438.',
    'pc.family.h1':       '\u0423\u0434\u043e\u0431\u043d\u044b\u0439 \u0442\u0435\u043c\u043f',
    'pc.family.h2':       '\u041c\u0430\u0441\u0442\u0435\u0440-\u043a\u043b\u0430\u0441\u0441\u044b',
    'pc.family.h3':       '\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e',
    'pc.family.cta':      '\u0421\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c',

    'pc.culture.tag':     '\u041a\u0443\u043b\u044c\u0442\u0443\u0440\u043d\u044b\u0439 \u043e\u043f\u044b\u0442',
    'pc.culture.title':   '\u0416\u0438\u0442\u044c \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u043e\u0439, \u0430 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c.',
    'pc.culture.desc':    '\u0420\u043e\u043b\u0435\u0432\u044b\u0435 \u0441\u044e\u0436\u0435\u0442\u044b, \u0434\u0432\u043e\u0440\u0446\u043e\u0432\u044b\u0435 \u0431\u0430\u043d\u043a\u0435\u0442\u044b, DIY \u043c\u0430\u0441\u0442\u0435\u0440-\u043a\u043b\u0430\u0441\u0441\u044b \u0438 \u043c\u0443\u0437\u0435\u0438 \u0441 \u043a\u0443\u0440\u0430\u0442\u043e\u0440\u043e\u043c.',
    'pc.culture.h1':      '\u0420\u043e\u043b\u0435\u0432\u044b\u0435 \u0441\u044e\u0436\u0435\u0442\u044b',
    'pc.culture.h2':      '\u0411\u0430\u043d\u043a\u0435\u0442\u044b \u0438 \u043a\u0443\u0445\u043d\u044f',
    'pc.culture.h3':      '\u041c\u0443\u0437\u0435\u0438 \u0438 DIY',
    'pc.culture.cta':     '\u041f\u043e\u0433\u0440\u0443\u0437\u0438\u0442\u044c\u0441\u044f',

    /* product detail common */
    'pd.intro.title':    '\u041e \u044d\u0442\u043e\u043c \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0438',
    'pd.gallery.title':  '\u041a\u0430\u043a \u044d\u0442\u043e \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442',
    'pd.form.title':     '\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435',
    'pd.form.subtitle':  '\u041c\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u043c \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 24 \u0447\u0430\u0441\u043e\u0432 \u0441 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043e\u0439.',
    'pd.related':        '\u0412\u0430\u043c \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f',

    /* common form fields */
    'form.name':       '\u0418\u043c\u044f',
    'form.email':      'Email',
    'form.phone':      '\u0422\u0435\u043b\u0435\u0444\u043e\u043d / WhatsApp',
    'form.date':       '\u0416\u0435\u043b\u0430\u0435\u043c\u0430\u044f \u0434\u0430\u0442\u0430 \u0441\u0442\u0430\u0440\u0442\u0430',
    'form.people':     '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432',
    'form.submit':     '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c',
    'form.required':   '*',

    /* custom extras */
    'form.budget':     '\u0411\u044e\u0434\u0436\u0435\u0442 \u043d\u0430 \u043e\u0434\u043d\u043e\u0433\u043e',
    'form.budget.opt1':'\u0414\u043e \u00a53,000',
    'form.budget.opt2':'\u00a53,000 \u2013 8,000',
    'form.budget.opt3':'\u00a58,000 \u2013 20,000',
    'form.budget.opt4':'\u0421\u0432\u044b\u0448\u0435 \u00a520,000',
    'form.themes':     '\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u044b (\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e)',
    'form.themes.culture':  '\u041a\u0443\u043b\u044c\u0442\u0443\u0440\u0430',
    'form.themes.food':     '\u041a\u0443\u0445\u043d\u044f',
    'form.themes.photo':    '\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f',
    'form.themes.outdoor':  '\u041f\u0440\u0438\u0440\u043e\u0434\u0430',
    'form.note':       '\u0427\u0442\u043e-\u0442\u043e \u0435\u0449\u0451?',

    'form.days':       '\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c',
    'form.days.opt1':  '1 \u0434\u0435\u043d\u044c',
    'form.days.opt2':  '2 \u0434\u043d\u044f',
    'form.days.opt3':  '3 \u0434\u043d\u044f',
    'form.days.opt4':  '5 \u0434\u043d\u0435\u0439',
    'form.days.opt5':  '7+ \u0434\u043d\u0435\u0439',
    'form.mode':       '\u0424\u043e\u0440\u043c\u0430\u0442',
    'form.mode.group': '\u0413\u0440\u0443\u043f\u043f\u0430',
    'form.mode.semi':  '\u041f\u043e\u043b\u0443-\u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e',

    'form.childAge':   '\u0412\u043e\u0437\u0440\u0430\u0441\u0442 \u0434\u0435\u0442\u0435\u0439',
    'form.childAge.opt1':'0\u20133',
    'form.childAge.opt2':'4\u20136',
    'form.childAge.opt3':'7\u201312',
    'form.childAge.opt4':'13\u201317',
    'form.childCount': '\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u0435\u0442\u0435\u0439',
    'form.kidsMeal':   '\u041d\u0443\u0436\u043d\u043e \u0434\u0435\u0442\u0441\u043a\u043e\u0435 \u043c\u0435\u043d\u044e',

    'form.modules':     '\u0416\u0435\u043b\u0430\u0435\u043c\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438',
    'form.modules.roleplay':'\u0420\u043e\u043b\u0435\u0432\u043e\u0439 \u0441\u044e\u0436\u0435\u0442',
    'form.modules.museum':  '\u041c\u0443\u0437\u0435\u0438',
    'form.modules.diy':     'DIY \u043c\u0430\u0441\u0442\u0435\u0440-\u043a\u043b\u0430\u0441\u0441',
    'form.modules.dining':  '\u0411\u0430\u043d\u043a\u0435\u0442\u044b \u0438 \u043a\u0443\u0445\u043d\u044f',
    'form.guideLang':   '\u042f\u0437\u044b\u043a \u0433\u0438\u0434\u0430',
    'form.guideLang.zh':'\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439',
    'form.guideLang.en':'\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439',
    'form.guideLang.ru':'\u0420\u0443\u0441\u0441\u043a\u0438\u0439',

    'toast.success': '\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u041c\u044b \u0441\u0432\u044f\u0436\u0435\u043c\u0441\u044f \u0441 \u0432\u0430\u043c\u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 24 \u0447\u0430\u0441\u043e\u0432.',

    /* guides */
    'guides.eyebrow':   '\u0413\u0430\u0439\u0434\u044b \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u0430',
    'guides.title':     '\u0417\u0430\u043c\u0435\u0442\u043a\u0438 \u043d\u0430\u0448\u0438\u0445 \u0433\u0438\u0434\u043e\u0432.',
    'guides.subtitle':  '\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u043e\u0432\u0435\u0442\u044b \u0438 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u2014 \u043e\u0442 \u043c\u0435\u0441\u0442\u043d\u044b\u0445 \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u043e\u0432.',

    'g1.title':'\u0417\u0430\u043f\u0430\u0434\u043d\u043e\u0435 \u043e\u0437\u0435\u0440\u043e \u043d\u0430 \u0440\u0430\u0441\u0441\u0432\u0435\u0442\u0435',
    'g1.desc': '\u041f\u043e\u0447\u0435\u043c\u0443 \u043c\u0435\u0441\u0442\u043d\u044b\u0435 \u0432\u0441\u0442\u0430\u044e\u0442 \u0434\u043e \u0440\u0430\u0441\u0441\u0432\u0435\u0442\u0430 \u2014 \u0438 \u0447\u0435\u0442\u044b\u0440\u0435 \u0443\u0433\u043b\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0432 \u043f\u0435\u0440\u0432\u044b\u0439 \u0440\u0430\u0437.',
    'g1.meta':'6 \u043c\u0438\u043d \u0447\u0442\u0435\u043d\u0438\u044f \u00b7 \u0425\u0430\u043d\u0447\u0436\u043e\u0443',
    'g2.title':'\u041c\u0435\u0434\u043b\u0435\u043d\u043d\u044b\u0439 \u0434\u0435\u043d\u044c \u0432 \u041b\u043e\u043d\u0433\u0446\u0437\u0438\u043d',
    'g2.desc': '\u0421\u0435\u0437\u043e\u043d\u044b \u0441\u0431\u043e\u0440\u0430 \u0447\u0430\u044f, \u0433\u0434\u0435 \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u0435\u0436\u0438\u0439 \u041b\u043e\u043d\u0433\u0446\u0437\u0438\u043d \u0438 \u0442\u0438\u0445\u0430\u044f \u0442\u0440\u043e\u043f\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u043d\u043e\u0433\u0438\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u044e\u0442.',
    'g2.meta':'5 \u043c\u0438\u043d \u0447\u0442\u0435\u043d\u0438\u044f \u00b7 \u0425\u0430\u043d\u0447\u0436\u043e\u0443',
    'g3.title':'\u041b\u0438\u043d\u044c\u0438\u043d\u044c \u0431\u0435\u0437 \u0442\u043e\u043b\u043f\u044b',
    'g3.desc': '\u041e\u0434\u043d\u043e\u043c\u0443 \u0438\u0437 \u0441\u0442\u0430\u0440\u0435\u0439\u0448\u0438\u0445 \u0431\u0443\u0434\u0434\u0438\u0439\u0441\u043a\u0438\u0445 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043e\u0432 \u2014 \u043a\u0430\u043a \u043f\u043e\u0447\u0443\u0432\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u0431\u0435\u0437 \u0441\u0443\u0435\u0442\u044b.',
    'g3.meta':'7 \u043c\u0438\u043d \u0447\u0442\u0435\u043d\u0438\u044f \u00b7 \u0425\u0430\u043d\u0447\u0436\u043e\u0443',
    'g4.title':'\u0425\u044d\u0444\u0430\u043d: \u043a\u0430\u0440\u0442\u0430 \u0441\u0443\u0432\u0435\u043d\u0438\u0440\u043e\u0432',
    'g4.desc': '\u0427\u0442\u043e \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u044c, \u0447\u0442\u043e \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c, \u0438 \u0441\u0435\u043c\u0435\u0439\u043d\u044b\u0435 \u043b\u0430\u0432\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0434\u0435\u0441\u044c \u0443\u0436\u0435 \u043f\u043e\u043a\u043e\u043b\u0435\u043d\u0438\u0435.',
    'g4.meta':'4 \u043c\u0438\u043d \u0447\u0442\u0435\u043d\u0438\u044f \u00b7 \u0425\u0430\u043d\u0447\u0436\u043e\u0443',
    'g5.title':'\u0412\u0443\u0447\u0436\u0451\u043d: \u043e\u0434\u043d\u0430 \u043d\u043e\u0447\u044c \u0432 \u0432\u043e\u0434\u043d\u043e\u043c \u0433\u043e\u0440\u043e\u0434\u043a\u0435',
    'g5.desc': '\u0414\u0432\u0430 \u0434\u043d\u044f, \u043e\u0434\u0438\u043d \u043a\u0430\u043d\u0430\u043b \u2014 \u043b\u043e\u0434\u043a\u0438, \u0444\u043e\u043d\u0430\u0440\u0438\u043a\u0438 \u0438 \u0441\u0430\u043c\u043e\u0435 \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u043e\u0435 \u0443\u0442\u0440\u043e \u0432 \u0433\u043e\u0434\u0443.',
    'g5.meta':'8 \u043c\u0438\u043d \u0447\u0442\u0435\u043d\u0438\u044f \u00b7 \u0422\u043e\u043d\u0446\u0438\u0430\u043d',
    'g6.title':'\u042d\u043f\u043e\u0445\u0430 \u0421\u0443\u043d \u043d\u0430 \u0442\u0430\u0440\u0435\u043b\u043a\u0435',
    'g6.desc': '\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u043a\u0443\u0445\u043d\u044f \u0432 \u0441\u0442\u0438\u043b\u0435 \u0434\u0438\u043d\u0430\u0441\u0442\u0438\u0438 \u0421\u0443\u043d \u0438 \u0447\u0435\u0442\u044b\u0440\u0435 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430, \u0433\u0434\u0435 \u0435\u0451 \u0432\u0441\u0451 \u0435\u0449\u0451 \u0433\u043e\u0442\u043e\u0432\u044f\u0442 \u043f\u044e-\u0441\u0443\u043d\u0441\u043a\u0438.',
    'g6.meta':'5 \u043c\u0438\u043d \u0447\u0442\u0435\u043d\u0438\u044f \u00b7 \u0425\u0430\u043d\u0447\u043e\u0443',

    /* contact */
    'contact.eyebrow':  '\u0421\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438',
    'contact.title':    '\u041c\u044b \u0441 \u0443\u0434\u043e\u0432\u043e\u043b\u044c\u0441\u0442\u0432\u0438\u0435\u043c \u0441\u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0432\u0430\u0448\u0435 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u043f\u043e \u0426\u0437\u044f\u043d\u044c\u043d\u0430\u043d\u0443.',
    'contact.lead':     '\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u043c, \u0447\u0442\u043e \u0432\u044b \u0438\u043c\u0435\u0435\u0442\u0435 \u0432 \u0432\u0438\u0434\u0443 \u2014 \u043c\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u043c \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 24 \u0447\u0430\u0441\u043e\u0432 \u0441 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043e\u0439 \u0438 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0439 \u0441\u043c\u0435\u0442\u043e\u0439.',
    'contact.email':    'hello@soundofspring.travel',
    'contact.mobile':   '+86 138 0000 0000',
    'contact.tel':      '+86 571 0000 0000',
    'contact.wechat':   'SoundOfSpring',
    'contact.address':  '\u041a\u043e\u043c\u043d\u0430\u0442\u0430 1208, Xixi Mansion, \u0425\u0430\u043d\u0447\u0436\u043e\u0443, \u041a\u0438\u0442\u0430\u0439',
    'contact.hours':    '\u041f\u043d\u2013\u0421\u0431, 09:00\u201318:00 (GMT+8)',

    'cform.name':   '\u0412\u0430\u0448\u0435 \u0438\u043c\u044f',
    'cform.email':  'Email',
    'cform.phone':  '\u0422\u0435\u043b\u0435\u0444\u043e\u043d (\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)',
    'cform.msg':    '\u041a\u0430\u043a \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u043f\u043e\u043c\u043e\u0447\u044c?',
    'cform.submit': '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c',
    'cform.consent':'\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044f \u0444\u043e\u0440\u043c\u0443, \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u043d\u0430 \u043e\u0442\u0432\u0435\u0442 \u043f\u043e email \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443.',

    /* footer */
    'footer.about':  'Sound Of Spring International Travel Agency (Shanghai) Ltd. \u0411\u0443\u0442\u0438\u043a\u043e\u0432\u043e\u0435 \u0442\u0443\u0440\u0430\u0433\u0435\u043d\u0442\u0441\u0442\u0432\u043e, \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d\u043d\u043e\u0435 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0435 \u0426\u0437\u044f\u043d\u044c\u043d\u0430\u043d\u0430 \u0441 2005 \u0433\u043e\u0434\u0430.',
    'footer.explore':'\u0418\u0437\u0443\u0447\u0438\u0442\u044c',
    'footer.support':'\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430',
    'footer.contact':'\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b',
    'footer.privacy':'\u041a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c',
    'footer.terms':  '\u0423\u0441\u043b\u043e\u0432\u0438\u044f',
    'footer.copy':   '\u00a9 2026 Sound Of Spring International Travel Agency (Shanghai) Ltd. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.',
    'footer.demo':   '\u0414\u0435\u043c\u043e-\u0434\u0430\u043d\u043d\u044b\u0435 \u2014 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f.',

    /* itinerary */
    'itin.d1.title': '\u041f\u0440\u0438\u0431\u044b\u0442\u0438\u0435 \u0438 \u0437\u0430\u043a\u0430\u0437',
    'itin.d1.desc':  '\u0422\u0440\u0430\u043d\u0441\u0444\u0435\u0440, \u0437\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435 \u0432 \u043e\u0442\u0435\u043b\u044c \u0438 \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0443\u0436\u0438\u043d \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u0447\u0430\u0439\u043d\u043e\u043c \u0434\u043e\u043c\u0435.',
    'itin.d2.title': '\u0413\u043b\u0443\u0431\u043e\u043a\u043e\u0435 \u043f\u043e\u0433\u0440\u0443\u0436\u0435\u043d\u0438\u0435',
    'itin.d2.desc':  '\u041f\u043e\u043b\u043d\u044b\u0439 \u0434\u0435\u043d\u044c \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u043d\u043e\u0433\u043e \u043f\u043e\u0433\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0441 \u043c\u0435\u0441\u0442\u043d\u044b\u043c\u0438 \u0433\u0438\u0434\u0430\u043c\u0438 \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0437\u0430\u043d\u044f\u0442\u0438\u044f\u043c\u0438.',
    'itin.d3.title': '\u0421\u043a\u0440\u044b\u0442\u044b\u0439 \u0426\u0437\u044f\u043d\u044c\u043d\u0430\u043d',
    'itin.d3.desc':  '\u0414\u0435\u0440\u0435\u0432\u043d\u0438 \u0432\u043d\u0435 \u043a\u0430\u0440\u0442\u044b, \u0447\u0430\u0439\u043d\u044b\u0435 \u0442\u0435\u0440\u0440\u0430\u0441\u044b \u0438 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u0430\u044f \u043b\u043e\u0434\u043e\u0447\u043d\u0430\u044f \u043f\u0440\u043e\u0433\u0443\u043b\u043a\u0430 \u043f\u043e \u043a\u0430\u043d\u0430\u043b\u0443.',
    'itin.d4.title': '\u041f\u0440\u043e\u0449\u0430\u043d\u0438\u0435 \u0438 \u043e\u0442\u044a\u0435\u0437\u0434',
    'itin.d4.desc':  '\u0421\u043f\u043e\u043a\u043e\u0439\u043d\u043e\u0435 \u0443\u0442\u0440\u043e, \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0434\u0435\u0433\u0443\u0441\u0442\u0430\u0446\u0438\u044f \u0438 \u0442\u0440\u0430\u043d\u0441\u0444\u0435\u0440 \u0432 \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442.',
  },

  /* =========================== Simplified Chinese ============== */
  zh: {
    'nav.home':     '公司介绍',
    'nav.products': '产品介绍',
    'nav.guides':   '攻略',
    'nav.contact':  '联系我们',
    'nav.lang':     '语言',
    'nav.menu':     '菜单',

    'hero.eyebrow': '杭州 \u00b7 始于 2005',
    'hero.title':   '春之声',
    'hero.lead':    '把江南文化织进每一段旅程的精品旅行社',
    'hero.cta.products': '了解产品',
    'hero.cta.contact':  '联系我们',

    'about.eyebrow': '关于我们',
    'about.title':   '一支不断突破传统旅行的进取团队。',
    'about.p1':      '我们诞生于杭州西溪湖畔。家族两代人累计 50 余年深耕本地旅游，二十年前独立创立春之声，专注投入旅行与文化领域，是杭州头部精品旅行社。',
    'about.p2':      '我们是 Wild China（全球 Top 12 旅行社）的官方供应商。',
    'about.p3':      '主营业务涵盖文化旅游、剧本团建、增效旅行、会务会展。',

    'vision.eyebrow': '我们的愿景',
    'vision.title':   '把杭州的历史与故事，分享给全世界的朋友。',
    'vision.subtitle':'通过旅行与文化的结合，让大家不仅看到山水之美，更能在文化的解读中感受触及内心的旅程。',

    'service.eyebrow':'业务板块',
    'service.title':  '四条主线，一种哲学。',
    'service.s1.t':   '文化旅游',
    'service.s1.d':   '与当地人、历史和日常生活深度连接的定制化深度路线。',
    'service.s2.t':   '剧本游',
    'service.s2.d':   '沉浸式剧本体验：NPC、剧情与人物贯穿从清晨到子夜。',
    'service.s3.t':   '增效旅行',
    'service.s3.d':   '真正让团队焕新的团建：创意、疗愈与共创挑战。',
    'service.s4.t':   '会务会展',
    'service.s4.d':   '江南精品会议、展览和企业定制活动。',

    'stats.n1.num':   '50+',
    'stats.n1.label': '家族深耕年数',
    'stats.n2.num':   '20',
    'stats.n2.label': '春之声品牌年数',
    'stats.n3.num':   '120+',
    'stats.n3.label': '条精选江南路线',
    'stats.n4.num':   '12',
    'stats.n4.label': '种导游语种',

    'clients.eyebrow':'合作伙伴',
    'clients.title':  '与我们一同出行的伙伴与客户。',

    'products.eyebrow':'旅游产品',
    'products.title':  '四条路线，一个江南。',
    'products.subtitle':'选择适合你的风格 \u2014 任何一条都可以定制。',

    'filter.all':         '全部',
    'filter.custom':      '定制游',
    'filter.traditional': '经典游',
    'filter.family':      '亲子游',
    'filter.culture':     '文化体验',

    'pc.custom.tag':      '定制游',
    'pc.custom.title':    '为你量身打造。',
    'pc.custom.desc':     '围绕你的时间、兴趣与节奏设计的私人行程 \u2014 从一日沉浸到多周江南深度探索。',
    'pc.custom.h1':       '专属定制路线',
    'pc.custom.h2':       '在地主与专家',
    'pc.custom.h3':       '灵活节奏',
    'pc.custom.cta':      '定制我的行程',

    'pc.traditional.tag': '经典游',
    'pc.traditional.title':'必游江南。',
    'pc.traditional.desc':'精选经典路线，覆盖杭州及周边的标志性景点 \u2014 西湖、灵隐寺、龙井茶园、河坊街等。',
    'pc.traditional.h1':  '地标景点',
    'pc.traditional.h2':  '小团出行',
    'pc.traditional.h3':  '1\u20137 天可选',
    'pc.traditional.cta':'查看经典',

    'pc.family.tag':      '亲子游',
    'pc.family.title':    '让几代人一起出发的旅行。',
    'pc.family.desc':     '围绕亲子陪伴设计 \u2014 动手体验文化、温和的探险，不错过孩子的每一个瞬间。',
    'pc.family.h1':       '亲子友好节奏',
    'pc.family.h2':       '动手工作坊',
    'pc.family.h3':       '安心可靠',
    'pc.family.cta':      '亲子规划',

    'pc.culture.tag':     '文化体验',
    'pc.culture.title':   '不只是看，而是去生活。',
    'pc.culture.desc':    '剧本游、宫廷宴、DIY 工作坊、博物馆导览 \u2014 让江南的活态遗产触手可及。',
    'pc.culture.h1':      '剧本游',
    'pc.culture.h2':      '宴会与美食',
    'pc.culture.h3':      '博物馆与 DIY',
    'pc.culture.cta':     '探索文化',

    'pd.intro.title':    '关于这条路线',
    'pd.gallery.title':  '体验瞬间',
    'pd.form.title':     '告诉我们你的想法',
    'pd.form.subtitle':  '我们将在 24 小时内回复，并给出专属方案。',
    'pd.related':        '你可能也会喜欢',

    'form.name':       '姓名',
    'form.email':      '邮箱',
    'form.phone':      '手机 / WhatsApp',
    'form.date':       '期望出发日期',
    'form.people':     '出行人数',
    'form.submit':     '提交咨询',
    'form.required':   '*',

    'form.budget':     '人均预算',
    'form.budget.opt1':'\u00a53,000 以内',
    'form.budget.opt2':'\u00a53,000 \u2013 8,000',
    'form.budget.opt3':'\u00a58,000 \u2013 20,000',
    'form.budget.opt4':'\u00a520,000 以上',
    'form.themes':     '兴趣方向（可多选）',
    'form.themes.culture':  '文化与历史',
    'form.themes.food':     '美食',
    'form.themes.photo':    '摄影',
    'form.themes.outdoor':  '户外与徒步',
    'form.note':       '其他想告诉我们的',

    'form.days':       '行程天数',
    'form.days.opt1':  '1 天',
    'form.days.opt2':  '2 天',
    'form.days.opt3':  '3 天',
    'form.days.opt4':  '5 天',
    'form.days.opt5':  '7 天以上',
    'form.mode':       '出行方式',
    'form.mode.group': '跟团游',
    'form.mode.semi':  '半自助',

    'form.childAge':   '孩子的年龄段',
    'form.childAge.opt1':'0\u20133 岁',
    'form.childAge.opt2':'4\u20136 岁',
    'form.childAge.opt3':'7\u201312 岁',
    'form.childAge.opt4':'13\u201317 岁',
    'form.childCount': '孩子数量',
    'form.kidsMeal':   '请安排儿童餐',

    'form.modules':     '想包含的体验模块',
    'form.modules.roleplay':'剧本游',
    'form.modules.museum':  '博物馆',
    'form.modules.diy':     'DIY 工作坊',
    'form.modules.dining':  '宴会与美食',
    'form.guideLang':   '导游语言偏好',
    'form.guideLang.zh':'中文',
    'form.guideLang.en':'英文',
    'form.guideLang.ru':'俄文',

    'toast.success': '感谢提交！我们将在 24 小时内与你联系。',

    'guides.eyebrow':   '旅行攻略',
    'guides.title':     '来自路上的实用笔记。',
    'guides.subtitle':  '来自本地导游的实用贴士、隐秘角落与文化背景。',

    'g1.title':'西湖的清晨',
    'g1.desc': '为什么本地人清晨就出门 \u2014 第一次来的你必须去的四个角落。',
    'g1.meta':'阅读 6 分钟 \u00b7 杭州',
    'g2.title':'龙井村慢时光',
    'g2.desc': '采茶季、最鲜的龙井在哪喝、还有一条游客很少走的幽静小路。',
    'g2.meta':'阅读 5 分钟 \u00b7 杭州',
    'g3.title':'灵隐寺，避开人潮',
    'g3.desc': '一座 1500 年的禅宗古刹 \u2014 不被旅游大巴喧扰地感受它。',
    'g3.meta':'阅读 7 分钟 \u00b7 杭州',
    'g4.title':'河坊街：伴手礼地图',
    'g4.desc': '买什么、跳过什么，还有那些开了几代人的老字号小店。',
    'g4.meta':'阅读 4 分钟 \u00b7 杭州',
    'g5.title':'乌镇水乡过一夜',
    'g5.desc': '两天、一个小镇 \u2014 小船、灯笼，以及你今年最安静的一个早晨。',
    'g5.meta':'阅读 8 分钟 \u00b7 桐乡',
    'g6.title':'一席宋宴',
    'g6.desc': '什么是宋式宴席，以及四家至今仍在认真做的餐厅。',
    'g6.meta':'阅读 5 分钟 \u00b7 杭州',

    'contact.eyebrow':  '联系我们',
    'contact.title':    '很乐意为你规划江南之旅。',
    'contact.lead':     '告诉我们一些你的想法 \u2014 我们通常在 24 小时内回复，并给出定制方案与透明报价。',
    'contact.email':    'hello@soundofspring.travel',
    'contact.mobile':   '+86 138 0000 0000',
    'contact.tel':      '+86 571 0000 0000',
    'contact.wechat':   'SoundOfSpring',
    'contact.address':  '中国杭州市西湖区西溪府 1208 室',
    'contact.hours':    '周一至周六 09:00\u201318:00（GMT+8）',

    'cform.name':   '你的姓名',
    'cform.email':  '邮箱',
    'cform.phone':  '手机（选填）',
    'cform.msg':    '我们能为你做什么？',
    'cform.submit': '发送',
    'cform.consent':'提交即同意我们通过邮件或电话回复。',

    'footer.about':  '春之声国际旅行社（上海）有限公司。一家自 2005 年起专注于江南文化的精品旅行社。',
    'footer.explore':'浏览',
    'footer.support':'支持',
    'footer.contact':'联系',
    'footer.privacy':'隐私',
    'footer.terms':  '条款',
    'footer.copy':   '\u00a9 2026 春之声国际旅行社（上海）有限公司 保留所有权利。',
    'footer.demo':   '演示占位数据 \u2014 正式数据待替换。',

    'itin.d1.title': '抵达 & 接风',
    'itin.d1.desc':  '机场接机、入住酒店，并在历史茶楼享用晚宴。',
    'itin.d2.title': '深度沉浸',
    'itin.d2.desc':  '一整天的在地文化沉浸，由本地主带队的体验与手作活动。',
    'itin.d3.title': '隐秘江南',
    'itin.d3.desc':  '地图之外的村庄、茶园梯田与一段私享运河小船。',
    'itin.d4.title': '告别 & 离程',
    'itin.d4.desc':  '一个松弛的清晨，最后一次风味品鉴，再专车送往机场。',
  }
};

/* =========================== Runtime =========================== */

const I18n = (() => {
  let current = 'en';

  function detect() {
    const saved = localStorage.getItem('lang');
    if (saved && I18N[saved]) return saved;
    const nav = (navigator.language || 'en').toLowerCase();
    if (nav.startsWith('zh')) return 'zh';
    if (nav.startsWith('ru')) return 'ru';
    return 'en';
  }

  function t(key) { return (I18N[current] && I18N[current][key]) || (I18N.en[key]) || key; }

  function apply() {
    document.documentElement.lang = current === 'zh' ? 'zh-CN' : current;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N.en[key] !== undefined) el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (I18N.en[key] !== undefined) el.placeholder = t(key);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (I18N.en[key] !== undefined) el.setAttribute('aria-label', t(key));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (I18N.en[key] !== undefined) el.title = t(key);
    });
    document.querySelectorAll('select[data-lang-select]').forEach(sel => { sel.value = current; });
  }

  function setLanguage(lang) {
    if (!I18N[lang]) return;
    current = lang;
    localStorage.setItem('lang', lang);
    apply();
  }

  function getCurrent() { return current; }
  function init() { current = detect(); apply(); }

  return { init, apply, setLanguage, getCurrent, t };
})();

document.addEventListener('DOMContentLoaded', () => {
  I18n.init();
});