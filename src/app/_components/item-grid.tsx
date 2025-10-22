'use client';

import { ItemCard } from './item-card';
import type { Item } from '@/lib/types';

interface ItemGridProps {
  items: Item[];
  onHoverItem: (item: Item | null) => void;
  onClickItem: (item: Item) => void;
}

export function ItemGrid({ items, onHoverItem, onClickItem }: ItemGridProps) {
  return (
    <div
      className="grid gap-2"
      style={{ gridTemplateColumns: 'repeat(auto-fit, 50px)' }}
      onMouseLeave={() => onHoverItem(null)}
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
