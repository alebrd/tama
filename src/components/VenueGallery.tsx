'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import styles from './VenueGallery.module.css';

interface VenueGalleryProps {
  isEnglish: boolean;
}

const images = [
  // 10 Best Professional Photos for the Desktop Preview
  "/offer/AEN03361.jpg",
  "/offer/AEN03586.jpg",
  "/offer/AEN04257.jpg",
  "/offer/ARTUR_AEN_NOWICKI-5262.jpg",
  "/offer/arturAENnowicki-2942.jpg",
  "/offer/arturAENnowicki-2949.jpg",
  "/offer/arturAENnowicki-2953.jpg",
  "/offer/arturAENnowicki-2970.jpg",
  "/offer/arturAENnowicki-2992.jpg",
  "/offer/artur_aen_nowicki-09430.jpg",
  // The rest of the photos
  "/offer/AEN03279.jpg",
  "/offer/AEN03353.jpg",
  "/offer/AEN04241.jpg",
  "/offer/IMG_2806.JPG",
  "/offer/IMG_2807.JPG",
  "/offer/IMG_6607.jpg",
  "/offer/IMG_6611_3.jpg",
  "/offer/IMG_6617.jpg",
  "/offer/IMG_6628.jpg",
  "/offer/IMG_6632.jpg",
  "/offer/IMG_7576.jpg",
  "/offer/IMG_7587.jpg",
  "/offer/IMG_7590.jpg",
  "/offer/IMG_7595.jpg",
  "/offer/IMG_7616.jpg",
  "/offer/IMG_7708.jpg",
  "/offer/IMG_7710.jpg",
  "/offer/IMG_7715.jpg",
  "/offer/arturAENnowicki-2950.jpg",
  "/offer/arturAENnowicki-2982.jpg",
  "/offer/arturAENnowicki-2987.jpg",
  "/offer/arturAENnowicki-3202.jpg",
  "/offer/artur_aen_nowicki-0045.jpg",
  "/offer/artur_aen_nowicki-0049.jpg"
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
        {images.map((src, index) => (
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
              unoptimized={true}
            />
            <div className={styles.previewOverlay}>
              <span className={styles.overlayTextNormal}>{isEnglish ? "VIEW" : "ZOBACZ"}</span>
              <span className={styles.overlayTextMoreDesktop}>+{images.length - 10}</span>
              <span className={styles.overlayTextMoreMobile}>+{images.length - 4}</span>
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
                      unoptimized={true}
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
