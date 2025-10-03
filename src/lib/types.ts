export interface Item {
  id: string;
  name: string;
  description: string;
  stats: string;
  category: 'Common' | 'Rare' | 'Legendary' | 'Cursed';
  rating: number;
  imageUrl: string;
}

export interface GameClass {
  id: string;
  name: string;
  description: string;
  kit: string;
}

export type Tier = 'S' | 'A' | 'B' | 'C' | 'D' | 'F';

export const Tiers: Tier[] = ['S', 'A', 'B', 'C', 'D', 'F'];

export interface UserTierListItem {
  item: string;
  tier: Tier;
  userRating: number;
}

export interface UserTierList {
  class: string;
  items: UserTierListItem[];
}
