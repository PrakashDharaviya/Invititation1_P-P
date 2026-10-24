import { motion } from 'framer-motion';
import { useLang } from '../hooks/useLang';
import { tahuko } from '../data/content';
import { PeacockFeatherSvg } from '../assets/ornaments';

export default function Tahuko() {
  const { t } = useLang();
  const lines = t(tahuko.poem).split('\n');

  return (
    <section className="py-16 md:py-24 velvet-bg relative overflow-hidden" id="tahuko">
      {/* Background peacock feathers */}
      <div className="absolute left-4 top-10 w-8 md:w-12 opacity-10 text-[var(--color-gold)]">
        <PeacockFeatherSvg className="w-full h-full" />
      </div>
      <div className="absolute right-4 top-10 w-8 md:w-12 opacity-10 text-[var(--color-gold)] scale-x-[-1]">
        <PeacockFeatherSvg className="w-full h-full" />
      </div>

      <div className="section-wrapper text-center relative z-10">
        {/* Heading */}
        <motion.div
          className="flex items-center justify-center gap-4 md:gap-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PeacockFeatherSvg className="w-6 h-20 md:w-8 md:h-24 text-[var(--color-gold-light)] opacity-60" />
          <h2
            className="text-3xl md:text-4xl gold-shimmer-text font-bold"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
          >
            {t(tahuko.heading)}
          </h2>
          <PeacockFeatherSvg className="w-6 h-20 md:w-8 md:h-24 text-[var(--color-gold-light)] opacity-60 scale-x-[-1]" />
        </motion.div>

        {/* Poem lines */}
        <div className="max-w-2xl mx-auto space-y-2">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              className="text-[var(--color-ivory)] text-base md:text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-gujarati-display)', lineHeight: '2' }}
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Credit */}
        <motion.p
          className="text-[var(--color-gold)] opacity-60 text-sm mt-8 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: lines.length * 0.12 }}
        >
          {tahuko.credit}
        </motion.p>
      </div>
    </section>
  );
}
