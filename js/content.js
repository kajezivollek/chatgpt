/* =====================================================================
   ALL EDITABLE CONTENT LIVES HERE.
   Change the city name, motto, rules, team names, photos and texts below.
   cs = Czech, de = German, en = English
   ===================================================================== */

const CONFIG = {
  // City name (same in all languages). Replace it with your own name
  cityName: "Green City",

  // Public web address of the site once it is online (used for the QR codes).
  // Leave empty to use the address the site is currently opened from.
  siteUrl: "",

  // Team 3: five pairs (Czech partner + German partner), from our Team Master Plan.
  team: [
    { pair: 1, cz: "Viola Novotná",   de: "Anneke Wittler" },
    { pair: 2, cz: "Emma Wernerová",  de: "Alexandra Lavin" },
    { pair: 3, cz: "Nicolas Tlustoš", de: "Patrik Buš" },
    { pair: 4, cz: "Jonathan Apel",   de: "Hande Akmaner" },
    { pair: 5, cz: "Kaj Kuchař",      de: "Tobias Knoth" }
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

    "home.kicker": "Česko-německý projektový týden, Bielefeld",
    "home.motto": "Dva jazyky, jedno město.",
    "home.welcomeTitle": "Vítejte",
    "home.welcome": "Ahoj a vítejte v našem městě. Deset z nás, pět z Česka a pět z Německa, naplánovalo a postavilo tento model během projektového týdne v Bielefeldu. Naskenujte QR kódy na modelu nebo se rozhlédněte přes menu nahoře.",
    "home.rulesTitle": "Našich 5 Zlatých pravidel",
    "home.rules": [
      "Neodhazuj odpadky.",
      "Neubližuj přírodě.",
      "Běžní občané nesmějí mít zbraně.",
      "Žádná doprava na fosilní paliva.",
      "Střední škola je pro všechny povinná."
    ],
    "home.identityTitle": "Znak a vlajka",
    "home.identity": "Pro město jsme navrhli vlastní znak a vlajku. Vlajku najdete i na radnici v modelu.",
    "home.crestCap": "Městský znak",
    "home.flagCap": "Městská vlajka",
    "home.planTitle": "Půdorys města",
    "home.planCap": "Půdorys našeho modelu",
    "home.explore": "Rozhlédněte se",

    "lm.title": "Památky a život",
    "lm.intro": "Budovy, které postavily dvojice 1 a 2, a co se v nich děje.",
    "lm.townhallTitle": "Radnice a Hlavní náměstí",
    "lm.townhall": "Radnice stojí na Hlavním náměstí uprostřed města. Schází se tu městská rada a lidé sem chodí, když potřebují pomoc. Nad vchodem vlaje naše vlajka. Na náměstí nesmí auta, a tak se tu konají trhy a slavnosti.",
    "lm.landmarkTitle": "Věž přátelství",
    "lm.landmark": "Věž přátelství je nejvyšší stavba našeho města, takže ji uvidíte z každé ulice. Pojmenovali jsme ji podle našeho česko-německého týmu. Z vrcholu uvidíte celé město, parky i větrnou farmu.",
    "lm.schoolTitle": "Škola",
    "lm.school": "Děti se v naší škole učí česky i německy. Na střeše jsou solární panely, žáci pěstují zeleninu ve školní zahradě a ke dveřím vede cyklostezka.",
    "lm.hospitalTitle": "Nemocnice",
    "lm.hospital": "Nemocnici jsme postavili vedle dopravního uzlu, abyste se k ní dostali tramvají nebo autobusem za pár minut. Sanitky mají vlastní pruh. Stejně jako škola běží na energii ze slunce a větru.",
    "lm.pair1": "Model dvojice 1",
    "lm.pair2": "Model dvojice 2",

    "gr.title": "Zeleň a doprava",
    "gr.intro": "V našem městě nikdo nejezdí autem na benzín. Lidé jezdí tramvají, autobusem nebo na kole a elektřina pochází ze slunce a větru.",
    "gr.transitTitle": "Tramvaje, autobusy a most",
    "gr.transit": "Elektrické tramvaje a autobusy jezdí z každé čtvrti do dopravního uzlu. Po mostě přes řeku smějí jen tramvaje, cyklisté a chodci. Cyklostezky jsou široké a cesty pěšky krátké, takže do školy, do práce ani na nákup auto nepotřebujete.",
    "gr.mapCap": "Mapa dopravy",
    "gr.energyTitle": "Slunce a vítr",
    "gr.energy": "Na střechách jsou solární panely a za městem se točí větrná farma. Baterie ukládají to, co přes den nespotřebujeme, takže světla svítí i v noci a když nefouká.",
    "gr.parksTitle": "Centrální park",
    "gr.parks": "Centrální park leží uprostřed města. Stromy čistí vzduch a rybník zachytává dešťovou vodu. Můžete tu hrát fotbal, udělat si piknik nebo si sednout do stínu.",
    "gr.ecoCap": "Ekologická rovnováha: vyrobíme tolik čisté energie, kolik město spotřebuje.",

    "tm.title": "Zákulisí a tým",
    "tm.intro": "Náš deník z obou dnů, kdo co dělal a fotky z projektového týdne.",
    "tm.diaryTitle": "Deník",
    "tm.day1Title": "1. den: plánování a stavba",
    "tm.day1": "Seznámili jsme se s partnery a dohodli se na názvu, mottu a Zlatých pravidlech. Pak jsme nakreslili půdorys a pustili se do prvních budov.",
    "tm.day2Title": "2. den: dokončení a web",
    "tm.day2": "Dostavěli jsme budovy a dali vlajku na radnici. Nahráli jsme audioprůvodce, udělali tenhle web a postavili QR cedulky k budovám.",
    "tm.teamTitle": "Kdo jsme: tým 3",
    "tm.pair": "Dvojice",
    "tm.roles": [
      "Hlavní urbanisté a manažeři",
      "Architekti hlavních budov",
      "Inženýři dopravy a mobility",
      "Ekologové a městští ekonomové",
      "Digitální svět, web a identita města"
    ],
    "tm.galleryTitle": "Fotky z 1. a 2. dne",
    "tm.galleryEmpty": "Fotky brzy přidáme.",
    "tm.credits": "Děkujeme našim učitelům a škole v Bielefeldu, která nás přijala.",

    "audio.title": "Audioprůvodce",
    "audio.cs": "Česky",
    "audio.de": "Deutsch",
    "audio.missing": "Nahrávku brzy přidáme.",
    "station": "Stanoviště",
    "photoMissing": "Fotka brzy přibude",
    "footer": "Česko-německý projektový týden, Bielefeld",
    "langName": "Čeština"
  },

  /* ----------------------------------------------------------- GERMAN */
  de: {
    "nav.home": "Start & Vision",
    "nav.landmarks": "Wahrzeichen & Leben",
    "nav.green": "Grün & Mobilität",
    "nav.team": "Making-of & Team",
    "nav.print": "QR-Schilder drucken",

    "home.kicker": "Deutsch-tschechische Projektwoche, Bielefeld",
    "home.motto": "Zwei Sprachen, eine Stadt.",
    "home.welcomeTitle": "Willkommen",
    "home.welcome": "Hallo und willkommen in unserer Stadt. Wir sind zehn Schülerinnen und Schüler, fünf aus Tschechien und fünf aus Deutschland, und haben dieses Modell in der Projektwoche in Bielefeld geplant und gebaut. Scannt die QR-Codes am Modell oder schaut euch über das Menü oben um.",
    "home.rulesTitle": "Unsere 5 Goldenen Regeln",
    "home.rules": [
      "Wirf keinen Müll weg.",
      "Schade der Natur nicht.",
      "Normale Bürger dürfen keine Waffen tragen.",
      "Keine Fahrzeuge mit fossilen Brennstoffen.",
      "Alle müssen die Oberstufe besuchen."
    ],
    "home.identityTitle": "Wappen und Flagge",
    "home.identity": "Für die Stadt haben wir ein eigenes Wappen und eine eigene Flagge entworfen. Die Flagge findet ihr auch am Rathaus im Modell.",
    "home.crestCap": "Stadtwappen",
    "home.flagCap": "Stadtflagge",
    "home.planTitle": "Grundriss der Stadt",
    "home.planCap": "Der Grundriss unseres Modells",
    "home.explore": "Schaut euch um",

    "lm.title": "Wahrzeichen & Leben",
    "lm.intro": "Die Gebäude von Paar 1 und 2 und was darin passiert.",
    "lm.townhallTitle": "Rathaus und Hauptplatz",
    "lm.townhall": "Das Rathaus steht am Hauptplatz mitten in der Stadt. Hier trifft sich der Stadtrat, und hierher kommen die Leute, wenn sie Hilfe brauchen. Über der Tür weht unsere Flagge. Autos dürfen nicht auf den Platz, deshalb finden dort Märkte und Feste statt.",
    "lm.landmarkTitle": "Der Turm der Freundschaft",
    "lm.landmark": "Der Turm der Freundschaft ist das höchste Gebäude unserer Stadt, man sieht ihn von jeder Straße aus. Wir haben ihn nach unserem deutsch-tschechischen Team benannt. Von oben seht ihr die ganze Stadt, die Parks und den Windpark.",
    "lm.schoolTitle": "Schule",
    "lm.school": "In unserer Schule lernen die Kinder auf Tschechisch und Deutsch. Auf dem Dach liegen Solarzellen, die Schüler bauen im Schulgarten Gemüse an, und ein Radweg führt bis zur Tür.",
    "lm.hospitalTitle": "Krankenhaus",
    "lm.hospital": "Wir haben das Krankenhaus neben den Verkehrsknotenpunkt gesetzt, damit ihr mit Bahn oder Bus in ein paar Minuten dort seid. Krankenwagen haben eine eigene Spur. Wie die Schule läuft es mit Sonnen- und Windstrom.",
    "lm.pair1": "Modell von Paar 1",
    "lm.pair2": "Modell von Paar 2",

    "gr.title": "Grün & Mobilität",
    "gr.intro": "In unserer Stadt fährt niemand mit dem Benziner. Man fährt mit Bahn, Bus oder Rad, und der Strom kommt von Sonne und Wind.",
    "gr.transitTitle": "Bahn, Bus und die Brücke",
    "gr.transit": "Elektrische Straßenbahnen und Busse fahren aus jedem Viertel zum Verkehrsknotenpunkt. Über die Brücke am Fluss dürfen nur Bahnen, Radfahrer und Fußgänger. Die Radwege sind breit und die Wege kurz. Für Schule, Arbeit oder Einkaufen braucht ihr kein Auto.",
    "gr.mapCap": "Verkehrsplan",
    "gr.energyTitle": "Sonne und Wind",
    "gr.energy": "Auf den Dächern liegen Solarzellen, vor der Stadt drehen sich Windräder. Batterien speichern, was wir tagsüber nicht brauchen. So bleibt das Licht auch nachts an und wenn kein Wind weht.",
    "gr.parksTitle": "Zentralpark",
    "gr.parks": "Der Zentralpark liegt mitten in der Stadt. Die Bäume reinigen die Luft, der Teich sammelt Regenwasser. Ihr könnt dort Fußball spielen, picknicken oder im Schatten sitzen.",
    "gr.ecoCap": "Öko-Bilanz: Wir erzeugen so viel sauberen Strom, wie die Stadt verbraucht.",

    "tm.title": "Making-of & Team",
    "tm.intro": "Unser Tagebuch von beiden Tagen, wer was gemacht hat, und Fotos aus der Projektwoche.",
    "tm.diaryTitle": "Tagebuch",
    "tm.day1Title": "Tag 1: Planen und Bauen",
    "tm.day1": "Wir haben unsere Partner kennengelernt und uns auf Namen, Motto und Goldene Regeln geeinigt. Dann haben wir den Grundriss gezeichnet und mit den ersten Gebäuden angefangen.",
    "tm.day2Title": "Tag 2: Fertigstellen und online gehen",
    "tm.day2": "Wir haben die Gebäude fertig gebaut und die Flagge aufs Rathaus gesetzt. Wir haben die Audioguides aufgenommen, diese Website gebaut und die QR-Schilder neben die Gebäude gestellt.",
    "tm.teamTitle": "Wer wir sind: Team 3",
    "tm.pair": "Paar",
    "tm.roles": [
      "Chef-Stadtplaner und Manager",
      "Architekten der wichtigsten Gebäude",
      "Verkehrs- und Mobilitätsingenieure",
      "Ökologen und Stadtökonomen",
      "Digital, Web und Stadtidentität"
    ],
    "tm.galleryTitle": "Fotos von Tag 1 und Tag 2",
    "tm.galleryEmpty": "Die Fotos kommen bald.",
    "tm.credits": "Danke an unsere Lehrkräfte und an die Schule in Bielefeld, die uns aufgenommen hat.",

    "audio.title": "Audioguide",
    "audio.cs": "Česky",
    "audio.de": "Deutsch",
    "audio.missing": "Die Aufnahme kommt bald.",
    "station": "Station",
    "photoMissing": "Foto kommt bald",
    "footer": "Deutsch-tschechische Projektwoche, Bielefeld",
    "langName": "Deutsch"
  },

  /* ---------------------------------------------------------- ENGLISH */
  en: {
    "nav.home": "Home & Vision",
    "nav.landmarks": "Landmarks & Life",
    "nav.green": "Green & Mobility",
    "nav.team": "Making-Of & Team",
    "nav.print": "Print QR signs",

    "home.kicker": "Czech-German project week, Bielefeld",
    "home.motto": "Two languages, one city.",
    "home.welcomeTitle": "Welcome",
    "home.welcome": "Hi, and welcome to our city. Ten of us, five from Czechia and five from Germany, planned and built this model during our project week in Bielefeld. Scan the QR codes on the model or use the menu above to look around.",
    "home.rulesTitle": "Our 5 Golden Rules",
    "home.rules": [
      "No littering.",
      "Don't harm nature.",
      "No weapons for ordinary citizens.",
      "No vehicles that run on fossil fuels.",
      "Everyone has to go to high school."
    ],
    "home.identityTitle": "Crest and flag",
    "home.identity": "We designed our own crest and flag for the city. You can also find the flag on the Town Hall in the model.",
    "home.crestCap": "City crest",
    "home.flagCap": "City flag",
    "home.planTitle": "City floor plan",
    "home.planCap": "The floor plan of our model",
    "home.explore": "Look around",

    "lm.title": "Landmarks & Life",
    "lm.intro": "The buildings Pairs 1 and 2 made, and what goes on inside them.",
    "lm.townhallTitle": "Town Hall and Main Plaza",
    "lm.townhall": "The Town Hall sits on the Main Plaza in the middle of the city. The city council meets here, and people come here when they need help. Our flag flies above the door. Cars can't drive onto the plaza, so we use it for markets and festivals.",
    "lm.landmarkTitle": "The Friendship Tower",
    "lm.landmark": "The Friendship Tower is the tallest building in our city, so you can see it from any street. We named it after our Czech-German team. Climb to the top and you'll see the whole city, the parks and the wind farm.",
    "lm.schoolTitle": "School",
    "lm.school": "Kids at our school learn in Czech and German. Solar panels cover the roof, the students grow vegetables in the school garden, and a cycle path leads up to the door.",
    "lm.hospitalTitle": "Hospital",
    "lm.hospital": "We put the hospital next to the Transit Hub, so you can get there in a few minutes by tram or bus. Ambulances have their own lane. Like the school, it runs on solar and wind power.",
    "lm.pair1": "Pair 1 model",
    "lm.pair2": "Pair 2 model",

    "gr.title": "Green & Mobility",
    "gr.intro": "Nobody in our city drives a petrol car. You get around by tram, bus or bike, and the electricity comes from the sun and the wind.",
    "gr.transitTitle": "Trams, buses and the bridge",
    "gr.transit": "Electric trams and buses run from each district to the Transit Hub. Only trams, cyclists and people on foot can cross the bridge over the river. The cycle paths are wide and the walks are short, so you won't need a car for school, work or shopping.",
    "gr.mapCap": "Transit map",
    "gr.energyTitle": "Sun and wind",
    "gr.energy": "Solar panels sit on the roofs and a wind farm turns outside the city. Batteries store what we don't use during the day. That keeps the lights on at night and when the wind drops.",
    "gr.parksTitle": "Central Park",
    "gr.parks": "Central Park sits in the middle of the city. The trees clean the air and the pond catches rainwater. You can play football, have a picnic or sit in the shade.",
    "gr.ecoCap": "Eco-Balance: we make as much clean energy as the city uses.",

    "tm.title": "Making-Of & Team",
    "tm.intro": "Our diary from the two days, who did what, and photos from the project week.",
    "tm.diaryTitle": "Diary",
    "tm.day1Title": "Day 1: planning and building",
    "tm.day1": "We met our partners and agreed on a name, a motto and the Golden Rules. Then we drew the floor plan and started on the first buildings.",
    "tm.day2Title": "Day 2: finishing and going online",
    "tm.day2": "We finished the buildings and put the flag on the Town Hall. We recorded the audio guides, built this website and stood the QR signs next to the buildings.",
    "tm.teamTitle": "Who we are: Team 3",
    "tm.pair": "Pair",
    "tm.roles": [
      "Chief urbanists and managers",
      "Architects of the key buildings",
      "Transport and mobility engineers",
      "Ecologists and city economists",
      "Digital, web and city identity"
    ],
    "tm.galleryTitle": "Photos from day 1 and day 2",
    "tm.galleryEmpty": "We'll add the photos soon.",
    "tm.credits": "Thank you to our teachers, and to the school in Bielefeld for having us.",

    "audio.title": "Audio guide",
    "audio.cs": "Česky",
    "audio.de": "Deutsch",
    "audio.missing": "We'll upload the recording soon.",
    "station": "Station",
    "photoMissing": "Photo coming soon",
    "footer": "Czech-German project week, Bielefeld",
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
