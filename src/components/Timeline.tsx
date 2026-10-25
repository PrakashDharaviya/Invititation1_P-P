import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../hooks/useLang';
import { timeline } from '../data/content';
import { EventIcons, ToranSvg } from '../assets/ornaments';

/* ── Inline SVG Icons ────────────────────────────────────────────────── */

/** Stopwatch / Clock icon (matches the user's reference) */
function ClockIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Ring at top */}
      <circle cx="12" cy="2.5" r="1.5" fill="currentColor" stroke="none" />
      {/* Main circle */}
      <circle cx="12" cy="13.5" r="9" />
      {/* Tick marks */}
      <line x1="12" y1="5.5" x2="12" y2="7" />
      <line x1="12" y1="20" x2="12" y2="21.5" />
      <line x1="4" y1="13.5" x2="5.5" y2="13.5" />
      <line x1="18.5" y1="13.5" x2="20" y2="13.5" />
      {/* Hands */}
      <line x1="12" y1="13.5" x2="12" y2="9" />
      <line x1="12" y1="13.5" x2="15.5" y2="11.5" />
    </svg>
  );
}

/** Calendar icon (matches the user's reference) */
function CalendarIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Body */}
      <rect x="3" y="5" width="18" height="16" rx="3" />
      {/* Top rings */}
      <line x1="8" y1="2" x2="8" y2="7" />
      <line x1="16" y1="2" x2="16" y2="7" />
      {/* Divider line */}
      <line x1="3" y1="10" x2="21" y2="10" />
      {/* Grid squares */}
      <rect x="7" y="13" width="2.5" height="2" rx="0.3" fill="currentColor" stroke="none" />
      <rect x="11" y="13" width="2.5" height="2" rx="0.3" fill="currentColor" stroke="none" />
      <rect x="15" y="13" width="2.5" height="2" rx="0.3" fill="currentColor" stroke="none" />
      <rect x="7" y="17" width="2.5" height="2" rx="0.3" fill="currentColor" stroke="none" />
      <rect x="11" y="17" width="2.5" height="2" rx="0.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Generate an .ics calendar file content */
function generateICS(title: string, start: string, durationMinutes: number, location?: string): string {
  const startDate = new Date(start);
  const endDate = new Date(startDate.getTime() + durationMinutes * 60 * 1000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedding//Prem-Priyanka//EN',
    'BEGIN:VEVENT',
    `DTSTART:${fmt(startDate)}`,
    `DTEND:${fmt(endDate)}`,
    `SUMMARY:${title}`,
    location ? `LOCATION:${location}` : '',
    'DESCRIPTION:Wedding celebration of Dr. Prem & Dr. Priyanka',
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean).join('\r\n');
}

function downloadICS(title: string, start: string, durationMinutes: number) {
  const ics = generateICS(title, start, durationMinutes, 'Star Light Party Plot, Jamnagar');
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${title.replace(/\s+/g, '_')}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function Timeline() {
  const { t } = useLang();

  const handleAddCalendar = useCallback((title: string, date: string, duration: number) => {
    downloadICS(title, date, duration);
  }, []);

  return (
    <section id="celebrations" className="py-16 md:py-24 bg-[var(--color-ivory)] relative">
      {/* Toran at top */}
      <div className="text-[var(--color-gold)] opacity-30 absolute top-0 left-0 right-0">
        <ToranSvg className="w-full h-auto" />
      </div>

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
            {t({ gu: 'ઉજવણી', en: 'Celebrations' })}
          </h2>
        </motion.div>

        {/* Timeline days */}
        {timeline.map((day, dayIdx) => (
          <div key={dayIdx} className="mb-12 last:mb-0">
            {/* Day header */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3
                className="inline-block px-6 py-2 bg-[var(--color-maroon)] text-[var(--color-gold-light)] rounded-full text-lg md:text-xl font-semibold"
                style={{ fontFamily: 'var(--font-gujarati-display)' }}
              >
                {t(day.day)}
              </h3>
            </motion.div>

            {/* Event cards */}
            <div className="relative">
              {/* Vertical timeline line (mobile) */}
              <div className="timeline-line hidden md:block" />

              <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 relative">
                {day.events.map((event, eventIdx) => {
                  const IconComp = EventIcons[event.icon];
                  const isEven = eventIdx % 2 === 0;

                  return (
                    <motion.div
                      key={eventIdx}
                      className={`relative ${isEven ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`}
                      initial={{ opacity: 0, y: 30, rotateX: 5 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.6, delay: eventIdx * 0.1 }}
                    >
                      {/* Timeline dot (desktop) */}
                      <div
                        className={`timeline-dot hidden md:block ${isEven ? '-right-2' : '-left-2'}`}
                        style={{ top: '2rem', left: isEven ? 'auto' : '-8px', right: isEven ? '-8px' : 'auto' }}
                      />

                      {/* Card */}
                      <div className="card-ornate group hover:border-[var(--color-gold)] transition-colors">
                        {/* Hanging string illusion */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-[var(--color-gold)] opacity-40" />
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--color-gold)] opacity-40" />

                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          {IconComp && (
                            <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 text-[var(--color-gold)] opacity-60 group-hover:opacity-100 transition-opacity">
                              <IconComp className="w-full h-full" />
                            </div>
                          )}
                          <div className="flex-1">
                            <h4
                              className="text-lg font-bold text-[var(--color-maroon)]"
                              style={{ fontFamily: 'var(--font-gujarati-display)' }}
                            >
                              {t(event.name)}
                            </h4>
                            <p className="text-[var(--color-gold-dark)] text-sm mt-1 font-medium flex items-center gap-1.5">
                              <ClockIcon className="w-4 h-4 inline-block flex-shrink-0" />
                              {t(event.time)}
                            </p>
                          </div>
                        </div>

                        {/* Add to calendar */}
                        <button
                          className="btn-outline-gold mt-4 text-xs w-full flex items-center justify-center gap-2"
                          onClick={() => handleAddCalendar(event.calendarTitle, event.date, event.durationMinutes)}
                          aria-label={`Add ${event.calendarTitle} to calendar`}
                        >
                          <CalendarIcon className="w-4 h-4 flex-shrink-0" />
                          {t({ gu: 'કૅલેન્ડરમાં ઉમેરો', en: 'Add to Calendar' })}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
