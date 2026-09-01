import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "TAMA — The Club",
  description: "The story behind TAMA, Poznań's premier techno and electronic music venue.",
};

export default function TamaPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={`${styles.title} text-gradient`}>TAMA</h1>
          <p className={styles.sub}>Music. Culture. Experience.</p>
        </div>
        <div className={styles.glow} />
      </section>

      {/* Body */}
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>The Venue</h2>
            <p className={styles.cardText}>
              TAMA is a unique event space in the heart of Poznań, located in a revitalized, 90-year-old building of the former Wielkopolska Chamber of Crafts. Historical architecture and an industrial character create an unmistakable backdrop for business and cultural events.
            </p>
            <p className={styles.cardText}>
              Over 1,100 m² of flexible space, professional technical facilities, sound, and lighting allow for organizing both intimate gatherings and large events for hundreds of people.
            </p>
            <p className={styles.cardText}>
              Conferences, banquets, galas, premieres, corporate events, or custom productions — TAMA provides the space and possibilities tailored to the needs of every event.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>The Music</h2>
            <p className={styles.cardText}>
              TAMA is a space with years of experience in producing concerts and music events of various scales.
            </p>
            <p className={styles.cardText}>
              Professional sound systems, stage, lighting, and comprehensive technical facilities allow us to tailor solutions to the character and needs of each event.
            </p>
            <p className={styles.cardText}>
              From intimate performances to large-scale productions — TAMA combines space, technology, and experience.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>The Community</h2>
            <p className={styles.cardText}>
              From the very beginning, TAMA has been a place built around people, music, and shared experiences. Over the years, it has become an important point on the cultural and musical map of Poznań, collaborating with artists, organizers, brands, and local creators.
            </p>
            <p className={styles.cardText}>
              TAMA is not just a space — it is the experience, the people, and the community that creates it.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Host Your Event</h2>
            <p className={styles.cardText}>
              Over 1,100 m² of industrial space, professional technical facilities, and experience in producing events for up to 1,000 guests.
            </p>
            <p className={styles.cardText}>
              Conferences, galas, banquets, concerts, product premieres, and custom projects — TAMA provides the space and possibilities to create an event tailored to your needs.
            </p>
            <Link href="/en/offer" className={styles.venueLink}>
              EXPLORE POSSIBILITIES →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
