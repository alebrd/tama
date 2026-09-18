import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./root.module.css";

export const metadata: Metadata = {
  title: "TAMA x SLOW",
  description: "Dwa wymiary klubowego doświadczenia w sercu Poznania.",
};

export default function UniversalLandingPage() {
  return (
    <div className={styles.page}>
      {/* Hero Banner with Venue Background */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/tama/venue-hero-hd.jpg"
            alt="TAMA KLUB building"
            fill
            sizes="100vw"
            className={styles.heroBgImage}
            priority
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={`${styles.title} text-gradient`}>
            TAMA <span style={{ textTransform: "lowercase", fontSize: "0.65em", verticalAlign: "middle", padding: "0 0.5rem" }}>x</span> SLOW
          </h1>
          <p className={styles.sub}>Dwa wymiary. Jedno miejsce.</p>
        </div>
      </section>

      {/* ── Connected Screen Background with Rental Boxes (The other two next to each other) ── */}
      <section className={styles.connectedSection}>
        <div className={styles.connectedBg}>
          <Image
            src="/tama/venue-action-split.jpg"
            alt="TAMA x SLOW venue in action"
            fill
            sizes="100vw"
            className={styles.connectedBgImage}
            priority
          />
          <div className={styles.connectedBgOverlay} />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 3 }}>
          <div className={styles.grid}>
            {/* TAMA */}
            <div className={`${styles.card} ${styles.cardTama}`}>
              <div className={styles.cardBg}>
                <Image
                  src="/spaces/main-room.jpg"
                  alt="TAMA Main Hall"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.cardBgImage}
                  priority
                />
                <div className={styles.cardOverlay} />
              </div>

              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>TAMA</h2>
                <p className={styles.cardText}>
                  Monumentalna przestrzeń industrialna o powierzchni 1 100 m² w sercu Poznania. Zaprojektowana na wydarzenia firmowe, konferencje, bankiety, gale i premiery dla nawet 1 000 gości, z pełnym zapleczem produkcyjnym i nagłośnieniowym.
                </p>
                <div className={styles.actionRow}>
                  <Link href="/tama" className="btn btn-outline">
                    ODKRYJ TAMĘ <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* SLOW */}
            <div className={`${styles.card} ${styles.cardSlow}`}>
              <div className={styles.cardBg}>
                <Image
                  src="/spaces/slow.jpg"
                  alt="SLOW Club"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.cardBgImage}
                  priority
                />
                <div className={styles.cardOverlay} />
              </div>

              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>SLOW</h2>
                <p className={styles.cardText}>
                  Boutique’owa przestrzeń eventowa o powierzchni 200 m² projektu mode:lina™ dla do 200 gości. Wyjątkowy klimat z antresolą, barem koktajlowym i audiofilskim nagłośnieniem — idealna na imprezy firmowe, networking i kameralne przyjęcia.
                </p>
                <div className={styles.actionRow}>
                  <Link href="/slowclub" className="btn btn-outline">
                    ODKRYJ SLOW <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
