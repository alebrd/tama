import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import VenueGallery from "@/components/VenueGallery";

export const metadata: Metadata = {
  title: "TAMA — The Club & Event Venue",
  description: "TAMA Poznań. Leading electronic music venue, concerts, and monumental event space in the historic Wielkopolska Chamber of Crafts.",
};

const tamaClubGalleryImages = [
  // Top 8 for Desktop Preview Grid (2 rows x 4 cols)
  "/spaces/main-room.jpg",
  "/spaces/chandelier.jpg",
  "/offer/AEN03361.jpg",
  "/offer/AEN04257.jpg",
  "/offer/AEN03586.jpg",
  "/offer/ARTUR_AEN_NOWICKI-5262.jpg",
  "/spaces/entrance.jpg",
  "/spaces/stairs.jpg",
  // Additional photos in full modal gallery
  "/spaces/main-hall.jpg",
  "/tama/venue-mapping.jpg",
  "/offer/AEN03279.jpg",
  "/artur_aen_nowicki-09366.jpg",
  "/offer/arturAENnowicki-3202.jpg",
  "/spaces/upatki.jpg",
  "/spaces/sala-tv.jpg",
  "/artur_aen_nowicki-3547.jpg",
];

export default function TamaPageEn() {
  return (
    <div className={styles.page}>
      {/* ─── Hero Banner with Atmospheric Venue Background ──────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/spaces/main-room.jpg"
            alt="TAMA Club Poznań — Main Hall"
            fill
            className={styles.bgImage}
            priority
          />
          <div className={styles.bgOverlay} />
        </div>

        <div className={`container ${styles.heroContent} reveal`}>
          <h1 className={`${styles.title} text-gradient`}>TAMA</h1>
          <p className={styles.sub}>Music · Culture · Experience</p>

          <div className={styles.actions}>
            <Link
              href="/en/offer"
              className={styles.btnActionPrimary}
              id="tama-hero-offer-btn-en"
            >
              EVENT HIRE →
            </Link>
            <a
              href="https://biletomat.pl/wydarzenia/w/poznan/w/tama"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnActionSecondary}
              id="tama-hero-tickets-btn-en"
            >
              TICKETS
            </a>
          </div>
        </div>
      </section>

      {/* ─── Main Content ──────────────────────────────────────────── */}
      <div className={styles.mainContent}>
        <div className="container">

          {/* ─── 4-Card Experience Grid ────────────────────────────── */}
          <section className={`${styles.section} reveal`}>
            <div className={styles.grid}>
              {/* Pillar 1: Events & B2B */}
              <div className={styles.card}>
                <span className={styles.cardEyebrow}>VENUE HIRE</span>
                <h2 className={styles.cardTitle}>Events & B2B</h2>
                <p className={styles.cardText}>
                  Over 1,100 m² of modular industrial space for exclusive hire. Conferences, galas, banquets, concerts, product launches, and custom productions for up to 1,000 guests.
                </p>
                <Link href="/en/offer" className={styles.cardLink} id="tama-card-offer-link-en">
                  EXPLORE POSSIBILITIES →
                </Link>
              </div>

              {/* Pillar 2: Club & Concerts */}
              <div
                className={styles.card}
                style={{ "--reveal-delay": "30ms" } as React.CSSProperties}
              >
                <span className={styles.cardEyebrow}>CLUB CULTURE</span>
                <h2 className={styles.cardTitle}>Club & Concerts</h2>
                <p className={styles.cardText}>
                  Western Poland&apos;s leading electronic and live music stage. Featuring international electronic music pioneers, vibrant resident artists, and pure dancefloor energy.
                </p>
                <a
                  href="https://biletomat.pl/wydarzenia/w/poznan/w/tama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                  id="tama-card-tickets-link-en"
                >
                  UPCOMING EVENTS & TICKETS →
                </a>
              </div>

              {/* Pillar 3: Spaces & Stage */}
              <div
                className={styles.card}
                style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
              >
                <span className={styles.cardEyebrow}>INDUSTRIAL ARCHITECTURE</span>
                <h2 className={styles.cardTitle}>Spaces & Stage</h2>
                <p className={styles.cardText}>
                  A monumental 500 m² main hall, chandelier room, 5 lateral visual screens, and concert-grade acoustic engineering tailored for world-class productions.
                </p>
                <Link href="/en/spaces" className={styles.cardLink} id="tama-card-spaces-link-en">
                  VIEW SPACES →
                </Link>
              </div>

              {/* Pillar 4: About TAMA & Community */}
              <div
                className={styles.card}
                style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
              >
                <span className={styles.cardEyebrow}>HERITAGE & COMMUNITY</span>
                <h2 className={styles.cardTitle}>About Us & Values</h2>
                <p className={styles.cardText}>
                  A historic 1929 landmark, Safer Space ethics, sonic devotion, and the people who have shaped this cultural community from day one.
                </p>
                <Link href="/en/about" className={styles.cardLink} id="tama-card-about-link-en">
                  DISCOVER OUR STORY →
                </Link>
              </div>
            </div>
          </section>

          {/* ─── Visual Showcase Gallery ───────────────────────────── */}
          <section className={`${styles.section} reveal`}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>VENUE GALLERY</p>
              <h2 className={styles.sectionTitle}>Club, Stage & Architecture</h2>
            </div>
            <VenueGallery 
              isEnglish={true} 
              images={tamaClubGalleryImages} 
              variant="tama" 
              title="TAMA Club Gallery" 
            />
          </section>

          {/* ─── Contact & Visit Quick Bar ─────────────────────────── */}
          <section className={`${styles.section} reveal`}>
            <div className={styles.contactBar}>
              <div className={styles.contactCol}>
                <span className={styles.contactLabel}>LOCATION</span>
                <p className={styles.contactVal}>Wielkopolska Chamber of Crafts</p>
                <p className={styles.contactDesc}>ul. Niezłomnych 2, 61-894 Poznań, Poland</p>
                <a
                  href="https://maps.app.goo.gl/GAQgNHoqGhnbCuqp9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  id="tama-home-maps-link-en"
                >
                  Open in Google Maps →
                </a>
              </div>

              <div className={styles.contactCol}>
                <span className={styles.contactLabel}>PROGRAM & TICKETS</span>
                <p className={styles.contactVal}>Club nights and live concerts</p>
                <p className={styles.contactDesc}>Tickets available online via Biletomat.pl and Resident Advisor:</p>
                <a
                  href="https://biletomat.pl/wydarzenia/w/poznan/w/tama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  Biletomat.pl →
                </a>
              </div>

              <div className={styles.contactCol}>
                <span className={styles.contactLabel}>VENUE HIRE & PRODUCTIONS</span>
                <p className={styles.contactVal}>Corporate events and B2B</p>
                <p className={styles.contactDesc}>Direct enquiries regarding venue hire, galas, and conferences:</p>
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
