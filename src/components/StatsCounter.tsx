'use client';

import React, { useEffect, useRef } from "react";
import styles from "./StatsCounter.module.css";

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

interface StatsCounterProps {
  stats?: StatItem[];
  lang?: "pl" | "en";
  className?: string;
}

const defaultStatsPL: StatItem[] = [
  { value: 1000, suffix: "m²", label: "Powierzchni eventowej" },
  { value: 1000, label: "Miejsc koncertowych" },
  { value: 400, label: "Układ teatralny" },
  { value: 250, label: "Miejsc bankietowych" },
];

const defaultStatsEN: StatItem[] = [
  { value: 1000, suffix: "m²", label: "Event space" },
  { value: 1000, label: "Concert capacity" },
  { value: 400, label: "Theater layout" },
  { value: 250, label: "Banquet seating" },
];

export default function StatsCounter({
  stats,
  lang = "pl",
  className = "",
}: StatsCounterProps) {
  const items = stats || (lang === "en" ? defaultStatsEN : defaultStatsPL);
  const sectionRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const formatNum = (n: number) => {
      return n.toLocaleString(lang === "pl" ? "pl-PL" : "en-US");
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // If reduced motion, set final values immediately
    if (prefersReducedMotion) {
      numberRefs.current.forEach((el, i) => {
        if (el && items[i]) {
          el.textContent = formatNum(items[i].value);
        }
      });
      return;
    }

    let hasTriggered = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          hasTriggered = true;

          const duration = 1600;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic curve
            const ease = 1 - Math.pow(1 - progress, 3);

            numberRefs.current.forEach((el, i) => {
              if (el && items[i]) {
                const current = Math.round(items[i].value * ease);
                el.textContent = formatNum(current);
              }
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              numberRefs.current.forEach((el, i) => {
                if (el && items[i]) {
                  el.textContent = formatNum(items[i].value);
                }
              });
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [items, lang]);

  return (
    <section ref={sectionRef} className={`${styles.wrapper} ${className}`}>
      <div className="container">
        <div className={styles.grid}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`${styles.card} reveal`}
              style={{ "--reveal-delay": `${idx * 40}ms` } as React.CSSProperties}
            >
              <div className={styles.number}>
                <span
                  ref={(el) => {
                    numberRefs.current[idx] = el;
                  }}
                >
                  0
                </span>
                {item.suffix && <span className={styles.suffix}>{item.suffix}</span>}
              </div>
              <p className={styles.label}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
