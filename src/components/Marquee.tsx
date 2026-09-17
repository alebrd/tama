import React from "react";
import styles from "./Marquee.module.css";

interface MarqueeProps {
  items?: string[];
  className?: string;
}

const defaultItems = [
  "TAMA",
  "MUZYKA",
  "KULTURA",
  "DOŚWIADCZENIA",
  "SALA GŁÓWNA",
  "SALA ŻYRANDOLOWA",
  "SLOW",
  "1000 M²",
  "POZNAŃ",
  "NIEZŁOMNYCH 2",
];

export default function Marquee({ items = defaultItems, className = "" }: MarqueeProps) {
  // We duplicate the track array so that translateX(-50%) loops indefinitely with no jump
  const fullTrack = [...items, ...items];

  return (
    <div className={`${styles.marquee} ${className}`} aria-hidden="true">
      <div className={styles.track}>
        {fullTrack.map((item, index) => (
          <span key={`a-${index}`} className={styles.item}>
            {item}
            <span className={styles.dot}>—</span>
          </span>
        ))}
      </div>
      <div className={styles.track}>
        {fullTrack.map((item, index) => (
          <span key={`b-${index}`} className={styles.item}>
            {item}
            <span className={styles.dot}>—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
