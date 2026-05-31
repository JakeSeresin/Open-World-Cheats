import type { CheatCode, Platform } from '@/types';
import { GAME_FULL_NAMES } from '@/types';

const PLATFORMS: Platform[] = ['PC', 'PlayStation', 'Xbox'];

export function exportCheats(cheats: CheatCode[]): void {
  const lines: string[] = [
    'OPEN WORLD CHEATS — Fan-made reference guide',
    '='.repeat(50),
    `Exported: ${new Date().toLocaleString()}`,
    `Total cheats: ${cheats.length}`,
    '',
  ];

  // Group by game alias
  const byGame = new Map<string, CheatCode[]>();
  for (const cheat of cheats) {
    const list = byGame.get(cheat.game) ?? [];
    list.push(cheat);
    byGame.set(cheat.game, list);
  }

  for (const [game, gameCheats] of byGame) {
    const fullName = GAME_FULL_NAMES[game as keyof typeof GAME_FULL_NAMES] ?? game;
    lines.push(`── ${fullName} ──`);
    lines.push('');

    for (const cheat of gameCheats) {
      lines.push(`  ${cheat.name}`);
      lines.push(`  ${cheat.description}`);
      for (const platform of PLATFORMS) {
        const code = cheat.codes[platform];
        if (code) {
          lines.push(`  ${platform}: ${code}`);
        }
      }
      lines.push('');
    }
  }

  lines.push('─'.repeat(50));
  lines.push('Open World Cheats — Fan-made reference guide.');
  lines.push('Game aliases used for identification only.');
  lines.push('Not affiliated with any game publisher.');
  lines.push('All game content © their respective owners.');

  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'open-world-cheats.txt';
  a.click();
  URL.revokeObjectURL(url);
}
