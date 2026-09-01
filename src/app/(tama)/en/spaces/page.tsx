import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Our Spaces — TAMA",
  description: "Discover the unique interiors of TAMA. Event space in the revitalized building of the Wielkopolska Chamber of Crafts in Poznań.",
};

const spaces = [
  {
    title: "New SLOW Space",
    image: "/spaces/slow.jpg",
    desc: "Modular, modern event space designed for corporate and cultural events. Designed by mode:lina™.",
    bullets: [
      "Industrial character and advanced acoustic solutions",
      "Ideal space for events up to 150 people"
    ]
  },
  {
    title: "U'Patka Room",
    image: "/spaces/upatki.jpg",
    desc: "An intimate space of 42 m².",
    bullets: [
      "Possibility of setting up banquet and cocktail tables",
      "Can serve as an additional event attraction zone (e.g., photo booth, chillout zone, or dance floor)"
    ]
  },
  {
    title: "Chandelier Room",
    image: "/spaces/chandelier.jpg",
    desc: "A representative space with an elegant character, classic chandeliers and a dance floor.",
    bullets: [
      "Characteristic stained glass windows and large mirrors",
      "Ideal zone for a banquet, networking or welcome area",
      "Includes a cocktail bar and a smoking room"
    ]
  },
  {
    title: "Main Room",
    image: "/spaces/main-room.jpg",
    desc: "Over 500 m² of open space with a dedicated stage, bar, and technical facilities.",
    bullets: [
      "Equipped with professional sound and stage lighting",
      "5 side screens available for displaying graphics or animations",
      "Any setup arrangement: banquet tables, cocktail tables, lounge zones, dance floor"
    ]
  }
];

export default function SpacesPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className={styles.eyebrow}>DISCOVER OUR RENTAL OFFER</p>
          <h1 className={`${styles.title} text-gradient`}>Our Spaces</h1>
          <p className={styles.sub}>
            Over 1,100 m² of revitalized industrial space, 
            enabling the organization of meetings for groups up to 1,000 people.
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
          <h2 className={styles.sectionTitle}>Possible Setups</h2>
          <div className={styles.setupsGrid}>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>
                Banquet
                <Image src="/icons/Artboard3.svg" alt="Banquet" width={32} height={32} className={styles.setupIcon} />
              </h3>
              <p className={styles.setupValue}>
                25 tables (10-person)<br/>
                Total of 250 seated places
              </p>
            </div>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>
                Theater / Conference
                <Image src="/icons/Artboard2.svg" alt="Theater" width={32} height={32} className={styles.setupIcon} />
              </h3>
              <p className={styles.setupValue}>
                400 seated places
              </p>
            </div>
            <div className={styles.setupCard}>
              <h3 className={styles.setupTitle}>
                Concert / Event
                <Image src="/icons/Artboard1.svg" alt="Concert" width={32} height={32} className={styles.setupIcon} />
              </h3>
              <p className={styles.setupValue}>
                1,000 standing places<br/>
                or 20 tables + 800 standing
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
