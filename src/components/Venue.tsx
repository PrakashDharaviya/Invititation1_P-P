import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { useLang } from '../hooks/useLang';
import { venues } from '../data/content';

export default function Venue() {
  const { t } = useLang();

  return (
    <section id="venue" className="py-16 md:py-24 damask-bg relative">
      <div className="section-wrapper">
        <motion.div
          className="heading-ornament"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-4xl text-[var(--color-maroon)] font-bold"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
          >
            📍 {t({ gu: 'સ્થળ', en: 'Venue' })}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {venues.map((venue, i) => (
            <motion.div
              key={i}
              className="venue-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Animated pin */}
              <motion.div
                className="text-3xl mb-3"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                📍
              </motion.div>

              <h3
                className="text-lg font-bold text-[var(--color-maroon)] mb-1"
                style={{ fontFamily: 'var(--font-gujarati-display)' }}
              >
                {t(venue.label)}
              </h3>
              <h4
                className="text-xl font-bold text-[var(--color-gold-dark)] mb-3"
                style={{ fontFamily: 'var(--font-gujarati-display)' }}
              >
                {t(venue.name)}
              </h4>
              <p className="text-sm text-[var(--color-dark)] opacity-80 leading-relaxed mb-6"
                 style={{ lineHeight: '1.8' }}>
                {t(venue.address)}
              </p>

              {/* QR Code */}
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <QRCodeSVG
                    value={venue.mapsUrl}
                    size={100}
                    bgColor="#FFFFFF"
                    fgColor="#2A1216"
                    level="M"
                  />
                </div>
              </div>
              <p className="text-xs text-[var(--color-gold-dark)] opacity-60 mb-4">
                {t({ gu: 'QR સ્કૅન કરો', en: 'Scan QR for Location' })}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-sm"
                >
                  🗺️ {t({ gu: 'Google Maps જુઓ', en: 'View on Google Maps' })}
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(t(venue.name) + ' ' + t(venue.address))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold text-sm"
                  style={{ color: 'var(--color-gold-dark)', borderColor: 'var(--color-gold-dark)' }}
                >
                  🧭 {t({ gu: 'દિશા મેળવો', en: 'Get Directions' })}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
