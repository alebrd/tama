'use client';

import { useState } from 'react';
import MapModal from './MapModal';

interface MapTriggerProps {
  isEnglish: boolean;
  className?: string;
  variant?: 'tama' | 'slow';
}

export default function MapTrigger({ isEnglish, className, variant = 'tama' }: MapTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className={className}
        style={{
          background: 'transparent',
          border: 'none',
          padding: 0,
          color: 'inherit',
          fontFamily: 'inherit',
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        {isEnglish ? 'VIEW LOCATION' : 'ZOBACZ LOKALIZACJĘ'}
      </button>
      <MapModal isOpen={isOpen} onClose={() => setIsOpen(false)} isEnglish={isEnglish} variant={variant} />
    </>
  );
}
