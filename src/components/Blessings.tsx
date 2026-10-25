import { motion, type Variants } from 'framer-motion';
import { useLang } from '../hooks/useLang';
import { blessings, familyNames, dinnerInvitation } from '../data/content';
import { KalashSvg } from '../assets/ornaments';

export default function Blessings() {
  const { t } = useLang();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section id="blessings" className="damask-bg py-16 md:py-24 relative">
      <div className="section-wrapper">
        {/* Heading */}
        <motion.div
          className="heading-ornament"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
        >
          <KalashSvg className="w-10 h-14 text-[var(--color-gold)] opacity-50" />
          <h2
            className="text-3xl md:text-4xl text-[var(--color-maroon)] font-bold"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
          >
            {t(blessings.heading)}
          </h2>
          <KalashSvg className="w-10 h-14 text-[var(--color-gold)] opacity-50 scale-x-[-1]" />
        </motion.div>

        {/* Elders block */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
        >
          <p className="text-[var(--color-saffron)] text-sm font-medium tracking-wider uppercase mb-2">
            {t(blessings.eldersNote)}
          </p>
          <p className="text-[var(--color-maroon)] text-base md:text-lg leading-relaxed max-w-2xl mx-auto opacity-90"
             style={{ fontFamily: 'var(--font-gujarati-display)' }}>
            {t(blessings.elders)}
          </p>
        </motion.div>

        {/* Invitation paragraph */}
        <motion.div
          className="card-ornate max-w-3xl mx-auto mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
        >
          <div className="absolute top-3 left-3 w-8 h-8 opacity-20 text-[var(--color-gold)]">
            <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="0.8">
              <path d="M0 0 Q20 0 40 10 Q50 16 50 30" /><path d="M0 0 Q0 20 10 40 Q16 50 30 50" />
            </svg>
          </div>
          <div className="absolute bottom-3 right-3 w-8 h-8 opacity-20 text-[var(--color-gold)] rotate-180">
            <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="0.8">
              <path d="M0 0 Q20 0 40 10 Q50 16 50 30" /><path d="M0 0 Q0 20 10 40 Q16 50 30 50" />
            </svg>
          </div>
          <p
            className="text-base md:text-lg leading-relaxed text-[var(--color-dark)] whitespace-pre-line"
            style={{ fontFamily: 'var(--font-gujarati-body)', lineHeight: '2' }}
          >
            {t(blessings.invitationParagraph)}
          </p>
        </motion.div>

        {/* Family Names - Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Groom's family */}
          <motion.div
            className="card-ornate text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3
              className="text-xl font-bold text-[var(--color-maroon)] mb-4 gold-shimmer-text"
              style={{ fontFamily: 'var(--font-gujarati-display)' }}
            >
              {t(familyNames.groomSide.heading)}
            </h3>
            <div className="space-y-3">
              {familyNames.groomSide.members.map((member, i) => (
                <motion.div
                  key={i}
                  className="text-sm md:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <p className="font-medium text-[var(--color-dark)]">{t(member)}</p>
                  <p className="text-xs text-[var(--color-gold-dark)] opacity-70">{t(member.relation)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bride's family */}
          <motion.div
            className="card-ornate text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3
              className="text-xl font-bold text-[var(--color-maroon)] mb-4 gold-shimmer-text"
              style={{ fontFamily: 'var(--font-gujarati-display)' }}
            >
              {t(familyNames.brideSide.heading)}
            </h3>
            <div className="space-y-3">
              {familyNames.brideSide.members.map((member, i) => (
                <motion.div
                  key={i}
                  className="text-sm md:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <p className="font-medium text-[var(--color-dark)]">{t(member)}</p>
                  <p className="text-xs text-[var(--color-gold-dark)] opacity-70">{t(member.relation)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dinner Invitation */}
        <motion.div
          className="card-ornate max-w-3xl mx-auto text-center border-[var(--color-saffron)] border-opacity-30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3
            className="text-xl font-bold text-[var(--color-saffron)] mb-3"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
          >
            🍽️ {t({ gu: 'ભોજન સમારંભ', en: 'Dinner Celebration' })}
          </h3>
          <p
            className="text-base leading-relaxed whitespace-pre-line text-[var(--color-dark)]"
            style={{ fontFamily: 'var(--font-gujarati-body)', lineHeight: '1.9' }}
          >
            {t(dinnerInvitation)}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
