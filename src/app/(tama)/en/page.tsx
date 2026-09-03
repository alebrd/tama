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
      </section>

      {/* Split Section */}
      <section>
        <div className="container">
          <div className={styles.grid}>
            {/* TAMA */}
            <div className={`${styles.card} ${styles.cardTama}`}>
              <h2 className={styles.cardTitle}>TAMA</h2>
              <p className={styles.cardText}>
                The main stage. A raw, powerful industrial space designed for the biggest musical and cultural events. With a capacity of up to 1,000 guests, spectacular sound, and an uncompromising character.
              </p>
              <div className={styles.actionRow}>
                <Link href="/en/tama" className="btn btn-outline">
                  EXPLORE TAMA
                </Link>
              </div>
            </div>

            {/* SLOW */}
            <div className={`${styles.card} ${styles.cardSlow}`}>
              <h2 className={styles.cardTitle}>SLOW</h2>
              <p className={styles.cardText}>
                An intimate club with an audiophile sound system. Created for deeper musical experiences, carefully selected sounds, and close contact with the artist. A completely different dimension within the same walls.
              </p>
              <div className={styles.actionRow}>
                <Link href="/en/slowclub" className="btn btn-outline">
                  EXPLORE SLOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}