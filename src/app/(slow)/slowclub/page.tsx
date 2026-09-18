import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import VenueGallery from "@/components/VenueGallery";

export const metadata: Metadata = {
  title: "SLOW — The other side of TAMA",
  description: "SLOW Club Poznań. Intymna przestrzeń, audiofilskie brzmienie, autorska architektura mode:lina™ i wyłącznie muzyka house. The other side of TAMA.",
};

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

export default function SlowHomePage() {
  return (
    <div className={styles.page}>
      {/* ─── Hero Section (Positioned Higher) ────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/slow/summer-break.jpg"
            alt="Slow Background"
            fill
            className={styles.bgImage}
            priority
          />
          <div className={styles.bgOverlay} />
        </div>
        
        <div className={`container ${styles.heroContent} reveal`}>
          <div className={styles.logoWrapper}>
            <Image
              src="/slow/slow-neon-purple-v3.png"
              alt="SLOW Neon Sign"
              width={600}
              height={258}
              className={styles.heroNeonLogo}
              priority
            />
          </div>
          <h1 className={`text-gradient-slow ${styles.title}`}>THE OTHER SIDE OF TAMA</h1>
          <p className={styles.subtitle}>
            Tu tempo równa się rytmowi serca, a klimat przenosi Was poza codzienność.<br />
            <strong>ONLY HOUSE MUSIC</strong>
          </p>

          <div className={styles.actions}>
            <Link
              href="/slowclub/oferta"
              className={styles.btnActionPrimary}
              id="slow-hero-offer-btn"
            >
              OFERTA WYNAJMU →
            </Link>
            <a
              href="https://biletomat.pl/wydarzenia/w/poznan/w/slow"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnActionSecondary}
              id="slow-hero-tickets-btn"
            >
              BILETY
            </a>
          </div>
        </div>
      </section>

      {/* ─── Main Landing Page Content ───────────────────────────────── */}
      <div className={styles.mainContent}>
        <div className="container">

          {/* ─── 4 Brand Pillars Grid ─────────────────────────────────── */}
          <section className={`${styles.section} reveal`}>
            <div className={styles.grid}>
              {/* Pillar 1: Wydarzenia & B2B (Moved first) */}
              <div className={styles.card}>
                <span className={styles.cardEyebrow}>WYNAJEM PRZESTRZENI</span>
                <h2 className={styles.cardTitle}>Wydarzenia & B2B</h2>
                <p className={styles.cardText}>
                  Do 200 gości, 200 m² modułowej przestrzeni na wyłączność. Imprezy firmowe, gale, prywatne przyjęcia i listening sessions z pełnym zapleczem technicznym i barowym.
                </p>
                <Link href="/slowclub/oferta" className={styles.cardLink} id="slow-card-offer-link">
                  POZNAJ OFERTĘ →
                </Link>
              </div>

              {/* Pillar 2: Klub & Muzyka */}
              <div
                className={styles.card}
                style={{ '--reveal-delay': '30ms' } as React.CSSProperties}
              >
                <span className={styles.cardEyebrow}>INTYMNA PRZESTRZEŃ</span>
                <h2 className={styles.cardTitle}>Klub & Muzyka</h2>
                <p className={styles.cardText}>
                  SLOW to kameralna strona TAMY — miejsce stworzone z miłości do muzyki house. Ciepłe brzmienia, intymny klimat i parkiet, na którym tempo spotkań naturalnie stapia się z muzyką.
                </p>
              </div>

              {/* Pillar 3: Dźwięk & Akustyka */}
              <div
                className={styles.card}
                style={{ '--reveal-delay': '60ms' } as React.CSSProperties}
              >
                <span className={styles.cardEyebrow}>AUDIOFILSKIE DOŚWIADCZENIE</span>
                <h2 className={styles.cardTitle}>Dźwięk & Akustyka</h2>
                <p className={styles.cardText}>
                  Dedykowane panele akustyczne, starannie zaprojektowane wytłumienie oraz audiofilski system nagłośnienia gwarantują krystaliczną czystość brzmienia i wyjątkowy komfort słuchania przez całą noc.
                </p>
              </div>

              {/* Pillar 4: Wnętrze & Architektura */}
              <div
                className={styles.card}
                style={{ '--reveal-delay': '90ms' } as React.CSSProperties}
              >
                <span className={styles.cardEyebrow}>PROJEKT MODE:LINA™</span>
                <h2 className={styles.cardTitle}>Wnętrze & Klimat</h2>
                <p className={styles.cardText}>
                  Autorska koncepcja poznańskiego studia mode:lina™ łączy surowy, industrialny rodowód historycznego gmachu z głęboką fioletową poświatą neonów, antresolą i nastrojową strefą barową.
                </p>
              </div>
            </div>
          </section>

          {/* ─── Visual Showcase Gallery ──────────────────────────────── */}
          <section className={`${styles.section} reveal`}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>GALERIA PRZESTRZENI</p>
              <h2 className={styles.sectionTitle}>Klub, Bar & Antresola</h2>
            </div>
            <VenueGallery isEnglish={false} images={slowGalleryImages} variant="slow" />
          </section>

          {/* ─── Contact & Visit Quick Bar ────────────────────────────── */}
          <section className={`${styles.section} reveal`}>
            <div className={styles.contactBar}>
              <div className={styles.contactCol}>
                <span className={styles.contactLabel}>LOKALIZACJA</span>
                <p className={styles.contactVal}>Wielkopolska Izba Rzemieślnicza</p>
                <p className={styles.contactDesc}>ul. Niezłomnych 2, 61-894 Poznań</p>
                <a
                  href="https://maps.app.goo.gl/GAQgNHoqGhnbCuqp9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  id="slow-home-maps-link-pl"
                >
                  Otwórz w Google Maps →
                </a>
              </div>

              <div className={styles.contactCol}>
                <span className={styles.contactLabel}>REZERWACJA LOŻY</span>
                <p className={styles.contactVal}>Planujesz wieczór w SLOW?</p>
                <p className={styles.contactDesc}>Zarezerwuj lożę i ciesz się wieczorem w komfortowej przestrzeni:</p>
                <a href="mailto:events@slowclub.pl" className={styles.contactLink}>
                  events@slowclub.pl
                </a>
              </div>

              <div className={styles.contactCol}>
                <span className={styles.contactLabel}>WYNAJEM I WSPÓŁPRACA B2B</span>
                <p className={styles.contactVal}>Imprezy firmowe i produkcje</p>
                <p className={styles.contactDesc}>Zapytania dotyczące wynajmu przestrzeni i organizacji wydarzeń:</p>
                <a href="mailto:katya@tamaklub.pl" className={styles.contactLink}>
                  katya@tamaklub.pl
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
