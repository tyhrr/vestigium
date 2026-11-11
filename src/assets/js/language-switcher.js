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
    fadeIn: 200
  }
};

/* =============================================================================
   TRADUCCIONES COMPLETAS
   ============================================================================= */

const TRANSLATIONS = {
  en: {
    meta: {
      title: 'Vestigium - Ecological-Creative Association for Sustainable Communities',
      description: 'Vestigium is an association in Zagreb that improves community quality of life by promoting healthy and sustainable lifestyle through educational and ecological activities.'
    },
    nav: {
      'who-are-we': 'Who are we?',
      'join-us': 'Join us',
      calendar: 'Calendar',
      'zadruga-zelenica': 'Zadruga Zelenica',
      'get-engaged': 'Get engaged',
      'be-volunteer': 'Be a Volunteer',
      esc: 'ESC (European Solidarity Corps)',
      gallery: 'Gallery',
      erasmus: 'Erasmus+',
      'previous-projects': 'Previous projects',
      activities: 'Activities',
      'frequent-activities': 'Frequent activities',
      'see-more': 'See more'
    },
    hero: {
      title: 'Building Sustainable Communities',
      subtitle: 'Vestigium is an ecological-creative association dedicated to improving the quality of life of our community, promoting a healthy and sustainable lifestyle for our future.',
      'btn-activities': "See what's on",
      'btn-join': 'Get involved',
      'next-label': 'Every Saturday',
      'next-time': '9–11',
      'next-what': 'EKO PLAC farmers market',
      'next-where': 'Rudeška 142, Vrbani'
    },
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
    about: {
      title: 'About Vestigium',
      text1: '<strong>Vestigium (lat. footprint)</strong> was born in 2011 by the initiative of six women who listened to the needs of their neighbors in the Vrbana area, Zagreb. We created a multifunctional space where initiatives can develop and flourish.',
      text2: 'As part of the <strong>Global Transition Movement for Sustainable Communities</strong>, we work to solve problems such as the growing distance between people, the lack of meeting and socializing places, and the exclusion of families and elderly residents.',
      text3: 'Since 2017 we are beneficiaries of institutional support from the National Foundation for Civil Society Development. In 2017 we were presented as an inspiring example "Changemakers" from Croatia, and in 2018 nominated among the top 30 projects for the "Social Marie Award" among 250 European socially innovative projects.'
    },
    community: {
      button: 'Community Center',
      metaTitle: 'Community Center - Vestigium',
      photosTitle: 'Inside the space',
      placesLabel: 'Locations',
      title: 'Community Center',
      text: 'Vestigium is a community center in the hands of citizens. We organize a free library, creative workshops, healthy cooking, recycling and environmental care, lectures and presentations of different cultures. We support short supply chains through EKO PLAC every Saturday 9-11h, swap clothes monthly, and evening yoga/fitness/dance classes. Spaces are available for coworking, celebrations and promotions.',
      locations: 'We operate in two locations: <strong>Community Center Vrbani</strong>, Rudeška 142, and <strong>Cooperative Community Center Zelenica</strong>, Grančarska 2a, Brezovica.',
      vrbani: {
        title: 'Community Center Vrbani',
        desc: 'Rudeška 142, Zagreb. Free library, workshops, farmers market, swap shops and cultural events.'
      },
      brezovica: {
        title: 'Cooperative Center Zelenica',
        desc: 'Grančarska 2a, Brezovica. Cooperative hub for local food, culture and community initiatives.'
      }
    },
    zadruga: {
      title: 'Zadruga Zelenica',
      text1: 'The Zelenica platform was launched in 2016 to guide society from unsustainable to sustainable practices that support people, nature and fair distribution. It connects organic and ecological food producers with citizens.',
      text2: 'In 2021 Zelenica became a social cooperative, and in 2022 the Cooperative Community Center Brezovica opened. We continue gathering members and developing the audience.',
      watch: 'Watch video',
      button: 'Zadruga Zelenica',
      metaTitle: 'Zadruga Zelenica - Vestigium',
      photosTitle: 'Life at Zelenica',
      address: '<strong>Cooperative Community Center Zelenica</strong>, Grančarska 2a, Brezovica.'
    },
    engaged: {
      title: 'Get involved',
      subtitle: 'Whether you live around the corner or are coming from abroad, there is a way to take part. Pick what fits you and write to us.',
      local: {
        title: 'Here in the neighbourhood',
        text: 'For people who live in Zagreb and want to help or belong.'
      },
      europe: {
        title: 'From abroad: European programmes',
        text: "Through the EU's Erasmus+ and European Solidarity Corps programmes, people from other countries can volunteer, learn and work with us."
      },
      volunteer: {
        title: 'Volunteer',
        who: 'For anyone, any age',
        desc: 'Lend a hand at the EKO PLAC, workshops, events, the garden or behind the scenes. Come as often as you like.',
        cta: 'Write to us'
      },
      member: {
        title: 'Become a member',
        who: 'For neighbours who want to belong',
        desc: 'Members shape the programme, propose and run their own activities and keep the association going.',
        cta: 'Write to us'
      },
      esc: {
        title: 'European Solidarity Corps',
        who: 'For young people aged 18–30',
        desc: 'Volunteer with us in Zagreb on community, ecology and culture projects, with travel and accommodation covered by the programme.',
        cta: 'Write to us'
      },
      exchange: {
        title: 'Erasmus+ youth exchanges & training',
        who: 'For young people and youth workers',
        desc: 'Short international projects where groups from different countries meet, learn and create together, in Croatia or with our partners abroad.',
        cta: 'Write to us'
      },
      partners: {
        title: 'Partner with us',
        who: 'For organisations and schools',
        desc: 'Plan a joint Erasmus+ project or a long-term partnership to share methods and strengthen our communities.',
        cta: 'Write to us'
      }
    },
    gallery: {
      metaTitle: 'Gallery - Vestigium',
      title: 'Gallery',
      lead: 'Life at Vestigium in pictures: the Saturday market, workshops, swaps, evenings in the library and days in the Zelenica garden. Everything here is made by neighbours, for neighbours.',
      stories: {
        title: 'What happens at Vestigium',
        see: 'See photos',
        market: {
          title: 'EKO PLAC',
          meta: 'Every Saturday 9–11 · Rudeška 142',
          text: 'Small local and organic farmers sell directly to the neighbourhood: bread, cheese, honey, seasonal vegetables and flowers.'
        },
        workshops: {
          title: 'Workshops',
          meta: 'Sewing, weaving, cooking, art',
          text: 'Neighbours teach neighbours: from the little sewing school and textile upcycling to healthy cooking and painting.'
        },
        community: {
          title: 'Community life',
          meta: 'Free library · swaps · game nights',
          text: 'A living room for the neighbourhood: book exchange, monthly clothes swaps, board games, concerts and talks.'
        },
        outdoors: {
          title: 'Zelenica & outdoors',
          meta: 'Brezovica · gardens · walks',
          text: 'The cooperative garden in Brezovica, evenings by the fire, flower beds, murals and walks in nature.'
        }
      },
      photos: {
        title: 'Photos',
        count: 'photos',
        more: 'Show more photos'
      },
      filter: {
        all: 'All',
        market: 'Market',
        workshops: 'Workshops',
        community: 'Community',
        outdoors: 'Outdoors',
        people: 'Workshop leaders'
      },
      facebook: {
        title: 'Latest on Facebook',
        text: 'Our newest posts, with likes, comments and shares, straight from the Udruga Vestigium page. Follow us to hear about workshops and events first.',
        follow: 'Follow us on Facebook'
      }
    },
    projects: {
      title: 'Projects',
      subtitle: 'Our current and recent projects supported by the City of Zagreb, EU and foundations.',
      sustainable: {
        title: 'Sustainable Future - Path to Healthy Food',
        desc: 'Regenerative agriculture, short supply chains and school gardens. Education on healthy soil and biodiversity.',
        tag: 'Food & soil'
      },
      culture: {
        title: 'Culture in Brezovica',
        desc: 'Performances, concerts, creative workshops and cultural evenings connecting residents, artists and schools.',
        tag: 'Culture'
      },
      kreaktivno: {
        title: 'KreAktivno 2026',
        desc: 'Erasmus+ adult mobility for capacity building at ufaFabrik (Berlin) and Center Rog (Ljubljana).',
        tag: 'Erasmus+ · Berlin & Ljubljana'
      },
      livinglab: {
        title: 'Living Lab - Just and Regenerative Community',
        desc: 'Community activities, gardening club, clothing swaps and textile upcycling in Vrbani and Brezovica.',
        tag: 'Community · Vrbani & Brezovica'
      },
      institutional: {
        title: 'Institutional Support for Civil Society',
        desc: 'Capacity building, program development and digitalization supported by the National Foundation.',
        tag: 'Organisation'
      },
      regenerative: {
        title: 'Regenerative Communities Fund',
        desc: 'Community-led regeneration supported by ECOLISE and Funding Fairer Futures.',
        tag: 'Regeneration'
      }
    },
    previous: {
      title: 'Previous projects',
      subtitle: 'A selection of past initiatives and collaborations.',
      emotional: {
        title: 'Emotional and Artificial Intelligence',
        desc: 'Erasmus+ training course on media literacy and emotional intelligence.'
      },
      grassy: {
        title: 'Grassy Perspectives',
        desc: 'Urban biodiversity and participatory climate practices in Osijek.'
      },
      value: {
        title: 'Value of Waste',
        desc: 'Reducing textile waste through upcycling initiatives.'
      }
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
    footer: {
      title: 'Vestigium',
      achievement1: '🏆 Changemakers Croatia 2017',
      achievement2: '🌟 Social Marie Award Finalist 2018',
      links: 'Links',
      funder: 'Financially supported by the National Foundation for Civil Society Development',
      home: 'Home',
      activities: 'Activities',
      about: 'About us',
      'get-involved': 'Get involved',
      contact: {
        title: 'Contact'
      },
      location: {
        address: 'Grančarska 2a, Brezovica',
        country: 'Croatia'
      },
      copyright: '&copy; {year} Vestigium Association.',
      tech: 'Building sustainable communities since 2011 • Over 1000 annual activities',
      visitors: {
        label: 'Visitors:'
      }
    },
    lang: {
      current: 'Current language',
      select: 'Select language'
    },
    social: {
      facebook: 'Vestigium on Facebook',
      instagram: 'Vestigium on Instagram'
    },
    carousel: {
      previous: 'Previous image',
      next: 'Next image',
      photo1: 'Group lying head to head on colourful blankets in the grass',
      photo2: 'Group in long skirts, arms around each other, looking over a green valley',
      photo3: 'Smiling person holding an embroidery hoop in the community space',
      photo4: 'Two people standing among crops in a polytunnel',
      photo5: 'Circle of joined hands seen from below against the sky',
      photo6: 'Person smiling and holding up a single blueberry',
      photo7: 'Person sitting cross-legged in a sunlit meadow',
      photo8: 'Person holding a round green sign at an outdoor market',
      photo9: 'Hand picking seed packets from a wooden box'
    }
  },
  hr: {
    meta: {
      title: 'Vestigium - Ekolosko-Kreativna Udruga za Održive Zajednice',
      description: 'Vestigium je udruga u Zagrebu koja poboljšava kvalitetu života zajednice promovira zdrav i održiv način života kroz edukacijske i ekološke aktivnosti.'
    },
    nav: {
      'who-are-we': 'Tko smo mi?',
      'join-us': 'Pridružite se',
      calendar: 'Kalendar',
      'zadruga-zelenica': 'Zadruga Zelenica',
      'get-engaged': 'Uključite se',
      'be-volunteer': 'Budite volonter',
      esc: 'ESK (Europski Solidarni Korpus)',
      gallery: 'Galerija',
      erasmus: 'Erasmus+',
      'previous-projects': 'Prethodni projekti',
      activities: 'Aktivnosti',
      'frequent-activities': 'Česte aktivnosti',
      'see-more': 'Pogledaj više'
    },
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
    about: {
      title: 'O Vestigiumu',
      text1: '<strong>Vestigium (lat. trag)</strong> nastao je 2011. godine inicijativom šest žena koje su slušale potrebe svojih susjeda u području Vrbane u Zagrebu. Stvorili smo multifunkcionalni prostor gdje se inicijative mogu razvijati i cvjetati.',
      text2: 'Kao dio <strong>Globalnog Tranzicijskog Pokreta za Održive Zajednice</strong>, radimo na rješavanju problema poput rastućeg distanciranja između ljudi, nedostajanja mjesta za druženje i socijalizaciju te isključivanja obitelji i starijih stanovnika.',
      text3: 'Od 2017. godine korisnici smo institucionalne podrške Nacionalne zaklade za razvoj civilnoga društva. 2017. godine predstavljeni smo kao inspirativan primjer "Changemakers" iz Hrvatske, a 2018. nominirani među 30 najboljih projekata za "Social Marie Award" među 250 europskih socijalno inovativnih projekata.'
    },
    community: {
      button: 'Društveni centar',
      metaTitle: 'Društveni centar - Vestigium',
      photosTitle: 'Prostor iznutra',
      placesLabel: 'Lokacije',
      title: 'Društveni centar',
      text: 'Vestigium je društveni centar u rukama građana. Organiziramo slobodnu knjižnicu, kreativne radionice, kuhanje, recikliranje i brigu o okolišu, predavanja i predstavljanja raznih kultura. Podržavamo kratke lance opskrbe kroz EKO PLAC svake subote 9-11h, mjesečnu razmjenu odjeće te večernje satove yoge/fitnesa/plesa. Prostori su dostupni za coworking, proslave i promocije.',
      locations: 'Djelujemo na dvije lokacije: <strong>Društveni centar Vrbani</strong>, Rudeška 142, i <strong>Zadružni društveni centar Zelenica</strong>, Grančarska 2a, Brezovica.',
      vrbani: {
        title: 'Društveni centar Vrbani',
        desc: 'Rudeška 142, Zagreb. Slobodna knjižnica, radionice, tržnica, razmjena odjeće i kulturna događanja.'
      },
      brezovica: {
        title: 'Zadružni centar Zelenica',
        desc: 'Grančarska 2a, Brezovica. Zadružno središte za lokalnu hranu, kulturu i inicijative zajednice.'
      }
    },
    zadruga: {
      title: 'Zadruga Zelenica',
      text1: 'Platforma Zelenica pokrenuta je 2016. kako bi usmjerila društvo od neodrživih prema održivim praksama koje podupiru ljude, prirodu i pravednu raspodjelu. Povezuje ekološke proizvođače hrane s građanima.',
      text2: '2021. Zelenica je postala društvena zadruga, a 2022. otvoren je Zadružni društveni centar Brezovica. Nastavljamo okupljati članove i razvijati publiku.',
      watch: 'Pogledaj video',
      button: 'Zadruga Zelenica',
      metaTitle: 'Zadruga Zelenica - Vestigium',
      photosTitle: 'Život u Zelenici',
      address: '<strong>Zadružni društveni centar Zelenica</strong>, Grančarska 2a, Brezovica.'
    },
    engaged: {
      title: 'Uključi se',
      subtitle: 'Bilo da živiš iza ugla ili dolaziš iz inozemstva, postoji način da sudjeluješ. Odaberi što ti odgovara i javi nam se.',
      local: {
        title: 'Ovdje u kvartu',
        text: 'Za one koji žive u Zagrebu i žele pomoći ili postati dio zajednice.'
      },
      europe: {
        title: 'Iz inozemstva: europski programi',
        text: 'Kroz EU programe Erasmus+ i Europske snage solidarnosti ljudi iz drugih zemalja mogu volontirati, učiti i raditi s nama.'
      },
      volunteer: {
        title: 'Volontiraj',
        who: 'Za sve, bez obzira na dob',
        desc: 'Pomozi na EKO PLACU, radionicama, događanjima, u vrtu ili iza kulisa. Dođi koliko često želiš.',
        cta: 'Javi nam se'
      },
      member: {
        title: 'Postani član',
        who: 'Za susjede koji žele pripadati',
        desc: 'Članovi oblikuju program, predlažu i vode vlastite aktivnosti i održavaju udrugu živom.',
        cta: 'Javi nam se'
      },
      esc: {
        title: 'Europske snage solidarnosti',
        who: 'Za mlade od 18 do 30 godina',
        desc: 'Volontiraj s nama u Zagrebu na projektima zajednice, ekologije i kulture, uz putne troškove i smještaj koje pokriva program.',
        cta: 'Javi nam se'
      },
      exchange: {
        title: 'Erasmus+ razmjene mladih i tečajevi',
        who: 'Za mlade i osobe koje rade s mladima',
        desc: 'Kratki međunarodni projekti u kojima se grupe iz različitih zemalja susreću, uče i stvaraju zajedno, u Hrvatskoj ili kod naših partnera u inozemstvu.',
        cta: 'Javi nam se'
      },
      partners: {
        title: 'Surađuj s nama',
        who: 'Za organizacije i škole',
        desc: 'Isplanirajmo zajednički Erasmus+ projekt ili dugoročno partnerstvo za razmjenu metoda i jačanje naših zajednica.',
        cta: 'Javi nam se'
      }
    },
    gallery: {
      metaTitle: 'Galerija - Vestigium',
      title: 'Galerija',
      lead: 'Život Vestigiuma u slikama: subotnji plac, radionice, razmjene, večeri u knjižnici i dani u vrtu Zelenice. Sve ovo stvaraju susjedi za susjede.',
      stories: {
        title: 'Što se događa u Vestigiumu',
        see: 'Pogledaj fotografije',
        market: {
          title: 'EKO PLAC',
          meta: 'Svake subote 9–11 h · Rudeška 142',
          text: 'Mali lokalni i ekološki proizvođači prodaju izravno kvartu: kruh, sir, med, sezonsko povrće i cvijeće.'
        },
        workshops: {
          title: 'Radionice',
          meta: 'Šivanje, pletenje, kuhanje, umjetnost',
          text: 'Susjedi uče susjede: od male škole šivanja i prenamjene tekstila do zdravog kuhanja i slikanja.'
        },
        community: {
          title: 'Život zajednice',
          meta: 'Slobodna knjižnica · razmjene · večeri igara',
          text: 'Dnevni boravak kvarta: razmjena knjiga, mjesečne razmjene odjeće, društvene igre, koncerti i razgovori.'
        },
        outdoors: {
          title: 'Zelenica i priroda',
          meta: 'Brezovica · vrtovi · šetnje',
          text: 'Zadružni vrt u Brezovici, večeri uz vatru, cvjetnjaci, murali i šetnje prirodom.'
        }
      },
      photos: {
        title: 'Fotografije',
        count: 'fotografija',
        more: 'Prikaži još fotografija'
      },
      filter: {
        all: 'Sve',
        market: 'Plac',
        workshops: 'Radionice',
        community: 'Zajednica',
        outdoors: 'Priroda',
        people: 'Voditelji radionica'
      },
      facebook: {
        title: 'Najnovije na Facebooku',
        text: 'Naše najnovije objave, s reakcijama, komentarima i dijeljenjima, izravno sa stranice Udruge Vestigium. Pratite nas i prvi saznajte za radionice i događanja.',
        follow: 'Pratite nas na Facebooku'
      }
    },
    projects: {
      title: 'Projekti',
      subtitle: 'Naši aktualni i nedavni projekti uz podršku Grada Zagreba, EU i zaklada.',
      sustainable: {
        title: 'Održiva budućnost - put do zdrave hrane',
        desc: 'Regenerativna poljoprivreda, kratki lanci opskrbe i školski vrtovi. Edukacija o zdravom tlu i bioraznolikosti.',
        tag: 'Hrana i tlo'
      },
      culture: {
        title: 'Kultura u Brezovici',
        desc: 'Predstave, koncerti, kreativne radionice i kulturne večeri koje povezuju stanovnike, umjetnike i škole.',
        tag: 'Kultura'
      },
      kreaktivno: {
        title: 'KreAktivno 2026',
        desc: 'Erasmus+ mobilnost za odrasle za jačanje kapaciteta u ufaFabrik (Berlin) i Center Rog (Ljubljana).',
        tag: 'Erasmus+ · Berlin i Ljubljana'
      },
      livinglab: {
        title: 'Living Lab - pravedna i regenerativna zajednica',
        desc: 'Aktivnosti zajednice, vrtlarski klub, razmjena odjeće i upcycling tekstila u Vrbanima i Brezovici.',
        tag: 'Zajednica · Vrbani i Brezovica'
      },
      institutional: {
        title: 'Institucionalna podrška civilnom društvu',
        desc: 'Jačanje kapaciteta, razvoj programa i digitalizacija uz podršku Nacionalne zaklade.',
        tag: 'Organizacija'
      },
      regenerative: {
        title: 'Fond regenerativnih zajednica',
        desc: 'Regeneracija vođena zajednicom uz podršku ECOLISE i Funding Fairer Futures.',
        tag: 'Regeneracija'
      }
    },
    previous: {
      title: 'Prethodni projekti',
      subtitle: 'Odabir prošlih inicijativa i suradnji.',
      emotional: {
        title: 'Emocionalna i umjetna inteligencija',
        desc: 'Erasmus+ tečaj o medijskoj pismenosti i emocionalnoj inteligenciji.'
      },
      grassy: {
        title: 'Travnate perspektive',
        desc: 'Urbana bioraznolikost i participativne klimatske prakse u Osijeku.'
      },
      value: {
        title: 'Vrijednost otpada',
        desc: 'Smanjenje tekstilnog otpada kroz upcycling inicijative.'
      }
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
    footer: {
      title: 'Vestigium',
      achievement1: '🏆 Changemakers Hrvatska 2017',
      achievement2: '🌟 Social Marie Award Finalist 2018',
      links: 'Linkovi',
      funder: 'Financijski podržava Nacionalna zaklada za razvoj civilnoga društva',
      home: 'Početna',
      activities: 'Aktivnosti',
      about: 'O nama',
      'get-involved': 'Uključite se',
      contact: {
        title: 'Kontakt'
      },
      location: {
        address: 'Grančarska 2a, Brezovica',
        country: 'Hrvatska'
      },
      copyright: '&copy; {year} Udruga Vestigium.',
      tech: 'Izgradnja održivih zajednica od 2011. • Preko 1000 godišnjih aktivnosti',
      visitors: {
        label: 'Posjetitelji:'
      }
    },
    lang: {
      current: 'Trenutni jezik',
      select: 'Odaberite jezik'
    },
    social: {
      facebook: 'Vestigium na Facebooku',
      instagram: 'Vestigium na Instagramu'
    },
    carousel: {
      previous: 'Prethodna slika',
      next: 'Sljedeća slika',
      photo1: 'Skupina ljudi leži glavom uz glavu na šarenim dekama u travi',
      photo2: 'Skupina u dugim suknjama, zagrljena, gleda preko zelene doline',
      photo3: 'Nasmiješena osoba drži okvir za vez u prostoru zajednice',
      photo4: 'Dvije osobe stoje među usjevima u plasteniku',
      photo5: 'Krug spojenih ruku gledan odozdo prema nebu',
      photo6: 'Nasmiješena osoba drži jednu borovnicu',
      photo7: 'Osoba sjedi prekriženih nogu na sunčanoj livadi',
      photo8: 'Osoba drži okrugli zeleni znak na tržnici na otvorenom',
      photo9: 'Ruka vadi vrećice sjemena iz drvene kutije'
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
      console.error('Language switcher failed to start:', error);
    }
  }

  /**
   * Obtener idioma guardado en localStorage
   */
  getStoredLanguage() {
    try {
      return localStorage.getItem(LANGUAGE_CONFIG.storageKey);
    } catch {
      return null; // Private browsing can block storage
    }
  }

  /**
   * Guardar idioma en localStorage
   */
  setStoredLanguage(language) {
    try {
      localStorage.setItem(LANGUAGE_CONFIG.storageKey, language);
    } catch {
      // Private browsing can block storage; the language just won't be remembered
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
          this.changeLanguageSmooth(selectedLang);
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
      console.error('Language change failed:', error);
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
    
    elements.forEach((element) => {
      const key = element.getAttribute('data-i18n');
      const translation = this.t(key);

      if (translation && translation !== key) {
        if (element.hasAttribute('data-i18n-html')) {
          element.innerHTML = translation;
        } else {
          element.textContent = translation;
        }
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

}

function initLanguageSwitcher() {
  window.vestigiumLanguageSwitcher = new LanguageSwitcher();
  window.vestigiumLanguageSwitcher.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
} else {
  initLanguageSwitcher();
}
