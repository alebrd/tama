import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Program — SLOW",
  description: "Nadchodzące wydarzenia w Slow Club Poznań.",
};

export default function SlowProgramPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className={styles.eyebrow}>NADCHODZĄCE WYDARZENIA</p>
          <h1 className={`${styles.title} text-gradient-slow`}>PROGRAM</h1>
          <p className={styles.sub}>
            Wszystkie nadchodzące wydarzenia są publikowane na naszej stronie na Facebooku.
          </p>
          <div className={styles.actions}>
            <a
              href="https://biletomat.pl/wydarzenia/w/poznan/w/slow"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-slow"
              id="slow-program-tickets-btn-pl"
            >
              BILETY
            </a>
            <a
              href="https://www.facebook.com/slowclubpoznan/events"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-slow"
              id="slow-program-events-btn-pl"
            >
              WYDARZENIA na FB
            </a>
            <a
              href="https://de.ra.co/clubs/294815"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-slow"
              id="slow-program-ra-btn-pl"
            >
              RESIDENT ADVISOR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
