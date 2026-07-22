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
              src="/slow/logo.png"
              alt="SLOW Logo"
              width={200}
              height={200}
              className={styles.heroLogo}
              priority
            />
          </div>
          <h1 className={`text-gradient-slow ${styles.title}`}>THE OTHER SIDE OF TAMA</h1>
          <p className={styles.subtitle}>Poznań&apos;s newest intimate clubbing experience. We are taking a summer break, but we&apos;ll be back in September.</p>
          <div className={styles.actions}>
            <Link href="/slowclub/program" className="btn-slow">Program</Link>
          </div>
        </div>
      </section>

      <section className={`container ${styles.bannerSection}`}>
        <div className={styles.bannerWrapper}>
          <Image
            src="/slow/summer-break-banner.jpg"
            alt="Slow Summer Break"
            fill
            className={styles.bannerImage}
            sizes="100vw"
          />
        </div>
      </section>
    </div>
  );
}
