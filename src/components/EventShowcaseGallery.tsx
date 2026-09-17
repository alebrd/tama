'use client';

import React, { useRef } from "react";
import Image from "next/image";
import styles from "./EventShowcaseGallery.module.css";

export interface GalleryItem {
  title: string;
  tag: string;
  image: string;
}

interface EventShowcaseGalleryProps {
  eyebrow?: string;
  title?: string;
  items?: GalleryItem[];
  lang?: "pl" | "en";
}

const defaultItemsPL: GalleryItem[] = [
  {
    title: "Sala Główna",
    tag: "Koncerty & Live Acts",
    image: "/spaces/main-room.jpg",
  },
  {
    title: "Bankiet",
    tag: "Gale & Bankiety",
    image: "/offer/AEN03353.jpg",
  },
  {
    title: "Sala Żyrandolowa",
    tag: "Koktajl Bar & Foyer",
    image: "/spaces/chandelier.jpg",
  },
  {
    title: "Wydarzenia Firmowe",
    tag: "Konferencje & Prezentacje",
    image: "/offer/AEN04241.jpg",
  },
  {
    title: "Klub SLOW",
    tag: "Scena Kameralna",
    image: "/spaces/slow.jpg",
  },
  {
    title: "Niezłomnych 2",
    tag: "Zabytkowa Fasada",
    image: "/spaces/entrance.jpg",
  },
  {
    title: "Aranżacje Specjalne",
    tag: "Targi & Premiery",
    image: "/offer/IMG_7708.jpg",
  },
];

const defaultItemsEN: GalleryItem[] = [
  {
    title: "Main Hall",
    tag: "Concerts & Live Acts",
    image: "/spaces/main-room.jpg",
  },
  {
    title: "Banquet",
    tag: "Galas & Dinners",
    image: "/offer/AEN03353.jpg",
  },
  {
    title: "Chandelier Room",
    tag: "Cocktail Bar & Foyer",
    image: "/spaces/chandelier.jpg",
  },
  {
    title: "Corporate Events",
    tag: "Conferences & Launches",
    image: "/offer/AEN04241.jpg",
  },
  {
    title: "SLOW Club",
    tag: "Intimate Stage",
    image: "/spaces/slow.jpg",
  },
  {
    title: "Niezłomnych 2",
    tag: "Historic Facade",
    image: "/spaces/entrance.jpg",
  },
  {
    title: "Custom Setups",
    tag: "Exhibitions & Premiers",
    image: "/offer/IMG_7708.jpg",
  },
];

export default function EventShowcaseGallery({
  eyebrow = "GALERIA",
  title = "Wydarzenia, które tu były.",
  items,
  lang = "pl",
}: EventShowcaseGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const galleryItems = items || (lang === "en" ? defaultItemsEN : defaultItemsPL);
  const displayTitle =
    title ||
    (lang === "en"
      ? "Moments created within these walls."
      : "Wydarzenia, które tu były.");
  const displayEyebrow = eyebrow || (lang === "en" ? "GALLERY" : "GALERIA");

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const distance = 420;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className={styles.headerText}>
            <p className={styles.eyebrow}>{displayEyebrow}</p>
            <h2 className={`${styles.title} text-gradient`}>{displayTitle}</h2>
          </div>
          <div className={styles.controls} aria-label="Gallery navigation">
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => scroll("left")}
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => scroll("right")}
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className={styles.trackWrapper}>
        <div className={styles.track}>
          {galleryItems.map((item, idx) => (
            <article
              key={idx}
              className={`${styles.card} reveal`}
              style={{ "--reveal-delay": `${(idx % 4) * 50}ms` } as React.CSSProperties}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 280px, 420px"
                className={styles.image}
              />
              <div className={styles.cardGradient} />
              <div className={styles.cardCaption}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <span className={styles.cardTag}>{item.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
