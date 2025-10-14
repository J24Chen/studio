export interface Item {
  id: string;
  name: string;
  description: string;
  category: 'Common' | 'Rare' | 'Legendary' | 'Cursed';
  imageUrl: string;
  tiers?: {
    [classId: string]: Tier;
  };
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
}


export type ClassTierList = {
  [classId: string]: {
    [itemId: string]: Tier;
  };
};
