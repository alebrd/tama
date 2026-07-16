import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <h1 className="text-gradient">TAMA</h1>
          <p className={styles.subtitle}>
            Poznań&apos;s premier techno and electronic music club.
            <br />
            Open every Friday and Saturday.
          </p>
          <div className={styles.cta}>
            <Link href="/en/program" className="btn">
              PROGRAM
            </Link>
            <Link href="/en/tama" className="btn btn-outline glass">
              ABOUT TAMA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}