import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../en/offer/page.module.css";
import VenueGallery from "@/components/VenueGallery";
import MainHallImageSwitcher from "@/components/MainHallImageSwitcher";

export const metadata: Metadata = {
  title: "Wynajem & Oferta Eventowa — TAMA Poznań",
  description: "Monumentalna industrialna przestrzeń eventowa w sercu Poznania dla do 1 000 gości. Konferencje, gale, bankiety i koncerty. Sprawdź układy sal, zaplecze techniczne i zapytaj o termin.",
};

const stats = [
  { value: "1 000", label: "Maks. liczba gości" },
  { value: "1 100 m²", label: "Łączna powierzchnia" },
  { value: "5 Sal", label: "Niezależne strefy" },
  { value: "Centrum", label: "0,8 km od Dworca PKP" },
];

const eventTypes = [
  "Konferencje & Kongresy",
  "Gale & Jubileusze Firmowe",
  "Bankiety Zasiadane",
  "Imprezy Integracyjne & Firmowe",
  "Koncerty & Spektakle",
  "Pokazy Mody & Premiery",
  "Targi & Wystawy",
  "Hackathony & Spotkania Branżowe",
];

const mailtoSubject = encodeURIComponent("Zapytanie o wynajem TAMA: [Data i charakter wydarzenia]");
const mailtoBody = encodeURIComponent(
  `Dzień dobry,

Chciał(a)bym zapytać o dostępność terminu w klubie TAMA:
- Planowana data wydarzenia: 
- Szacowana liczba gości: 
- Rodzaj wydarzenia (konferencja / gala / bankiet / koncert / inne): 
- Preferowane sale / strefy: 
- Wymagania techniczne / catering: 

Proszę o kontakt zwrotny oraz wstępną ofertę.

Pozdrawiam,`
);

export default function WynajemPage() {
  return (
    <div className={styles.page}>
      <div className="container">

        {/* 1. Hero Section */}
        <div className={`${styles.hero} reveal`}>
          <p className={styles.eyebrow}>PRZESTRZEŃ EVENTOWA · POZNAŃ CENTRUM</p>
          <h1 className={`${styles.title} text-gradient`}>Zorganizuj Swoje Wydarzenie w TAMIE</h1>
          <p className={styles.sub}>
            Ponad 1 100 m² zrewitalizowanej przestrzeni industrialnej w zabytkowym gmachu Wielkopolskiej Izby Rzemieślniczej.
            Monumentalne miejsce na prestiżowe konferencje, gale jubileuszowe, bankiety zasiadane i koncerty dla grup do 1 000 osób.
          </p>
          <div className={styles.heroCta}>
            <a href="#zapytaj" className="btn">
              ZAPYTAJ O TERMIN →
            </a>
            <a href="#galeria" className={styles.btnHeroOutline}>
              ZOBACZ ZDJĘCIA ↓
            </a>
          </div>
        </div>

        {/* 2. Key Metrics Strip */}
        <div className={styles.statsRow}>
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`${styles.stat} reveal`}
              style={{ '--reveal-delay': `${idx * 30}ms` } as React.CSSProperties}
            >
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* 3. Event Types */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>FORMATY WYDARZEŃ</span>
            <h2 className={styles.sectionTitle}>Co Organizujemy</h2>
            <p className={styles.sectionDesc}>
              Od kameralnych spotkań zarządu i bankietów VIP po kongresy z widownią teatralną i masowe widowiska koncertowe.
            </p>
          </div>
          <div className={styles.tagGrid}>
            {eventTypes.map((type) => (
              <span key={type} className={styles.tag}>{type}</span>
            ))}
          </div>
        </div>

        {/* 4. Visual Showcase: Gallery (Elevated) */}
        <div id="galeria" className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>ATMOSFERA & WNĘTRZA</span>
            <h2 className={styles.sectionTitle}>Galeria Kompleksu TAMA</h2>
            <p className={styles.sectionDesc}>
              Zabytkowa tkanka postindustrialna połączona z zaawansowaną technologią sceniczną, multimediami i autorskim designem.
            </p>
          </div>
          <VenueGallery isEnglish={false} variant="tama" />
        </div>

        {/* 5. Real Setups Matrix (Photographic Cards) */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>POJEMNOŚĆ & ARANŻACJE</span>
            <h2 className={styles.sectionTitle}>Możliwe Układy Sali Głównej</h2>
            <p className={styles.sectionDesc}>
              Ponad 500 m² otwartej powierzchni Sali Głównej umożliwia precyzyjne dopasowanie układu widowni i stref towarzyszących do scenariusza Twojego wydarzenia.
            </p>
          </div>

          <div className={styles.setupsGrid}>
            {/* Setup 1: Banquet */}
            <div className={styles.setupCard}>
              <div className={styles.setupImageWrapper}>
                <Image
                  src="/offer/arturAENnowicki-2992.jpg"
                  alt="Układ bankietowy w klubie TAMA"
                  fill
                  className={styles.setupImage}
                  sizes="(max-width: 992px) 100vw, 33vw"
                />
              </div>
              <div className={styles.setupBody}>
                <div className={styles.setupHeader}>
                  <div className={styles.setupTitleBlock}>
                    <span className={styles.setupTag}>BANKIETOWE · GALA &amp; JUBILEUSZ</span>
                    <h3 className={styles.setupTitle}>Układ Bankietowy (250 Miejsc)</h3>
                  </div>
                  <div className={styles.setupIconBadge} title="Układ bankietowy">
                    <Image
                      src="/icons/Artboard3.svg"
                      alt="Ikona układu bankietowego"
                      width={28}
                      height={28}
                      className={styles.setupIcon}
                    />
                  </div>
                </div>
                <p className={styles.setupText}>
                  25 dziesięcioosobowych okrągłych stołów z pełną zastawą bankietową i białymi obrusami. Komfortowa przestrzeń z centralnym parkietem, sceną na prelekcje lub orkiestrę oraz dostępem do głównego baru.
                </p>
                <ul className={styles.setupBullets}>
                  <li>25 stołów (10-osobowych) · Łącznie 250 miejsc siedzących</li>
                  <li>Przestronne ciągi komunikacyjne i dedykowany parkiet</li>
                  <li>Możliwość wydzielenia strefy bufetów zimnych i ciepłych</li>
                </ul>
              </div>
            </div>

            {/* Setup 2: Theater / Conference */}
            <div className={styles.setupCard}>
              <div className={styles.setupImageWrapper}>
                <Image
                  src="/offer/arturAENnowicki-2942.jpg"
                  alt="Układ konferencyjny teatralny w klubie TAMA"
                  fill
                  className={styles.setupImage}
                  sizes="(max-width: 992px) 100vw, 33vw"
                />
              </div>
              <div className={styles.setupBody}>
                <div className={styles.setupHeader}>
                  <div className={styles.setupTitleBlock}>
                    <span className={styles.setupTag}>TEATRALNE / KONFERENCYJNE</span>
                    <h3 className={styles.setupTitle}>Układ Teatralny (400 Miejsc)</h3>
                  </div>
                  <div className={styles.setupIconBadge} title="Układ teatralny i konferencyjny">
                    <Image
                      src="/icons/Artboard2.svg"
                      alt="Ikona układu teatralnego i konferencyjnego"
                      width={28}
                      height={28}
                      className={styles.setupIcon}
                    />
                  </div>
                </div>
                <p className={styles.setupText}>
                  Klasyczny układ amfiteatralny skierowany na pełnowymiarową scenę estradową. Do dyspozycji prelegentów wielkoformatowy ekran główny, 5 bocznych ekranów projekcyjnych oraz antresola widokowa.
                </p>
                <ul className={styles.setupBullets}>
                  <li>400 miejsc siedzących w układzie konferencyjnym</li>
                  <li>Scena z pełnym oświetleniem prelekcyjnym i mównicą</li>
                  <li>System mikrofonów bezprzewodowych i reżyseria multimediów</li>
                </ul>
              </div>
            </div>

            {/* Setup 3: Concert / Standing */}
            <div className={styles.setupCard}>
              <div className={styles.setupImageWrapper}>
                <Image
                  src="/offer/AEN04241.jpg"
                  alt="Układ koncertowo-eventowy w klubie TAMA"
                  fill
                  className={styles.setupImage}
                  sizes="(max-width: 992px) 100vw, 33vw"
                />
              </div>
              <div className={styles.setupBody}>
                <div className={styles.setupHeader}>
                  <div className={styles.setupTitleBlock}>
                    <span className={styles.setupTag}>KONCERTOWO-EVENTOWE</span>
                    <h3 className={styles.setupTitle}>Układ Koncertowy (Do 1 000 Miejsc)</h3>
                  </div>
                  <div className={styles.setupIconBadge} title="Układ koncertowo-eventowy">
                    <Image
                      src="/icons/Artboard1.svg"
                      alt="Ikona układu koncertowo-eventowego"
                      width={28}
                      height={28}
                      className={styles.setupIcon}
                    />
                  </div>
                </div>
                <p className={styles.setupText}>
                  Maksymalne wykorzystanie otwartej kubatury sali. Profesjonalny rider estradowy, dynamiczne oświetlenie klubowe, 2 niezależne bary oraz bezpośrednie zaplecze garderobiane dla artystów i wykonawców.
                </p>
                <ul className={styles.setupBullets}>
                  <li>1 000 miejsc stojących lub 20 stolików + 800 stojących</li>
                  <li>Riderowe nagłośnienie liniowe wiodących marek estradowych</li>
                  <li>Dynamiczna reżyseria świateł (głowice ruchome, stroboskopy, haze)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 6. The 5-Space Complex Modularity */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>MODUŁOWOŚĆ & PRZESTRZEŃ</span>
            <h2 className={styles.sectionTitle}>Kompleks 5 Niezależnych Sal</h2>
            <p className={styles.sectionDesc}>
              Ponad 1 100 m² powierzchni podzielonej na 5 niezależnych stref. Wynajmij cały gmach na wyłączność lub połącz wybrane sale pod dedykowany scenariusz (np. plenaria + catering + afterparty + VIP room).
            </p>
          </div>

          <div className={styles.spacesGrid}>
            {/* Space 1: Main Room (Hero Card) */}
            <div className={`${styles.spaceCard} ${styles.spaceCardHero}`}>
              <MainHallImageSwitcher isEnglish={false} />
              <div className={styles.spaceBody}>
                <span className={styles.spaceMeta}>SALA GŁÓWNA · POWIERZCHNIA &gt;500 M² · DO 1 000 GOŚCI</span>
                <h3 className={styles.spaceTitle}>Sala Główna</h3>
                <p className={styles.spaceDesc}>
                  Centralne serce kompleksu TAMA. Przestrzeń z potężną sceną koncertową, antresolą widokową, 5 bocznymi ekranami multimedialnymi, nagłośnieniem liniowym oraz głównym barem koktajlowym.
                </p>
                <ul className={styles.spaceBullets}>
                  <li>Scena estradowa z bezpośrednim wjazdem rampą rozładunkową</li>
                  <li>Możliwość dowolnej rekonfiguracji (bankiet, konferencja, widowisko)</li>
                  <li>Dedykowane zaplecze techniczne i reżyserka dźwięku/światła</li>
                </ul>
              </div>
            </div>

            {/* Space 2: Chandelier Room */}
            <div className={styles.spaceCard}>
              <div className={styles.spaceImageWrapper}>
                <Image
                  src="/offer/ARTUR_AEN_NOWICKI-5262.jpg"
                  alt="Sala Żyrandolowa w TAMIE"
                  fill
                  className={styles.spaceImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.spaceBody}>
                <span className={styles.spaceMeta}>SALA ŻYRANDOLOWA · 150 M² · DO 120 GOŚCI</span>
                <h3 className={styles.spaceTitle}>Sala Żyrandolowa</h3>
                <p className={styles.spaceDesc}>
                  Reprezentacyjna przestrzeń o unikalnym zabytkowym charakterze: kryształowe żyrandole, autentyczne witraże, dębowy parkiet oraz dedykowany bar koktajlowy.
                </p>
                <ul className={styles.spaceBullets}>
                  <li>Idealna na strefę powitalną (welcome drink), bankiet lub networking</li>
                  <li>Dedykowana strefa bufetów cateringowych i strefy lounge</li>
                  <li>Połączenie z zabytkową klatką schodową i palarnią</li>
                </ul>
              </div>
            </div>

            {/* Space 3: SLOW Space */}
            <div className={styles.spaceCard}>
              <div className={styles.spaceImageWrapper}>
                <Image
                  src="/spaces/slow.jpg"
                  alt="Nowa Przestrzeń SLOW"
                  fill
                  className={styles.spaceImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.spaceBody}>
                <span className={styles.spaceMeta}>NOWA PRZESTRZEŃ SLOW · 200 M² · DO 200 GOŚCI</span>
                <h3 className={styles.spaceTitle}>Klub &amp; Lounge SLOW</h3>
                <p className={styles.spaceDesc}>
                  Modułowy, wykończony w industrialnym stylu klub zaprojektowany przez uznaną pracownię architektoniczną mode:lina™. Świetna przestrzeń na warsztaty, prelekcje lub afterparty po gali.
                </p>
                <ul className={styles.spaceBullets}>
                  <li>Audiofilska adaptacja akustyczna i intymna atmosfera</li>
                  <li>Niezależny cocktail bar rzemieślniczy oraz antresola</li>
                  <li>Możliwość całkowicie niezależnego funkcjonowania lub połączenia z TAMĄ</li>
                </ul>
              </div>
            </div>

            {/* Space 4: Sala U'Patki */}
            <div className={styles.spaceCard}>
              <div className={styles.spaceImageWrapper}>
                <Image
                  src="/spaces/upatki.jpg"
                  alt="Sala U'Patki w klubie TAMA"
                  fill
                  className={styles.spaceImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.spaceBody}>
                <span className={styles.spaceMeta}>SALA U&apos;PATKI · 42 M² · DO 35 GOŚCI</span>
                <h3 className={styles.spaceTitle}>Sala U&apos;Patki</h3>
                <p className={styles.spaceDesc}>
                  Kameralne i klimatyczne wnętrze doskonale sprawdzające się jako dedykowany VIP room, cicha strefa rozmów biznesowych, studio fotograficzne lub strefa atrakcji dodatkowych.
                </p>
                <ul className={styles.spaceBullets}>
                  <li>Ustawienie stołów bankietowych, koktajlowych lub mebli klubowych</li>
                  <li>Dyskretna lokalizacja gwarantująca prywatność dla gości VIP</li>
                </ul>
              </div>
            </div>

            {/* Space 5: Sala Konferencyjna */}
            <div className={styles.spaceCard}>
              <div className={styles.spaceImageWrapper}>
                <Image
                  src="/conference/sala-konferencyjna.jpg"
                  alt="Sala Konferencyjna w klubie TAMA"
                  fill
                  className={styles.spaceImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.spaceBody}>
                <span className={styles.spaceMeta}>SALA KONFERENCYJNA · 19 M² · DO 12 GOŚCI</span>
                <h3 className={styles.spaceTitle}>Sala Konferencyjna / Boardroom</h3>
                <p className={styles.spaceDesc}>
                  Funkcjonalna sala narad wyposażona w stół konferencyjny i szybki internet. Służy również jako biuro produkcyjne dla ekipy eventowej lub green room dla prelegentów.
                </p>
                <ul className={styles.spaceBullets}>
                  <li>Dedykowana przestrzeń robocza dla organizatorów i agencji</li>
                  <li>Wygodne zaplecze administracyjne podczas wielogodzinnych realizacji</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Technical Infrastructure & Rider (4 Pillars) */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>INFRASTRUKTURA PRODUKCYJNA</span>
            <h2 className={styles.sectionTitle}>Dlaczego TAMA? Zaplecze Techniczne</h2>
            <p className={styles.sectionDesc}>
              Jeden z najlepiej wyposażonych obiektów koncertowo-konferencyjnych w Polsce. Pełna infrastruktura estradowa w standardzie, bez konieczności kosztownego wynajmu zewnętrznych wozów technicznych.
            </p>
          </div>

          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <span className={styles.techNumber}>01 / DŹWIĘK</span>
              <h3 className={styles.techTitle}>Dźwięk Koncertowy</h3>
              <p className={styles.techText}>
                Topowe liniowe systemy nagłośnieniowe, miksery cyfrowe oraz riderowe mikrofony bezprzewodowe. Precyzyjne pokrycie sali gwarantujące kryształową czystość głosu prelegentów i potężne brzmienie muzyki.
              </p>
            </div>

            <div className={styles.techCard}>
              <span className={styles.techNumber}>02 / MULTIMEDIA</span>
              <h3 className={styles.techTitle}>Światło &amp; 5 Ekranów</h3>
              <p className={styles.techText}>
                Rozbudowany park oświetleniowy: inteligentne ruchome głowice, reflektory sceniczne i naświetlacze LED. Do dyspozycji 5 bocznych ekranów multimedialnych oraz wielki ekran na scenie.
              </p>
            </div>

            <div className={styles.techCard}>
              <span className={styles.techNumber}>03 / SCENA</span>
              <h3 className={styles.techTitle}>Scena &amp; Garderoby</h3>
              <p className={styles.techText}>
                Pełnowymiarowa scena estradowa z rampą oświetleniową. Profesjonalne zaplecze dla artystów i prelegentów: garderoby z lustrami, węzłem sanitarnym i prysznicami.
              </p>
            </div>

            <div className={styles.techCard}>
              <span className={styles.techNumber}>04 / LOGISTYKA</span>
              <h3 className={styles.techTitle}>Rampa &amp; Zasilanie</h3>
              <p className={styles.techText}>
                Bezpośredni podjazd techniczny z rampą rozładunkową na poziom sali (szybki load-in ciężkiego sprzętu). Przyłącza prądowe dużej mocy (32A, 63A) z certyfikowanym zapleczem.
              </p>
            </div>
          </div>
        </div>

        {/* 8. Corporate Realizations & Brand Trust */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>ZAUFALI NAM</span>
            <h2 className={styles.sectionTitle}>Przykładowe Realizacje B2B</h2>
            <p className={styles.sectionDesc}>
              Zobacz, jak czołowe międzynarodowe firmy zaaranżowały przestrzeń Tamy pod swoje najważniejsze wydarzenia.
            </p>
          </div>

          <div className={styles.realizationsGrid}>
            {/* Realization 1: NIVEA Gala */}
            <div className={styles.realizationCard}>
              <div className={styles.realizationImageWrapper}>
                <Image
                  src="/offer/arturAENnowicki-2970.jpg"
                  alt="Gala jubileuszowa z błękitnym dywanem dla NIVEA w klubie TAMA"
                  fill
                  className={styles.realizationImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.realizationBody}>
                <span className={styles.realizationTag}>GALA KORPORACYJNA · JUBILEUSZ · BANKIET</span>
                <h3 className={styles.realizationTitle}>Gala z Błękitnym Dywanem (NIVEA)</h3>
                <p className={styles.realizationText}>
                  Kompleksowa realizacja jubileuszowa. Monumentalna klatka schodowa i wejście zaadaptowane na strefę powitalną z błękitnym dywanem i ścianką foto, bankiet zasiadany w Sali Żyrandolowej oraz część oficjalna w Sali Głównej.
                </p>
                <ul className={styles.realizationBullets}>
                  <li>Reprezentacyjna aranżacja strefy wejścia i schodów z oświetleniem architektonicznym</li>
                  <li>Strefa bankietowa z bufetami ciepłymi i zimnymi pod żyrandolami</li>
                  <li>Sesja plenarna z pełną reżyserią światła i prezentacją multimedialną</li>
                </ul>
              </div>
            </div>

            {/* Realization 2: AWS / GIC Tech Conference */}
            <div className={styles.realizationCard}>
              <div className={styles.realizationImageWrapper}>
                <Image
                  src="/offer/artur_aen_nowicki-0049.jpg"
                  alt="Pre-GIC Party powered by AWS w klubie TAMA"
                  fill
                  className={styles.realizationImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.realizationBody}>
                <span className={styles.realizationTag}>BRANŻA TECH · KONFERENCJA B2B · NETWORKING</span>
                <h3 className={styles.realizationTitle}>Pre-GIC Party Powered by AWS</h3>
                <p className={styles.realizationText}>
                  Międzynarodowe spotkanie branży gamingowej i technologicznej dla Amazon Web Services oraz Game Industry Conference. Przestrzeń zaaranżowana w nowoczesnej formule networkingowej ze strefami barowymi i wielkoformatowym brandingiem.
                </p>
                <ul className={styles.realizationBullets}>
                  <li>Podświetlane pionowe totemy brandingowe AWS for Games</li>
                  <li>Układ koktajlowy sprzyjający swobodnym rozmowom biznesowym</li>
                  <li>Dynamiczne oświetlenie ambientowe w barwach identyfikacji wizualnej klienta</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 9. Location & Logistics */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>DOJAZD &amp; POŁOŻENIE</span>
            <h2 className={styles.sectionTitle}>Lokalizacja w Sercu Poznania</h2>
            <p className={styles.sectionDesc}>
              TAMA znajduje się w samym centrum Poznania w zabytkowym gmachu Wielkopolskiej Izby Rzemieślniczej, zaledwie 800 metrów od Dworca Głównego PKP i Międzynarodowych Targów Poznańskich. W bezpośrednim sąsiedztwie zlokalizowane są liczne hotele i parkingi.
            </p>
          </div>

          <div className={styles.locationBox}>
            <a 
              href="https://www.google.com/maps/search/Tama+Klub+Poznan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.locationAddress}
            >
              ul. Niezłomnych 2, 61-894 Poznań (Budynek Wielkopolskiej Izby Rzemieślniczej) →
            </a>

            <div className={styles.transitGrid}>
              <div className={styles.transitItem}>
                <Image src="/icons/Artboard4.svg" alt="Dworzec PKP" width={52} height={52} className={styles.transitIcon} />
                <div>
                  <div className={styles.transitLabel}>Dworzec Główny PKP / PKS</div>
                  <div className={styles.transitValue}>0,8 km (10 min pieszo)</div>
                </div>
              </div>

              <div className={styles.transitItem}>
                <Image src="/icons/Artboard5.svg" alt="Lotnisko" width={52} height={52} className={styles.transitIcon} />
                <div>
                  <div className={styles.transitLabel}>Port Lotniczy Poznań-Ławica</div>
                  <div className={styles.transitValue}>6,4 km (15 min autem)</div>
                </div>
              </div>

              <div className={styles.transitItem}>
                <Image src="/icons/Artboard6.svg" alt="Komunikacja miejska" width={52} height={52} className={styles.transitIcon} />
                <div>
                  <div className={styles.transitLabel}>Dojazd komunikacją miejską</div>
                  <div className={styles.transitValue}>Tramwaj &amp; Autobus (Wierzbięce)</div>
                </div>
              </div>
            </div>

            <iframe
              src="https://maps.google.com/maps?q=TAMA%20Klub%20Poznan&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className={styles.mapEmbed}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TAMA Poznań Google Map"
            />
          </div>
        </div>

        {/* 10. Dedicated B2B Booking Card */}
        <div id="zapytaj" className={`${styles.bookingCard} reveal`}>
          <div className={styles.bookingInner}>
            <span className={styles.bookingEyebrow}>REZERWACJA &amp; WYCENA</span>
            <h2 className={styles.bookingTitle}>Zaplanuj Swoje Wydarzenie w TAMIE</h2>
            <p className={styles.bookingDesc}>
              Skontaktuj się bezpośrednio z naszym zespołem produkcji i wynajmu B2B. Pomożemy dobrać optymalny układ przestrzeni, harmonogram techniczny oraz menu cateringowe dopasowane do Twojego budżetu.
            </p>

            <div className={styles.bookingContacts}>
              <div className={styles.bookingItem}>
                <span className={styles.bookingRole}>Wynajem Przestrzeni i Eventy B2B</span>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>Katya</span>
                <a href={`mailto:katya@tamaklub.pl?subject=${mailtoSubject}&body=${mailtoBody}`} className={styles.bookingEmail}>
                  katya@tamaklub.pl
                </a>
              </div>

              <div className={styles.bookingItem}>
                <span className={styles.bookingRole}>Biuro Produkcji &amp; Zapytania Ogólne</span>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>Klub TAMA</span>
                <a href="mailto:kontakt@tamaklub.pl" className={styles.bookingEmail}>
                  kontakt@tamaklub.pl
                </a>
              </div>
            </div>

            <div className={styles.bookingActions}>
              <a
                href={`mailto:katya@tamaklub.pl?subject=${mailtoSubject}&body=${mailtoBody}`}
                className="btn"
                id="tama-offer-enquire-btn"
              >
                WYŚLIJ ZAPYTANIE →
              </a>
              <Link
                href="/kontakt"
                className={styles.btnHeroOutline}
                id="tama-offer-contact-btn"
              >
                DANE KONTAKTOWE
              </Link>
            </div>

            <p className={styles.bookingNote}>
              * Odpowiadamy zazwyczaj w ciągu 24 godzin i przygotowujemy wstępną kalkulację kosztów oraz rekomendację sal.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

