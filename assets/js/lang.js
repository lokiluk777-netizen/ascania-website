/* ==========================================================
   ASCANIA — EN/DE Language Switcher
   ========================================================== */

const TRANSLATIONS = {
  en: {
    /* NAV */
    'nav-home':       'Home',
    'nav-process':    'How It Works',
    'nav-services':   'Services',
    'nav-flooring':   'Flooring',
    'nav-painting':   'Painting',
    'nav-why':        'Why ASCANIA',
    'nav-about':      'About',
    'nav-references': 'References',
    'nav-contact':    'Contact',
    'nav-cta':        'Get a Free Quote',

    /* HERO */
    'hero-badge':   'Serving Tampa Bay since 2021',
    'hero-h1':      'Your Home Renovation. Done Right. Stress-Free.',
    'hero-h2':      'Flooring, Painting & Renovation for Homeowners in Tampa, St. Petersburg & Clearwater',
    'hero-body':    'New floors, fresh paint, a bathroom that finally feels right — on time, on budget, without the chaos. We treat your home like our own.',
    'hero-cta1':    'Get a Free Quote',
    'hero-cta2':    'Call or Text (727) 203-1510',

    /* PAIN POINTS */
    'pain-eyebrow': 'The Problem',
    'pain-h2':      'Sound Familiar?',
    'pain-1-title': '"I can\'t find anyone reliable"',
    'pain-1-body':  'They don\'t call back. They don\'t show up. And when they do, the price has changed.',
    'pain-2-title': '"I don\'t know who to trust with my home"',
    'pain-2-body':  'Letting someone into your house is a matter of trust. You want a crew that respects it.',
    'pain-3-title': '"The last contractor left a mess"',
    'pain-3-body':  'Dust everywhere, sloppy edges, and a punch list nobody came back to finish.',
    'pain-4-title': '"I\'m afraid of surprise invoices"',
    'pain-4-body':  'The quote was one number. The final bill was another — and nobody warned you.',
    'pain-5-title': '"I just want it done right — I don\'t have time for this"',
    'pain-5-body':  'You\'re busy. You don\'t want to manage a renovation — you want it handled.',
    'pain-transition': 'That\'s exactly why ASCANIA exists.',

    /* PROCESS */
    'process-eyebrow': 'The Process',
    'process-h2':      'How It Works',
    'process-sub':     'Simple. Transparent. Reliable.',
    'step1-h3':  'You Contact Us',
    'step1-body': 'Call, text, or send the form and tell us what you need. We respond within 24 hours.',
    'step2-h3':  'You Get a Clear Quote',
    'step2-body': 'We look at the space, walk you through the options, and give you a clear price and timeline. You approve before anything starts.',
    'step3-h3':  'We Deliver. You Relax.',
    'step3-body': 'We show up when we say we will, protect your floors and furniture, and leave your home clean.',

    /* SERVICES */
    'services-eyebrow': 'What We Do',
    'services-h2':      'One Team for Your Whole Project',
    'services-intro':   'New floors, fresh paint, a bathroom upgrade — ASCANIA handles your project from the first call to the final walk-through, with licensed, insured partners for specialized trades.',
    'tag-inhouse':  'In-house',
    'tag-coordinated': 'In-house + Coordination',
    'tag-flagship': '★ Full-Service',
    'tag-core':  '★ Core Specialty',
    's1-h3':   'Painting & Wallpapering',
    's1-body':  'Interior and exterior painting done right — proper prep, premium materials, crisp lines. A finish that lasts.',
    's1-link':  'Painting details →',
    's2-h3':   'Drywall, Texture & Stucco',
    's2-body':  'Drywall installation and repair, texturing, and stucco work. Clean, precise, reliable.',
    's3-h3':   'Flooring',
    's3-body':  'Luxury vinyl plank, laminate, hardwood, and vinyl — precise prep, clean edges, flawless finish. Entirely in-house.',
    's3-link':  'Flooring details →',
    's4-h3':   'Remodeling & Upgrades',
    's4-body':  'Bathroom refreshes, kitchen upgrades, and room makeovers. We coordinate licensed trades where required.',
    's5-h3':   'Installation & Repairs',
    's5-body':  'Fixtures, fittings, minor repairs, and honey-do lists — the small things that make your home work.',
    's6-h3':   'Whole-Home Renovation Management',
    's6-body-l': 'Bigger plans? We manage the entire renovation — scope, budget, schedule, and every licensed contractor (electrical, plumbing, HVAC).',
    's6-body-r': 'No chasing contractors, no surprise invoices — weekly photo updates and a direct line to Sebastian.',

    /* WHY ASCANIA */
    'why-eyebrow': 'Why Us',
    'why-h2':      'Why Homeowners Choose ASCANIA',
    'usp1-h3':   'German Quality. Delivered in Tampa Bay.',
    'usp1-body':  'Punctuality, precision, and accountability aren\'t buzzwords — they\'re the standard ASCANIA was built on. Clear agreements, no excuses, done right the first time.',
    'sub1-h4': 'Reliability',
    'sub1-body': 'We do what we say. Deadlines are commitments.',
    'sub2-h4': 'Transparency',
    'sub2-body': 'Clear quotes, regular updates, no surprise invoices.',
    'sub3-h4': 'Quality',
    'sub3-body': 'We don\'t cut corners. Every stage is checked before the next begins.',
    'usp2-h3':   'Est. 2021 — Experience That Shows',
    'usp2-body':  'Over four years in renovation and project management — built in Europe, now in Tampa Bay.',
    'usp3-h3':   'In-House Team + Vetted Partners',
    'usp3-body':  'We do the hands-on work ourselves and bring in licensed, insured contractors for specialized trades.',
    'usp4-h3':   'Local. On the Ground.',
    'usp4-body':  'Based in Tampa Bay, active from St. Petersburg and Clearwater to Dunedin, Largo, and greater Tampa. We know the trades and the permits.',
    'usp5-h3':   'You Deal Directly With the Owner',
    'usp5-body':  'No call centers, no middlemen. You talk directly to Sebastian — and get answers the same day.',
    'usp6-h3':   'Honest Pricing & Clear Scope',
    'usp6-body':  'No hidden costs, no vague estimates. A clear scope and a fair price before we start — if anything changes, you hear it first.',

    /* SERVICE AREA */
    'area-eyebrow': 'Coverage',
    'area-h2':      'Serving the Entire Tampa Bay Area',
    'area-body':    'ASCANIA is your local partner for flooring, painting, and home renovation across Tampa Bay: <strong>St. Petersburg</strong>, <strong>Clearwater</strong>, <strong>Dunedin</strong>, <strong>Safety Harbor</strong>, <strong>Largo</strong>, <strong>Tarpon Springs</strong>, <strong>Pinellas Park</strong>, <strong>Seminole</strong>, <strong>Tampa</strong>, and <strong>Hillsborough County</strong>.',

    /* ABOUT */
    'about-eyebrow': 'The Team',
    'about-h2':      'The Person Behind ASCANIA',
    'about-name':    'Sebastian Loch — Founder & Managing Director',
    'about-p1':      'Sebastian brings a background in electrical engineering and construction project management. He founded ASCANIA in 2021, moved to Tampa Bay in 2026, and works directly with homeowners here.',
    'about-p2':      'He knows what homeowners want: someone who shows up on time, keeps the budget honest, and treats your home like his own.',
    'about-p3':      'Before Tampa Bay: Sebastian supervised the full fit-out of a 32-unit apartment hotel in Europe — all trades, network, cameras, access control.',
    'about-quote':   '"We treat every home like our own. That\'s not a slogan — it\'s how we work."',

    /* TESTIMONIALS */
    'test-eyebrow': 'Client Reviews',
    'test-h2':      'What Our Clients Say',
    'test-ph1':     'First homeowner reviews coming soon.',
    'test-ph2':     'We\'re just getting started here — your home could be one of our first success stories.',

    /* CONTACT */
    'contact-eyebrow': 'Get in Touch',
    'contact-h2':      'Let\'s Talk About Your Project',
    'contact-body':    'Ready to get started? Call, text, or send the form — we respond within 24 hours.',
    'label-phone':    'Phone',
    'label-email':    'Email',
    'label-web':      'Website',
    'qr-label':       'Save Contact',
    'qr-sub':         'Scan to save Sebastian\'s contact',
    'f-name':         'Full Name',
    'f-email':        'Email Address',
    'f-phone':        'Phone (optional)',
    'f-type':             'Project Type',
    'f-type-ph':          'What do you need done?',
    'f-type-flooring':    'Flooring Installation',
    'f-type-painting':    'Interior Painting',
    'f-type-bath':        'Bathroom Remodel',
    'f-type-kitchen':     'Kitchen Upgrade',
    'f-type-multi':       'Multiple Rooms / Full Home',
    'f-type-other':       'Other / Not Sure Yet',
    'f-city':         'City / Neighborhood',
    'f-message':      'Tell us about your project',
    'f-submit':       'Send Message',
    'f-note':         'We respond within 24 hours · Licensed & Insured',

    /* FOOTER */
    'footer-tagline':  'Flooring, Painting & Home Renovation · Tampa Bay, FL',
    'footer-legal':    'Ascania Consulting, Corp. · Est. 2021',
    'footer-nav-title': 'Navigation',
    'footer-connect-title': 'Connect',
    'footer-copy':     '© 2026 Ascania Consulting, Corp. All rights reserved.',
    'footer-cities':   'Serving: St. Petersburg · Clearwater · Dunedin · Largo · Tampa · Pinellas County',

    /* COOKIE */
    'cookie-text':    'We use cookies to analyze traffic. By accepting, you consent to analytics.',
    'cookie-accept':  'Accept',
    'cookie-decline': 'Decline',

    /* REFERENCES PREVIEW */
    'ref-prev-eyebrow': 'Our Work',
    'ref-prev-h2':  'Projects & Experience',
    'ref-p1-type':  'Commercial · Europe · Completed',
    'ref-p1-title': 'Apartment Hotel · 32 Units',
    'ref-p1-body':  'Full construction supervision — trades coordination, drywall & finishes, network infrastructure, cameras, access control.',
    'ref-p2-type':  'Interior Fit-Out · 32 Units',
    'ref-p2-title': 'From Shell to Handover',
    'ref-p2-body':  'Every unit supervised from raw drywall to final inspection — all 32 delivered on spec and on schedule.',
    'ref-cta-h3':   'Your Home Could Be Next',
    'ref-cta-body': 'We\'re taking on our first Tampa Bay projects — be part of it from day one.',
    'ref-cta-btn':  'Start Your Project',
    'ref-view-all': 'View Full Project',
    'ref-exp-h3':   'Proven Track Record',
    'ref-exp-body': 'Prior to Tampa Bay: construction supervision of a 32-unit apartment hotel in Europe — full trades coordination, network infrastructure, security cameras, and electronic access control systems. The same standards. New location.',

    /* REFERENCES PAGE */
    'ref-h1':   'Projects & References',
    'ref-sub':  'Construction supervision, trades coordination, and renovation project management.',
    'cs-tag-type':  'Commercial Construction',
    'cs-tag-loc':   'Europe · Completed',
    'cs-tag-scope': 'Project Management & Supervision',
    'cs-h2':        'Apartment Hotel · 32 Units',
    'cs-intro':     'Full construction supervision of a 32-unit apartment hotel — from structural shell to units ready for operation. ASCANIA coordinated all trades on site and managed network infrastructure, security cameras, and electronic access control.',
    'cs-stat1': 'Units Supervised',
    'cs-stat2': 'Floors',
    'cs-stat3': 'Trades Coordinated',
    'cs-stat4': 'On-Site Supervision',
    'cs-scope-h': 'Scope of Work',
    'cs-scope-1': 'Construction supervision across all trades',
    'cs-scope-2': 'Quality control from shell to handover',
    'cs-scope-3': 'Network infrastructure & data cabling',
    'cs-scope-4': 'Security camera system installation',
    'cs-scope-5': 'Electronic access control (all 32 units)',
    'cs-scope-6': 'Drywall, flooring & interior finishes',
    'cs-scope-7': 'Scheduling & contractor coordination',
    'cs-scope-8': 'Final inspection & defect management',
  },

  de: {
    /* NAV */
    'nav-home':       'Start',
    'nav-process':    'So funktioniert es',
    'nav-services':   'Leistungen',
    'nav-flooring':   'Bodenbeläge',
    'nav-painting':   'Malerarbeiten',
    'nav-why':        'Warum ASCANIA',
    'nav-about':      'Über uns',
    'nav-references': 'Referenzen',
    'nav-contact':    'Kontakt',
    'nav-cta':        'Kostenloses Angebot',

    /* HERO */
    'hero-badge':   'In Tampa Bay seit 2021',
    'hero-h1':      'Ihre Renovierung. Richtig gemacht. Ohne Stress.',
    'hero-h2':      'Bodenbeläge, Malerarbeiten & Renovierung für Hauseigentümer in Tampa, St. Petersburg & Clearwater',
    'hero-body':    'Neue Böden, frische Farbe, ein Bad, das endlich passt — termingerecht, im Budget, ohne Chaos. Wir behandeln Ihr Zuhause wie unser eigenes.',
    'hero-cta1':    'Kostenloses Angebot',
    'hero-cta2':    'Anrufen: (727) 203-1510',

    /* PAIN POINTS */
    'pain-eyebrow': 'Das Problem',
    'pain-h2':      'Kommt Ihnen das bekannt vor?',
    'pain-1-title': '„Ich finde einfach niemanden, der zuverlässig ist"',
    'pain-1-body':  'Sie rufen nicht zurück, sie erscheinen nicht — und wenn doch, hat sich der Preis geändert.',
    'pain-2-title': '„Ich weiß nicht, wem ich mein Zuhause anvertrauen kann"',
    'pain-2-body':  'Jemanden ins Haus zu lassen ist Vertrauenssache. Sie wollen ein Team, das das respektiert.',
    'pain-3-title': '„Der letzte Handwerker hat ein Chaos hinterlassen"',
    'pain-3-body':  'Staub überall, schiefe Kanten und eine Mängelliste, die nie abgearbeitet wurde.',
    'pain-4-title': '„Ich habe Angst vor Überraschungsrechnungen"',
    'pain-4-body':  'Das Angebot war eine Zahl, die Endrechnung eine andere — gewarnt hat Sie niemand.',
    'pain-5-title': '„Ich will nur, dass es richtig gemacht wird — ich habe dafür keine Zeit"',
    'pain-5-body':  'Sie sind beschäftigt. Sie wollen keine Renovierung managen — Sie wollen, dass sie erledigt wird.',
    'pain-transition': 'Genau dafür gibt es ASCANIA.',

    /* PROCESS */
    'process-eyebrow': 'Der Ablauf',
    'process-h2':      'So funktioniert es',
    'process-sub':     'Einfach. Transparent. Verlässlich.',
    'step1-h3':  'Sie kontaktieren uns',
    'step1-body': 'Anrufen, SMS oder Formular senden und kurz Ihr Vorhaben beschreiben. Wir antworten innerhalb von 24 Stunden.',
    'step2-h3':  'Sie erhalten ein klares Angebot',
    'step2-body': 'Wir sehen uns die Räume an, besprechen die Optionen und nennen Preis und Zeitplan. Sie geben frei, bevor etwas beginnt.',
    'step3-h3':  'Wir liefern. Sie lehnen sich zurück.',
    'step3-body': 'Wir erscheinen pünktlich, schützen Böden und Möbel und hinterlassen Ihr Zuhause sauber.',

    /* SERVICES */
    'services-eyebrow': 'Leistungen',
    'services-h2':      'Ein Team für Ihr gesamtes Projekt',
    'services-intro':   'Neue Böden, frische Farbe, ein aufgewertetes Bad — ASCANIA übernimmt Ihr Projekt vom ersten Anruf bis zur Endabnahme, mit lizenzierten, versicherten Partnern für spezialisierte Gewerke.',
    'tag-inhouse':     'Eigenausführung',
    'tag-coordinated': 'Eigen + Koordination',
    'tag-flagship':    '★ Komplettservice',
    'tag-core':        '★ Kernkompetenz',
    's1-h3':   'Malen & Tapezieren',
    's1-body':  'Innen- und Außenanstrich, richtig gemacht — gründliche Vorbereitung, hochwertige Materialien, saubere Kanten. Ein Ergebnis, das hält.',
    's1-link':  'Mehr zu Malerarbeiten →',
    's2-h3':   'Trockenbau & Stuck',
    's2-body':  'Trockenbau, Reparaturen, Strukturputz und Stuck. Sauber, präzise, verlässlich.',
    's3-h3':   'Bodenbelag',
    's3-body':  'Vinyl (LVP), Laminat, Parkett und Designboden — präzise Vorbereitung, saubere Kanten, makelloses Ergebnis. Komplett in Eigenleistung.',
    's3-link':  'Mehr zu Bodenbelägen →',
    's4-h3':   'Umbau & Aufwertung',
    's4-body':  'Bad-Auffrischung, Küchen-Aufwertung und Raumrenovierung. Lizenzierte Gewerke koordinieren wir, wo nötig.',
    's5-h3':   'Montage & Reparaturen',
    's5-body':  'Armaturen, Einbauten, kleinere Reparaturen und die ewige To-do-Liste — die kleinen Dinge, die zählen.',
    's6-h3':   'Komplette Renovierung aus einer Hand',
    's6-body-l': 'Größere Pläne? Wir managen die gesamte Renovierung — Umfang, Budget, Termine und alle lizenzierten Gewerke (Elektrik, Sanitär, Klima).',
    's6-body-r': 'Keine Handwerker-Jagd, keine Überraschungsrechnungen — wöchentliche Foto-Updates, direkter Draht zu Sebastian.',

    /* WHY ASCANIA */
    'why-eyebrow': 'Warum wir',
    'why-h2':      'Warum Hauseigentümer auf ASCANIA setzen',
    'usp1-h3':   'Deutsche Qualität. Geliefert in Tampa Bay.',
    'usp1-body':  'Pünktlichkeit, Präzision und Verlässlichkeit sind keine Schlagworte — sie sind unser Standard. Klare Absprachen, keine Ausreden, beim ersten Mal richtig.',
    'sub1-h4': 'Verlässlichkeit',
    'sub1-body': 'Wir tun, was wir sagen. Termine sind Zusagen.',
    'sub2-h4': 'Transparenz',
    'sub2-body': 'Klare Angebote, regelmäßige Updates, keine Überraschungsrechnungen.',
    'sub3-h4': 'Qualität',
    'sub3-body': 'Wir machen keine Abstriche. Jede Phase wird geprüft, bevor die nächste beginnt.',
    'usp2-h3':   'Seit 2021 — Erfahrung, die man sieht',
    'usp2-body':  'Über vier Jahre Erfahrung in Renovierung und Projektmanagement — aufgebaut in Europa, jetzt in Tampa Bay.',
    'usp3-h3':   'Eigenes Team + geprüfte Partner',
    'usp3-body':  'Die Arbeiten führen wir selbst aus — spezialisierte Gewerke übernehmen lizenzierte, versicherte Partner.',
    'usp4-h3':   'Lokal. Vor Ort.',
    'usp4-body':  'In Tampa Bay ansässig, aktiv von St. Petersburg und Clearwater bis Dunedin, Largo und Tampa. Wir kennen die Handwerker und die Genehmigungen.',
    'usp5-h3':   'Sie sprechen direkt mit dem Inhaber',
    'usp5-body':  'Kein Callcenter, keine Zwischenstellen. Sie sprechen direkt mit Sebastian — und erhalten Antworten am selben Tag.',
    'usp6-h3':   'Faire Preise & klarer Leistungsumfang',
    'usp6-body':  'Keine versteckten Kosten, keine vagen Schätzungen. Klarer Umfang und fairer Preis vorab — ändert sich etwas, erfahren Sie es zuerst.',

    /* SERVICE AREA */
    'area-eyebrow': 'Einzugsgebiet',
    'area-h2':      'Tätig in der gesamten Tampa Bay Area',
    'area-body':    'ASCANIA ist Ihr lokaler Partner für Bodenbeläge, Malerarbeiten und Renovierung in der Tampa Bay Area: <strong>St. Petersburg</strong>, <strong>Clearwater</strong>, <strong>Dunedin</strong>, <strong>Safety Harbor</strong>, <strong>Largo</strong>, <strong>Tarpon Springs</strong>, <strong>Pinellas Park</strong>, <strong>Seminole</strong>, <strong>Tampa</strong> und <strong>Hillsborough County</strong>.',

    /* ABOUT */
    'about-eyebrow': 'Das Team',
    'about-h2':      'Die Person hinter ASCANIA',
    'about-name':    'Sebastian Loch — Gründer & Geschäftsführer',
    'about-p1':      'Sebastian bringt einen Hintergrund in Elektrotechnik und Bauprojektmanagement mit. Er gründete ASCANIA 2021, zog 2026 nach Tampa Bay und arbeitet dort direkt mit Hauseigentümern.',
    'about-p2':      'Er weiß, was Hauseigentümer wollen: jemanden, der pünktlich erscheint, das Budget ehrlich hält und Ihr Zuhause behandelt wie sein eigenes.',
    'about-p3':      'Vor Tampa Bay: Sebastian überwachte den kompletten Ausbau eines Aparthotels mit 32 Einheiten in Europa — alle Gewerke, Netzwerk, Kameratechnik, Zugangskontrolle.',
    'about-quote':   '„Wir behandeln jedes Zuhause wie unser eigenes. Das ist kein Slogan — so arbeiten wir."',

    /* TESTIMONIALS */
    'test-eyebrow': 'Kundenstimmen',
    'test-h2':      'Was unsere Kunden sagen',
    'test-ph1':     'Erste Kundenstimmen folgen in Kürze.',
    'test-ph2':     'Wir starten hier gerade durch — Ihr Zuhause könnte eine unserer ersten Erfolgsgeschichten werden.',

    /* CONTACT */
    'contact-eyebrow': 'Kontakt',
    'contact-h2':      'Sprechen wir über Ihr Projekt',
    'contact-body':    'Bereit loszulegen? Anrufen, SMS oder Formular senden — wir antworten innerhalb von 24 Stunden.',
    'label-phone':    'Telefon',
    'label-email':    'E-Mail',
    'label-web':      'Website',
    'qr-label':       'Kontakt speichern',
    'qr-sub':         'Scannen und Kontakt speichern',
    'f-name':         'Vor- und Nachname',
    'f-email':        'E-Mail-Adresse',
    'f-phone':        'Telefon (optional)',
    'f-type':             'Projekttyp',
    'f-type-ph':          'Was soll gemacht werden?',
    'f-type-flooring':    'Bodenverlegung',
    'f-type-painting':    'Malerarbeiten innen',
    'f-type-bath':        'Badsanierung',
    'f-type-kitchen':     'Küchen-Aufwertung',
    'f-type-multi':       'Mehrere Räume / ganzes Haus',
    'f-type-other':       'Sonstiges / noch unklar',
    'f-city':         'Stadt / Stadtteil',
    'f-message':      'Beschreiben Sie Ihr Projekt',
    'f-submit':       'Nachricht senden',
    'f-note':         'Antwort innerhalb von 24 Stunden · Lizenziert & versichert',

    /* FOOTER */
    'footer-tagline':  'Bodenbeläge, Malerarbeiten & Renovierung · Tampa Bay, FL',
    'footer-legal':    'Ascania Consulting, Corp. · Gegr. 2021',
    'footer-nav-title': 'Navigation',
    'footer-connect-title': 'Kontakt & Social',
    'footer-copy':     '© 2026 Ascania Consulting, Corp. Alle Rechte vorbehalten.',
    'footer-cities':   'Tätig in: St. Petersburg · Clearwater · Dunedin · Largo · Tampa · Pinellas County',

    /* COOKIE */
    'cookie-text':    'Wir verwenden Cookies zur Traffic-Analyse. Mit „Akzeptieren“ stimmen Sie Analytics zu.',
    'cookie-accept':  'Akzeptieren',
    'cookie-decline': 'Ablehnen',

    /* REFERENCES PREVIEW */
    'ref-prev-eyebrow': 'Unsere Arbeit',
    'ref-prev-h2':  'Projekte & Erfahrung',
    'ref-p1-type':  'Gewerbe · Europa · Abgeschlossen',
    'ref-p1-title': 'Aparthotel · 32 Einheiten',
    'ref-p1-body':  'Vollständige Bauüberwachung — Gewerkekoordination, Trockenbau & Ausbau, Netzwerk, Kameratechnik, Zugangskontrolle.',
    'ref-p2-type':  'Innenausbau · 32 Einheiten',
    'ref-p2-title': 'Vom Rohbau bis zur Übergabe',
    'ref-p2-body':  'Jede Einheit vom Rohbau bis zur Abnahme überwacht — alle 32 fristgerecht und spezifikationskonform.',
    'ref-cta-h3':   'Ihr Zuhause könnte das nächste sein',
    'ref-cta-body': 'Wir nehmen unsere ersten Projekte in Tampa Bay an — seien Sie von Anfang an dabei.',
    'ref-cta-btn':  'Projekt starten',
    'ref-view-all': 'Gesamtes Projekt ansehen',
    'ref-exp-h3':   'Nachgewiesene Erfahrung',
    'ref-exp-body': 'Vor Tampa Bay: Bauüberwachung eines Aparthotels mit 32 Einheiten in Europa — vollständige Gewerkekoordination, Netzwerkinfrastruktur, Kameratechnik und elektronische Zutrittskontrolle. Dieselben Standards. Neuer Standort.',

    /* REFERENCES PAGE */
    'ref-h1':   'Projekte & Referenzen',
    'ref-sub':  'Bauüberwachung, Gewerkekoordination und Renovierungsprojektmanagement.',
    'cs-tag-type':  'Gewerbebau',
    'cs-tag-loc':   'Europa · Abgeschlossen',
    'cs-tag-scope': 'Projektmanagement & Bauüberwachung',
    'cs-h2':        'Aparthotel · 32 Einheiten',
    'cs-intro':     'Vollständige Bauüberwachung eines Aparthotels mit 32 Einheiten — vom Rohbau bis zur betriebsbereiten Einheit. ASCANIA koordinierte alle Gewerke vor Ort und verantwortete Netzwerkinfrastruktur, Kameratechnik und elektronische Zugangskontrolle.',
    'cs-stat1': 'Überwachte Einheiten',
    'cs-stat2': 'Etagen',
    'cs-stat3': 'Koordinierte Gewerke',
    'cs-stat4': 'Vor-Ort-Überwachung',
    'cs-scope-h': 'Leistungsumfang',
    'cs-scope-1': 'Bauüberwachung über alle Gewerke',
    'cs-scope-2': 'Qualitätskontrolle vom Rohbau bis zur Übergabe',
    'cs-scope-3': 'Netzwerkinfrastruktur & Datenleitungen',
    'cs-scope-4': 'Installation der Kameratechnik',
    'cs-scope-5': 'Elektronische Zugangskontrolle (alle 32 Einheiten)',
    'cs-scope-6': 'Trockenbau, Bodenbelag & Innenausbau',
    'cs-scope-7': 'Terminplanung & Gewerkekoordination',
    'cs-scope-8': 'Abnahme & Mängelmanagement',
  }
};

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';

  /* Update all text-keyed elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang][key] !== undefined) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = TRANSLATIONS[lang][key];
      } else {
        el.textContent = TRANSLATIONS[lang][key];
      }
    }
  });

  /* Update placeholders */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[lang][key] !== undefined) {
      el.placeholder = TRANSLATIONS[lang][key];
    }
  });

  /* Update select options */
  document.querySelectorAll('[data-i18n-options]').forEach(select => {
    const keys = select.getAttribute('data-i18n-options').split(',');
    const options = select.querySelectorAll('option[data-i18n]');
    options.forEach(opt => {
      const key = opt.getAttribute('data-i18n');
      if (TRANSLATIONS[lang][key] !== undefined) {
        opt.textContent = TRANSLATIONS[lang][key];
      }
    });
  });

  /* Update lang buttons */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  /* Update html lang attribute */
  document.documentElement.lang = lang;

  /* Persist */
  localStorage.setItem('ascania-lang', lang);
  window.__currentLang = lang;
}

function initLang() {
  const saved = localStorage.getItem('ascania-lang');
  const browser = (navigator.language || 'en').toLowerCase().startsWith('de') ? 'de' : 'en';
  setLanguage(saved || browser);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });
}

document.addEventListener('DOMContentLoaded', initLang);
