import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StatsCounter from "@/components/StatsCounter";
import EventShowcaseGallery from "@/components/EventShowcaseGallery";
import styles from "./root.module.css";

export const metadata: Metadata = {
  title: "TAMA x SLOW",
  description: "Dwa wymiary klubowego doświadczenia w sercu Poznania.",
};

const spaces = [
  {
    name: "Sala Główna",
    cap: "Do 1 000 osób · Scena · VIP",
    desc: "Ponad 500 m² otwartej przestrzeni industrialnej z profesjonalną sceną i zapleczem technicznym.",
    image: "/spaces/main-room.jpg",
    href: "/przestrzen",
  },
  {
    name: "Klub SLOW",
    cap: "Do 150 osób · Sound System",
    desc: "Modułowa, nowoczesna przestrzeń klubowa stworzona z myślą o wydarzeniach firmowych i kulturalnych.",
    image: "/spaces/slow.jpg",
    href: "/slowclub",
  },
  {
    name: "Sala Żyrandolowa",
    cap: "Do 250 osób · Koktajl Bar",
    desc: "Reprezentacyjna przestrzeń z klasycznymi żyrandolami, witrażami, parkietem i barem koktajlowym.",
    image: "/spaces/chandelier.jpg",
    href: "/przestrzen",
  },
  {
    name: "Sala U'Patki",
    cap: "Do 40 osób · 42 m²",
    desc: "Kameralna przestrzeń idealna na strefę powitalną, lounge, VIP lub dodatkową atrakcję.",
    image: "/spaces/upatki.jpg",
    href: "/przestrzen",
  },
];

export default function UniversalLandingPage() {
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
          <p className={styles.sub}>Dwa wymiary. Jedno miejsce.</p>
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

      {/* Spaces Showcase Section */}
      <section className={styles.spacesSection}>
        <div className="container">
          <div className={styles.spacesHeader}>
            <div>
              <p className={styles.spacesEyebrow}>PRZESTRZENIE</p>
              <h2 className={`${styles.spacesTitle} text-gradient`}>
                Cztery nastroje. Jedna lokalizacja.
              </h2>
              <p className={styles.spacesSub}>
                Ponad 1 100 m² zrewitalizowanej przestrzeni industrialnej w centrum Poznania.
              </p>
            </div>
            <div className={styles.spacesAction}>
              <Link href="/przestrzen" className="btn btn-outline">
                POZNAJ WSZYSTKIE PRZESTRZENIE <span className="btn-arrow">→</span>
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
                    SZCZEGÓŁY <span className="btn-arrow">→</span>
                  </span>
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
        eyebrow="WYDARZENIA"
        title="Wydarzenia, które tu były."
      />
    </div>
  );
}
