import type { CheatCode, GameAlias } from '@/types';

/**
 * All cheat codes stored locally — no external API calls.
 * Game names use safe aliases only (III, Vice, San, IV, V, LC).
 * No trademarked terms in any field.
 */
export const CHEATS: CheatCode[] = [
  // ─────────────────────────────────────────────────────────────
  // GAME III
  // ─────────────────────────────────────────────────────────────
  {
    id: 'iii-health',
    game: 'III',
    name: 'Full Health',
    description: 'Restores player health to maximum',
    category: 'health',
    codes: {
      PC: 'GESUNDHEIT',
      PlayStation: 'R2, R2, L1, R1, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP',
    },
  },
  {
    id: 'iii-weapons1',
    game: 'III',
    name: 'Weapon Set 1',
    description: 'Grants brass knuckles, baseball bat, pistol, shotgun, submachine gun, rocket launcher, molotov cocktails',
    category: 'weapons',
    codes: {
      PC: 'THUGSTOOLS',
      PlayStation: 'R2, R2, L1, R2, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP',
    },
  },
  {
    id: 'iii-weapons2',
    game: 'III',
    name: 'Weapon Set 2',
    description: 'Grants knife, pistol, shotgun, uzi, AK-47, sniper rifle, flamethrower, grenades',
    category: 'weapons',
    codes: {
      PC: 'PROFESSIONALTOOLS',
      PlayStation: 'R2, R2, L1, R2, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, DOWN, LEFT',
    },
  },
  {
    id: 'iii-weapons3',
    game: 'III',
    name: 'Weapon Set 3',
    description: 'Grants chainsaw, pistol, shotgun, M16, sniper rifle, rocket launcher, grenades, flame thrower',
    category: 'weapons',
    codes: {
      PC: 'NUTTERSTOYS',
      PlayStation: 'R2, R2, L1, R2, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, DOWN, DOWN',
    },
  },
  {
    id: 'iii-wanted-clear',
    game: 'III',
    name: 'Clear Wanted Level',
    description: 'Removes all wanted stars',
    category: 'wanted',
    codes: {
      PC: 'NOPOLICEPLEASE',
      PlayStation: 'R2, R2, L1, R2, UP, DOWN, UP, DOWN, UP, DOWN',
    },
  },
  {
    id: 'iii-wanted-max',
    game: 'III',
    name: 'Raise Wanted Level',
    description: 'Adds two wanted stars',
    category: 'wanted',
    codes: {
      PC: 'MOREPOLICEPLEASE',
      PlayStation: 'R2, R2, L1, R2, LEFT, RIGHT, LEFT, RIGHT, LEFT, RIGHT',
    },
  },
  {
    id: 'iii-spawn-tank',
    game: 'III',
    name: 'Spawn Tank',
    description: 'Spawns a military tank',
    category: 'vehicles',
    codes: {
      PC: 'GIVEUSATANK',
      PlayStation: 'CIRCLE, CIRCLE, CIRCLE, CIRCLE, CIRCLE, CIRCLE, R1, L2, L1, TRIANGLE, CIRCLE, TRIANGLE',
    },
  },
  {
    id: 'iii-weather-sun',
    game: 'III',
    name: 'Sunny Weather',
    description: 'Sets weather to clear and sunny',
    category: 'weather',
    codes: {
      PC: 'SKINCANCERMAN',
      PlayStation: 'L1, L2, R1, R2, R2, R1, L2, TRIANGLE',
    },
  },
  {
    id: 'iii-speed-up',
    game: 'III',
    name: 'Speed Up Gameplay',
    description: 'Makes gameplay run faster',
    category: 'gameplay',
    codes: {
      PC: 'TIMEFLIES',
      PlayStation: 'TRIANGLE, UP, RIGHT, DOWN, L2, L1, SQUARE',
    },
  },
  {
    id: 'iii-speed-down',
    game: 'III',
    name: 'Slow Down Gameplay',
    description: 'Makes gameplay run in slow motion',
    category: 'gameplay',
    codes: {
      PC: 'BOOOOORING',
      PlayStation: 'TRIANGLE, UP, RIGHT, DOWN, SQUARE, R2, R1',
    },
  },

  // ─────────────────────────────────────────────────────────────
  // VICE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'vice-health-armor',
    game: 'Vice',
    name: 'Health & Armor',
    description: 'Fully restores health and armor',
    category: 'health',
    codes: {
      PC: 'ASPIRINE',
      PlayStation: 'R1, R2, L1, CIRCLE, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP',
      Xbox: 'RB, RT, LB, B, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP',
    },
  },
  {
    id: 'vice-weapons1',
    game: 'Vice',
    name: 'Weapon Set 1',
    description: 'Grants bat, handgun, shotgun, uzi, grenades, molotov, screwdriver',
    category: 'weapons',
    codes: {
      PC: 'THUGSTOOLS',
      PlayStation: 'R1, R2, L1, R2, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP',
      Xbox: 'RB, RT, LB, RT, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP',
    },
  },
  {
    id: 'vice-weapons2',
    game: 'Vice',
    name: 'Weapon Set 2',
    description: 'Grants machete, revolver, spas-12, ruger, grenades, sniper rifle, rocket launcher',
    category: 'weapons',
    codes: {
      PC: 'PROFESSIONALTOOLS',
      PlayStation: 'R1, R2, L1, R2, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, DOWN, LEFT',
      Xbox: 'RB, RT, LB, RT, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, DOWN, LEFT',
    },
  },
  {
    id: 'vice-weapons3',
    game: 'Vice',
    name: 'Weapon Set 3',
    description: 'Grants chainsaw, python, spas-12, M4, sniper rifle, minigun, remote grenades, flamethrower',
    category: 'weapons',
    codes: {
      PC: 'NUTTERSTOYS',
      PlayStation: 'R1, R2, L1, R2, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, DOWN, DOWN',
      Xbox: 'RB, RT, LB, RT, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, DOWN, DOWN',
    },
  },
  {
    id: 'vice-wanted-none',
    game: 'Vice',
    name: 'Clear Wanted Level',
    description: 'Removes all wanted stars',
    category: 'wanted',
    codes: {
      PC: 'LEAVEMEALONE',
      PlayStation: 'CIRCLE, R2, UP, L1, RIGHT, R1, RIGHT, UP, SQUARE, TRIANGLE',
      Xbox: 'B, RT, UP, LB, RIGHT, RB, RIGHT, UP, X, Y',
    },
  },
  {
    id: 'vice-wanted-max',
    game: 'Vice',
    name: 'Max Wanted Level (6 Stars)',
    description: 'Sets wanted level to six stars',
    category: 'wanted',
    codes: {
      PC: 'YOUWONTTAKEMEALIVE',
      PlayStation: 'R2, UP, L1, L1, LEFT, R1, R1, R2, SQUARE, L2, L2, L2',
      Xbox: 'RT, UP, LB, LB, LEFT, RB, RB, RT, X, LT, LT, LT',
    },
  },
  {
    id: 'vice-spawn-rhino',
    game: 'Vice',
    name: 'Spawn Rhino Tank',
    description: 'Spawns a military tank',
    category: 'vehicles',
    codes: {
      PC: 'PANZER',
      PlayStation: 'CIRCLE, CIRCLE, L1, CIRCLE, CIRCLE, CIRCLE, L1, L2, R1, TRIANGLE, CIRCLE, TRIANGLE',
      Xbox: 'B, B, LB, B, B, B, LB, LT, RB, Y, B, Y',
    },
  },
  {
    id: 'vice-spawn-heli',
    game: 'Vice',
    name: 'Spawn Hunter Helicopter',
    description: 'Spawns an attack helicopter',
    category: 'vehicles',
    codes: {
      PC: 'AMERICAHELICOPTER',
      PlayStation: 'CIRCLE, X, L1, CIRCLE, CIRCLE, L1, CIRCLE, R1, R2, L2, L1, L1',
      Xbox: 'B, A, LB, B, B, LB, B, RB, RT, LT, LB, LB',
    },
  },
  {
    id: 'vice-cars-flying',
    game: 'Vice',
    name: 'Cars Can Fly',
    description: 'Makes all vehicles able to fly',
    category: 'vehicles',
    codes: {
      PC: 'COMEFLYWITHME',
      PlayStation: 'CIRCLE, DOWN, L2, UP, L1, R2, L1, UP, SQUARE',
      Xbox: 'B, DOWN, LT, UP, LB, RT, LB, UP, X',
    },
  },
  {
    id: 'vice-weather-sunny',
    game: 'Vice',
    name: 'Sunny Weather',
    description: 'Sets the weather to clear and sunny',
    category: 'weather',
    codes: {
      PC: 'APLEASANTDAY',
      PlayStation: 'R2, X, L1, L1, L2, L2, L2, DOWN',
      Xbox: 'RT, A, LB, LB, LT, LT, LT, DOWN',
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SAN
  // ─────────────────────────────────────────────────────────────
  {
    id: 'san-health-armor-money',
    game: 'San',
    name: 'Health, Armor & $250K',
    description: 'Full health, full armor, and adds $250,000',
    category: 'health',
    codes: {
      PC: 'HESOYAM',
      PlayStation: 'R1, R2, L1, X, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP',
      Xbox: 'RB, RT, LB, A, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP',
    },
  },
  {
    id: 'san-infinite-ammo',
    game: 'San',
    name: 'Infinite Ammo',
    description: 'All weapons have unlimited ammunition',
    category: 'weapons',
    codes: {
      PC: 'FULLCLIP',
      PlayStation: 'L1, R1, SQUARE, R1, LEFT, R2, R1, LEFT, SQUARE, DOWN, L1, L1',
      Xbox: 'LB, RB, X, RB, LEFT, RT, RB, LEFT, X, DOWN, LB, LB',
    },
  },
  {
    id: 'san-weapons1',
    game: 'San',
    name: 'Weapon Set 1',
    description: 'Bat, pistol, shotgun, micro SMG, AK-47, rocket launcher, Molotovs, spray can',
    category: 'weapons',
    codes: {
      PC: 'LXGIWYL',
      PlayStation: 'R1, R2, L1, R2, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP',
      Xbox: 'RB, RT, LB, RT, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP',
    },
  },
  {
    id: 'san-weapons2',
    game: 'San',
    name: 'Weapon Set 2',
    description: 'Knife, desert eagle, sawn-off shotgun, tec-9, M4, sniper rifle, Rocket Launcher, fire extinguisher',
    category: 'weapons',
    codes: {
      PC: 'PROFESSIONALSKIT',
      PlayStation: 'R1, R2, L1, R2, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, DOWN, LEFT',
      Xbox: 'RB, RT, LB, RT, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, DOWN, LEFT',
    },
  },
  {
    id: 'san-wanted-none',
    game: 'San',
    name: 'Clear Wanted Level',
    description: 'Removes all wanted stars',
    category: 'wanted',
    codes: {
      PC: 'TURNDOWNTHEHEAT',
      PlayStation: 'CIRCLE, RIGHT, CIRCLE, RIGHT, LEFT, SQUARE, TRIANGLE, UP',
      Xbox: 'B, RIGHT, B, RIGHT, LEFT, X, Y, UP',
    },
  },
  {
    id: 'san-wanted-max',
    game: 'San',
    name: 'Max Wanted Level',
    description: 'Sets wanted level to six stars',
    category: 'wanted',
    codes: {
      PC: 'BRINGITON',
      PlayStation: 'CIRCLE, RIGHT, CIRCLE, RIGHT, LEFT, SQUARE, X, DOWN',
      Xbox: 'B, RIGHT, B, RIGHT, LEFT, X, A, DOWN',
    },
  },
  {
    id: 'san-spawn-jetpack',
    game: 'San',
    name: 'Spawn Jetpack',
    description: 'Spawns a jetpack for the player',
    category: 'vehicles',
    codes: {
      PC: 'ROCKETMAN',
      PlayStation: 'L1, L2, R1, R2, UP, DOWN, LEFT, RIGHT, L1, L2, R1, R2, UP, DOWN, LEFT, RIGHT',
      Xbox: 'LB, LT, RB, RT, UP, DOWN, LEFT, RIGHT, LB, LT, RB, RT, UP, DOWN, LEFT, RIGHT',
    },
  },
  {
    id: 'san-spawn-hydra',
    game: 'San',
    name: 'Spawn Hydra Jet',
    description: 'Spawns a military jet fighter',
    category: 'vehicles',
    codes: {
      PC: 'JUMPJET',
      PlayStation: 'TRIANGLE, TRIANGLE, SQUARE, CIRCLE, X, L1, L1, DOWN, UP',
      Xbox: 'Y, Y, X, B, A, LB, LB, DOWN, UP',
    },
  },
  {
    id: 'san-cars-fly',
    game: 'San',
    name: 'Flying Cars',
    description: 'Cars lift off the ground and fly when accelerated',
    category: 'vehicles',
    codes: {
      PC: 'CHITTYCHITTYBANGBANG',
      PlayStation: 'SQUARE, DOWN, L2, UP, L1, CIRCLE, UP, X, LEFT',
      Xbox: 'X, DOWN, LT, UP, LB, B, UP, A, LEFT',
    },
  },
  {
    id: 'san-weather-thunder',
    game: 'San',
    name: 'Thunderstorm',
    description: 'Sets the weather to stormy with thunder and lightning',
    category: 'weather',
    codes: {
      PC: 'SCOTTISHSUMMER',
      PlayStation: 'R2, X, L1, L1, L2, L2, L2, CIRCLE',
      Xbox: 'RT, A, LB, LB, LT, LT, LT, B',
    },
  },
  {
    id: 'san-super-jump',
    game: 'San',
    name: 'Super Jump',
    description: 'Player jumps extremely high',
    category: 'gameplay',
    codes: {
      PC: 'KANGAROO',
      PlayStation: 'UP, UP, TRIANGLE, TRIANGLE, UP, UP, LEFT, RIGHT, SQUARE, R2, R2',
      Xbox: 'UP, UP, Y, Y, UP, UP, LEFT, RIGHT, X, RT, RT',
    },
  },
  {
    id: 'san-infinite-sprint',
    game: 'San',
    name: 'Infinite Sprint',
    description: 'Player can run without tiring',
    category: 'gameplay',
    codes: {
      PC: 'AEZAKMI',
      PlayStation: 'TRIANGLE, SQUARE, CIRCLE, CIRCLE, SQUARE, CIRCLE, CIRCLE, L1, L2, L2, R1, R2',
      Xbox: 'Y, X, B, B, X, B, B, LB, LT, LT, RB, RT',
    },
  },
  {
    id: 'san-max-stats',
    game: 'San',
    name: 'Max All Stats',
    description: 'All player skills and stats raised to maximum',
    category: 'gameplay',
    codes: {
      PC: 'PROFESSIONALKILLER',
      PlayStation: 'DOWN, SQUARE, X, LEFT, R1, R2, LEFT, DOWN, DOWN, L1, L1, L1',
      Xbox: 'DOWN, X, A, LEFT, RB, RT, LEFT, DOWN, DOWN, LB, LB, LB',
    },
  },

  // ─────────────────────────────────────────────────────────────
  // IV
  // ─────────────────────────────────────────────────────────────
  {
    id: 'iv-health-armor',
    game: 'IV',
    name: 'Health & Armor',
    description: 'Fully restores health and body armor',
    category: 'health',
    codes: {
      PC: '362-555-0100',
      PlayStation: '362-555-0100 (phone)',
      Xbox: '362-555-0100 (phone)',
    },
  },
  {
    id: 'iv-weapons1',
    game: 'IV',
    name: 'Weapon Set 1',
    description: 'Baseball bat, pistol, RPG, and shotgun',
    category: 'weapons',
    codes: {
      PC: '486-555-0150',
      PlayStation: '486-555-0150 (phone)',
      Xbox: '486-555-0150 (phone)',
    },
  },
  {
    id: 'iv-weapons2',
    game: 'IV',
    name: 'Weapon Set 2',
    description: 'Knife, Molotov, machine pistol, and combat sniper',
    category: 'weapons',
    codes: {
      PC: '486-555-0100',
      PlayStation: '486-555-0100 (phone)',
      Xbox: '486-555-0100 (phone)',
    },
  },
  {
    id: 'iv-wanted-none',
    game: 'IV',
    name: 'Clear Wanted Level',
    description: 'Removes all wanted stars',
    category: 'wanted',
    codes: {
      PC: '267-555-0100',
      PlayStation: '267-555-0100 (phone)',
      Xbox: '267-555-0100 (phone)',
    },
  },
  {
    id: 'iv-wanted-max',
    game: 'IV',
    name: 'Raise Wanted Level',
    description: 'Increases wanted level by one star',
    category: 'wanted',
    codes: {
      PC: '267-555-0150',
      PlayStation: '267-555-0150 (phone)',
      Xbox: '267-555-0150 (phone)',
    },
  },
  {
    id: 'iv-spawn-annihilator',
    game: 'IV',
    name: 'Spawn Annihilator Helicopter',
    description: 'Spawns an armed police helicopter',
    category: 'vehicles',
    codes: {
      PC: '359-555-0100',
      PlayStation: '359-555-0100 (phone)',
      Xbox: '359-555-0100 (phone)',
    },
  },
  {
    id: 'iv-spawn-comet',
    game: 'IV',
    name: 'Spawn Comet (Sports Car)',
    description: 'Spawns a fast sports car',
    category: 'vehicles',
    codes: {
      PC: '227-555-0175',
      PlayStation: '227-555-0175 (phone)',
      Xbox: '227-555-0175 (phone)',
    },
  },
  {
    id: 'iv-spawn-fib',
    game: 'IV',
    name: 'Spawn FIB Buffalo',
    description: 'Spawns a federal law enforcement sedan',
    category: 'vehicles',
    codes: {
      PC: '227-555-0100',
      PlayStation: '227-555-0100 (phone)',
      Xbox: '227-555-0100 (phone)',
    },
  },
  {
    id: 'iv-weather-change',
    game: 'IV',
    name: 'Change Weather',
    description: 'Cycles through weather patterns',
    category: 'weather',
    codes: {
      PC: '468-555-0100',
      PlayStation: '468-555-0100 (phone)',
      Xbox: '468-555-0100 (phone)',
    },
  },
  {
    id: 'iv-song-info',
    game: 'IV',
    name: 'Song Information',
    description: 'Displays the currently playing track info',
    category: 'gameplay',
    codes: {
      PC: '948-555-0100',
      PlayStation: '948-555-0100 (phone)',
      Xbox: '948-555-0100 (phone)',
    },
  },

  // ─────────────────────────────────────────────────────────────
  // V
  // ─────────────────────────────────────────────────────────────
  {
    id: 'v-health-armor',
    game: 'V',
    name: 'Full Health & Armor',
    description: 'Restores player health and armor completely',
    category: 'health',
    codes: {
      PC: 'TURTLE',
      PlayStation: 'CIRCLE, L1, TRIANGLE, R2, X, SQUARE, CIRCLE, RIGHT, SQUARE, L1, L1, L1',
      Xbox: 'B, LB, Y, RT, A, X, B, RIGHT, X, LB, LB, LB',
    },
  },
  {
    id: 'v-max-health',
    game: 'V',
    name: 'Raise Max Health & Armor',
    description: 'Permanently increases maximum health and armor capacity',
    category: 'health',
    codes: {
      PC: 'HOPTOIT',
      PlayStation: 'X, X, SQUARE, R1, L1, X, RIGHT, LEFT, X',
      Xbox: 'A, A, X, RB, LB, A, RIGHT, LEFT, A',
    },
  },
  {
    id: 'v-weapons1',
    game: 'V',
    name: 'Weapon Set 1',
    description: 'Provides a full collection of advanced weapons',
    category: 'weapons',
    codes: {
      PC: 'TOOLUP',
      PlayStation: 'TRIANGLE, R2, LEFT, L1, X, RIGHT, TRIANGLE, DOWN, SQUARE, L1, L1, L1',
      Xbox: 'Y, RT, LEFT, LB, A, RIGHT, Y, DOWN, X, LB, LB, LB',
    },
  },
  {
    id: 'v-wanted-none',
    game: 'V',
    name: 'Clear Wanted Level',
    description: 'Removes all wanted stars immediately',
    category: 'wanted',
    codes: {
      PC: 'LAWYERUP',
      PlayStation: 'R1, R1, CIRCLE, R2, RIGHT, LEFT, RIGHT, LEFT, RIGHT, LEFT',
      Xbox: 'RB, RB, B, RT, RIGHT, LEFT, RIGHT, LEFT, RIGHT, LEFT',
    },
  },
  {
    id: 'v-wanted-max',
    game: 'V',
    name: 'Raise Wanted Level',
    description: 'Adds one extra wanted star',
    category: 'wanted',
    codes: {
      PC: 'FUGITIVE',
      PlayStation: 'R1, R1, CIRCLE, R2, LEFT, RIGHT, LEFT, RIGHT, LEFT, RIGHT',
      Xbox: 'RB, RB, B, RT, LEFT, RIGHT, LEFT, RIGHT, LEFT, RIGHT',
    },
  },
  {
    id: 'v-spawn-buzzard',
    game: 'V',
    name: 'Spawn Buzzard Helicopter',
    description: 'Spawns an armed attack helicopter',
    category: 'vehicles',
    codes: {
      PC: 'BUZZOFF',
      PlayStation: 'CIRCLE, CIRCLE, L1, CIRCLE, CIRCLE, CIRCLE, L1, L2, R1, TRIANGLE, CIRCLE, TRIANGLE',
      Xbox: 'B, B, LB, B, B, B, LB, LT, RB, Y, B, Y',
    },
  },
  {
    id: 'v-spawn-pcj',
    game: 'V',
    name: 'Spawn Sanchez Motorbike',
    description: 'Spawns a dirt motorbike',
    category: 'vehicles',
    codes: {
      PC: 'OFFROAD',
      PlayStation: 'CIRCLE, X, L1, CIRCLE, CIRCLE, L1, CIRCLE, R1, R2, L2, L1, L1',
      Xbox: 'B, A, LB, B, B, LB, B, RB, RT, LT, LB, LB',
    },
  },
  {
    id: 'v-spawn-stretch',
    game: 'V',
    name: 'Spawn Stretch Limousine',
    description: 'Spawns a luxury stretch limousine',
    category: 'vehicles',
    codes: {
      PC: 'VINEWOOD',
      PlayStation: 'R2, RIGHT, L2, LEFT, LEFT, R1, L1, CIRCLE, RIGHT',
      Xbox: 'RT, RIGHT, LT, LEFT, LEFT, RB, LB, B, RIGHT',
    },
  },
  {
    id: 'v-spawn-trashmaster',
    game: 'V',
    name: 'Spawn Trash Truck',
    description: 'Spawns a garbage collection truck',
    category: 'vehicles',
    codes: {
      PC: 'TRASHED',
      PlayStation: 'CIRCLE, R1, CIRCLE, R1, LEFT, LEFT, R1, L1, CIRCLE, RIGHT',
      Xbox: 'B, RB, B, RB, LEFT, LEFT, RB, LB, B, RIGHT',
    },
  },
  {
    id: 'v-weather-sunny',
    game: 'V',
    name: 'Sunny Weather',
    description: 'Sets the weather to clear and sunny',
    category: 'weather',
    codes: {
      PC: 'MAKEITDRY',
      PlayStation: 'R2, X, L1, L1, L2, L2, L2, SQUARE',
      Xbox: 'RT, A, LB, LB, LT, LT, LT, X',
    },
  },
  {
    id: 'v-weather-rain',
    game: 'V',
    name: 'Rainy Weather',
    description: 'Sets the weather to heavy rain',
    category: 'weather',
    codes: {
      PC: 'MAKEITRAIN',
      PlayStation: 'R2, X, L1, L1, L2, L2, L2, CIRCLE',
      Xbox: 'RT, A, LB, LB, LT, LT, LT, B',
    },
  },
  {
    id: 'v-super-jump',
    game: 'V',
    name: 'Super Jump',
    description: 'Hold jump to leap extremely high',
    category: 'gameplay',
    codes: {
      PC: 'HOPTOIT',
      PlayStation: 'L2, L2, SQUARE, CIRCLE, CIRCLE, L2, SQUARE, SQUARE, LEFT, RIGHT, LEFT, RIGHT, L1, L1',
      Xbox: 'LT, LT, X, B, B, LT, X, X, LEFT, RIGHT, LEFT, RIGHT, LB, LB',
    },
  },
  {
    id: 'v-slow-motion',
    game: 'V',
    name: 'Slow Motion Aiming',
    description: 'Time slows when aiming (stack up to 3 times)',
    category: 'gameplay',
    codes: {
      PC: 'DEADEYE',
      PlayStation: 'SQUARE, L2, R1, TRIANGLE, LEFT, SQUARE, L2, RIGHT, X',
      Xbox: 'X, LT, RB, Y, LEFT, X, LT, RIGHT, A',
    },
  },
  {
    id: 'v-explosive-bullets',
    game: 'V',
    name: 'Explosive Bullets',
    description: 'Bullets cause explosive damage on impact',
    category: 'weapons',
    codes: {
      PC: 'HIGHEX',
      PlayStation: 'RIGHT, SQUARE, X, LEFT, R1, R2, LEFT, RIGHT, RIGHT, L1, L1, L1',
      Xbox: 'RIGHT, X, A, LEFT, RB, RT, LEFT, RIGHT, RIGHT, LB, LB, LB',
    },
  },
  {
    id: 'v-invincible',
    game: 'V',
    name: 'Invincibility (5 min)',
    description: 'Player becomes invincible for five minutes',
    category: 'health',
    codes: {
      PC: 'PAINKILLER',
      PlayStation: 'RIGHT, X, RIGHT, LEFT, RIGHT, R1, RIGHT, LEFT, X, TRIANGLE',
      Xbox: 'RIGHT, A, RIGHT, LEFT, RIGHT, RB, RIGHT, LEFT, A, Y',
    },
  },

  // ─────────────────────────────────────────────────────────────
  // LC
  // ─────────────────────────────────────────────────────────────
  {
    id: 'lc-health',
    game: 'LC',
    name: 'Full Health',
    description: 'Restores player health to maximum',
    category: 'health',
    codes: {
      PlayStation: 'L1, R1, CIRCLE, DOWN, L1, R1, UP, LEFT',
    },
  },
  {
    id: 'lc-weapons1',
    game: 'LC',
    name: 'Weapon Set 1',
    description: 'Grants bat, 9mm, shotgun, tec9, AK-47, RPG, grenades',
    category: 'weapons',
    codes: {
      PlayStation: 'RIGHT, L1, DOWN, L2, LEFT, R1, CIRCLE, R2',
    },
  },
  {
    id: 'lc-weapons2',
    game: 'LC',
    name: 'Weapon Set 2',
    description: 'Grants knife, pistol, shotgun, micro SMG, sniper rifle, rocket launcher, Molotovs',
    category: 'weapons',
    codes: {
      PlayStation: 'R2, L2, R1, L1, X, DOWN, CIRCLE, UP',
    },
  },
  {
    id: 'lc-wanted-none',
    game: 'LC',
    name: 'Clear Wanted Level',
    description: 'Removes all wanted stars',
    category: 'wanted',
    codes: {
      PlayStation: 'CIRCLE, CIRCLE, CIRCLE, TRIANGLE, TRIANGLE, CIRCLE, TRIANGLE',
    },
  },
  {
    id: 'lc-spawn-tank',
    game: 'LC',
    name: 'Spawn Tank',
    description: 'Spawns a military tank',
    category: 'vehicles',
    codes: {
      PlayStation: 'L1, L1, SQUARE, R1, TRIANGLE, L1, TRIANGLE, L1',
    },
  },
  {
    id: 'lc-weather-fog',
    game: 'LC',
    name: 'Foggy Weather',
    description: 'Sets the weather to thick fog',
    category: 'weather',
    codes: {
      PlayStation: 'DOWN, DOWN, L1, SQUARE, L1, SQUARE, SQUARE, SQUARE, L1, TRIANGLE, CIRCLE, TRIANGLE',
    },
  },
  {
    id: 'lc-pedestrians-riot',
    game: 'LC',
    name: 'Pedestrians Riot',
    description: 'All pedestrians become hostile',
    category: 'gameplay',
    codes: {
      PlayStation: 'DOWN, UP, UP, UP, X, R2, R1, L2, L2',
    },
  },
];

export const GAMES: GameAlias[] = ['III', 'Vice', 'San', 'IV', 'V', 'LC'];
