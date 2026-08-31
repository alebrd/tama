import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../en/spaces/page.module.css";

export const metadata: Metadata = {
  title: "Nasze Przestrzenie — TAMA",
  description: "Zbadaj unikalne przestrzenie w TAMIE. Przestrzeń eventowa w zrewitalizowanym budynku Wielkopolskiej Izby Rzemieślniczej w Poznaniu.",
};

const spaces = [
  {
    title: "Nowa Przestrzeń SLOW",
    image: "/spaces/slow.jpg",
    desc: "Modułowa, nowoczesna przestrzeń eventowa stworzona z myślą o wydarzeniach firmowych i kulturalnych. Projekt autorstwa mode:lina™.",
    bullets: [
      "Industrialny charakter i zaawansowane rozwiązania akustyczne",
      "Idealna na wydarzenia do 150 osób"
    ]
  },
  {
    title: "Sala U'Patki",
    image: "/spaces/upatki.jpg",
    desc: "Kameralna przestrzeń o powierzchni 42 m².",
    bullets: [
      "Możliwość ustawienia stołów bankietowych i koktajlowych",
      "Dodatkowa strefa atrakcji (np. fotobudka, strefa chillout lub dance floor)"
    ]
  },
  {
    title: "Sala Żyrandolowa",
    image: "/spaces/chandelier.jpg",
    desc: "Reprezentacyjna przestrzeń o eleganckim charakterze z klasycznymi żyrandolami i parkietem.",
    bullets: [
      "Charakterystyczne witraże i duże lustra",
      "Idealna strefa na bankiet, networking lub strefę powitalną",
      "Zawiera koktajl bar oraz palarnię"
    ]
  },
  {
    title: "Sala Główna",
    image: "/spaces/main-room.jpg",
    desc: "Ponad 500 m² otwartej przestrzeni z wydzieloną sceną, barem i zapleczem technicznym.",
    bullets: [
      "Profesjonalne nagłośnienie i oświetlenie sceniczne",
      "Do dyspozycji 5 bocznych ekranów do wyświetlania grafik i animacji",
      "Dowolna aranżacja: stoliki bankietowe, koktajlowe, strefy lounge, parkiet"
    ]
  }
];

export default function PrzestrzeniePage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className={styles.eyebrow}>POZNAJ NASZĄ OFERTĘ WYNAJMU</p>
          <h1 className={`${styles.title} text-gradient`}>Nasze Przestrzenie</h1>
          <p className={styles.sub}>
            Ponad 1 000 m² zrewitalizowanej przestrzeni industrialnej, 
            umożliwiającej organizację spotkań dla grup do 900 osób.
          </p>
        </div>

        <div className={styles.spacesList}>
          {spaces.map((space, i) => (
            <div key={i} className={styles.spaceRow}>
              <div className={styles.spaceImage}>
                <Image src={space.image} alt={space.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div className={styles.spaceContent}>
                <h2 className={styles.spaceTitle}>{space.title}</h2>
                <div className={styles.spaceDesc}>
                  <p>{space.desc}</p>
                  <ul>
                    {space.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.section} style={{ marginTop: "6rem" }}>
          <h2 className={styles.sectionTitle}>Możliwe Ustawienia</h2>
          <div className={styles.setupsGrid}>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>Bankietowe</h3>
              <p className={styles.setupValue}>
                25 stołów (10-osobowych)<br/>
                Łącznie 250 miejsc siedzących
              </p>
            </div>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>Teatralne / Konferencyjne</h3>
              <p className={styles.setupValue}>
                400 miejsc siedzących
              </p>
            </div>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>Koncertowo-Eventowe</h3>
              <p className={styles.setupValue}>
                900 miejsc stojących<br/>
                lub 20 stolików + 800 stojących
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
