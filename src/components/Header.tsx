'use client';

import React from 'react';
import { FiSun, FiMoon, FiPlus, FiMinus } from 'react-icons/fi';
import type { Theme, FontSize } from '@/lib/storage';
import { BrandBadge } from './BrandBadge';

interface Props {
  theme: Theme;
  fontSize: FontSize;
  onThemeToggle: () => void;
  onFontSizeChange: (size: FontSize) => void;
}

const FONT_SIZES: FontSize[] = ['sm', 'md', 'lg'];

export function Header({ theme, fontSize, onThemeToggle, onFontSizeChange }: Props) {
  const currentIdx = FONT_SIZES.indexOf(fontSize);

  return (
    <header className="sticky top-0 z-50 border-b border-app-border bg-app-bg/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Brand */}
        <BrandBadge />

        {/* Controls */}
        <div className="flex items-center gap-1.5">
          {/* Font size decrease */}
          <button
            onClick={() => {
              const next = FONT_SIZES[Math.max(0, currentIdx - 1)];
              if (next) onFontSizeChange(next);
            }}
            disabled={currentIdx === 0}
            className="p-1.5 rounded-lg text-text3 hover:text-text1 hover:bg-surface disabled:opacity-30 transition-colors"
            aria-label="Decrease font size"
          >
            <FiMinus className="w-3.5 h-3.5" />
          </button>

          {/* Font size increase */}
          <button
            onClick={() => {
              const next = FONT_SIZES[Math.min(FONT_SIZES.length - 1, currentIdx + 1)];
              if (next) onFontSizeChange(next);
            }}
            disabled={currentIdx === FONT_SIZES.length - 1}
            className="p-1.5 rounded-lg text-text3 hover:text-text1 hover:bg-surface disabled:opacity-30 transition-colors"
            aria-label="Increase font size"
          >
            <FiPlus className="w-3.5 h-3.5" />
          </button>

          {/* Theme toggle */}
          <button
            onClick={onThemeToggle}
            className="p-1.5 rounded-lg text-text3 hover:text-text1 hover:bg-surface transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <FiSun className="w-3.5 h-3.5" />
            ) : (
              <FiMoon className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
