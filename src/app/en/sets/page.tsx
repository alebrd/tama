import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sets — TAMA",
  description: "Recorded sets and mixes from TAMA's events.",
};

const sets = [
  {
    artist: "SPFDJ",
    event: "Season Opening",
    date: "Sep 2025",
    url: "https://soundcloud.com/tamaklub",
    platform: "SoundCloud",
  },
  {
    artist: "NOVAH",
    event: "OBSESSION",
    date: "Sep 2025",
    url: "https://soundcloud.com/tamaklub",
    platform: "SoundCloud",
  },
  {
    artist: "FJAAK",
    event: "TAMA",
    date: "Oct 2025",
    url: "https://soundcloud.com/tamaklub",
    platform: "SoundCloud",
  },
  {
    artist: "BEN KLOCK",
    event: "TAMA",
    date: "Nov 2025",
    url: "https://soundcloud.com/tamaklub",
    platform: "SoundCloud",
  },
];

export default function SetsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="text-gradient">SETS</h1>
          <p className={styles.subtitle}>Recorded mixes from our events</p>
        </div>

        <div className={styles.grid}>
          {sets.map((set, i) => (
            <a
              key={i}
              href={set.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} glass`}
            >
              <div className={styles.cardInner}>
                <div className={styles.playIcon}>▶</div>
                <div>
                  <p className={styles.event}>{set.event} · {set.date}</p>
                  <h2 className={styles.artist}>{set.artist}</h2>
                  <span className={styles.platform}>{set.platform}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
