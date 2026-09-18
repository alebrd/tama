import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../../slowclub/page.module.css";
import VenueGallery from "@/components/VenueGallery";

export const metadata: Metadata = {
  title: "SLOW — The other side of TAMA",
  description: "SLOW Club Poznań. Intimate atmosphere, audiophile sound system, bespoke mode:lina™ architecture, and exclusively house music. The other side of TAMA.",
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

export default function SlowHomePageEn() {
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
            Here, the tempo matches your heartbeat, and the atmosphere transports you beyond the everyday.<br />
            <strong>ONLY HOUSE MUSIC</strong>
          </p>

          <div className={styles.actions}>
            <Link
              href="/en/slowclub/offer"
              className={styles.btnActionPrimary}
              id="slow-hero-offer-btn-en"
            >
              EVENT HIRE →
            </Link>
            <a
              href="https://biletomat.pl/wydarzenia/w/poznan/w/slow"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnActionSecondary}
              id="slow-hero-tickets-btn-en"
            >
              TICKETS
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
              {/* Pillar 1: Events & B2B (Moved first) */}
              <div className={styles.card}>
                <span className={styles.cardEyebrow}>PRIVATE HIRE</span>
                <h2 className={styles.cardTitle}>Events & B2B</h2>
                <p className={styles.cardText}>
                  Up to 200 guests across 200 m² of modular space for exclusive hire. Corporate galas, private celebrations, and listening sessions with comprehensive AV, lighting, and bar infrastructure.
                </p>
                <Link href="/en/slowclub/offer" className={styles.cardLink} id="slow-card-offer-link-en">
                  EXPLORE THE OFFER →
                </Link>
              </div>

              {/* Pillar 2: Club & Music */}
              <div
                className={styles.card}
                style={{ '--reveal-delay': '30ms' } as React.CSSProperties}
              >
                <span className={styles.cardEyebrow}>INTIMATE SPACE</span>
                <h2 className={styles.cardTitle}>Club & Music</h2>
                <p className={styles.cardText}>
                  SLOW is the intimate counterpart to TAMA — a sanctuary dedicated to house music. Warm grooves, an immersive atmosphere, and a dancefloor where the tempo naturally aligns with the rhythm of the night.
                </p>
              </div>

              {/* Pillar 3: Sound & Acoustics */}
              <div
                className={styles.card}
                style={{ '--reveal-delay': '60ms' } as React.CSSProperties}
              >
                <span className={styles.cardEyebrow}>AUDIOPHILE EXPERIENCE</span>
                <h2 className={styles.cardTitle}>Sound & Acoustics</h2>
                <p className={styles.cardText}>
                  Custom acoustic panelling, calibrated sound damping, and an audiophile-grade sound system deliver pristine clarity and effortless listening comfort throughout the night.
                </p>
              </div>

              {/* Pillar 4: Interior & Atmosphere */}
              <div
                className={styles.card}
                style={{ '--reveal-delay': '90ms' } as React.CSSProperties}
              >
                <span className={styles.cardEyebrow}>MODE:LINA™ DESIGN</span>
                <h2 className={styles.cardTitle}>Interior & Vibe</h2>
                <p className={styles.cardText}>
                  Conceived by renowned Poznań studio mode:lina™, the interior contrasts the raw industrial heritage of the historic building with ultraviolet neon ambience, mezzanine lounge, and a sleek bar.
                </p>
              </div>
            </div>
          </section>

          {/* ─── Visual Showcase Gallery ──────────────────────────────── */}
          <section className={`${styles.section} reveal`}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>VENUE GALLERY</p>
              <h2 className={styles.sectionTitle}>Club, Bar & Mezzanine</h2>
            </div>
            <VenueGallery isEnglish={true} images={slowGalleryImages} variant="slow" />
          </section>

          {/* ─── Contact & Visit Quick Bar ────────────────────────────── */}
          <section className={`${styles.section} reveal`}>
            <div className={styles.contactBar}>
              <div className={styles.contactCol}>
                <span className={styles.contactLabel}>LOCATION</span>
                <p className={styles.contactVal}>Wielkopolska Izba Rzemieślnicza</p>
                <p className={styles.contactDesc}>ul. Niezłomnych 2, 61-894 Poznań, Poland</p>
                <a
                  href="https://maps.app.goo.gl/GAQgNHoqGhnbCuqp9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  id="slow-home-maps-link-en"
                >
                  Open in Google Maps →
                </a>
              </div>

              <div className={styles.contactCol}>
                <span className={styles.contactLabel}>TABLE RESERVATIONS</span>
                <p className={styles.contactVal}>Planning an evening at SLOW?</p>
                <p className={styles.contactDesc}>Reserve a table or booth and enjoy the night in comfort:</p>
                <a href="mailto:events@slowclub.pl" className={styles.contactLink}>
                  events@slowclub.pl
                </a>
              </div>

              <div className={styles.contactCol}>
                <span className={styles.contactLabel}>EVENT HIRE & B2B</span>
                <p className={styles.contactVal}>Corporate events and productions</p>
                <p className={styles.contactDesc}>Enquiries regarding venue hire, private events, and brand partnerships:</p>
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
