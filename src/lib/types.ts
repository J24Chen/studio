export interface Item {
  name: string;
  description: string;
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

export type Tier = 'S' | 'A' | 'B' | 'C' | 'D' | 'F' | 'NA';

export const Tiers: Tier[] = ['S', 'A', 'B', 'C', 'D', 'F', 'NA'];

export interface UserTierListItem {
  item: string;
  tier: Tier;
}


export type ClassTierList = {
  [classId: string]: {
    [itemId: string]: Tier;
  };
};
