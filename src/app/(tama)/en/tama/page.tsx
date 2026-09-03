import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "TAMA — The Club",
  description: "The story, architecture, and ethos behind TAMA, Poznań's premier electronic music venue and concert hall.",
};

export default function TamaPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        {/* Hero */}
        <section className={styles.hero}>
          <p className={styles.eyebrow}>POZNAŃ · EST. 2017</p>
          <h1 className={`${styles.title} text-gradient`}>TAMA</h1>
          <p className={styles.sub}>Home of electronic music and club culture.</p>
        </section>

        {/* Hero Banner Image */}
        <div className={styles.heroBanner}>
          <Image
            src="/spaces/main-hall.jpg"
            alt="TAMA Main Hall"
            fill
            priority
            className={styles.bannerImage}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        {/* Editorial Section 1: Architecture & Heritage */}
        <section className={styles.editorialSection}>
          <div className={styles.editorialContent}>
            <span className={styles.sectionEyebrow}>1929 · HERITAGE</span>
            <h2 className={styles.sectionTitle}>Architecture & Space</h2>
            <p className={styles.bodyText}>
              TAMA is housed in the historic, 90-year-old building of the former Wielkopolska Chamber of Crafts in the center of Poznań. Over 1,100 m² of volume, raw concrete, exposed brick, and monumental chandeliers form a singular architectural presence.
            </p>
            <p className={styles.bodyText}>
              Heritage architecture converges with dedicated acoustic engineering and a modular multi-room layout — spanning the vast Main Hall, intimate club spaces, and lounge zones.
            </p>
          </div>
          <div className={styles.editorialImageWrap}>
            <Image
              src="/spaces/chandelier.jpg"
              alt="TAMA Chandelier Hall"
              fill
              className={styles.editorialImage}
              sizes="(max-width: 900px) 100vw, 500px"
            />
          </div>
        </section>

        {/* Editorial Section 2: Sound & Night (Reverse) */}
        <section className={styles.editorialSectionReverse}>
          <div className={styles.editorialImageWrap}>
            <Image
              src="/arturAENnowicki-2942.jpg"
              alt="TAMA Stage and Lighting"
              fill
              className={styles.editorialImage}
              sizes="(max-width: 900px) 100vw, 500px"
            />
          </div>
          <div className={styles.editorialContent}>
            <span className={styles.sectionEyebrow}>ACOUSTICS · THE STAGE</span>
            <h2 className={styles.sectionTitle}>Sound & The Night</h2>
            <p className={styles.bodyText}>
              Engineered for pure listening and relentless energy. High-end concert-grade sound, dedicated lighting architecture, and a dancefloor running without barriers until dawn.
            </p>
            <p className={styles.bodyText}>
              Since 2017, TAMA has hosted world-class electronic music producers, touring bands, and resident selectors, defining the city&apos;s sonic landscape.
            </p>
          </div>
        </section>

        {/* Section 3: Ethos / Manifesto Block */}
        <section className={styles.manifestoBlock}>
          <span className={styles.sectionEyebrow}>IDENTITY</span>
          <h2 className={styles.manifestoTitle}>Raw concrete. Sound selection. The floor.</h2>
          <p className={styles.manifestoText}>
            Built from the ground up by the underground club scene. No pretense, no corporate formulas — just sound curation, freedom of expression, and a community united under the strobe lights.
          </p>
        </section>

        {/* Section 4: Dedicated Rental Callout */}
        <section className={styles.rentalSection}>
          <div className={styles.rentalContent}>
            <span className={styles.sectionEyebrow}>HOSTING · B2B PRODUCTION</span>
            <h2 className={styles.rentalTitle}>Host Your Event</h2>
            <p className={styles.rentalText}>
              Over 1,100 m² of industrial space, professional technical production, and modular layouts for up to 1,000 guests — from conferences and galas to concerts and custom productions.
            </p>
          </div>
          <div className={styles.rentalAction}>
            <Link href="/en/offer" className="btn">
              EXPLORE OFFER →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

