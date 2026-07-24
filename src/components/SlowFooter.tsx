'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./SlowFooter.module.css";
import MapModal from "./MapModal";

export default function SlowFooter() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const homeHref = isEnglish ? "/en/slowclub" : "/slowclub";
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.column}>
          <Link href={homeHref}>
            <Image src="/slow/logo.png" alt="SLOW Logo" width={50} height={50} className={styles.logoImg} />
          </Link>
          <p className={styles.tagline}>THE OTHER SIDE OF TAMA.</p>
        </div>

        {isEnglish ? (
          <div className={styles.column}>
            <h4 className={styles.heading}>Navigate</h4>
            <Link href="/en/slowclub" className={styles.text}>SLOW</Link>
            <Link href="/en/slowclub/program" className={styles.text}>Program</Link>
            <Link href="/en/slowclub/contact" className={styles.text}>Contact</Link>
            <Link href="/en" className={styles.tamaLink}>TAMA</Link>
          </div>
        ) : (
          <div className={styles.column}>
            <h4 className={styles.heading}>Nawigacja</h4>
            <Link href="/slowclub" className={styles.text}>SLOW</Link>
            <Link href="/slowclub/program" className={styles.text}>Program</Link>
            <Link href="/slowclub/kontakt" className={styles.text}>Kontakt</Link>
            <Link href="/" className={styles.tamaLink}>TAMA</Link>
          </div>
        )}

        <div className={styles.column}>
          <h4 className={styles.heading}>{isEnglish ? "Visit Us" : "Odwiedź nas"}</h4>
          <p className={styles.text}>Wielkopolska Izba Rzemieślnicza</p>
          <p className={styles.text}>ul. Niezłomnych 2</p>
          <p className={styles.text}>61-894 Poznań, {isEnglish ? "Poland" : "Polska"}</p>
          <button onClick={() => setIsMapOpen(true)} className={styles.mapTrigger}>
            {isEnglish ? "View location" : "Zobacz lokalizację"}
          </button>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>Social</h4>
          <a
            href="https://www.instagram.com/slowclubpoznan/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.text}
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/slowclubpoznan"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.text}
          >
            Facebook
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.text}>
          © {new Date().getFullYear()} SLOW CLUB POZNAŃ. {isEnglish ? "All rights reserved." : "Wszelkie prawa zastrzeżone."}
        </p>
      </div>

      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} isEnglish={isEnglish} />
    </footer>
  );
}
