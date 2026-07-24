'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './MapModal.module.css';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  isEnglish: boolean;
}

export default function MapModal({ isOpen, onClose, isEnglish }: MapModalProps) {
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

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>{isEnglish ? 'Location' : 'Lokalizacja'}</h3>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close Map">
            ✕
          </button>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src="https://maps.google.com/maps?q=TAMA%20Klub%20Poznan&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="TAMA Poznań Map"
          />
        </div>
        <div className={styles.footer}>
          <p className={styles.address}>
            Wielkopolska Izba Rzemieślnicza<br />
            ul. Niezłomnych 2<br />
            61-894 Poznań, {isEnglish ? 'Poland' : 'Polska'}
          </p>
          <a
            href="https://www.google.com/maps/search/Tama+Klub+Poznan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.75rem' }}
          >
            {isEnglish ? 'OPEN IN MAPS' : 'OTWÓRZ W MAPACH'}
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
