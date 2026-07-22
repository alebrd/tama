import type { Metadata } from "next";
import Link from "next/link";
import styles from "../en/venue/page.module.css";
import VenueGallery from "@/components/VenueGallery";

export const metadata: Metadata = {
  title: "Wynajem — TAMA",
  description: "Zorganizuj swoje wydarzenie w TAMIE — industrialna przestrzeń eventowa w sercu Poznania dla do 1 000 gości.",
};

const stats = [
  { value: "5", label: "Sale konferencyjne" },
  { value: "1 000", label: "Maks. gości" },
  { value: "1 000 m²", label: "Łączna powierzchnia" },
  { value: "Centrum", label: "Lokalizacja w Poznaniu" },
];

const eventTypes = [
  "Imprezy firmowe",
  "Konferencje",
  "Gale i bankiety",
  "Koncerty i pokazy",
  "Pokazy mody",
  "Szkolenia i warsztaty",
  "Targi",
  "Spotkania branżowe",
];

export default function WynajemPage() {
  return (
    <div className={styles.page}>
      <div className="container">

        {/* Hero */}
        <div className={styles.hero}>
          <p className={styles.eyebrow}>PRZESTRZEŃ EVENTOWA · POZNAŃ</p>
          <h1 className={`${styles.title} text-gradient`}>Zorganizuj Swoje Wydarzenie</h1>
          <p className={styles.sub}>
            Imprezy firmowe, konferencje, gale, koncerty i wiele więcej —
            wszystko pod jednym industrialnym dachem w sercu Poznania.
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
          <h2 className={styles.sectionTitle}>Co Organizujemy</h2>
          <div className={styles.tagGrid}>
            {eventTypes.map((type) => (
              <span key={type} className={`${styles.tag} glass`}>{type}</span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className={styles.section}>
          <div className={`${styles.descBlock} glass`}>
            <h2 className={styles.sectionTitle}>Przestrzeń</h2>
            <p className={styles.desc}>
              TAMA mieści się w zrewitalizowanym, 90-letnim budynku — dawnej sali reprezentacyjnej{" "}
              <em>Wielkopolskiej Izby Rzemieślniczej</em>. Industrialne wnętrze, elastyczny układ
              i profesjonalna infrastruktura techniczna sprawiają, że jest to idealne miejsce na
              szeroki zakres wydarzeń — od kameralnych warsztatów po wielkie gale.
            </p>
            <p className={styles.desc}>
              Obiekt dysponuje 5 salami o różnych rozmiarach, mieszczącymi od 20 do 1 000
              uczestników. Każda przestrzeń wyposażona jest w profesjonalne nagłośnienie i oświetlenie
              sceniczne oraz może być zaaranżowana według indywidualnych potrzeb organizatora —
              w układzie teatralnym, bankietowym lub open floor.
            </p>
            <p className={styles.desc}>
              Zlokalizowana przy ul. Niezłomnych 2 — zaledwie 1 km od dworca Poznań Główny
              i Międzynarodowych Targów Poznańskich (MTP), w sąsiedztwie hoteli i parkingów.
            </p>
            <div className={styles.cta}>
              <a
                href="mailto:katya@tamaklub.pl"
                className="btn"
                id="wynajem-enquire-btn"
              >
                ZAPYTAJ →
              </a>
              <Link
                href="/kontakt"
                className="btn btn-outline glass"
                id="wynajem-contact-btn"
              >
                KONTAKT
              </Link>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Galeria</h2>
          <VenueGallery isEnglish={false} />
        </div>

      </div>
    </div>
  );
}
