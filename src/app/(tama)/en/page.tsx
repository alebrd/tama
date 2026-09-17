import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StatsCounter from "@/components/StatsCounter";
import EventShowcaseGallery from "@/components/EventShowcaseGallery";
import styles from "../root.module.css";

export const metadata: Metadata = {
  title: "TAMA x SLOW",
  description: "Two dimensions of club experience in the heart of Poznań.",
};

const spaces = [
  {
    name: "Main Room",
    cap: "Up to 1,000 guests · Stage · VIP",
    desc: "Over 500 m² of open industrial space with professional stage and technical facilities.",
    image: "/spaces/main-room.jpg",
    href: "/en/spaces",
  },
  {
    name: "SLOW Club",
    cap: "Up to 150 guests · Sound System",
    desc: "Modular, modern club space designed for corporate, private, and cultural events.",
    image: "/spaces/slow.jpg",
    href: "/en/slowclub",
  },
  {
    name: "Chandelier Room",
    cap: "Up to 250 guests · Cocktail Bar",
    desc: "Representative space with classic chandeliers, stained glass, parquet floor, and cocktail bar.",
    image: "/spaces/chandelier.jpg",
    href: "/en/spaces",
  },
  {
    name: "U'Patka Room",
    cap: "Up to 40 guests · 42 m²",
    desc: "Intimate space ideal for a welcome area, lounge zone, VIP room, or private meetings.",
    image: "/spaces/upatki.jpg",
    href: "/en/spaces",
  },
];

export default function UniversalLandingEnPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={`${styles.title} text-gradient`}>
            TAMA{" "}
            <span
              style={{
                textTransform: "lowercase",
                fontSize: "0.65em",
                verticalAlign: "middle",
                padding: "0 0.5rem",
              }}
            >
              x
            </span>{" "}
            SLOW
          </h1>
          <p className={styles.sub}>Two dimensions. One place.</p>
        </div>
      </section>

      {/* Split Section — immediately visible above fold */}
      <section className={styles.splitSection}>
        <div className="container">
          <div className={styles.grid}>
            {/* TAMA */}
            <div className={`${styles.card} ${styles.cardTama}`}>
              <div className={styles.cardBg}>
                <Image
                  src="/spaces/main-room.jpg"
                  alt="TAMA Main Hall"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.cardBgImage}
                  priority
                />
                <div className={styles.cardOverlay} />
              </div>

              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>TAMA</h2>
                <p className={styles.cardText}>
                  The main stage. A raw, powerful industrial space designed for the
                  biggest musical and cultural events. With a capacity of up to 1,000
                  guests, spectacular sound, and an uncompromising character.
                </p>
                <div className={styles.actionRow}>
                  <Link href="/en/tama" className="btn btn-outline">
                    EXPLORE TAMA <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* SLOW */}
            <div className={`${styles.card} ${styles.cardSlow}`}>
              <div className={styles.cardBg}>
                <Image
                  src="/spaces/slow.jpg"
                  alt="SLOW Club"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.cardBgImage}
                  priority
                />
                <div className={styles.cardOverlay} />
              </div>

              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>SLOW</h2>
                <p className={styles.cardText}>
                  An intimate club with an audiophile sound system. Created for deeper
                  musical experiences, carefully selected sounds, and close contact
                  with the artist. A completely different dimension within the same
                  walls.
                </p>
                <div className={styles.actionRow}>
                  <Link href="/en/slowclub" className="btn btn-outline">
                    EXPLORE SLOW <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spaces Showcase Section */}
      <section className={styles.spacesSection}>
        <div className="container">
          <div className={styles.spacesHeader}>
            <div>
              <p className={styles.spacesEyebrow}>OUR SPACES</p>
              <h2 className={`${styles.spacesTitle} text-gradient`}>
                Four atmospheres. One venue.
              </h2>
              <p className={styles.spacesSub}>
                Over 1,100 m² of revitalized industrial space in the heart of Poznań.
              </p>
            </div>
            <div className={styles.spacesAction}>
              <Link href="/en/spaces" className="btn btn-outline">
                EXPLORE ALL SPACES <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>

          <div className={styles.spacesGrid}>
            {spaces.map((space) => (
              <Link
                key={space.name}
                href={space.href}
                className={styles.spaceCard}
              >
                <div className={styles.spaceMedia}>
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    className={styles.spaceImage}
                  />
                </div>
                <div className={styles.spaceMeta}>
                  <h3 className={styles.spaceName}>{space.name}</h3>
                  <span className={styles.spaceCap}>{space.cap}</span>
                  <p className={styles.spaceDesc}>{space.desc}</p>
                  <span className={styles.spaceLinkText}>
                    DETAILS <span className="btn-arrow">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Animated Stats Counter */}
      <StatsCounter lang="en" />

      {/* Event Showcase Gallery */}
      <EventShowcaseGallery
        lang="en"
        eyebrow="EVENTS"
        title="Moments created within these walls."
      />
    </div>
  );
}