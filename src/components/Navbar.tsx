'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";

const plLinks = [
  { href: "/", label: "Home" },
  { href: "/tama", label: "TAMA" },
  { href: "/slowclub", label: "SLOW", isSlow: true },
  { href: "/oferta", label: "Oferta", dropdown: "oferta" as const },
  { href: "/kontakt", label: "Kontakt", dropdown: "kontakt" as const },
];

const enLinks = [
  { href: "/en", label: "Home" },
  { href: "/en/tama", label: "TAMA" },
  { href: "/en/slowclub", label: "SLOW", isSlow: true },
  { href: "/en/offer", label: "Offer", dropdown: "oferta" as const },
  { href: "/en/contact", label: "Contact", dropdown: "kontakt" as const },
];

const pathMap: Record<string, string> = {
  "/": "/en",
  "/tama": "/en/tama",
  "/slowclub": "/en/slowclub",
  "/przestrzen": "/en/spaces",
  "/oferta": "/en/offer",
  "/o-nas": "/en/about",
  "/merch": "/en/merch",
  "/praca": "/en/jobs",
  "/kontakt": "/en/contact",
  "/en": "/",
  "/en/tama": "/tama",
  "/en/slowclub": "/slowclub",
  "/en/spaces": "/przestrzen",
  "/en/offer": "/oferta",
  "/en/about": "/o-nas",
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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpenDropdown(null);
    setMobileOpenDropdown(null);
  }
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!openDropdown) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [openDropdown]);

  const isEnglish = pathname.startsWith("/en");
  const links = isEnglish ? enLinks : plLinks;
  const homeHref = isEnglish ? "/en/tama" : "/tama";
  const alternatePath = pathMap[pathname] ?? (isEnglish ? "/" : "/en");

  const plHref = isEnglish ? alternatePath : pathname;
  const enHref = isEnglish ? pathname : alternatePath;

  const isActive = (href: string) => {
    return pathname === href;
  };

  const isOfertaActive =
    pathname === "/oferta" ||
    pathname === "/en/offer" ||
    pathname === "/slowclub/oferta" ||
    pathname === "/en/slowclub/offer";

  const isKontaktActive =
    pathname === "/kontakt" ||
    pathname === "/en/contact" ||
    pathname === "/slowclub/kontakt" ||
    pathname === "/en/slowclub/contact";

  const dropdownItems: Record<
    string,
    { href: string; title: string; desc: string; isSlow?: boolean }[]
  > = {
    oferta: [
      {
        href: isEnglish ? "/en/offer" : "/oferta",
        title: "TAMA",
        desc: isEnglish ? "Main hall · up to 1000 guests" : "Sala główna · do 1000 osób",
      },
      {
        href: isEnglish ? "/en/slowclub/offer" : "/slowclub/oferta",
        title: "SLOW",
        desc: isEnglish ? "Club & conference · up to 200 guests" : "Klub & konferencja · do 200 osób",
        isSlow: true,
      },
    ],
    kontakt: [
      {
        href: isEnglish ? "/en/contact" : "/kontakt",
        title: "TAMA",
        desc: isEnglish ? "B2B events, concerts & media" : "Eventy B2B, koncerty & media",
      },
      {
        href: isEnglish ? "/en/slowclub/contact" : "/slowclub/kontakt",
        title: "SLOW",
        desc: isEnglish ? "Lounge booking, B2B & media" : "Rezerwacja loży, B2B & media",
        isSlow: true,
      },
    ],
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuOpenHeader : ''}`}>
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.logoGroup}>
            <Link href={homeHref} className={styles.logo} onClick={() => setMenuOpen(false)}>
              <Image src="/icons/TAMA-logo.svg" alt="TAMA Logo" width={50} height={50} className={styles.logoImg} priority />
            </Link>
            <Link href={isEnglish ? "/en/slowclub" : "/slowclub"} className={styles.logo} onClick={() => setMenuOpen(false)}>
              <div className={styles.slowLogoWrapper}>
                <Image src="/icons/SLOW-logo.svg" alt="SLOW Logo" width={50} height={50} className={styles.slowLogoImg} priority />
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav ref={navRef} className={styles.navLinks}>
            {links.map(({ href, label, isSlow, dropdown }) => {
              if (dropdown) {
                const isOpen = openDropdown === dropdown;
                const isCurrentActive = dropdown === "oferta" ? isOfertaActive : isKontaktActive;
                const items = dropdownItems[dropdown];

                return (
                  <div
                    key={label}
                    className={styles.dropdownWrapper}
                    onMouseEnter={() => setOpenDropdown(dropdown)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`${styles.link} ${styles.dropdownTrigger} ${isCurrentActive ? styles.active : ""} ${isOpen ? styles.dropdownTriggerOpen : ""}`}
                      onClick={() => setOpenDropdown(isOpen ? null : dropdown)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      {label}
                      <svg
                        className={`${styles.dropdownChevron} ${isOpen ? styles.chevronRotated : ""}`}
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                      >
                        <path
                          d="M1 1L4 4L7 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <div
                      className={`${styles.dropdownMenu} ${isOpen ? styles.dropdownOpen : ""}`}
                    >
                      {items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          prefetch={false}
                          className={`${styles.dropdownItem} ${item.isSlow ? styles.dropdownItemSlow : ""} ${pathname === item.href ? styles.dropdownItemActive : ""}`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          <div className={styles.dropdownItemContent}>
                            <span className={styles.dropdownItemTitle}>{item.title}</span>
                            <span className={styles.dropdownItemDesc}>{item.desc}</span>
                          </div>
                          <svg
                            className={styles.dropdownItemArrow}
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={href}
                  href={href}
                  className={`${isSlow ? styles.slowLink : styles.link} ${isActive(href) ? styles.active : ""}`}
                >
                  {label}
                </Link>
              );
            })}
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
              onClick={() => {
                setMenuOpen((prev) => {
                  if (prev) setMobileOpenDropdown(null);
                  return !prev;
                });
              }}
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
          {links.map(({ href, label, isSlow, dropdown }) => {
            if (dropdown) {
              const isMobileOpen = mobileOpenDropdown === dropdown;
              const isCurrentActive = dropdown === "oferta" ? isOfertaActive : isKontaktActive;
              const items = dropdownItems[dropdown];

              return (
                <div key={label} className={styles.mobileDropdownWrapper}>
                  <button
                    type="button"
                    className={`${styles.mobileLink} ${styles.mobileDropdownTrigger} ${isCurrentActive ? styles.active : ""}`}
                    onClick={() => setMobileOpenDropdown(isMobileOpen ? null : dropdown)}
                    aria-expanded={isMobileOpen}
                  >
                    {label}
                    <svg
                      className={`${styles.mobileDropdownChevron} ${isMobileOpen ? styles.chevronRotated : ""}`}
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    className={`${styles.mobileAccordion} ${isMobileOpen ? styles.mobileAccordionOpen : ""}`}
                  >
                    <div className={styles.mobileAccordionInner}>
                      {items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`${styles.mobileSubLink} ${item.isSlow ? styles.mobileSubLinkSlow : styles.mobileSubLinkTama} ${pathname === item.href ? styles.mobileSubLinkActive : ""}`}
                          onClick={() => {
                            setMobileOpenDropdown(null);
                            setMenuOpen(false);
                          }}
                        >
                          <span className={styles.mobileSubDash}>—</span>
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={href}
                href={href}
                className={`${isSlow ? styles.mobileSlowLink : styles.mobileLink} ${isActive(href) ? styles.active : ""}`}
                onClick={() => {
                  setMobileOpenDropdown(null);
                  setMenuOpen(false);
                }}
              >
                {label}
              </Link>
            );
          })}
          <div className={styles.mobileLang}>
            <Link
              href={plHref}
              className={`${styles.langBtn} ${!isEnglish ? styles.langActive : ""}`}
              onClick={() => {
                setMobileOpenDropdown(null);
                setMenuOpen(false);
              }}
            >
              PL
            </Link>
            <span className={styles.langDivider}>·</span>
            <Link
              href={enHref}
              className={`${styles.langBtn} ${isEnglish ? styles.langActive : ""}`}
              onClick={() => {
                setMobileOpenDropdown(null);
                setMenuOpen(false);
              }}
            >
              EN
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
