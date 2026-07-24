import type { Metadata } from "next";
import styles from "../../../slowclub/program/page.module.css";

export const metadata: Metadata = {
  title: "Program — SLOW",
  description: "Upcoming events at Slow Club Poznań.",
};

export default function SlowProgramPageEn() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className={styles.eyebrow}>UPCOMING EVENTS</p>
          <h1 className={`${styles.title} text-gradient-slow`}>PROGRAM</h1>
          <p className={styles.sub}>
            All upcoming events are published on our Facebook page.
          </p>
          <div className={styles.actions}>
            <a
              href="https://biletomat.pl/wydarzenia/w/poznan/w/slow"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-slow"
              id="slow-program-tickets-btn-en"
            >
              TICKETS
            </a>
            <a
              href="https://www.facebook.com/slowclubpoznan/events"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-slow"
              id="slow-program-events-btn-en"
            >
              EVENTS on FB
            </a>
            <a
              href="https://de.ra.co/clubs/294815"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-slow"
              id="slow-program-ra-btn-en"
            >
              RESIDENT ADVISOR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
