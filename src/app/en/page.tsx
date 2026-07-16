import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "TAMA — The Club",
  description: "The story behind TAMA, Poznań's premier techno and electronic music venue.",
};

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={`${styles.title} text-gradient`}>TAMA</h1>
          <p className={styles.sub}>Techno Palace · Poznań, Poland</p>
        </div>
        <div className={styles.glow} />
      </section>

      {/* Body */}
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.card} glass`}>
            <h2 className={styles.cardTitle}>The Venue</h2>
            <p className={styles.cardText}>
              Located inside a revitalized 90-year-old building — the former representative hall of
              the <em>Wielkopolska Chamber of Crafts</em> — TAMA is more than a club. It is a living
              monument to Poznań&apos;s industrial past, reimagined as a space for sound, movement, and
              community.
            </p>
            <p className={styles.cardText}>
              Spanning over 1,000 m² of raw industrial space, the venue is equipped with
              professional sound systems and state-of-the-art lighting rigs, purpose-built for
              immersive club nights and live concerts alike.
            </p>
          </div>

          <div className={`${styles.card} glass`}>
            <h2 className={styles.cardTitle}>The Music</h2>
            <p className={styles.cardText}>
              TAMA is best known in the nightlife scene for its commitment to underground electronic
              music — techno, house, and everything in between. Consistently ranked among the top
              clubs in Poland, we host both internationally acclaimed artists and the best emerging
              local talent.
            </p>
            <p className={styles.cardText}>
              From the <em>OBSESSION</em> series to open-air summer editions, each event is crafted
              to push the boundaries of what a club night can feel like.
            </p>
          </div>

          <div className={`${styles.card} glass`}>
            <h2 className={styles.cardTitle}>The Community</h2>
            <p className={styles.cardText}>
              TAMA was built by and for Poznań&apos;s creative community. We believe in fostering a space
              where artists, dancers, and music lovers can gather without judgment — a place that
              belongs to everyone equally.
            </p>
          </div>

          <div className={`${styles.card} glass`}>
            <h2 className={styles.cardTitle}>Find Us</h2>
            <p className={styles.cardText}>
              ul. Niezłomnych 2<br />
              61-894 Poznań, Poland
            </p>
            <p className={styles.cardText}>
              Approximately 1 km from Poznań Główny railway station and Poznań International Fair
              (MTP).
            </p>
            <a
              href="https://maps.app.goo.gl/J83HT3NkUMGAEGSR9"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              Open in Google Maps →
            </a>
          </div>

          <div className={`${styles.card} ${styles.cardWide} glass`}>
            <div className={styles.cardWideInner}>
              <div>
                <h2 className={styles.cardTitle}>Host Your Event</h2>
                <p className={styles.cardText}>
                  TAMA is not only a club — it is a fully equipped industrial event space for
                  up to 1,000 guests. Corporate parties, conferences, galas, concerts, and more,
                  in the heart of Poznań.
                </p>
              </div>
              <Link href="/en/venue" className={styles.venueLink}>
                LEARN MORE →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}