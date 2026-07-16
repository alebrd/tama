'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { href: "/en/tama", label: "TAMA" },
  { href: "/en/program", label: "Program" },
  { href: "/en/shop", label: "Shop" },
  { href: "/en/awareness", label: "Awareness" },
  { href: "/en/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} glass`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/en" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <div className={styles.logoBox}>
            <div className={styles.logoRow}>
              <span>T</span><span>A</span>
            </div>
            <div className={styles.logoRow}>
              <span>M</span><span>A</span>
            </div>
          </div>
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

        {/* Hamburger */}
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
        </nav>
      </div>
    </header>
  );
}
