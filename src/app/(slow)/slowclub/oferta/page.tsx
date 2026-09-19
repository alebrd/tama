import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../../en/slowclub/offer/page.module.css";
import VenueGallery from "@/components/VenueGallery";

export const metadata: Metadata = {
  title: "Oferta — SLOW",
  description: "Wynajem przestrzeni klubowej i eventowej w SLOW w sercu Poznania dla do 200 gości. Intymny klimat, audiofilskie nagłośnienie, strefa barowa i antresola.",
};

const stats = [
  { value: "200", label: "Maks. gości" },
  { value: "200 m²", label: "Łączna powierzchnia" },
  { value: "Centrum", label: "Lokalizacja w Poznaniu" },
];

const eventTypes = [
  "Imprezy firmowe",
  "Imprezy okolicznościowe",
  "Spotkania branżowe",
  "Warsztaty i panele",
  "Wieczory autorskie",
  "Mini konferencje",
];

const slowGalleryImages = [
  // Top 8 for the Preview Grid
  "/slow-offer/Dancefloor-1_SLOW.jpg",
  "/slow-offer/Bar_SLOW.jpg",
  "/slow-offer/Antresola-1_SLOW.jpg",
  "/slow-offer/Sala_SLOW.jpg",
  "/slow-offer/Dancefloor-3_SLOW.jpg",
  "/slow-offer/Bar-2_SLOW.jpg",
  "/slow-offer/Antresola-7_SLOW.jpg",
  "/slow-offer/Deco_SLOW.jpg",
  // Additional Photos in Modal
  "/slow/slow-prev-events/IMG_7590.jpeg",
  "/slow/slow-prev-events/IMG_7587.jpeg",
  "/slow-offer/Dancefloor-2_SLOW.jpg",
  "/slow-offer/Dancefloor-4_SLOW.jpg",
  "/slow-offer/Dancefloor-5_SLOW.jpg",
  "/slow-offer/Dancefloor-6_SLOW.jpg",
  "/slow-offer/Dancefloor-7_SLOW.jpg",
  "/slow-offer/Dancefloor_SLOW.jpg",
  "/slow-offer/Bar-3_SLOW.jpg",
  "/slow-offer/Bar.jpg",
  "/slow-offer/Sala__SLOW.jpg",
  "/slow-offer/Antresola-2_SLOW.jpg",
  "/slow-offer/Antresola-3_SLOW.jpg",
  "/slow-offer/Antresola-4_SLOW.jpg",
  "/slow-offer/Antresola-5_SLOW.jpg",
  "/slow-offer/Antresola-6_SLOW.jpg",
  "/slow-offer/Antresola-8_SLOW.jpg",
  "/slow-offer/Antresola-9_SLOW.jpg",
  "/slow-offer/Antresola-10_SLOW.jpg",
  "/slow-offer/Antresola-11_SLOW.jpg",
  "/slow-offer/Antresola-12_SLOW.jpg",
  "/slow-offer/Antresola-13_SLOW.jpg",
  "/slow-offer/Antresola-14_SLOW.jpg",
  "/slow-offer/Antresola-15_SLOW.jpg",
  "/slow-offer/Antresola-16_SLOW.jpg",
  "/slow-offer/Antresola-17_SLOW.jpg",
  "/slow-offer/Antresola-18_SLOW.jpg",
];

export default function SlowOfertaPage() {
  return (
    <div className={styles.page}>
      <div className="container">

        {/* 1. Hero */}
        <div className={`${styles.hero} reveal`}>
          <p className={styles.eyebrow}>PRZESTRZEŃ EVENTOWA · POZNAŃ</p>
          <h1 className={styles.title}>Zorganizuj Swoje Wydarzenie</h1>
          <p className={styles.sub}>
            Imprezy firmowe, gale, prywatne przyjęcia i spotkania autorskie —
            intymna atmosfera, audiofilskie brzmienie i wyjątkowy klimat w sercu Poznania.
          </p>
          <div className={styles.heroCta}>
            <a href="#zapytaj" className="btn-slow">
              ZAPYTAJ O TERMIN →
            </a>
            <a href="#galeria" className={styles.btnSlowOutline}>
              ZOBACZ ZDJĘCIA ↓
            </a>
          </div>
        </div>

        {/* 2. Stats */}
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
            <h2 className={styles.sectionTitle}>Co Organizujemy</h2>
          </div>
          <div className={styles.tagGrid}>
            {eventTypes.map((type) => (
              <span key={type} className={styles.tag}>{type}</span>
            ))}
          </div>
        </div>

        {/* 4. Gallery Showcase (Photos First) */}
        <div id="galeria" className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>ATMOSFERA & WNĘTRZA</span>
            <h2 className={styles.sectionTitle}>Galeria Przestrzeni SLOW</h2>
            <p className={styles.sectionDesc}>
              Zobacz jak prezentuje się wnętrze klubu, parkiet, antresola i cocktail bar podczas wydarzeń.
            </p>
          </div>
          <VenueGallery isEnglish={false} images={slowGalleryImages} variant="slow" title="Galeria SLOW Club" />
        </div>

        {/* 5. Main Space & Setups */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>PRZESTRZEŃ GŁÓWNA</span>
            <h2 className={styles.sectionTitle}>SLOW Club & Możliwe Ustawienia</h2>
            <p className={styles.sectionDesc}>
              Modułowa przestrzeń zaprojektowana przez pracownię mode:lina™, łącząca industrialny charakter z doskonałą akustyką i pełnym zapleczem technicznym.
            </p>
          </div>

          <div className={styles.mainSpaceCard}>
            <div className={styles.mainSpaceImageWrapper}>
              <Image
                src="/slow-offer/Dancefloor-1_SLOW.jpg"
                alt="SLOW Club — przestrzeń klubowa"
                fill
                className={styles.mainSpaceImage}
                sizes="(max-width: 992px) 100vw, 50vw"
              />
            </div>
            <div className={styles.mainSpaceBody}>
              <span className={styles.mainSpaceEyebrow}>SERCE KLUBU</span>
              <h3 className={styles.mainSpaceTitle}>SLOW Club — 200 m²</h3>
              <p className={styles.mainSpaceText}>
                Przestrzeń łącząca strefę parkietu, cocktail bar, intymną antresolę oraz wygodne loże. Elastyczny układ pozwala na płynne przejście od części oficjalnej i prezentacyjnej do wieczornego bankietu lub imprezy tanecznej.
              </p>
              <ul className={styles.specsList}>
                <li>Do 200 gości stojących</li>
                <li>200 m² łącznej powierzchni</li>
                <li>Parkiet taneczny & strefa loży</li>
                <li>Antresola z widokiem na klub</li>
                <li>Dedykowany cocktail bar</li>
                <li>Zaplecze multimedialne i DJ</li>
              </ul>
            </div>
          </div>

          <div className={styles.setupsGrid}>
            <div className={styles.setupCard}>
              <div className={styles.setupHeader}>
                <h4 className={styles.setupTitle}>Klubowo-Eventowe</h4>
                <Image src="/icons/Artboard1.svg" alt="Klubowo-Eventowe" width={32} height={32} className={styles.setupIcon} />
              </div>
              <div className={styles.setupCapacity}>Do 200 osób</div>
              <p className={styles.setupDesc}>
                Miejsca stojące i cocktailowe. Pełny dostęp do parkietu, baru i antresoli. Idealne na imprezy firmowe, gale, koncerty i premiery produktów.
              </p>
            </div>

            <div className={styles.setupCard}>
              <div className={styles.setupHeader}>
                <h4 className={styles.setupTitle}>Cocktail & Networking</h4>
                <Image src="/icons/Artboard3.svg" alt="Cocktail" width={32} height={32} className={styles.setupIcon} />
              </div>
              <div className={styles.setupCapacity}>Do 120 osób</div>
              <p className={styles.setupDesc}>
                Formuła koktajlowa ze stolikami wyskokimi, lożami i swobodnym przepływem gości pomiędzy barem a antresolą. Doskonałe na bankiety firmowe.
              </p>
            </div>

            <div className={styles.setupCard}>
              <div className={styles.setupHeader}>
                <h4 className={styles.setupTitle}>Kameralne / Siedzące</h4>
                <Image src="/icons/Artboard2.svg" alt="Kameralne" width={32} height={32} className={styles.setupIcon} />
              </div>
              <div className={styles.setupCapacity}>Do 70 osób</div>
              <p className={styles.setupDesc}>
                Układ lounge ze strefą warsztatową i antresolą. Dedykowany pod prezentacje, panele dyskusyjne, listening sessions i spotkania autorskie.
              </p>
            </div>
          </div>
        </div>

        {/* 6. Realizacje Eventowe / Real Event Setups */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>REALIZACJE EVENTOWE</span>
            <h2 className={styles.sectionTitle}>Jak Wyglądają Wydarzenia w SLOW</h2>
            <p className={styles.sectionDesc}>
              Od ekskluzywnych wieczorów tematycznych z kasynem po warsztaty firmowe z pełną strefą cateringową — zobacz rzeczywiste aranżacje naszej przestrzeni.
            </p>
          </div>

          <div className={styles.realizationsGrid}>
            {/* Realization 1: Casino / Themed Gala */}
            <div className={styles.realizationCard}>
              <div className={styles.realizationImageWrapper}>
                <Image
                  src="/slow/slow-prev-events/IMG_7587.jpeg"
                  alt="Wieczór tematyczny i kasyno w SLOW"
                  fill
                  className={styles.realizationImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.realizationBody}>
                <span className={styles.realizationTag}>IMPREZA TEMATYCZNA · GALA FIRMOWA</span>
                <h4 className={styles.realizationTitle}>Kasyno & Wieczór Rozrywki</h4>
                <p className={styles.realizationText}>
                  Aranżacja przestrzeni pod wieczór w klimacie Las Vegas & Wall Street. Parkiet zaadaptowany na profesjonalne stoły do gier (ruletka, blackjack), strefę z podświetlaną fotobudką oraz czerwone liny kordonowe.
                </p>
                <ul className={styles.realizationBullets}>
                  <li>Stoły kasynowe z podświetleniem LED</li>
                  <li>Dedykowana strefa foto i branding eventowy</li>
                  <li>Klimatyczne oświetlenie sceniczne UV/cyan</li>
                </ul>
              </div>
            </div>

            {/* Realization 2: Catering & Workshops */}
            <div className={styles.realizationCard}>
              <div className={styles.realizationImageWrapper}>
                <Image
                  src="/slow/slow-prev-events/IMG_7590.jpeg"
                  alt="Strefa cateringowa i warsztaty w SLOW"
                  fill
                  className={styles.realizationImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.realizationBody}>
                <span className={styles.realizationTag}>CATERING · WARSZTATY & PRZYJĘCIE</span>
                <h4 className={styles.realizationTitle}>Strefa Cateringowa & Przerwa Kawowa</h4>
                <p className={styles.realizationText}>
                  Kompleksowa strefa bankietowa zaaranżowana wzdłuż antresoli z pełnym bufetem kawowo-deserowym, świąteczną dekoracją girlandową i dedykowaną nawigacją stref wydarzenia.
                </p>
                <ul className={styles.realizationBullets}>
                  <li>Stacja kawowo-herbaciana z ekspresem i bemarami</li>
                  <li>Bufet przekąsek i wypieków bankietowych</li>
                  <li>Personalizowana identyfikacja wizualna i oznaczenia</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 7. USPs / The SLOW Experience */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>STANDARDY REALIZACJI</span>
            <h2 className={styles.sectionTitle}>Dlaczego SLOW?</h2>
            <p className={styles.sectionDesc}>
              Trzy filary, które decydują o wyjątkowym charakterze każdego wydarzenia w naszej przestrzeni.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <span className={styles.featureNumber}>01 / AKUSTYKA</span>
              <h4 className={styles.featureTitle}>Audiofilski Dźwięk</h4>
              <p className={styles.featureText}>
                Wnętrze zrealizowane we współpracy z pracownią architektoniczną mode:lina™. Dedykowana adaptacja akustyczna i nagłośnienie klasy premium gwarantują krystaliczne brzmienie zarówno podczas prelekcji, jak i setów muzycznych.
              </p>
            </div>

            <div className={styles.featureCard}>
              <span className={styles.featureNumber}>02 / BAR</span>
              <h4 className={styles.featureTitle}>Autorski Cocktail Bar</h4>
              <p className={styles.featureText}>
                Doświadczeni barmani i autorska karta koktajli oparta na rzemieślniczych składnikach. Zapewniamy pełną obsługę barową, personalizowane drinki powitalne oraz elastyczne formuły open-bar.
              </p>
            </div>

            <div className={styles.featureCard}>
              <span className={styles.featureNumber}>03 / DESIGN</span>
              <h4 className={styles.featureTitle}>Światło i Architektura</h4>
              <p className={styles.featureText}>
                Zabytkowy gmach Wielkopolskiej Izby Rzemieślniczej z lat 30. XX wieku w połączeniu z dynamicznym oświetleniem scenicznym RGBW/UV, neonami i aksamitem tworzy unikalny, filmowy klimat.
              </p>
            </div>
          </div>
        </div>

        {/* 7. Additional Breakout Spaces */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>DODATKOWE MOŻLIWOŚCI</span>
            <h2 className={styles.sectionTitle}>Sale Warsztatowe w Gmachu</h2>
            <p className={styles.sectionDesc}>
              Potrzebujesz wydzielonej przestrzeni na warsztaty, zaplecze produkcyjne lub strefę chillout? W tym samym budynku oferujemy dodatkowe sale na wynajem.
            </p>
          </div>

          <div className={styles.breakoutGrid}>
            {/* Sala konferencyjna */}
            <div className={styles.breakoutCard}>
              <div className={styles.breakoutImageWrapper}>
                <Image
                  src="/spaces/sala-tv.jpg"
                  alt="Sala konferencyjna"
                  fill
                  className={styles.breakoutImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.breakoutBody}>
                <span className={styles.breakoutEyebrow}>SALA ROBOCZA · 19 M²</span>
                <h4 className={styles.breakoutTitle}>Sala Konferencyjna</h4>
                <ul className={styles.breakoutSpecs}>
                  <li>12 miejsc siedzących (układ konferencyjny)</li>
                  <li>Duży ekran TV i zaplecze multimedialne</li>
                  <li>Jasne, spokojne otoczenie do pracy i narad</li>
                  <li>Dostępna osobno lub w pakiecie ze SLOW</li>
                </ul>
                <p className={styles.breakoutNote}>
                  Idealna na spotkania zarządu, prezentacje handlowe i zamknięte warsztaty.
                </p>
              </div>
            </div>

            {/* Sala U'Patki */}
            <div className={styles.breakoutCard}>
              <div className={styles.breakoutImageWrapper}>
                <Image
                  src="/spaces/upatki.jpg"
                  alt="Sala U'Patki"
                  fill
                  className={styles.breakoutImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.breakoutBody}>
                <span className={styles.breakoutEyebrow}>PRZESTRZEŃ DODATKOWA · 42 M²</span>
                <h4 className={styles.breakoutTitle}>Sala U&apos;Patki</h4>
                <ul className={styles.breakoutSpecs}>
                  <li>42 m² kameralnej powierzchni</li>
                  <li>Stoły bankietowe i koktajlowe</li>
                  <li>Strefa chillout, garderoba lub mini parkiet</li>
                  <li>Dostępna osobno lub w pakiecie ze SLOW</li>
                </ul>
                <p className={styles.breakoutNote}>
                  Wszechstronna przestrzeń idealna na strefę relaksu, zaplecze produkcyjne lub mniejsze przyjęcie.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 8. Location */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>LOGISTYKA I DOJAZD</span>
            <h2 className={styles.sectionTitle}>Lokalizacja</h2>
            <p className={styles.sectionDesc}>
              SLOW znajduje się w samym sercu Poznania, w zabytkowym gmachu Wielkopolskiej Izby Rzemieślniczej przy ul. Niezłomnych 2 — kilka minut pieszo od Dworca Głównego PKP oraz Międzynarodowych Targów Poznańskich.
            </p>
          </div>

          <div className={styles.locationBox}>
            <a
              href="https://maps.app.goo.gl/GAQgNHoqGhnbCuqp9"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.locationAddress}
            >
              ul. Niezłomnych 2, 61-894 Poznań
            </a>
            <div className={styles.transitGrid}>
              <div className={styles.transitItem}>
                <Image src="/icons/Artboard4.svg" alt="Train" width={52} height={52} className={styles.transitIcon} />
                <div>
                  <div className={styles.transitLabel}>Dworzec PKP</div>
                  <div className={styles.transitValue}>0,8 km</div>
                </div>
              </div>
              <div className={styles.transitItem}>
                <Image src="/icons/Artboard5.svg" alt="Airport" width={52} height={52} className={styles.transitIcon} />
                <div>
                  <div className={styles.transitLabel}>Lotnisko Poznań-Ławica</div>
                  <div className={styles.transitValue}>6,4 km</div>
                </div>
              </div>
              <div className={styles.transitItem}>
                <Image src="/icons/Artboard6.svg" alt="Public Transport" width={52} height={52} className={styles.transitIcon} />
                <div>
                  <div className={styles.transitLabel}>Dojazd komunikacją miejską</div>
                  <div className={styles.transitValue}>Autobus, Tramwaj</div>
                </div>
              </div>
            </div>

            <iframe
              src="https://maps.google.com/maps?q=Slow%20Club%20Poznan&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className={styles.mapEmbed}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SLOW Poznań Map"
            />
          </div>
        </div>

        {/* 9. Final B2B Booking & Inquiry Card */}
        <div id="zapytaj" className={`${styles.inquiryCard} reveal`}>
          <div className={styles.inquiryInner}>
            <span className={styles.inquiryEyebrow}>B2B & WYNAJEM EVENTOWY</span>
            <h2 className={styles.inquiryTitle}>Zaplanuj Swoje Wydarzenie w SLOW</h2>
            <p className={styles.inquiryDesc}>
              Opowiedz nam o swojej koncepcji — przygotujemy dedykowaną kalkulację, pomożemy dobrać układ sali oraz zaplanujemy obsługę barową skrojoną pod Twoje oczekiwania.
            </p>

            <div className={styles.inquiryContacts}>
              <div className={styles.inquiryItem}>
                <span className={styles.inquiryRole}>Event Manager & Wynajem B2B</span>
                <a href="mailto:katya@tamaklub.pl" className={styles.inquiryEmail}>
                  katya@tamaklub.pl
                </a>
              </div>
              <div className={styles.inquiryItem}>
                <span className={styles.inquiryRole}>Rezerwacja lóż & pakietów klubowych</span>
                <a href="mailto:events@slowclub.pl" className={styles.inquiryEmail}>
                  events@slowclub.pl
                </a>
              </div>
            </div>

            <div className={styles.inquiryActions}>
              <a
                href="mailto:katya@tamaklub.pl"
                className="btn-slow"
                id="slow-oferta-enquire-btn"
              >
                WYŚLIJ ZAPYTANIE →
              </a>
              <Link
                href="/slowclub/kontakt"
                className={styles.btnSlowOutline}
                id="slow-oferta-contact-btn"
              >
                DANE KONTAKTOWE
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

