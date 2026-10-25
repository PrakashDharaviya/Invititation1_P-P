import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { LangProvider } from './hooks/useLang';
import { useAudio, useReducedMotion } from './hooks/useUtils';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Blessings from './components/Blessings';
import ScratchReveal from './components/ScratchReveal';
import Venue from './components/Venue';
import Gallery from './components/Gallery';
import Darshanabhilashi from './components/Darshanabhilashi';
import RSVP from './components/RSVP';
import CoupleMemories from './components/CoupleMemories';
import Finale from './components/Finale';

function WeddingApp() {
  const [hasEntered, setHasEntered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const prefersReduced = useReducedMotion();
  const { play, toggleMute, isMuted } = useAudio('/audio/Kriss_Flute.mp3');

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (prefersReduced) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [prefersReduced]);

  // Track scroll progress for the top gold bar
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollProgress((window.scrollY / total) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePreloaderComplete = () => {
    setHasEntered(true);
    play();
  };

  return (
    <div className="relative min-h-screen bg-[var(--color-ivory)] text-[var(--color-dark)] selection:bg-[var(--color-gold-light)] selection:text-[var(--color-maroon-dark)]">
      {/* Top Gold Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Preloader Gate */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Sticky Header */}
      <Header
        isVisible={hasEntered}
        isMuted={isMuted}
        onToggleMute={toggleMute}
      />

      {/* Main Wedding Invitation Content */}
      <main id="main-content">
        <Hero />
        <Blessings />
        <ScratchReveal />
        <Venue />
        <Gallery />
        <Darshanabhilashi />
        <RSVP />
        <CoupleMemories />
      </main>

      {/* Finale & Footer */}
      <Finale />
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <WeddingApp />
    </LangProvider>
  );
}
