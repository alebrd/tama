import type { Metadata } from "next";
import Image from "next/image";
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
              href="https://biletomat.pl/wydarzenia/w/poznan/w/klub-tama"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              id="program-tickets-btn"
            >
              TICKETS
            </a>
            <a
              href="https://www.facebook.com/tamaklub/events"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline glass"
              id="program-events-btn"
            >
              EVENTS
            </a>
            <a
              href="https://de.ra.co/clubs/106231"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline glass"
              id="program-ra-btn"
            >
              RESIDENT ADVISOR
            </a>
          </div>
          <div className={styles.flyerWrapper}>
            <Image
              src="/program-flyer.jpg"
              alt="Latest Program Flyer"
              fill
              className={styles.flyerImage}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
