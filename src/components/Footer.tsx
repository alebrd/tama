'use client';

import { useState } from 'react';
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MapModal from "./MapModal";

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const homeHref = isEnglish ? "/en" : "/";
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.column}>
          <Link href={homeHref}>
            <Image src="/logo.png" alt="TAMA Logo" width={50} height={50} className={styles.logoImg} />
          </Link>
          <p className={styles.tagline}>TECHNO PALACE · POZNAŃ</p>
        </div>

        {isEnglish ? (
          <div className={styles.column}>
            <h4 className={styles.heading}>Navigate</h4>
            <Link href="/en/tama" className={styles.text}>TAMA</Link>
            <Link href="/en/program" className={styles.text}>Program</Link>
            <Link href="/en/venue" className={styles.text}>Venue</Link>
            <Link href="/en/merch" className={styles.text}>Merch</Link>
            <Link href="/en/awareness" className={styles.text}>Awareness</Link>
            <Link href="/en/jobs" className={styles.text}>Jobs</Link>
            <Link href="/en/contact" className={styles.text}>Contact</Link>
          </div>
        ) : (
          <div className={styles.column}>
            <h4 className={styles.heading}>Nawigacja</h4>
            <Link href="/tama" className={styles.text}>TAMA</Link>
            <Link href="/program" className={styles.text}>Program</Link>
            <Link href="/wynajem" className={styles.text}>Wynajem</Link>
            <Link href="/merch" className={styles.text}>Merch</Link>
            <Link href="/swiadomosc" className={styles.text}>Świadomość</Link>
            <Link href="/praca" className={styles.text}>Praca</Link>
            <Link href="/kontakt" className={styles.text}>Kontakt</Link>
          </div>
        )}

        <div className={styles.column}>
          <h4 className={styles.heading}>{isEnglish ? "Visit Us" : "Odwiedź nas"}</h4>
          <p className={styles.text}>Wielkopolska Izba Rzemieślnicza</p>
          <p className={styles.text}>ul. Niezłomnych 2</p>
          <p className={styles.text}>61-894 Poznań, {isEnglish ? "Poland" : "Polska"}</p>
          <button onClick={() => setIsMapOpen(true)} className={styles.mapTrigger}>
            {isEnglish ? "View location" : "Zobacz lokalizację"} ↗
          </button>
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
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.text}>
          © {new Date().getFullYear()} TAMA. {isEnglish ? "All rights reserved." : "Wszelkie prawa zastrzeżone."}
        </p>
      </div>

      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} isEnglish={isEnglish} />
    </footer>
  );
}
