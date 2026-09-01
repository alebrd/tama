import type { Metadata } from "next";
import Link from "next/link";
import styles from "../en/tama/page.module.css";

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
          <p className={styles.sub}>Muzyka. Kultura. Doświadczenie.</p>
        </div>
        <div className={styles.glow} />
      </section>

      {/* Body */}
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Miejsce</h2>
            <p className={styles.cardText}>
              TAMA to wyjątkowa przestrzeń eventowa w sercu Poznania, mieszcząca się w zrewitalizowanym, 90-letnim budynku dawnej Wielkopolskiej Izby Rzemieślniczej. Historyczna architektura i industrialny charakter tworzą niepowtarzalne tło dla wydarzeń biznesowych i kulturalnych.
            </p>
            <p className={styles.cardText}>
              Ponad 1 300 m² elastycznej przestrzeni, profesjonalne zaplecze techniczne, nagłośnienie i oświetlenie pozwalają na organizację zarówno kameralnych spotkań, jak i dużych wydarzeń dla kilkuset osób.
            </p>
            <p className={styles.cardText}>
              Konferencje, bankiety, gale, premiery, wydarzenia firmowe czy niestandardowe realizacje — TAMA daje przestrzeń i możliwości dopasowane do potrzeb każdego wydarzenia.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Muzyka</h2>
            <p className={styles.cardText}>
              TAMA to przestrzeń z wieloletnim doświadczeniem w realizacji koncertów i wydarzeń muzycznych o różnej skali.
            </p>
            <p className={styles.cardText}>
              Profesjonalne nagłośnienie, scena, oświetlenie i kompleksowe zaplecze techniczne pozwalają nam dopasować rozwiązania do charakteru i potrzeb każdego wydarzenia.
            </p>
            <p className={styles.cardText}>
              Od kameralnych występów po duże produkcje — TAMA łączy przestrzeń, technologię i doświadczenie.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Społeczność</h2>
            <p className={styles.cardText}>
              TAMA od początku jest miejscem tworzonym wokół ludzi, muzyki i wspólnych doświadczeń. Przez lata stała się ważnym punktem na kulturalnej i muzycznej mapie Poznania, współpracując z artystami, organizatorami, markami i lokalnymi twórcami.
            </p>
            <p className={styles.cardText}>
              TAMA to nie tylko przestrzeń — to doświadczenie, ludzie i społeczność, która ją tworzy.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Zorganizuj Wydarzenie</h2>
            <p className={styles.cardText}>
              Ponad 1 300 m² industrialnej przestrzeni, profesjonalne zaplecze techniczne i doświadczenie w realizacji wydarzeń dla nawet 1 300 gości.
            </p>
            <p className={styles.cardText}>
              Konferencje, gale, bankiety, koncerty, premiery produktów i niestandardowe projekty — TAMA daje przestrzeń i możliwości, by stworzyć wydarzenie dopasowane do Twoich potrzeb.
            </p>
            <Link href="/wynajem" className={styles.venueLink}>
              POZNAJ MOŻLIWOŚCI →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
