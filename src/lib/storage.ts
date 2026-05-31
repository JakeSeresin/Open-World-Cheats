import type { HistoryEntry } from '@/types';

const FAVORITES_KEY = 'owc_favorites';
const HISTORY_KEY   = 'owc_history';
const THEME_KEY     = 'owc_theme';
const FONT_KEY      = 'owc_font_size';

// ─── Helpers ─────────────────────────────────────────────────────────────────
function safeGet<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function safeSet(key: string, value: unknown): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage full or blocked — silent fail
  }
}

// ─── Favorites ───────────────────────────────────────────────────────────────
export function getFavorites(): Set<string> {
  const arr = safeGet<string[]>(FAVORITES_KEY, []);
  return new Set(arr);
}

export function toggleFavorite(id: string): Set<string> {
  const favs = getFavorites();
  if (favs.has(id)) {
    favs.delete(id);
  } else {
    favs.add(id);
  }
  safeSet(FAVORITES_KEY, Array.from(favs));
  return new Set(favs);
}

// ─── Recently Viewed History ──────────────────────────────────────────────────
const MAX_HISTORY = 20;

export function getHistory(): HistoryEntry[] {
  return safeGet<HistoryEntry[]>(HISTORY_KEY, []);
}

export function addToHistory(id: string): HistoryEntry[] {
  const history = getHistory().filter((e) => e.id !== id);
  const updated: HistoryEntry[] = [{ id, viewedAt: Date.now() }, ...history].slice(
    0,
    MAX_HISTORY,
  );
  safeSet(HISTORY_KEY, updated);
  return updated;
}

export function clearHistory(): void {
  safeSet(HISTORY_KEY, []);
}

// ─── Theme ───────────────────────────────────────────────────────────────────
export type Theme = 'dark' | 'light';

export function getTheme(): Theme {
  return safeGet<Theme>(THEME_KEY, 'dark');
}

export function setTheme(theme: Theme): void {
  safeSet(THEME_KEY, theme);
}

// ─── Font Size ───────────────────────────────────────────────────────────────
export type FontSize = 'sm' | 'md' | 'lg';

export function getFontSize(): FontSize {
  return safeGet<FontSize>(FONT_KEY, 'md');
}

export function setFontSize(size: FontSize): void {
  safeSet(FONT_KEY, size);
}
