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

export interface Gem {
  name: string;
  imageUrl: string;
  details: {
    [classId: string]: {
      description: string;
      tier: Tier;
    };
  };
}
