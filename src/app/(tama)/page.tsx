import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./root.module.css";

export const metadata: Metadata = {
  title: "TAMA x SLOW",
  description: "Dwa wymiary klubowego doświadczenia w sercu Poznania.",
};

export default function UniversalLandingPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className={`${styles.title} text-gradient`}>
            TAMA <span style={{ textTransform: "lowercase", fontSize: "0.65em", verticalAlign: "middle", padding: "0 0.5rem" }}>x</span> SLOW
          </h1>
          <p className={styles.sub}>Dwa wymiary. Jedno miejsce.</p>
        </div>
        <div className={styles.glow} />
      </section>

      {/* Split Section */}
      <section>
        <div className="container">
          <div className={styles.grid}>
            {/* TAMA */}
            <div className={`${styles.card} ${styles.cardTama}`}>
              <Image src="/logo.png" alt="TAMA Logo" width={80} height={80} className={styles.cardLogo} />
              <h2 className={styles.cardTitle}>TAMA</h2>
              <p className={styles.cardText}>
                Główna scena. Surowa, potężna przestrzeń industrialna zaprojektowana dla największych wydarzeń muzycznych i kulturalnych. Z pojemnością do 1 300 gości, spektakularnym nagłośnieniem i bezkompromisowym charakterem.
              </p>
              <div className={styles.actionRow}>
                <Link href="/tama" className="btn btn-outline">
                  ODKRYJ TAMĘ
                </Link>
              </div>
            </div>

            {/* SLOW */}
            <div className={`${styles.card} ${styles.cardSlow}`}>
              <Image src="/slow-logo.jpg" alt="SLOW Logo" width={80} height={80} className={styles.cardLogo} />
              <h2 className={styles.cardTitle}>SLOW</h2>
              <p className={styles.cardText}>
                Intymny klub z audiofilskim nagłośnieniem. Stworzony dla głębszych doświadczeń muzycznych, selekcjonowanych brzmień i bliskiego kontaktu z artystą. Zupełnie inny wymiar w tych samych murach.
              </p>
              <div className={styles.actionRow}>
                <Link href="/slowclub" className="btn btn-outline">
                  ODKRYJ SLOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
