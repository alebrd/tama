'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import styles from './VenueGallery.module.css';

interface VenueGalleryProps {
  isEnglish: boolean;
}

export default function VenueGallery({ isEnglish }: VenueGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      <div className={styles.previewGrid}>
        <div className={styles.previewCard} onClick={() => setIsOpen(true)}>
          <Image 
            src="/venue-stage.jpg" 
            alt="Venue Stage Setup Preview" 
            fill
            className={styles.previewImage}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className={styles.previewOverlay}>
            <span>{isEnglish ? "VIEW GALLERY" : "ZOBACZ GALERIĘ"}</span>
          </div>
        </div>
        <div className={styles.previewCard} onClick={() => setIsOpen(true)}>
          <Image 
            src="/venue-entrance.jpg" 
            alt="Venue Entrance Setup Preview" 
            fill
            className={styles.previewImage}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className={styles.previewOverlay}>
            <span>{isEnglish ? "VIEW GALLERY" : "ZOBACZ GALERIĘ"}</span>
          </div>
        </div>
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
            <div className={styles.galleryContent}>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/venue-stage.jpg" 
                  alt="Venue Stage Setup" 
                  fill
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 800px"
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/venue-entrance.jpg" 
                  alt="Venue Entrance Setup" 
                  fill
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 800px"
                />
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
