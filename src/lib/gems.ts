import type { Gem } from './types';
import { gameClasses } from './data';

const gemData = [
  { name: 'Emerald Primary', imageUrl: 'https://static.wikitide.net/rnswiki/9/96/Spr_upgrade_green_0.png' },
  { name: 'Emerald Secondary', imageUrl: 'https://static.wikitide.net/rnswiki/0/00/Spr_upgrade_green_1.png' },
  { name: 'Emerald Special', imageUrl: 'https://static.wikitide.net/rnswiki/5/57/Spr_upgrade_green_2.png' },
  { name: 'Emerald Defensive', imageUrl: 'https://static.wikitide.net/rnswiki/e/e6/Spr_upgrade_green_3.png' },
  { name: 'Garnet Primary', imageUrl: 'https://static.wikitide.net/rnswiki/6/6a/Spr_upgrade_yellow_0.png' },
  { name: 'Garnet Secondary', imageUrl: 'https://static.wikitide.net/rnswiki/2/22/Spr_upgrade_yellow_1.png' },
  { name: 'Garnet Special', imageUrl: 'https://static.wikitide.net/rnswiki/1/1c/Spr_upgrade_yellow_2.png' },
  { name: 'Garnet Defensive', imageUrl: 'https://static.wikitide.net/rnswiki/f/f6/Spr_upgrade_yellow_3.png' },
  { name: 'Ruby Primary', imageUrl: 'https://static.wikitide.net/rnswiki/1/15/Spr_upgrade_red_0.png' },
  { name: 'Ruby Secondary', imageUrl: 'https://static.wikitide.net/rnswiki/e/ea/Spr_upgrade_red_1.png' },
  { name: 'Ruby Special', imageUrl: 'https://static.wikitide.net/rnswiki/d/df/Spr_upgrade_red_2.png' },
  { name: 'Ruby Defensive', imageUrl: 'https://static.wikitide.net/rnswiki/4/4a/Spr_upgrade_red_3.png' },
  { name: 'Sapphire Primary', imageUrl: 'https://static.wikitide.net/rnswiki/f/f6/Spr_upgrade_blue_0.png' },
  { name: 'Sapphire Secondary', imageUrl: 'https://static.wikitide.net/rnswiki/0/05/Spr_upgrade_blue_1.png' },
  { name: 'Sapphire Special', imageUrl: 'https://static.wikitide.net/rnswiki/d/d1/Spr_upgrade_blue_2.png' },
  { name: 'Sapphire Defensive', imageUrl: 'https://static.wikitide.net/rnswiki/c/c0/Spr_upgrade_blue_3.png' },
  { name: 'Opal Primary', imageUrl: 'https://static.wikitide.net/rnswiki/e/e5/Spr_upgrade_purple_0.png' },
  { name: 'Opal Secondary', imageUrl: 'https://static.wikitide.net/rnswiki/a/a2/Spr_upgrade_purple_1.png' },
  { name: 'Opal Special', imageUrl: 'https://static.wikitide.net/rnswiki/d/d4/Spr_upgrade_purple_2.png' },
  { name: 'Opal Defensive', imageUrl: 'https://static.wikitide.net/rnswiki/a/ae/Spr_upgrade_purple_3.png' }
];

export const gems: Gem[] = gemData.map((gemInfo, i) => {
  const details: { [classId: string]: { description: string; tier: 'S' | 'A' | 'B' | 'C' | 'D' | 'F' } } = {};
  const tiers: ('S' | 'A' | 'B' | 'C' | 'D' | 'F')[] = ['S', 'A', 'B', 'C', 'D', 'F'];

  gameClasses.forEach((gc, index) => {
    const tier = tiers[(i + index) % tiers.length];
    details[gc.id] = {
      description: `A description for ${gemInfo.name} for the ${gc.name} class. It provides a unique bonus.`,
      tier: tier,
    };
  });

  return {
    ...gemInfo,
    details,
  };
});
