import { useCallback, useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import confetti from 'canvas-confetti';
import { GaneshSvg, ToranSvg } from '../assets/ornaments';
import { hero, mantras, shloka } from '../data/content';
import { useLang } from '../hooks/useLang';
import { useReducedMotion } from '../hooks/useUtils';
import Petals from './Petals';

export default function Hero() {
  const { t } = useLang();
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  // Easter egg: tap Ganesh ji for petals
  const handleGaneshTap = useCallback(() => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.3 },
      colors: ['#E8CF8A', '#C9A24B', '#E07B1F', '#6B1022', '#FF6B35'],
      shapes: ['circle'],
      gravity: 0.8,
      ticks: 120,
    });
  }, []);

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden velvet-bg"
    >
      {/* Parallax background layer */}
      {!prefersReduced && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: parallaxY }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-maroon-dark)] via-[var(--color-maroon)] to-[var(--color-maroon-dark)]" />
          {/* Floating petals */}
          <Petals count={15} />
          {/* Gold sparkles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                '--duration': `${3 + Math.random() * 4}s`,
                '--delay': `${Math.random() * 5}s`,
              } as React.CSSProperties}
            />
          ))}
        </motion.div>
      )}

      {/* Toran at top */}
      <div className="absolute top-0 left-0 right-0 text-[var(--color-gold)] opacity-40">
        <ToranSvg className="w-full h-auto" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-20 max-w-4xl mx-auto">
        {/* Mantras */}
        <motion.p
          className="text-[var(--color-gold)] text-xs md:text-sm opacity-70 mb-6 leading-relaxed tracking-wide"
          style={{ fontFamily: 'var(--font-gujarati-display)' }}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {t(mantras)}
        </motion.p>

        {/* Ganesh Ji - clickable */}
        <motion.div
          className="w-16 h-20 md:w-20 md:h-24 mb-4"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <GaneshSvg
            className="w-full h-full text-[var(--color-gold-light)] ganesh-interactive"
            onClick={handleGaneshTap}
          />
        </motion.div>

        {/* Shloka */}
        <motion.p
          className="text-[var(--color-gold)] text-sm md:text-base italic opacity-75 mb-8 whitespace-pre-line leading-relaxed max-w-lg"
          style={{ fontFamily: 'var(--font-gujarati-display)' }}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {t(shloka)}
        </motion.p>

        {/* Main Title */}
        <motion.h1
          className="gold-shimmer-text text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          style={{ fontFamily: 'var(--font-gujarati-display)' }}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          {t(hero.title)}
        </motion.h1>

        {/* Samvat date */}
        <motion.p
          className="text-[var(--color-gold)] text-sm md:text-base opacity-60 mb-8"
          style={{ fontFamily: 'var(--font-gujarati-display)' }}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          custom={3.5}
        >
          {t(hero.samvatDate)}
        </motion.p>

        {/* Couple Names */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 mb-6">
          <motion.h2
            className="text-[var(--color-ivory)] text-2xl md:text-4xl font-semibold"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
            initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {t(hero.groom)}
          </motion.h2>
          <motion.span
            className="text-[var(--color-gold)] text-3xl md:text-5xl"
            style={{ fontFamily: 'var(--font-latin-display)' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            &amp;
          </motion.span>
          <motion.h2
            className="text-[var(--color-ivory)] text-2xl md:text-4xl font-semibold"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
            initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {t(hero.bride)}
          </motion.h2>
        </div>

        {/* Date */}
        <motion.p
          className="text-[var(--color-gold-light)] text-lg md:text-xl font-medium mb-12"
          style={{ fontFamily: 'var(--font-gujarati-display)' }}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          {t(hero.date)}
        </motion.p>

        {/* Scroll Cue */}
        <motion.div
          className="flex flex-col items-center gap-2 mt-auto"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-[var(--color-gold)] text-xs tracking-widest opacity-60 uppercase">
            {t(hero.scrollCue)}
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>

      {/* Corner mandala ornaments */}
      <div className="absolute top-4 left-4 w-16 md:w-24 opacity-20 text-[var(--color-gold)]">
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M0 0 Q20 0 40 10 Q50 16 50 30" /><path d="M0 0 Q0 20 10 40 Q16 50 30 50" />
          <circle cx="18" cy="18" r="4" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute top-4 right-4 w-16 md:w-24 opacity-20 text-[var(--color-gold)] scale-x-[-1]">
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M0 0 Q20 0 40 10 Q50 16 50 30" /><path d="M0 0 Q0 20 10 40 Q16 50 30 50" />
          <circle cx="18" cy="18" r="4" opacity="0.4" />
        </svg>
      </div>
    </section>
  );
}
