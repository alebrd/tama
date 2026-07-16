import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.column}>
          <div className={styles.logoBox}>
            <div className={styles.logoRow}><span>T</span><span>A</span></div>
            <div className={styles.logoRow}><span>M</span><span>A</span></div>
          </div>
          <p className={styles.tagline}>TECHNO PALACE · POZNAŃ</p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>Navigate</h4>
          <Link href="/en/tama" className={styles.text}>TAMA</Link>
          <Link href="/en/program" className={styles.text}>Program</Link>
          <Link href="/en/shop" className={styles.text}>Shop</Link>
          <Link href="/en/awareness" className={styles.text}>Awareness</Link>
          <Link href="/en/jobs" className={styles.text}>Jobs</Link>
          <Link href="/en/contact" className={styles.text}>Contact</Link>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>Visit Us</h4>
          <p className={styles.text}>Wielkopolska Izba Rzemieślnicza</p>
          <p className={styles.text}>ul. Niezłomnych 2</p>
          <p className={styles.text}>61-894 Poznań, Poland</p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>Social</h4>
          <a
            href="https://www.instagram.com/tamaklub/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.text}
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/tamaklub"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.text}
          >
            Facebook
          </a>
          <a href="mailto:joanna@tamaklub.pl" className={styles.text}>
            joanna@tamaklub.pl
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.text}>© {new Date().getFullYear()} TAMA. All rights reserved.</p>
      </div>
    </footer>
  );
}
