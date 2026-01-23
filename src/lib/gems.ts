import type { Gem, Tier } from './types';
import { gameClasses } from './data';

type GemInfo = {
  name: string;
  imageUrl: string;
  tiers?: { [classId: string]: Tier };
  description?: { [classId: string]: string };
};

const gemData: GemInfo[] = [
  { 
    name: 'Emerald Primary', 
    imageUrl: 'https://static.wikitide.net/rnswiki/9/96/Spr_upgrade_green_0.png', 
    tiers: {
      wizard: 'F',
      assassin: 'F',
      heavyblade: 'F',
      dancer: 'F',
      druid: 'F',
      spellsword: 'F',
      sniper: 'F',
      bruiser: 'F',
      defender: 'F',
      ancient: 'F',
    },
    description: {
      wizard: "Deals damage in a large radius around you. Deals slightly more damage (250). Decreases all other cooldowns by 2 seconds each time it's used.",
      assassin: "Deals damage in a large radius around you. Deals slightly more damage (250). Decreases all other cooldowns by 2 seconds each time it's used.",
      heavyblade: "Deals damage in a large radius around you. Deals slightly more damage (250). Decreases all other cooldowns by 2 seconds each time it's used.",
      dancer: "Deals damage in a large radius around you. Deals slightly more damage (250). Decreases all other cooldowns by 2 seconds each time it's used.",
      druid: "Deals damage in a large radius around you. Deals slightly more damage (250). Decreases all other cooldowns by 2 seconds each time it's used.",
      spellsword: "Deals damage in a large radius around you. Deals slightly more damage (250). Decreases all other cooldowns by 2 seconds each time it's used.",
      sniper: "Deals damage in a large radius around you. Deals slightly more damage (250). Decreases all other cooldowns by 2 seconds each time it's used.",
      bruiser: "Deals damage in a large radius around you. Deals slightly more damage (250). Decreases all other cooldowns by 2 seconds each time it's used.",
      defender: "Deals damage in a large radius around you. Deals slightly more damage (250). Decreases all other cooldowns by 2 seconds each time it's used.",
      ancient: "Deals damage in a large radius around you. Deals slightly more damage (250). Decreases all other cooldowns by 2 seconds each time it's used.",
    }
  },
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
  const details: { [classId: string]: { description: string; tier: Tier } } = {};
  const tiers: Tier[] = ['S', 'A', 'B', 'C', 'D', 'F'];

  gameClasses.forEach((gc, index) => {
    const tier = gemInfo.tiers?.[gc.id] ?? tiers[(i + index) % tiers.length];
    const description = gemInfo.description?.[gc.id] ?? `A description for ${gemInfo.name} for the ${gc.name} class. It provides a unique bonus.`;
    
    details[gc.id] = {
      description,
      tier,
    };
  });

  return {
    name: gemInfo.name,
    imageUrl: gemInfo.imageUrl,
    details,
  };
});
