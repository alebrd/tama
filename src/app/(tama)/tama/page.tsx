import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import StatsCounter from "@/components/StatsCounter";
import EventShowcaseGallery from "@/components/EventShowcaseGallery";
import styles from "../en/tama/page.module.css";

export const metadata: Metadata = {
  title: "TAMA — Kultura. Muzyka. Doświadczenia.",
  description:
    "TAMA to przestrzeń eventowa w sercu Poznania. Koncerty, eventy firmowe, gale i wyjątkowe spotkania.",
};

const marqueeItems = [
  "TAMA",
  "MUZYKA",
  "KULTURA",
  "DOŚWIADCZENIA",
  "SALA GŁÓWNA",
  "SALA ŻYRANDOLOWA",
  "SLOW",
  "1000 M²",
  "POZNAŃ",
  "NIEZŁOMNYCH 2",
];

const spaces = [
  {
    name: "Sala Główna",
    cap: "Do 1 000 osób · scena · VIP",
    image: "/spaces/main-room.jpg",
    href: "/przestrzen",
  },
  {
    name: "Sala Żyrandolowa",
    cap: "Koktajl bar · foyer · parkiet",
    image: "/spaces/chandelier.jpg",
    href: "/przestrzen",
  },
  {
    name: "Klub SLOW",
    cap: "Audiofilski klub · sala kameralna",
    image: "/spaces/slow.jpg",
    href: "/slowclub",
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
            Kultura. Muzyka. <em>Doświadczenia.</em>
          </p>
          <p className={styles.lead}>
            TAMA to przestrzeń eventowa w sercu Poznania. Koncerty, eventy firmowe,
            premiery, gale i spotkania, które zostają dłużej niż wieczór.
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
                alt="Wejście do TAMA — zabytkowy gmach przy ul. Niezłomnych 2"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.editorialImage}
              />
            </div>
            <div
              className={`${styles.editorialContent} reveal`}
              style={{ "--reveal-delay": "40ms" } as React.CSSProperties}
            >
              <p className={styles.sectionEyebrow}>O MIEJSCU</p>
              <h2 className={`${styles.editorialTitle} text-gradient`}>
                Dziewięćdziesiąt lat murów.
                <br />
                Nowa scena miasta.
              </h2>
              <p className={styles.editorialText}>
                Klub TAMA działa w zrewitalizowanym wnętrzu sali reprezentacyjnej
                Wielkopolskiej Izby Rzemieślniczej. Industrialna technika spotyka
                witraże, żyrandole i kamień.
              </p>
              <p className={styles.editorialText}>
                Ponad 1 100 m² elastycznej przestrzeni, profesjonalne zaplecze
                techniczne, nagłośnienie i oświetlenie pozwalają na organizację
                zarówno kameralnych spotkań, jak i dużych wydarzeń dla nawet 1 000
                osób.
              </p>
              <div className={styles.editorialAction}>
                <Link href="/przestrzen" className="btn btn-outline">
                  POZNAJ PRZESTRZENIE <span className="btn-arrow">→</span>
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
            <p className={styles.sectionEyebrow}>PRZESTRZENIE</p>
            <h2 className={`${styles.spacesTitle} text-gradient`}>
              Cztery nastroje. Jedna lokalizacja.
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
      <StatsCounter lang="pl" />

      {/* Event Showcase Gallery */}
      <EventShowcaseGallery
        lang="pl"
        eyebrow="GALERIA"
        title="Wydarzenia, które tu były."
      />

      {/* Business CTA Band */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={`${styles.ctaCard} reveal`}>
            <div className={styles.ctaContent}>
              <p className={styles.sectionEyebrow}>BUSINESS & EVENTY</p>
              <h2 className={`${styles.ctaTitle} text-gradient`}>
                Stwórz wydarzenie
                <br />
                dopasowane do wizji.
              </h2>
              <p className={styles.ctaText}>
                Dobieramy przestrzeń, układ sali, technikę i gastronomię. Od
                konferencji i targów po uroczyste gale i koncerty.
              </p>
            </div>
            <div className={styles.ctaAction}>
              <Link href="/oferta" className="btn">
                WYŚLIJ ZAPYTANIE <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
