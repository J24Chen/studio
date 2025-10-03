import type { GameClass, Item, UserTierList } from './types';

export const gameClasses: GameClass[] = [
  {
    id: 'heavy-slasher',
    name: 'Heavy Slasher',
    description: 'A melee powerhouse focused on heavy-hitting attacks.',
    kit: 'The Heavy Slasher kit revolves around high base damage, critical strikes, and abilities that cleave through multiple enemies. They benefit greatly from items that increase attack damage, critical hit chance, and attack speed.',
  },
  {
    id: 'spellcaster',
    name: 'Spellcaster',
    description: 'A ranged magic user who controls the battlefield with powerful spells.',
    kit: 'Spellcasters rely on a large mana pool and high spell power to deal damage from a distance. Their kit includes area-of-effect spells, single-target nukes, and crowd control. They seek items that boost spell power, mana regeneration, and cooldown reduction.',
  },
  {
    id: 'dancer',
    name: 'Dancer',
    description: 'A nimble and agile fighter who weaves through combat with grace.',
    kit: 'Dancers excel at dodging attacks and dealing rapid, consecutive hits. Their abilities often grant temporary invulnerability or high mobility. They synergize well with on-hit effect items, attack speed, and movement speed.',
  },
  {
    id: 'scout',
    name: 'Scout',
    description: 'A ranged archer who picks off enemies from afar.',
    kit: 'Scouts specialize in long-range sustained damage. Their kit includes abilities that enhance their range, attack speed, and allow for kiting enemies. They benefit from items increasing attack damage, range, and attack speed.',
  },
];

export const items: Item[] = [
  {
    id: 'sapphire-brooch',
    name: 'Sapphire Brooch',
    description: 'A beautiful brooch that hums with magical energy.',
    stats: '+20 Spell Power, +5 Mana per second.',
    category: 'Rare',
    rating: 4.5,
    imageUrl: 'https://picsum.photos/seed/1/400/400',
  },
  {
    id: 'ruby-ring',
    name: 'Ruby Ring',
    description: 'A ring that glows with an inner fire.',
    stats: '+15 Attack Damage, +10% Critical Hit Chance.',
    category: 'Rare',
    rating: 4.2,
    imageUrl: 'https://picsum.photos/seed/2/400/400',
  },
  {
    id: 'swift-boots',
    name: 'Swift Boots',
    description: 'These boots feel lighter than air.',
    stats: '+25% Movement Speed, +15% Attack Speed.',
    category: 'Common',
    rating: 4.8,
    imageUrl: 'https://picsum.photos/seed/3/400/400',
  },
  {
    id: 'ancient-tome',
    name: 'Ancient Tome',
    description: 'A book filled with forgotten incantations.',
    stats: '+30 Spell Power, -10% Cooldown Reduction.',
    category: 'Legendary',
    rating: 4.9,
    imageUrl: 'https://picsum.photos/seed/4/400/400',
  },
  {
    id: 'berserkers-greataxe',
    name: "Berserker's Greataxe",
    description: 'An axe that seems to hunger for battle.',
    stats: '+40 Attack Damage, +10% Lifesteal, -10 Armor.',
    category: 'Legendary',
    rating: 4.6,
    imageUrl: 'https://picsum.photos/seed/5/400/400',
  },
  {
    id: 'moon-glaive',
    name: 'Moon Glaive',
    description: "A silent weapon that strikes like moonlight.",
    stats: "Attacks bounce to 2 additional targets.",
    category: 'Rare',
    rating: 4.7,
    imageUrl: 'https://picsum.photos/seed/6/400/400',
  },
  {
    id: 'cursed-idol',
    name: 'Cursed Idol',
    description: 'A unsettling idol that whispers promises of power.',
    stats: '+50% All Damage, -50% Max Health.',
    category: 'Cursed',
    rating: 3.5,
    imageUrl: 'https://picsum.photos/seed/7/400/400',
  },
  {
    id: 'leather-armor',
    name: 'Leather Armor',
    description: 'Simple but effective protection.',
    stats: '+20 Armor, +50 Health.',
    category: 'Common',
    rating: 3.8,
    imageUrl: 'https://picsum.photos/seed/8/400/400',
  },
  {
    id: 'mages-circlet',
    name: "Mage's Circlet",
    description: 'A circlet that focuses arcane energies.',
    stats: '+15 Spell Power, +20% Mana.',
    category: 'Common',
    rating: 4.1,
    imageUrl: 'https://picsum.photos/seed/9/400/400',
  },
   {
    id: 'longbow',
    name: "Longbow",
    description: 'A standard issue longbow for archers.',
    stats: '+10 Attack Damage, +10% Attack Range.',
    category: 'Common',
    rating: 4.0,
    imageUrl: 'https://picsum.photos/seed/10/400/400',
  }
];

export const userTierLists: UserTierList[] = [
  {
    class: 'Heavy Slasher',
    items: [
      { item: "Berserker's Greataxe", tier: 'S', userRating: 5 },
      { item: 'Ruby Ring', tier: 'A', userRating: 4 },
      { item: 'Swift Boots', tier: 'A', userRating: 4 },
      { item: 'Moon Glaive', tier: 'B', userRating: 3 },
      { item: 'Leather Armor', tier: 'C', userRating: 2 },
      { item: 'Cursed Idol', tier: 'D', userRating: 1 },
    ],
  },
  {
    class: 'Spellcaster',
    items: [
      { item: 'Ancient Tome', tier: 'S', userRating: 5 },
      { item: 'Sapphire Brooch', tier: 'S', userRating: 5 },
      { item: "Mage's Circlet", tier: 'A', userRating: 4 },
      { item: 'Swift Boots', tier: 'B', userRating: 3 },
      { item: 'Cursed Idol', tier: 'C', userRating: 2 },
      { item: 'Leather Armor', tier: 'F', userRating: 1 },
    ],
  },
];
