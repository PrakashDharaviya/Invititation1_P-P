import { useReducedMotion } from '../hooks/useUtils';

interface PetalsProps {
  count?: number;
}

export default function Petals({ count = 12 }: PetalsProps) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return null;

  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const left = `${5 + Math.random() * 90}%`;
        const duration = `${6 + Math.random() * 8}s`;
        const delay = `${Math.random() * 10}s`;
        const drift = `${-40 + Math.random() * 80}px`;
        const size = 8 + Math.random() * 10;
        const hue = Math.random() > 0.5 ? '#E07B1F' : Math.random() > 0.5 ? '#C9A24B' : '#E8CF8A';

        return (
          <div
            key={i}
            className="petal"
            style={{
              left,
              width: `${size}px`,
              height: `${size}px`,
              background: hue,
              '--duration': duration,
              '--delay': delay,
              '--drift': drift,
              opacity: 0.4 + Math.random() * 0.3,
            } as React.CSSProperties}
          />
        );
      })}
    </>
  );
}
