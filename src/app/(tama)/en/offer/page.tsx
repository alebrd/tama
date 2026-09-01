import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import VenueGallery from "@/components/VenueGallery";

export const metadata: Metadata = {
  title: "Offer — TAMA",
  description: "Host your corporate event, conference, gala, or private party at TAMA — an industrial event space in the heart of Poznań for up to 1,000 guests.",
};

const stats = [
  { value: "5", label: "Conference Halls" },
  { value: "1,000", label: "Max Guests" },
  { value: "1,100 m²", label: "Total Space" },
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
              Create an event tailored to your vision.
            </p>
            <p className={styles.desc}>
              TAMA Club is a modern and atmospheric venue in the very heart of Poznań, ideal for organizing a variety of events — from corporate events, conferences, training sessions, trade fairs, banquets, and galas, to concerts, fashion shows, and industry meetings.
            </p>
            <p className={styles.desc}>
              Our team will help you plan every stage of execution, matching the space, room layout, technical facilities, and catering offer to the character of your event.
            </p>
            <p className={styles.desc}>
              Tell us about your idea, and we will prepare an offer tailored to your needs.
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

        {/* Setups */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Possible Setups</h2>
          <div className={styles.setupsGrid}>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>Banquet</h3>
              <p className={styles.setupValue}>
                25 tables (10-person)<br/>
                250 seated places total
              </p>
            </div>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>Theatrical / Conference</h3>
              <p className={styles.setupValue}>
                400 seated places
              </p>
            </div>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>Concert & Event</h3>
              <p className={styles.setupValue}>
                1,000 standing places<br/>
                or 20 tables + 800 standing
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className={styles.section} style={{ marginTop: "6rem" }}>
          <h2 className={styles.sectionTitle}>Gallery</h2>
          <VenueGallery isEnglish={true} />
        </div>

      </div>
    </div>
  );
}
