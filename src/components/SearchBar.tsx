'use client';

import React, { useRef } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { useSearchShortcuts } from '@/hooks/useSearchShortcuts';

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export function SearchBar({ value, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  useSearchShortcuts(inputRef, () => onChange(''));

  return (
    <div className="relative w-full">
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text3 pointer-events-none" />

      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='Search cheats…'
        className={[
          'w-full pl-9 pr-24 py-2.5 rounded-xl font-body text-sm',
          'bg-surface border border-app-border text-text1',
          'placeholder:text-text3',
          'focus:outline-none focus:border-accent/60 focus:shadow-[0_0_0_2px_rgba(255,107,0,0.15)]',
          'transition-all duration-150',
        ].join(' ')}
        aria-label="Search cheats"
      />

      {/* Keyboard hint — hidden when typing */}
      {!value && (
        <span className="absolute right-9 top-1/2 -translate-y-1/2 font-mono text-[10px] text-text3 px-1.5 py-0.5 rounded border border-app-border bg-surface2 pointer-events-none">
          /
        </span>
      )}

      {/* Clear button */}
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-text3 hover:text-text1 transition-colors"
          aria-label="Clear search"
        >
          <FiX className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
