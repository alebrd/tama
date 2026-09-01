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
  const homeHref = isEnglish ? "/en/tama" : "/tama";
  const [isMapOpen, setIsMapOpen] = useState(false);

  const isRootPage = pathname === "/" || pathname === "/en";

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.column}>
          {isRootPage ? (
            <div className={styles.logoGroup}>
              <Link href={homeHref} className={styles.logo}>
                <Image src="/icons/TAMA-logo.svg" alt="TAMA Logo" width={50} height={50} className={styles.logoImg} />
              </Link>
              <Link href={isEnglish ? "/en/slowclub" : "/slowclub"} className={styles.logo}>
                <div className={styles.slowLogoWrapper}>
                  <Image src="/icons/SLOW-logo.svg" alt="SLOW Logo" width={50} height={50} className={styles.slowLogoImg} />
                </div>
              </Link>
            </div>
          ) : (
            <Link href={homeHref}>
              <Image src="/icons/TAMA-logo.svg" alt="TAMA Logo" width={50} height={50} className={styles.logoImg} />
            </Link>
          )}
          <p className={styles.tagline}>
            {isEnglish ? "Music. Culture. Experience." : "Muzyka. Kultura. Doświadczenie."}
          </p>
        </div>

        {isEnglish ? (
          <div className={styles.column}>
            <h4 className={styles.heading}>Navigation</h4>
            <Link href="/en/tama" className={styles.text}>TAMA</Link>
            <Link href="/en/spaces" className={styles.text}>Spaces</Link>
            <Link href="/en/offer" className={styles.text}>Offer</Link>
            <Link href="/en/merch" className={styles.text}>Merch</Link>
            <Link href="/en/jobs" className={styles.text}>Jobs</Link>
            <Link href="/en/contact" className={styles.text}>Contact</Link>
          </div>
        ) : (
          <div className={styles.column}>
            <h4 className={styles.heading}>Nawigacja</h4>
            <Link href="/tama" className={styles.text}>TAMA</Link>
            <Link href="/przestrzen" className={styles.text}>Przestrzeń</Link>
            <Link href="/oferta" className={styles.text}>Oferta</Link>
            <Link href="/merch" className={styles.text}>Merch</Link>
            <Link href="/praca" className={styles.text}>Praca</Link>
            <Link href="/kontakt" className={styles.text}>Kontakt</Link>
          </div>
        )}

        <div className={styles.column}>
          <h4 className={styles.heading}>{isEnglish ? "Visit Us" : "Odwiedź nas"}</h4>
          <a
            href="https://maps.app.goo.gl/J83HT3NkUMGAEGSR9"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.text}
            style={{ display: "block" }}
          >
            ul. Niezłomnych 2<br />
            61-894 Poznań, {isEnglish ? "Poland" : "Polska"}
          </a>
          <button onClick={() => setIsMapOpen(true)} className={styles.mapTrigger}>
            {isEnglish ? "View location" : "Zobacz lokalizację"}
          </button>
        </div>

        <div className={styles.column}>
          <div className={styles.socialWrapper}>
            <h4 className={styles.heading} style={{ marginBottom: '0.75rem' }}>Social</h4>
            <div className={styles.socialRow}>
            <a
              href="https://www.instagram.com/tamaklub/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <Image src="/icons/Artboard10.svg" alt="Instagram" width={40} height={40} className={styles.socialIcon} />
            </a>
            <a
              href="https://www.facebook.com/tamaklub"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <Image src="/icons/Artboard9.svg" alt="Facebook" width={40} height={40} className={styles.socialIcon} />
            </a>
          </div>
          </div>
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
