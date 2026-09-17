import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import StatsCounter from "@/components/StatsCounter";
import EventShowcaseGallery from "@/components/EventShowcaseGallery";
import styles from "./root.module.css";

export const metadata: Metadata = {
  title: "TAMA x SLOW",
  description: "Dwa wymiary klubowego doświadczenia w sercu Poznania.",
};

const marqueeItems = [
  "TAMA",
  "MUZYKA",
  "KULTURA",
  "DOŚWIADCZENIA",
  "SLOW",
  "SALA GŁÓWNA",
  "SALA ŻYRANDOLOWA",
  "1000 M²",
  "POZNAŃ",
  "NIEZŁOMNYCH 2",
];

export default function UniversalLandingPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={`${styles.hero} reveal`}>
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
          <p className={styles.sub}>Dwa wymiary. Jedno miejsce.</p>
        </div>
      </section>

      {/* Infinite Marquee Ticker */}
      <div className={styles.marqueeBand}>
        <Marquee items={marqueeItems} />
      </div>

      {/* Split Section */}
      <section className={styles.splitSection}>
        <div className="container">
          <div className={styles.grid}>
            {/* TAMA */}
            <div
              className={`${styles.card} ${styles.cardTama} reveal`}
              style={{ "--reveal-delay": "30ms" } as React.CSSProperties}
            >
              <div className={styles.cardBg}>
                <Image
                  src="/spaces/main-room.jpg"
                  alt="TAMA Main Hall"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.cardBgImage}
                />
                <div className={styles.cardOverlay} />
              </div>

              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>TAMA</h2>
                <p className={styles.cardText}>
                  Główna scena. Surowa, potężna przestrzeń industrialna zaprojektowana
                  dla największych wydarzeń muzycznych i kulturalnych. Z pojemnością do
                  1 000 gości, spektakularnym nagłośnieniem i bezkompromisowym
                  charakterem.
                </p>
                <div className={styles.actionRow}>
                  <Link href="/tama" className="btn btn-outline">
                    ODKRYJ TAMĘ <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* SLOW */}
            <div
              className={`${styles.card} ${styles.cardSlow} reveal`}
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              <div className={styles.cardBg}>
                <Image
                  src="/spaces/slow.jpg"
                  alt="SLOW Club"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.cardBgImage}
                />
                <div className={styles.cardOverlay} />
              </div>

              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>SLOW</h2>
                <p className={styles.cardText}>
                  Intymny klub z audiofilskim nagłośnieniem. Stworzony dla głębszych
                  doświadczeń muzycznych, selekcjonowanych brzmień i bliskiego kontaktu z
                  artystą. Zupełnie inny wymiar w tych samych murach.
                </p>
                <div className={styles.actionRow}>
                  <Link href="/slowclub" className="btn btn-outline">
                    ODKRYJ SLOW <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Key Stats Counter */}
      <StatsCounter lang="pl" />

      {/* Event Versatility Gallery */}
      <EventShowcaseGallery
        lang="pl"
        eyebrow="WYDARZENIA"
        title="Wydarzenia, które tu były."
      />
    </div>
  );
}
