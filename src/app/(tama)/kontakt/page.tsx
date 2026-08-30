import type { Metadata } from "next";
import styles from "../en/contact/page.module.css";
import MapTrigger from "@/components/MapTrigger";

export const metadata: Metadata = {
  title: "Kontakt — TAMA",
  description: "Skontaktuj się z TAMĄ — bookings, prasa i zapytania ogólne.",
};

export default function KontaktPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="text-gradient">KONTAKT</h1>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.card} glass`}>
            <h2 className={styles.cardTitle}>Zapytania ogólne</h2>
            <p className={styles.cardText}>
              Wszelkie pytania ogólne, kontakt prasowy lub opinie:
            </p>
            <a href="mailto:joanna@tamaklub.pl" className={styles.email}>
              joanna@tamaklub.pl
            </a>
          </div>

          <div className={`${styles.card} glass`}>
            <h2 className={styles.cardTitle}>Bookings artystów</h2>
            <p className={styles.cardText}>
              Bookings artystów:
            </p>
            <a href="mailto:arek@tamaklub.pl" className={styles.email}>
              arek@tamaklub.pl
            </a>
          </div>

          <div className={`${styles.card} glass`}>
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

          <div className={`${styles.card} glass`}>
            <h2 className={styles.cardTitle}>Wynajem przestrzeni</h2>
            <p className={styles.cardText}>
              Zapytania o wynajem sali, organizację eventów i ofertę B2B:
            </p>
            <a href="mailto:katya@tamaklub.pl" className={styles.email}>
              katya@tamaklub.pl
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
