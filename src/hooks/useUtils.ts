import { useState, useEffect, useCallback, useRef } from 'react';

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}

interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export function useCountdown(targetDate: string): CountdownResult {
  const calculate = useCallback(() => {
    const diff = new Date(targetDate).getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isComplete: false,
    };
  }, [targetDate]);

  const [countdown, setCountdown] = useState(calculate);

  useEffect(() => {
    const id = setInterval(() => setCountdown(calculate()), 1000);
    return () => clearInterval(id);
  }, [calculate]);

  return countdown;
}

/**
 * Audio manager with automatic fallback to an auspicious Indian wedding
 * Tanpura & Shehnai ambient drone synth if no MP3 audio file is present.
 */
export function useAudio(src?: string) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(() => {
    try {
      return localStorage.getItem('wedding-muted') === 'true';
    } catch {
      return false;
    }
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthCtxRef = useRef<AudioContext | null>(null);
  const synthMasterGainRef = useRef<GainNode | null>(null);
  const synthTimerRef = useRef<number | null>(null);

  // Initialize native Audio if src is provided
  useEffect(() => {
    if (typeof window === 'undefined' || !src) return;
    const a = new Audio();
    a.preload = 'none';
    a.loop = true;
    a.src = src;
    audioRef.current = a;

    return () => {
      a.pause();
      audioRef.current = null;
    };
  }, [src]);

  // Start Indian wedding ambient synth
  const startSynth = useCallback(() => {
    try {
      if (typeof window === 'undefined') return;
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      synthCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : 0.001, ctx.currentTime);
      if (!isMuted) {
        masterGain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 2.5);
      }
      masterGain.connect(ctx.destination);
      synthMasterGainRef.current = masterGain;

      // Soft Tanpura low-pass filter
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, ctx.currentTime);
      filter.connect(masterGain);

      // Tanpura drone frequencies (D3 = 146.83Hz, A3 = 220Hz, D4 = 293.66Hz)
      const freqs = [146.83, 220.0, 293.66];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = idx === 1 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Subtle detuning for warm acoustic warmth
        osc.detune.setValueAtTime((idx - 1) * 3, ctx.currentTime);

        gain.gain.setValueAtTime(0.12 / freqs.length, ctx.currentTime);
        osc.connect(gain);
        gain.connect(filter);
        osc.start();
      });

      // Shehnai melody notes (Raga Yaman / auspicious wedding notes in D: D, E, F#, G#, A, B, C#)
      const notes = [293.66, 329.63, 369.99, 440.0, 493.88, 587.33, 440.0, 369.99];
      let step = 0;

      const playNextMelodyNote = () => {
        if (!synthCtxRef.current || synthCtxRef.current.state === 'closed') return;
        const now = ctx.currentTime;
        const noteFreq = notes[step % notes.length];
        step++;

        const noteOsc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        // Sawtooth with soft resonant filter gives authentic Shehnai timbre
        noteOsc.type = 'sawtooth';
        noteOsc.frequency.setValueAtTime(noteFreq, now);

        const shehnaiFilter = ctx.createBiquadFilter();
        shehnaiFilter.type = 'bandpass';
        shehnaiFilter.frequency.setValueAtTime(noteFreq * 1.5, now);
        shehnaiFilter.Q.setValueAtTime(3.0, now);

        noteGain.gain.setValueAtTime(0.001, now);
        noteGain.gain.exponentialRampToValueAtTime(0.04, now + 0.3);
        noteGain.gain.exponentialRampToValueAtTime(0.001, now + 2.8);

        noteOsc.connect(shehnaiFilter);
        shehnaiFilter.connect(noteGain);
        noteGain.connect(masterGain);

        noteOsc.start(now);
        noteOsc.stop(now + 3.0);
      };

      // Play melody periodically
      synthTimerRef.current = window.setInterval(playNextMelodyNote, 3200);
      playNextMelodyNote();

      setIsPlaying(true);
    } catch {
      // Audio autoplay policy or AudioContext issue
    }
  }, [isMuted]);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (audio && audio.src && !audio.src.endsWith('/')) {
      audio.volume = 0;
      audio.muted = isMuted;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          let vol = 0;
          const fadeIn = setInterval(() => {
            vol = Math.min(vol + 0.05, 0.6);
            if (audio) audio.volume = vol;
            if (vol >= 0.6) clearInterval(fadeIn);
          }, 100);
        })
        .catch(() => {
          // Fallback to synth if audio file couldn't be played
          startSynth();
        });
    } else {
      startSynth();
    }
  }, [isMuted, startSynth]);

  const toggleMute = useCallback(() => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);

    try {
      localStorage.setItem('wedding-muted', String(newMuted));
    } catch {}

    // Update HTML audio if active
    if (audioRef.current) {
      audioRef.current.muted = newMuted;
    }

    // Update Web Audio synth if active
    if (synthMasterGainRef.current && synthCtxRef.current) {
      const now = synthCtxRef.current.currentTime;
      synthMasterGainRef.current.gain.cancelScheduledValues(now);
      synthMasterGainRef.current.gain.setValueAtTime(newMuted ? 0 : 0.25, now);
    }
  }, [isMuted]);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (synthCtxRef.current) {
      synthCtxRef.current.close().catch(() => {});
      synthCtxRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  return { play, stop, toggleMute, isPlaying, isMuted };
}
