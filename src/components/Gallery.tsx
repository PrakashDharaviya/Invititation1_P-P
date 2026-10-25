import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../hooks/useLang';
import { gallery as galleryData } from '../data/content';

export default function Gallery() {
  const { t } = useLang();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allPhotos = galleryData.groups && galleryData.groups.length > 0
    ? galleryData.groups.flatMap((g) => g.photos)
    : galleryData.photos;

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const navigate = useCallback((direction: 1 | -1) => {
    setLightboxIndex(prev => {
      if (prev === null) return null;
      const next = prev + direction;
      if (next < 0) return allPhotos.length - 1;
      if (next >= allPhotos.length) return 0;
      return next;
    });
  }, [allPhotos.length]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigate(1);
    if (e.key === 'ArrowLeft') navigate(-1);
  }, [closeLightbox, navigate]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[var(--color-ivory-warm)] relative overflow-hidden">
      {/* Decorative background damask overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C9A24B_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="section-wrapper relative z-10">
        <motion.div
          className="heading-ornament text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[var(--color-saffron)] text-xs font-semibold uppercase tracking-widest block mb-2">
            {t({ gu: 'શુભ ઉત્સવ', en: 'Wedding Celebrations' })}
          </span>
          <h2
            className="text-3xl md:text-5xl text-[var(--color-maroon)] font-bold"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
          >
            {t(galleryData.heading)}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Gallery Groups Date-wise */}
        {galleryData.groups && galleryData.groups.length > 0 ? (
          galleryData.groups.map((group, groupIdx) => {
            const baseIndex = galleryData.groups
              .slice(0, groupIdx)
              .reduce((acc, g) => acc + g.photos.length, 0);

            return (
              <div key={groupIdx} className="mb-14 last:mb-0">
                {/* Day Header Badge */}
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3
                    className="inline-block px-7 py-2.5 bg-[var(--color-maroon)] text-[var(--color-gold-light)] rounded-full text-lg md:text-xl font-semibold shadow-lg border border-[rgba(201,162,75,0.4)]"
                    style={{ fontFamily: 'var(--font-gujarati-display)' }}
                  >
                    {t(group.day)}
                  </h3>
                </motion.div>

                {/* Photo Grid for this day */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {group.photos.map((photo, pIdx) => {
                    const globalIdx = baseIndex + pIdx;
                    return (
                      <motion.div
                        key={globalIdx}
                        className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-[rgba(201,162,75,0.4)] bg-[var(--color-maroon-dark)] cursor-pointer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (pIdx % 3) * 0.12, duration: 0.6 }}
                        whileHover={{ y: -6, scale: 1.02 }}
                        onClick={() => openLightbox(globalIdx)}
                      >
                        {/* Photo Image */}
                        <div className="aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden relative">
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            loading="lazy"
                          />

                          {/* Subtle vignette gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(42,18,22,0.85)] via-transparent to-[rgba(42,18,22,0.2)] opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                          {/* Golden corner accents */}
                          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--color-gold)] opacity-70 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--color-gold)] opacity-70 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--color-gold)] opacity-70 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--color-gold)] opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Caption Bar */}
                        <div className="p-4 bg-[var(--color-maroon-dark)] border-t border-[rgba(201,162,75,0.3)] flex items-center justify-between">
                          <div>
                            <p
                              className="text-[var(--color-gold-light)] font-medium text-base tracking-wide"
                              style={{ fontFamily: 'var(--font-gujarati-display)' }}
                            >
                              {t(photo.caption)}
                            </p>
                            <p className="text-[var(--color-ivory)] opacity-60 text-xs">
                              {photo.alt}
                            </p>
                          </div>
                          <div className="w-8 h-8 rounded-full border border-[var(--color-gold)] text-[var(--color-gold)] flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-maroon-dark)] transition-all flex-shrink-0">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryData.photos.map((photo, i) => (
              <motion.div
                key={i}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-[rgba(201,162,75,0.4)] bg-[var(--color-maroon-dark)] cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => openLightbox(i)}
              >
                <div className="aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(42,18,22,0.85)] via-transparent to-[rgba(42,18,22,0.2)] opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--color-gold)] opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--color-gold)] opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--color-gold)] opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--color-gold)] opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4 bg-[var(--color-maroon-dark)] border-t border-[rgba(201,162,75,0.3)] flex items-center justify-between">
                  <div>
                    <p
                      className="text-[var(--color-gold-light)] font-medium text-base tracking-wide"
                      style={{ fontFamily: 'var(--font-gujarati-display)' }}
                    >
                      {t(photo.caption)}
                    </p>
                    <p className="text-[var(--color-ivory)] opacity-60 text-xs">
                      {photo.alt}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[var(--color-gold)] text-[var(--color-gold)] flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-maroon-dark)] transition-all flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-label="Photo lightbox"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[var(--color-maroon)] border border-[var(--color-gold)] text-[var(--color-gold-light)] flex items-center justify-center text-xl z-20 hover:scale-110 hover:bg-[var(--color-maroon-light)] transition-all shadow-xl"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {/* Navigation arrows */}
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--color-maroon)] border border-[var(--color-gold)] text-[var(--color-gold)] flex items-center justify-center text-2xl z-20 hover:scale-110 hover:bg-[var(--color-maroon-light)] transition-all shadow-xl"
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--color-maroon)] border border-[var(--color-gold)] text-[var(--color-gold)] flex items-center justify-center text-2xl z-20 hover:scale-110 hover:bg-[var(--color-maroon-light)] transition-all shadow-xl"
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              aria-label="Next photo"
            >
              ›
            </button>

            {/* Photo Card Container */}
            <motion.div
              key={lightboxIndex}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border-2 border-[var(--color-gold)] shadow-2xl bg-[var(--color-maroon-dark)] flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden flex items-center justify-center max-h-[70vh]">
                <img
                  src={allPhotos[lightboxIndex].src}
                  alt={allPhotos[lightboxIndex].alt}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              {/* Lightbox Footer */}
              <div className="p-4 bg-[var(--color-maroon-dark)] border-t border-[rgba(201,162,75,0.4)] flex items-center justify-between">
                <div>
                  <p
                    className="text-[var(--color-gold-light)] font-semibold text-lg"
                    style={{ fontFamily: 'var(--font-gujarati-display)' }}
                  >
                    {t(allPhotos[lightboxIndex].caption)}
                  </p>
                  <p className="text-[var(--color-ivory)] opacity-70 text-xs">
                    {allPhotos[lightboxIndex].alt}
                  </p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded-full border border-[var(--color-gold)] text-[var(--color-gold)] text-xs font-medium">
                    {lightboxIndex + 1} / {allPhotos.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
