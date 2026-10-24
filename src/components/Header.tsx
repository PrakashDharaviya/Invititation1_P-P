import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../hooks/useLang';
import { navLinks } from '../data/content';

interface HeaderProps {
  isVisible: boolean;
  isMuted: boolean;
  onToggleMute: () => void;
}

export default function Header({ isVisible, isMuted, onToggleMute }: HeaderProps) {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on nav click
  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <>
      <motion.header
        className={`header-frosted ${scrolled ? 'header-frosted--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Monogram */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="header-monogram"
            style={{ fontFamily: 'var(--font-latin-display)' }}
            whileHover={{ scale: 1.05 }}
          >
            P <span className="header-monogram-amp">&amp;</span> P
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="header-nav-link"
              >
                {t(link.label)}
                <span className="header-nav-underline" />
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="header-circle-btn"
              aria-label={`Switch to ${lang === 'gu' ? 'English' : 'Gujarati'}`}
            >
              {lang === 'gu' ? 'EN' : 'ગુ'}
            </button>

            {/* Music Toggle */}
            <button
              onClick={onToggleMute}
              className="header-circle-btn"
              aria-label={isMuted ? 'Unmute music' : 'Mute music'}
            >
              {isMuted ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden header-circle-btn flex-col !gap-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span className={`hamburger-line transition-transform ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`hamburger-line transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`hamburger-line transition-transform ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-[var(--color-ivory)] text-2xl font-medium"
                  style={{ fontFamily: 'var(--font-gujarati-display)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {t(link.label)}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
