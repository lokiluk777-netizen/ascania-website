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
    'hero-body':    'New floors, fresh paint, a bathroom that finally feels right — ASCANIA gets it done on time, on budget, and without the chaos. You make one call. We handle the rest. We treat your home like our own.',
    'hero-cta1':    'Get a Free Quote',
    'hero-cta2':    'Call or Text (727) 203-1510',

    /* PAIN POINTS */
    'pain-eyebrow': 'The Problem',
    'pain-h2':      'Sound Familiar?',
    'pain-1-title': '"I can\'t find anyone reliable"',
    'pain-1-body':  'They don\'t call back. They don\'t show up. And when they finally do, the price has changed.',
    'pain-2-title': '"I don\'t know who to trust with my home"',
    'pain-2-body':  'Letting someone into your house is a matter of trust. You want a crew that treats it with respect.',
    'pain-3-title': '"The last contractor left a mess"',
    'pain-3-body':  'Dust everywhere, sloppy edges, and a punch list nobody ever came back to finish.',
    'pain-4-title': '"I\'m afraid of surprise invoices"',
    'pain-4-body':  'The quote was one number. The final bill was another. And nobody warned you in between.',
    'pain-5-title': '"I just want it done right — I don\'t have time for this"',
    'pain-5-body':  'You\'re busy. You don\'t want to manage a renovation — you want it handled, start to finish.',
    'pain-transition': 'That\'s exactly why ASCANIA exists.',

    /* PROCESS */
    'process-eyebrow': 'The Process',
    'process-h2':      'How It Works',
    'process-sub':     'Simple. Transparent. Reliable.',
    'step1-h3':  'You Contact Us',
    'step1-body': 'Call, text, or send the form. Tell us about your home and what you\'d like done. We respond within 24 hours — no obligation, no sales pitch.',
    'step2-h3':  'You Get a Clear Quote',
    'step2-body': 'We look at the space, walk you through your options, and give you a clear price and timeline. No vague estimates, no hidden extras. You approve before anything starts.',
    'step3-h3':  'We Deliver. You Relax.',
    'step3-body': 'We show up when we say we will, protect your floors and furniture, keep you updated throughout, and leave your home clean. You get a final walk-through — and a result you\'ll love.',

    /* SERVICES */
    'services-eyebrow': 'What We Do',
    'services-h2':      'One Team for Your Whole Project',
    'services-intro':   'New floors in the living room, a fresh coat of paint, a bathroom upgrade — ASCANIA handles your project from first call to final walk-through. We do the hands-on work ourselves, and bring in licensed, insured partners for specialized trades. You always know who\'s in your home.',
    'tag-inhouse':  'In-house',
    'tag-coordinated': 'In-house + Coordination',
    'tag-flagship': '★ Full-Service',
    'tag-core':  '★ Core Specialty',
    's1-h3':   'Painting & Wallpapering',
    's1-body':  'Interior and exterior painting done right — proper prep, premium materials, crisp lines. Whether a single room or a whole home, we deliver a finish that lasts. A core ASCANIA specialty.',
    's1-link':  'Painting details →',
    's2-h3':   'Drywall, Texture & Stucco',
    's2-body':  'Drywall installation and repair, texturing, and stucco work. Clean, precise, reliable.',
    's3-h3':   'Flooring',
    's3-body':  'Luxury vinyl plank, laminate, hardwood, and vinyl — installed with precise prep, clean edges, and a flawless finish. One of our core specialties, done entirely in-house.',
    's3-link':  'Flooring details →',
    's4-h3':   'Remodeling & Upgrades',
    's4-body':  'Bathroom refreshes, kitchen upgrades, and room makeovers. We handle the cosmetic work and coordinate licensed trades where required.',
    's5-h3':   'Installation & Repairs',
    's5-body':  'Fixtures, fittings, minor repairs, and honey-do lists. The small things that make your home work the way it should.',
    's6-h3':   'Whole-Home Renovation Management',
    's6-body-l': 'Bigger plans? We manage your entire renovation — scoping, budgeting, scheduling, and supervising every licensed contractor (electrical, plumbing, HVAC). One point of contact. Weekly updates. Full transparency.',
    's6-body-r': 'You make one call. We handle the rest. No chasing contractors, no surprise invoices — just weekly photo updates, a direct line to Sebastian, and a home you\'ll love coming back to.',

    /* WHY ASCANIA */
    'why-eyebrow': 'Why Us',
    'why-h2':      'Why Homeowners Choose ASCANIA',
    'usp1-h3':   'German Quality. Delivered in Tampa Bay.',
    'usp1-body':  'Punctuality, precision, and accountability — these aren\'t buzzwords for us, they\'re the standard we were built on. ASCANIA brings German craftsmanship discipline to every home renovation in Tampa Bay. Clear agreements, no excuses, and a job done right the first time.',
    'sub1-h4': 'Reliability',
    'sub1-body': 'We do what we say. Deadlines are commitments, not suggestions.',
    'sub2-h4': 'Transparency',
    'sub2-body': 'Clear quotes, regular updates, no surprise invoices. You always know where your project stands.',
    'sub3-h4': 'Quality',
    'sub3-body': 'We don\'t cut corners. Every stage is checked before the next begins.',
    'usp2-h3':   'Est. 2021 — Experience That Shows',
    'usp2-body':  'Over four years of experience in renovation and project management — built in Europe, now delivering results for homeowners in Tampa Bay.',
    'usp3-h3':   'In-House Team + Vetted Partners',
    'usp3-body':  'We do the hands-on work ourselves where it counts — and bring in licensed, insured contractors for specialized trades. Best of both worlds: direct quality control and full-scope capability.',
    'usp4-h3':   'Local. On the Ground.',
    'usp4-body':  'Based in Tampa Bay, active across St. Petersburg, Clearwater, Dunedin, Safety Harbor, Largo, and greater Tampa. We know the trades, the permit process, and the neighborhoods.',
    'usp5-h3':   'You Deal Directly With the Owner',
    'usp5-body':  'No call centers, no middlemen. From the first quote to the final walk-through, you talk directly to Sebastian. Questions get answered the same day — not next week.',
    'usp6-h3':   'Honest Pricing & Clear Scope',
    'usp6-body':  'No hidden costs, no vague estimates. You get a clear scope and a fair price before we start — and we stick to it. If anything changes, you hear it from us first.',

    /* SERVICE AREA */
    'area-eyebrow': 'Coverage',
    'area-h2':      'Serving the Entire Tampa Bay Area',
    'area-body':    'ASCANIA Renovation & Management is your local partner for flooring, painting, and home renovation across Tampa Bay. Our service area covers <strong>St. Petersburg</strong>, <strong>Clearwater</strong>, <strong>Dunedin</strong>, <strong>Safety Harbor</strong>, <strong>Largo</strong>, <strong>Tarpon Springs</strong>, <strong>Pinellas Park</strong>, <strong>Seminole</strong>, and the greater <strong>Tampa</strong> and <strong>Hillsborough County</strong> area. Whether you\'re in a waterfront condo in St. Pete or a family home in Dunedin — we\'re local, and we show up when we say we will.',

    /* ABOUT */
    'about-eyebrow': 'The Team',
    'about-h2':      'The Person Behind ASCANIA',
    'about-name':    'Sebastian Loch — Founder & Managing Director',
    'about-p1':      'Sebastian brings a background in electrical engineering and construction project management to every project. He founded ASCANIA in 2021 and relocated to Tampa Bay in 2026 — today he works directly with homeowners across Pinellas and Hillsborough County.',
    'about-p2':      'He knows what homeowners want: someone who shows up on time, keeps the budget honest, communicates clearly — and treats your home with the same care he\'d treat his own.',
    'about-p3':      'Before Tampa Bay: Sebastian supervised the full fit-out of a 32-unit apartment hotel in Europe — coordinating all trades, overseeing network infrastructure, security cameras, and electronic access control systems from rough-in to handover.',
    'about-quote':   '"We treat every home like our own. That\'s not a slogan — it\'s how we work."',

    /* TESTIMONIALS */
    'test-eyebrow': 'Client Reviews',
    'test-h2':      'What Our Clients Say',
    'test-ph1':     'First homeowner reviews coming soon.',
    'test-ph2':     'We\'re just getting started in Tampa Bay — and we\'d love your home to be one of our first success stories.',

    /* CONTACT */
    'contact-eyebrow': 'Get in Touch',
    'contact-h2':      'Let\'s Talk About Your Project',
    'contact-body':    'Ready to get your project done — without the stress? Call, text, or send the form. We respond within 24 hours.',
    'label-phone':    'Phone',
    'label-email':    'Email',
    'label-web':      'Website',
    'qr-label':       'Save Contact',
    'qr-sub':         'Scan to add Sebastian to your contacts',
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
    'footer-cities':   'Serving: St. Petersburg · Clearwater · Dunedin · Safety Harbor · Largo · Tarpon Springs · Seminole · Tampa · Pinellas County',

    /* COOKIE */
    'cookie-text':    'We use cookies to analyze website traffic and improve your experience. By accepting, you consent to our use of analytics.',
    'cookie-accept':  'Accept',
    'cookie-decline': 'Decline',

    /* REFERENCES PREVIEW */
    'ref-prev-eyebrow': 'Our Work',
    'ref-prev-h2':  'Projects & Experience',
    'ref-p1-type':  'Commercial · Europe · Completed',
    'ref-p1-title': 'Apartment Hotel · 32 Units',
    'ref-p1-body':  'Full construction supervision — trades coordination, drywall & finishes, network infrastructure, security cameras, electronic access control.',
    'ref-p2-type':  'Interior Fit-Out · 32 Units',
    'ref-p2-title': 'From Shell to Handover',
    'ref-p2-body':  'Supervised every unit from raw drywall through final inspection. All 32 apartments delivered on spec and on schedule.',
    'ref-cta-h3':   'Your Home Could Be Next',
    'ref-cta-body': 'We\'re actively taking on first projects in Tampa Bay. Be part of ASCANIA\'s Florida story from day one.',
    'ref-cta-btn':  'Start Your Project',
    'ref-view-all': 'View Full Project',
    'ref-exp-h3':   'Proven Track Record',
    'ref-exp-body': 'Prior to Tampa Bay: construction supervision of a 32-unit apartment hotel in Europe — full trades coordination, network infrastructure, security cameras, and electronic access control systems. The same standards. New location.',

    /* REFERENCES PAGE */
    'ref-h1':   'Projects & References',
    'ref-sub':  'From concept to completion — construction supervision, trades coordination, and renovation project management.',
    'cs-tag-type':  'Commercial Construction',
    'cs-tag-loc':   'Europe · Completed',
    'cs-tag-scope': 'Project Management & Supervision',
    'cs-h2':        'Apartment Hotel · 32 Units',
    'cs-intro':     'Full construction supervision of a 32-unit apartment hotel — from structural shell to finished units ready for operation. ASCANIA coordinated all trades on-site, oversaw quality at every phase, and managed the installation of network infrastructure, security camera systems, and electronic access control throughout the entire building.',
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
    'cs-scope-7': 'Contractor scheduling & coordination',
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
    'hero-body':    'Neue Böden, frische Farbe, ein Bad, das endlich passt — ASCANIA liefert termingerecht, im Budget und ohne Chaos. Ein Anruf genügt. Wir kümmern uns um den Rest. Wir behandeln Ihr Zuhause wie unser eigenes.',
    'hero-cta1':    'Kostenloses Angebot',
    'hero-cta2':    'Anrufen: (727) 203-1510',

    /* PAIN POINTS */
    'pain-eyebrow': 'Das Problem',
    'pain-h2':      'Kommt Ihnen das bekannt vor?',
    'pain-1-title': '„Ich finde einfach niemanden, der zuverlässig ist"',
    'pain-1-body':  'Sie rufen nicht zurück. Sie erscheinen nicht. Und wenn doch, hat sich plötzlich der Preis geändert.',
    'pain-2-title': '„Ich weiß nicht, wem ich mein Zuhause anvertrauen kann"',
    'pain-2-body':  'Jemanden ins Haus zu lassen ist Vertrauenssache. Sie wollen ein Team, das es mit Respekt behandelt.',
    'pain-3-title': '„Der letzte Handwerker hat ein Chaos hinterlassen"',
    'pain-3-body':  'Staub überall, schiefe Kanten und eine Mängelliste, die nie abgearbeitet wurde.',
    'pain-4-title': '„Ich habe Angst vor Überraschungsrechnungen"',
    'pain-4-body':  'Das Angebot war eine Zahl. Die Endrechnung eine andere. Und gewarnt hat Sie zwischendurch niemand.',
    'pain-5-title': '„Ich will nur, dass es richtig gemacht wird — ich habe dafür keine Zeit"',
    'pain-5-body':  'Sie sind beschäftigt. Sie wollen keine Renovierung managen — Sie wollen, dass sie erledigt wird. Von Anfang bis Ende.',
    'pain-transition': 'Genau dafür gibt es ASCANIA.',

    /* PROCESS */
    'process-eyebrow': 'Der Ablauf',
    'process-h2':      'So funktioniert es',
    'process-sub':     'Einfach. Transparent. Verlässlich.',
    'step1-h3':  'Sie kontaktieren uns',
    'step1-body': 'Anrufen, SMS schreiben oder Formular senden. Beschreiben Sie uns Ihr Zuhause und Ihr Vorhaben. Wir antworten innerhalb von 24 Stunden — unverbindlich und ohne Verkaufsdruck.',
    'step2-h3':  'Sie erhalten ein klares Angebot',
    'step2-body': 'Wir sehen uns die Räume an, besprechen Ihre Optionen und nennen Ihnen einen klaren Preis und Zeitplan. Keine vagen Schätzungen, keine versteckten Extras. Sie geben frei, bevor etwas beginnt.',
    'step3-h3':  'Wir liefern. Sie lehnen sich zurück.',
    'step3-body': 'Wir erscheinen pünktlich, schützen Böden und Möbel, halten Sie auf dem Laufenden und hinterlassen Ihr Zuhause sauber. Zum Abschluss gehen wir gemeinsam alles durch.',

    /* SERVICES */
    'services-eyebrow': 'Leistungen',
    'services-h2':      'Ein Team für Ihr gesamtes Projekt',
    'services-intro':   'Neue Böden im Wohnzimmer, ein frischer Anstrich, ein aufgewertetes Bad — ASCANIA übernimmt Ihr Projekt vom ersten Anruf bis zur Endabnahme. Die Arbeiten führen wir selbst aus, für spezialisierte Gewerke holen wir lizenzierte, versicherte Partner dazu. Sie wissen immer, wer in Ihrem Haus arbeitet.',
    'tag-inhouse':     'Eigenausführung',
    'tag-coordinated': 'Eigen + Koordination',
    'tag-flagship':    '★ Komplettservice',
    'tag-core':        '★ Kernkompetenz',
    's1-h3':   'Malen & Tapezieren',
    's1-body':  'Innen- und Außenanstrich, richtig gemacht — gründliche Vorbereitung, hochwertige Materialien, saubere Kanten. Ob einzelner Raum oder ganzes Haus: ein Ergebnis, das hält. Eine ASCANIA-Kernkompetenz.',
    's1-link':  'Mehr zu Malerarbeiten →',
    's2-h3':   'Trockenbau & Stuck',
    's2-body':  'Trockenbau, Reparaturen, Strukturputz und Stuck. Sauber, präzise, verlässlich.',
    's3-h3':   'Bodenbelag',
    's3-body':  'Vinyl (LVP), Laminat, Parkett und Designboden — verlegt mit präziser Vorbereitung, sauberen Kanten und makellosem Ergebnis. Eine unserer Kernkompetenzen, komplett in Eigenleistung.',
    's3-link':  'Mehr zu Bodenbelägen →',
    's4-h3':   'Umbau & Aufwertung',
    's4-body':  'Bad-Auffrischungen, Küchen-Aufwertungen und Raumrenovierungen. Wir übernehmen die kosmetischen Arbeiten und koordinieren lizenzierte Gewerke, wo nötig.',
    's5-h3':   'Montage & Reparaturen',
    's5-body':  'Armaturen, Einbauten, kleinere Reparaturen und die ewige To-do-Liste. Die kleinen Dinge, die Ihr Zuhause besser machen.',
    's6-h3':   'Komplette Renovierung aus einer Hand',
    's6-body-l': 'Größere Pläne? Wir managen Ihre gesamte Renovierung — Planung, Budget, Terminierung und Überwachung aller lizenzierten Gewerke (Elektrik, Sanitär, Klima). Ein Ansprechpartner. Wöchentliche Updates. Volle Transparenz.',
    's6-body-r': 'Ein Anruf genügt. Wir kümmern uns um den Rest — keine Handwerker-Jagd, keine Überraschungsrechnungen. Wöchentliche Foto-Updates und ein direkter Draht zu Sebastian inklusive.',

    /* WHY ASCANIA */
    'why-eyebrow': 'Warum wir',
    'why-h2':      'Warum Hauseigentümer auf ASCANIA setzen',
    'usp1-h3':   'Deutsche Qualität. Geliefert in Tampa Bay.',
    'usp1-body':  'Pünktlichkeit, Präzision und Verlässlichkeit — das sind für uns keine Schlagworte, sondern der Standard, auf dem ASCANIA aufgebaut wurde. Klare Absprachen, keine Ausreden, und eine Arbeit, die beim ersten Mal richtig gemacht wird.',
    'sub1-h4': 'Verlässlichkeit',
    'sub1-body': 'Wir tun, was wir sagen. Termine sind Zusagen, keine Vorschläge.',
    'sub2-h4': 'Transparenz',
    'sub2-body': 'Klare Angebote, regelmäßige Updates, keine Überraschungsrechnungen. Sie wissen immer, wo Ihr Projekt steht.',
    'sub3-h4': 'Qualität',
    'sub3-body': 'Wir machen keine Abstriche. Jede Phase wird geprüft, bevor die nächste beginnt.',
    'usp2-h3':   'Seit 2021 — Erfahrung, die man sieht',
    'usp2-body':  'Über vier Jahre Erfahrung in Renovierung und Projektmanagement — aufgebaut in Europa, jetzt mit Ergebnissen für Hauseigentümer in Tampa Bay.',
    'usp3-h3':   'Eigenes Team + geprüfte Partner',
    'usp3-body':  'Die Arbeiten führen wir selbst aus, wo es zählt — für spezialisierte Gewerke holen wir lizenzierte, versicherte Partner dazu. Das Beste aus beidem: direkte Qualitätskontrolle und volle Leistungsbreite.',
    'usp4-h3':   'Lokal. Vor Ort.',
    'usp4-body':  'In Tampa Bay ansässig, aktiv in St. Petersburg, Clearwater, Dunedin, Safety Harbor, Largo und der gesamten Tampa Bay Area. Wir kennen die Handwerker, die Genehmigungsprozesse und die Stadtteile.',
    'usp5-h3':   'Sie sprechen direkt mit dem Inhaber',
    'usp5-body':  'Kein Callcenter, keine Zwischenstellen. Vom ersten Angebot bis zur Abnahme sprechen Sie direkt mit Sebastian. Fragen werden am selben Tag beantwortet — nicht nächste Woche.',
    'usp6-h3':   'Faire Preise & klarer Leistungsumfang',
    'usp6-body':  'Keine versteckten Kosten, keine vagen Schätzungen. Sie erhalten einen klaren Leistungsumfang und einen fairen Preis, bevor wir beginnen — und dabei bleibt es. Falls sich etwas ändert, erfahren Sie es zuerst von uns.',

    /* SERVICE AREA */
    'area-eyebrow': 'Einzugsgebiet',
    'area-h2':      'Tätig in der gesamten Tampa Bay Area',
    'area-body':    'ASCANIA ist Ihr lokaler Partner für Bodenbeläge, Malerarbeiten und Renovierung in der Tampa Bay Area. Unser Einzugsgebiet umfasst <strong>St. Petersburg</strong>, <strong>Clearwater</strong>, <strong>Dunedin</strong>, <strong>Safety Harbor</strong>, <strong>Largo</strong>, <strong>Tarpon Springs</strong>, <strong>Pinellas Park</strong>, <strong>Seminole</strong> sowie <strong>Tampa</strong> und <strong>Hillsborough County</strong>. Ob Eigentumswohnung am Wasser in St. Pete oder Einfamilienhaus in Dunedin — wir sind vor Ort und erscheinen, wenn wir es zusagen.',

    /* ABOUT */
    'about-eyebrow': 'Das Team',
    'about-h2':      'Die Person hinter ASCANIA',
    'about-name':    'Sebastian Loch — Gründer & Geschäftsführer',
    'about-p1':      'Sebastian bringt einen Hintergrund in Elektrotechnik und Bauprojektmanagement in jedes Projekt ein. Er gründete ASCANIA 2021 und zog 2026 nach Tampa Bay — heute arbeitet er direkt mit Hauseigentümern in Pinellas und Hillsborough County.',
    'about-p2':      'Er weiß, was Hauseigentümer wollen: jemanden, der pünktlich erscheint, das Budget ehrlich hält, klar kommuniziert — und Ihr Zuhause mit derselben Sorgfalt behandelt wie sein eigenes.',
    'about-p3':      'Vor Tampa Bay: Sebastian überwachte den vollständigen Ausbau eines Aparthotels mit 32 Einheiten in Europa — Koordination aller Gewerke, Netzwerkinfrastruktur, Kameratechnik und elektronische Zugangskontrolle vom Rohbau bis zur Abnahme.',
    'about-quote':   '„Wir behandeln jedes Zuhause wie unser eigenes. Das ist kein Slogan — so arbeiten wir."',

    /* TESTIMONIALS */
    'test-eyebrow': 'Kundenstimmen',
    'test-h2':      'Was unsere Kunden sagen',
    'test-ph1':     'Erste Kundenstimmen folgen in Kürze.',
    'test-ph2':     'Wir starten gerade in Tampa Bay durch — und würden Ihr Zuhause gerne zu einer unserer ersten Erfolgsgeschichten machen.',

    /* CONTACT */
    'contact-eyebrow': 'Kontakt',
    'contact-h2':      'Sprechen wir über Ihr Projekt',
    'contact-body':    'Bereit, Ihr Projekt stressfrei umzusetzen? Anrufen, SMS schreiben oder Formular senden — wir antworten innerhalb von 24 Stunden.',
    'label-phone':    'Telefon',
    'label-email':    'E-Mail',
    'label-web':      'Website',
    'qr-label':       'Kontakt speichern',
    'qr-sub':         'QR-Code scannen, um Sebastian in Kontakten zu speichern',
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
    'footer-cities':   'Tätig in: St. Petersburg · Clearwater · Dunedin · Safety Harbor · Largo · Tarpon Springs · Seminole · Tampa · Pinellas County',

    /* COOKIE */
    'cookie-text':    'Wir verwenden Cookies, um den Website-Traffic zu analysieren und Ihr Erlebnis zu verbessern. Mit „Akzeptieren" stimmen Sie der Verwendung von Analytics zu.',
    'cookie-accept':  'Akzeptieren',
    'cookie-decline': 'Ablehnen',

    /* REFERENCES PREVIEW */
    'ref-prev-eyebrow': 'Unsere Arbeit',
    'ref-prev-h2':  'Projekte & Erfahrung',
    'ref-p1-type':  'Gewerbe · Europa · Abgeschlossen',
    'ref-p1-title': 'Aparthotel · 32 Einheiten',
    'ref-p1-body':  'Vollständige Bauüberwachung — Gewerkekoordination, Trockenbau & Ausbau, Netzwerkinfrastruktur, Kameratechnik, elektronische Zugangskontrolle.',
    'ref-p2-type':  'Innenausbau · 32 Einheiten',
    'ref-p2-title': 'Vom Rohbau bis zur Übergabe',
    'ref-p2-body':  'Alle Einheiten vom Rohbauzustand bis zur Abnahme überwacht. Alle 32 Apartments fristgerecht und spezifikationskonform übergeben.',
    'ref-cta-h3':   'Ihr Zuhause könnte das nächste sein',
    'ref-cta-body': 'Wir nehmen gerade erste Projekte in Tampa Bay an. Werden Sie Teil der ASCANIA-Florida-Geschichte von Anfang an.',
    'ref-cta-btn':  'Projekt starten',
    'ref-view-all': 'Gesamtes Projekt ansehen',
    'ref-exp-h3':   'Nachgewiesene Erfahrung',
    'ref-exp-body': 'Vor Tampa Bay: Bauüberwachung eines Aparthotels mit 32 Einheiten in Europa — vollständige Gewerkekoordination, Netzwerkinfrastruktur, Kameratechnik und elektronische Zutrittskontrolle. Dieselben Standards. Neuer Standort.',

    /* REFERENCES PAGE */
    'ref-h1':   'Projekte & Referenzen',
    'ref-sub':  'Von der Planung bis zur Übergabe — Bauüberwachung, Gewerkekoordination und Renovierungsprojektmanagement.',
    'cs-tag-type':  'Gewerbebau',
    'cs-tag-loc':   'Europa · Abgeschlossen',
    'cs-tag-scope': 'Projektmanagement & Bauüberwachung',
    'cs-h2':        'Aparthotel · 32 Einheiten',
    'cs-intro':     'Vollständige Bauüberwachung eines Aparthotels mit 32 Einheiten — vom Rohbau bis zur betriebsbereiten Einheit. ASCANIA koordinierte alle Gewerke vor Ort, überwachte die Qualität in jeder Phase und leitete die Installation von Netzwerkinfrastruktur, Kameratechnik und elektronischer Zugangskontrolle im gesamten Gebäude.',
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
