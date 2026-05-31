import React from 'react';
import { FiMap } from 'react-icons/fi';

/**
 * "Open World Cheats" branded badge — replaces any game-specific
 * countdown or promotional feature. No game titles referenced.
 */
export function BrandBadge() {
  return (
    <div
      className={[
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-xl',
        'border border-[#00FFCC]/30 bg-[#00FFCC]/5',
        'shadow-[0_0_16px_rgba(0,255,204,0.08)]',
      ].join(' ')}
    >
      <FiMap className="w-4 h-4 text-[#00FFCC]" />
      <div className="flex flex-col leading-none">
        <span className="font-display text-sm tracking-widest text-[#00FFCC]">
          OPEN WORLD CHEATS
        </span>
        <span className="font-mono text-[9px] text-text3 tracking-wider mt-0.5">
          Fan-made cheat code reference
        </span>
      </div>
    </div>
  );
}
