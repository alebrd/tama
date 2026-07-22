import Link from "next/link";
import Image from "next/image";
import styles from "./SlowFooter.module.css";

export default function SlowFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.logoCol}>
          <Image src="/slow/logo.png" alt="SLOW Logo" width={80} height={80} className={styles.logoImg} />
          <p className={styles.tagline}>The other side of TAMA.</p>
        </div>
        
        <div className={styles.linksCol}>
          <h4>Links</h4>
          <Link href="/slowclub/program">Program</Link>
          <Link href="/slowclub/kontakt">Kontakt</Link>
          <Link href="/" className={styles.tamaLink}>TAMA ↗</Link>
        </div>
        
        <div className={styles.contactCol}>
          <h4>Contact</h4>
          <p>ul. Niezłomnych 2</p>
          <p>61-894 Poznań</p>
          <a href="mailto:hello@tamaklub.pl">hello@tamaklub.pl</a>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className="container">
          <p>© {new Date().getFullYear()} SLOW CLUB POZNAŃ. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
