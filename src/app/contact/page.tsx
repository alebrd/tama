import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact — TAMA",
  description: "Get in touch with TAMA — bookings, press, and general enquiries.",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="text-gradient">CONTACT</h1>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.card} glass`}>
            <h2 className={styles.cardTitle}>General Enquiries</h2>
            <p className={styles.cardText}>
              For any general questions, press enquiries, or feedback:
            </p>
            <a href="mailto:contact@tamaklub.com" className={styles.email}>
              contact@tamaklub.com
            </a>
          </div>

          <div className={`${styles.card} glass`}>
            <h2 className={styles.cardTitle}>Bookings</h2>
            <p className={styles.cardText}>
              Artist bookings and event proposals:
            </p>
            <a href="mailto:arek@tamaklub.pl" className={styles.email}>
              arek@tamaklub.pl
            </a>
          </div>

          <div className={`${styles.card} glass`}>
            <h2 className={styles.cardTitle}>Visit Us</h2>
            <p className={styles.cardText}>
              Wielkopolska Izba Rzemieślnicza<br />
              ul. Niezłomnych 2<br />
              61-894 Poznań, Poland
            </p>
            <a
              href="https://maps.google.com/?q=ul.+Niezłomnych+2,+Poznań,+Poland"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              Open in Google Maps →
            </a>
          </div>

          <div className={`${styles.card} glass`}>
            <h2 className={styles.cardTitle}>Social</h2>
            <a
              href="https://www.instagram.com/tamaklub/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Instagram ↗
            </a>
            <a
              href="https://www.facebook.com/tamaklub"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Facebook ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
