'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Navbar.module.css";

const plLinks = [
  { href: "/tama", label: "TAMA" },
  { href: "/program", label: "Program" },
  { href: "/wynajem", label: "Wynajem" },
  { href: "/merch", label: "Merch" },
  { href: "/swiadomosc", label: "Świadomość" },
  { href: "/kontakt", label: "Kontakt" },
];

const enLinks = [
  { href: "/en/tama", label: "TAMA" },
  { href: "/en/program", label: "Program" },
  { href: "/en/venue", label: "Venue" },
  { href: "/en/merch", label: "Merch" },
  { href: "/en/awareness", label: "Awareness" },
  { href: "/en/contact", label: "Contact" },
];

const pathMap: Record<string, string> = {
  "/": "/en",
  "/tama": "/en/tama",
  "/program": "/en/program",
  "/wynajem": "/en/venue",
  "/merch": "/en/merch",
  "/swiadomosc": "/en/awareness",
  "/praca": "/en/jobs",
  "/kontakt": "/en/contact",
  "/en": "/",
  "/en/tama": "/tama",
  "/en/program": "/program",
  "/en/venue": "/wynajem",
  "/en/merch": "/merch",
  "/en/awareness": "/swiadomosc",
  "/en/jobs": "/praca",
  "/en/contact": "/kontakt",
};

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isEnglish = pathname.startsWith("/en");
  const links = isEnglish ? enLinks : plLinks;
  const homeHref = isEnglish ? "/en" : "/";
  const alternatePath = pathMap[pathname] ?? (isEnglish ? "/" : "/en");

  const plHref = isEnglish ? alternatePath : pathname;
  const enHref = isEnglish ? pathname : alternatePath;

  return (
    <header className={`${styles.header} glass`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href={homeHref} className={styles.logo} onClick={() => setMenuOpen(false)}>
          <Image src="/logo.png" alt="TAMA Logo" width={50} height={50} className={styles.logoImg} />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.navLinks}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.link} ${pathname === href ? styles.active : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right side: Lang switcher + Hamburger */}
        <div className={styles.navRight}>
          <div className={styles.langSwitcher}>
            <Link href={plHref} className={`${styles.langBtn} ${!isEnglish ? styles.langActive : ""}`}>
              PL
            </Link>
            <span className={styles.langDivider}>·</span>
            <Link href={enHref} className={`${styles.langBtn} ${isEnglish ? styles.langActive : ""}`}>
              EN
            </Link>
          </div>

          <button
            id="hamburger-btn"
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.mobileNav}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.mobileLink} ${pathname === href ? styles.active : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className={styles.mobileLang}>
            <Link href={plHref} className={`${styles.langBtn} ${!isEnglish ? styles.langActive : ""}`} onClick={() => setMenuOpen(false)}>
              PL
            </Link>
            <span className={styles.langDivider}>·</span>
            <Link href={enHref} className={`${styles.langBtn} ${isEnglish ? styles.langActive : ""}`} onClick={() => setMenuOpen(false)}>
              EN
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
