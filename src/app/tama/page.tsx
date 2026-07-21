import type { Metadata } from "next";
import styles from "../en/tama/page.module.css";
import MapTrigger from "@/components/MapTrigger";

export const metadata: Metadata = {
  title: "TAMA — Klub",
  description: "Historia i tożsamość TAMY, wiodącego klubu techno w Poznaniu.",
};

export default function TamaPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={`${styles.title} text-gradient`}>TAMA</h1>
          <p className={styles.sub}>Techno Palace · Poznań, Polska</p>
        </div>
        <div className={styles.glow} />
      </section>

      {/* Body */}
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.card} glass`}>
            <h2 className={styles.cardTitle}>Miejsce</h2>
            <p className={styles.cardText}>
              Zlokalizowana w zrewitalizowanym, 90-letnim budynku — dawnej sali reprezentacyjnej{" "}
              <em>Wielkopolskiej Izby Rzemieślniczej</em> — TAMA to coś więcej niż klub. To żywy
              pomnik industrialnej przeszłości Poznania, przekształcony w przestrzeń dla dźwięku,
              ruchu i społeczności.
            </p>
            <p className={styles.cardText}>
              Zajmując ponad 1 000 m² surowej industrialnej przestrzeni, klub wyposażony jest
              w profesjonalne systemy nagłośnienia i nowoczesne oświetlenie sceniczne, stworzone
              z myślą o immersyjnych wieczorach klubowych i koncertach.
            </p>
          </div>

          <div className={`${styles.card} glass`}>
            <h2 className={styles.cardTitle}>Muzyka</h2>
            <p className={styles.cardText}>
              TAMA jest znana w środowisku nocnego życia z niezachwianego zaangażowania w muzykę
              elektroniczną — techno, house i wszystko pomiędzy. Regularnie plasując się w czołówce
              najlepszych klubów w Polsce, gostimy zarówno artystów o międzynarodowej renomie,
              jak i najlepszych lokalnych twórców.
            </p>
            <p className={styles.cardText}>
              Od serii <em>OBSESSION</em> po letnie edycje open-air — każde wydarzenie jest
              tworzone z myślą o przekraczaniu granic tego, czym może być noc w klubie.
            </p>
          </div>

          <div className={`${styles.card} glass`}>
            <h2 className={styles.cardTitle}>Społeczność</h2>
            <p className={styles.cardText}>
              TAMA powstała przez i dla poznańskiej społeczności twórczej. Wierzymy w budowanie
              przestrzeni, gdzie artyści, tancerze i miłośnicy muzyki mogą gromadzić się bez
              osądzania — miejsca, które należy do wszystkich w równym stopniu.
            </p>
          </div>

          <div className={`${styles.card} glass`}>
            <h2 className={styles.cardTitle}>Znajdź nas</h2>
            <p className={styles.cardText}>
              ul. Niezłomnych 2<br />
              61-894 Poznań, Polska
            </p>
            <p className={styles.cardText}>
              Około 1 km od dworca Poznań Główny i Międzynarodowych Targów Poznańskich (MTP).
            </p>
            <div className={styles.mapLinksWrapper}>
              <MapTrigger isEnglish={false} className={styles.mapLink} />
              <a
                href="https://maps.app.goo.gl/J83HT3NkUMGAEGSR9"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                Otwórz w Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
