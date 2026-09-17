import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import StatsCounter from "@/components/StatsCounter";
import EventShowcaseGallery from "@/components/EventShowcaseGallery";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "TAMA — Culture. Music. Experiences.",
  description:
    "TAMA is a unique event venue in the heart of Poznań. Concerts, corporate galas, and extraordinary gatherings.",
};

const marqueeItems = [
  "TAMA",
  "MUSIC",
  "CULTURE",
  "EXPERIENCES",
  "MAIN HALL",
  "CHANDELIER ROOM",
  "SLOW",
  "1000 M²",
  "POZNAŃ",
  "NIEZŁOMNYCH 2",
];

const spaces = [
  {
    name: "Main Hall",
    cap: "Up to 1,000 guests · stage · VIP",
    image: "/spaces/main-room.jpg",
    href: "/en/spaces",
  },
  {
    name: "Chandelier Room",
    cap: "Cocktail bar · foyer · dance floor",
    image: "/spaces/chandelier.jpg",
    href: "/en/spaces",
  },
  {
    name: "SLOW Club",
    cap: "Audiophile club · intimate room",
    image: "/spaces/slow.jpg",
    href: "/en/slowclub",
  },
];

export default function TamaPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={`${styles.hero} reveal`}>
        <div className="container">
          <p className={styles.kicker}>Poznań · Niezłomnych 2</p>
          <h1 className={`${styles.title} text-gradient`}>TAMA</h1>
          <p className={styles.sub}>
            Culture. Music. <em>Experiences.</em>
          </p>
          <p className={styles.lead}>
            TAMA is an event space in the heart of Poznań. Concerts, corporate galas,
            premieres, and gatherings that resonate long past the evening.
          </p>
        </div>
      </section>

      {/* Infinite Marquee Ticker */}
      <div className={styles.marqueeBand}>
        <Marquee items={marqueeItems} />
      </div>

      {/* Editorial Intro Section */}
      <section className={styles.editorialSection}>
        <div className="container">
          <div className={styles.editorialGrid}>
            <div className={`${styles.editorialImageWrapper} reveal`}>
              <Image
                src="/spaces/entrance.jpg"
                alt="Entrance to TAMA — historic building at ul. Niezłomnych 2"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.editorialImage}
              />
            </div>
            <div
              className={`${styles.editorialContent} reveal`}
              style={{ "--reveal-delay": "40ms" } as React.CSSProperties}
            >
              <p className={styles.sectionEyebrow}>ABOUT THE VENUE</p>
              <h2 className={`${styles.editorialTitle} text-gradient`}>
                Ninety years of heritage.
                <br />
                The city’s new stage.
              </h2>
              <p className={styles.editorialText}>
                Club TAMA operates in the revitalized grand ceremonial hall of the
                historic Wielkopolska Chamber of Crafts. Industrial technology meets
                stained glass, chandeliers, and stone.
              </p>
              <p className={styles.editorialText}>
                Over 1,100 m² of versatile space, world-class technical facilities,
                acoustics, and lighting allow for organizing intimate private
                events as well as large-scale productions for up to 1,000 people.
              </p>
              <div className={styles.editorialAction}>
                <Link href="/en/spaces" className="btn btn-outline">
                  EXPLORE SPACES <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spaces Preview */}
      <section className={styles.spacesSection}>
        <div className="container">
          <div className={`${styles.spacesHeader} reveal`}>
            <p className={styles.sectionEyebrow}>SPACES</p>
            <h2 className={`${styles.spacesTitle} text-gradient`}>
              Four atmospheres. One location.
            </h2>
          </div>
          <div className={styles.spacesGrid}>
            {spaces.map((space, idx) => (
              <Link
                key={idx}
                href={space.href}
                className={`${styles.spaceCard} reveal`}
                style={{ "--reveal-delay": `${idx * 40}ms` } as React.CSSProperties}
              >
                <div className={styles.spaceMedia}>
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className={styles.spaceImage}
                  />
                </div>
                <div className={styles.spaceMeta}>
                  <h3 className={styles.spaceName}>{space.name}</h3>
                  <span className={styles.spaceCap}>{space.cap}</span>
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
        eyebrow="GALLERY"
        title="Moments created within these walls."
      />

      {/* Business CTA Band */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={`${styles.ctaCard} reveal`}>
            <div className={styles.ctaContent}>
              <p className={styles.sectionEyebrow}>BUSINESS & EVENTS</p>
              <h2 className={`${styles.ctaTitle} text-gradient`}>
                Create an event
                <br />
                tailored to your vision.
              </h2>
              <p className={styles.ctaText}>
                We curate space selection, seating layout, audio-visual technology,
                and catering. From conferences and trade shows to grand galas and
                concerts.
              </p>
            </div>
            <div className={styles.ctaAction}>
              <Link href="/en/offer" className="btn">
                REQUEST AN OFFER <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
