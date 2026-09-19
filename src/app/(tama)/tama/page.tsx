import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../en/tama/page.module.css";
import VenueGallery from "@/components/VenueGallery";

export const metadata: Metadata = {
  title: "TAMA — Klub & Przestrzeń Eventowa",
  description: "TAMA Poznań. Wiodący klub muzyki elektronicznej, koncerty i zabytkowa przestrzeń eventowa w sercu Poznania.",
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

export default function TamaPage() {
  return (
    <div className={styles.page}>
      {/* ─── Hero Banner with Atmospheric Venue Background ──────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/spaces/main-room.jpg"
            alt="Klub TAMA Poznań — sala główna"
            fill
            className={styles.bgImage}
            priority
          />
          <div className={styles.bgOverlay} />
        </div>

        <div className={`container ${styles.heroContent} reveal`}>
          <h1 className={`${styles.title} text-gradient`}>TAMA</h1>
          <p className={styles.sub}>Muzyka · Kultura · Doświadczenie</p>

          <div className={styles.actions}>
            <Link
              href="/oferta"
              className={styles.btnActionPrimary}
              id="tama-hero-offer-btn"
            >
              OFERTA WYNAJMU →
            </Link>
            <a
              href="https://biletomat.pl/wydarzenia/w/poznan/w/tama"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnActionSecondary}
              id="tama-hero-tickets-btn"
            >
              BILETY
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
              {/* Pillar 1: Wydarzenia & B2B */}
              <div className={styles.card}>
                <span className={styles.cardEyebrow}>WYNAJEM PRZESTRZENI</span>
                <h2 className={styles.cardTitle}>Wydarzenia & B2B</h2>
                <p className={styles.cardText}>
                  Ponad 1 100 m² industrialnej przestrzeni na wyłączność. Konferencje, gale, bankiety, koncerty, premiery produktów i niestandardowe projekty dla nawet 1 000 gości.
                </p>
                <Link href="/oferta" className={styles.cardLink} id="tama-card-offer-link">
                  POZNAJ MOŻLIWOŚCI →
                </Link>
              </div>

              {/* Pillar 2: Klub & Koncerty */}
              <div
                className={styles.card}
                style={{ "--reveal-delay": "30ms" } as React.CSSProperties}
              >
                <span className={styles.cardEyebrow}>KULTURA KLUBOWA</span>
                <h2 className={styles.cardTitle}>Klub & Koncerty</h2>
                <p className={styles.cardText}>
                  Wiodąca scena muzyki elektronicznej i koncertowej w zachodniej Polsce. Występy legend międzynarodowej sceny, rezydentów i unikalna energia parkietu.
                </p>
                <a
                  href="https://biletomat.pl/wydarzenia/w/poznan/w/tama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                  id="tama-card-tickets-link"
                >
                  PROGRAM & BILETY →
                </a>
              </div>

              {/* Pillar 3: Przestrzenie & Scena */}
              <div
                className={styles.card}
                style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
              >
                <span className={styles.cardEyebrow}>INDUSTRIALNA ARCHITEKTURA</span>
                <h2 className={styles.cardTitle}>Przestrzeń & Scena</h2>
                <p className={styles.cardText}>
                  Monumentalna sala główna o powierzchni ponad 500 m², sala żyrandolowa, 5 bocznych ekranów projekcyjnych i profesjonalne nagłośnienie koncertowe.
                </p>
                <Link href="/przestrzen" className={styles.cardLink} id="tama-card-spaces-link">
                  ZOBACZ PRZESTRZENIE →
                </Link>
              </div>

              {/* Pillar 4: O TAMIE & Społeczność */}
              <div
                className={styles.card}
                style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
              >
                <span className={styles.cardEyebrow}>HISTORIA I TOŻSAMOŚĆ</span>
                <h2 className={styles.cardTitle}>O Nas & Społeczność</h2>
                <p className={styles.cardText}>
                  Zabytkowy gmach z 1929 roku, zasady Safer Space, pasja do czystego dźwięku i ludzie, którzy tworzą to miejsce od pierwszego dnia.
                </p>
                <Link href="/o-nas" className={styles.cardLink} id="tama-card-about-link">
                  POZNAJ NASZĄ HISTORIĘ →
                </Link>
              </div>
            </div>
          </section>

          {/* ─── Visual Showcase Gallery ───────────────────────────── */}
          <section className={`${styles.section} reveal`}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>GALERIA PRZESTRZENI</p>
              <h2 className={styles.sectionTitle}>Klub, Scena & Architektura</h2>
            </div>
            <VenueGallery 
              isEnglish={false} 
              images={tamaClubGalleryImages} 
              variant="tama" 
              title="Galeria Klubu TAMA" 
            />
          </section>

          {/* ─── Contact & Visit Quick Bar ─────────────────────────── */}
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
                  id="tama-home-maps-link"
                >
                  Otwórz w Google Maps →
                </a>
              </div>

              <div className={styles.contactCol}>
                <span className={styles.contactLabel}>PROGRAM & BILETY</span>
                <p className={styles.contactVal}>Wydarzenia klubowe i koncerty</p>
                <p className={styles.contactDesc}>Bilety dostępne online na Biletomat.pl oraz Resident Advisor:</p>
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
                <span className={styles.contactLabel}>WYNAJEM I PRODUKCJE</span>
                <p className={styles.contactVal}>Wydarzenia firmowe i B2B</p>
                <p className={styles.contactDesc}>Zapytania dotyczące wynajmu sal, organizacji gal i konferencji:</p>
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
