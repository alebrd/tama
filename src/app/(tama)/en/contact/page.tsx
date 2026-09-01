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

          <div className={`${styles.card} ${styles.cardFull} glass`}>
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

          <div className={`${styles.card} ${styles.cardFull} glass`}>
            <h2 className={styles.cardTitle}>Visit Us</h2>
            <p className={styles.cardText}>
              Wielkopolska Izba Rzemieślnicza · ul. Niezłomnych 2 · 61-894 Poznań, Poland
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
                Open in Google Maps →
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
