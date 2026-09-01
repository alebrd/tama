'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./SlowNavbar.module.css";

const plLinks = [
  { href: "/", label: "Home", special: true },
  { href: "/slowclub", label: "SLOW", special: false },
  { href: "/tama", label: "TAMA", special: true },
  { href: "/slowclub/kontakt", label: "Kontakt", special: false },
];

const enLinks = [
  { href: "/en", label: "Home", special: true },
  { href: "/en/slowclub", label: "SLOW", special: false },
  { href: "/en/tama", label: "TAMA", special: true },
  { href: "/en/slowclub/contact", label: "Contact", special: false },
];

const pathMap: Record<string, string> = {
  "/slowclub": "/en/slowclub",
  "/slowclub/kontakt": "/en/slowclub/contact",
  "/en/slowclub": "/slowclub",
  "/en/slowclub/contact": "/slowclub/kontakt",
};

export default function SlowNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isEnglish = pathname.startsWith("/en");
  const links = isEnglish ? enLinks : plLinks;
  const homeHref = isEnglish ? "/en/slowclub" : "/slowclub";
  const alternatePath = pathMap[pathname] ?? (isEnglish ? "/slowclub" : "/en/slowclub");

  const plHref = isEnglish ? alternatePath : pathname;
  const enHref = isEnglish ? pathname : alternatePath;

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.navContainer}`}>
          <Link href={homeHref} className={styles.logo} onClick={() => setMenuOpen(false)}>
            <Image src="/icons/SLOW-logo.svg" alt="SLOW Logo" width={50} height={50} className={styles.logoImg} />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.navLinks}>
            {links.map(({ href, label, special }) => (
              <Link
                key={href}
                href={href}
                className={`${special ? styles.tamaLink : styles.link} ${pathname === href ? styles.active : ""}`}
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
      </header>

      {/* Mobile Overlay — outside header to avoid iOS backdrop-filter containment */}
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.mobileNav}>
          {links.map(({ href, label, special }) => (
            <Link
              key={href}
              href={href}
              className={`${special ? styles.mobileTamaLink : styles.mobileLink} ${pathname === href ? styles.active : ""}`}
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
    </>
  );
}
