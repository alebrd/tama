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
  "Prywatne przyjęcia",
  "Gale i bankiety",
  "Spotkania branżowe",
  "Premiery produktów",
  "Kameralne koncerty",
  "Warsztaty i panele",
  "Wieczory autorskie",
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

        {/* Hero */}
        <div className={`${styles.hero} reveal`}>
          <p className={styles.eyebrow}>PRZESTRZEŃ EVENTOWA · POZNAŃ</p>
          <h1 className={styles.title}>Zorganizuj Swoje Wydarzenie</h1>
          <p className={styles.sub}>
            Imprezy firmowe, gale, prywatne przyjęcia i spotkania autorskie —
            intymna atmosfera, audiofilskie brzmienie i wyjątkowy klimat w sercu Poznania.
          </p>
        </div>

        {/* Stats */}
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

        {/* Event Types */}
        <div className={`${styles.section} reveal`}>
          <h2 className={styles.sectionTitle}>Co Organizujemy</h2>
          <div className={styles.tagGrid}>
            {eventTypes.map((type) => (
              <span key={type} className={styles.tag}>{type}</span>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.descBlock}>
            <h2 className={styles.sectionTitle}>Lokalizacja</h2>
            <p className={styles.desc}>
              SLOW znajduje się w samym sercu Poznania, w zabytkowym gmachu Wielkopolskiej Izby Rzemieślniczej przy ul. Niezłomnych 2 — zaledwie kilka minut spacerem od Dworca Głównego PKP oraz Międzynarodowych Targów Poznańskich. Dogodna lokalizacja gwarantuje bezproblemowy dojazd dla gości i organizatorów, a pobliskie hotele i parkingi ułatwiają logistykę każdego wydarzenia.
            </p>

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
                  <Image src="/icons/Artboard4.svg" alt="Train" width={56} height={56} className={styles.transitIcon} />
                  <div>
                    <div className={styles.transitLabel}>Dworzec PKP</div>
                    <div className={styles.transitValue}>0,8 km</div>
                  </div>
                </div>
                <div className={styles.transitItem}>
                  <Image src="/icons/Artboard5.svg" alt="Airport" width={56} height={56} className={styles.transitIcon} />
                  <div>
                    <div className={styles.transitLabel}>Lotnisko Poznań-Ławica</div>
                    <div className={styles.transitValue}>6,4 km</div>
                  </div>
                </div>
                <div className={styles.transitItem}>
                  <Image src="/icons/Artboard6.svg" alt="Public Transport" width={56} height={56} className={styles.transitIcon} />
                  <div>
                    <div className={styles.transitLabel}>Dojazd komunikacją miejską</div>
                    <div className={styles.transitValue}>Autobus, Tramwaj</div>
                  </div>
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

        {/* Description */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.descBlock}>
            <h2 className={styles.sectionTitle}>Przestrzeń</h2>
            <p className={styles.desc}>
              Nowa scena SLOW to modułowa, nowoczesna przestrzeń eventowa stworzona z myślą o wydarzeniach firmowych, kulturalnych i okolicznościowych.
            </p>
            <p className={styles.desc}>
              Industrialny charakter wnętrza połączony z zaawansowanymi rozwiązaniami akustycznymi oraz profesjonalnym zapleczem technicznym tworzy miejsce, w którym estetyka idzie w parze z komfortem i funkcjonalnością.
            </p>
            <p className={styles.desc}>
              Projekt autorstwa zespołu mode:lina™ opiera się na harmonii architektury, dźwięku i światła, umożliwiając realizację wydarzeń o bardzo różnym charakterze – od konferencji i prezentacji, po bankiety, listening sessions oraz imprezy okolicznościowe.
            </p>
            <p className={styles.desc}>
              Opowiedz nam o swoim pomyśle, a przygotujemy dedykowaną ofertę skrojoną pod Twoje potrzeby.
            </p>
            <div className={styles.cta}>
              <a
                href="mailto:katya@tamaklub.pl"
                className="btn-slow"
                id="slow-oferta-enquire-btn"
              >
                ZAPYTAJ →
              </a>
              <Link
                href="/slowclub/kontakt"
                className="btn-slow"
                id="slow-oferta-contact-btn"
                style={{ background: "transparent", borderColor: "rgba(255, 26, 26, 0.3)", color: "#fff" }}
              >
                KONTAKT
              </Link>
            </div>
          </div>
        </div>

        {/* Setups */}
        <div className={`${styles.section} reveal`}>
          <h2 className={styles.sectionTitle}>Możliwe Ustawienia</h2>
          <div className={styles.setupsGrid}>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>
                Klubowo-Eventowe
                <Image src="/icons/Artboard1.svg" alt="Klubowo-Eventowe" width={32} height={32} className={styles.setupIcon} />
              </h3>
              <p className={styles.setupValue}>
                Do 200 miejsc stojących<br />
                Pełny dostęp do parkietu, baru i antresoli
              </p>
            </div>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>
                Cocktail & Networking
                <Image src="/icons/Artboard3.svg" alt="Cocktail" width={32} height={32} className={styles.setupIcon} />
              </h3>
              <p className={styles.setupValue}>
                Do 120 miejsc w formule cocktail<br />
                Stoliki koktajlowe, loże i strefa barowa
              </p>
            </div>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>
                Kameralne / Siedzące
                <Image src="/icons/Artboard2.svg" alt="Kameralne" width={32} height={32} className={styles.setupIcon} />
              </h3>
              <p className={styles.setupValue}>
                Do 70 miejsc siedzących<br />
                Układ lounge z antresolą i strefą warsztatową
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className={`${styles.section} reveal`} style={{ marginTop: "6rem" }}>
          <h2 className={styles.sectionTitle}>Galeria</h2>
          <VenueGallery isEnglish={false} images={slowGalleryImages} variant="slow" />
        </div>

      </div>
    </div>
  );
}
