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
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className={`${styles.title} text-gradient`}>
            TAMA <span style={{ textTransform: "lowercase", fontSize: "0.65em", verticalAlign: "middle", padding: "0 0.5rem" }}>x</span> SLOW
          </h1>
          <p className={styles.sub}>Two dimensions. One place.</p>
        </div>
        <div className={styles.glow} />
      </section>

      {/* Split Section */}
      <section>
        <div className="container">
          <div className={styles.grid}>
            {/* TAMA */}
            <div className={`${styles.card} ${styles.cardTama}`}>
              <Image src="/logo.png" alt="TAMA Logo" width={80} height={80} className={styles.cardLogo} />
              <h2 className={styles.cardTitle}>TAMA</h2>
              <p className={styles.cardText}>
                The main stage. A raw, powerful industrial space designed for the biggest musical and cultural events. With a capacity of up to 1,300 guests, spectacular sound, and an uncompromising character.
              </p>
              <div className={styles.actionRow}>
                <Link href="/en/tama" className="btn btn-outline">
                  DISCOVER TAMA
                </Link>
              </div>
            </div>

            {/* SLOW */}
            <div className={`${styles.card} ${styles.cardSlow}`}>
              <Image src="/slow-logo.jpg" alt="SLOW Logo" width={80} height={80} className={styles.cardLogo} />
              <h2 className={styles.cardTitle}>SLOW</h2>
              <p className={styles.cardText}>
                An intimate club with audiophile sound. Created for deeper musical experiences, curated selections, and a close connection with the artist. A completely different dimension within the same walls.
              </p>
              <div className={styles.actionRow}>
                <Link href="/en/slowclub" className="btn btn-outline">
                  DISCOVER SLOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}