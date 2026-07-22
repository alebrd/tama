import type { Metadata } from "next";
import styles from "../../../slowclub/kontakt/page.module.css";
import MapTrigger from "@/components/MapTrigger";

export const metadata: Metadata = {
  title: "Contact — SLOW",
  description: "Contact Slow Club Poznań.",
};

export default function SlowContactPageEn() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="text-gradient-slow">CONTACT</h1>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.card} glass-slow`}>
            <h2 className={styles.cardTitle}>General Inquiries</h2>
            <p className={styles.cardText}>
              For any general questions, press, or feedback:
            </p>
            <a href="mailto:joanna@tamaklub.pl" className={styles.email}>
              joanna@tamaklub.pl
            </a>
          </div>

          <div className={`${styles.card} glass-slow`}>
            <h2 className={styles.cardTitle}>Bookings</h2>
            <p className={styles.cardText}>
              Artist bookings and event proposals:
            </p>
            <a href="mailto:arek@tamaklub.pl" className={styles.email}>
              arek@tamaklub.pl
            </a>
          </div>

          <div className={`${styles.card} glass-slow`}>
            <h2 className={styles.cardTitle}>Visit Us</h2>
            <p className={styles.cardText}>
              Wielkopolska Izba Rzemieślnicza<br />
              ul. Niezłomnych 2<br />
              61-894 Poznań, Poland
            </p>
            <div className={styles.mapLinksWrapper}>
              <MapTrigger isEnglish={true} className={styles.mapLink} />
              <a
                href="https://maps.app.goo.gl/J83HT3NkUMGAEGSR9"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          <div className={`${styles.card} glass-slow`}>
            <h2 className={styles.cardTitle}>Social</h2>
            <a
              href="https://www.instagram.com/slowclubpoznan/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Instagram ↗
            </a>
            <a
              href="https://www.facebook.com/slowclubpoznan"
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
