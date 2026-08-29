'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import styles from './VenueGallery.module.css';

interface VenueGalleryProps {
  isEnglish: boolean;
}

const images = [
  "/venue-stage.jpg",
  "/arturAENnowicki-2942.jpg",
  "/arturAENnowicki-2992.jpg",
  "/artur_aen_nowicki-09366.jpg",
  "/artur_aen_nowicki-09368.jpg",
  "/venue-entrance.jpg",
  "/screenshot-1.jpg",
  "/screenshot-2.jpg",
  "/screenshot-3.jpg",
  "/screenshot-4.jpg",
  "/screenshot-5.jpg",
  "/screenshot-6.jpg",
  "/screenshot-7.jpg",
  "/screenshot-8.jpg",
  "/screenshot-9.jpg",
  "/screenshot-10.jpg",
  "/screenshot-11.jpg",
  "/screenshot-12.jpg",
  "/screenshot-13.jpg"
];

export default function VenueGallery({ isEnglish }: VenueGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        document.getElementById(`gallery-img-${selectedIndex}`)?.scrollIntoView({ behavior: 'instant', block: 'start', inline: 'start' });
      }, 10);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, selectedIndex]);

  const scrollGallery = (e: React.MouseEvent, direction: number) => {
    e.stopPropagation();
    if (galleryRef.current) {
      const amount = window.innerWidth > 768 ? galleryRef.current.clientWidth * 0.85 : galleryRef.current.clientHeight * 0.85;
      galleryRef.current.scrollBy({ 
        left: window.innerWidth > 768 ? direction * amount : 0, 
        top: window.innerWidth <= 768 ? direction * amount : 0, 
        behavior: 'smooth' 
      });
    }
  };

  if (!mounted) return null;

  return (
    <>
      <div className={styles.previewGrid}>
        {images.slice(0, 4).map((src, index) => (
          <div 
            key={src}
            className={styles.previewCard} 
            onClick={() => {
              setSelectedIndex(index);
              setIsOpen(true);
            }}
          >
            <Image 
              src={src} 
              alt={`Venue preview ${index + 1}`} 
              fill
              className={styles.previewImage}
              sizes="(max-width: 768px) 100vw, 300px"
            />
            <div className={styles.previewOverlay}>
              <span>{isEnglish ? "VIEW" : "ZOBACZ"}</span>
            </div>
          </div>
        ))}
      </div>

      {isOpen && createPortal(
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.header}>
              <h3 className={styles.title}>{isEnglish ? "Event Setups" : "Realizacje Eventowe"}</h3>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>
            
            <div className={styles.galleryWrapper}>
              <button className={`${styles.scrollBtn} ${styles.scrollPrev}`} onClick={(e) => scrollGallery(e, -1)}>‹</button>
              <div className={styles.galleryContent} ref={galleryRef}>
                {images.map((src, index) => (
                  <div key={src} id={`gallery-img-${index}`} className={styles.imageWrapper}>
                    <Image 
                      src={src} 
                      alt={`Venue Setup ${index + 1}`} 
                      fill
                      className={styles.image}
                      sizes="(max-width: 900px) 100vw, 800px"
                    />
                  </div>
                ))}
              </div>
              <button className={`${styles.scrollBtn} ${styles.scrollNext}`} onClick={(e) => scrollGallery(e, 1)}>›</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
