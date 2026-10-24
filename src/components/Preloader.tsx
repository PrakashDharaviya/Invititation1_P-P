import { useState, useCallback } from 'react';
import { useLang } from '../hooks/useLang';
import { hero } from '../data/content';
import Petals from './Petals';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const { t, lang } = useLang();
  const [isOpening, setIsOpening] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleOpen = useCallback(() => {
    if (isOpening || isDone) return;
    setIsOpening(true);
    setTimeout(() => {
      setIsDone(true);
      onComplete();
    }, 1100);
  }, [isOpening, isDone, onComplete]);

  if (isDone) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] overflow-hidden select-none cursor-pointer"
      style={{ backgroundColor: '#2A1216' }}
      onClick={handleOpen}
      aria-label="Click anywhere to open invitation"
    >
      {/* Falling Rose Petals Effect on Doors */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Petals count={16} />
      </div>

      {/* Left Palace Door Panel */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full z-10 overflow-hidden transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          borderRight: '2px solid #C9A24B',
          boxShadow: 'inset -8px 0 25px rgba(0, 0, 0, 0.7)',
          transform: isOpening ? 'translateX(-100%)' : 'translateX(0)',
        }}
      >
        <img
          src="/images/royal-doors.jpg"
          alt="Royal Palace Left Door"
          className="absolute top-0 left-0 w-[100vw] h-[100vh] max-w-none object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      {/* Right Palace Door Panel */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full z-10 overflow-hidden transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          borderLeft: '2px solid #C9A24B',
          boxShadow: 'inset 8px 0 25px rgba(0, 0, 0, 0.7)',
          transform: isOpening ? 'translateX(100%)' : 'translateX(0)',
        }}
      >
        <img
          src="/images/royal-doors.jpg"
          alt="Royal Palace Right Door"
          className="absolute top-0 right-0 w-[100vw] h-[100vh] max-w-none object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      {/* Center Royal Card & Open Invitation Button */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center text-center px-6 py-8 w-[90%] max-w-md rounded-3xl transition-all duration-500 cursor-default ${
          isOpening ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
        }`}
        style={{
          backgroundColor: 'rgba(255, 248, 236, 0.94)',
          boxShadow:
            '0 25px 60px rgba(0, 0, 0, 0.65), 0 0 0 1.5px rgba(201, 162, 75, 0.7), inset 0 0 30px rgba(201, 162, 75, 0.2)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Shubh Vivah Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[var(--color-gold-dark)] text-sm">✦</span>
          <p
            className="text-[var(--color-maroon)] text-base md:text-lg font-bold tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
          >
            {lang === 'gu' ? '॥ શુભ વિવાહ ॥' : '॥ SHUBH VIVAH ॥'}
          </p>
          <span className="text-[var(--color-gold-dark)] text-sm">✦</span>
        </div>

        {/* Family Subtitle */}
        <p className="text-[var(--color-dark)] text-xs md:text-sm uppercase tracking-[0.2em] opacity-80 mb-3 font-medium">
          {lang === 'gu' ? 'અમારા પરિવાર સાથે' : 'TOGETHER WITH OUR FAMILIES'}
        </p>

        {/* Couple Names */}
        <div className="my-2 flex flex-col items-center">
          <h1
            className="text-[var(--color-maroon)] text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
          >
            {t(hero.groom)}
          </h1>
          <span className="text-[var(--color-saffron)] text-2xl md:text-3xl my-1 font-serif italic">
            &amp;
          </span>
          <h1
            className="text-[var(--color-maroon)] text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
          >
            {t(hero.bride)}
          </h1>
        </div>

        {/* Golden Diamond Divider */}
        <div className="flex items-center gap-3 my-4 opacity-70">
          <div className="w-12 h-[1px] bg-[var(--color-gold-dark)]" />
          <span className="text-[var(--color-gold-dark)] text-xs">◆</span>
          <div className="w-12 h-[1px] bg-[var(--color-gold-dark)]" />
        </div>

        {/* Date and City */}
        <p className="text-[var(--color-maroon-dark)] text-xs md:text-sm font-semibold tracking-wider uppercase mb-6">
          {lang === 'gu'
            ? '૧૩ ડિસેમ્બર ૨૦૨૬ · જામનગર'
            : '13 DECEMBER 2026 · JAMNAGAR'}
        </p>

        {/* Open Invitation Button */}
        <button
          id="open-invitation-btn"
          onClick={handleOpen}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full text-white font-medium text-base md:text-lg shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #6B1022 0%, #4A0B17 100%)',
            border: '1.5px solid #C9A24B',
            boxShadow:
              '0 8px 25px rgba(107, 16, 34, 0.4), 0 0 15px rgba(201, 162, 75, 0.3)',
          }}
          aria-label="Open wedding invitation"
        >
          <span style={{ fontFamily: 'var(--font-gujarati-display)' }}>
            {lang === 'gu' ? 'આમંત્રણ ખોલો' : 'Open Invitation'}
          </span>
          <span className="text-[var(--color-gold-light)] text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
            ↗
          </span>
        </button>

        {/* With love we invite you */}
        <p className="text-[var(--color-maroon)] text-xs md:text-sm italic opacity-80 mt-4 font-serif">
          {lang === 'gu' ? 'સપ્રેમ આમંત્રણ' : 'With love, we invite you'}
        </p>

        {/* Studio Credit */}
        <p className="text-[var(--color-gold-dark)] text-[0.6rem] md:text-[0.65rem] tracking-[0.15em] opacity-50 mt-3 uppercase font-medium">
          Bajrang Studio – Jamnagar
        </p>
      </div>
    </div>
  );
}
