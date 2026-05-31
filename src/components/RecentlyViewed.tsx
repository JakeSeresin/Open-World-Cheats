'use client';

import React from 'react';
import { FiClock, FiTrash2 } from 'react-icons/fi';
import type { CheatCode } from '@/types';
import { clearHistory } from '@/lib/storage';

interface Props {
  entries: CheatCode[];
  onClear: () => void;
  onSelect: (id: string) => void;
}

export function RecentlyViewed({ entries, onClear, onSelect }: Props) {
  if (entries.length === 0) return null;

  function handleClear(e: React.MouseEvent) {
    e.stopPropagation();
    clearHistory();
    onClear();
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-2">
        <h2 className="flex items-center gap-1.5 font-display text-sm tracking-wider text-text2 uppercase">
          <FiClock className="w-3.5 h-3.5" />
          Recently Viewed
        </h2>

        <button
          onClick={handleClear}
          className="flex items-center gap-1 text-[11px] text-text3 hover:text-accent transition-colors font-mono"
          aria-label="Clear history"
        >
          <FiTrash2 className="w-3 h-3" />
          Clear history
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {entries.map((cheat) => (
          <button
            key={cheat.id}
            onClick={() => onSelect(cheat.id)}
            className={[
              'shrink-0 px-3 py-1.5 rounded-lg text-xs font-mono',
              'bg-surface border border-app-border text-text2',
              'hover:border-accent/50 hover:text-text1 transition-colors',
              'max-w-[160px] truncate',
            ].join(' ')}
          >
            {cheat.name}
          </button>
        ))}
      </div>
    </section>
  );
}
