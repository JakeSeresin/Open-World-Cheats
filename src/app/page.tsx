'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { CheatCode, GameAlias, Category, Platform } from '@/types';
import { CHEATS } from '@/data/cheats';
import { GameSelector } from '@/components/GameSelector';
import { SearchBar } from '@/components/SearchBar';
import { CheatCard } from '@/components/CheatCard';
import { RecentlyViewed } from '@/components/RecentlyViewed';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SkeletonGrid } from '@/components/SkeletonCard';
import {
  getFavorites,
  getHistory,
  getTheme,
  setTheme as persistTheme,
  getFontSize,
  setFontSize as persistFontSize,
  type Theme,
  type FontSize,
} from '@/lib/storage';
import { FiStar } from 'react-icons/fi';

const CATEGORIES: (Category | 'all')[] = ['all', 'weapons', 'health', 'wanted', 'vehicles', 'weather', 'gameplay', 'money'];
const PLATFORMS: (Platform | 'all')[] = ['all', 'PC', 'PlayStation', 'Xbox'];

export default function HomePage() {
  // ── State ────────────────────────────────────────────────────────────────
  const [favorites,    setFavorites]    = useState<Set<string>>(new Set());
  const [history,      setHistory]      = useState<string[]>([]);
  const [theme,        setTheme]        = useState<Theme>('dark');
  const [fontSize,     setFontSize]     = useState<FontSize>('md');
  const [query,        setQuery]        = useState('');
  const [game,         setGame]         = useState<GameAlias | 'all'>('all');
  const [category,     setCategory]     = useState<Category | 'all'>('all');
  const [platform,     setPlatform]     = useState<Platform | 'all'>('all');
  const [showFavs,     setShowFavs]     = useState(false);
  const [loading,      setLoading]      = useState(true);

  // ── Initialise from localStorage ─────────────────────────────────────────
  useEffect(() => {
    setFavorites(getFavorites());
    setHistory(getHistory().map((e) => e.id));
    setTheme(getTheme());
    setFontSize(getFontSize());

    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, []);

  // ── Apply theme / font-size to DOM ────────────────────────────────────────
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [fontSize]);

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleThemeToggle = useCallback(() => {
    setTheme((t) => {
      const next: Theme = t === 'dark' ? 'light' : 'dark';
      persistTheme(next);
      return next;
    });
  }, []);

  const handleFontSizeChange = useCallback((size: FontSize) => {
    persistFontSize(size);
    setFontSize(size);
  }, []);

  const handleFavoriteChange = useCallback((_id: string, updated: Set<string>) => {
    setFavorites(new Set(updated));
  }, []);

  const handleHistoryClear = useCallback(() => {
    setHistory([]);
  }, []);

  const handleHistorySelect = useCallback((_id: string) => {
    setQuery('');
    setGame('all');
    setCategory('all');
    setPlatform('all');
  }, []);

  // ── "VI" coming soon — no cheats exist yet ────────────────────────────────
  const isVI = game === 'VI';

  // ── Filtered cheats ───────────────────────────────────────────────────────
  const filtered = useMemo<CheatCode[]>(() => {
    // VI has no cheats — skip the filter entirely
    if (isVI) return [];

    const q = query.toLowerCase().trim();
    return CHEATS.filter((c) => {
      if (showFavs && !favorites.has(c.id)) return false;

      // Game filter: only show cheats that belong to the selected game
      if (game !== 'all' && c.game !== game) return false;

      // Category filter
      if (category !== 'all' && c.category !== category) return false;

      // Platform filter: only show cheats that have a code for the selected platform
      if (platform !== 'all' && !c.codes[platform]) return false;

      // Text search across name, description, game alias, and category
      if (q) {
        const haystack = `${c.name} ${c.description} ${c.game} ${c.category}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      return true;
    });
  }, [query, game, category, platform, showFavs, favorites, isVI]);

  // ── Recently viewed cheats ─────────────────────────────────────────────────
  const recentCheats = useMemo<CheatCode[]>(() => {
    return history
      .map((id) => CHEATS.find((c) => c.id === id))
      .filter((c): c is CheatCode => !!c)
      .slice(0, 10);
  }, [history]);

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      <Header
        theme={theme}
        fontSize={fontSize}
        onThemeToggle={handleThemeToggle}
        onFontSizeChange={handleFontSizeChange}
      />

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {/* Recently viewed */}
        <RecentlyViewed
          entries={recentCheats}
          onClear={handleHistoryClear}
          onSelect={handleHistorySelect}
        />

        {/* Search */}
        <SearchBar value={query} onChange={setQuery} />

        {/* Game filter */}
        <div className="space-y-3">
          <GameSelector selected={game} onChange={setGame} />

          {/* Category + platform filters — hidden when VI is selected (no cheats) */}
          {!isVI && (
            <div className="flex flex-wrap gap-2 items-center">
              {/* Categories */}
              <div className="flex flex-wrap gap-1.5">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={[
                      'px-2.5 py-1 rounded-lg font-body text-xs capitalize border transition-colors',
                      category === cat
                        ? 'bg-surface2 text-text1 border-app-border/80'
                        : 'bg-transparent text-text3 border-transparent hover:border-app-border hover:text-text2',
                    ].join(' ')}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <span className="w-px h-5 bg-app-border hidden sm:block" aria-hidden />

              {/* Platforms */}
              <div className="flex flex-wrap gap-1.5">
                {PLATFORMS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlatform(p)}
                    className={[
                      'px-2.5 py-1 rounded-lg font-mono text-xs border transition-colors',
                      platform === p
                        ? 'bg-surface2 text-text1 border-app-border/80'
                        : 'bg-transparent text-text3 border-transparent hover:border-app-border hover:text-text2',
                    ].join(' ')}
                  >
                    {p}
                  </button>
                ))}
              </div>

              {/* Favorites toggle */}
              <button
                onClick={() => setShowFavs((v) => !v)}
                className={[
                  'ml-auto flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono border transition-colors',
                  showFavs
                    ? 'bg-accent-dim text-accent border-accent/40'
                    : 'text-text3 border-app-border hover:text-accent hover:border-accent/40',
                ].join(' ')}
              >
                <FiStar className="w-3 h-3" fill={showFavs ? 'currentColor' : 'none'} />
                Favorites
              </button>
            </div>
          )}
        </div>

        {/* ── VI Coming Soon ─────────────────────────────────────────────── */}
        {isVI && (
          <AnimatePresence mode="wait">
            <motion.div
              key="vi-coming-soon"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center py-24 text-center gap-4"
            >
              {/* Glowing star */}
              <div className="text-6xl animate-pulse" aria-hidden>⭐</div>

              <h2 className="font-display text-4xl sm:text-5xl text-[#FFD700] tracking-widest uppercase"
                  style={{ textShadow: '0 0 24px rgba(255,215,0,0.5)' }}>
                Coming Soon
              </h2>

              <p className="font-mono text-sm text-text3 max-w-xs">
                Cheat codes for VI will be added after release.
              </p>

              <button
                onClick={() => setGame('all')}
                className="mt-4 px-4 py-1.5 rounded-lg border border-[#FFD700]/40 text-[#FFD700] font-mono text-xs hover:bg-[#FFD700]/10 transition-colors"
              >
                ← Back to all games
              </button>
            </motion.div>
          </AnimatePresence>
        )}

        {/* ── Normal results ─────────────────────────────────────────────── */}
        {!isVI && (
          <>
            {/* Results count */}
            <p className="font-mono text-xs text-text3">
              {filtered.length} cheat{filtered.length !== 1 ? 's' : ''}{' '}
              {query ? `matching "${query}"` : ''}
            </p>

            {/* Cheat grid */}
            {loading ? (
              <SkeletonGrid count={6} />
            ) : (
              <AnimatePresence mode="popLayout">
                {filtered.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-16 text-center"
                  >
                    <p className="font-mono text-text3 text-sm">No cheats match your filters.</p>
                    <button
                      onClick={() => {
                        setQuery('');
                        setGame('all');
                        setCategory('all');
                        setPlatform('all');
                        setShowFavs(false);
                      }}
                      className="mt-3 text-xs text-accent font-mono hover:underline"
                    >
                      Clear filters
                    </button>
                  </motion.div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((cheat) => (
                      <CheatCard
                        key={cheat.id}
                        cheat={cheat}
                        isFavorite={favorites.has(cheat.id)}
                        onFavoriteChange={handleFavoriteChange}
                      />
                    ))}
                  </div>
                )}
              </AnimatePresence>
            )}
          </>
        )}
      </main>

      <Footer />
    </>
  );
}
