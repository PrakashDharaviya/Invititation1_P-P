import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLang } from '../hooks/useLang';
import { rsvp as rsvpData, config, timeline } from '../data/content';

interface FormData {
  name: string;
  attending: 'yes' | 'no' | '';
  guests: number;
  events: string[];
  message: string;
}

export default function RSVP() {
  const { t, lang } = useLang();
  const [form, setForm] = useState<FormData>({
    name: '',
    attending: '',
    guests: 1,
    events: [],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const allEvents = timeline.flatMap(day =>
    day.events.map(e => ({ id: t(e.name), label: t(e.name) }))
  );

  const toggleEvent = (id: string) => {
    setForm(prev => ({
      ...prev,
      events: prev.events.includes(id)
        ? prev.events.filter(e => e !== id)
        : [...prev.events, id],
    }));
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim()) {
      setError(t({ gu: 'કૃપા કરી નામ દાખલ કરો', en: 'Please enter your name' }));
      return;
    }
    if (!form.attending) {
      setError(t({ gu: 'કૃપા કરી ઉપસ્થિતિ પસંદ કરો', en: 'Please select attendance' }));
      return;
    }

    setSubmitting(true);
    try {
      if (config.rsvpWebhookUrl) {
        await fetch(config.rsvpWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            attending: form.attending,
            guests: form.guests,
            events: form.events.join(', '),
            message: form.message,
            language: lang,
            timestamp: new Date().toISOString(),
          }),
        });
      }
      setSubmitted(true);
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#E8CF8A', '#C9A24B', '#E07B1F'],
      });
    } catch {
      setError(t({ gu: 'કંઈક ખોટું થયું, કૃપા કરી ફરી પ્રયાસ કરો', en: 'Something went wrong, please try again' }));
    }
    setSubmitting(false);
  }, [form, t, lang]);

  const whatsappMessage = encodeURIComponent(
    t({
      gu: `🙏 નમસ્તે!\nહું ${form.name || '___'} - ડૉ. પ્રેમ અને ડૉ. પ્રિયંકાના લગ્નમાં ${form.attending === 'yes' ? 'ઉપસ્થિત રહીશ' : 'ઉપસ્થિત રહી શકીશ નહીં'}.\nમહેમાન: ${form.guests}\nસંદેશ: ${form.message || '-'}`,
      en: `🙏 Hello!\nI'm ${form.name || '___'} - I will ${form.attending === 'yes' ? 'be attending' : 'not be able to attend'} Dr. Prem & Dr. Priyanka's wedding.\nGuests: ${form.guests}\nMessage: ${form.message || '-'}`,
    })
  );

  if (submitted) {
    return (
      <section id="rsvp" className="py-16 md:py-24 bg-[var(--color-ivory)]">
        <div className="section-wrapper text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card-ornate max-w-md mx-auto py-12"
          >
            <span className="text-5xl mb-4 block">🎉</span>
            <p
              className="text-xl font-bold text-[var(--color-maroon)] mb-2"
              style={{ fontFamily: 'var(--font-gujarati-display)' }}
            >
              {t(rsvpData.successMessage)}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-16 md:py-24 bg-[var(--color-ivory)]">
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
            💌 {t(rsvpData.heading)}
          </h2>
        </motion.div>

        <p className="text-center text-[var(--color-dark)] opacity-70 mb-8">
          {t(rsvpData.subheading)}
        </p>

        <motion.form
          className="card-ornate max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-[var(--color-dark)] mb-1.5">
              {t(rsvpData.fields.name)} *
            </label>
            <input
              type="text"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-gold)] border-opacity-30 bg-white focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-opacity-20 outline-none transition-all text-[var(--color-dark)]"
              required
              aria-required="true"
              id="rsvp-name"
            />
          </div>

          {/* Attending */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-[var(--color-dark)] mb-2">
              {t(rsvpData.fields.attending.label)} *
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setForm({ ...form, attending: 'yes' })}
                className={`flex-1 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                  form.attending === 'yes'
                    ? 'border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-maroon-dark)]'
                    : 'border-gray-200 hover:border-[var(--color-gold)]'
                }`}
              >
                🎉 {t(rsvpData.fields.attending.yes)}
              </button>
              <button
                type="button"
                onClick={() => setForm({ ...form, attending: 'no' })}
                className={`flex-1 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                  form.attending === 'no'
                    ? 'border-[var(--color-maroon)] bg-[var(--color-maroon)] text-[var(--color-ivory)]'
                    : 'border-gray-200 hover:border-[var(--color-maroon)]'
                }`}
              >
                😔 {t(rsvpData.fields.attending.no)}
              </button>
            </div>
          </div>

          {/* Number of guests */}
          {form.attending === 'yes' && (
            <div className="mb-5">
              <label className="block text-sm font-medium text-[var(--color-dark)] mb-1.5">
                {t(rsvpData.fields.guests)}
              </label>
              <select
                value={form.guests}
                onChange={e => setForm({ ...form, guests: Number(e.target.value) })}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-gold)] border-opacity-30 bg-white focus:border-[var(--color-gold)] outline-none transition-all text-[var(--color-dark)]"
                id="rsvp-guests"
              >
                {[1, 2, 3, 4, 5, 6].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
          )}

          {/* Events attending */}
          {form.attending === 'yes' && (
            <div className="mb-5">
              <label className="block text-sm font-medium text-[var(--color-dark)] mb-2">
                {t(rsvpData.fields.events)}
              </label>
              <div className="flex flex-wrap gap-2">
                {allEvents.map((event, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => toggleEvent(event.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                      form.events.includes(event.id)
                        ? 'bg-[var(--color-gold)] text-[var(--color-maroon-dark)] border-[var(--color-gold)]'
                        : 'border-gray-300 text-[var(--color-dark)] hover:border-[var(--color-gold)]'
                    }`}
                  >
                    {event.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[var(--color-dark)] mb-1.5">
              {t(rsvpData.fields.message)}
            </label>
            <textarea
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-gold)] border-opacity-30 bg-white focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-opacity-20 outline-none transition-all text-[var(--color-dark)] resize-none"
              id="rsvp-message"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-600 text-sm mb-4" role="alert">{error}</p>
          )}

          {/* Submit & WhatsApp */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="btn-gold flex-1"
              disabled={submitting}
            >
              {submitting ? '...' : `✉️ ${t(rsvpData.fields.submit)}`}
            </button>
            <a
              href={`https://wa.me/${config.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-maroon flex-1 text-center"
            >
              💬 {t(rsvpData.whatsappButton)}
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
