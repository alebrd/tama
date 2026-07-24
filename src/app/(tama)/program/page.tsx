import type { Metadata } from "next";
import Image from "next/image";
import styles from "../en/program/page.module.css";

export const metadata: Metadata = {
  title: "Program — TAMA",
  description: "Nadchodzące wydarzenia w TAMIE, wiodącym klubie techno w Poznaniu.",
};

export default function ProgramPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className={styles.eyebrow}>NADCHODZĄCE WYDARZENIA</p>
          <h1 className={`${styles.title} text-gradient`}>PROGRAM</h1>
          <p className={styles.sub}>
            Wszystkie nadchodzące wydarzenia są publikowane na naszej stronie na Facebooku.
          </p>
          <div className={styles.actions}>
            <a
              href="https://biletomat.pl/wydarzenia/w/poznan/w/klub-tama"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              id="program-tickets-btn-pl"
            >
              BILETY
            </a>
            <a
              href="https://www.facebook.com/tamaklub/events"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline glass"
              id="program-events-btn-pl"
            >
              WYDARZENIA
            </a>
            <a
              href="https://de.ra.co/clubs/106231"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline glass"
              id="program-ra-btn-pl"
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
