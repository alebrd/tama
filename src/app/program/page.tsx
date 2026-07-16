import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Program — TAMA",
  description: "Upcoming events at TAMA, Poznań's premier techno club.",
};

export default function ProgramPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className={styles.eyebrow}>UPCOMING EVENTS</p>
          <h1 className={`${styles.title} text-gradient`}>PROGRAM</h1>
          <p className={styles.sub}>
            All upcoming events are published on our Facebook page.
          </p>
          <div className={styles.actions}>
            <a
              href="https://www.facebook.com/tamaklub/events"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              id="program-events-btn"
            >
              EVENTS ↗
            </a>
            <a
              href="https://ra.co/clubs/tama"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline glass"
              id="program-ra-btn"
            >
              RESIDENT ADVISOR ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
