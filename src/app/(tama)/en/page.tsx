import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import StatsCounter from "@/components/StatsCounter";
import EventShowcaseGallery from "@/components/EventShowcaseGallery";
import styles from "../root.module.css";

export const metadata: Metadata = {
  title: "TAMA x SLOW",
  description: "Two dimensions of club experience in the heart of Poznań.",
};

const marqueeItems = [
  "TAMA",
  "MUSIC",
  "CULTURE",
  "EXPERIENCES",
  "SLOW",
  "MAIN HALL",
  "CHANDELIER ROOM",
  "1000 M²",
  "POZNAŃ",
  "NIEZŁOMNYCH 2",
];

export default function UniversalLandingEnPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={`${styles.hero} reveal`}>
        <div className="container">
          <h1 className={`${styles.title} text-gradient`}>
            TAMA{" "}
            <span
              style={{
                textTransform: "lowercase",
                fontSize: "0.65em",
                verticalAlign: "middle",
                padding: "0 0.5rem",
              }}
            >
              x
            </span>{" "}
            SLOW
          </h1>
          <p className={styles.sub}>Two dimensions. One place.</p>
        </div>
      </section>

      {/* Infinite Marquee Ticker */}
      <div className={styles.marqueeBand}>
        <Marquee items={marqueeItems} />
      </div>

      {/* Split Section */}
      <section className={styles.splitSection}>
        <div className="container">
          <div className={styles.grid}>
            {/* TAMA */}
            <div
              className={`${styles.card} ${styles.cardTama} reveal`}
              style={{ "--reveal-delay": "30ms" } as React.CSSProperties}
            >
              <div className={styles.cardBg}>
                <Image
                  src="/spaces/main-room.jpg"
                  alt="TAMA Main Hall"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.cardBgImage}
                />
                <div className={styles.cardOverlay} />
              </div>

              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>TAMA</h2>
                <p className={styles.cardText}>
                  The main stage. A raw, powerful industrial space designed for the
                  biggest musical and cultural events. With a capacity of up to 1,000
                  guests, spectacular sound, and an uncompromising character.
                </p>
                <div className={styles.actionRow}>
                  <Link href="/en/tama" className="btn btn-outline">
                    EXPLORE TAMA <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* SLOW */}
            <div
              className={`${styles.card} ${styles.cardSlow} reveal`}
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              <div className={styles.cardBg}>
                <Image
                  src="/spaces/slow.jpg"
                  alt="SLOW Club"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.cardBgImage}
                />
                <div className={styles.cardOverlay} />
              </div>

              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>SLOW</h2>
                <p className={styles.cardText}>
                  An intimate club with an audiophile sound system. Created for deeper
                  musical experiences, carefully selected sounds, and close contact
                  with the artist. A completely different dimension within the same
                  walls.
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

      {/* Dynamic Key Stats Counter */}
      <StatsCounter lang="en" />

      {/* Event Versatility Gallery */}
      <EventShowcaseGallery
        lang="en"
        eyebrow="EVENTS"
        title="Moments created within these walls."
      />
    </div>
  );
}