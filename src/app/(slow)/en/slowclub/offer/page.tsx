import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import VenueGallery from "@/components/VenueGallery";

export const metadata: Metadata = {
  title: "Offer — SLOW",
  description: "Host your event at SLOW — an intimate club and event venue in the heart of Poznań for up to 200 guests. Audiophile sound, cocktail bar, and mezzanine.",
};

const stats = [
  { value: "200", label: "Max Guests" },
  { value: "200 m²", label: "Total Space" },
  { value: "Central", label: "Poznań Location" },
];

const eventTypes = [
  "Corporate Parties",
  "Private Celebrations",
  "Galas & Banquets",
  "Industry Meetups",
  "Product Launches",
  "Intimate Concerts",
  "Workshops & Panels",
  "Exclusive Gatherings",
];

const slowGalleryImages = [
  // Top 8 for the Preview Grid
  "/slow-offer/Dancefloor-1_SLOW.jpg",
  "/slow-offer/Bar_SLOW.jpg",
  "/slow-offer/Antresola-1_SLOW.jpg",
  "/slow-offer/Sala_SLOW.jpg",
  "/slow-offer/Dancefloor-3_SLOW.jpg",
  "/slow-offer/Bar-2_SLOW.jpg",
  "/slow-offer/Antresola-7_SLOW.jpg",
  "/slow-offer/Deco_SLOW.jpg",
  // Additional Photos in Modal
  "/slow-offer/Dancefloor-2_SLOW.jpg",
  "/slow-offer/Dancefloor-4_SLOW.jpg",
  "/slow-offer/Dancefloor-5_SLOW.jpg",
  "/slow-offer/Dancefloor-6_SLOW.jpg",
  "/slow-offer/Dancefloor-7_SLOW.jpg",
  "/slow-offer/Dancefloor_SLOW.jpg",
  "/slow-offer/Bar-3_SLOW.jpg",
  "/slow-offer/Bar.jpg",
  "/slow-offer/Sala__SLOW.jpg",
  "/slow-offer/Antresola-2_SLOW.jpg",
  "/slow-offer/Antresola-3_SLOW.jpg",
  "/slow-offer/Antresola-4_SLOW.jpg",
  "/slow-offer/Antresola-5_SLOW.jpg",
  "/slow-offer/Antresola-6_SLOW.jpg",
  "/slow-offer/Antresola-8_SLOW.jpg",
  "/slow-offer/Antresola-9_SLOW.jpg",
  "/slow-offer/Antresola-10_SLOW.jpg",
  "/slow-offer/Antresola-11_SLOW.jpg",
  "/slow-offer/Antresola-12_SLOW.jpg",
  "/slow-offer/Antresola-13_SLOW.jpg",
  "/slow-offer/Antresola-14_SLOW.jpg",
  "/slow-offer/Antresola-15_SLOW.jpg",
  "/slow-offer/Antresola-16_SLOW.jpg",
  "/slow-offer/Antresola-17_SLOW.jpg",
  "/slow-offer/Antresola-18_SLOW.jpg",
];

export default function SlowOfferPage() {
  return (
    <div className={styles.page}>
      <div className="container">

        {/* Hero */}
        <div className={`${styles.hero} reveal`}>
          <p className={styles.eyebrow}>EVENT SPACE · POZNAŃ</p>
          <h1 className={styles.title}>Host Your Event</h1>
          <p className={styles.sub}>
            Corporate parties, private celebrations, galas, and bespoke gatherings —
            intimate atmosphere, audiophile sound, and distinctive character in the heart of Poznań.
          </p>
        </div>

        {/* Stats */}
        <div className={styles.statsRow}>
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`${styles.stat} reveal`}
              style={{ '--reveal-delay': `${idx * 30}ms` } as React.CSSProperties}
            >
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Event Types */}
        <div className={`${styles.section} reveal`}>
          <h2 className={styles.sectionTitle}>What We Host</h2>
          <div className={styles.tagGrid}>
            {eventTypes.map((type) => (
              <span key={type} className={styles.tag}>{type}</span>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.descBlock}>
            <h2 className={styles.sectionTitle}>Location</h2>
            <p className={styles.desc}>
              SLOW is located in the very heart of Poznań, within the historic Wielkopolska Craft Guild building at ul. Niezłomnych 2 — just a short walk from the Main Railway Station (PKP) and the Poznań International Fair (MTP). Its central position ensures effortless access for your guests and organizers, with adjacent hotels and parking simplifying event logistics.
            </p>

            <div className={styles.locationBox}>
              <a
                href="https://maps.app.goo.gl/GAQgNHoqGhnbCuqp9"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.locationAddress}
              >
                ul. Niezłomnych 2, 61-894 Poznań
              </a>
              <div className={styles.transitGrid}>
                <div className={styles.transitItem}>
                  <Image src="/icons/Artboard4.svg" alt="Train" width={56} height={56} className={styles.transitIcon} />
                  <div>
                    <div className={styles.transitLabel}>Main Railway Station</div>
                    <div className={styles.transitValue}>0.8 km</div>
                  </div>
                </div>
                <div className={styles.transitItem}>
                  <Image src="/icons/Artboard5.svg" alt="Airport" width={56} height={56} className={styles.transitIcon} />
                  <div>
                    <div className={styles.transitLabel}>Poznań-Ławica Airport</div>
                    <div className={styles.transitValue}>6.4 km</div>
                  </div>
                </div>
                <div className={styles.transitItem}>
                  <Image src="/icons/Artboard6.svg" alt="Public Transport" width={56} height={56} className={styles.transitIcon} />
                  <div>
                    <div className={styles.transitLabel}>Public Transit Access</div>
                    <div className={styles.transitValue}>Bus, Tram</div>
                  </div>
                </div>
              </div>
            </div>

            <iframe
              src="https://maps.google.com/maps?q=Slow%20Club%20Poznan&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className={styles.mapEmbed}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SLOW Poznań Map"
            />
          </div>
        </div>

        {/* Description */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.descBlock}>
            <h2 className={styles.sectionTitle}>The Space</h2>
            <p className={styles.desc}>
              The new SLOW stage is a modular, modern event space crafted for corporate, cultural, and special occasion gatherings.
            </p>
            <p className={styles.desc}>
              The interior&apos;s industrial character, paired with advanced acoustic engineering and professional technical infrastructure, creates a venue where aesthetics seamlessly meet comfort and functionality.
            </p>
            <p className={styles.desc}>
              Designed by the acclaimed mode:lina™ studio, the concept is grounded in the harmony of architecture, sound, and light — enabling a wide spectrum of events, from conferences and presentations to banquets, listening sessions, and private celebrations.
            </p>
            <p className={styles.desc}>
              Tell us about your concept and we will prepare a proposal tailored to your requirements.
            </p>
            <div className={styles.cta}>
              <a
                href="mailto:katya@tamaklub.pl"
                className="btn-slow"
                id="slow-offer-enquire-btn"
              >
                ENQUIRE →
              </a>
              <Link
                href="/en/slowclub/contact"
                className="btn-slow"
                id="slow-offer-contact-btn"
                style={{ background: "transparent", borderColor: "rgba(255, 26, 26, 0.3)", color: "#fff" }}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>

        {/* Setups */}
        <div className={`${styles.section} reveal`}>
          <h2 className={styles.sectionTitle}>Possible Setups</h2>
          <div className={styles.setupsGrid}>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>
                Club & Event
                <Image src="/icons/Artboard1.svg" alt="Club & Event" width={32} height={32} className={styles.setupIcon} />
              </h3>
              <p className={styles.setupValue}>
                Up to 200 standing guests<br />
                Full access to dancefloor, bar, and mezzanine
              </p>
            </div>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>
                Cocktail & Networking
                <Image src="/icons/Artboard3.svg" alt="Cocktail" width={32} height={32} className={styles.setupIcon} />
              </h3>
              <p className={styles.setupValue}>
                Up to 120 cocktail capacity<br />
                High tables, lounge seating, and dedicated bar
              </p>
            </div>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>
                Intimate / Seated
                <Image src="/icons/Artboard2.svg" alt="Intimate" width={32} height={32} className={styles.setupIcon} />
              </h3>
              <p className={styles.setupValue}>
                Up to 70 seated guests<br />
                Lounge arrangement with mezzanine access
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className={`${styles.section} reveal`} style={{ marginTop: "6rem" }}>
          <h2 className={styles.sectionTitle}>Gallery</h2>
          <VenueGallery isEnglish={true} images={slowGalleryImages} variant="slow" />
        </div>

      </div>
    </div>
  );
}
