/* =====================================================================
   ALL EDITABLE CONTENT LIVES HERE.
   Change the city name, motto, rules, team names, photos and texts below.
   cs = Czech, de = German, en = English
   ===================================================================== */

const CONFIG = {
  // City name (same in all languages)
  cityName: "Mostberg",

  // Public web address of the site once it is online (used for the QR codes).
  // Leave empty to use the address the site is currently opened from.
  siteUrl: "",

  // Team: 5 pairs x 2 members = 10 people. Replace the names.
  team: [
    { pair: 1, cz: "Jméno Příjmení", de: "Vorname Nachname" },
    { pair: 2, cz: "Jméno Příjmení", de: "Vorname Nachname" },
    { pair: 3, cz: "Jméno Příjmení", de: "Vorname Nachname" },
    { pair: 4, cz: "Jméno Příjmení", de: "Vorname Nachname" },
    { pair: 5, cz: "Jméno Příjmení", de: "Vorname Nachname" }
  ],

  // Gallery photos in /photos (missing files are hidden automatically).
  gallery: [
    "day1-01.jpg", "day1-02.jpg", "day1-03.jpg", "day1-04.jpg", "day1-05.jpg",
    "day2-01.jpg", "day2-02.jpg", "day2-03.jpg", "day2-04.jpg", "day2-05.jpg"
  ],

  // The 6 QR stations. page + section = where the QR code leads.
  // Audio files: media/audio/qr1-cs.mp3, media/audio/qr1-de.mp3, ...
  stations: [
    { n: 1, page: "index.html",     section: "welcome" },
    { n: 2, page: "landmarks.html", section: "landmark" },
    { n: 3, page: "landmarks.html", section: "school-hospital" },
    { n: 4, page: "green.html",     section: "transit" },
    { n: 5, page: "green.html",     section: "energy-parks" },
    { n: 6, page: "team.html",      section: "gallery" }
  ]
};

const TEXT = {
  /* ------------------------------------------------------------ CZECH */
  cs: {
    "nav.home": "Úvod a vize",
    "nav.landmarks": "Památky a život",
    "nav.green": "Zeleň a doprava",
    "nav.team": "Zákulisí a tým",
    "nav.print": "QR cedulky k tisku",

    "home.kicker": "Česko-německý projektový týden · Bielefeld",
    "home.motto": "Dva jazyky, jedno město – společně stavíme mosty.",
    "home.welcomeTitle": "Vítejte!",
    "home.welcome": "Vítejte v našem městě! Naše modelové město navrhl a postavil česko-německý tým deseti studentů během projektového týdne v Bielefeldu. Prozkoumejte naše památky, zjistěte, jak naše město zůstává zelené, a podívejte se, jak jsme ho společně stavěli.",
    "home.rulesTitle": "5 Zlatých pravidel",
    "home.rules": [
      "Respektujeme každého – každý jazyk i každý člověk je vítán.",
      "Chodíme pěšky, jezdíme na kole a veřejnou dopravou – čistá doprava má přednost.",
      "Šetříme energií – naše město pohání slunce a vítr.",
      "Udržujeme město zelené a čisté – chráníme parky a přírodu.",
      "Spolupracujeme – problémy řešíme jako jeden tým."
    ],
    "home.identityTitle": "Znak a vlajka",
    "home.identity": "Most ve znaku spojuje dva břehy – stejně jako náš projekt spojuje Česko a Německo. Slunce a větrná turbína představují čistou energii, zelená barva naše parky.",
    "home.crestCap": "Městský znak",
    "home.flagCap": "Městská vlajka",
    "home.planTitle": "Půdorys města",
    "home.planCap": "Fotografie půdorysu modelu",
    "home.explore": "Prozkoumejte město",

    "lm.title": "Památky a život",
    "lm.intro": "Nejdůležitější budovy našeho města – a lidé, kteří v nich žijí, učí se a pracují.",
    "lm.townhallTitle": "Radnice a Hlavní náměstí",
    "lm.townhall": "Radnice stojí na Hlavním náměstí v samém srdci města. Schází se zde městská rada, občané tu najdou pomoc a nad vchodem vlaje naše vlajka. Náměstí před radnicí je bez aut a slouží jako místo setkávání, trhů a slavností.",
    "lm.landmarkTitle": "Naše dominanta: Věž přátelství",
    "lm.landmark": "Naší nejvýraznější dominantou je Věž přátelství – rozhledna, kterou je vidět z každé části města. Symbolizuje partnerství mezi českými a německými studenty. Z jejího vrcholu návštěvníci přehlédnou celé město, parky i větrnou farmu.",
    "lm.schoolTitle": "Škola",
    "lm.school": "Naše dvojjazyčná škola učí všechny děti česky i německy. Má solární střechu, školní zahradu a bezpečnou cyklostezku až ke vchodu.",
    "lm.hospitalTitle": "Nemocnice",
    "lm.hospital": "Nemocnice leží blízko dopravního uzlu, takže se k ní každý rychle dostane tramvají nebo autobusem. Sanitky mají vlastní jízdní pruh a budova je napájena obnovitelnou energií.",
    "lm.pair1": "Model dvojice 1",
    "lm.pair2": "Model dvojice 2",

    "gr.title": "Zeleň a doprava",
    "gr.intro": "Jak naše město funguje bez výfukových plynů: čistá doprava, energie ze slunce a větru a hodně zeleně.",
    "gr.transitTitle": "Čistá doprava a most",
    "gr.transit": "Elektrické tramvaje a autobusy spojují každou čtvrť s dopravním uzlem. Most přes řeku je vyhrazen pro tramvaje, kola a chodce. Díky širokým cyklostezkám a krátkým pěším trasám nikdo nepotřebuje na běžné cesty auto.",
    "gr.mapCap": "Mapa dopravy",
    "gr.energyTitle": "Energie ze slunce a větru",
    "gr.energy": "Solární panely na střechách a větrná farma za městem vyrábějí čistou elektřinu. Baterie ukládají přebytečnou energii na noc a na dny bez větru.",
    "gr.parksTitle": "Centrální park",
    "gr.parks": "Centrální park je zelenými plícemi našeho města: stromy čistí vzduch, rybník zachytává dešťovou vodu a každý si tu může odpočinout, hrát si a sportovat.",
    "gr.ecoCap": "Ekologická rovnováha: naše město vyrobí alespoň tolik čisté energie, kolik spotřebuje.",

    "tm.title": "Zákulisí a tým",
    "tm.intro": "Jak vzniklo naše město – deník projektu, náš tým a fotografie z obou dnů.",
    "tm.diaryTitle": "Deník projektu",
    "tm.day1Title": "1. den – Plánování a stavba",
    "tm.day1": "Seznámili jsme se s partnery, dohodli se na názvu města, mottu a Zlatých pravidlech, nakreslili půdorys a začali stavět první modely.",
    "tm.day2Title": "2. den – Dokončení a digitalizace",
    "tm.day2": "Dokončili jsme budovy, umístili vlajku na radnici, nahráli audioprůvodce, vytvořili tento web a rozmístili QR cedulky na modelu.",
    "tm.teamTitle": "Náš tým (10 členů)",
    "tm.pair": "Dvojice",
    "tm.roles": [
      "Dominanta, škola a nemocnice",
      "Radnice a Hlavní náměstí",
      "Dopravní uzel, most a dopravní síť",
      "Centrální park, větrná farma a ekologická rovnováha",
      "Digitální svět, web a identita města"
    ],
    "tm.galleryTitle": "Fotogalerie – 1. a 2. den",
    "tm.galleryEmpty": "Fotografie budou brzy doplněny.",
    "tm.credits": "Poděkování: všem 10 členům týmu, našim učitelům a hostitelské škole v Bielefeldu.",

    "audio.title": "Audioprůvodce",
    "audio.cs": "Česky",
    "audio.de": "Deutsch",
    "audio.missing": "Nahrávka bude brzy doplněna.",
    "station": "Stanoviště",
    "photoMissing": "Sem patří fotografie",
    "footer": "Česko-německý projektový týden · Bielefeld",
    "langName": "Čeština"
  },

  /* ----------------------------------------------------------- GERMAN */
  de: {
    "nav.home": "Start & Vision",
    "nav.landmarks": "Wahrzeichen & Leben",
    "nav.green": "Grün & Mobilität",
    "nav.team": "Making-of & Team",
    "nav.print": "QR-Schilder drucken",

    "home.kicker": "Deutsch-tschechische Projektwoche · Bielefeld",
    "home.motto": "Zwei Sprachen, eine Stadt – gemeinsam bauen wir Brücken.",
    "home.welcomeTitle": "Willkommen!",
    "home.welcome": "Willkommen in unserer Stadt! Unsere Modellstadt wurde während der Projektwoche in Bielefeld von einem deutsch-tschechischen Team aus zehn Schülerinnen und Schülern entworfen und gebaut. Entdecken Sie unsere Wahrzeichen, erfahren Sie, wie unsere Stadt grün bleibt, und sehen Sie, wie wir sie gemeinsam gebaut haben.",
    "home.rulesTitle": "Die 5 Goldenen Regeln",
    "home.rules": [
      "Wir respektieren alle – jede Sprache und jeder Mensch ist willkommen.",
      "Zu Fuß, mit dem Rad oder mit Bus und Bahn – saubere Mobilität hat Vorrang.",
      "Wir sparen Energie – Sonne und Wind versorgen unsere Stadt.",
      "Grün und sauber – wir schützen unsere Parks und die Natur.",
      "Gemeinsam handeln – wir lösen Probleme als ein Team."
    ],
    "home.identityTitle": "Wappen & Flagge",
    "home.identity": "Die Brücke im Wappen verbindet zwei Ufer – so wie unser Projekt Tschechien und Deutschland verbindet. Sonne und Windrad stehen für saubere Energie, Grün für unsere Parks.",
    "home.crestCap": "Stadtwappen",
    "home.flagCap": "Stadtflagge",
    "home.planTitle": "Grundriss der Stadt",
    "home.planCap": "Foto des Modell-Grundrisses",
    "home.explore": "Stadt entdecken",

    "lm.title": "Wahrzeichen & Leben",
    "lm.intro": "Die wichtigsten Gebäude unserer Stadt – und die Menschen, die dort leben, lernen und arbeiten.",
    "lm.townhallTitle": "Rathaus & Hauptplatz",
    "lm.townhall": "Das Rathaus steht am Hauptplatz im Herzen der Stadt. Hier tagt der Stadtrat, hier bekommen Bürgerinnen und Bürger Hilfe, und über dem Eingang weht unsere Flagge. Der autofreie Platz davor ist Treffpunkt für Märkte und Feste.",
    "lm.landmarkTitle": "Unser Wahrzeichen: Der Turm der Freundschaft",
    "lm.landmark": "Unser Wahrzeichen ist der Turm der Freundschaft – ein Aussichtsturm, den man von jedem Teil der Stadt aus sieht. Er steht für die Partnerschaft zwischen tschechischen und deutschen Schülerinnen und Schülern. Von oben sieht man die ganze Stadt, die Parks und den Windpark.",
    "lm.schoolTitle": "Schule",
    "lm.school": "In unserer zweisprachigen Schule lernen alle Kinder auf Tschechisch und Deutsch. Sie hat ein Solardach, einen Schulgarten und einen sicheren Radweg bis zum Eingang.",
    "lm.hospitalTitle": "Krankenhaus",
    "lm.hospital": "Das Krankenhaus liegt nahe am Verkehrsknotenpunkt, sodass alle es schnell mit Straßenbahn oder Bus erreichen. Krankenwagen haben eine eigene Spur, und das Gebäude wird mit erneuerbarer Energie versorgt.",
    "lm.pair1": "Modell von Paar 1",
    "lm.pair2": "Modell von Paar 2",

    "gr.title": "Grün & Mobilität",
    "gr.intro": "So funktioniert unsere Stadt ohne Abgase: saubere Mobilität, Energie aus Sonne und Wind und viel Grün.",
    "gr.transitTitle": "Saubere Mobilität & die Brücke",
    "gr.transit": "Elektrische Straßenbahnen und Busse verbinden jedes Viertel mit dem Verkehrsknotenpunkt. Die Brücke über den Fluss ist für Straßenbahnen, Fahrräder und Fußgänger reserviert. Dank breiter Radwege und kurzer Fußwege braucht niemand für alltägliche Wege ein Auto.",
    "gr.mapCap": "Verkehrsplan",
    "gr.energyTitle": "Energie aus Sonne und Wind",
    "gr.energy": "Solarzellen auf den Dächern und ein Windpark vor der Stadt erzeugen sauberen Strom. Batterien speichern überschüssige Energie für die Nacht und für windstille Tage.",
    "gr.parksTitle": "Zentralpark",
    "gr.parks": "Der Zentralpark ist die grüne Lunge unserer Stadt: Bäume reinigen die Luft, der Teich sammelt Regenwasser, und alle können sich dort erholen, spielen und Sport treiben.",
    "gr.ecoCap": "Öko-Bilanz: Unsere Stadt erzeugt mindestens so viel saubere Energie, wie sie verbraucht.",

    "tm.title": "Making-of & Team",
    "tm.intro": "Wie unsere Stadt entstanden ist – das Projekttagebuch, unser Team und Fotos von beiden Tagen.",
    "tm.diaryTitle": "Projekttagebuch",
    "tm.day1Title": "Tag 1 – Planen & Bauen",
    "tm.day1": "Wir haben unsere Partner kennengelernt, uns auf Stadtnamen, Motto und Goldene Regeln geeinigt, den Grundriss gezeichnet und mit den ersten Modellen begonnen.",
    "tm.day2Title": "Tag 2 – Fertigstellen & Digitalisieren",
    "tm.day2": "Wir haben die Gebäude fertiggestellt, die Flagge am Rathaus angebracht, die Audioguides aufgenommen, diese Website gebaut und die QR-Schilder am Modell aufgestellt.",
    "tm.teamTitle": "Unser Team (10 Mitglieder)",
    "tm.pair": "Paar",
    "tm.roles": [
      "Wahrzeichen, Schule & Krankenhaus",
      "Rathaus & Hauptplatz",
      "Verkehrsknotenpunkt, Brücke & Verkehrsnetz",
      "Zentralpark, Windpark & Öko-Bilanz",
      "Digital, Web & Stadtidentität"
    ],
    "tm.galleryTitle": "Fotogalerie – Tag 1 & Tag 2",
    "tm.galleryEmpty": "Die Fotos folgen in Kürze.",
    "tm.credits": "Danke an alle 10 Teammitglieder, unsere Lehrkräfte und die Gastschule in Bielefeld.",

    "audio.title": "Audioguide",
    "audio.cs": "Česky",
    "audio.de": "Deutsch",
    "audio.missing": "Die Aufnahme folgt in Kürze.",
    "station": "Station",
    "photoMissing": "Hier kommt ein Foto hin",
    "footer": "Deutsch-tschechische Projektwoche · Bielefeld",
    "langName": "Deutsch"
  },

  /* ---------------------------------------------------------- ENGLISH */
  en: {
    "nav.home": "Home & Vision",
    "nav.landmarks": "Landmarks & Life",
    "nav.green": "Green & Mobility",
    "nav.team": "Making-Of & Team",
    "nav.print": "Print QR signs",

    "home.kicker": "Czech–German Project Week · Bielefeld",
    "home.motto": "Two languages, one city – building bridges together.",
    "home.welcomeTitle": "Welcome!",
    "home.welcome": "Welcome to our city! Our model city was designed and built by a Czech–German team of ten students during the project week in Bielefeld. Explore our landmarks, discover how our city stays green, and see how we built it together.",
    "home.rulesTitle": "The 5 Golden Rules",
    "home.rules": [
      "Respect everyone – every language and every person is welcome.",
      "Walk, cycle or take the tram – clean transport comes first.",
      "Save energy – the sun and the wind power our city.",
      "Keep it green and clean – protect our parks and nature.",
      "Work together – we solve problems as one team."
    ],
    "home.identityTitle": "Crest & Flag",
    "home.identity": "The bridge on our crest connects two riverbanks – just as our project connects Czechia and Germany. The sun and the wind turbine stand for clean energy, the green for our parks.",
    "home.crestCap": "City crest",
    "home.flagCap": "City flag",
    "home.planTitle": "City Floor Plan",
    "home.planCap": "Photo of the model floor plan",
    "home.explore": "Explore the city",

    "lm.title": "Landmarks & Life",
    "lm.intro": "The most important buildings of our city – and the people who live, learn and work in them.",
    "lm.townhallTitle": "Town Hall & Main Plaza",
    "lm.townhall": "The Town Hall stands on the Main Plaza at the heart of the city. This is where the city council meets, where citizens get help, and where our flag flies above the entrance. The car-free plaza in front is a meeting place for markets and festivals.",
    "lm.landmarkTitle": "Our Signature Landmark: The Friendship Tower",
    "lm.landmark": "Our signature landmark is the Friendship Tower – a lookout tower you can see from every part of the city. It stands for the partnership between Czech and German students. From the top, visitors can see the whole city, the parks and the wind farm.",
    "lm.schoolTitle": "School",
    "lm.school": "Our bilingual school teaches every child in Czech and German. It has a solar roof, a school garden and a safe cycle path right up to the entrance.",
    "lm.hospitalTitle": "Hospital",
    "lm.hospital": "The hospital is close to the Transit Hub, so everyone can reach it quickly by tram or bus. Ambulances have their own lane, and the building runs on renewable energy.",
    "lm.pair1": "Pair 1 model",
    "lm.pair2": "Pair 2 model",

    "gr.title": "Green & Mobility",
    "gr.intro": "How our city works without exhaust fumes: clean transit, energy from the sun and wind, and lots of green space.",
    "gr.transitTitle": "Clean Transit & the Bridge",
    "gr.transit": "Electric trams and buses connect every district to the Transit Hub. The bridge over the river is reserved for trams, bikes and pedestrians. Thanks to wide cycle paths and short walking routes, nobody needs a car for everyday trips.",
    "gr.mapCap": "Transit map",
    "gr.energyTitle": "Energy from Sun and Wind",
    "gr.energy": "Solar panels on the roofs and a wind farm outside the city produce clean electricity. Batteries store extra energy for the night and for days without wind.",
    "gr.parksTitle": "Central Park",
    "gr.parks": "Central Park is the green lung of our city: trees clean the air, the pond collects rainwater, and everyone can relax, play and do sports there.",
    "gr.ecoCap": "Eco-Balance: our city produces at least as much clean energy as it uses.",

    "tm.title": "Making-Of & Team",
    "tm.intro": "How our city was made – the project diary, our team and photos from both days.",
    "tm.diaryTitle": "Project Diary",
    "tm.day1Title": "Day 1 – Planning & Building",
    "tm.day1": "We met our partners, agreed on a city name, motto and Golden Rules, drew the floor plan and started building the first models.",
    "tm.day2Title": "Day 2 – Finishing & Going Digital",
    "tm.day2": "We finished the buildings, put the flag on the Town Hall, recorded the audio guides, built this website and set up the QR signs on the model.",
    "tm.teamTitle": "Our Team (10 members)",
    "tm.pair": "Pair",
    "tm.roles": [
      "Landmark, School & Hospital",
      "Town Hall & Main Plaza",
      "Transit Hub, Bridge & transport network",
      "Central Park, Wind Farm & Eco-Balance",
      "Digital, Web & City Identity"
    ],
    "tm.galleryTitle": "Photo Gallery – Day 1 & Day 2",
    "tm.galleryEmpty": "Photos coming soon.",
    "tm.credits": "Thanks to all 10 team members, our teachers and our host school in Bielefeld.",

    "audio.title": "Audio guide",
    "audio.cs": "Česky",
    "audio.de": "Deutsch",
    "audio.missing": "Recording coming soon.",
    "station": "Station",
    "photoMissing": "Photo goes here",
    "footer": "Czech–German Project Week · Bielefeld",
    "langName": "English"
  }
};

/* Station labels for the printed QR signs (bilingual CZ / DE, as required). */
const STATION_LABELS = [
  { loc: { cs: "Radnice / Hlavní náměstí", de: "Rathaus / Hauptplatz" },
    topic: { cs: "Vítejte v našem městě, motto a 5 Zlatých pravidel", de: "Willkommen in unserer Stadt, Motto & 5 Goldene Regeln" } },
  { loc: { cs: "Dominanta města", de: "Wahrzeichen" },
    topic: { cs: "Věž přátelství a její příběh", de: "Der Turm der Freundschaft und seine Geschichte" } },
  { loc: { cs: "Škola / Nemocnice", de: "Schule / Krankenhaus" },
    topic: { cs: "Vzdělání a zdraví v našem městě", de: "Bildung und Gesundheit in unserer Stadt" } },
  { loc: { cs: "Dopravní uzel / Most", de: "Verkehrsknotenpunkt / Brücke" },
    topic: { cs: "Čistá doprava a most pro tramvaje, kola a chodce", de: "Saubere Mobilität & die Brücke für Bahn, Rad und Fußgänger" } },
  { loc: { cs: "Centrální park / Větrná farma", de: "Zentralpark / Windpark" },
    topic: { cs: "Park, energie ze slunce a větru, ekologická rovnováha", de: "Park, Energie aus Sonne und Wind, Öko-Bilanz" } },
  { loc: { cs: "Přední okraj modelu", de: "Vorderkante der Platte" },
    topic: { cs: "Fotogalerie ze zákulisí a poděkování týmu", de: "Making-of-Fotogalerie & Team-Credits" } }
];
