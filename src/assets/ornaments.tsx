// SVG Ornaments - Original line-art for the wedding invitation
// These are original decorative SVG components inspired by traditional Gujarati motifs.

import React from 'react';

export const GaneshSvg: React.FC<{ className?: string; onClick?: () => void }> = ({ className = '', onClick }) => (
  <svg
    viewBox="0 0 120 140"
    className={`${className}`}
    onClick={onClick}
    role={onClick ? 'button' : 'img'}
    aria-label="Ganesh Ji"
    tabIndex={onClick ? 0 : undefined}
    onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Crown/Head ornament */}
    <path d="M60 8 L52 20 L42 16 L46 28 L36 28 L44 38 L60 32 L76 38 L84 28 L74 28 L78 16 L68 20 Z"
      stroke="currentColor" strokeWidth="1.2" fill="none" className="draw-svg" />
    {/* Head circle */}
    <ellipse cx="60" cy="48" rx="22" ry="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
    {/* Eyes */}
    <ellipse cx="52" cy="44" rx="3" ry="2.5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.7" />
    <ellipse cx="68" cy="44" rx="3" ry="2.5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.7" />
    {/* Trunk */}
    <path d="M60 55 Q58 65 52 72 Q48 78 52 82 Q56 84 58 80 Q60 76 60 70"
      stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Ears */}
    <path d="M38 42 Q28 38 26 48 Q24 58 34 56" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M82 42 Q92 38 94 48 Q96 58 86 56" stroke="currentColor" strokeWidth="1.2" fill="none" />
    {/* Tusk */}
    <path d="M64 60 L68 68 L66 66" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.5" />
    {/* Body */}
    <ellipse cx="60" cy="95" rx="28" ry="22" stroke="currentColor" strokeWidth="1.5" fill="none" />
    {/* Belly */}
    <path d="M48 90 Q60 105 72 90" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
    {/* Arms - left holding modak */}
    <path d="M32 85 Q22 80 20 88 Q18 96 26 94" stroke="currentColor" strokeWidth="1.2" fill="none" />
    {/* Small modak/ladoo */}
    <circle cx="22" cy="90" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
    {/* Arms - right holding flower */}
    <path d="M88 85 Q98 80 100 88 Q102 96 94 94" stroke="currentColor" strokeWidth="1.2" fill="none" />
    {/* Flower */}
    <circle cx="98" cy="88" r="3" stroke="currentColor" strokeWidth="0.8" fill="none" />
    <circle cx="98" cy="88" r="1" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.3" />
    {/* Legs */}
    <path d="M45 115 Q42 125 46 132 Q50 136 54 132" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M75 115 Q78 125 74 132 Q70 136 66 132" stroke="currentColor" strokeWidth="1.2" fill="none" />
    {/* Mouse/Mushak at bottom */}
    <ellipse cx="60" cy="136" rx="6" ry="3" stroke="currentColor" strokeWidth="0.8" fill="none" />
    <path d="M66 136 Q70 134 72 136" stroke="currentColor" strokeWidth="0.8" fill="none" />
  </svg>
);

export const SwastikSvg: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 48 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Swastik" role="img">
    {/* Central cross */}
    <line x1="24" y1="8" x2="24" y2="40" stroke="currentColor" strokeWidth="2.5" />
    <line x1="8" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="2.5" />
    {/* Arms - clockwise */}
    <line x1="24" y1="8" x2="34" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="40" y1="24" x2="40" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="24" y1="40" x2="14" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="8" y1="24" x2="8" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    {/* Corner dots */}
    <circle cx="16" cy="16" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="32" cy="16" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="32" cy="32" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="16" cy="32" r="2" fill="currentColor" opacity="0.6" />
  </svg>
);

export const KalashSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 60 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Kalash" role="img">
    {/* Mango leaves at top */}
    <path d="M30 4 Q24 10 20 6" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M30 4 Q36 10 40 6" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M30 4 L30 14" stroke="currentColor" strokeWidth="1" />
    {/* Coconut */}
    <circle cx="30" cy="18" r="7" stroke="currentColor" strokeWidth="1.2" fill="none" />
    {/* Pot opening */}
    <path d="M20 25 Q30 22 40 25" stroke="currentColor" strokeWidth="1.2" fill="none" />
    {/* Pot body */}
    <path d="M18 28 Q16 50 22 62 Q26 68 30 70 Q34 68 38 62 Q44 50 42 28"
      stroke="currentColor" strokeWidth="1.5" fill="none" />
    {/* Decorative band */}
    <path d="M20 36 Q30 34 40 36" stroke="currentColor" strokeWidth="0.8" fill="none" />
    <path d="M19 40 Q30 38 41 40" stroke="currentColor" strokeWidth="0.8" fill="none" />
    {/* Base */}
    <path d="M24 70 Q30 74 36 70" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <line x1="22" y1="74" x2="38" y2="74" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export const DiyaSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 50 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Diya" role="img">
    {/* Flame */}
    <path d="M25 8 Q22 14 22 18 Q22 22 25 22 Q28 22 28 18 Q28 14 25 8Z"
      stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.4" />
    <path d="M25 12 Q24 16 24 18 Q24 20 25 20 Q26 20 26 18 Q26 16 25 12Z"
      fill="currentColor" opacity="0.6" />
    {/* Diya body */}
    <path d="M15 28 Q12 26 14 24 L36 24 Q38 26 35 28"
      stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M14 28 Q12 34 16 38 Q20 42 25 42 Q30 42 34 38 Q38 34 36 28"
      stroke="currentColor" strokeWidth="1.2" fill="none" />
    {/* Wick */}
    <line x1="25" y1="22" x2="25" y2="24" stroke="currentColor" strokeWidth="1" />
    {/* Base */}
    <ellipse cx="25" cy="42" rx="8" ry="2" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
);

export const PeacockFeatherSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 40 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Peacock Feather" role="img">
    {/* Quill stem */}
    <path d="M20 120 Q18 80 20 40 Q22 20 20 0" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    {/* Main eye feather */}
    <ellipse cx="20" cy="35" rx="12" ry="20" stroke="currentColor" strokeWidth="1" fill="none" />
    <ellipse cx="20" cy="35" rx="8" ry="14" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.7" />
    <ellipse cx="20" cy="32" rx="4" ry="6" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.2" />
    <circle cx="20" cy="30" r="2" fill="currentColor" opacity="0.5" />
    {/* Barbs */}
    <path d="M8 40 Q14 38 18 35" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <path d="M32 40 Q26 38 22 35" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <path d="M6 50 Q12 46 18 42" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <path d="M34 50 Q28 46 22 42" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <path d="M10 60 Q14 56 18 50" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <path d="M30 60 Q26 56 22 50" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
  </svg>
);

export const ToranSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 400 60" className={className} preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Toran decoration" role="img">
    {/* Top bar */}
    <line x1="0" y1="2" x2="400" y2="2" stroke="currentColor" strokeWidth="2" />
    {/* Main swag/drape */}
    <path d="M0 4 Q50 40 100 4 Q150 40 200 4 Q250 40 300 4 Q350 40 400 4"
      stroke="currentColor" strokeWidth="1.5" fill="none" />
    {/* Inner swag */}
    <path d="M0 4 Q50 32 100 4 Q150 32 200 4 Q250 32 300 4 Q350 32 400 4"
      stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
    {/* Hanging beads/flowers */}
    {[50, 100, 150, 200, 250, 300, 350].map(x => (
      <g key={x}>
        <line x1={x} y1={x % 100 === 0 ? 4 : 28} x2={x} y2={x % 100 === 0 ? 28 : 50} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <circle cx={x} cy={x % 100 === 0 ? 32 : 54} r="3" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <circle cx={x} cy={x % 100 === 0 ? 32 : 54} r="1.5" fill="currentColor" opacity="0.3" />
      </g>
    ))}
    {/* Mango leaves at swag points */}
    {[50, 150, 250, 350].map(x => (
      <g key={`leaf-${x}`}>
        <path d={`M${x-4} 36 Q${x} 44 ${x+4} 36`} stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.5" />
      </g>
    ))}
  </svg>
);

export const NamasteSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 60 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Namaste" role="img">
    {/* Head */}
    <circle cx="30" cy="14" r="8" stroke="currentColor" strokeWidth="1.2" fill="none" />
    {/* Tilak */}
    <path d="M30 8 L28 12 L32 12 Z" fill="currentColor" opacity="0.3" />
    {/* Body */}
    <path d="M22 22 Q20 40 22 55 Q24 62 30 65 Q36 62 38 55 Q40 40 38 22"
      stroke="currentColor" strokeWidth="1.2" fill="none" />
    {/* Folded hands (Namaste) */}
    <path d="M26 32 L30 26 L34 32" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M26 32 Q28 36 30 38 Q32 36 34 32" stroke="currentColor" strokeWidth="1.2" fill="none" />
    {/* Dhoti drape */}
    <path d="M22 55 Q26 58 30 65 Q34 58 38 55" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
    {/* Feet */}
    <path d="M24 65 Q22 72 26 74" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M36 65 Q38 72 34 74" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
);

export const MandalaBorderSvg: React.FC<{ className?: string; corner?: 'tl' | 'tr' | 'bl' | 'br' }> = ({ className = '', corner = 'tl' }) => {
  const rotation = {
    tl: 0,
    tr: 90,
    bl: 270,
    br: 180,
  }[corner];

  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      style={{ transform: `rotate(${rotation}deg)` }}>
      {/* Corner ornament */}
      <path d="M0 0 Q20 0 40 10 Q50 16 50 30 Q50 20 60 10 Q70 4 80 0"
        stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M0 0 Q0 20 10 40 Q16 50 30 50 Q20 50 10 60 Q4 70 0 80"
        stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Inner curve */}
      <path d="M4 4 Q16 4 30 12 Q38 18 38 28"
        stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.5" />
      <path d="M4 4 Q4 16 12 30 Q18 38 28 38"
        stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.5" />
      {/* Small flower */}
      <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4" />
      <circle cx="18" cy="18" r="1.5" fill="currentColor" opacity="0.3" />
    </svg>
  );
};

// Event icons for timeline
export const EventIcons: Record<string, React.FC<{ className?: string }>> = {
  mandap: ({ className }) => (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M6 28 L6 12 L16 4 L26 12 L26 28" />
      <path d="M10 28 L10 18 L22 18 L22 28" />
      <path d="M14 28 L14 22 L18 22 L18 28" />
      <path d="M8 12 L16 6 L24 12" />
    </svg>
  ),
  mameru: ({ className }) => (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="6" y="10" width="20" height="16" rx="2" />
      <path d="M6 14 L16 20 L26 14" />
      <path d="M12 4 L16 8 L20 4" />
      <circle cx="16" cy="6" r="1" fill="currentColor" />
    </svg>
  ),
  dandiya: ({ className }) => (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <line x1="6" y1="26" x2="26" y2="6" strokeLinecap="round" />
      <line x1="6" y1="6" x2="26" y2="26" strokeLinecap="round" />
      <circle cx="16" cy="16" r="3" />
      <circle cx="6" cy="6" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="26" cy="6" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="6" cy="26" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="26" cy="26" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  rings: ({ className }) => (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="13" cy="18" r="7" />
      <circle cx="19" cy="18" r="7" />
      <path d="M11 10 L13 6 L15 10" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  baraat: ({ className }) => (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M16 4 Q14 8 14 12" />
      <ellipse cx="16" cy="10" rx="6" ry="4" />
      <path d="M10 14 L10 22 Q10 26 14 28 L18 28 Q22 26 22 22 L22 14" />
      <path d="M10 22 L6 28" />
      <path d="M22 22 L26 28" />
    </svg>
  ),
  hands: ({ className }) => (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M8 20 Q12 14 16 10 Q20 14 24 20" />
      <path d="M8 20 Q12 16 16 14 Q20 16 24 20" opacity="0.5" />
      <path d="M16 10 L16 6" />
      <path d="M13 8 L16 4 L19 8" fill="currentColor" opacity="0.2" />
      <path d="M10 24 Q16 28 22 24" />
    </svg>
  ),
  dinner: ({ className }) => (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <ellipse cx="16" cy="20" rx="12" ry="6" />
      <path d="M4 20 Q4 14 16 12 Q28 14 28 20" />
      <path d="M16 8 Q14 4 16 2 Q18 4 16 8Z" fill="currentColor" opacity="0.3" />
      <line x1="16" y1="8" x2="16" y2="12" />
    </svg>
  ),
};
