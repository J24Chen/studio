'use client';

import { ItemCard } from './item-card';
import type { Item, Gem } from '@/lib/types';

interface ItemGridProps {
  items: (Item | Gem)[];
  onHoverItem: (item: Item | Gem) => void;
  onClickItem: (item: Item | Gem) => void;
}

export function ItemGrid({ items, onHoverItem, onClickItem }: ItemGridProps) {
  return (
    <div
      className="grid gap-2"
      style={{ gridTemplateColumns: 'repeat(auto-fit, 50px)' }}
    >
      {items.map((item) => (
        <div
          key={item.name}
          onMouseEnter={() => onHoverItem(item)}
          onClick={() => onClickItem(item)}
          className="cursor-pointer"
        >
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
}
