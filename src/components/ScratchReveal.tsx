import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLang } from '../hooks/useLang';
import { scratchReveal } from '../data/content';

export default function ScratchReveal() {
  const { t } = useLang();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const scratchedRef = useRef(0);

  const checkReveal = useCallback(() => {
    if (revealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let cleared = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) cleared++;
    }
    const percent = cleared / (imageData.data.length / 4);
    scratchedRef.current = percent;
    if (percent > 0.4) {
      setRevealed(true);
      confetti({
        particleCount: 100,
        spread: 120,
        origin: { y: 0.5 },
        colors: ['#E8CF8A', '#C9A24B', '#E07B1F', '#6B1022'],
        ticks: 150,
      });
    }
  }, [revealed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const rect = canvas.parentElement!.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Draw the gold cover
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#C9A24B');
    gradient.addColorStop(0.3, '#E8CF8A');
    gradient.addColorStop(0.6, '#B8892F');
    gradient.addColorStop(1, '#C9A24B');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw scratch text hint
    ctx.font = '16px Poppins, sans-serif';
    ctx.fillStyle = '#4A0B17';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ ' + t(scratchReveal.tapToReveal) + ' ✨', canvas.width / 2, canvas.height / 2);

    // Draw decorative pattern
    ctx.strokeStyle = 'rgba(74, 11, 23, 0.15)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i < canvas.width; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + 10, canvas.height);
      ctx.stroke();
    }
  }, [revealed, t]);

  const scratch = useCallback((x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const cx = x - rect.left;
    const cy = y - rect.top;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  }, [revealed]);

  const handleMove = useCallback((x: number, y: number) => {
    if (!isScratching) return;
    scratch(x, y);
  }, [isScratching, scratch]);

  const handleEnd = useCallback(() => {
    setIsScratching(false);
    checkReveal();
  }, [checkReveal]);

  const handleTapReveal = useCallback(() => {
    setRevealed(true);
    confetti({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.5 },
      colors: ['#E8CF8A', '#C9A24B', '#E07B1F', '#6B1022'],
      ticks: 150,
    });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[var(--color-ivory)]" id="date-reveal">
      <div className="section-wrapper text-center">
        {/* Heading */}
        <motion.div
          className="heading-ornament"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-2xl md:text-3xl text-[var(--color-maroon)] font-bold"
            style={{ fontFamily: 'var(--font-gujarati-display)' }}
          >
            ✨ {t(scratchReveal.heading)}
          </h2>
        </motion.div>

        {/* Scratch card */}
        <motion.div
          className="scratch-container mx-auto mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Reveal content underneath */}
          <div className="scratch-reveal">
            <motion.div
              initial={false}
              animate={revealed ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[var(--color-maroon-dark)] text-lg md:text-xl font-bold"
                    style={{ fontFamily: 'var(--font-gujarati-display)' }}>
                💍
              </span>
              <p
                className="text-[var(--color-maroon-dark)] text-base md:text-xl font-bold leading-relaxed"
                style={{ fontFamily: 'var(--font-gujarati-display)' }}
              >
                {t(scratchReveal.revealText)}
              </p>
              <span className="text-2xl mt-2">🎉</span>
            </motion.div>
          </div>

          {/* Canvas overlay */}
          {!revealed && (
            <canvas
              ref={canvasRef}
              className="scratch-canvas"
              onMouseDown={(e) => { setIsScratching(true); scratch(e.clientX, e.clientY); }}
              onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={(e) => {
                setIsScratching(true);
                const t = e.touches[0];
                scratch(t.clientX, t.clientY);
              }}
              onTouchMove={(e) => {
                const t = e.touches[0];
                handleMove(t.clientX, t.clientY);
              }}
              onTouchEnd={handleEnd}
              aria-label="Scratch card - scratch to reveal the wedding date"
              role="img"
            />
          )}
        </motion.div>

        {/* Accessibility fallback */}
        {!revealed && (
          <button
            onClick={handleTapReveal}
            className="btn-outline-gold mt-6 text-sm"
            aria-label="Tap to reveal the date"
          >
            👆 {t(scratchReveal.tapToReveal)}
          </button>
        )}
      </div>
    </section>
  );
}
