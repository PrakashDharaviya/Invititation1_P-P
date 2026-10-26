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

  const buildWhatsAppMessage = useCallback((formData: FormData) => {
    const attendingText = formData.attending === 'yes'
      ? (lang === 'gu' ? 'હર્ષભેર ઉપસ્થિત રહીશું' : 'Joyfully Attending')
      : (lang === 'gu' ? 'ઉપસ્થિત રહી શકીશું નહીં' : 'Unable to Attend');

    if (lang === 'gu') {
      const lines = [
        '*નમસ્તે!*',
        '',
        `હું *${formData.name.trim() || '___'}* - ડૉ. પ્રેમ અને ડૉ. પ્રિયંકાના શુભ લગ્ન પ્રસંગે:`,
        `*ઉપસ્થિતિ:* ${attendingText}`,
      ];
      if (formData.attending === 'yes') {
        lines.push(`*મહેમાનો:* ${formData.guests}`);
      }
      if (formData.events.length > 0) {
        lines.push(`*પ્રસંગ:* ${formData.events.join(', ')}`);
      }
      if (formData.message.trim()) {
        lines.push(`*સંદેશ:* ${formData.message.trim()}`);
      }
      lines.push('');
      lines.push('*ખૂબ ખૂબ શુભકામનાઓ!*');
      return lines.join('\n');
    }

    const lines = [
      '*Hello!*',
      '',
      `I am *${formData.name.trim() || '___'}* - regarding Dr. Prem & Dr. Priyanka's Wedding:`,
      `*Attendance:* ${attendingText}`,
    ];
    if (formData.attending === 'yes') {
      lines.push(`*Guests:* ${formData.guests}`);
    }
    if (formData.events.length > 0) {
      lines.push(`*Events:* ${formData.events.join(', ')}`);
    }
    if (formData.message.trim()) {
      lines.push(`*Message:* ${formData.message.trim()}`);
    }
    lines.push('');
    lines.push('*Warmest Congratulations!*');
    return lines.join('\n');
  }, [lang]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim()) {
      setError(t({ gu: 'કૃપા કરી આપનું નામ દાખલ કરો', en: 'Please enter your name' }));
      return;
    }
    if (!form.attending) {
      setError(t({ gu: 'કૃપા કરી આપની ઉપસ્થિતિ પસંદ કરો', en: 'Please select attendance' }));
      return;
    }

    const msg = buildWhatsAppMessage(form);
    const waUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');

    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#E8CF8A', '#C9A24B', '#E07B1F', '#25D366'],
    });

    setSubmitted(true);
  }, [form, t, buildWhatsAppMessage]);

  const currentWaUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    buildWhatsAppMessage(form)
  )}`;

  if (submitted) {
    return (
      <section id="rsvp" className="py-16 md:py-24 bg-[var(--color-ivory)]">
        <div className="section-wrapper text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card-ornate max-w-md mx-auto py-10 px-6"
          >
            <span className="text-5xl mb-4 block">🎉</span>
            <p
              className="text-2xl font-bold text-[var(--color-maroon)] mb-2"
              style={{ fontFamily: 'var(--font-gujarati-display)' }}
            >
              {t(rsvpData.successMessage)}
            </p>
            <p className="text-sm text-[var(--color-dark)] opacity-80 mb-6">
              {t({
                gu: 'આપનો RSVP સંદેશ WhatsApp પર તૈયાર છે. જો WhatsApp ન ખૂલ્યું હોય તો નીચેનું બટન દબાવો.',
                en: 'Your RSVP message is ready on WhatsApp. If WhatsApp did not open, tap the button below.',
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={currentWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm py-2.5 px-5"
              >
                💬 {t({ gu: 'WhatsApp ફરી ખોલો', en: 'Open WhatsApp Again' })}
              </a>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-outline-gold text-xs py-2.5 px-4 cursor-pointer"
              >
                {t({ gu: 'ફરીથી ફોર્મ ભરો', en: 'Edit / Fill Again' })}
              </button>
            </div>
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
                className={`flex-1 py-3 rounded-lg border-2 text-sm font-medium transition-all cursor-pointer ${
                  form.attending === 'yes'
                    ? 'border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-maroon-dark)] shadow-sm'
                    : 'border-gray-200 hover:border-[var(--color-gold)]'
                }`}
              >
                🎉 {t(rsvpData.fields.attending.yes)}
              </button>
              <button
                type="button"
                onClick={() => setForm({ ...form, attending: 'no' })}
                className={`flex-1 py-3 rounded-lg border-2 text-sm font-medium transition-all cursor-pointer ${
                  form.attending === 'no'
                    ? 'border-[var(--color-maroon)] bg-[var(--color-maroon)] text-[var(--color-ivory)] shadow-sm'
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
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                      form.events.includes(event.id)
                        ? 'bg-[var(--color-gold)] text-[var(--color-maroon-dark)] border-[var(--color-gold)] shadow-sm'
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

          {/* Option C: WhatsApp Only Submit */}
          <div className="mt-4">
            <button
              type="submit"
              className="btn-whatsapp w-full flex items-center justify-center gap-2 text-base font-bold shadow-lg"
              id="rsvp-whatsapp-submit"
            >
              <span className="text-xl">💬</span>
              <span>{t(rsvpData.whatsappButton)}</span>
            </button>
            <p className="text-center text-xs text-[var(--color-dark)] opacity-60 mt-3">
              {t({
                gu: 'આ બટન દબાવતા સીધો WhatsApp મેસેજ મોકલી શકાશે',
                en: 'Tapping this button will open WhatsApp with your response',
              })}
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
