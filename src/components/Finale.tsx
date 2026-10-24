import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../hooks/useLang';
import { finale, config, shareMessage } from '../data/content';
import { NamasteSvg, KalashSvg, DiyaSvg } from '../assets/ornaments';

export default function Finale() {
  const { t, lang } = useLang();

  const handleShare = useCallback(async () => {
    const url = window.location.href;
    const text = t(shareMessage) + '\n' + url;

    if (navigator.share) {
      try {
        await navigator.share({
          title: lang === 'gu' ? 'ડૉ. પ્રેમ & ડૉ. પ્રિયંકા - મંગલ પરિણય' : 'Dr. Prem & Dr. Priyanka - Wedding Invitation',
          text,
          url,
        });
        return;
      } catch {
        // Fallback to whatsapp link
      }
    }

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }, [t, lang]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <footer id="finale" className="velvet-bg text-[var(--color-ivory)] relative overflow-hidden pt-20 pb-12 border-t-2 border-[var(--color-gold)]">
      {/* Decorative diyas */}
      <div className="absolute left-6 top-8 w-10 h-12 text-[var(--color-gold)] opacity-30">
        <DiyaSvg className="w-full h-full" />
      </div>
      <div className="absolute right-6 top-8 w-10 h-12 text-[var(--color-gold)] opacity-30 scale-x-[-1]">
        <DiyaSvg className="w-full h-full" />
      </div>

      <div className="section-wrapper relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Namaste / Blessings icon */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-full border border-[var(--color-gold)] flex items-center justify-center bg-[var(--color-maroon-dark)] text-[var(--color-gold)] shadow-[0_0_20px_rgba(201,162,75,0.3)]">
            <NamasteSvg className="w-10 h-10" />
          </div>
        </motion.div>

        {/* Closing Title */}
        <motion.h2
          className="gold-shimmer-text text-3xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-gujarati-display)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t(finale.closing)}
        </motion.h2>

        {/* Sender details */}
        <motion.div
          className="my-8 py-6 px-6 rounded-2xl bg-[rgba(74,11,23,0.6)] border border-[rgba(201,162,75,0.3)] backdrop-blur-sm max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="flex justify-center mb-3 text-[var(--color-gold)] opacity-60">
            <KalashSvg className="w-8 h-10" />
          </div>
          <p
            className="text-2xl md:text-3xl text-[var(--color-gold-light)] font-bold mb-2 tracking-wide"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
          >
            {t(finale.sender.name)}
          </p>
          <p className="text-[var(--color-ivory)] opacity-90 text-sm md:text-base leading-relaxed">
            {t(finale.sender.address)}
          </p>
        </motion.div>

        {/* Contact Numbers / Tap to Call */}
        {config.contactNumbers && config.contactNumbers.length > 0 && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-[var(--color-gold-light)] text-xs uppercase tracking-widest mb-3 opacity-80">
              {t({ gu: 'સંપર્ક સૂત્ર', en: 'Contact Numbers' })}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {config.contactNumbers.map((phone, i) => (
                <a
                  key={i}
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(201,162,75,0.15)] border border-[var(--color-gold)] text-[var(--color-gold-light)] hover:bg-[var(--color-gold)] hover:text-[var(--color-maroon-dark)] transition-all duration-300 text-sm font-semibold tracking-wider group"
                >
                  <svg
                    className="w-4 h-4 transition-transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>{phone}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Share buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] text-white font-medium text-sm tracking-wide shadow-lg hover:bg-[#1EBE5D] hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.274.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
            </svg>
            <span>{t({ gu: 'નિમંત્રણ શેર કરો', en: 'Share Invitation' })}</span>
          </button>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[rgba(201,162,75,0.15)] transition-all duration-300 text-sm font-medium"
            aria-label="Scroll to top"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>{t({ gu: 'ઉપર જાઓ', en: 'Back to Top' })}</span>
          </button>
        </motion.div>

        {/* Divider */}
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto mb-8 opacity-40" />

        {/* Designer Credits */}
        {config.showDesignerCredit && (
          <p className="text-xs text-[var(--color-gold-light)] opacity-60 font-light tracking-widest">
            {finale.designerCredit}
          </p>
        )}
      </div>
    </footer>
  );
}
