// ─── Game aliases — safe names only, no trademarked strings ─────────────────
export type GameAlias = 'III' | 'Vice' | 'San' | 'IV' | 'V' | 'LC';

/**
 * Full descriptive names for tooltips — shown on hover only (client-side JS).
 * These are user-facing helper labels, not printed in any static metadata,
 * manifest, or store listing.
 */
export const GAME_FULL_NAMES: Record<GameAlias, string> = {
  III:  'Open World III (2001)',
  Vice: 'Open World: Vice (2002)',
  San:  'Open World: San (2004)',
  IV:   'Open World IV (2008)',
  V:    'Open World V (2013)',
  LC:   'Open World: LC Stories (2005)',
};

// ─── Platform ────────────────────────────────────────────────────────────────
export type Platform = 'PC' | 'PlayStation' | 'Xbox';

export const PLATFORM_COLORS: Record<Platform, string> = {
  PC:          '#3B82F6',  // blue
  PlayStation: '#8B5CF6',  // purple
  Xbox:        '#22C55E',  // green
};

// ─── Category ────────────────────────────────────────────────────────────────
export type Category =
  | 'weapons'
  | 'health'
  | 'wanted'
  | 'vehicles'
  | 'weather'
  | 'gameplay'
  | 'money'
  | 'cheats';

// ─── Cheat code ──────────────────────────────────────────────────────────────
export interface CheatCode {
  id: string;
  game: GameAlias;
  name: string;
  description: string;
  category: Category;
  codes: Partial<Record<Platform, string>>;
}

// ─── Favorites & history ─────────────────────────────────────────────────────
export interface FavoritesStore {
  ids: Set<string>;
}

export interface HistoryEntry {
  id: string;
  viewedAt: number;
}

// ─── Filter state ────────────────────────────────────────────────────────────
export interface FilterState {
  game: GameAlias | 'all';
  category: Category | 'all';
  platform: Platform | 'all';
  query: string;
}
