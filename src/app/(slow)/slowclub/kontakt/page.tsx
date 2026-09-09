import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Kontakt — SLOW",
  description: "Skontaktuj się ze SLOW — bookings, prasa i zapytania ogólne.",
};

export default function SlowKontaktPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <h1 className={`text-gradient-slow ${styles.title}`}>KONTAKT</h1>
        </div>

        <div className={styles.grid}>

          <div className={`${styles.card} ${styles.cardFull} glass-slow reveal`}>
            <h2 className={styles.cardTitle}>Napisz do nas</h2>
            <div className={styles.contactsList}>
              <div className={styles.contactItem}>
                <span className={styles.contactRole}>Wynajem Przestrzeni i Eventy B2B</span>
                <p className={styles.contactDesc}>Zapytania dotyczące wynajmu przestrzeni, organizacji wydarzeń firmowych i współpracy B2B:</p>
                <a href="mailto:katya@tamaklub.pl" className={styles.email}>
                  katya@tamaklub.pl
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactRole}>Booking Artystów i Koncerty</span>
                <p className={styles.contactDesc}>Booking artystów oraz zapytania dotyczące organizacji koncertów:</p>
                <a href="mailto:arek@tamaklub.pl" className={styles.email}>
                  arek@tamaklub.pl
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactRole}>Kontakt Prasowy</span>
                <p className={styles.contactDesc}>Media, publikacje, wywiady i współpraca prasowa:</p>
                <a href="mailto:joanna@tamaklub.pl" className={styles.email}>
                  joanna@tamaklub.pl
                </a>
              </div>
            </div>
          </div>

          <div
            className={`${styles.card} ${styles.cardFull} glass-slow reveal`}
            style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
          >
            <h2 className={styles.cardTitle}>Odwiedź nas</h2>
            <p className={styles.cardText}>
              Wielkopolska Izba Rzemieślnicza · ul. Niezłomnych 2 · 61-894 Poznań, Polska
            </p>
            <iframe
              src="https://maps.google.com/maps?q=Slow%20Club%20Poznan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className={styles.mapEmbed}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SLOW Poznań Map"
            />
            <div className={styles.mapLinksWrapper}>
              <a
                href="https://maps.app.goo.gl/GAQgNHoqGhnbCuqp9"
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
