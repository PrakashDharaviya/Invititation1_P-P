import { motion } from 'framer-motion';
import { useLang } from '../hooks/useLang';
import { darshanabhilashi } from '../data/content';
import { NamasteSvg } from '../assets/ornaments';

export default function Darshanabhilashi() {
  const { t } = useLang();

  return (
    <section className="py-16 md:py-20 bg-[var(--color-ivory)] relative" id="darshanabhilashi">
      <div className="section-wrapper text-center">
        <motion.div
          className="flex items-center justify-center gap-4 md:gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <NamasteSvg className="w-12 h-16 md:w-16 md:h-20 text-[var(--color-gold)] opacity-50" />
          <h2
            className="text-3xl md:text-4xl text-[var(--color-maroon)] font-bold"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
          >
            {t(darshanabhilashi.heading)}
          </h2>
          <NamasteSvg className="w-12 h-16 md:w-16 md:h-20 text-[var(--color-gold)] opacity-50 scale-x-[-1]" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {darshanabhilashi.members.map((member, i) => (
            <motion.div
              key={i}
              className="card-ornate px-8 py-6"
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <p
                className="text-lg md:text-xl font-semibold text-[var(--color-maroon)]"
                style={{ fontFamily: 'var(--font-gujarati-display)' }}
              >
                {t(member)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
