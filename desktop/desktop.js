/* =========================================================
   Portfolio „pulpit” — logika
   Dane okien (projekty + strony) → DANE niżej.
   Grafiki biorą się ze wspólnego ../assets/projects/,
   przyciski „Zobacz pełne case study” linkują do ../*.html.
   ========================================================= */
(() => {
  const P = '../assets/projects/';
  const BC = P + 'boleslawiec-case/';

  /* ---------- DANE: ikony na pulpicie ---------- */
  const ITEMS = [
    {
      id: 'filmbox', kind: 'app', label: 'Filmbox+', glyph: 'F+', bg: '#ffffff', fg: '#101010', tilt: -9, x: 11, y: 16,
      icon: 'assets/filmbox-favicon.png', // favicon „F+” ze strony filmboxplus.eu (513×513, przezroczyste tło)
      heading: 'Filmbox+', meta: 'Strona www · UX/UI · 2026',
      desc: 'Strona, która porządkuje rodzinę kanałów FilmBox+ w jedną, filmową i czytelną całość.',
      facts: [['Zakres', 'Strona www · UX/UI'], ['Rola', 'UX/UI designer'], ['Klient', 'FilmBox+ (rodzina CANAL+)'], ['Rok', '2026']],
      // pełne case study w oknie (treść 1:1 z ../filmbox.html) — otwiera się od razu na cały ekran
      full: true,
      blocks: [
        { type: 'image', src: P + 'filmbox-laptop-light.jpg', ratio: '1536 / 1024', alt: 'Filmbox+ — nowa strona na laptopie' },
        { type: 'text', label: 'Kontekst', paras: [
          'FilmBox+ to pakiet kanałów filmowych, który w ramach rebrandingu dołączył do rodziny marek CANAL+. Potrzebna była strona, która czytelnie pokaże architekturę marki i wesprze sprzedaż.',
          'Odpowiadałam za architekturę informacji, system komponentów i UI na desktop, tablet i mobile. Serwis FilmBox+ Stream był poza moim zakresem.'
        ] },
        { type: 'duo', ratio: '1585 / 992', items: [
          { src: P + 'filmbox-tv-light.jpg', alt: 'Przed — stara strona FilmBox: „na co masz dziś ochotę”' },
          { src: P + 'filmbox-mood-light.jpg', alt: 'Po — nowa strona FilmBox+: highlights wg nastroju' }
        ] },
        { type: 'compare', before: P + 'filmbox-before.jpg', after: P + 'filmbox-after.jpg' },
        { type: 'text', label: 'Wyzwanie', paras: [
          'Stara strona nie miała hierarchii: widz nie wiedział, czy sprawdzić program, poznać ofertę, czy zamówić pakiet. Kanały nie były pogrupowane, a nawigacja była ciężka.',
          'Składniki już istniały — brandbook CANAL+, key visuale, opisy kanałów, a nawet motyw nastroju. Moim zadaniem było je uporządkować: w dwa miesiące, razem z agencją Heartbeats.'
        ], quote: 'Wiele kanałów, jedna marka — strona musiała w końcu pokazać to jako całość.' },
        { type: 'image', src: P + 'filmbox-tablets-light.jpg', ratio: '1448 / 1086', alt: 'FilmBox+ na tablecie — karta programu i ramówka' },
        { type: 'text', label: 'Podejście', paras: [
          'Ciemny, filmowy kierunek: czerń i biel jako baza, a kolory poszczególnych kanałów jako akcenty, które odróżniają ich charaktery. Typografia buduje hierarchię i działa jak warstwa obrazu.',
          'Strukturę ułożyłam od pakietu, przez kanały, po zakup. Jej sercem jest sekcja architektury marki, która pokazuje kanały jako jedną rodzinę.'
        ] },
        { type: 'image', src: P + 'tab.jpg', ratio: '1537 / 1023', alt: 'FilmBox+ — wyszukiwarka na tablecie' },
        { type: 'duo', ratio: '4 / 3', items: [
          { src: P + 'filmbox-tablet-channels-light.jpg', alt: 'FilmBox+ — karty kanałów na tablecie' },
          { video: P + 'filmbox-blend.mp4', alt: 'FilmBox+ — detale i ruch' }
        ] },
        { type: 'text', label: 'Efekt i wnioski', paras: [
          'Spójny system na desktop, tablet i mobile. Widz od pierwszego ekranu wie, gdzie sprawdzić program, poznać ofertę i zamówić pakiet.',
          'Najważniejsza lekcja: hierarchia wykonuje większość pracy. Bogata oferta nie musi przytłaczać, jeśli każda rzecz ma swoje miejsce.'
        ] },
        { type: 'duo', ratio: '4 / 5', items: [
          { src: P + 'filmbox-mobile-light.jpg', alt: 'FilmBox+ na telefonie — karta programu' },
          { video: P + 'filmbox-phone2-light.mp4', alt: 'FilmBox+ na telefonie — ruch' }
        ] },
        { type: 'more', ids: ['axon', 'sona', 'dressly'] },
        { type: 'cta', heading: 'Zaprojektujmy coś razem.', text: 'Projektuję produkty cyfrowe, marki i ilustracje — od pierwszego szkicu po gotowy ekran, opakowanie czy kampanię. Szukam miejsca w zespole produktowym albo w agencji kreatywnej.', open: 'kontakt', label: 'Napisz do mnie →' }
      ],
      tags: ['UI design', 'Architektura informacji', 'Design system'],
      thumb: P + 'filmbox-laptop-light.jpg',
      extUrl: 'https://filmboxplus.eu/pl/', extLabel: 'Zobacz stronę na żywo ↗'
    },
    {
      id: 'axon', kind: 'app', label: 'Axon', glyph: 'A', bg: '#0b0b0f', fg: '#eaf1ff', tilt: 4, x: 9, y: 44,
      icon: 'assets/icon-axon-mark.png',   // znak Axona (trójkąt z gwiazdką) — wycięty ze zrzutu logo od Anny, czarne tło zamienione na przezroczyste;
      //                                     kafel czarny, bo znak był prezentowany na czerni. Poprzednie: icon-axon.svg („Sygnał”) — zostaje na dysku
      heading: 'Axon', meta: 'Koncept HMI · Prototyp · 2025',
      desc: 'Autorski koncept interfejsu samochodu elektrycznego — z naciskiem na prototyp i ruch.',
      facts: [['Zakres', 'Koncept HMI · Prototyp · Motion'], ['Rola', 'Prototyping & motion designer'], ['Klient', 'Projekt autorski (doświadczenie z Izery)'], ['Rok', '2025']],
      // pełne case study — BARDZO skrócone. Rola Anny w Izerze: prototypy i animacja GOTOWYCH ekranów z Figmy
      // (+ czasem brakujące przyciski) — NIE architektura ekranów ani system UI. Grafiki autorskie (umowa o poufności).
      full: true,
      blocks: [
        { type: 'image', src: P + 'hmi-cockpit-v2.jpg', ratio: '1506 / 1044', alt: 'Axon — ekran startowy osadzony w kokpicie samochodu elektrycznego' },
        { type: 'text', label: 'Kontekst', paras: [
          'W Izerze dostawałam gotowe projekty ekranów w Figmie i zamieniałam je w interaktywne prototypy — z animacjami przejść, a czasem z dodanymi brakującymi przyciskami. Ekrany Izery są objęte umową o poufności, dlatego pokazuję autorski koncept na własnych grafikach.',
          'Nazwa projektu, Axon, pochodzi od aksonu — włókna nerwowego, które przewodzi sygnały, tak jak interfejs między kierowcą a autem.'
        ] },
        { type: 'video', src: P + 'hmi-transitions.mp4', ratio: '1280 / 720', frame: 0.03, alt: 'Axon — przejścia między trybami: Start, Pojazd i Nawigacja' },
        { type: 'text', label: 'Wyzwanie', paras: [
          'Każde spojrzenie na ekran odbywa się kosztem drogi, więc ruch musi tłumaczyć zmianę szybciej niż tekst.'
        ], quote: 'Dobry interfejs w aucie to taki, na który nie trzeba patrzeć dwa razy.' },
        { type: 'text', label: 'Prototyp', paras: [
          'Animacja w aucie nie zdobi — pokazuje, skąd przyszedł ekran i czy system przyjął polecenie. Przejścia, ich długości i krzywe dopracowuję wprost w prototypie, bo na statycznej makiecie nie da się ich ocenić.'
        ] },
        // specyfikacja ruchu na ekranach Axon (zastąpiła hmi-motion-spec.svg); klatki wycięte z hmi-transitions.mp4
        { type: 'motion', klimat: P + 'hmi-klimat-v2.jpg', start: P + 'hmi-frame-start.jpg', pojazd: P + 'hmi-frame-pojazd.jpg', nav: P + 'hmi-frame-nav.jpg', captions: [
          ['120 ms', 'Mikroreakcja', 'Dotknięcie paska nawiewu: segment i wartość odpowiadają od razu.'],
          ['240 ms', 'Zmiana panelu', 'Panel Pojazd otwiera się nad ekranem Start. Paski u góry i u dołu zostają.'],
          ['400 ms', 'Zmiana trybu', 'Nawigacja wjeżdża od dołu jako cała warstwa, a powrót zjeżdża w dół.']
        ] },
        { type: 'step', n: '01', title: 'Ekran jazdy', paras: ['Przewijany pasek kafli, stałe paski u góry i u dołu.'] },
        { type: 'image', src: P + 'hmi-kafle-v2.jpg', ratio: '1448 / 880', alt: 'Axon — pasek kafli w kokpicie: pogoda, ładowanie i stan pojazdu' },
        { type: 'step', n: '02', title: 'Klimat i media', paras: ['Klimat i media otwierane warstwę niżej.'] },
        { type: 'duo', ratio: '1918 / 1078', items: [
          { src: P + 'hmi-klimat-v2.jpg', alt: 'Axon — pełny widok klimatyzacji' },
          { src: P + 'hmi-media.jpg', alt: 'Axon — pełny widok mediów' }
        ] },
        { type: 'step', n: '03', title: 'Dzień i noc', paras: ['Ten sam układ w dwóch wariantach koloru.'] },
        { type: 'compare', before: P + 'hmi-dzien.jpg', after: P + 'hmi-noc.jpg', beforeLabel: 'Dzień', afterLabel: 'Noc', ratio: '1904 / 1072', aria: 'Porównanie: wariant dzienny i nocny' },
        { type: 'step', n: '04', title: 'Mikrointerakcje', paras: ['Krótka odpowiedź systemu na każdą akcję.'] },
        { type: 'video', src: P + 'hmi-micro.mp4', ratio: '1600 / 900', frame: 0.5, alt: 'Axon — mikrointerakcje: temperatura, tryb jazdy, sterowanie mediami' },
        { type: 'text', label: 'Efekt i wnioski', paras: [
          'Klikalny prototyp z systemem przejść i mikrointerakcji. Najważniejsza lekcja: w aucie liczy się czas zrozumienia.'
        ] },
        { type: 'more', ids: ['filmbox', 'sona', 'dressly'] },
        { type: 'cta', heading: 'Zaprojektujmy coś razem.', text: 'Projektuję produkty cyfrowe, marki i ilustracje — od pierwszego szkicu po gotowy ekran, opakowanie czy kampanię. Szukam miejsca w zespole produktowym albo w agencji kreatywnej.', open: 'kontakt', label: 'Napisz do mnie →' }
      ],
      tags: ['HMI', 'Prototyp', 'Motion', 'Automotive'],
      thumb: P + 'hmi-cockpit-v2.jpg'
    },
    {
      id: 'sona', kind: 'app', label: 'Sona', glyph: 'so', bg: '#16161a', fg: '#fff', tilt: -4, x: 22, y: 30,
      icon: 'assets/icon-sona.svg', iconBleed: true,   // pełny logotyp „sona” z pomarańczowym „o” (prośba Anny; glyph 'so' zostaje jako zapas)
      heading: 'Sona', meta: 'Produkt · Web app & AI · 2026',
      desc: 'Prywatny dziennik, w którym dzień jest jednostką wszystkiego — jednej notatki, jednego nastroju i jednej rozmowy.',
      facts: [['Zakres', 'Produkt · UX/UI · Wdrożenie'], ['Rola', 'Product & UX/UI designer'], ['Klient', 'Projekt autorski · kurs Nueve'], ['Rok', '2026']],
      // pełne case study w oknie — kolejność grafik 1:1 z ../sona.html, teksty SKRÓCONE (Anna: za dużo tekstu; pełne w sona.html)
      full: true,
      blocks: [
        { type: 'image', src: P + 'sona-tablet.jpg', ratio: '1474 / 1018', alt: 'sona — ekran logowania aplikacji na tablecie leżącym na rdzawym fotelu' },
        { type: 'text', label: 'Kontekst', paras: [
          'Autorska aplikacja do prowadzenia dziennika — od pomysłu, przez architekturę i interfejs, po działający, wdrożony produkt. Można się zalogować, zapisać dzień i wrócić do niego za tydzień.',
          'Nazwa pochodzi od persony — maski, którą nosimy na co dzień. Sona to to, co zostaje, kiedy się ją zdejmie. Dlatego interfejs nie ocenia i o nic nie prosi poza zapisaniem dnia.'
        ] },
        { type: 'duo', ratio: '1121 / 1403', items: [
          { src: P + 'sona-phone.jpg', alt: 'sona — ekran dziennika na telefonie leżącym na rdzawym tle w smugach światła' },
          { src: P + 'sona-phone-hand.jpg', alt: 'sona — widok dnia z rozmową z Soną na telefonie trzymanym w dłoni' }
        ] },
        { type: 'text', label: 'Wyzwanie', paras: [
          'Dzienniki się porzuca przez próg wejścia: pusty ekran i poczucie, że trzeba napisać coś mądrego. Aplikacje do notatek szybko zamieniają się w listę fragmentów, w której nie widać dni.',
          'Najtrudniejsza była warstwa AI — czat doklejony do dziennika albo zagaduje, albo ląduje na osobnym ekranie, do którego nikt nie zagląda.'
        ], quote: 'Dziennik przegrywa nie z brakiem czasu, tylko z poczuciem, że wpis musi być czegoś wart.' },
        { type: 'text', label: 'Podejście', paras: [
          'Jedna twarda decyzja: jeden wpis na dzień. Dzień ma jedną notatkę, jeden nastrój i jedną rozmowę — to rozstrzygnęło, co kasuje kosz, co pokazuje kalendarz i do czego przypięta jest rozmowa. Reszta jest cicha: płaskie linie zamiast kart i jeden pomarańczowy akcent.'
        ] },
        { type: 'principles', items: [
          ['01', 'Dzień jako jednostka', 'Jedna notatka, jeden nastrój, jedna rozmowa — wszystko przypięte do daty.'],
          ['02', 'Wpis bez pisania', 'Sam nastrój, bez słowa, też jest wpisem. Zapis dzieje się sam, bez przycisku.'],
          ['03', 'Akcent zarezerwowany', 'Pomarańcz znaczy „dziś” albo „nagrywam”. Nigdy nie jest dekoracją.'],
          ['04', 'Sona nie zagaduje', 'Milczy, dopóki jej nie zapytasz. Żadnych przypomnień, serii i presji.']
        ] },
        { type: 'image', src: P + 'sona-architektura.svg', ratio: '1600 / 800', alt: 'Architektura sony — ekran przeglądu i ekran dnia, przejście klikiem w dzień i powrót' },
        { type: 'text', label: 'Zakres i struktura', items: [
          ['Produkt i architektura', 'Model danych oparty na dniu, dwa ekrany o rozdzielonych rolach, zakres MVP.'],
          ['System UI i ekrany', 'Typografia, motyw jasny i ciemny, dziennik, widok dnia, logowanie — desktop i mobile.'],
          ['Warstwa AI', 'Rozmowa przypięta do dnia, persona i ton Sony.'],
          ['Wdrożenie', 'Działająca aplikacja z kontami, prywatnymi danymi i dyktowaniem głosem.']
        ] },
        { type: 'text', label: 'Rozwiązanie', paras: [
          'Dwa ekrany: dziennik służy do przeglądania, widok dnia — do pisania, mówienia i rozmowy.'
        ] },
        { type: 'step', n: '01', title: 'Dziennik — dni, nie notatki', paras: [
          'Pasek siedmiu dni; dni z wpisem mają pomarańczową liczbę, więc od razu widać dziury.'
        ] },
        { type: 'image', src: P + 'sona-feed.svg', ratio: '1600 / 900', alt: 'sona — ekran dziennika: pasek dni, rozwijany kalendarz i feed wpisów' },
        { type: 'step', n: '02', title: 'Dzień — jedno pole i pięć twarzy', paras: [
          'Jedno pole tekstowe i nastrój pod spodem. Bez przycisku „zapisz” — tekst zapisuje się sam.'
        ] },
        { type: 'image', src: P + 'sona-day.svg', ratio: '1600 / 900', alt: 'sona — widok dnia: notatka i wybór nastroju' },
        { type: 'step', n: '03', title: 'Rozmowa przypięta do dnia', paras: [
          'Każdy dzień ma własną rozmowę, ale Sona zna cały dziennik — więc „jak minął mi czerwiec?” też działa.'
        ] },
        { type: 'image', src: P + 'sona-model.svg', ratio: '1600 / 900', alt: 'Model rozmowy — wątek przypięty do dnia, kontekst obejmujący cały dziennik' },
        { type: 'image', src: P + 'sona-chat.svg', ratio: '1600 / 900', alt: 'sona — wątek rozmowy z Soną w widoku dnia' },
        { type: 'step', n: '04', title: 'Jeden mikrofon, dwa cele', paras: [
          'O celu decyduje fokus: kliknięta notatka — dyktujesz wpis; pasek rozmowy — mówisz do Sony.'
        ] },
        { type: 'image', src: P + 'sona-focus.svg', ratio: '1600 / 900', alt: 'Model fokusu — jeden mikrofon obsługujący notatkę dnia i rozmowę z Soną' },
        { type: 'step', n: '05', title: 'Dwa motywy, jeden układ', paras: [
          'Jasny i ciemny motyw na jednym zestawie zmiennych — bez mignięcia bieli w nocy.'
        ] },
        { type: 'compare', before: P + 'sona-theme-light.svg', after: P + 'sona-theme-dark.svg', beforeLabel: 'Jasny', afterLabel: 'Ciemny', ratio: '1600 / 900', aria: 'Porównanie: ten sam ekran dnia w motywie jasnym i ciemnym' },
        { type: 'text', label: 'Efekt i wnioski', paras: [
          'Działająca aplikacja, a nie prezentacja ekranów. Używam jej sama — to najostrzejszy test, bo każdy zbędny klik po tygodniu naprawdę przeszkadza.',
          'Najwięcej nauczyło mnie odejmowanie: kolejne funkcje wylatywały, a produkt za każdym razem zyskiwał. W warstwie AI trudne nie było podłączenie modelu, tylko decyzja, gdzie rozmowa ma mieszkać.'
        ], todo: 'Dopisz własną refleksję z używania sony na co dzień (jak długo prowadzisz dziennik, co Cię zaskoczyło, co byś dziś zaprojektowała inaczej). Jeśli ktoś jeszcze z niej korzystał — dopisz feedback. Usuń tę ramkę przed publikacją.' },
        { type: 'image', src: P + 'sona-tablet-feed.jpg', ratio: '1536 / 864', alt: 'sona — ekran dziennika na tablecie w świetle okna' },
        { type: 'more', ids: ['filmbox', 'axon', 'dressly'] },
        { type: 'cta', heading: 'Zaprojektujmy coś razem.', text: 'Projektuję produkty cyfrowe, marki i ilustracje — od pierwszego szkicu po gotowy ekran, opakowanie czy kampanię. Szukam miejsca w zespole produktowym albo w agencji kreatywnej.', open: 'kontakt', label: 'Napisz do mnie →' }
      ],
      tags: ['Product design', 'Web app', 'AI'],
      thumb: P + 'sona-tablet.jpg',
      extUrl: 'https://sona-journal.vercel.app', extLabel: 'Otwórz aplikację ↗'
    },
    {
      id: 'boleslawiec', kind: 'app', label: 'Bolesławiec', glyph: '◎', bg: '#252E5C', fg: '#efe7db', icon: 'assets/icon-boleslawiec.svg',   // znak „pawie oczko” jako SVG na granacie marki (30.09)
      tilt: -7, x: 91, y: 53,
      heading: 'Bolesławiec', meta: 'Rebranding · Aplikacja · Projekt koncepcyjny',
      desc: 'Koncepcyjny rebranding marki bolesławieckiej ceramiki — uproszczony znak z „pawim oczkiem”, kobaltowo-kremowa identyfikacja i aplikacja sklepu.',
      facts: [['Zakres', 'Identyfikacja · Aplikacja mobilna'], ['Rola', 'Brand & UX/UI designer'], ['Klient', 'Projekt koncepcyjny (studia)'], ['Rok', '2022']],
      // przebudowane 27.09 (prośba Anny): historia zamiast zrzutu 10 plansz; pełna wersja nadal w ../boleslawiec.html
      full: true,
      blocks: [
        { type: 'image', src: BC + '01-hero.png', ratio: '2000 / 1333', alt: 'Bolesławiec — nowa identyfikacja' },
        { type: 'text', label: 'Kontekst', paras: [
          'Projekt koncepcyjny ze studiów: nowa identyfikacja dla marki bolesławieckiej ceramiki i aplikacja, w której można ją kupić.',
          'Punkt wyjścia to znak, który musi działać podwójnie — jako logo marki i jako stempel wypalany na dnie każdego naczynia.'
        ] },
        { type: 'text', label: 'Wyzwanie', paras: [
          'Dawne logo kojarzyło się z urokiem miasta, ale nie z bogactwem oferty. Miało też za dużo elementów, żeby dobrze odbijać się jako stempel.'
        ], quote: 'Z dawnego logo zostawiłam tylko kobaltowy błękit — most między tradycją a nowoczesnością.' },
        { type: 'text', label: 'Marka', paras: [
          'Znak to uproszczone „pawie oczko” — najbardziej rozpoznawalny motyw bolesławieckiej ceramiki: trzy okręgi wyrastające z jednego punktu. Czyta się od szyldu po dno filiżanki.',
          'Paleta łączy granat, kobalt, krem i papier; Cormorant Garamond niesie elegancję, Hanken Grotesk — czytelność w interfejsie.'
        ] },
        { type: 'image', src: BC + '02-logo.png', ratio: '2000 / 1000', alt: 'Znak Bolesławiec — pawie oczko' },
        { type: 'duo', ratio: '2000 / 820', items: [
          { src: BC + '03-paleta.png', alt: 'Paleta kolorów: granat, kobalt, krem, papier, grafit' },
          { src: BC + '04-typografia.png', alt: 'Typografia: Cormorant Garamond i Hanken Grotesk' }
        ] },
        { type: 'step', n: '', title: 'Identyfikacja', paras: ['Pocztówki, taśma do paczek i torba — znak działa na papierze, na kartonie i na materiale.'] },
        { type: 'image', src: BC + '05-pocztowki.png', ratio: '1485 / 990', alt: 'Pocztówki' },
        { type: 'duo', ratio: '4 / 5', items: [
          { src: BC + '11-karton.jpg', alt: 'Karton wysyłkowy z taśmą we wzór pawiego oczka' },
          { src: BC + '12-torba.jpg', alt: 'Granatowa torba z kremowym znakiem Bolesławca' }
        ] },
        { type: 'text', label: 'Aplikacja', paras: [
          'Sklep z ceramiką w kieszeni: katalog według dekoracji i kształtu, karta produktu i zakup — w tym samym kobaltowo-kremowym języku co marka.'
        ] },
        { type: 'image', src: BC + '07-app-hero.png', ratio: '1448 / 1086', alt: 'Aplikacja mobilna Bolesławiec' },
        { type: 'step', n: '', title: 'W działaniu i w social mediach', paras: ['Nagranie aplikacji i profil marki — ten sam język w dłoni.'] },
        { type: 'duo', ratio: '1080 / 1920', items: [
          { video: BC + '08-app.mp4', alt: 'Aplikacja Bolesławiec w działaniu — nagranie ekranu' },
          { src: BC + '06-ig-profil.png', alt: 'Profil marki na Instagramie', pos: '50% 0' }
        ] },
        { type: 'text', label: 'Efekt', paras: [
          'Jeden motyw prowadzi przez wszystko: od stempla na naczyniu, przez pocztówki i Instagram, po przycisk w aplikacji. To projekt, na którym nauczyłam się myśleć o marce jako systemie, a nie pojedynczym logo.'
        ] },
        { type: 'image', src: BC + '10-cytat.png', ratio: '1080 / 1080', mid: true, alt: 'Zaczaruj codzienność ceramiką' },
        { type: 'more', ids: ['dressly', 'luna', 'tutti'] },
        { type: 'cta', heading: 'Zaprojektujmy coś razem.', text: 'Projektuję produkty cyfrowe, marki i ilustracje — od pierwszego szkicu po gotowy ekran, opakowanie czy kampanię. Szukam miejsca w zespole produktowym albo w agencji kreatywnej.', open: 'kontakt', label: 'Napisz do mnie →' }
      ],
      tags: ['Logo', 'Identyfikacja', 'Aplikacja mobilna'],
      thumb: BC + '01-hero.png'
    },
    {
      id: 'dressly', kind: 'app', label: 'Dressly', glyph: 'd', bg: '#835840', fg: '#fff', tilt: -6, x: 90, y: 26,
      icon: 'assets/icon-dressly.svg',   // monogram „dR łuk” z eksportu logo Anny (Prace/04_Dressly_App/…/1. Logo/svg), wersja kremowa na karmelu #835840
      heading: 'Dressly', meta: 'Marka · Sklep · 2024',
      desc: 'Dressly — autorska marka mody, w której identyfikacja i sklep mówią jednym, spokojnym głosem.',
      facts: [['Zakres', 'Identyfikacja · Sklep · UX/UI'], ['Rola', 'Brand & UX/UI designer'], ['Klient', 'Butik online Dressly'], ['Rok', '2024']],
      // przebudowane 28.09 (prośba Anny): krótsza historia, grafiki w parach; pełna wersja nadal w ../dressly.html
      full: true,
      blocks: [
        { type: 'image', src: P + 'dressly-brand.png', ratio: '1800 / 1034', alt: 'Dressly — identyfikacja wizualna: papier firmowy, wizytówka, koperta z monogramem, motyw botaniczny' },
        { type: 'text', label: 'Kontekst', paras: [
          'Zlecenie z Useme: marka dla rodzeństwa, które otworzyło butik online z modą damską — zbudowana wokół jednej idei, stylowego minimalizmu. Przeszłam przez cały proces, od znaku i palety po kompletny sklep na desktop i mobile.'
        ] },
        { type: 'text', label: 'Marka', paras: [
          'Szeryfowe logo „dress·ly” z kropką w środku nadaje marce butikowy, redakcyjny ton. Monogram „dR” z łukiem „stylowy minimalizm” działa jak pieczęć — na kopercie, metce i taśmie.',
          'Zamiast czerni, która dominuje w modzie online, wybrałam ciepłe odcienie ziemi: papierową biel, beże, mokkę i czekoladę.'
        ] },
        { type: 'duo', ratio: '4 / 3', items: [
          { src: P + 'dressly-logo-tile.jpg', alt: 'Logo Dressly — szeryfowe „dress·ly” w kolorze czekolady' },
          { src: P + 'dressly-monogram-tile.jpg', alt: 'Monogram Dressly „dR” z łukiem „stylowy minimalizm” na karmelowym tle' }
        ] },
        { type: 'image', src: P + 'dressly-palette.png', ratio: '797 / 480', mid: true, alt: 'Paleta kolorów Dressly — papierowa biel, beże, mokka, karmel i czekolada' },
        { type: 'text', label: 'Wyzwanie', paras: [
          'Moda online jest głośna: nieskończone siatki, wyprzedaże, migające bannery. Chciałam marki, która wyróżnia się spokojem — i sklepu, który mimo to ma wszystko, czego potrzeba: filtry, warianty, koszyk, ulubione.'
        ], quote: 'Sklep, który sprzedaje spokojem, a nie hałasem.' },
        { type: 'text', label: 'Podejście', paras: [
          'Zaczęłam od marki, nie od ekranów — dzięki temu interfejs wynika z języka marki, a nie jest w niego „ubrany”.'
        ] },
        { type: 'principles', items: [
          ['01', 'Stylowy minimalizm', 'Dużo bieli, spokojne siatki, delikatne linie. Interfejs schodzi z drogi produktowi.'],
          ['02', 'Ciepła paleta', 'Beże, mokka i czekolada zamiast czerni. Premium bez krzyku.'],
          ['03', 'Marka to interfejs', 'Ten sam znak, kolor i detal w identyfikacji i w sklepie.'],
          ['04', 'Zakupy bez tarcia', 'Od „podoba mi się” do „kupuję” w jak najmniejszej liczbie kroków.']
        ] },
        { type: 'text', label: 'Sklep', paras: [
          'Listing z filtrami rozmiaru, ceny i koloru — wybór wariantu wprost z kafla. Karta produktu skupia decyzję: galeria, kolor, rozmiar i tabela rozmiarów.'
        ] },
        { type: 'duo', ratio: '1920 / 3490', items: [
          { src: P + 'dressly-1.png', alt: 'Dressly — listing produktów z filtrami rozmiaru, ceny i koloru', pos: '50% 0' },
          { src: P + 'dressly-3.png', alt: 'Dressly — karta produktu z galerią, wyborem koloru i rozmiaru', pos: '50% 0' }
        ] },
        { type: 'step', n: '', title: 'Koszyk i ulubione', paras: ['Koszyk z progiem darmowej dostawy i kodami rabatowymi; ulubione z powiadomieniem, gdy rozmiar wróci.'] },
        { type: 'duo', ratio: '1920 / 1905', items: [
          { src: P + 'dressly-2.png', alt: 'Dressly — koszyk z podsumowaniem i kodem rabatowym', pos: '50% 0' },
          { src: P + 'dressly-4.png', alt: 'Dressly — ulubione z powiadomieniem o dostępności', pos: '50% 0' }
        ] },
        { type: 'step', n: '', title: 'Konto na telefonie', paras: ['Rejestracja, logowanie przez Google i Facebook, panel konta i komunikaty błędów — w tym samym spokojnym języku.'] },
        { type: 'image', src: P + 'dressly-mobile.jpg', ratio: '1860 / 1080', alt: 'Dressly mobile — rejestracja, panel konta, logowanie i formularz z komunikatami błędów' },
        { type: 'text', label: 'Efekt', paras: [
          'Marka i sklep mówią jednym głosem — od koperty z monogramem po koszyk. Najwięcej nauczył mnie minimalizm w e-commerce: spokój na ekranie to efekt decyzji, a nie braku treści.'
        ] },
        { type: 'more', ids: ['neo', 'luna', 'boleslawiec'] },
        { type: 'cta', heading: 'Zaprojektujmy coś razem.', text: 'Projektuję produkty cyfrowe, marki i ilustracje — od pierwszego szkicu po gotowy ekran, opakowanie czy kampanię. Szukam miejsca w zespole produktowym albo w agencji kreatywnej.', open: 'kontakt', label: 'Napisz do mnie →' }
      ],
      tags: ['Branding', 'E-commerce', 'UX/UI'],
      thumb: P + 'dressly-brand.png',
      extUrl: 'https://www.facebook.com/profile.php?id=61558704911388&sk=directory_contact_info&locale=pl_PL', extLabel: 'Dressly na Facebooku ↗'
    },
    {
      id: 'neo', kind: 'app', label: 'NeoCouture', glyph: 'NC', bg: '#ead9c7', fg: '#2a1e22', tilt: 3, x: 79, y: 40,
      icon: 'assets/icon-neo.webp', iconBleed: true,   // kaligraficzny logotyp wycięty z nagłówka strony, kafel w beżu marki (#ead9c7)
      heading: 'NeoCouture', meta: 'Sklep · UX/UI · Motion · 2023',
      desc: 'Sklep marki modowej premium — spokojny, editorialowy układ, w którym prowadzi zdjęcie i typografia.',
      facts: [['Zakres', 'Sklep · UX/UI · Motion'], ['Rola', 'UI & motion designer'], ['Klient', 'Projekt autorski'], ['Rok', '2023']],
      full: true,
      blocks: [
        { type: 'video', src: P + 'neo-home-scroll.mp4', ratio: '2220 / 1480', frame: 0.1, alt: 'NeoCouture — przewijanie strony głównej: zdjęcie kampanii, kolekcja, butik i stopka' },
        { type: 'text', label: 'Kontekst', paras: [
          'Autorski projekt sklepu marki mody premium. Chciałam sprawdzić, jak daleko da się pójść w stronę spokoju: bez banerów promocyjnych i krzyczących przecen — zostaje zdjęcie, typografia i powietrze.',
          'Marka jest moja, więc cały język wizualny powstał od zera: kaligraficzny logotyp, wersaliki w nawigacji, paleta beżów i nude.'
        ] },
        { type: 'image', src: P + 'neo-home.jpg', ratio: '16 / 9', alt: 'Strona główna NeoCouture — logotyp, jedno zdjęcie i adres butiku' },
        { type: 'text', label: 'Podejście', paras: [
          'Zdjęcie prowadzi, interfejs schodzi z drogi. Nawigacja to jedna linia wersalików, karta produktu ma jedną kolumnę tekstu i szeroki margines, a koszyk otwiera się z boku, żeby nie wyrzucać nikogo ze ścieżki zakupu.'
        ] },
        { type: 'video', src: P + 'neo-collection-scroll.mp4', ratio: '2220 / 1480', frame: 0.5, alt: 'NeoCouture — przewijanie kolekcji: zdjęcie kampanii i siatka produktów' },
        { type: 'text', label: 'Efekt', paras: [
          'Komplet ekranów: strona główna, listing z filtrami, karta produktu, koszyk i widoki mobilne — razem z animacjami przejść.',
          'Wszystkie nagrania w tym projekcie to mój montaż: pokazują nie tylko ekrany, ale też rytm przewijania i to, jak sklep reaguje na ruch.'
        ] },
        { type: 'duo', ratio: '16 / 9', items: [
          { src: P + 'neo-product.jpg', alt: 'Karta produktu — swetr wełniany i sekcja „The Packing List”' },
          { src: P + 'neo-mobile.jpg', alt: 'Widoki mobilne — karta produktu, koszyk z pakowaniem na prezent, zapis na newsletter' }
        ] },
        { type: 'video', src: P + 'neo-scarf-clean.mp4', ratio: '1296 / 772', frame: 0.5, alt: 'NeoCouture — karta produktu i koszyk otwierany z boku' },
        { type: 'more', ids: ['dressly', 'sliwka', 'tutti'] },
        { type: 'cta', heading: 'Zaprojektujmy coś razem.', text: 'Projektuję produkty cyfrowe, marki i ilustracje — od pierwszego szkicu po gotowy ekran, opakowanie czy kampanię. Szukam miejsca w zespole produktowym albo w agencji kreatywnej.', open: 'kontakt', label: 'Napisz do mnie →' }
      ],
      tags: ['E-commerce', 'UI design', 'Motion'],
      thumb: P + 'neo-lead.jpg'
    },
    {
      id: 'tutti', kind: 'app', label: 'Tutti Santi', glyph: 'TS', bg: '#ffffff', fg: '#8a6a2a', tilt: 6, x: 90, y: 80,
      icon: 'assets/icon-tutti.webp', iconBleed: true,   // złoty ornament na BIAŁYM kaflu (decyzja Anny 18.09 — po próbie z czernią wróciłyśmy do bieli).
      //                                     ⚠️ Odrzucone warianty: czarny kafel ze złotym (12.png) i z białym ornamentem (negate konturu) — oba gorzej czytelne;
      //                                     nowy kadr ze `tutti santizlote.png` wyszedł blady i za mały. Ta ikona (ciasny kadr talerza) wygrywa.
      //                                     Poprzednie ikony (icon-tutti.webp, icon-tutti-black.webp) zostają na dysku
      heading: 'Tutti Santi', meta: 'Ilustracja · Talerz · 2023',
      desc: 'Zwycięska grafika na talerze sieci pizzerii Tutti Santi — renesansowy ornament stworzony w konkursie „Smak to sztuka”.',
      facts: [['Zakres', 'Ilustracja · Grafika na talerz'], ['Rola', 'Ilustratorka i projektantka'], ['Klient', 'Tutti Santi — konkurs „Smak to sztuka”'], ['Rok', '2023']],
      full: true,
      blocks: [
        { type: 'image', src: P + 'tutti-plate.jpg', ratio: '1800 / 1350', alt: 'Talerz Tutti Santi — złoty renesansowy ornament na białej porcelanie' },
        { type: 'text', label: 'Kontekst', paras: [
          'Tutti Santi to sieć pizzerii, której patronem i współzałożycielem jest Valerio Valle — Mistrz Europy i Mistrz Włoch w pizzy klasycznej. Sieć ogłosiła konkurs „Smak to sztuka” na grafikę na talerz, która stanie się częścią identyfikacji wizualnej restauracji.',
          'Zadaniem była grafika na talerze do pizzy o średnicy 33 cm. Mój projekt zdobył nagrodę główną, a talerze trafiły do wszystkich lokali sieci w Polsce i weszły do sprzedaży.'
        ] },
        { type: 'duo', ratio: '1 / 1', items: [
          { src: P + 'tutti-plate-black.jpg', alt: 'Talerz w wersji czarnej ze złotym ornamentem' },
          { src: P + 'tutti-plate-silver.jpg', alt: 'Talerz w wersji białej ze srebrnym ornamentem' },
          { src: P + 'tutti-plate-white.jpg', alt: 'Talerz w wersji białej ze złotym ornamentem' }
        ] },
        { type: 'text', label: 'Inspiracja', paras: [
          'Ornament łączy włoskie motywy renesansowe, rzymską architekturę i rozetę z charakterem samych restauracji Tutti Santi. Symetryczny wieniec obiega brzeg, a środek talerza zostaje wolny — z jednym zdaniem: „Odkryłeś piękno? Podziel się.”'
        ] },
        { type: 'image', src: P + 'tutti-restaurant.jpg', ratio: '1800 / 1350', alt: 'Talerze na stołach w restauracji Tutti Santi' },
        { type: 'text', label: 'Proces', paras: [
          'Od ręcznego szkicu, przez wektorowy szablon gotowy do nadruku, po wizualizację produkcyjną talerza.'
        ] },
        { type: 'image', src: P + 'tutti-proces.jpg', ratio: '1600 / 1000', alt: 'Proces — ręczny szkic ornamentu ołówkiem i gotowy rysunek konturowy talerza' },
        { type: 'image', src: P + 'tutti-plate-wall.jpg', ratio: '1800 / 1134', alt: 'Etap 3 — talerz z logo Tutti Santi, wizualizacja produkcyjna' },
        { type: 'duo', ratio: '1 / 1', items: [
          { src: P + 'tutti-pizza.jpg', alt: 'Talerz w użyciu — kawałek pizzy na wolnym środku talerza' },
          { src: P + 'tutti-stack.jpg', alt: 'Gotowe talerze z nadrukowanym ornamentem, ułożone w stosy' }
        ] },
        { type: 'more', ids: ['filmbox', 'axon', 'sona'] },
        { type: 'cta', heading: 'Zaprojektujmy coś razem.', text: 'Projektuję produkty cyfrowe, marki i ilustracje — od pierwszego szkicu po gotowy ekran, opakowanie czy kampanię. Szukam miejsca w zespole produktowym albo w agencji kreatywnej.', open: 'kontakt', label: 'Napisz do mnie →' }
      ],
      tags: ['Ilustracja', 'Ornament', 'Konkurs — nagroda główna'],
      thumb: P + 'tutti-plate.jpg'
    },
    {
      id: 'sliwka', kind: 'app', label: 'Śliwka Nałęczowska', glyph: 'ŚN', bg: '#1a2479', fg: '#fff', tilt: -5, x: 79, y: 68,
      icon: 'assets/icon-sliwka-logo.webp', iconBleed: true,   // oficjalne logo marki (owal na granacie) — plik od Anny (images.jpeg 340×340 → 512 px).
      //                                     Kafel ma DOKŁADNIE kolor tła logo (#1a2479, próbka z rogów pliku), więc kwadrat zlewa się z kaflem.
      //                                     Poprzednia ikona: icon-sliwka.webp (owal wycięty z key visualu) — zostaje na dysku
      heading: 'Śliwka Nałęczowska', meta: 'Ilustracja · Opakowania',
      desc: 'Ilustracje i kolaż na opakowania Śliwki Nałęczowskiej — metalowa puszka ze sceną z codzienności, świąteczny kartonik z zimowym miasteczkiem i kolażowa wersja kartonika.',
      facts: [['Zakres', 'Ilustracja · Opakowania'], ['Rola', 'Ilustratorka'], ['Klient', 'Konkurs — Śliwka Nałęczowska'], ['Rok', '2024–2025']],
      full: true,
      // przebudowane 28.09 (prośba Anny: „średnio wygląda”): mniej powtórzeń puszki, kartoniki w parze, czarne tło usunięte
      blocks: [
        { type: 'image', src: P + 'sliwka-tin.jpg', ratio: '1363 / 1154', alt: 'Śliwka Nałęczowska — metalowa puszka z ilustracją' },
        { type: 'text', label: 'Kontekst', paras: [
          'Trzy projekty konkursowe na opakowania Śliwki Nałęczowskiej: puszkę i dwa kartoniki. Ilustracje zachowują to, po czym produkt się rozpoznaje — owalny znak ze śliwkami i granat marki — ale opowiadają o nim nowym, rysowanym językiem.'
        ] },
        { type: 'text', label: 'Puszka', paras: [
          'Na wieczku ludzie w spokojnych, codziennych chwilach — muzyka, kawa, rower, odpoczynek — ułożeni wokół logo jak w jednym kadrze. Malarskie faktury i śliwkowe kształty budują ciepły, współczesny klimat.'
        ] },
        { type: 'duo', ratio: '1375 / 1144', items: [
          { src: P + 'sliwka-keyvisual.jpg', alt: 'Ilustracja na wieczko puszki — płaski key visual' },
          { src: P + 'sliwka-logo-detail.jpg', alt: 'Zbliżenie — znak Śliwki Nałęczowskiej i złoty rant puszki' }
        ] },
        { type: 'text', label: 'Kartoniki', paras: [
          'Dwa projekty kartonika 190 g w zupełnie różnych tonach. Świąteczny: nocne miasteczko pod śniegiem i śliwki zawinięte jak prezenty. Kolażowy: surrealistyczna kompozycja z baletnicą, antyczną rzeźbą i okiem wokół znaku marki.'
        ] },
        { type: 'duo', ratio: '1400 / 2068', items: [
          { src: P + 'sliwka-christmas.jpg', alt: 'Świąteczny kartonik Śliwki Nałęczowskiej — wizualizacja' },
          { src: P + 'sliwka-collage-front.jpg', alt: 'Kartonik 190 g z kolażem — front opakowania z logo Śliwki Nałęczowskiej' }
        ] },
        { type: 'more', ids: ['tutti', 'luna', 'dressly'] },
        { type: 'cta', heading: 'Zaprojektujmy coś razem.', text: 'Projektuję produkty cyfrowe, marki i ilustracje — od pierwszego szkicu po gotowy ekran, opakowanie czy kampanię. Szukam miejsca w zespole produktowym albo w agencji kreatywnej.', open: 'kontakt', label: 'Napisz do mnie →' }
      ],
      tags: ['Ilustracja', 'Packaging', 'FMCG'],
      thumb: P + 'sliwka-tin.jpg'
    },
    {
      id: 'gaspol', kind: 'app', label: 'Gaspol', glyph: 'G', bg: '#ffffff', fg: '#ffffff', tilt: -3, x: 21, y: 58,
      icon: 'assets/icon-gaspol.png', iconBleed: true,   // oryginalny znak Gaspol od Anny (30.09) — zastąpił przerysowany icon-gaspol.svg
      heading: 'Gaspol', meta: 'Portal Klienta · UI · Materiały',
      desc: 'Wdrożony Portal Klienta dużej marki energetycznej — rachunki, zamówienia i poziom gazu w jednym miejscu. Plus materiały i wizualizacje wokół produktu.',
      facts: [['Zakres', 'UI · Web i mobile · DTP · 3D · Logo'], ['Rola', 'Grafik (etat)'], ['Klient', 'Gaspol S.A.'], ['Rok', '2020–2023']],
      full: true,
      blocks: [
        { type: 'image', src: P + 'gas-ui.jpg', ratio: '1800 / 1200', alt: 'Ekrany Portalu Klienta Gaspol — logowanie, raty, historia poziomu gazu, zamówienie dostawy' },
        { type: 'text', label: 'Kontekst', paras: [
          'Gaspol sprzedaje gaz płynny firmom i domom. Klient potrzebuje prostych odpowiedzi: ile mam gazu, ile płacę, kiedy przyjedzie dostawa. Portal zbiera to w jednym miejscu — na komputerze i w telefonie.',
          'Pracowałam w Gaspolu na etacie, więc poza produktem cyfrowym robiłam dla marki materiały informacyjne, infografiki i wizualizacje 3D.'
        ] },
        { type: 'text', label: 'Podejście', paras: [
          'Dane na wierzch, reszta cicho. Stan zbiornika jako wykres i wskaźnik procentowy, rachunki z jasnym statusem opłacenia, zamówienie dostawy w krokach z wyborem terminu z kalendarza. Firmowa czerwień działa jako znacznik akcji, nie jako dekoracja.'
        ] },
        { type: 'image', src: P + 'gas-portal.jpg', ratio: '1500 / 1615', alt: 'Portal Klienta — widoki web i mobilne w jednym zestawieniu' },
        { type: 'step', n: '01', title: 'Materiały i infografiki', paras: [
          'Foldery i instrukcje — od oferty dla domu i firmy po posadowienie zbiornika. Izometryczne rysunki i wymiary zamiast ścian tekstu.'
        ] },
        { type: 'duo', ratio: '4 / 3', items: [
          { src: P + 'gas-folder.jpg', alt: 'Folder Gaspol „Czyste rozwiązania energetyczne” — rozkładówka z izometrycznymi schematami dla domu, firmy, sieci i stacji paliw, obok model 3D instalacji' },
          { src: P + 'gas-instrukcja.jpg', alt: 'Ulotka Gaspol — instrukcja przygotowania wykopu i posadowienia zbiornika podziemnego' }
        ] },
        { type: 'step', n: '02', title: 'Wizualizacje 3D i ekspozycja', paras: [
          'Cysterna, zbiorniki naziemne i podziemne, dom z instalacją, klatki i ekspozytor z butlami — cała oferta w jednym, spójnym zestawie modeli.'
        ] },
        { type: 'image', src: P + 'gas-3d.jpg', ratio: '2000 / 1109', alt: 'Wizualizacje 3D Gaspol — cysterna, zbiorniki naziemne i podziemny, dom jednorodzinny, klatki i ekspozytor z butlami' },
        { type: 'step', n: '03', title: 'Znaki programów i narzędzi', paras: [
          'Logotypy dla inicjatyw firmy — od funduszu grantowego i programu zmiany po wewnętrzny system Dynamics 365 i akademię liderów.'
        ] },
        { type: 'duo', ratio: '860 / 480', items: [
          { src: P + 'gas-logo-fundusz.jpg', alt: 'Logo Lokalny Fundusz Grantowy GASPOL — pinezka łącząca się z serduszkiem i znakiem zaznaczenia' },
          { src: P + 'gas-logo-vegas.jpg', alt: 'Logo VEGAS — GASPOL Dynamics 365, z pikiem w literze A' }
        ] },
        { type: 'duo', ratio: '860 / 480', items: [
          { src: P + 'gas-logo-zmiana.jpg', alt: 'Logo „mała duża zmiana” — mała kropka i duży okrąg' },
          { src: P + 'gas-logo-wlacz.jpg', alt: 'Logo „włącz się” Akademia Lidera — napis w kształcie żarówki' }
        ] },
        { type: 'text', label: 'Efekt', paras: [
          'Portal Klienta został wdrożony i działa na web i mobile. Wokół niego powstał spójny zestaw: materiały drukowane, wizualizacje i znaki programów — od ekranu po ekspozytor w sklepie.'
        ] },
        { type: 'more', ids: ['filmbox', 'sona', 'axon'] },
        { type: 'cta', heading: 'Zaprojektujmy coś razem.', text: 'Projektuję produkty cyfrowe, marki i ilustracje — od pierwszego szkicu po gotowy ekran, opakowanie czy kampanię. Szukam miejsca w zespole produktowym albo w agencji kreatywnej.', open: 'kontakt', label: 'Napisz do mnie →' }
      ],
      tags: ['UI design', 'Web i mobile', 'DTP', '3D', 'Logo'],
      thumb: P + 'gas-ui.jpg'
    },
    {
      id: 'luna', kind: 'app', label: 'Luna Pilates', glyph: 'L', bg: '#f2ede6', fg: '#36598f', tilt: -4, x: 78, y: 14,
      icon: 'assets/icon-luna.svg',   // monogram „L” z kropką w okręgu, przerysowany jako SVG z planszy marki (wycinek miał ~100 px)
      heading: 'Luna Pilates Studio', meta: 'Identyfikacja · Branding',
      desc: 'Marka dla nowego studia pilates w Łodzi — spokojna identyfikacja zbudowana z księżyca, oddechu i miękkiego ruchu.',
      facts: [['Zakres', 'Identyfikacja · Branding'], ['Rola', 'Brand designer'], ['Klient', 'Studio pilates w Łodzi (przed otwarciem)'], ['Rok', '2026']],
      full: true,
      blocks: [
        { type: 'image', src: P + 'luna-lead-photo.jpg', ratio: '1560 / 1008', alt: 'Logo Luna Pilates Studio z różową kropką obok kobiety w różowym topie z sierpem księżyca' },
        { type: 'text', label: 'Kontekst', paras: [
          'Moi znajomi otwierają w Łodzi butikowe studio pilates i poprosili mnie o markę — zanim powstanie lokal, szyld i pierwsze zajęcia. Zamiast sportowej energii — spokój: ruch, oddech i równowaga.',
          'Chcieliśmy marki, która działa tak samo na szyldzie, macie i ekranie telefonu — cicha, miękka, rozpoznawalna po jednym znaku.'
        ] },
        { type: 'text', label: 'Marka', paras: [
          'Sygnet czyta się na dwa sposoby: jako sierp księżyca i jako postać, która wygina się w ćwiczeniu — kropka to głowa, łuk to kręgosłup. Jeden kształt niesie i nazwę, i ruch.',
          'Ta sama kropka wraca nad logotypem jak wschodzący księżyc. Granat zostaje do liter, pudrowy róż jest zarezerwowany dla kropki.'
        ] },
        { type: 'lunamark', dot: P + 'luna-logo-skrocone-mori.png', mono: P + 'luna-logo-monogram-mori.png', logo: P + 'luna-logo-mori.png' },
        { type: 'lunasys' },
        { type: 'step', n: '', title: 'Postacie', paras: ['Sygnet rozpisany na pozy: jedna linia i różowa kropka-głowa. Działają jako ikony zajęć, piktogramy w aplikacji i wzór na tekstyliach.'] },
        { type: 'poses', items: [['sygnet', 'Sygnet'], ['stanie', 'Postawa'], ['labedz', 'Łabędź'], ['sklon', 'Skłon'], ['boczny', 'Skłon boczny']] },
        { type: 'text', label: 'Zastosowania', paras: [
          'System sprawdziłam w miejscach, w których klient spotyka markę: sala, tekstylia, akcesoria, papier i szyld.',
          'Zdjęcia zastosowań to wizualizacje poglądowe — projektem są logotyp, sygnet, paleta, typografia, elementy graficzne i układ plansz.'
        ] },
        { type: 'step', n: '01', title: 'Przestrzeń', paras: ['Sala z reformerami i korytarz — logo z kropką na ciepłej ścianie, błękit i róż w detalach.'] },
        { type: 'duo', ratio: '19 / 10', items: [
          { src: P + 'luna-a-studio.jpg', alt: 'Sala z reformerami i logo Luna z różową kropką na ścianie' },
          { src: P + 'luna-a-corridor.jpg', alt: 'Korytarz studia z hasłem „A stronger, softer you”' }
        ] },
        { type: 'step', n: '02', title: 'Tekstylia i akcesoria', paras: ['Mata, bidon i top — znak raz jako logo, raz jako sam sygnet.'] },
        { type: 'duo', ratio: '300 / 259', items: [
          { src: P + 'luna-a-mat.jpg', alt: 'Różowa mata i niebieski bidon z logo Luna' },
          { src: P + 'luna-a-top.jpg', alt: 'Różowy top z sygnetem' }
        ] },
        { type: 'step', n: '03', title: 'Szyld i papier', paras: ['Szyld nad wejściem, torba i wizytówki.'] },
        { type: 'duo', ratio: '300 / 271', items: [
          { src: P + 'luna-a-sign.jpg', alt: 'Okrągły szyld nad wejściem z logo i różową kropką' },
          { src: P + 'luna-a-tote.jpg', alt: 'Bawełniana torba z logo Luna' },
          { src: P + 'luna-a-cards.jpg', alt: 'Wizytówki Luna Pilates Studio' }
        ] },
        { type: 'more', ids: ['dressly', 'neo', 'sliwka'] },
        { type: 'cta', heading: 'Zaprojektujmy coś razem.', text: 'Projektuję produkty cyfrowe, marki i ilustracje — od pierwszego szkicu po gotowy ekran, opakowanie czy kampanię. Szukam miejsca w zespole produktowym albo w agencji kreatywnej.', open: 'kontakt', label: 'Napisz do mnie →' }
      ],
      tags: ['Branding', 'Identyfikacja', 'Wellness'],
      thumb: P + 'luna-lead-photo.jpg'
    },
    {
      id: 'ios', kind: 'app', label: 'Ikony iOS', glyph: 'iOS', bg: '#ffffff', fg: '#1b1f5e', tilt: -6, x: 11, y: 76,
      icon: 'assets/icon-ios-grid3.png',   // siatka pixel-art od Anny, PRZERYSOWANA na czysto (te same kolory i układ, równe linie).
      //                                  Bez iconBleed = margines 14 % białego, w kolorze tła siatki (prośba Anny: „więcej obwódki w tym samym kolorze”).
      //                                  Poprzednie: icon-ios.png (pikselowe „Photos”) — zostaje na dysku
      heading: 'Ikony iOS', meta: 'Ikony · Pixel art · 2020',
      desc: 'Zestaw pikselowych ikon na ekran iPhone’a — zwycięski projekt konkursu Depositphotos na własne paczki ikon iOS.',
      facts: [['Zakres', 'Ikony · Pixel art · iOS'], ['Rola', 'Projektantka ikon'], ['Klient', 'Depositphotos — Design Contest 2020'], ['Rok', '2020']],
      full: true,
      blocks: [
        { type: 'image', src: P + 'ios-cover.jpg', ratio: '1920 / 1300', alt: 'iOS 14 Icon Packs — pikselowe ikony na granatowym tle' },
        { type: 'text', label: 'Kontekst', paras: [
          'Depositphotos ogłosił międzynarodowy konkurs #homescreenchallenge na własne zestawy ikon iOS dla projektantów z całego świata. Mój projekt zajął 1. miejsce — nagrodą był iPhone 12 i subskrypcja Depositphotos.',
          'Zwycięskie projekty trafiły do kolekcji Depositphotos, udostępnianej i promowanej wśród milionów klientów serwisu.'
        ] },
        { type: 'image', src: P + 'ios-phone-mockup.jpg', ratio: '1 / 1', mid: true, alt: 'Zestaw ikon na ekranie iPhone’a — telefon leżący na betonowych schodach' },
        { type: 'text', label: 'Projekt', paras: [
          'Ikony są inspirowane pixel artem: każda powstaje na prostej siatce pikseli, dzięki czemu pozostaje czytelna w małym rozmiarze — na ekranie telefonu i w sieci. Kolory biorą się z oryginalnej palety ikon iPhone’a, więc zestaw od razu kojarzy się z aplikacjami, które zastępuje.'
        ] },
        { type: 'image', src: P + 'ios-set.jpg', ratio: '2000 / 1126', alt: 'Komplet 24 ikon w siatce' },
        { type: 'step', n: '01', title: 'Budowa i kolor', paras: [
          'Symbol rysowany polami siatki, bez krzywych i półcieni. Kolory wzięte z systemowej palety iPhone’a — ikona ma być czytelna i rozpoznawalna w małym rozmiarze.'
        ] },
        { type: 'duo', ratio: '870 / 314', items: [
          { src: P + 'ios-structure-tight.png', alt: 'Struktura ikon — symbole rysowane polami siatki' },
          { src: P + 'ios-palette-tight.png', alt: 'Kolory ikon — wersja zielona, różowo-fioletowa i czarna w palecie iPhone’a' }
        ] },
        { type: 'image', src: P + 'ios-phones.jpg', ratio: '1920 / 1230', alt: 'Ikony na ekranach iPhone’ów — mockup' },
        { type: 'text', label: 'Wynik', paras: [
          '1. miejsce w Depositphotos Design Contest 2020 — spośród projektantów z całego świata.'
        ] },
        { type: 'image', src: P + 'ios-winners.jpg', ratio: '1920 / 1230', alt: 'Ogłoszenie zwycięzców konkursu — 1. miejsce: Anna Szczepańska' },
        { type: 'more', ids: ['tutti', 'sliwka', 'filmbox'] },
        { type: 'cta', heading: 'Zaprojektujmy coś razem.', text: 'Projektuję produkty cyfrowe, marki i ilustracje — od pierwszego szkicu po gotowy ekran, opakowanie czy kampanię. Szukam miejsca w zespole produktowym albo w agencji kreatywnej.', open: 'kontakt', label: 'Napisz do mnie →' }
      ],
      tags: ['Ikony', 'Pixel art', 'Konkurs — 1. miejsce'],
      thumb: P + 'ios-cover.jpg'
    }
  ];

  const STICKERS = [
    { id: 'sk1', text: 'creative designer', bg: '#FCE98B', tilt: -8, x: 33, y: 30, shape: 'pill' },
    { id: 'sk2', text: 'UX/UI', bg: '#AFD6F5', tilt: 6, x: 70, y: 61, shape: 'dot' },
    { id: 'sk3', text: 'open to work', bg: '#F6BBD4', tilt: -5, x: 31, y: 63, shape: 'pill' }
  ];

  /* ---------- DANE: strony z dolnego paska ---------- */
  const PAGES = {
    about: {
      label: 'About me', heading: 'O mnie', meta: 'About me',
      icon: 'M12 11.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2M4.6 20.4c0-3.6 3.3-5.6 7.4-5.6s7.4 2 7.4 5.6',
      desc: 'Jestem Anna. Projektuję strony www, aplikacje mobilne, identyfikacje marek, ilustracje i design systemy.',
      facts: [['Mieszkam', 'Warszawa'], ['Specjalizacja', 'UX/UI, design systemy'], ['Języki', 'polski, angielski'], ['Szukam', 'freelance i pełny etat']],
      blocks: [
        { type: 'text', label: 'Na czym mi zależy', paras: [
          'Użyteczność na pierwszym miejscu, mikrointerakcje, wizualne opowiadanie historii i design systemy, które nie rozsypują się przy wdrożeniu.',
          'Łączę projekt z kodem — rozumiem front-end, więc przekazanie projektu deweloperom nie jest miejscem, w którym wszystko się sypie.'
        ] },
        { type: 'text', label: 'Narzędzia', paras: [
          'Projekt: Figma · Adobe Photoshop · Illustrator · InDesign · After Effects · Fresco · Blender',
          'Kod i AI: HTML/CSS · React · GitHub · Vercel · Claude · ChatGPT'
        ] },
        { type: 'text', label: 'Nagrody', items: [
          ['1. miejsce — talerz dla sieci Tutti Santi', 'Konkurs „Smak to sztuka”, 2023'],
          ['Wyróżnienie — plakat do musicalu „Koty”', 'Teatr Rozrywki w Chorzowie, 2022'],
          ['Zwycięskie logo dla Radia Wolna Europa', '2021'],
          ['1. miejsce — pakiet ikon iOS 14', 'Depositphotos Design Contest, 2020'],
          ['Zwycięski projekt maskotki', 'Galeria Wiślanka w Żorach, 2020']
        ] }
      ],
      tags: ['Product design', 'UX/UI', 'Design systemy']
    },
    exp: {
      label: 'Doświadczenie', heading: 'Doświadczenie', meta: 'CV / praca',
      icon: 'M4 20V9.5M10 20V4.5M16 20v-8M22 20H2',
      desc: 'Od wizualizacji 3D, przez grafikę i interfejsy, po prototypy.',
      // oś czasu wg CV 2025 (~/Desktop/_Inne/100 lecie gdyni/CVAnnaSzczepańska.pdf)
      blocks: [{ type: 'timeline', items: [
        ['2024 – obecnie', 'work', 'Graphic Designer', 'Kino Polska TV (CANAL+ Group) · Warszawa', 'Grafiki i animacje do social mediów, kampanie reklamowe i koncepcje wizualne, rozwijanie identyfikacji marki — m.in. strona FilmBox+.', 'filmbox'],
        ['2024', 'work', 'Graphic User Interface Designer', 'ElectroMobility Poland (Izera) · Warszawa', 'Interaktywny prototyp systemu HMI zgodnie z wytycznymi i testy prototypu — funkcjonalność i spójność interfejsu.', 'axon'],
        ['2020–2023', 'work', 'Grafik', 'Gaspol S.A. · Warszawa', 'Interfejsy użytkownika, wizualizacje 3D i infografiki, strony internetowe w Sitecore.', 'gaspol'],
        ['2018–2021', 'edu', 'Licencjat — Sztuka Nowych Mediów', 'Polsko-Japońska Akademia Technik Komputerowych · Warszawa', ''],
        ['2018–2020', 'work', 'Młodszy Grafik', 'Gaspol S.A. · Warszawa', 'Materiały do działań online (mailingi, banery, landing page), plakaty i ulotki.'],
        ['2017–2018', 'work', 'Freelancer', 'Warszawa', 'Ilustracje i infografiki, logotypy i identyfikacje, wizualizacje 3D, interfejsy aplikacji i serwisów.'],
        ['2016–2017', 'work', 'Grafik 3D', 'Bracia Burawscy Architekci · Warszawa', 'Wizualizacje wnętrz 3D, retusz i obróbka zdjęć.'],
        ['2013–2017', 'edu', 'Inżynier architektury', 'Wyższa Szkoła Ekologii i Zarządzania · Warszawa', '']
      ] }]
    },
    cv: {
      label: 'CV', heading: 'CV', meta: 'PDF',
      icon: 'M6 2.8h7.5L19 8.3V21.2H6zM13.2 3v5.6h5.5M9 13h7M9 17h5',
      desc: 'Pełne CV do pobrania.',
      blocks: [],
      cvUrl: 'assets/cv.pdf'
    },
    kontakt: {
      label: 'Kontakt', heading: 'Kontakt', meta: 'Napisz',
      icon: 'M2.8 6.2h18.4v11.6H2.8zM3 6.6l9 6.4 9-6.4',
      desc: 'Masz projekt albo wolne miejsce w zespole? Napisz — odpowiadam szybko.',
      email: 'anna.szczepanska.kontakt@gmail.com',
      phone: '502 106 544',
      blocks: [],
      links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/szczepanskaa' }, { label: 'Behance', url: 'https://www.behance.net/anna-szczepanska' }]   // z CV 2024
    }
  };

  /* ---------- pomocnicze ---------- */
  // poza podglądem lokalnym chowamy robocze ramki „do uzupełnienia” (.is-live .todo w CSS)
  if (!/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname) && location.protocol !== 'file:') document.documentElement.classList.add('is-live');
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const mq = window.matchMedia('(max-width: 700px)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isMobile = () => mq.matches;

  const stage = $('[data-stage]');
  const itemsEl = $('[data-items]');
  const dockEl = $('[data-dock]');
  const winsEl = $('[data-wins]');

  // na telefonie widać tylko 2 pierwsze naklejki, w tych miejscach (wg projektu z Claude Design)
  const MOBILE_STICKERS = { sk1: { x: 20, y: 55 }, sk2: { x: 84, y: 51 } };   // pozycje z projektu Claude Design (siatka ma 2 rzędy — przy 3 rzędach sk1 trzeba przesunąć, np. 66/31)
  const stickersEl = $('[data-stickers]');

  const pos = {};                      // pozycje po przeciągnięciu, osobno desktop / telefon
  const posKey = id => (isMobile() ? 'm:' : 'd:') + id;
  const posOf = o => pos[posKey(o.id)] || (isMobile() && MOBILE_STICKERS[o.id]) || { x: o.x, y: o.y };

  /* ---------- zegar ---------- */
  const clockEl = $('[data-clock]');
  const tick = () => { clockEl.textContent = new Date().toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' }); };
  tick(); setInterval(tick, 20000);

  /* ---------- „ANNA” rozciągnięte do szerokości nazwiska ---------- */
  const anna = $('[data-anna]'), name = $('[data-name]');
  function fit() {
    const k = parseFloat(getComputedStyle(stage).getPropertyValue('--k')) || 1;
    const aw = anna.getBoundingClientRect().width / k;
    const nw = name.getBoundingClientRect().width;
    if (aw > 4 && nw > 4) stage.style.setProperty('--k', (Math.round((nw / aw) * 1000) / 1000).toString());
  }
  fit();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  window.addEventListener('resize', fit);

  /* ---------- render ikon ---------- */
  function renderItems() {
    const mobile = isMobile();
    const icons = ITEMS.map((i, n) => {
      const p = posOf(i);
      const style = mobile ? '' : `left:${p.x}%;top:${p.y}%;--tilt:${i.tilt || 0}deg;`;
      const inner = i.kind === 'folder'
        ? '<span class="folder" aria-hidden="true"></span>'
        : i.icon
          ? `<span class="tile tile--img${i.iconBleed ? ' tile--bleed' : ''}" style="background:${i.bg}" aria-hidden="true"><img src="${i.icon}" alt="" width="176" height="176" draggable="false"></span>`
          : `<span class="tile${i.glyph.length > 1 ? ' tile--long' : ''}" style="background:${i.bg};color:${i.fg}" aria-hidden="true">${esc(i.glyph)}</span>`;
      return `<button class="icon" type="button" data-id="${i.id}" style="${style}" aria-label="Otwórz: ${esc(i.heading)}">
        <span class="icon__float" style="--dur:${5 + (n % 3)}s;--delay:${n * 0.4}s">${inner}<span class="icon__label">${esc(i.label)}</span></span>
      </button>`;
    }).join('');
    itemsEl.innerHTML = icons;
    stickersEl.innerHTML = STICKERS.filter(k => !mobile || MOBILE_STICKERS[k.id]).map(k => {
      const p = posOf(k);
      return `<div class="sticker sticker--${k.shape}" data-id="${k.id}" style="left:${p.x}%;top:${p.y}%;--tilt:${k.tilt}deg;background:${k.bg}">${esc(k.text)}</div>`;
    }).join('');
  }

  function renderDock() {
    dockEl.innerHTML = Object.entries(PAGES).map(([id, pg]) =>
      `<button type="button" data-page="${id}">
        <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${pg.icon}"/></svg>
        <span>${esc(pg.label)}</span>
      </button>`).join('');
  }

  /* ---------- przeciąganie ikon / okien / suwaka ---------- */
  let drag = null;
  let suppressClick = false;

  stage.addEventListener('pointerdown', e => {
    if (e.button !== 0) return;
    // telefon: ikony tylko się klika, naklejki da się przesuwać
    const el = e.target.closest(isMobile() ? '.sticker' : '.icon, .sticker');
    if (!el) return;
    const r = stage.getBoundingClientRect();
    const src = ITEMS.find(v => v.id === el.dataset.id) || STICKERS.find(v => v.id === el.dataset.id);
    const p = posOf(src);
    drag = { type: 'icon', el, id: src.id, sx: e.clientX, sy: e.clientY, moved: false,
      ox: e.clientX - r.left - (p.x / 100) * r.width, oy: e.clientY - r.top - (p.y / 100) * r.height };
  });

  winsEl.addEventListener('pointerdown', e => {
    const win = e.target.closest('.win');
    if (!win) return;
    focusWin(win);
    const cmp = e.target.closest('.cmp');
    if (cmp) { drag = { type: 'cmp', el: cmp, sx: e.clientX, sy: e.clientY }; setCmp(cmp, e.clientX); return; }
    const bar = e.target.closest('.win__bar');
    if (!bar || e.target.closest('button') || isMobile() || win.classList.contains('is-max')) return;
    const r = stage.getBoundingClientRect();
    drag = { type: 'win', el: win, sx: e.clientX, sy: e.clientY,
      ox: e.clientX - r.left - win.offsetLeft, oy: e.clientY - r.top - win.offsetTop };
  });

  window.addEventListener('pointermove', e => {
    if (!drag) return;
    const r = stage.getBoundingClientRect();
    if (drag.type === 'cmp') { setCmp(drag.el, e.clientX); return; }
    if (drag.type === 'win') {
      drag.el.style.left = Math.max(-120, e.clientX - r.left - drag.ox) + 'px';
      drag.el.style.top = Math.max(40, e.clientY - r.top - drag.oy) + 'px';
      return;
    }
    if (!drag.moved && Math.abs(e.clientX - drag.sx) + Math.abs(e.clientY - drag.sy) > 4) {
      drag.moved = true; drag.el.classList.add('is-drag');
    }
    if (!drag.moved) return;
    const x = Math.max(4, Math.min(96, ((e.clientX - r.left - drag.ox) / r.width) * 100));
    const y = Math.max(8, Math.min(88, ((e.clientY - r.top - drag.oy) / r.height) * 100));
    pos[posKey(drag.id)] = { x, y };
    drag.el.style.left = x + '%';
    drag.el.style.top = y + '%';
  });

  window.addEventListener('pointerup', () => {
    if (!drag) return;
    if (drag.type === 'icon') {
      drag.el.classList.remove('is-drag');
      if (drag.moved) suppressClick = true;
      else if (drag.el.classList.contains('sticker')) { /* naklejka: nic */ }
    }
    drag = null;
  });

  itemsEl.addEventListener('click', e => {
    const el = e.target.closest('.icon');
    if (!el) return;
    if (suppressClick) { suppressClick = false; return; }
    open(el.dataset.id, el);
  });
  dockEl.addEventListener('click', e => {
    const b = e.target.closest('[data-page]');
    if (b) open(b.dataset.page, b);
  });

  /* ---------- suwak przed/po ---------- */
  function setCmp(el, clientX) {
    const r = el.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
    el.style.setProperty('--pos', pct + '%');
    el.setAttribute('aria-valuenow', Math.round(pct));
  }
  winsEl.addEventListener('keydown', e => {
    const cmp = e.target.closest('.cmp');
    if (!cmp || (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')) return;
    e.preventDefault();
    const now = parseFloat(cmp.getAttribute('aria-valuenow')) || 50;
    const next = Math.max(0, Math.min(100, now + (e.key === 'ArrowRight' ? 5 : -5)));
    cmp.style.setProperty('--pos', next + '%');
    cmp.setAttribute('aria-valuenow', next);
  });

  /* ---------- okna ---------- */
  let z = 900;
  const openWins = new Map();          // id → { el, opener }

  function blockHtml(b, heading, num, secNums, winId) {
    switch (b.type) {
      case 'image':
        return `<div class="block${b.mid ? ' block--mid' : ''}${b.tall ? ' block--tall' : ''}"><img class="shot" src="${b.src}" alt="${esc(b.alt || heading)}" loading="lazy" style="--ratio:${b.ratio || '3 / 2'}"></div>`;
      case 'video':
        return `<div class="block${b.tall ? ' block--tall' : ''}${b.mid ? ' block--mid' : ''}"><video class="shot js-hover-video" muted loop playsinline preload="metadata" aria-label="${esc(b.alt || heading)}" style="--ratio:${b.ratio || '16 / 9'}"${b.frame ? ` data-frame="${b.frame}"` : ''}><source src="${b.src}" type="video/mp4"></video></div>`;
      case 'duo':
        return `<div class="block duo${b.items.length === 3 ? ' duo--3' : ''}${b.mid ? ' block--mid' : ''}${b.tall ? ' block--tall' : ''}">${b.items.map(m => m.video
          ? `<video class="shot js-hover-video" muted loop playsinline preload="metadata" aria-label="${esc(m.alt || heading)}" style="--ratio:${b.ratio}"><source src="${m.video}" type="video/mp4"></video>`
          : `<img class="shot" src="${m.src}" alt="${esc(m.alt || heading)}" loading="lazy" style="--ratio:${b.ratio};${m.pos ? 'object-position:' + m.pos : ''}">`).join('')}</div>`;
      case 'principles':
        // numery kafli USUNIĘTE (16.09, prośba Anny — sekcje są już numerowane); dane `n` zostają w ITEMS na wypadek powrotu
        return `<div class="block principles">${b.items.map(([n, t, d]) => `<div class="principle"><div class="principle__h">${esc(t)}</div><p>${esc(d)}</p></div>`).join('')}</div>`;
      case 'step':
        // opis kroku przy grafice — mniejszy niż sekcja, nie wchodzi do numeracji sekcji.
        // Numer kroku pokazujemy TYLKO w oknach bez numerowanych sekcji (16.09: inaczej po „05” licznik wracał do „01”).
        return `<div class="block step"><div class="step__h">${!secNums && b.n ? `<span class="step__n">${esc(b.n)}</span>` : ''}${esc(b.title)}</div>${b.paras.map(x => `<p>${esc(x)}</p>`).join('')}</div>`;
      case 'more':
        // karuzela: najpierw 3 wybrane projekty, potem cała reszta (bez bieżącego) — strzałki przewijają o jedną stronę
        const ids = [...b.ids, ...ITEMS.map(i => i.id).filter(i => i !== winId && !b.ids.includes(i))];
        const arrow = (dir, d, label) => `<button class="more__arrow" type="button" data-more="${dir}" aria-label="${label}"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg></button>`;
        return `<div class="block more"><div class="more__top"><div class="more__h">Więcej projektów</div><div class="more__nav">${arrow(-1, 'M15 5l-7 7 7 7', 'Poprzednie projekty')}${arrow(1, 'M9 5l7 7-7 7', 'Następne projekty')}</div></div><div class="more__grid" data-more-track>${ids.map(id => {
          const it = ITEMS.find(i => i.id === id);
          const src = it.thumb || (it.blocks.find(x => x.type === 'image') || {}).src;
          const year = (it.facts.find(f => f[0] === 'Rok') || [, ''])[1];
          return `<button class="more__card" type="button" data-open="${id}">
            <img class="shot" src="${src}" alt="" loading="lazy">
            <span class="more__meta"><span class="more__name">${esc(it.heading)}</span><span class="mono">${esc(year)}</span></span>
            <span class="more__tags">${esc(it.tags.join(', '))}</span>
          </button>`;
        }).join('')}</div></div>`;
      case 'cta': {
        // zamknięcie okna — proste (29.09, prośba Anny: bez zdjęcia i dodatków): nagłówek, jedno zdanie, przyciski
        const [first, ...rest] = b.heading.split(' ');
        const k = PAGES.kontakt;
        return `<div class="block cta">
          <div class="cta__h">${esc(first)} <span>${esc(rest.join(' '))}</span></div>
          <p>${esc(b.text)}</p>
          <div class="cta__btns">
            <button class="btn" type="button" data-open="${b.open || 'kontakt'}" data-keep>${esc(b.label)}</button>
          </div>
        </div>`;
      }
      case 'gallery':
        return `<div class="block gallery">${b.srcs.map(s => `<img class="shot" src="${s}" alt="${esc(heading)}" loading="lazy">`).join('')}</div>`;
      case 'compare':
        // etykiety i proporcja opcjonalne (Axon: Dzień / Noc, 1904 / 1072); domyślnie Przed / Po
        return `<div class="block"><div class="cmp" tabindex="0" role="slider" aria-label="${esc(b.aria || 'Porównanie: stara i nowa strona')}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50"${b.ratio ? ` style="height:auto;aspect-ratio:${b.ratio}"` : ''}>
          <img class="cmp__after" src="${b.after}" alt="${esc(b.afterLabel || 'Po')}" loading="lazy">
          <img class="cmp__before" src="${b.before}" alt="${esc(b.beforeLabel || 'Przed')}" loading="lazy">
          <span class="cmp__line"></span><span class="cmp__knob" aria-hidden="true">‹›</span>
          <span class="cmp__tag cmp__tag--before">${esc((b.beforeLabel || 'Przed').toUpperCase())}</span><span class="cmp__tag cmp__tag--after">${esc((b.afterLabel || 'Po').toUpperCase())}</span>
        </div></div>`;
      case 'motion': {
        // specyfikacja ruchu na ekranach Axon: 120 / 240 / 400 ms — animacja w initMotion
        const cap = ([ms, name, desc]) => `<figcaption class="mo__cap"><b>${esc(ms)}</b><span>${esc(name)}</span><p>${esc(desc)}</p></figcaption>`;
        const [c1, c2, c3] = b.captions;
        return `<div class="block mo">
          <figure class="mo__scene"><div class="mo__screen">
            <div class="mo__zoom"><img src="${b.klimat}" alt="Axon — pasek nawiewu na ekranie klimatu" loading="lazy"><span class="mo__seg"></span><span class="mo__num"><span class="n6">6</span><span class="n7">7</span></span></div>
            <span class="mo__tap"></span></div>${cap(c1)}</figure>
          <figure class="mo__scene"><div class="mo__screen">
            <img class="mo__full" src="${b.start}" alt="Axon — ekran Start" loading="lazy">
            <img class="mo__full mo__bar" src="${b.pojazd}" alt="" loading="lazy">
            <div class="mo__content"><div class="mo__slide mo__panel"><img src="${b.pojazd}" alt="Axon — panel Pojazd" loading="lazy"></div></div>
            <span class="mo__tap"></span></div>${cap(c2)}</figure>
          <figure class="mo__scene"><div class="mo__screen">
            <img class="mo__full" src="${b.start}" alt="Axon — ekran Start" loading="lazy">
            <div class="mo__content"><div class="mo__slide mo__nav"><img src="${b.nav}" alt="Axon — tryb Nawigacja" loading="lazy"></div></div>
            <span class="mo__tap"></span></div>${cap(c3)}</figure>
        </div>`;
      }
      case 'lunamark': {
        // Luna: budowa znaku krok po kroku (kropka → sierp → postać → monogram → logotyp); pętla w initLunaMark
        const N = '#1e3044', R = '#dab2ab';   // granat liter i róż kropki — zmierzone z logo (plansza PP Mori)
        const steps = [
          ['Kropka', 'księżyc w pełni', `<svg class="lm__svg" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46" fill="${R}"/></svg>`],
          ['Sierp', 'księżyc w ruchu', `<svg class="lm__svg" viewBox="0 0 100 100" aria-hidden="true"><path fill="${N}" d="M62 6A46 46 0 1 0 94 72 38 38 0 1 1 62 6Z"/></svg>`],
          ['Postać', 'kropka to głowa, łuk to kręgosłup', `<img src="${b.dot}" alt="">`],
          ['Sygnet', 'postać w okręgu', `<img src="${b.mono}" alt="">`],
          ['Logotyp', 'kropka wschodzi nad „a”', `<img src="${b.logo}" alt="Logo Luna Pilates Studio">`]
        ];
        return `<div class="block lm" data-lm><div class="lm__stage">${steps.map(([, , art], i) => `<div class="lm__layer lm__layer--${i}${i === 4 ? ' is-on' : ''}">${art}</div>`).join('')}</div>
          <ol class="lm__steps">${steps.map(([t, d], i) => `<li><button type="button" data-lm-go="${i}"${i === 4 ? ' aria-current="step"' : ''}><b>${esc(t)}</b><span>${esc(d)}</span></button></li>`).join('')}</ol></div>`;
      }
      case 'poses':
        // Luna: pozy w stylu sygnetu (linia + różowa kropka-głowa) — SVG z assets/projects/luna-pozy/
        return `<ul class="block poses">${b.items.map(([f, t]) => `<li><img src="${P}luna-pozy/luna-poza-${f}.svg" alt="Piktogram Luna — ${esc(t)}" loading="lazy"><span>${esc(t)}</span></li>`).join('')}</ul>`;
      case 'lunasys': {
        // Luna: paleta i elementy graficzne złożone w kodzie wg planszy PP Mori (wycinek miał podpisy ~6 px)
        const pal = [['Dusty blue', '#6B8BBE'], ['Blush pink', '#E7A7B1'], ['Nude', '#F3E6E1'], ['Sand', '#C9BCAE'], ['Ink', '#1E1E26']];
        const N = '#1e3044', R = '#dab2ab';
        const el = [
          ['Kropka', `<circle cx="30" cy="30" r="12" fill="${R}"/>`],
          ['Fala', `<path fill="none" stroke="${N}" stroke-width="2.4" stroke-linecap="round" d="M4 36C14 22 22 22 30 30S46 38 56 24"/>`],
          ['Linia', `<path fill="${N}" d="M25 6h6v34c0 9 6 14 16 14v2c-14 0-22-6-22-17Z"/>`]
        ];
        return `<div class="block ls">
          <div class="ls__col"><div class="ls__h">Paleta</div><ul class="ls__pal">${pal.map(([n, h]) => `<li><span class="ls__sw" style="background:${h}"></span><b>${n}</b><span class="mono">${h}</span></li>`).join('')}</ul></div>
          <div class="ls__col"><div class="ls__h">Krój</div><div class="ls__type">PP Mori</div><p class="ls__note">Jeden krój w dwóch grubościach — logotyp niesie charakter, tekst ma być cichy.</p></div>
          <div class="ls__col"><div class="ls__h">Elementy graficzne</div><ul class="ls__el">${el.map(([n, s]) => `<li><svg viewBox="0 0 60 60" aria-hidden="true">${s}</svg><span>${n}</span></li>`).join('')}</ul><p class="ls__note">ruch · oddech · równowaga</p></div>
        </div>`;
      }
      case 'text':
        // numer sekcji (01, 02…) pomarańczową kursywą + czarny nagłówek — wg inspiracji
        return `<div class="block block--text"><div class="block__label">${num ? `<span class="block__num">${num}</span>` : ''}<span class="block__title">${esc(b.label)}</span></div><div>
          ${(b.paras || []).map(p => `<p>${esc(p)}</p>`).join('')}
          ${b.items ? `<ul class="list">${b.items.map(([k, v]) => `<li><b>${esc(k)}</b>${esc(v)}</li>`).join('')}</ul>` : ''}
          ${b.quote ? `<blockquote>${esc(b.quote)}</blockquote>` : ''}
          ${b.todo ? `<div class="todo"><b>Do uzupełnienia</b>${esc(b.todo)}</div>` : ''}
        </div></div>`;
      case 'timeline':
        // Doświadczenie: praca i studia na jednej osi (edu = inny kolor kropki); ostatni element = id okna projektu
        return `<ol class="block tl">${b.items.map(([y, k, t, where, d, id]) => `<li class="tl__i tl__i--${k}">
          <span class="tl__y mono">${esc(y)}</span>
          <div class="tl__b"><b>${esc(t)}</b><span class="tl__w">${esc(where)}</span>${d ? `<p>${esc(d)}</p>` : ''}${id ? `<button class="tl__link" type="button" data-open="${id}">Zobacz projekt →</button>` : ''}</div></li>`).join('')}</ol>
          <div class="tl__legend"><span class="tl__dot"></span>praca <span class="tl__dot tl__dot--edu"></span>studia</div>`;
      case 'todo':
        return `<div class="todo"><b>Do uzupełnienia</b>${esc(b.text)}</div>`;
      default: return '';
    }
  }

  function winHtml(id, d) {
    const facts = d.facts ? `<dl class="facts">${d.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>` : '';
    // numerujemy sekcje tekstowe tylko wtedy, gdy są co najmniej dwie (pojedyncze „01” wyglądałoby dziwnie)
    const textCount = (d.blocks || []).filter(b => b.type === 'text').length;
    let n = 0;
    const cta = (d.blocks || []).filter(b => b.type === 'cta').map(b => blockHtml(b, d.heading, '', false, id)).join('');
    const blocks = (d.blocks || []).filter(b => b.type !== 'cta').map(b => {
      const num = b.type === 'text' && textCount > 1 ? String(++n).padStart(2, '0') : '';
      return blockHtml(b, d.heading, num, textCount > 1, id);
    }).join('');
    // mailto działa tylko z ustawionym programem pocztowym — dlatego obok przycisk „Kopiuj e-mail”
    const contact = d.email ? `<div class="block"><a class="big-link" href="mailto:${d.email}">${esc(d.email)}</a>
      <div class="copy-row"><button class="btn btn--ghost" type="button" data-copy="${d.email}">Kopiuj e-mail</button></div></div>` +
      (d.phone ? `<div class="block"><a class="big-link" href="tel:+48${d.phone.replace(/\s/g, '')}">+48 ${esc(d.phone)}</a></div>` : '') +
      (d.links || []).map(l => `<a class="btn btn--ghost" href="${l.url}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join(' ') : '';
    const tags = d.tags && d.tags.length ? `<div class="tags">${d.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>` : '';
    const actions = [
      d.caseUrl && `<a class="btn" href="${d.caseUrl}">Zobacz pełne case study →</a>`,
      d.extUrl && `<a class="btn btn--ghost" href="${d.extUrl}" target="_blank" rel="noopener">${esc(d.extLabel)}</a>`,
      d.cvUrl && `<a class="btn" href="${d.cvUrl}" download>Pobierz CV (PDF)</a>`
      // przycisk „Otwórz na cały ekran / Zmniejsz okno” usunięty (29.09) — robi to ikona ⤢ w pasku okna
    ].filter(Boolean).join('');

    // zamykanie po PRAWEJ (jak w Windows / na telefonach) — nie wszyscy znają kropki z macOS
    return `<div class="win__bar">
        <div class="win__title" id="win-h-${id}">${esc(d.heading)}</div>
        <button class="win__ctl win__ctl--zoom" type="button" data-zoom aria-label="Powiększ lub zmniejsz okno" title="Pełny ekran">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 4h5v5M9 20H4v-5M20 4l-6 6M4 20l6-6"/></svg>
        </button>
        <button class="win__ctl win__ctl--close" type="button" data-close aria-label="Zamknij okno" title="Zamknij">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
      <div class="win__body">
        <!-- bez wielkiego nagłówka: nazwa jest już w pasku okna (decyzja Anny) — opis pełni rolę wstępu -->
        <p class="win__desc">${esc(d.desc)}</p>
        ${facts}${contact}${blocks}${tags}
        ${actions ? `<div class="win__foot">${actions}</div>` : ''}
        ${cta}
      </div>`;
  }

  function focusWin(el) { el.style.zIndex = ++z; }

  function open(id, opener) {
    const d = ITEMS.find(i => i.id === id) || PAGES[id];
    if (!d) return;
    if (openWins.has(id)) { const w = openWins.get(id).el; focusWin(w); w.focus(); return; }

    const r = stage.getBoundingClientRect();
    const n = openWins.size;
    const w = Math.min(1040, Math.max(560, r.width - 140));
    const x = Math.max(16, (r.width - w) / 2 + n * 26 - 40);
    const y = 78 + n * 26;

    const el = document.createElement('section');
    el.className = 'win';
    el.tabIndex = -1;
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-labelledby', 'win-h-' + id);
    el.dataset.id = id;
    Object.assign(el.style, { left: x + 'px', top: y + 'px', width: Math.min(w, r.width - 32) + 'px', maxHeight: Math.max(320, r.height - y - 24) + 'px', zIndex: ++z });
    el.innerHTML = winHtml(id, d);
    winsEl.appendChild(el);
    openWins.set(id, { el, opener });
    el.focus({ preventScroll: true });

    if (d.full) zoom(id);
    initHoverVideos(el);
    initMotion(el);
    initLunaMark(el);
    initMore(el);

    el.addEventListener('click', e => {
      const arr = e.target.closest('[data-more]');
      if (arr) {
        const tr = arr.closest('.more').querySelector('[data-more-track]');
        tr.scrollBy({ left: +arr.dataset.more * tr.clientWidth, behavior: reduced.matches ? 'auto' : 'smooth' });
        return;
      }
      const cp = e.target.closest('[data-copy]');
      if (cp) {
        const done = () => { const l = cp.textContent; cp.textContent = 'Skopiowano ✓'; setTimeout(() => { cp.textContent = l; }, 1600); };
        (navigator.clipboard ? navigator.clipboard.writeText(cp.dataset.copy) : Promise.reject()).then(done).catch(() => {
          const ta = document.createElement('textarea'); ta.value = cp.dataset.copy; document.body.appendChild(ta); ta.select();
          try { document.execCommand('copy'); done(); } catch (_) {} ta.remove();
        });
        return;
      }
      const t = e.target.closest('[data-close], [data-zoom], [data-open]');
      if (!t) return;
      if (t.hasAttribute('data-close')) close(id);
      else if (t.hasAttribute('data-zoom')) zoom(id);
      else {
        // CTA „Napisz do mnie” (data-keep): Kontakt otwiera się NAD bieżącym oknem, bez zamykania (29.09, prośba Anny)
        if (t.hasAttribute('data-keep')) { open(t.dataset.open, t); return; }
        // karta „Więcej projektów”: nowe okno ZASTĘPUJE bieżące (nie piętrzy się na nim)
        const opener = openWins.get(id)?.opener;
        close(id);
        open(t.dataset.open, opener);
      }
    });
  }

  /* wideo: pauza na reprezentatywnej klatce (90% — montaże zaczynają się białym intro),
     gra po najechaniu; na dotyku — tapnięcie przełącza */
  // strzałki „Więcej projektów”: wygaszone na początku / końcu listy
  function initMore(root) {
    root.querySelectorAll('.more').forEach(m => {
      const tr = m.querySelector('[data-more-track]');
      const [prev, next] = m.querySelectorAll('[data-more]');
      const upd = () => {
        prev.disabled = tr.scrollLeft < 4;
        next.disabled = tr.scrollLeft + tr.clientWidth > tr.scrollWidth - 4;
      };
      tr.addEventListener('scroll', upd, { passive: true });
      new ResizeObserver(upd).observe(tr);
      upd();
    });
  }

  function initHoverVideos(root) {
    // dotyk (telefon, tablet): nie ma „hover”, a iOS nie maluje klatki stop przed odtworzeniem (puste pola) —
    // więc filmy grają same, bez dźwięku, gdy są w kadrze, i pauzują poza nim
    if (matchMedia('(hover: none)').matches) {
      const io = new IntersectionObserver(es => es.forEach(e => {
        const v = e.target;
        if (!e.isIntersecting) { v.pause(); return; }
        if (!reduced.matches) { v.play().catch(() => {}); return; }
        // ograniczony ruch: tylko klatka stop (iOS maluje ją dopiero po krótkim odtworzeniu)
        if (!v.dataset.still) { v.dataset.still = '1'; v.play().then(() => { v.pause(); if (v.duration) v.currentTime = v.duration * (parseFloat(v.dataset.frame) || 0.9); }).catch(() => {}); }
      }), { threshold: .35 });
      root.querySelectorAll('video.js-hover-video').forEach(v => {
        v.muted = true; v.playsInline = true; v.preload = 'auto';
        v.setAttribute('playsinline', ''); v.setAttribute('webkit-playsinline', '');
        io.observe(v);
      });
      return;
    }
    root.querySelectorAll('video.js-hover-video').forEach(v => {
      const still = () => { if (v.duration) v.currentTime = v.duration * (parseFloat(v.dataset.frame) || 0.9); };
      v.addEventListener('loadedmetadata', still, { once: true });
      v.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') v.play().catch(() => {}); });
      v.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') v.pause(); });
      v.addEventListener('click', () => { if (matchMedia('(hover: none)').matches) v.paused ? v.play().catch(() => {}) : v.pause(); });
    });
  }

  /* Luna: budowa znaku — kroki podświetlają się po kolei; klik w krok przeskakuje.
     Poza kadrem pętla czeka; przy reduced motion stoi na logotypie (kroki nadal klikalne). */
  function initLunaMark(root) {
    root.querySelectorAll('[data-lm]').forEach(lm => {
      const layers = lm.querySelectorAll('.lm__layer'), btns = lm.querySelectorAll('[data-lm-go]');
      let i = layers.length - 1, visible = false, timer = 0;
      const show = k => {
        i = k;
        layers.forEach((l, j) => l.classList.toggle('is-on', j === k));
        btns.forEach((b, j) => { b.toggleAttribute('aria-current', j === k); if (j === k) b.setAttribute('aria-current', 'step'); });
      };
      const tick = () => {
        clearTimeout(timer);
        if (!document.contains(lm)) return;
        if (visible) show((i + 1) % layers.length);
        timer = setTimeout(tick, i === layers.length - 1 ? 3200 : 1500);
      };
      btns.forEach((b, j) => b.addEventListener('click', () => { show(j); if (!reduced.matches) { clearTimeout(timer); timer = setTimeout(tick, 3200); } }));
      if (reduced.matches) return;
      new IntersectionObserver(([e]) => {
        const was = visible; visible = e.isIntersecting;
        if (visible && !was) { show(0); clearTimeout(timer); timer = setTimeout(tick, 1500); }
      }, { threshold: .5 }).observe(lm);
    });
  }

  /* specyfikacja ruchu (Axon): trzy sceny w pętli z prawdziwymi długościami i krzywymi.
     Poza kadrem pętla czeka, po zamknięciu okna się kończy; przy reduced motion sceny stoją. */
  function initMotion(root) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    root.querySelectorAll('.mo').forEach(mo => {
      let visible = false;
      new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(mo);
      const wait = ms => new Promise(r => setTimeout(r, ms));
      const ready = async () => { while (document.contains(mo) && !visible) await wait(300); return document.contains(mo); };
      const EASE = { 120: 'cubic-bezier(.2, .8, .2, 1)', 240: 'cubic-bezier(.4, 0, .2, 1)', 400: 'cubic-bezier(.65, 0, .35, 1)' };
      const anim = (el, from, to, ms) => el.animate([from, to], { duration: ms, easing: EASE[ms], fill: 'forwards' });
      const tap = (scene, x, y) => {
        const t = scene.querySelector('.mo__tap'); t.style.left = x + '%'; t.style.top = y + '%';
        t.animate([{ opacity: 1, transform: 'scale(.55)' }, { opacity: 0, transform: 'scale(1.25)' }], { duration: 520, easing: 'ease-out' });
      };
      const [A, B, C] = mo.querySelectorAll('.mo__screen');

      (async () => {   // 120 ms — segment nawiewu 6 ↔ 7
        const seg = A.querySelector('.mo__seg'), n6 = A.querySelector('.n6'), n7 = A.querySelector('.n7');
        const on = { opacity: 1 }, off = { opacity: 0 };
        while (await ready()) {
          tap(A, 61.2, 73.8); await wait(90);
          anim(seg, off, on, 120); anim(n6, on, off, 120); anim(n7, off, on, 120);
          await wait(1300);
          tap(A, 52.8, 73.8); await wait(90);
          anim(seg, on, off, 120); anim(n7, on, off, 120); anim(n6, off, on, 120);
          await wait(1300);
        }
      })();

      (async () => {   // 240 ms — panel Pojazd nad ekranem Start
        const panel = B.querySelector('.mo__panel'), bar = B.querySelector('.mo__bar');
        const hid = { opacity: 0, transform: 'scale(.96)' }, vis = { opacity: 1, transform: 'scale(1)' };
        await wait(400);
        while (await ready()) {
          tap(B, 17.7, 93); await wait(90);
          anim(panel, hid, vis, 240); anim(bar, { opacity: 0 }, { opacity: 1 }, 240);
          await wait(1900);
          tap(B, 95.5, 14.7); await wait(90);
          anim(panel, vis, hid, 240); anim(bar, { opacity: 1 }, { opacity: 0 }, 240);
          await wait(1500);
        }
      })();

      (async () => {   // 400 ms — Nawigacja wjeżdża od dołu
        const nav = C.querySelector('.mo__nav');
        const down = { transform: 'translateY(100%)' }, up = { transform: 'translateY(0)' };
        await wait(800);
        while (await ready()) {
          tap(C, 28.1, 93); await wait(90);
          anim(nav, down, up, 400);
          await wait(2100);
          tap(C, 4.6, 15.3); await wait(90);
          anim(nav, up, down, 400);
          await wait(1600);
        }
      })();
    });
  }

  function zoom(id) {
    const o = openWins.get(id); if (!o) return;
    const on = o.el.classList.toggle('is-max');
    const b = o.el.querySelector('.win__zoom');
    if (b) b.textContent = on ? 'Zmniejsz okno' : 'Otwórz na cały ekran';
    focusWin(o.el);
  }

  function close(id) {
    const o = openWins.get(id); if (!o) return;
    o.el.remove(); openWins.delete(id);
    if (o.opener && document.contains(o.opener)) o.opener.focus({ preventScroll: true });
  }

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape' || !openWins.size) return;
    let top = null, topZ = -1;
    openWins.forEach((o, id) => { const zi = +o.el.style.zIndex; if (zi > topZ) { topZ = zi; top = id; } });
    if (top) close(top);
  });

  // klik w pulpit poza oknem (nie w ikonę, naklejkę ani dock) zamyka wszystkie okna
  // (liczy się miejsce wciśnięcia — zaznaczanie tekstu w oknie puszczone poza nim nie zamyka okna)
  const KEEP = '.win, .icon, .sticker, [data-dock]';
  let downOutside = false;
  stage.addEventListener('pointerdown', e => { downOutside = !e.target.closest(KEEP); }, true);
  stage.addEventListener('click', e => {
    if (!openWins.size || !downOutside || e.target.closest(KEEP)) return;
    [...openWins.keys()].forEach(close);
  });

  /* ---------- start ---------- */
  renderItems();
  renderDock();
  mq.addEventListener('change', () => { renderItems(); requestAnimationFrame(fit); });
  if (reduced.matches) stage.classList.add('is-reduced');
})();
