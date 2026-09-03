import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../en/tama/page.module.css";

export const metadata: Metadata = {
  title: "TAMA — Klub",
  description: "Historia i tożsamość TAMY, wiodącego klubu muzyki elektronicznej i przestrzeni koncertowej w Poznaniu.",
};

export default function TamaPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        {/* Hero */}
        <section className={styles.hero}>
          <p className={styles.eyebrow}>POZNAŃ · EST. 2017</p>
          <h1 className={`${styles.title} text-gradient`}>TAMA</h1>
          <p className={styles.sub}>Dom muzyki elektronicznej i kultury klubowej.</p>
        </section>

        {/* Hero Banner Image */}
        <div className={styles.heroBanner}>
          <Image
            src="/spaces/main-hall.jpg"
            alt="TAMA Główna Sala"
            fill
            priority
            className={styles.bannerImage}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        {/* Editorial Section 1: Architecture & Heritage */}
        <section className={styles.editorialSection}>
          <div className={styles.editorialContent}>
            <span className={styles.sectionEyebrow}>1929 · DZIEDZICTWO</span>
            <h2 className={styles.sectionTitle}>Architektura i Przestrzeń</h2>
            <p className={styles.bodyText}>
              TAMA mieści się w zabytkowym, 90-letnim gmachu dawnej Wielkopolskiej Izby Rzemieślniczej w centrum Poznania. Ponad 1 100 m² kubatury, surowy beton, cegła i monumentalne żyrandole tworzą unikalną tożsamość architektoniczną.
            </p>
            <p className={styles.bodyText}>
              Zabytkowy charakter łączy się z zaawansowaną adaptacją akustyczną i modułowym podziałem sal — od potężnej Sali Głównej po kameralne przestrzenie klubowe i strefy odpoczynku.
            </p>
          </div>
          <div className={styles.editorialImageWrap}>
            <Image
              src="/spaces/chandelier.jpg"
              alt="Sala Żyrandolowa TAMA"
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
              alt="Scena TAMA"
              fill
              className={styles.editorialImage}
              sizes="(max-width: 900px) 100vw, 500px"
            />
          </div>
          <div className={styles.editorialContent}>
            <span className={styles.sectionEyebrow}>AKUSTYKA · SCENA</span>
            <h2 className={styles.sectionTitle}>Dźwięk i Noc</h2>
            <p className={styles.bodyText}>
              Przestrzeń stworzona do wielogodzinnego, bezkompromisowego odbioru muzyki. Precyzyjne nagłośnienie koncertowe, dedykowana reżyseria świateł oraz parkiet funkcjonujący bez barier do białego rana.
            </p>
            <p className={styles.bodyText}>
              Od 2017 roku TAMA gości czołowych reprezentantów międzynarodowej sceny techno, house i muzyki elektronicznej, współtworząc nocny krajobraz kulturalny Poznania.
            </p>
          </div>
        </section>

        {/* Section 3: Ethos / Manifesto Block */}
        <section className={styles.manifestoBlock}>
          <span className={styles.sectionEyebrow}>TOŻSAMOŚĆ</span>
          <h2 className={styles.manifestoTitle}>Surowy beton. Selekcja dźwięku. Parkiet.</h2>
          <p className={styles.manifestoText}>
            TAMA powstała z pasji do kultury undergroundowej. Bez sztucznych póz i korporacyjnych kompromisów — liczy się wyłącznie muzyka, wolność ekspresji i społeczność połączona wspólnym rytmem do białego rana.
          </p>
        </section>

        {/* Section 4: Dedicated Rental Callout */}
        <section className={styles.rentalSection}>
          <div className={styles.rentalContent}>
            <span className={styles.sectionEyebrow}>WYNAJEM · PRODUKCJA B2B</span>
            <h2 className={styles.rentalTitle}>Zorganizuj Wydarzenie</h2>
            <p className={styles.rentalText}>
              Ponad 1 100 m² industrialnej kubatury, profesjonalne zaplecze techniczne i możliwość adaptacji przestrzeni dla nawet 1 000 gości — od konferencji i gal po koncerty i produkcje niestandardowe.
            </p>
          </div>
          <div className={styles.rentalAction}>
            <Link href="/oferta" className="btn">
              POZNAJ OFERTĘ →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

