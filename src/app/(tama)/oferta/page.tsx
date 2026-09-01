import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../en/offer/page.module.css";
import VenueGallery from "@/components/VenueGallery";

export const metadata: Metadata = {
  title: "Oferta — TAMA",
  description: "Zorganizuj swoje wydarzenie w TAMIE — industrialna przestrzeń eventowa w sercu Poznania dla do 1 000 gości.",
};

const stats = [
  { value: "5", label: "Sale konferencyjne" },
  { value: "1 000", label: "Maks. gości" },
  { value: "1 100 m²", label: "Łączna powierzchnia" },
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

        {/* Location */}
        <div className={styles.section}>
          <div className={`${styles.descBlock} glass`}>
            <h2 className={styles.sectionTitle}>Lokalizacja</h2>
            <p className={styles.desc}>
              TAMA znajduje się w samym sercu Poznania, zaledwie kilka minut od Dworca Głównego PKP oraz Międzynarodowych Targów Poznańskich. Dogodna lokalizacja zapewnia łatwy dojazd zarówno uczestnikom wydarzeń, jak i organizatorom. W bezpośrednim sąsiedztwie znajdują się liczne hotele o zróżnicowanym standardzie oraz parkingi, co sprawia, że TAMA jest idealnym miejscem do organizacji wydarzeń lokalnych i ogólnopolskich.
            </p>

            <div className={styles.locationBox}>
              <div className={styles.locationAddress}>ul. Niezłomnych 2, 61-894 Poznań</div>
              <div className={styles.transitGrid}>
                <div className={styles.transitItem}>
                  <Image src="/icons/Artboard4.svg" alt="Train" width={56} height={56} className={styles.transitIcon} />
                  <div>
                    <div className={styles.transitLabel}>Dworzec PKP</div>
                    <div className={styles.transitValue}>0,8 km</div>
                  </div>
                </div>
                <div className={styles.transitItem}>
                  <Image src="/icons/Artboard5.svg" alt="Airport" width={56} height={56} className={styles.transitIcon} />
                  <div>
                    <div className={styles.transitLabel}>Lotnisko Poznań-Ławica</div>
                    <div className={styles.transitValue}>6,4 km</div>
                  </div>
                </div>
                <div className={styles.transitItem}>
                  <Image src="/icons/Artboard6.svg" alt="Public Transport" width={56} height={56} className={styles.transitIcon} />
                  <div>
                    <div className={styles.transitLabel}>Dojazd komunikacją miejską</div>
                    <div className={styles.transitValue}>Autobus, Tramwaj</div>
                  </div>
                </div>
              </div>
            </div>

            <iframe
              src="https://maps.google.com/maps?q=TAMA%20Klub%20Poznan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className={styles.mapEmbed}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TAMA Poznań Map"
            />
          </div>
        </div>

        {/* Description */}
        <div className={styles.section}>
          <div className={`${styles.descBlock} glass`}>
            <h2 className={styles.sectionTitle}>Przestrzeń</h2>
            <p className={styles.desc}>
              Stwórz wydarzenie dopasowane do swojej wizji.
            </p>
            <p className={styles.desc}>
              Klub TAMA to nowoczesne i klimatyczne miejsce w samym sercu Poznania, idealne do organizacji różnorodnych wydarzeń – od imprez firmowych, konferencji, szkoleń, targów, bankietów i gal po koncerty, pokazy mody czy spotkania branżowe.
            </p>
            <p className={styles.desc}>
              Nasz zespół pomoże Ci zaplanować każdy etap realizacji, dobierając przestrzeń, układ sali, zaplecze techniczne oraz ofertę gastronomiczną do charakteru wydarzenia.
            </p>
            <p className={styles.desc}>
              Opowiedz nam o swoim pomyśle, a przygotujemy ofertę dopasowaną do Twoich potrzeb.
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

                {/* Setups */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Możliwe Ustawienia</h2>
          <div className={styles.setupsGrid}>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>
                Bankietowe
                <Image src="/icons/Artboard3.svg" alt="Bankietowe" width={32} height={32} className={styles.setupIcon} />
              </h3>
              <p className={styles.setupValue}>
                25 stołów (10-osobowych)<br/>
                Łącznie 250 miejsc siedzących
              </p>
            </div>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>
                Teatralne / Konferencyjne
                <Image src="/icons/Artboard2.svg" alt="Teatralne" width={32} height={32} className={styles.setupIcon} />
              </h3>
              <p className={styles.setupValue}>
                400 miejsc siedzących
              </p>
            </div>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>
                Koncertowo-Eventowe
                <Image src="/icons/Artboard1.svg" alt="Koncertowo" width={32} height={32} className={styles.setupIcon} />
              </h3>
              <p className={styles.setupValue}>
                1 000 miejsc stojących<br/>
                lub 20 stolików + 800 stojących
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className={styles.section} style={{ marginTop: "6rem" }}>
          <h2 className={styles.sectionTitle}>Galeria</h2>
          <VenueGallery isEnglish={false} />
        </div>

      </div>
    </div>
  );
}
