'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './MainHallImageSwitcher.module.css';

interface MainHallImageSwitcherProps {
  isEnglish?: boolean;
}

interface VenueView {
  id: string;
  src: string;
  altPl: string;
  altEn: string;
  tabPl: string;
  tabEn: string;
  labelPl: string;
  labelEn: string;
  subPl: string;
  subEn: string;
  icon?: string;
}

const VIEWS: VenueView[] = [
  {
    id: 'setup-gala',
    src: '/offer/arturAENnowicki-3202.jpg',
    icon: '/icons/Artboard1.svg',
    altPl: 'Sala Główna TAMA — pełna aranżacja eventowa z koncertem i stołami bankietowymi',
    altEn: 'Main Hall TAMA — full event setup with live concert and banquet tables',
    tabPl: 'Pełna Aranżacja',
    tabEn: 'Full Setup',
    labelPl: 'Aranżacja: Gala & Koncert',
    labelEn: 'Event Setup: Gala & Live Show',
    subPl: 'Scena koncertowa + stoły bankietowe',
    subEn: 'Concert stage + seated banquet tables',
  },
  {
    id: 'raw-space',
    src: '/spaces/main-room.jpg',
    altPl: 'Sala Główna TAMA — pusta przestrzeń 500 m² z dębowym parkietem i sceną',
    altEn: 'Main Hall TAMA — raw 500 m² space with oak parquet and stage',
    tabPl: 'Pusta Sala (Raw)',
    tabEn: 'Raw Space',
    labelPl: 'Pusta Sala — Stan Surowy',
    labelEn: 'Raw Space — Blank Canvas',
    subPl: 'Ponad 500 m² do dowolnej adaptacji',
    subEn: 'Over 500 m² ready for bespoke staging',
  },
  {
    id: 'setup-conference',
    src: '/offer/arturAENnowicki-2942.jpg',
    icon: '/icons/Artboard2.svg',
    altPl: 'Sala Główna TAMA — aranżacja konferencyjna, układ teatralny na 400 miejsc',
    altEn: 'Main Hall TAMA — conference plenary layout for 400 attendees',
    tabPl: 'Konferencja',
    tabEn: 'Conference',
    labelPl: 'Aranżacja: Konferencja',
    labelEn: 'Event Setup: Conference',
    subPl: 'Układ teatralny dla 400 uczestników',
    subEn: '400-seat plenary theater seating',
  },
  {
    id: 'setup-banquet',
    src: '/offer/arturAENnowicki-2992.jpg',
    icon: '/icons/Artboard3.svg',
    altPl: 'Sala Główna TAMA — aranżacja bankietu zasiadanego przy okrągłych stołach',
    altEn: 'Main Hall TAMA — seated banquet setup with round tables and ambient lighting',
    tabPl: 'Bankiet',
    tabEn: 'Banquet',
    labelPl: 'Aranżacja: Bankiet Zasiadany',
    labelEn: 'Event Setup: Seated Banquet',
    subPl: '250 miejsc przy stołach bankietowych',
    subEn: '250 guests seated at round tables',
  },
];

export default function MainHallImageSwitcher({ isEnglish = false }: MainHallImageSwitcherProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % VIEWS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + VIEWS.length) % VIEWS.length);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diffX = touchStartX.current - touchEndX.current;
    if (Math.abs(diffX) > 45) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  const currentView = VIEWS[activeIndex];

  return (
    <div
      className={styles.switcherContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={isEnglish ? 'Main Hall setup switcher' : 'Przełącznik widoków Sali Głównej'}
    >
      {/* Visual Slides (Crossfade) */}
      <div className={styles.slidesWrapper}>
        {VIEWS.map((view, idx) => (
          <div
            key={view.id}
            className={`${styles.slide} ${idx === activeIndex ? styles.slideActive : ''}`}
            aria-hidden={idx !== activeIndex}
          >
            <Image
              src={view.src}
              alt={isEnglish ? view.altEn : view.altPl}
              fill
              priority={idx === 0}
              className={styles.slideImage}
              sizes="(max-width: 992px) 100vw, 60vw"
            />
          </div>
        ))}
      </div>

      {/* Top Segmented Control Pills */}
      <div className={styles.topControlBar}>
        <div className={styles.pillsScrollContainer}>
          {VIEWS.map((view, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={view.id}
                type="button"
                className={`${styles.tabPill} ${isActive ? styles.tabPillActive : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-pressed={isActive}
              >
                {isEnglish ? view.tabEn : view.tabPl}
              </button>
            );
          })}
        </div>
      </div>

      {/* Prev / Next Navigation Chevrons */}
      <button
        type="button"
        className={`${styles.navBtn} ${styles.navBtnPrev}`}
        onClick={prevSlide}
        aria-label={isEnglish ? 'Previous setup view' : 'Poprzedni widok aranżacji'}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        type="button"
        className={`${styles.navBtn} ${styles.navBtnNext}`}
        onClick={nextSlide}
        aria-label={isEnglish ? 'Next setup view' : 'Następny widok aranżacji'}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Bottom Information Badge & Progress Indicators */}
      <div className={styles.bottomMetaOverlay}>
        <div className={styles.badgeInfo}>
          <div className={styles.badgeHeader}>
            {currentView.icon && (
              <Image
                src={currentView.icon}
                alt=""
                width={16}
                height={16}
                className={styles.badgeIcon}
              />
            )}
            <span className={styles.badgeTitle}>
              {isEnglish ? currentView.labelEn : currentView.labelPl}
            </span>
          </div>
          <span className={styles.badgeSub}>
            {isEnglish ? currentView.subEn : currentView.subPl}
          </span>
        </div>

        <div className={styles.paginationRow}>
          <span className={styles.counterText}>
            {activeIndex + 1} / {VIEWS.length}
          </span>
          <div className={styles.dotsRow}>
            {VIEWS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`${isEnglish ? 'Go to view' : 'Przejdź do widoku'} ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
