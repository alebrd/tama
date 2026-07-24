import type { Metadata } from "next";
import styles from "./page.module.css";
import MapTrigger from "@/components/MapTrigger";

export const metadata: Metadata = {
  title: "Kontakt — SLOW",
  description: "Skontaktuj się z Slow Club Poznań.",
};

export default function SlowKontaktPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="text-gradient-slow">KONTAKT</h1>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.card} glass-slow`}>
            <h2 className={styles.cardTitle}>Zapytania ogólne</h2>
            <p className={styles.cardText}>
              Wszelkie pytania ogólne, kontakt prasowy lub opinie:
            </p>
            <a href="mailto:joanna@tamaklub.pl" className={styles.email}>
              joanna@tamaklub.pl
            </a>
          </div>

          <div className={`${styles.card} glass-slow`}>
            <h2 className={styles.cardTitle}>Bookings</h2>
            <p className={styles.cardText}>
              Bookings artystów i propozycje eventów:
            </p>
            <a href="mailto:arek@tamaklub.pl" className={styles.email}>
              arek@tamaklub.pl
            </a>
          </div>

          <div className={`${styles.card} glass-slow`}>
            <h2 className={styles.cardTitle}>Odwiedź nas</h2>
            <p className={styles.cardText}>
              Wielkopolska Izba Rzemieślnicza<br />
              ul. Niezłomnych 2<br />
              61-894 Poznań, Polska
            </p>
            <div className={styles.mapLinksWrapper}>
              <MapTrigger isEnglish={false} className={styles.mapLink} />
              <a
                href="https://maps.app.goo.gl/J83HT3NkUMGAEGSR9"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                Otwórz w Google Maps →
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
              Instagram
            </a>
            <a
              href="https://www.facebook.com/slowclubpoznan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
