import type { Metadata } from "next";
import styles from "../en/contact/page.module.css";

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

          <div className={`${styles.card} ${styles.cardFull} glass`}>
            <h2 className={styles.cardTitle}>Napisz do nas</h2>
            <div className={styles.contactsList}>
              <div className={styles.contactItem}>
                <span className={styles.contactRole}>Zapytania ogólne</span>
                <p className={styles.cardText}>Wszelkie pytania ogólne, kontakt prasowy lub opinie:</p>
                <a href="mailto:joanna@tamaklub.pl" className={styles.email}>
                  joanna@tamaklub.pl
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactRole}>Bookings artystów</span>
                <p className={styles.cardText}>Bookings artystów:</p>
                <a href="mailto:arek@tamaklub.pl" className={styles.email}>
                  arek@tamaklub.pl
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactRole}>Wynajem przestrzeni</span>
                <p className={styles.cardText}>Zapytania o wynajem sali, organizację eventów i ofertę B2B:</p>
                <a href="mailto:katya@tamaklub.pl" className={styles.email}>
                  katya@tamaklub.pl
                </a>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardFull} glass`}>
            <h2 className={styles.cardTitle}>Odwiedź nas</h2>
            <p className={styles.cardText}>
              Wielkopolska Izba Rzemieślnicza · ul. Niezłomnych 2 · 61-894 Poznań, Polska
            </p>
            <iframe
              src="https://maps.google.com/maps?q=TAMA%20Klub%20Poznan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className={styles.mapEmbed}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TAMA Poznań Map"
            />
            <div className={styles.mapLinksWrapper}>
              <a
                href="https://www.google.com/maps/search/Tama+Klub+Poznan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                Otwórz w Google Maps →
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
