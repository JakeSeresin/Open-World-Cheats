'use client';

import React, { useState } from 'react';
import type { GameAlias } from '@/types';
import { GAME_FULL_NAMES } from '@/types';

// 'VI' is intentionally kept separate so page.tsx can detect it and show "Coming Soon"
const GAMES: (GameAlias | 'all')[] = ['all', 'III', 'Vice', 'San', 'IV', 'V', 'VI', 'LC'];

interface Props {
  selected: GameAlias | 'all';
  onChange: (game: GameAlias | 'all') => void;
}

export function GameSelector({ selected, onChange }: Props) {
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

  function handleMouseEnter(e: React.MouseEvent<HTMLButtonElement>, game: GameAlias | 'all') {
    if (game === 'all') return;
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      text: GAME_FULL_NAMES[game],
      x: rect.left + rect.width / 2,
      y: rect.bottom + 8,
    });
  }

  function handleMouseLeave() {
    setTooltip(null);
  }

  return (
    <div className="relative flex flex-wrap gap-2">
      {GAMES.map((game) => {
        const isActive = selected === game;
        const isVI = game === 'VI';
        return (
          <button
            key={game}
            onClick={() => onChange(game)}
            onMouseEnter={(e) => handleMouseEnter(e, game)}
            onMouseLeave={handleMouseLeave}
            className={[
              'relative px-3 py-1.5 rounded-lg font-mono text-sm font-semibold',
              'border transition-all duration-150 select-none',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FFCC]',
              isActive
                ? isVI
                  ? 'bg-[#FFD700] text-black border-[#FFD700] shadow-[0_0_12px_rgba(255,215,0,0.4)]'
                  : 'bg-accent text-white border-accent shadow-[0_0_12px_rgba(255,107,0,0.4)]'
                : isVI
                  ? 'bg-surface text-[#FFD700] border-[#FFD700]/40 hover:border-[#FFD700]/80 hover:text-[#FFD700]'
                  : 'bg-surface text-text2 border-app-border hover:border-accent/50 hover:text-text1',
            ].join(' ')}
          >
            {game === 'all' ? 'All' : game}

            {/* Dot indicator for aliased games */}
            {game !== 'all' && !isVI && (
              <span
                className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#00FFCC] opacity-60"
                aria-hidden="true"
              />
            )}

            {/* Star indicator for VI */}
            {isVI && (
              <span
                className="absolute -top-1 -right-1 text-[8px] leading-none"
                aria-hidden="true"
              >
                ⭐
              </span>
            )}
          </button>
        );
      })}

      {/* Tooltip — fixed position to escape overflow */}
      {tooltip && (
        <div
          style={{ left: tooltip.x, top: tooltip.y }}
          className={[
            'fixed z-[999] -translate-x-1/2',
            'px-2.5 py-1 rounded-md text-xs font-mono',
            'bg-[#1E1E1E] border border-[#00FFCC]/40 text-[#00FFCC]',
            'shadow-[0_0_10px_rgba(0,255,204,0.25)]',
            'pointer-events-none whitespace-nowrap',
          ].join(' ')}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}
