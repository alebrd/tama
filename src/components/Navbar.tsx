'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const plLinks = [
  { href: "/", label: "Home" },
  { href: "/tama", label: "TAMA" },
  { href: "/przestrzen", label: "Przestrzeń" },
  { href: "/oferta", label: "Oferta" },
  { href: "/kontakt", label: "Kontakt" },
];

const enLinks = [
  { href: "/en", label: "Home" },
  { href: "/en/tama", label: "TAMA" },
  { href: "/en/spaces", label: "Spaces" },
  { href: "/en/offer", label: "Offer" },
  { href: "/en/contact", label: "Contact" },
];

const pathMap: Record<string, string> = {
  "/": "/en",
  "/tama": "/en/tama",
  "/przestrzen": "/en/spaces",
  "/oferta": "/en/offer",
  "/merch": "/en/merch",
  "/praca": "/en/jobs",
  "/kontakt": "/en/contact",
  "/en": "/",
  "/en/tama": "/tama",
  "/en/spaces": "/przestrzen",
  "/en/offer": "/oferta",
  "/en/merch": "/merch",
  "/en/jobs": "/praca",
  "/en/contact": "/kontakt",
};

export default function Navbar() {
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
  const homeHref = isEnglish ? "/en/tama" : "/tama";
  const alternatePath = pathMap[pathname] ?? (isEnglish ? "/" : "/en");

  const plHref = isEnglish ? alternatePath : pathname;
  const enHref = isEnglish ? pathname : alternatePath;

  const isActive = (href: string) => {
    return pathname === href;
  };

  const isRootPage = pathname === "/" || pathname === "/en";

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.navContainer}`}>
          {isRootPage ? (
            <div className={styles.logoGroup}>
              <Link href={homeHref} className={styles.logo} onClick={() => setMenuOpen(false)}>
                <Image src="/icons/TAMA-logo.svg" alt="TAMA Logo" width={50} height={50} className={styles.logoImg} />
              </Link>
              <Link href={isEnglish ? "/en/slowclub" : "/slowclub"} className={styles.logo} onClick={() => setMenuOpen(false)}>
                <div className={styles.slowLogoWrapper}>
                  <Image src="/icons/SLOW-logo.svg" alt="SLOW Logo" width={50} height={50} className={styles.slowLogoImg} />
                </div>
              </Link>
            </div>
          ) : (
            <Link href={homeHref} className={styles.logo} onClick={() => setMenuOpen(false)}>
              <Image src="/icons/TAMA-logo.svg" alt="TAMA Logo" width={50} height={50} className={styles.logoImg} />
            </Link>
          )}

          {/* Desktop Nav */}
          <nav className={styles.navLinks}>
            <Link
              href={links[0].href}
              className={`${styles.link} ${isActive(links[0].href) ? styles.active : ""}`}
            >
              {links[0].label}
            </Link>
            <Link
              href={links[1].href}
              className={`${styles.link} ${isActive(links[1].href) ? styles.active : ""}`}
            >
              {links[1].label}
            </Link>
            <Link href={isEnglish ? "/en/slowclub" : "/slowclub"} className={styles.slowLink}>
              SLOW
            </Link>
            {links.slice(2).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${styles.link} ${isActive(href) ? styles.active : ""}`}
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
          <Link
            href={links[0].href}
            className={`${styles.mobileLink} ${isActive(links[0].href) ? styles.active : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {links[0].label}
          </Link>
          <Link
            href={links[1].href}
            className={`${styles.mobileLink} ${isActive(links[1].href) ? styles.active : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {links[1].label}
          </Link>
          <Link href={isEnglish ? "/en/slowclub" : "/slowclub"} className={styles.mobileSlowLink} onClick={() => setMenuOpen(false)}>
            SLOW
          </Link>
          {links.slice(2).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.mobileLink} ${isActive(href) ? styles.active : ""}`}
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
