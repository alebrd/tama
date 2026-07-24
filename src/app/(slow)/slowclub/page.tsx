import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SLOW — The other side of TAMA",
  description: "Slow Club Poznań",
};

export default function SlowHomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/slow/summer-break.jpg"
            alt="Slow Background"
            fill
            className={styles.bgImage}
            priority
          />
          <div className={styles.bgOverlay} />
        </div>
        
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.logoWrapper}>
            <Image
              src="/slow/neon-logo.png"
              alt="SLOW Neon Sign"
              width={600}
              height={200}
              className={styles.heroNeonLogo}
              priority
            />
          </div>
          <h1 className={`text-gradient-slow ${styles.title}`}>THE OTHER SIDE OF TAMA</h1>
          <p className={styles.subtitle}>
            Tu tempo równa się rytmowi serca, a klimat przenosi Was poza codzienność.<br />
            <strong>ONLY HOUSE MUSIC</strong>
          </p>
          <div className={styles.actions}>
            <Link href="/slowclub/program" className="btn-slow">Program</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
