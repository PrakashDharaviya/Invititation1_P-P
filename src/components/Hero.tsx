import { useCallback, useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import confetti from 'canvas-confetti';
import { GaneshSvg } from '../assets/ornaments';
import { hero, mantras, shloka } from '../data/content';
import { useLang } from '../hooks/useLang';
import { useReducedMotion } from '../hooks/useUtils';

// Vite image imports
import heroBgMobile from '../assets/hero-bg-mobile.jpg';
import heroBgDesktop from '../assets/hero-bg-desktop.jpg';

/* ── Falling Rose Petals (lightweight CSS-only) ─────────────────────── */
function FallingPetals({ count = 18 }: { count?: number }) {
  const petals = useRef(
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${3 + Math.random() * 94}%`,
      size: 10 + Math.random() * 14,
      duration: `${7 + Math.random() * 9}s`,
      delay: `${Math.random() * 12}s`,
      drift: `${-50 + Math.random() * 100}px`,
      opacity: 0.35 + Math.random() * 0.35,
      hue: ['#c94060', '#e8556a', '#d44060', '#f4a0b0', '#e07b9a'][
        Math.floor(Math.random() * 5)
      ],
      rotation: Math.random() * 360,
    }))
  ).current;

  return (
    <div className="hero-petals-container" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="hero-petal"
          style={
            {
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.hue,
              opacity: p.opacity,
              '--petal-dur': p.duration,
              '--petal-delay': p.delay,
              '--petal-drift': p.drift,
              '--petal-rotate': `${p.rotation}deg`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/* ── Hero Component ──────────────────────────────────────────────────── */
export default function Hero() {
  const { t } = useLang();
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  // Responsive BG source
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : true
  );
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(e.matches);
    update(mq);
    mq.addEventListener('change', update as (e: MediaQueryListEvent) => void);
    return () =>
      mq.removeEventListener(
        'change',
        update as (e: MediaQueryListEvent) => void
      );
  }, []);

  const bgSrc = isMobile ? heroBgMobile : heroBgDesktop;

  // Ganesh tap easter egg
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

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.85,
        delay: i * 0.14,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero-photo-section"
    >
      {/* ── BG image with parallax ─────────────────────────────────── */}
      <motion.div
        className="hero-bg-layer"
        style={{ y: prefersReduced ? 0 : bgY }}
      >
        <img
          src={bgSrc}
          alt=""
          className="hero-bg-img"
          loading="eager"
          fetchPriority="high"
        />
        {/* Soft dark vignette for text readability */}
        <div className="hero-vignette" />
      </motion.div>

      {/* ── Falling rose petals ────────────────────────────────────── */}
      {!prefersReduced && <FallingPetals count={20} />}

      {/* ── Frosted glass card ─────────────────────────────────────── */}
      <motion.div
        className="hero-glass-card"
        style={{ opacity: prefersReduced ? 1 : cardOpacity }}
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        {/* Gold shimmer sweep across the card */}
        {!prefersReduced && <div className="hero-card-shimmer" />}

        {/* Card border glow */}
        <div className="hero-card-border" />

        {/* ── Card content ─────────────────────────────────────────── */}
        <div className="hero-card-inner">
          {/* Mantras */}
          <motion.p
            className="hero-mantras"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            {t(mantras)}
          </motion.p>

          {/* Ganesh Ji */}
          <motion.div
            className="hero-ganesh"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <GaneshSvg
              className="w-full h-full text-[var(--color-gold)] ganesh-interactive"
              onClick={handleGaneshTap}
            />
          </motion.div>

          {/* Shloka */}
          <motion.p
            className="hero-shloka"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {t(shloka)}
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            className="hero-divider"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2.5}
          >
            <span className="hero-divider-line" />
            <span className="hero-divider-diamond">◆</span>
            <span className="hero-divider-line" />
          </motion.div>

          {/* Title: Mangal Parinay */}
          <motion.h1
            className="hero-title gold-shimmer-text"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            {t(hero.title)}
          </motion.h1>

          {/* Samvat date */}
          <motion.p
            className="hero-samvat"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3.5}
          >
            {t(hero.samvatDate)}
          </motion.p>

          {/* Couple names */}
          <div className="hero-couple">
            <motion.h2
              className="hero-name"
              style={{ fontFamily: 'var(--font-gujarati-display)' }}
              initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 1,
                delay: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {t(hero.groom)}
            </motion.h2>
            <motion.span
              className="hero-ampersand"
              style={{ fontFamily: 'var(--font-latin-display)' }}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              &amp;
            </motion.span>
            <motion.h2
              className="hero-name"
              style={{ fontFamily: 'var(--font-gujarati-display)' }}
              initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 1,
                delay: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {t(hero.bride)}
            </motion.h2>
          </div>

          {/* Date */}
          <motion.p
            className="hero-date"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            {t(hero.date)}
          </motion.p>
        </div>
      </motion.div>

      {/* ── Scroll cue ─────────────────────────────────────────────── */}
      <motion.div
        className="hero-scroll-cue"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>{t(hero.scrollCue)}</span>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
