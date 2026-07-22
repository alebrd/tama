import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import VenueGallery from "@/components/VenueGallery";

export const metadata: Metadata = {
  title: "Venue — TAMA",
  description: "Host your corporate event, conference, gala, or private party at TAMA — an industrial event space in the heart of Poznań for up to 1,000 guests.",
};

const stats = [
  { value: "5", label: "Conference Halls" },
  { value: "1,000", label: "Max Guests" },
  { value: "1,000 m²", label: "Total Space" },
  { value: "Central", label: "Poznań Location" },
];

const eventTypes = [
  "Corporate Parties",
  "Conferences",
  "Galas & Banquets",
  "Concerts & Shows",
  "Fashion Shows",
  "Training & Workshops",
  "Trade Fairs",
  "Industry Meetups",
];

export default function VenuePage() {
  return (
    <div className={styles.page}>
      <div className="container">

        {/* Hero */}
        <div className={styles.hero}>
          <p className={styles.eyebrow}>EVENT SPACE · POZNAŃ</p>
          <h1 className={`${styles.title} text-gradient`}>Host Your Event</h1>
          <p className={styles.sub}>
            Corporate parties, conferences, galas, concerts and more —
            all under one industrial roof in the heart of Poznań.
          </p>
        </div>

        {/* Stats */}
        <div className={styles.statsRow}>
          {stats.map((stat) => (
            <div key={stat.label} className={`${styles.stat} glass`}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Event Types */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What We Host</h2>
          <div className={styles.tagGrid}>
            {eventTypes.map((type) => (
              <span key={type} className={`${styles.tag} glass`}>{type}</span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className={styles.section}>
          <div className={`${styles.descBlock} glass`}>
            <h2 className={styles.sectionTitle}>The Space</h2>
            <p className={styles.desc}>
              TAMA is housed inside a revitalized 90-year-old building — the former representative
              hall of the <em>Wielkopolska Chamber of Crafts</em>. The industrial interior, flexible
              layout, and professional technical facilities make it ideal for a wide range of events,
              from intimate workshops to large-scale galas.
            </p>
            <p className={styles.desc}>
              The venue offers 5 rooms of various sizes, accommodating between 20 and 1,000
              participants. Every space is equipped with professional sound systems, stage lighting,
              and can be configured to the organiser&apos;s specific needs — theatre, banquet, or
              open-floor layouts.
            </p>
            <p className={styles.desc}>
              Located at ul. Niezłomnych 2 — just 1 km from Poznań Główny station and the
              International Fair (MTP), with hotels and parking in the immediate vicinity.
            </p>
            <div className={styles.cta}>
              <a
                href="mailto:katya@tamaklub.pl"
                className="btn"
                id="venue-enquire-btn"
              >
                ENQUIRE →
              </a>
              <Link
                href="/en/contact"
                className="btn btn-outline glass"
                id="venue-contact-btn"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Gallery</h2>
          <VenueGallery isEnglish={true} />
        </div>

      </div>
    </div>
  );
}
