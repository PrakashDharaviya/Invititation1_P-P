import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../hooks/useLang';
import { coupleMemories } from '../data/content';
import Petals from './Petals';

export default function CoupleMemories() {
  const { t } = useLang();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const navigate = useCallback((direction: 1 | -1) => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      const next = prev + direction;
      if (next < 0) return coupleMemories.photos.length - 1;
      if (next >= coupleMemories.photos.length) return 0;
      return next;
    });
  }, []);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    },
    [closeLightbox, navigate]
  );

  return (
    <section
      id="memories"
      className="py-20 md:py-28 relative overflow-hidden bg-[#FAF6F0]"
    >
      {/* Soft falling rose petals background */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <Petals count={12} />
      </div>

      {/* Decorative subtle damask dots */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#6B1022_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />

      <div className="section-wrapper relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading — Polaroid scrapbook style matching reference */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title: "Better, together." */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-maroon)] font-serif font-bold tracking-tight mb-3"
            style={{ fontFamily: 'Georgia, "Playfair Display", serif' }}
          >
            {t(coupleMemories.title)}
          </h2>

          {/* Subtitle: "A few of our favourite memories." */}
          <p
            className="text-[var(--color-maroon-dark)] text-sm sm:text-base md:text-lg font-serif italic opacity-75 max-w-md mx-auto"
            style={{ fontFamily: 'Georgia, "Playfair Display", serif' }}
          >
            {t(coupleMemories.subtitle)}
          </p>

          {/* Elegant gold hairline divider */}
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto mt-4 opacity-70" />
        </motion.div>

        {/* Polaroid Photos Grid — 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-7">
          {coupleMemories.photos.map((photo, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: (i % 4) * 0.1, duration: 0.6 }}
              onClick={() => openLightbox(i)}
            >
              {/* Polaroid Frame */}
              <div
                className="bg-white p-2.5 sm:p-3 pb-3.5 sm:pb-5 rounded-lg sm:rounded-xl shadow-[0_6px_20px_rgba(42,18,22,0.08)] border border-[rgba(201,162,75,0.22)] transition-all duration-500 ease-out group-hover:shadow-[0_16px_36px_rgba(42,18,22,0.18)] group-hover:-translate-y-2 group-hover:scale-[1.02]"
                style={{
                  transform: `rotate(${photo.rotation}deg)`,
                  transformOrigin: 'center center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotate(0deg) translateY(-8px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `rotate(${photo.rotation}deg)`;
                }}
              >
                {/* Photo image container */}
                <div className="aspect-[4/5] w-full overflow-hidden rounded-md bg-[#F4EFEA] relative">
                  <img
                    src={photo.src}
                    alt={t(photo.caption)}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  {/* Subtle warm photo overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(42,18,22,0.25)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Handwritten / Italic caption beneath photo */}
                <div className="mt-2.5 sm:mt-3 text-center px-1">
                  <p
                    className="text-xs sm:text-sm font-serif italic text-[var(--color-maroon)] group-hover:text-[var(--color-gold-dark)] transition-colors duration-300 leading-snug tracking-wide line-clamp-2"
                    style={{ fontFamily: 'Georgia, "Playfair Display", serif' }}
                  >
                    {t(photo.caption)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/92 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-label="Couple photo lightbox"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-[var(--color-maroon)] border border-[var(--color-gold)] text-[var(--color-gold-light)] flex items-center justify-center text-xl z-20 hover:scale-110 hover:bg-[var(--color-maroon-light)] transition-all shadow-xl"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {/* Previous button */}
            <button
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[var(--color-maroon)] border border-[var(--color-gold)] text-[var(--color-gold)] flex items-center justify-center text-2xl z-20 hover:scale-110 hover:bg-[var(--color-maroon-light)] transition-all shadow-xl"
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
              aria-label="Previous photo"
            >
              ‹
            </button>

            {/* Next button */}
            <button
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[var(--color-maroon)] border border-[var(--color-gold)] text-[var(--color-gold)] flex items-center justify-center text-2xl z-20 hover:scale-110 hover:bg-[var(--color-maroon-light)] transition-all shadow-xl"
              onClick={(e) => {
                e.stopPropagation();
                navigate(1);
              }}
              aria-label="Next photo"
            >
              ›
            </button>

            {/* Lightbox Photo Card */}
            <motion.div
              key={lightboxIndex}
              className="relative max-w-2xl max-h-[85vh] rounded-2xl overflow-hidden border-2 border-[var(--color-gold)] shadow-2xl bg-white flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden flex items-center justify-center max-h-[70vh] bg-black/5">
                <img
                  src={coupleMemories.photos[lightboxIndex].src}
                  alt={t(coupleMemories.photos[lightboxIndex].caption)}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              {/* Lightbox Footer */}
              <div className="p-4 bg-[var(--color-maroon-dark)] border-t border-[rgba(201,162,75,0.4)] flex items-center justify-between text-white">
                <p
                  className="text-[var(--color-gold-light)] font-serif italic text-base md:text-lg"
                  style={{ fontFamily: 'Georgia, "Playfair Display", serif' }}
                >
                  {t(coupleMemories.photos[lightboxIndex].caption)}
                </p>
                <span className="px-3 py-1 rounded-full border border-[var(--color-gold)] text-[var(--color-gold)] text-xs font-medium">
                  {lightboxIndex + 1} / {coupleMemories.photos.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
