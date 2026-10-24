import { motion } from 'framer-motion';
import { useLang } from '../hooks/useLang';
import { countdown as countdownData } from '../data/content';
import { useCountdown } from '../hooks/useUtils';
import { DiyaSvg } from '../assets/ornaments';

export default function Countdown() {
  const { t } = useLang();
  const { days, hours, minutes, seconds, isComplete } = useCountdown(countdownData.targetDate);

  if (isComplete) {
    return (
      <section className="py-16 velvet-bg relative overflow-hidden" id="countdown">
        <div className="section-wrapper text-center relative z-10">
          <motion.h2
            className="gold-shimmer-text text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            🎊 {t(countdownData.completedText)} 🎊
          </motion.h2>
        </div>
      </section>
    );
  }

  const digits = [
    { value: days, label: countdownData.labels.days },
    { value: hours, label: countdownData.labels.hours },
    { value: minutes, label: countdownData.labels.minutes },
    { value: seconds, label: countdownData.labels.seconds },
  ];

  return (
    <section className="py-16 md:py-20 velvet-bg relative overflow-hidden" id="countdown">
      {/* Decorative diyas */}
      <div className="absolute left-4 bottom-4 w-8 h-10 text-[var(--color-gold)] opacity-20">
        <DiyaSvg className="w-full h-full" />
      </div>
      <div className="absolute right-4 bottom-4 w-8 h-10 text-[var(--color-gold)] opacity-20 scale-x-[-1]">
        <DiyaSvg className="w-full h-full" />
      </div>

      <div className="section-wrapper text-center relative z-10">
        <motion.p
          className="text-[var(--color-gold)] text-sm tracking-widest uppercase mb-8 opacity-70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
        >
          {t({ gu: 'ઉલટી ગણતરી', en: 'Counting Down To' })}
        </motion.p>

        <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap">
          {digits.map((d, i) => (
            <motion.div
              key={i}
              className="flip-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flip-digit">
                <motion.span
                  key={d.value}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(d.value).padStart(2, '0')}
                </motion.span>
              </div>
              <span className="flip-label">{t(d.label)}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
