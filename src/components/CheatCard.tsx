'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { CheatCode, Platform } from '@/types';
import { GAME_FULL_NAMES } from '@/types';
import { PlatformBadge } from './PlatformBadge';
import { FiStar, FiClock } from 'react-icons/fi';
import { addToHistory, toggleFavorite } from '@/lib/storage';

const CATEGORY_ICONS: Record<string, string> = {
  weapons:  '🔫',
  health:   '❤️',
  wanted:   '⭐',
  vehicles: '🚗',
  weather:  '🌩️',
  gameplay: '🎮',
  money:    '💰',
  cheats:   '🎯',
};

interface Props {
  cheat: CheatCode;
  isFavorite: boolean;
  onFavoriteChange: (id: string, favorites: Set<string>) => void;
}

const PLATFORMS: Platform[] = ['PC', 'PlayStation', 'Xbox'];

export function CheatCard({ cheat, isFavorite, onFavoriteChange }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState<Platform | null>(null);

  function handleExpand() {
    if (!expanded) {
      const history = addToHistory(cheat.id);
      // propagate history update if needed
    }
    setExpanded((v) => !v);
  }

  function handleFavorite(e: React.MouseEvent) {
    e.stopPropagation();
    const updated = toggleFavorite(cheat.id);
    onFavoriteChange(cheat.id, updated);
  }

  async function handleCopy(e: React.MouseEvent, platform: Platform) {
    e.stopPropagation();
    const code = cheat.codes[platform];
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(platform);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      // clipboard not available
    }
  }

  const platforms = PLATFORMS.filter((p) => cheat.codes[p]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className={[
        'rounded-xl border bg-surface overflow-hidden cursor-pointer',
        'transition-colors duration-150',
        isFavorite
          ? 'border-accent/60 shadow-[0_0_16px_rgba(255,107,0,0.18)]'
          : 'border-app-border hover:border-app-border/80',
      ].join(' ')}
      onClick={handleExpand}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2 p-3 border-b border-app-border">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Category icon */}
            <span className="text-sm" aria-hidden="true">
              {CATEGORY_ICONS[cheat.category] ?? '🎮'}
            </span>
            <h3 className="font-display text-base leading-tight text-text1 truncate">
              {cheat.name}
            </h3>
          </div>
          <p className="mt-0.5 text-xs text-text3 line-clamp-2 font-body">
            {cheat.description}
          </p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {/* Game alias badge */}
          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-accent-dim text-accent border border-accent/30 uppercase">
            {cheat.game}
          </span>

          {/* Favorite button */}
          <button
            onClick={handleFavorite}
            className={[
              'p-1 rounded-md transition-colors duration-100',
              isFavorite
                ? 'text-accent bg-accent-dim'
                : 'text-text3 hover:text-accent hover:bg-accent-dim',
            ].join(' ')}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <FiStar className="w-3.5 h-3.5" fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Platform codes — collapsed: show first only, expanded: show all */}
      <div className="px-3 pb-2 pt-1">
        {(expanded ? platforms : platforms.slice(0, 1)).map((platform) => (
          <div key={platform} onClick={(e) => handleCopy(e, platform)}>
            <PlatformBadge
              platform={platform}
              code={
                copied === platform
                  ? '✓ Copied!'
                  : (cheat.codes[platform] ?? '')
              }
            />
          </div>
        ))}

        {/* Expand / collapse indicator */}
        {platforms.length > 1 && (
          <button
            onClick={handleExpand}
            className="mt-1 text-[10px] text-text3 hover:text-accent transition-colors font-mono"
          >
            {expanded
              ? '▲ less'
              : `▼ +${platforms.length - 1} more platform${platforms.length - 1 > 1 ? 's' : ''}`}
          </button>
        )}
      </div>
    </motion.div>
  );
}
