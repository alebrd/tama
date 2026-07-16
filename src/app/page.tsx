import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className={styles.title}>
            <span className="text-gradient">TAMA</span>
          </h1>
          <p className={styles.subtitle}>
            THE PULSE OF POZNAŃ
          </p>
          <div className={styles.actions}>
            <Link href="/gallery" className="btn">EXPERIENCE</Link>
            <Link href="/about" className="btn btn-outline glass">DISCOVER</Link>
          </div>
        </div>
        <div className={styles.heroBackground}>
          {/* A gradient glow acting as a background element for now */}
          <div className={styles.glow} />
        </div>
      </section>

      <section className={`container ${styles.upcoming}`}>
        <h2 className={styles.sectionTitle}>UPCOMING</h2>
        <div className={styles.eventGrid}>
          {/* Placeholder Events based on IG */}
          {[
            { date: "19 09", title: "SEASON OPENING", artist: "SPFDJ" },
            { date: "20 09", title: "GIOLI & ASSIA", artist: "" },
            { date: "26 09", title: "OBSESSION", artist: "NOVAH" },
          ].map((event, i) => (
            <div key={i} className={`${styles.eventCard} glass`}>
              <div className={styles.eventDate}>{event.date}</div>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              {event.artist && <p className={styles.eventArtist}>{event.artist}</p>}
              <Link href="#" className={styles.eventLink}>TICKETS</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}