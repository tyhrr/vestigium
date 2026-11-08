/**
 * VESTIGIUM 2.0 - LANGUAGE SWITCHER
 * Sistema de cambio de idioma suave y modular
 * Autor: Vestigium Team
 * Versión: 2.0
 */

'use strict';

/* =============================================================================
   CONFIGURACIÓN DEL LANGUAGE SWITCHER
   ============================================================================= */

const LANGUAGE_CONFIG = {
  // Idiomas disponibles
  languages: {
    en: {
      name: 'English',
      flag: '🇬🇧',
      locale: 'en-US'
    },
    hr: {
      name: 'Hrvatski',
      flag: '🇭🇷',
      locale: 'hr-HR'
    }
  },
  
  // Idioma por defecto
  defaultLanguage: 'en',
  
  // Configuración de localStorage
  storageKey: 'vestigium-language',
  
  // Configuración de animaciones
  animations: {
    fadeOut: 150,
    fadeIn: 200,
    slideDown: 300
  }
};

/* =============================================================================
   TRADUCCIONES COMPLETAS
   ============================================================================= */

const TRANSLATIONS = {
  en: {
    // Meta tags
    meta: {
      title: 'Vestigium - Ecological-Creative Association for Sustainable Communities',
      description: 'Vestigium is an association in Zagreb that improves community quality of life by promoting healthy and sustainable lifestyle through educational and ecological activities.'
    },
      // Navigation
    nav: {
      'community-center': 'Community Center',
      'who-are-we': 'Who are we?',
      'what-we-have-done': 'What we have done',
      'join-us': 'Join us / Become a member',
      news: 'News',
      calendar: 'Calendar',
      'zadruga-zelenica': 'Zadruga Zelenica',
      'find-us': 'Find us',
      'get-engaged': 'Get engaged',
      'be-volunteer': 'Be a Volunteer',
      esc: 'ESC (European Solidarity Corps)',
      gallery: 'Gallery',
      projects: 'Projects',
      erasmus: 'Erasmus+',
      'erasmus-youth': 'Youth Exchanges',
      'erasmus-training': 'Training Courses',
      'erasmus-strategic': 'Strategic Partnerships',
      'erasmus-capacity': 'Capacity Building',
      national: 'National',
      'previous-projects': 'Previous projects',
      activities: 'Activities',
      'frequent-activities': 'Frequent activities',
      'see-more': 'See more'
    },
    
    // Hero Section
    hero: {
      title: 'Building Sustainable Communities',
      subtitle: 'Vestigium is an ecological-creative association dedicated to improving the quality of life of our community, promoting a healthy and sustainable lifestyle for our future.',
      'btn-activities': 'See what\'s on',
      'btn-join': 'Get involved',
      'next-label': 'Every Saturday',
      'next-time': '9–11',
      'next-what': 'EKO PLAC farmers market',
      'next-where': 'Rudeška 142, Vrbani'
    },
    
    // Activities Section
    activities: {
      title: 'Our Activities',
      subtitle: 'We conduct over 1000 activities annually to educate, empower and create a resilient community.',
      education: {
        title: 'Education & Workshops',
        description: 'Workshops on urban gardening, composting, social permaculture, healthy cooking, sewing and relaxation for all ages.'
      },
      community: {
        title: 'Community Life',
        description: 'Farmers market, free library, poetry evenings, storytelling, swap shops and family gatherings.'
      },
      sustainability: {
        title: 'Sustainability',
        description: 'Community Supported Agriculture, zero-waste events, repair cafés, and promotion of small ethical local businesses.'
      },
      empowerment: {
        title: 'Empowerment',
        description: 'Women empowerment support, addiction prevention, sociocracy and Theatre of the Oppressed for social change.'
      }
    },
    
    // About Section
    about: {
      title: 'About Vestigium',
      text1: '<strong>Vestigium (lat. footprint)</strong> was born in 2011 by the initiative of six women who listened to the needs of their neighbors in the Vrbana area, Zagreb. We created a multifunctional space where initiatives can develop and flourish.',
      text2: 'As part of the <strong>Global Transition Movement for Sustainable Communities</strong>, we work to solve problems such as the growing distance between people, the lack of meeting and socializing places, and the exclusion of families and elderly residents.',
      text3: 'Since 2017 we are beneficiaries of institutional support from the National Foundation for Civil Society Development. In 2017 we were presented as an inspiring example "Changemakers" from Croatia, and in 2018 nominated among the top 30 projects for the "Social Marie Award" among 250 European socially innovative projects.'
    },    
    // Community & Projects (added)
    community: {
      title: 'Community Center',
      text: 'Vestigium is a community center in the hands of citizens. We organize a free library, creative workshops, healthy cooking, recycling and environmental care, lectures and presentations of different cultures. We support short supply chains through EKO PLAC every Saturday 9-11h, swap clothes monthly, and evening yoga/fitness/dance classes. Spaces are available for coworking, celebrations and promotions.',
      locations: 'We operate in two locations: <strong>Community Center Vrbani</strong>, Rudeška 142, and <strong>Cooperative Community Center Zelenica</strong>, Grančarska 2a, Brezovica.',
      vrbani: { title: 'Community Center Vrbani', desc: 'Rudeška 142, Zagreb. Free library, workshops, farmers market, swap shops and cultural events.' },
      brezovica: { title: 'Cooperative Center Zelenica', desc: 'Grančarska 2a, Brezovica. Cooperative hub for local food, culture and community initiatives.' }
    },
    zadruga: {
      title: 'Zadruga Zelenica',
      text1: 'The Zelenica platform was launched in 2016 to guide society from unsustainable to sustainable practices that support people, nature and fair distribution. It connects organic and ecological food producers with citizens.',
      text2: 'In 2021 Zelenica became a social cooperative, and in 2022 the Cooperative Community Center Brezovica opened. We continue gathering members and developing the audience.',
      watch: 'Watch video'
    },
    engaged: {
      title: 'Get involved',
      subtitle: 'Whether you live around the corner or are coming from abroad, there is a way to take part. Pick what fits you and write to us.',
      local: { title: 'Here in the neighbourhood', text: 'For people who live in Zagreb and want to help or belong.' },
      europe: { title: 'From abroad: European programmes', text: "Through the EU's Erasmus+ and European Solidarity Corps programmes, people from other countries can volunteer, learn and work with us." },
      volunteer: { title: 'Volunteer', who: 'For anyone, any age', desc: 'Lend a hand at the EKO PLAC, workshops, events, the garden or behind the scenes. Come as often as you like.', cta: 'Write to us' },
      member: { title: 'Become a member', who: 'For neighbours who want to belong', desc: 'Members shape the programme, propose and run their own activities and keep the association going.', cta: 'Write to us' },
      esc: { title: 'European Solidarity Corps', who: 'For young people aged 18–30', desc: 'Volunteer with us in Zagreb on community, ecology and culture projects, with travel and accommodation covered by the programme.', cta: 'Write to us' },
      exchange: { title: 'Erasmus+ youth exchanges & training', who: 'For young people and youth workers', desc: 'Short international projects where groups from different countries meet, learn and create together, in Croatia or with our partners abroad.', cta: 'Write to us' },
      partners: { title: 'Partner with us', who: 'For organisations and schools', desc: 'Plan a joint Erasmus+ project or a long-term partnership to share methods and strengthen our communities.', cta: 'Write to us' },
      note: 'Not sure which one fits? Tell us a little about yourself:'
    },
    gallery: {
      metaTitle: 'Gallery - Vestigium',
      title: 'Gallery',
      text: 'Moments from our community activities, workshops and events.',
      lead: 'Life at Vestigium in pictures: the Saturday market, workshops, swaps, evenings in the library and days in the Zelenica garden. Everything here is made by neighbours, for neighbours.',
      stories: {
        title: 'What happens at Vestigium',
        see: 'See photos',
        market: { title: 'EKO PLAC', meta: 'Every Saturday 9–11 · Rudeška 142', text: 'Small local and organic farmers sell directly to the neighbourhood: bread, cheese, honey, seasonal vegetables and flowers.' },
        workshops: { title: 'Workshops', meta: 'Sewing, weaving, cooking, art', text: 'Neighbours teach neighbours: from the little sewing school and textile upcycling to healthy cooking and painting.' },
        community: { title: 'Community life', meta: 'Free library · swaps · game nights', text: 'A living room for the neighbourhood: book exchange, monthly clothes swaps, board games, concerts and talks.' },
        outdoors: { title: 'Zelenica & outdoors', meta: 'Brezovica · gardens · walks', text: 'The cooperative garden in Brezovica, evenings by the fire, flower beds, murals and walks in nature.' }
      },
      photos: { title: 'Photos', count: 'photos', more: 'Show more photos' },
      filter: { all: 'All', market: 'Market', workshops: 'Workshops', community: 'Community', outdoors: 'Outdoors', people: 'Workshop leaders' },
      facebook: {
        title: 'Latest on Facebook',
        text: 'Our newest posts, with likes, comments and shares, straight from the Udruga Vestigium page. Follow us to hear about workshops and events first.',
        follow: 'Follow us on Facebook'
      }
    },
    projects: {
      title: 'Projects',
      subtitle: 'Our current and recent projects supported by the City of Zagreb, EU and foundations.',
      sustainable: { title: 'Sustainable Future - Path to Healthy Food', desc: 'Regenerative agriculture, short supply chains and school gardens. Education on healthy soil and biodiversity.' },
      culture: { title: 'Culture in Brezovica', desc: 'Performances, concerts, creative workshops and cultural evenings connecting residents, artists and schools.' },
      kreaktivno: { title: 'KreAktivno 2026', desc: 'Erasmus+ adult mobility for capacity building at ufaFabrik (Berlin) and Center Rog (Ljubljana).' },
      livinglab: { title: 'Living Lab - Just and Regenerative Community', desc: 'Community activities, gardening club, clothing swaps and textile upcycling in Vrbani and Brezovica.' },
      institutional: { title: 'Institutional Support for Civil Society', desc: 'Capacity building, program development and digitalization supported by the National Foundation.' },
      regenerative: { title: 'Regenerative Communities Fund', desc: 'Community-led regeneration supported by ECOLISE and Funding Fairer Futures.' }
    },
    national: {
      title: 'National',
      subtitle: 'Projects supported by the City of Zagreb and national institutions.',
      kultura: { title: 'Culture in Brezovica', desc: 'Cultural events on the outskirts of the city.' },
      zelenica: { title: 'Zelenica', desc: 'Green exchange platform and cooperative development.' }
    },
    previous: {
      title: 'Previous projects',
      subtitle: 'A selection of past initiatives and collaborations.',
      emotional: { title: 'Emotional and Artificial Intelligence', desc: 'Erasmus+ training course on media literacy and emotional intelligence.' },
      grassy: { title: 'Grassy Perspectives', desc: 'Urban biodiversity and participatory climate practices in Osijek.' },
      value: { title: 'Value of Waste', desc: 'Reducing textile waste through upcycling initiatives.' }
    },
    calendar: {
      title: 'Calendar',
      text: 'All activities in Vrbani and Brezovica, in one calendar.',
      vrbani: 'Community Center Vestigium - Vrbani',
      brezovica: 'Cooperative Center Zelenica - Brezovica',
      open: 'Open in Google Calendar'
    },
    upcoming: {
      title: 'Coming up',
      all: 'Full calendar',
      allDay: 'All day'
    },
    findus: {
      title: 'Find us',
      text: 'Contact us and visit our centers.'
    },
    // CTA Section
    cta: {
      title: 'Ready to be part of the change?',
      text: 'Join our community of volunteers and members working together to create a more sustainable and connected future.',
      btn: 'Get Involved'
    },    // Footer
    footer: {
      title: 'Vestigium',
      description: 'Ecological-creative association improving community quality of life through sustainable initiatives and education in Zagreb.',
      achievement1: '🏆 Changemakers Croatia 2017',
      achievement2: '🌟 Social Marie Award Finalist 2018',      links: 'Links',
      home: 'Home',
      activities: 'Activities',
      about: 'About us',
      news: 'News',
      'get-involved': 'Get involved',
      involvement: {
        title: 'Get Involved',
        text: 'Join as a volunteer or member and help build a more resilient community.',
        item1: 'Event volunteering',
        item2: 'Workshops and education',
        item3: 'Community agriculture',
        item4: 'Organizational support'
      },      contact: {
        title: 'Contact'
      },      location: {
        label: 'Location:',
        address: 'Grančarska 2a, Brezovica',
        country: 'Croatia'
      },movement: 'Global Transition Movement',
      copyright: '&copy; {year} Vestigium Association.',
      tech: 'Building sustainable communities since 2011 • Over 1000 annual activities',
      visitors: {
        label: 'Visitors:',
        count: 'visits'
      }
    },
      // Language Switcher
    lang: {
      current: 'Current language',
      select: 'Select language'
    },
    
    // News Page
    news: {
      meta: {
        title: 'News - Vestigium Ecological-Creative Association',
        description: 'Stay updated with the latest news and activities from Vestigium ecological-creative association in Zagreb.'
      },
      hero: {
        title: 'Latest News',
        subtitle: 'Stay updated with our latest activities, events, and community initiatives'
      },
      facebook: {
        title: 'From our Facebook',
        subtitle: 'Connect with our community through our latest social media updates',
        loading: 'Loading latest posts...',
        'view-post': 'View on Facebook',
        'error-title': 'Unable to load Facebook posts',
        'error-text': 'Please check your internet connection or try again later.',
        'error-help': 'Please check the configuration and try again.'
      },
      gallery: {
        title: 'Recent Activities',
        subtitle: 'Browse through our recent community activities and events',
        loading: 'Loading gallery...'
      },
      cta: {
        title: 'Stay Connected',
        text: 'Follow us on social media to stay updated with our latest activities and join our community events',
        facebook: 'Follow on Facebook',
        join: 'Join Us'
      }
    }
  },
  hr: {
    // Meta tags
    meta: {
      title: 'Vestigium - Ekolosko-Kreativna Udruga za Održive Zajednice',
      description: 'Vestigium je udruga u Zagrebu koja poboljšava kvalitetu života zajednice promovira zdrav i održiv način života kroz edukacijske i ekološke aktivnosti.'
    },
      // Navigation
    nav: {
      'community-center': 'Društveni Centar',
      'who-are-we': 'Tko smo mi?',
      'what-we-have-done': 'Što smo napravili',
      'join-us': 'Pridružite nam se / Postanite član',
      news: 'Vijesti',
      calendar: 'Kalendar',
      'zadruga-zelenica': 'Zadruga Zelenica',
      'find-us': 'Pronađite nas',
      'get-engaged': 'Uključite se',
      'be-volunteer': 'Budite volonter',
      esc: 'ESK (Europski Solidarni Korpus)',
      gallery: 'Galerija',
      projects: 'Projekti',
      erasmus: 'Erasmus+',
      'erasmus-youth': 'Razmjene Mladih',
      'erasmus-training': 'Tečajevi Obuke',
      'erasmus-strategic': 'Strateška Partnerstva',
      'erasmus-capacity': 'Jačanje Kapaciteta',
      national: 'Nacionalni',
      'previous-projects': 'Prethodni projekti',
      activities: 'Aktivnosti',
      'frequent-activities': 'Česte aktivnosti',
      'see-more': 'Pogledaj više'
    },
    
    // Hero Section
    hero: {
      title: 'Izgradnja Održivih Zajednica',
      subtitle: 'Vestigium je ekološko-kreativna udruga posvećena poboljšanju kvalitete života naše zajednice, promovira zdrav i održiv način života za našu budućnost.',
      'btn-activities': 'Pogledaj raspored',
      'btn-join': 'Uključi se',
      'next-label': 'Svake subote',
      'next-time': '9–11 h',
      'next-what': 'EKO PLAC',
      'next-where': 'Rudeška 142, Vrbani'
    },
    
    // Activities Section
    activities: {
      title: 'Naše Aktivnosti',
      subtitle: 'Provodimo preko 1000 aktivnosti godišnje za obrazovanje, osnaživanje i stvaranje otporne zajednice.',
      education: {
        title: 'Edukacija i Radionice',
        description: 'Radionice o gradskom vrtlarstvu, kompostiranju, socijalnoj permakulturi, zdravom kuhanju, šivanju i opuštanju za sve uzraste.'
      },
      community: {
        title: 'Život Zajednice',
        description: 'Tržnica poljoprivrednika, besplatna knjižnica, večeri poezije, pripovijedanje, razmjene i obiteljski susreti.'
      },
      sustainability: {
        title: 'Održivost',
        description: 'Poljoprivreda podržana zajednicom, zero-waste događaji, repair caféi i promocija malih etičkih lokalnih poduzeća.'
      },
      empowerment: {
        title: 'Osnaživanje',
        description: 'Podrška osnaživanju žena, prevencija ovisnosti, sociokracija i Kazalište potlačenih za društvene promjene.'
      }
    },
    
    // About Section  
    about: {
      title: 'O Vestigiumu',
      text1: '<strong>Vestigium (lat. trag)</strong> nastao je 2011. godine inicijativom šest žena koje su slušale potrebe svojih susjeda u području Vrbane u Zagrebu. Stvorili smo multifunkcionalni prostor gdje se inicijative mogu razvijati i cvjetati.',
      text2: 'Kao dio <strong>Globalnog Tranzicijskog Pokreta za Održive Zajednice</strong>, radimo na rješavanju problema poput rastućeg distanciranja između ljudi, nedostajanja mjesta za druženje i socijalizaciju te isključivanja obitelji i starijih stanovnika.',
      text3: 'Od 2017. godine korisnici smo institucionalne podrške Nacionalne zaklade za razvoj civilnoga društva. 2017. godine predstavljeni smo kao inspirativan primjer "Changemakers" iz Hrvatske, a 2018. nominirani među 30 najboljih projekata za "Social Marie Award" među 250 europskih socijalno inovativnih projekata.'
    },    
    // Community & Projects (added)
    community: {
      title: 'Društveni centar',
      text: 'Vestigium je društveni centar u rukama građana. Organiziramo slobodnu knjižnicu, kreativne radionice, kuhanje, recikliranje i brigu o okolišu, predavanja i predstavljanja raznih kultura. Podržavamo kratke lance opskrbe kroz EKO PLAC svake subote 9-11h, mjesečnu razmjenu odjeće te večernje satove yoge/fitnesa/plesa. Prostori su dostupni za coworking, proslave i promocije.',
      locations: 'Djelujemo na dvije lokacije: <strong>Društveni centar Vrbani</strong>, Rudeška 142, i <strong>Zadružni društveni centar Zelenica</strong>, Grančarska 2a, Brezovica.',
      vrbani: { title: 'Društveni centar Vrbani', desc: 'Rudeška 142, Zagreb. Slobodna knjižnica, radionice, tržnica, razmjena odjeće i kulturna događanja.' },
      brezovica: { title: 'Zadružni centar Zelenica', desc: 'Grančarska 2a, Brezovica. Zadružno središte za lokalnu hranu, kulturu i inicijative zajednice.' }
    },
    zadruga: {
      title: 'Zadruga Zelenica',
      text1: 'Platforma Zelenica pokrenuta je 2016. kako bi usmjerila društvo od neodrživih prema održivim praksama koje podupiru ljude, prirodu i pravednu raspodjelu. Povezuje ekološke proizvođače hrane s građanima.',
      text2: '2021. Zelenica je postala društvena zadruga, a 2022. otvoren je Zadružni društveni centar Brezovica. Nastavljamo okupljati članove i razvijati publiku.',
      watch: 'Pogledaj video'
    },
    engaged: {
      title: 'Uključi se',
      subtitle: 'Bilo da živiš iza ugla ili dolaziš iz inozemstva, postoji način da sudjeluješ. Odaberi što ti odgovara i javi nam se.',
      local: { title: 'Ovdje u kvartu', text: 'Za one koji žive u Zagrebu i žele pomoći ili postati dio zajednice.' },
      europe: { title: 'Iz inozemstva: europski programi', text: 'Kroz EU programe Erasmus+ i Europske snage solidarnosti ljudi iz drugih zemalja mogu volontirati, učiti i raditi s nama.' },
      volunteer: { title: 'Volontiraj', who: 'Za sve, bez obzira na dob', desc: 'Pomozi na EKO PLACU, radionicama, događanjima, u vrtu ili iza kulisa. Dođi koliko često želiš.', cta: 'Javi nam se' },
      member: { title: 'Postani član', who: 'Za susjede koji žele pripadati', desc: 'Članovi oblikuju program, predlažu i vode vlastite aktivnosti i održavaju udrugu živom.', cta: 'Javi nam se' },
      esc: { title: 'Europske snage solidarnosti', who: 'Za mlade od 18 do 30 godina', desc: 'Volontiraj s nama u Zagrebu na projektima zajednice, ekologije i kulture, uz putne troškove i smještaj koje pokriva program.', cta: 'Javi nam se' },
      exchange: { title: 'Erasmus+ razmjene mladih i tečajevi', who: 'Za mlade i osobe koje rade s mladima', desc: 'Kratki međunarodni projekti u kojima se grupe iz različitih zemalja susreću, uče i stvaraju zajedno, u Hrvatskoj ili kod naših partnera u inozemstvu.', cta: 'Javi nam se' },
      partners: { title: 'Surađuj s nama', who: 'Za organizacije i škole', desc: 'Isplanirajmo zajednički Erasmus+ projekt ili dugoročno partnerstvo za razmjenu metoda i jačanje naših zajednica.', cta: 'Javi nam se' },
      note: 'Niste sigurni što vam odgovara? Napišite nam nešto o sebi:'
    },
    gallery: {
      metaTitle: 'Galerija - Vestigium',
      title: 'Galerija',
      text: 'Trenuci iz naših aktivnosti, radionica i događanja.',
      lead: 'Život Vestigiuma u slikama: subotnji plac, radionice, razmjene, večeri u knjižnici i dani u vrtu Zelenice. Sve ovo stvaraju susjedi za susjede.',
      stories: {
        title: 'Što se događa u Vestigiumu',
        see: 'Pogledaj fotografije',
        market: { title: 'EKO PLAC', meta: 'Svake subote 9–11 h · Rudeška 142', text: 'Mali lokalni i ekološki proizvođači prodaju izravno kvartu: kruh, sir, med, sezonsko povrće i cvijeće.' },
        workshops: { title: 'Radionice', meta: 'Šivanje, pletenje, kuhanje, umjetnost', text: 'Susjedi uče susjede: od male škole šivanja i prenamjene tekstila do zdravog kuhanja i slikanja.' },
        community: { title: 'Život zajednice', meta: 'Slobodna knjižnica · razmjene · večeri igara', text: 'Dnevni boravak kvarta: razmjena knjiga, mjesečne razmjene odjeće, društvene igre, koncerti i razgovori.' },
        outdoors: { title: 'Zelenica i priroda', meta: 'Brezovica · vrtovi · šetnje', text: 'Zadružni vrt u Brezovici, večeri uz vatru, cvjetnjaci, murali i šetnje prirodom.' }
      },
      photos: { title: 'Fotografije', count: 'fotografija', more: 'Prikaži još fotografija' },
      filter: { all: 'Sve', market: 'Plac', workshops: 'Radionice', community: 'Zajednica', outdoors: 'Priroda', people: 'Voditelji radionica' },
      facebook: {
        title: 'Najnovije na Facebooku',
        text: 'Naše najnovije objave, s reakcijama, komentarima i dijeljenjima, izravno sa stranice Udruge Vestigium. Pratite nas i prvi saznajte za radionice i događanja.',
        follow: 'Pratite nas na Facebooku'
      }
    },
    projects: {
      title: 'Projekti',
      subtitle: 'Naši aktualni i nedavni projekti uz podršku Grada Zagreba, EU i zaklada.',
      sustainable: { title: 'Održiva budućnost - put do zdrave hrane', desc: 'Regenerativna poljoprivreda, kratki lanci opskrbe i školski vrtovi. Edukacija o zdravom tlu i bioraznolikosti.' },
      culture: { title: 'Kultura u Brezovici', desc: 'Predstave, koncerti, kreativne radionice i kulturne večeri koje povezuju stanovnike, umjetnike i škole.' },
      kreaktivno: { title: 'KreAktivno 2026', desc: 'Erasmus+ mobilnost za odrasle za jačanje kapaciteta u ufaFabrik (Berlin) i Center Rog (Ljubljana).' },
      livinglab: { title: 'Living Lab - pravedna i regenerativna zajednica', desc: 'Aktivnosti zajednice, vrtlarski klub, razmjena odjeće i upcycling tekstila u Vrbanima i Brezovici.' },
      institutional: { title: 'Institucionalna podrška civilnom društvu', desc: 'Jačanje kapaciteta, razvoj programa i digitalizacija uz podršku Nacionalne zaklade.' },
      regenerative: { title: 'Fond regenerativnih zajednica', desc: 'Regeneracija vođena zajednicom uz podršku ECOLISE i Funding Fairer Futures.' }
    },
    national: {
      title: 'Nacionalno',
      subtitle: 'Projekti uz podršku Grada Zagreba i nacionalnih institucija.',
      kultura: { title: 'Kultura u Brezovici', desc: 'Kulturna događanja na rubovima grada.' },
      zelenica: { title: 'Zelenica', desc: 'Platforma zelene razmjene i razvoj zadruge.' }
    },
    previous: {
      title: 'Prethodni projekti',
      subtitle: 'Odabir prošlih inicijativa i suradnji.',
      emotional: { title: 'Emocionalna i umjetna inteligencija', desc: 'Erasmus+ tečaj o medijskoj pismenosti i emocionalnoj inteligenciji.' },
      grassy: { title: 'Travnate perspektive', desc: 'Urbana bioraznolikost i participativne klimatske prakse u Osijeku.' },
      value: { title: 'Vrijednost otpada', desc: 'Smanjenje tekstilnog otpada kroz upcycling inicijative.' }
    },
    calendar: {
      title: 'Kalendar',
      text: 'Sve aktivnosti na Vrbanima i u Brezovici, u jednom kalendaru.',
      vrbani: 'Društveni centar Vestigium - Vrbani',
      brezovica: 'Zadružni centar Zelenica - Brezovica',
      open: 'Otvori u Google kalendaru'
    },
    upcoming: {
      title: 'Uskoro',
      all: 'Cijeli kalendar',
      allDay: 'Cijeli dan'
    },
    findus: {
      title: 'Pronađite nas',
      text: 'Kontaktirajte nas i posjetite naše centre.'
    },
    // CTA Section
    cta: {
      title: 'Spremni ste biti dio promjene?',
      text: 'Pridružite se našoj zajednici volontera i članova koji zajedno rade na stvaranju održivije i povezanije budućnosti.',
      btn: 'Uključite Se'
    },    // Footer
    footer: {
      title: 'Vestigium',
      description: 'Ekolosko-kreativna udruga koja poboljšava kvalitetu života zajednice kroz održive inicijative i edukaciju u Zagrebu.',
      achievement1: '🏆 Changemakers Hrvatska 2017',
      achievement2: '🌟 Social Marie Award Finalist 2018',      links: 'Linkovi',
      home: 'Početna',
      activities: 'Aktivnosti',
      about: 'O nama',
      news: 'Vijesti',
      'get-involved': 'Uključite se',
      involvement: {
        title: 'Uključite Se',
        text: 'Pridružite se kao volonter ili član i pomognite izgraditi otporniju zajednicu.',
        item1: 'Volontiranje na događajima',
        item2: 'Radionice i edukacija',
        item3: 'Poljoprivreda zajednice',
        item4: 'Organizacijska podrška'
      },      contact: {
        title: 'Kontakt'
      },      location: {
        label: 'Lokacija:',
        address: 'Grančarska 2a, Brezovica',
        country: 'Hrvatska'
      },movement: 'Globalni Tranzicijski Pokret',
      copyright: '&copy; {year} Udruga Vestigium.',
      tech: 'Izgradnja održivih zajednica od 2011. • Preko 1000 godišnjih aktivnosti',
      visitors: {
        label: 'Posjetitelji:',
        count: 'posjeta'
      }
    },
      // Language Switcher
    lang: {
      current: 'Trenutni jezik',
      select: 'Odaberite jezik'
    },
    
    // News Page
    news: {
      meta: {
        title: 'Vijesti - Vestigium Ekolosko-Kreativna Udruga',
        description: 'Budite u tijeku s najnovijim vijestima i aktivnostima Vestigium ekološko-kreativne udruge u Zagrebu.'
      },
      hero: {
        title: 'Najnovije Vijesti',
        subtitle: 'Budite u tijeku s našim najnovijim aktivnostima, događajima i inicijativama zajednice'
      },
      facebook: {
        title: 'S našeg Facebooka',
        subtitle: 'Povežite se s našom zajednicom kroz naše najnovije objave na društvenim mrežama',
        loading: 'Učitavanje najnovijih objava...',
        'view-post': 'Pogledaj na Facebooku',
        'error-title': 'Nije moguće učitati Facebook objave',
        'error-text': 'Molimo provjerite internetsku vezu ili pokušajte kasnije.',
        'error-help': 'Molimo provjerite konfiguraciju i pokušajte ponovno.'
      },
      gallery: {
        title: 'Nedavne Aktivnosti',
        subtitle: 'Pregledajte naše nedavne aktivnosti i događaje zajednice',
        loading: 'Učitavanje galerije...'
      },
      cta: {
        title: 'Ostanite Povezani',
        text: 'Pratite nas na društvenim mrežama kako biste ostali u tijeku s našim najnovijim aktivnostima i pridružili se događajima zajednice',
        facebook: 'Pratite na Facebooku',
        join: 'Pridružite Nam Se'
      }
    }
  }
};

/* =============================================================================
   CLASE PRINCIPAL - LANGUAGE SWITCHER
   ============================================================================= */

class LanguageSwitcher {
  constructor() {
    this.currentLanguage = this.getStoredLanguage() || LANGUAGE_CONFIG.defaultLanguage;
    this.translations = TRANSLATIONS;
    this.isInitialized = false;
    this.animationInProgress = false;
    this.boundEvents = []; // Para rastrear eventos vinculados
  }/**
   * Inicializar el Language Switcher
   */
  init() {
    if (this.isInitialized) return;

    
    try {
      this.updateHtmlLang();
      this.createLanguageSelector();
      this.translatePage();
      this.bindEvents();
      this.isInitialized = true;
      
    } catch (error) {
    }
  }

  /**
   * Obtener idioma guardado en localStorage
   */
  getStoredLanguage() {
    try {
      return localStorage.getItem(LANGUAGE_CONFIG.storageKey);
    } catch (error) {
      return null;
    }
  }

  /**
   * Guardar idioma en localStorage
   */
  setStoredLanguage(language) {
    try {
      localStorage.setItem(LANGUAGE_CONFIG.storageKey, language);
    } catch (error) {
    }
  }

  /**
   * Actualizar atributo lang del HTML
   */
  updateHtmlLang() {
    document.documentElement.lang = LANGUAGE_CONFIG.languages[this.currentLanguage].locale || this.currentLanguage;
  }

  /**
   * Crear selector de idioma en el header
   */
  createLanguageSelector() {
    const header = document.querySelector('.header__top-row');
    if (!header) {
      return;
    }

    // Verificar si ya existe
    const existingSelector = header.querySelector('.language-selector');
    if (existingSelector) {
      existingSelector.remove();
    }

    // Crear el selector
    const selectorHTML = this.generateSelectorHTML();
    header.insertAdjacentHTML('beforeend', selectorHTML);
    const _sel = header.querySelector('.language-selector');
    if (_sel) _sel.addEventListener('click', (e) => e.stopPropagation());
    
    // Insertado al final del top-row (derecha)
  }

  /**
   * Generar HTML del selector de idioma
   */
  generateSelectorHTML() {
    const currentLang = LANGUAGE_CONFIG.languages[this.currentLanguage];
    const otherLanguages = Object.entries(LANGUAGE_CONFIG.languages)
      .filter(([code]) => code !== this.currentLanguage);

    return `
      <div class="language-selector">
        <button class="language-selector__toggle" 
                aria-label="${this.t('lang.current')}: ${currentLang.name}" 
                aria-expanded="false"
                aria-haspopup="true">
          <span class="language-selector__flag">${currentLang.flag}</span>
          <span class="language-selector__current">${currentLang.name}</span>
          <svg class="language-selector__icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 11L3 6h10l-5 5z"/>
          </svg>
        </button>
        <div class="language-selector__menu" role="menu">
          ${otherLanguages.map(([code, lang]) => `
            <button class="language-selector__option" 
                    data-lang="${code}" 
                    role="menuitem"
                    aria-label="${this.t('lang.select')}: ${lang.name}">
              <span class="language-selector__flag">${lang.flag}</span>
              <span class="language-selector__name">${lang.name}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }  /**
   * Limpiar eventos anteriores
   */
  unbindEvents() {
    // Remover listeners globales
    this.boundEvents.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });
    this.boundEvents = [];
  }
  /**
   * Vincular eventos del selector
   */
  bindEvents() {
    // Limpiar eventos anteriores primero
    this.unbindEvents();
    
    const toggle = document.querySelector('.language-selector__toggle');
    const menu = document.querySelector('.language-selector__menu');
    const options = document.querySelectorAll('.language-selector__option');

    if (!toggle || !menu) {
      return;
    }

    // Toggle del menú
    const toggleHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggleLanguageMenu();
    };
    toggle.addEventListener('click', toggleHandler);    // Selección de idioma
    options.forEach((option, index) => {
      const optionHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const selectedLang = option.dataset.lang;
        
        if (selectedLang && selectedLang !== this.currentLanguage) {
          
          // Cambio de idioma inmediato (sin async/await para simplificar)
          this.changeLanguageSmooth(selectedLang)
            .then(success => {
              if (success) {
              } else {
              }
            })
            .catch(error => {
            });
        } else {
        }
        
        this.closeLanguageMenu();
      };
      
      option.addEventListener('click', optionHandler);
    });

    // Cerrar menú al hacer clic fuera
    const outsideClickHandler = (e) => {
      if (!e.target.closest('.language-selector')) {
        this.closeLanguageMenu();
      }
    };
    document.addEventListener('click', outsideClickHandler);
    this.boundEvents.push({ element: document, event: 'click', handler: outsideClickHandler });

    // Navegación por teclado
    this.bindKeyboardEvents(toggle, menu, options);
  }

  /**
   * Vincular eventos de teclado
   */
  bindKeyboardEvents(toggle, menu, options) {
    toggle.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          this.toggleLanguageMenu();
          break;
        case 'ArrowDown':
          e.preventDefault();
          this.openLanguageMenu();
          options[0]?.focus();
          break;
        case 'Escape':
          this.closeLanguageMenu();
          break;
      }
    });

    options.forEach((option, index) => {
      option.addEventListener('keydown', (e) => {
        switch (e.key) {
          case 'Enter':
          case ' ':
            e.preventDefault();
            option.click();
            break;
          case 'ArrowDown':
            e.preventDefault();
            options[(index + 1) % options.length].focus();
            break;
          case 'ArrowUp':
            e.preventDefault();
            options[index === 0 ? options.length - 1 : index - 1].focus();
            break;
          case 'Escape':
            this.closeLanguageMenu();
            toggle.focus();
            break;
        }
      });
    });
  }

  /**
   * Abrir/cerrar menú de idiomas
   */
  toggleLanguageMenu() {
    const menu = document.querySelector('.language-selector__menu');
    const isOpen = menu?.classList.contains('language-selector__menu--open');
    
    if (isOpen) {
      this.closeLanguageMenu();
    } else {
      this.openLanguageMenu();
    }
  }

  /**
   * Abrir menú de idiomas
   */
  openLanguageMenu() {
    const toggle = document.querySelector('.language-selector__toggle');
    const menu = document.querySelector('.language-selector__menu');
    
    if (!toggle || !menu) return;

    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.add('language-selector__menu--open');
    menu.setAttribute('aria-hidden', 'false');
  }

  /**
   * Cerrar menú de idiomas
   */
  closeLanguageMenu() {
    const toggle = document.querySelector('.language-selector__toggle');
    const menu = document.querySelector('.language-selector__menu');
    
    if (!toggle || !menu) return;

    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('language-selector__menu--open');
    menu.setAttribute('aria-hidden', 'true');
  }  /**
   * Cambiar idioma con animación suave
   */
  async changeLanguageSmooth(language) {
    
    // Validaciones iniciales
    if (this.animationInProgress) {
      return false;
    }
    
    if (!this.translations[language]) {
      return false;
    }

    if (language === this.currentLanguage) {
      return false;
    }

    
    // Guardar idioma anterior antes de cambiarlo
    const previousLanguage = this.currentLanguage;
    
    this.animationInProgress = true;

    try {
      // Fase 1: Fade out del contenido
      await this.fadeOutContent();
      
      // Fase 2: Cambiar idioma
      this.currentLanguage = language;
      this.setStoredLanguage(language);
      this.updateHtmlLang();
      
      // Fase 3: Actualizar contenido
      this.translatePage();
      this.updateLanguageSelector();
      
      // Fase 4: Fade in del contenido
      await this.fadeInContent();
      
      // Emitir evento personalizado con el idioma anterior correcto
      this.dispatchLanguageChangeEvent(language, previousLanguage);
      
      return true;
      
    } catch (error) {
      // Revertir el idioma en caso de error
      this.currentLanguage = previousLanguage;
      return false;
    } finally {
      this.animationInProgress = false;
    }
  }

  /**
   * Aplicar fade out al contenido
   */
  fadeOutContent() {
    return new Promise(resolve => {
      const main = document.querySelector('main');
      if (!main) {
        resolve();
        return;
      }

      main.style.transition = `opacity ${LANGUAGE_CONFIG.animations.fadeOut}ms ease-out`;
      main.style.opacity = '0.7';
      
      setTimeout(resolve, LANGUAGE_CONFIG.animations.fadeOut);
    });
  }

  /**
   * Aplicar fade in al contenido
   */
  fadeInContent() {
    return new Promise(resolve => {
      const main = document.querySelector('main');
      if (!main) {
        resolve();
        return;
      }

      setTimeout(() => {
        main.style.transition = `opacity ${LANGUAGE_CONFIG.animations.fadeIn}ms ease-in`;
        main.style.opacity = '1';
        
        setTimeout(() => {
          main.style.transition = '';
          resolve();
        }, LANGUAGE_CONFIG.animations.fadeIn);
      }, 50);
    });
  }  /**
   * Traducir toda la página
   */
  translatePage() {
    
    // Verificar que tenemos las traducciones
    if (!this.translations[this.currentLanguage]) {
      return;
    }
    
    // Traducir elementos con data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    
    let translatedCount = 0;
    elements.forEach((element, index) => {
      const key = element.getAttribute('data-i18n');
      const translation = this.t(key);
      
      
      if (translation && translation !== key) {
        if (element.hasAttribute('data-i18n-html')) {
          element.innerHTML = translation;
        } else {
          element.textContent = translation;
        }
        translatedCount++;
      } else {
      }
    });
    

    // Traducir atributos específicos
    const attributeElements = document.querySelectorAll('[data-i18n-attr]');
    
    attributeElements.forEach(element => {
      const attrData = element.getAttribute('data-i18n-attr');
      const [attr, key] = attrData.split(':');
      const translation = this.t(key);
      
      if (translation && attr) {
        element.setAttribute(attr, translation);
      }
    });

    // Actualizar meta tags
    this.updateMetaTags();
  }/**
   * Actualizar selector de idioma después del cambio
   */
  updateLanguageSelector() {
    // Recrear el selector completamente
    this.createLanguageSelector();
    
    // Re-vincular eventos inmediatamente
    this.bindEvents();
  }

  /**
   * Actualizar meta tags según el idioma
   */
  updateMetaTags() {
    const title = this.t('meta.title');
    const description = this.t('meta.description');

    if (title) {
      document.title = title;
      
      // Actualizar Open Graph title
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
      
      // Actualizar Twitter title
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', title);
    }

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.setAttribute('content', description);
      
      // Actualizar Open Graph description
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) ogDescription.setAttribute('content', description);
      
      // Actualizar Twitter description
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) twitterDescription.setAttribute('content', description);
    }

    // Actualizar locale
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      const locale = LANGUAGE_CONFIG.languages[this.currentLanguage].locale;
      ogLocale.setAttribute('content', locale);
    }
  }
  /**
   * Obtener traducción por clave
   */
  t(key) {
    if (!key) {
      return '';
    }
    
    // Verificar que tenemos traducciones para el idioma actual
    if (!this.translations[this.currentLanguage]) {
      return key;
    }
    
    const keys = key.split('.');
    let value = this.translations[this.currentLanguage];
    
    // Navegar por la estructura de objetos anidados
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    // Verificar que el valor final es una cadena
    if (typeof value !== 'string') {
      return key;
    }

    // Reemplazar año dinámico
    value = value.replace('{year}', new Date().getFullYear());

    return value;
  }
  /**
   * Emitir evento de cambio de idioma
   */
  dispatchLanguageChangeEvent(language, previousLanguage = null) {
    const event = new CustomEvent('languageChanged', {
      detail: { 
        language, 
        previousLanguage: previousLanguage || this.currentLanguage,
        translations: this.translations[language],
        config: LANGUAGE_CONFIG.languages[language]
      },
      bubbles: true
    });
    document.dispatchEvent(event);
  }

  /**
   * Obtener idioma actual
   */
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  /**
   * Obtener configuración de idiomas
   */
  getLanguageConfig() {
    return LANGUAGE_CONFIG;
  }

  /**
   * Verificar si un idioma está soportado
   */
  isLanguageSupported(language) {
    return !!this.translations[language];
  }
  /**
   * Destruir el Language Switcher
   */
  destroy() {
    // Limpiar eventos
    this.unbindEvents();
    
    // Remover selector del DOM
    const selector = document.querySelector('.language-selector');
    if (selector) {
      selector.remove();
    }
    
    this.isInitialized = false;
    this.animationInProgress = false;
  }
}

/* =============================================================================
   INICIALIZACIÓN Y EXPORTACIÓN
   ============================================================================= */

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.LanguageSwitcher = LanguageSwitcher;
  
  // Auto-inicialización mejorada
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
  } else {
    // DOM ya está cargado
    setTimeout(initLanguageSwitcher, 100);
  }
  
  function initLanguageSwitcher() {
    if (!window.vestigiumLanguageSwitcher) {
      try {
        window.vestigiumLanguageSwitcher = new LanguageSwitcher();
        window.vestigiumLanguageSwitcher.init();
      } catch (error) {
        
        // Fallback: intentar de nuevo después de un breve delay
        setTimeout(() => {
          if (!window.vestigiumLanguageSwitcher) {
            try {
              window.vestigiumLanguageSwitcher = new LanguageSwitcher();
              window.vestigiumLanguageSwitcher.init();
            } catch (retryError) {
            }
          }
        }, 1000);
      }
    }
  }
  
  // Listener para cambios de idioma
  document.addEventListener('languageChanged', function(e) {
  });
}
