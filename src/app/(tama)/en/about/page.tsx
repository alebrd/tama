import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../../o-nas/page.module.css";

export const metadata: Metadata = {
  title: "About Us — TAMA",
  description: "History, identity, and architecture of TAMA Club in the historic Wielkopolska Chamber of Crafts in Poznań.",
};

export default function AboutPageEn() {
  return (
    <div className={styles.page}>
      <div className="container">

        {/* ─── Hero Header ───────────────────────────────────────────── */}
        <section className={`${styles.hero} reveal`}>
          <p className={styles.eyebrow}>HISTORY · IDENTITY · ARCHITECTURE</p>
          <h1 className={`${styles.title} text-gradient`}>About Us</h1>
          <p className={styles.sub}>
            TAMA is a premier electronic music venue and distinctive event destination in the heart of Poznań.
            Together with the intimate SLOW club, it forms a two-dimensional ecosystem of uncompromising music, architecture, and community.
          </p>
        </section>

        {/* ─── Chapter 1: Heritage & Architecture ───────────────────── */}
        <section className={`${styles.chapter} reveal`}>
          <div className={styles.chapterText}>
            <span className={styles.chapterEyebrow}>HERITAGE & ARCHITECTURE</span>
            <h2 className={styles.chapterTitle}>90 Years of History in Poznań</h2>
            <p className={styles.chapterParagraph}>
              TAMA is situated within the revitalized historic landmark of the former Wielkopolska Chamber of Crafts at ul. Niezłomnych 2, erected in 1929. The monumental interwar building retains its unmistakable character: raw architectural textures, soaring vaulted ceilings, grand stairwells, and preserved stained glass.
            </p>
            <p className={styles.chapterParagraph}>
              Contemporary revitalization seamlessly integrated the soul of this 90-year-old monument with an industrial club aesthetic. Spanning over 1,100 m² of open, versatile area, it stands today as one of the most culturally resonant and inspiring creative spaces in Poland.
            </p>
          </div>
          <div className={styles.chapterImageWrapper}>
            <Image
              src="/spaces/main-hall.jpg"
              alt="Architecture of TAMA — historic foyer and staircase"
              fill
              className={styles.chapterImage}
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
            />
          </div>
        </section>

        {/* ─── Manifesto / Quote Block ──────────────────────────────── */}
        <section className={`${styles.manifesto} reveal`}>
          <p className={styles.manifestoText}>
            “TAMA is not merely walls and floor space — it is first and foremost the people, the sonic energy, and the community that has shaped it from day one.”
          </p>
          <p className={styles.manifestoAuthor}>— TAMA CLUB MANIFESTO</p>
        </section>

        {/* ─── Chapter 2: Music, Sound & Tech ────────────────────────── */}
        <section className={`${styles.chapter} ${styles.chapterReverse} reveal`}>
          <div className={styles.chapterImageWrapper}>
            <Image
              src="/spaces/main-room.jpg"
              alt="TAMA Main Hall — stage sound and concert lighting"
              fill
              className={styles.chapterImage}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className={styles.chapterText}>
            <span className={styles.chapterEyebrow}>MUSIC & PRODUCTION</span>
            <h2 className={styles.chapterTitle}>Sound, Light & Engineering</h2>
            <p className={styles.chapterParagraph}>
              From intimate listening sessions to high-energy performances by the international electronic and live music elite — TAMA was engineered to deliver an uncompromising acoustic experience.
            </p>
            <p className={styles.chapterParagraph}>
              The venue features an audiophile-grade sound system, a concert stage, advanced kinetic lighting rigs, and multi-screen visual projection infrastructure. Every acoustic and technical detail is calibrated with precision to ensure pristine dynamics and vocal clarity.
            </p>
          </div>
        </section>

        {/* ─── Chapter 3: SLOW — The Other Side of TAMA ──────────────── */}
        <section className={`${styles.chapter} reveal`}>
          <div className={styles.chapterText}>
            <span className={styles.chapterEyebrow}>SLOW · THE NEW CHAPTER</span>
            <h2 className={styles.chapterTitle}>SLOW — The Other Side of TAMA</h2>
            <p className={styles.chapterParagraph}>
              Complementing the monumental Main Hall is SLOW — the new, intimate side of the TAMA complex. Designed by the acclaimed architectural studio mode:lina™, this 200 m² boutique space offers an evocative, refined counterpoint to the raw industrial presence of the main room.
            </p>
            <p className={styles.chapterParagraph}>
              Featuring a private mezzanine, bespoke cocktail bar, and a finely calibrated audiophile sound system, SLOW operates as an autonomous house music club, an elevated cocktail lounge, and an independent destination for boutique corporate events and private gatherings for up to 200 guests.
            </p>
            <p className={styles.chapterParagraph}>
              Together, TAMA and SLOW form a harmonious two-dimensional ecosystem: from monumental club nights and large-scale galas to intimate, nuanced sonic experiences and networking.
            </p>
          </div>
          <div className={styles.chapterImageWrapper}>
            <Image
              src="/spaces/slow.jpg"
              alt="SLOW Club — boutique interior and mezzanine designed by mode:lina™"
              fill
              className={styles.chapterImage}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* ─── Values Grid ──────────────────────────────────────────── */}
        <section className={`${styles.valuesSection} reveal`}>
          <div className={styles.valuesHeader}>
            <span className={styles.chapterEyebrow}>CORE VALUES</span>
            <h2 className={styles.chapterTitle}>Our Pillars</h2>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <span className={styles.valueNum}>01</span>
              <h3 className={styles.valueTitle}>Respect & Safer Space</h3>
              <p className={styles.valueText}>
                An inclusive environment strictly free from discrimination. We uphold safety, openness, and mutual respect in accordance with authentic club culture.
              </p>
            </div>
            <div
              className={styles.valueCard}
              style={{ "--reveal-delay": "30ms" } as React.CSSProperties}
            >
              <span className={styles.valueNum}>02</span>
              <h3 className={styles.valueTitle}>Sonic Integrity</h3>
              <p className={styles.valueText}>
                Rooted in genuine artistic passion — showcasing resident talent alongside world-renowned electronic and live music pioneers.
              </p>
            </div>
            <div
              className={styles.valueCard}
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              <span className={styles.valueNum}>03</span>
              <h3 className={styles.valueTitle}>Versatility</h3>
              <p className={styles.valueText}>
                Over 1,100 m² of modular space seamlessly bridging electronic club nights, live concerts, corporate galas, and film productions.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Bottom CTA Bar ───────────────────────────────────────── */}
        <section className={`${styles.ctaBar} reveal`}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>Experience TAMA</h2>
            <p className={styles.ctaDesc}>
              Visit the club page, explore our distinct architectural spaces, or enquire about exclusive venue hire.
            </p>
          </div>
          <div className={styles.ctaLinks}>
            <Link href="/en/tama" className={styles.ctaBtnPrimary} id="about-to-tama-btn-en">
              TAMA CLUB →
            </Link>
            <Link href="/en/slowclub" className={styles.ctaBtnSlow} id="about-to-slow-btn-en">
              SLOW CLUB →
            </Link>
            <Link href="/en/spaces" className={styles.ctaBtnOutline} id="about-to-spaces-btn-en">
              SPACES
            </Link>
            <Link href="/en/offer" className={styles.ctaBtnOutline} id="about-to-offer-btn-en">
              VENUE HIRE
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
