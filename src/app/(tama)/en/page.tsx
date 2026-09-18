import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../root.module.css";

export const metadata: Metadata = {
  title: "TAMA x SLOW",
  description: "Two dimensions of club experience in the heart of Poznań.",
};

export default function UniversalLandingEnPage() {
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
          <p className={styles.sub}>Two dimensions. One place.</p>
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
                  A monumental 1,100 m² industrial venue in the heart of Poznań. Designed for corporate events, conferences, banquets, galas, and product launches for up to 1,000 guests, equipped with comprehensive production and AV infrastructure.
                </p>
                <div className={styles.actionRow}>
                  <Link href="/en/tama" className="btn btn-outline">
                    EXPLORE TAMA <span className="btn-arrow">→</span>
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
                  A boutique 200 m² event space designed by mode:lina™ for up to 200 guests. An intimate atmosphere featuring a mezzanine, cocktail bar, and audiophile acoustics — ideal for corporate parties, networking, and private gatherings.
                </p>
                <div className={styles.actionRow}>
                  <Link href="/en/slowclub" className="btn btn-outline">
                    EXPLORE SLOW <span className="btn-arrow">→</span>
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