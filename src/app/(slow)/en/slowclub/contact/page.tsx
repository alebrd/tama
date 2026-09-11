import type { Metadata } from "next";
import styles from "../../../slowclub/kontakt/page.module.css";

export const metadata: Metadata = {
  title: "Contact — SLOW",
  description: "Get in touch with SLOW — bookings, press, and general enquiries.",
};

export default function SlowContactPageEn() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <h1 className={`text-gradient-slow ${styles.title}`}>CONTACT</h1>
        </div>

        <div className={styles.grid}>

          <div className={`${styles.card} ${styles.cardFull} glass-slow reveal`}>
            <h2 className={styles.cardTitle}>Get in Touch</h2>
            <div className={styles.contactsList}>
              <div className={styles.contactItem}>
                <span className={styles.contactRole}>Venue Rental & B2B Events</span>
                <p className={styles.contactDesc}>Enquiries regarding venue hire, corporate events, and B2B collaborations:</p>
                <a href="mailto:katya@tamaklub.pl" className={styles.email}>
                  katya@tamaklub.pl
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactRole}>Artist Booking & Concerts</span>
                <p className={styles.contactDesc}>Artist booking and enquiries regarding concert organization:</p>
                <a href="mailto:arek@tamaklub.pl" className={styles.email}>
                  arek@tamaklub.pl
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactRole}>Press Contact</span>
                <p className={styles.contactDesc}>Media, publications, interviews, and press collaborations:</p>
                <a href="mailto:joanna@tamaklub.pl" className={styles.email}>
                  joanna@tamaklub.pl
                </a>
              </div>
            </div>
          </div>

          <div
            className={`${styles.card} ${styles.cardFull} glass-slow reveal`}
            style={{ '--reveal-delay': '40ms' } as React.CSSProperties}
          >
            <h2 className={styles.cardTitle}>Visit Us</h2>
            <p className={styles.cardText}>
              Wielkopolska Izba Rzemieślnicza · ul. Niezłomnych 2 · 61-894 Poznań, Poland
            </p>
            <iframe
              src="https://maps.google.com/maps?q=Slow%20Club%20Poznan&t=&z=14&ie=UTF8&iwloc=&output=embed"
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
                Open in Google Maps →
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
