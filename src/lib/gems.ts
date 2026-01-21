import type { Gem } from './types';
import { gameClasses } from './data';

export const gems: Gem[] = Array.from({ length: 20 }, (_, i) => {
  const gemName = `Verdant Gem ${i + 1}`;
  const details: { [classId: string]: { description: string; tier: 'S' | 'A' | 'B' | 'C' | 'D' | 'F' } } = {};
  const tiers: ('S' | 'A' | 'B' | 'C' | 'D' | 'F')[] = ['S', 'A', 'B', 'C', 'D', 'F'];

  gameClasses.forEach((gc, index) => {
    const tier = tiers[(i + index) % tiers.length];
    details[gc.id] = {
      description: `A description for ${gemName} for the ${gc.name} class. It provides a unique bonus.`,
      tier: tier,
    };
  });

  return {
    name: gemName,
    imageUrl: 'https://static.wikitide.net/rnswiki/9/96/Spr_upgrade_green_0.png',
    details,
  };
});
