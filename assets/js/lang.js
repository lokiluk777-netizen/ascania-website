/* ==========================================================
   ASCANIA — EN/DE Language Switcher
   ========================================================== */

const TRANSLATIONS = {
  en: {
    /* NAV */
    'nav-home':       'Home',
    'nav-process':    'How It Works',
    'nav-services':   'Services',
    'nav-why':        'Why ASCANIA',
    'nav-about':      'About',
    'nav-references': 'References',
    'nav-contact':    'Contact',
    'nav-cta':        'Get in Touch',

    /* HERO */
    'hero-badge':   'Est. 2021 · Serving Tampa Bay, FL',
    'hero-h1':      'We Manage Your Renovation. So You Don\'t Have To.',
    'hero-h2':      'Renovation & Project Management for Real Estate Investors & Property Managers in Tampa Bay, FL',
    'hero-body':    'Whether you own property locally in Tampa Bay or invest from abroad — ASCANIA renovates, coordinates, and delivers your project on time and on budget. One point of contact. Full transparency. No surprises.',
    'hero-cta1':    'Get in Touch',
    'hero-cta2':    'How It Works',

    /* PAIN POINTS */
    'pain-eyebrow': 'The Problem',
    'pain-h2':      'Sound Familiar?',
    'pain-1-title': '"I can\'t be there to check on the work"',
    'pain-1-body':  'You\'re in Europe or across the country. The contractor says everything\'s fine. But is it really?',
    'pain-2-title': '"The last renovation went over budget — again"',
    'pain-2-body':  'No clear cost tracking, no accountability. You find out when it\'s too late.',
    'pain-3-title': '"It was supposed to be done 6 weeks ago"',
    'pain-3-body':  'Every delay costs you rent, carrying costs, and nerves.',
    'pain-4-title': '"I can\'t get a straight answer from anyone on site"',
    'pain-4-body':  'Contractors don\'t call back. Nobody takes responsibility.',
    'pain-5-title': '"I manage 80 units — I can\'t babysit every renovation"',
    'pain-5-body':  'You need someone who runs the project, not someone you have to run.',
    'pain-transition': 'That\'s exactly why ASCANIA exists.',

    /* PROCESS */
    'process-eyebrow': 'The Process',
    'process-h2':      'How It Works',
    'process-sub':     'Simple. Transparent. Reliable.',
    'step1-h3':  'You Contact Us',
    'step1-body': 'Tell us about your property and your project. We respond within 24 hours — in English or German. No obligation, no sales pitch.',
    'step2-h3':  'We Build Your Plan',
    'step2-body': 'We assess the scope, handle the work we do in-house, and source licensed contractors for specialized trades. You get a clear budget and timeline. You approve. We execute.',
    'step3-h3':  'We Deliver. You Stay Informed.',
    'step3-body': 'Weekly photo updates, cost reports, and a direct line to Sebastian throughout the entire project. You always know what\'s happening — without having to ask.',

    /* SERVICES */
    'services-eyebrow': 'What We Do',
    'services-h2':      'We Manage. We Renovate.',
    'services-intro':   'Whether you\'re flipping a property in St. Petersburg, turning over a rental in Clearwater, or upgrading units across Pinellas County — ASCANIA handles your renovation from start to finish. We do the hands-on work ourselves where it counts, and coordinate licensed contractors for specialized trades. You always know who\'s doing what.',
    'tag-inhouse':  'In-house',
    'tag-coordinated': 'In-house + Coordination',
    'tag-flagship': '★ Core Service',
    's1-h3':   'Painting & Wallpapering',
    's1-body':  'Interior and exterior painting, wallpapering, and surface finishing. Done by our own team to German quality standards.',
    's2-h3':   'Drywall, Texture & Stucco',
    's2-body':  'Drywall installation and repair, texturing, and stucco work. Clean, precise, reliable.',
    's3-h3':   'Flooring',
    's3-body':  'Professional flooring installation — laminate, vinyl, hardwood, and more. (Tiling handled via our licensed partner network.)',
    's4-h3':   'Remodeling & Upgrades',
    's4-body':  'Kitchen and bathroom upgrades, room makeovers, and value-add renovations. We handle the cosmetic work and coordinate licensed trades where required.',
    's5-h3':   'Installation & Repairs',
    's5-body':  'Fixtures, fittings, minor repairs, and handyman services. The small things that make a property rent-ready.',
    's6-h3':   'Renovation Project Management',
    's6-body-l': 'The heart of ASCANIA. We manage your entire renovation — scoping, budgeting, scheduling, and supervising every licensed contractor (electrical, plumbing, HVAC, structural). One point of contact. Weekly updates. Full transparency.',
    's6-body-r': 'Especially designed for remote and international investors who can\'t be on-site. We protect your budget, keep the project on schedule, and keep you fully informed — every step of the way.',

    /* WHY ASCANIA */
    'why-eyebrow': 'Why Us',
    'why-h2':      'Why Investors & Property Managers Choose ASCANIA',
    'usp1-h3':   'German Quality. Delivered in Tampa Bay.',
    'usp1-body':  'Punctuality, precision, and accountability — these aren\'t buzzwords for us, they\'re the standard we were built on. ASCANIA brings European engineering discipline to every renovation project in Tampa Bay. Clear agreements, no excuses, and a job done right the first time.',
    'sub1-h4': 'Reliability',
    'sub1-body': 'We do what we say. Deadlines are commitments, not suggestions.',
    'sub2-h4': 'Transparency',
    'sub2-body': 'Weekly reports, cost breakdowns, photo updates. No surprises.',
    'sub3-h4': 'Quality',
    'sub3-body': 'We don\'t cut corners. Every stage is checked before the next begins.',
    'usp2-h3':   'Est. 2021 — Experience That Shows',
    'usp2-body':  'Over four years of experience in renovation management and project coordination — built in Europe, now delivering results in Tampa Bay.',
    'usp3-h3':   'In-House Team + Vetted Partners',
    'usp3-body':  'We do the hands-on work ourselves where it counts — and bring in licensed, insured contractors for specialized trades. Best of both worlds: direct quality control and full-scope capability.',
    'usp4-h3':   'Local. On the Ground.',
    'usp4-body':  'Based in Tampa Bay, active across St. Petersburg, Clearwater, Dunedin, Safety Harbor, Largo, and greater Tampa. We know the contractors, the permit process, and the neighborhoods.',
    'usp5-h3':   'German & English. No Barriers.',
    'usp5-body':  'European investor? We speak your language — literally. Full project communication in English and German. No misunderstandings, no lost in translation.',
    'usp6-h3':   'Investor Mindset',
    'usp6-body':  'We don\'t think like contractors. We think like investors. Every decision is driven by ROI, resale value, and rental yield.',

    /* SERVICE AREA */
    'area-eyebrow': 'Coverage',
    'area-h2':      'Serving the Entire Tampa Bay Area',
    'area-body':    'ASCANIA Renovation & Management is your local partner for renovation and project management across Tampa Bay. Our service area covers <strong>St. Petersburg</strong>, <strong>Clearwater</strong>, <strong>Dunedin</strong>, <strong>Safety Harbor</strong>, <strong>Largo</strong>, <strong>Tarpon Springs</strong>, <strong>Pinellas Park</strong>, <strong>Seminole</strong>, and the greater <strong>Tampa</strong> and <strong>Hillsborough County</strong> area. Whether your property is a waterfront condo on the Gulf Coast or a single-family home in an up-and-coming neighborhood — we\'re on the ground, so you don\'t have to be.',

    /* ABOUT */
    'about-eyebrow': 'The Team',
    'about-h2':      'The Person Behind ASCANIA',
    'about-name':    'Sebastian Loch — Founder & Managing Director',
    'about-p1':      'Sebastian brings a background in electrical engineering, construction project management, and real estate investment to every project. He founded ASCANIA in 2021 and relocated to Tampa Bay in 2026 — working directly with real estate investors, house flippers, short-term rental operators, and property managers across Pinellas and Hillsborough County.',
    'about-p2':      'He knows what investors need: someone on the ground who protects the budget, keeps contractors accountable, and communicates clearly — without excuses.',
    'about-p3':      'Before Tampa Bay: Sebastian supervised the full fit-out of a 32-unit apartment hotel in Europe — coordinating all trades, overseeing network infrastructure, security cameras, and electronic access control systems from rough-in to handover.',
    'about-quote':   '"I built ASCANIA for investors who are serious about their projects — and serious about their returns."',

    /* TESTIMONIALS */
    'test-eyebrow': 'Client Reviews',
    'test-h2':      'What Our Clients Say',
    'test-ph1':     'First client reviews coming soon.',
    'test-ph2':     'We are just getting started in Tampa Bay — and we\'d love your project to be one of our first success stories.',

    /* CONTACT */
    'contact-eyebrow': 'Get in Touch',
    'contact-h2':      'Let\'s Talk About Your Project',
    'contact-body':    'Ready to take the stress out of your next renovation? Whether you\'re calling from Tampa Bay or from Europe — reach out. We respond within 24 hours, in English or German.',
    'label-phone':    'Phone',
    'label-email':    'Email',
    'label-web':      'Website',
    'qr-label':       'Save Contact',
    'qr-sub':         'Scan to add Sebastian to your contacts',
    'f-name':         'Full Name',
    'f-email':        'Email Address',
    'f-phone':        'Phone (optional)',
    'f-type':         'Project Type',
    'f-type-ph':      'Select project type',
    'f-type-flip':    'Property Flip',
    'f-type-rental':  'Rental Turnover',
    'f-type-str':     'STR / Vacation Rental',
    'f-type-other':   'Other',
    'f-city':         'City / Neighborhood',
    'f-message':      'Tell us about your project',
    'f-submit':       'Send Message',
    'f-note':         'We respond within 24 hours · English & German',

    /* FOOTER */
    'footer-tagline':  'Renovation & Project Management · Tampa Bay, FL',
    'footer-legal':    'Ascania Consulting, Corp. · Est. 2021',
    'footer-nav-title': 'Navigation',
    'footer-connect-title': 'Connect',
    'footer-copy':     '© 2026 Ascania Consulting, Corp. All rights reserved.',
    'footer-cities':   'Serving: St. Petersburg · Clearwater · Dunedin · Safety Harbor · Largo · Tarpon Springs · Tampa · Pinellas County',

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
    'ref-cta-h3':   'Your Project Could Be Next',
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
    'nav-why':        'Warum ASCANIA',
    'nav-about':      'Über uns',
    'nav-references': 'Referenzen',
    'nav-contact':    'Kontakt',
    'nav-cta':        'Kontakt aufnehmen',

    /* HERO */
    'hero-badge':   'Seit 2021 · Tampa Bay, FL',
    'hero-h1':      'Wir managen Ihre Renovierung. Damit Sie es nicht müssen.',
    'hero-h2':      'Renovierungs- & Projektmanagement für Immobilieninvestoren und Property Manager in Tampa Bay, FL',
    'hero-body':    'Ob Sie Ihre Immobilie direkt in Tampa Bay betreuen oder aus dem Ausland investieren — ASCANIA renoviert, koordiniert und liefert Ihr Projekt termingerecht und im Budget. Ein Ansprechpartner. Volle Transparenz. Keine Überraschungen.',
    'hero-cta1':    'Kontakt aufnehmen',
    'hero-cta2':    'So funktioniert es',

    /* PAIN POINTS */
    'pain-eyebrow': 'Das Problem',
    'pain-h2':      'Kommt Ihnen das bekannt vor?',
    'pain-1-title': '„Ich kann nicht vor Ort sein und kontrollieren"',
    'pain-1-body':  'Sie sitzen in Europa, der Handwerker sagt alles läuft gut. Aber stimmt das wirklich?',
    'pain-2-title': '„Die letzte Renovierung hat das Budget gesprengt"',
    'pain-2-body':  'Keine klare Kostenkontrolle, keine Verantwortlichkeit. Sie erfahren es, wenn es zu spät ist.',
    'pain-3-title': '„Es sollte vor 6 Wochen fertig sein"',
    'pain-3-body':  'Jede Verzögerung kostet Mieteinnahmen, Haltekosten und Nerven.',
    'pain-4-title': '„Ich bekomme von niemandem eine klare Antwort"',
    'pain-4-body':  'Handwerker rufen nicht zurück. Niemand übernimmt Verantwortung.',
    'pain-5-title': '„Ich manage 80 Einheiten — ich kann nicht jede Renovierung selbst betreuen"',
    'pain-5-body':  'Sie brauchen jemanden, der das Projekt führt — nicht jemanden, den Sie führen müssen.',
    'pain-transition': 'Genau dafür gibt es ASCANIA.',

    /* PROCESS */
    'process-eyebrow': 'Der Ablauf',
    'process-h2':      'So funktioniert es',
    'process-sub':     'Einfach. Transparent. Verlässlich.',
    'step1-h3':  'Sie kontaktieren uns',
    'step1-body': 'Beschreiben Sie uns Ihre Immobilie und Ihr Projekt. Wir antworten innerhalb von 24 Stunden — auf Deutsch oder Englisch. Unverbindlich.',
    'step2-h3':  'Wir erstellen Ihren Plan',
    'step2-body': 'Wir bewerten den Umfang, führen Arbeiten aus, die wir selbst übernehmen, und beauftragen lizenzierte Handwerker für spezialisierte Gewerke. Sie erhalten ein klares Budget und einen Zeitplan. Sie genehmigen. Wir führen aus.',
    'step3-h3':  'Wir liefern. Sie bleiben informiert.',
    'step3-body': 'Wöchentliche Foto-Updates, Kostenberichte und ein direkter Draht zu Sebastian. Sie wissen immer, was passiert — ohne nachfragen zu müssen.',

    /* SERVICES */
    'services-eyebrow': 'Leistungen',
    'services-h2':      'Wir managen. Wir renovieren.',
    'services-intro':   'Ob Flip in St. Petersburg, Mieterwechsel in Clearwater oder Portfolio-Aufwertung in Pinellas County — ASCANIA übernimmt Ihre Renovierung von Anfang bis Ende. Einfache Arbeiten führen wir mit eigenem Team aus, spezialisierte Gewerke koordinieren wir über lizenzierte Partner. Sie wissen immer, wer was macht.',
    'tag-inhouse':     'Eigenausführung',
    'tag-coordinated': 'Eigen + Koordination',
    'tag-flagship':    '★ Kernleistung',
    's1-h3':   'Malen & Tapezieren',
    's1-body':  'Innen- und Außenanstrich, Tapezieren und Oberflächenveredelung. Ausgeführt von unserem eigenen Team nach deutschen Qualitätsstandards.',
    's2-h3':   'Trockenbau & Stuck',
    's2-body':  'Trockenbau, Reparaturen, Strukturputz und Stuck. Sauber, präzise, verlässlich.',
    's3-h3':   'Bodenbelag',
    's3-body':  'Professionelle Bodenverlegung — Laminat, Vinyl, Parkett und mehr. (Fliesenarbeiten über unser lizenziertes Partnernetzwerk.)',
    's4-h3':   'Umbau & Aufwertung',
    's4-body':  'Küchen- und Bad-Aufwertungen, Raumrenovierungen und wertsteigernde Maßnahmen. Wir übernehmen die kosmetischen Arbeiten und koordinieren lizenzierte Gewerke.',
    's5-h3':   'Montage & Reparaturen',
    's5-body':  'Armaturen, Einbauten, kleinere Reparaturen und Handwerkerleistungen. Die Details, die eine Immobilie vermietungsbereit machen.',
    's6-h3':   'Renovierungsprojektmanagement',
    's6-body-l': 'Das Herzstück von ASCANIA. Wir managen Ihre gesamte Renovierung — Planung, Budgetierung, Terminkoordination und Überwachung jedes lizenzierten Handwerkers (Elektrik, Sanitär, HVAC, Struktur). Ein Ansprechpartner. Wöchentliche Updates. Volle Transparenz.',
    's6-body-r': 'Besonders für Fernbesitzer und internationale Investoren: Wir schützen Ihr Budget, halten den Zeitplan ein und halten Sie vollständig informiert — Schritt für Schritt.',

    /* WHY ASCANIA */
    'why-eyebrow': 'Warum wir',
    'why-h2':      'Warum Investoren & Property Manager auf ASCANIA setzen',
    'usp1-h3':   'Deutsche Qualität. Geliefert in Tampa Bay.',
    'usp1-body':  'Pünktlichkeit, Präzision und Verlässlichkeit — das sind für uns keine Schlagworte, sondern der Standard, auf dem ASCANIA aufgebaut wurde. Klare Absprachen, keine Ausreden, und eine Arbeit, die beim ersten Mal richtig gemacht wird.',
    'sub1-h4': 'Verlässlichkeit',
    'sub1-body': 'Wir tun, was wir sagen. Termine sind Zusagen, keine Vorschläge.',
    'sub2-h4': 'Transparenz',
    'sub2-body': 'Wöchentliche Berichte, Kostenaufstellungen, Foto-Updates. Keine Überraschungen.',
    'sub3-h4': 'Qualität',
    'sub3-body': 'Wir machen keine Abstriche. Jede Phase wird geprüft, bevor die nächste beginnt.',
    'usp2-h3':   'Seit 2021 — Erfahrung, die man sieht',
    'usp2-body':  'Über vier Jahre Erfahrung im Renovierungsmanagement — aufgebaut in Europa, jetzt mit Ergebnissen in Tampa Bay.',
    'usp3-h3':   'Eigenes Team + geprüfte Partner',
    'usp3-body':  'Einfache Arbeiten führen wir mit eigenem Team aus — für spezialisierte Gewerke holen wir lizenzierte, versicherte Partner dazu. Das Beste aus beidem: direkte Qualitätskontrolle und volle Leistungsbreite.',
    'usp4-h3':   'Lokal. Vor Ort.',
    'usp4-body':  'In Tampa Bay ansässig, aktiv in St. Petersburg, Clearwater, Dunedin, Safety Harbor, Largo und der gesamten Tampa Bay Area. Wir kennen die Handwerker, die Genehmigungsprozesse und die Stadtteile.',
    'usp5-h3':   'Deutsch & Englisch. Keine Sprachbarriere.',
    'usp5-body':  'Europäischer Investor? Wir sprechen Ihre Sprache — buchstäblich. Vollständige Projektkommunikation auf Deutsch und Englisch. Keine Missverständnisse.',
    'usp6-h3':   'Investoren-Denken',
    'usp6-body':  'Wir denken wie Investoren, nicht wie Handwerker. Jede Entscheidung orientiert sich an ROI, Wiederverkaufswert und Mietrendite.',

    /* SERVICE AREA */
    'area-eyebrow': 'Einzugsgebiet',
    'area-h2':      'Tätig in der gesamten Tampa Bay Area',
    'area-body':    'ASCANIA ist Ihr lokaler Partner für Renovierung und Projektmanagement in der Tampa Bay Area. Unser Einzugsgebiet umfasst <strong>St. Petersburg</strong>, <strong>Clearwater</strong>, <strong>Dunedin</strong>, <strong>Safety Harbor</strong>, <strong>Largo</strong>, <strong>Tarpon Springs</strong>, <strong>Pinellas Park</strong>, <strong>Seminole</strong> sowie <strong>Tampa</strong> und <strong>Hillsborough County</strong>. Ob Waterfront-Eigentumswohnung am Golf oder Einfamilienhaus in einem aufstrebenden Stadtviertel — wir sind vor Ort, damit Sie es nicht sein müssen.',

    /* ABOUT */
    'about-eyebrow': 'Das Team',
    'about-h2':      'Die Person hinter ASCANIA',
    'about-name':    'Sebastian Loch — Gründer & Geschäftsführer',
    'about-p1':      'Sebastian bringt einen Hintergrund in Elektrotechnik, Bauprojektmanagement und Immobilieninvestitionen in jedes Projekt ein. Er gründete ASCANIA 2021 und zog 2026 nach Tampa Bay — er arbeitet direkt mit Investoren, Flippern, STR-Betreibern und Property Managern in Pinellas und Hillsborough County.',
    'about-p2':      'Er weiß, was Investoren brauchen: jemanden vor Ort, der das Budget schützt, Handwerker zur Verantwortung zieht und klar kommuniziert — ohne Ausreden.',
    'about-p3':      'Vor Tampa Bay: Sebastian überwachte den vollständigen Ausbau eines Aparthotels mit 32 Einheiten in Europa — Koordination aller Gewerke, Netzwerkinfrastruktur, Kameratechnik und elektronische Zugangskontrolle vom Rohbau bis zur Abnahme.',
    'about-quote':   '„Ich habe ASCANIA für Investoren gebaut, die ihre Projekte – und ihre Rendite – ernst nehmen."',

    /* TESTIMONIALS */
    'test-eyebrow': 'Kundenstimmen',
    'test-h2':      'Was unsere Kunden sagen',
    'test-ph1':     'Erste Kundenstimmen folgen in Kürze.',
    'test-ph2':     'Wir starten gerade in Tampa Bay durch — und würden Ihr Projekt gerne zu einer unserer ersten Erfolgsgeschichten machen.',

    /* CONTACT */
    'contact-eyebrow': 'Kontakt',
    'contact-h2':      'Sprechen wir über Ihr Projekt',
    'contact-body':    'Bereit, Ihre nächste Renovierung stressfrei zu gestalten? Ob aus Tampa Bay oder aus Europa — melden Sie sich. Wir antworten innerhalb von 24 Stunden, auf Deutsch oder Englisch.',
    'label-phone':    'Telefon',
    'label-email':    'E-Mail',
    'label-web':      'Website',
    'qr-label':       'Kontakt speichern',
    'qr-sub':         'QR-Code scannen, um Sebastian in Kontakten zu speichern',
    'f-name':         'Vor- und Nachname',
    'f-email':        'E-Mail-Adresse',
    'f-phone':        'Telefon (optional)',
    'f-type':         'Projekttyp',
    'f-type-ph':      'Projekttyp wählen',
    'f-type-flip':    'Immobilien-Flip',
    'f-type-rental':  'Mieterwechsel',
    'f-type-str':     'STR / Ferienvermietung',
    'f-type-other':   'Sonstiges',
    'f-city':         'Stadt / Stadtteil',
    'f-message':      'Beschreiben Sie Ihr Projekt',
    'f-submit':       'Nachricht senden',
    'f-note':         'Antwort innerhalb von 24 Stunden · Deutsch & Englisch',

    /* FOOTER */
    'footer-tagline':  'Renovierung & Projektmanagement · Tampa Bay, FL',
    'footer-legal':    'Ascania Consulting, Corp. · Gegr. 2021',
    'footer-nav-title': 'Navigation',
    'footer-connect-title': 'Kontakt & Social',
    'footer-copy':     '© 2026 Ascania Consulting, Corp. Alle Rechte vorbehalten.',
    'footer-cities':   'Tätig in: St. Petersburg · Clearwater · Dunedin · Safety Harbor · Largo · Tarpon Springs · Tampa · Pinellas County',

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
    'ref-cta-h3':   'Ihr Projekt könnte das nächste sein',
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
