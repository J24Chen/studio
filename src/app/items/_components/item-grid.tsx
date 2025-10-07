'use client';

import { ItemCard } from './item-card';
import type { Item } from '@/lib/types';

interface ItemGridProps {
  items: Item[];
  onSelectItem: (item: Item | null) => void;
}

export function ItemGrid({ items, onSelectItem }: ItemGridProps) {
  return (
    <div
      className="grid grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-16 gap-2"
      onMouseLeave={() => onSelectItem(null)}
    >
      {items.map((item) => (
        <div key={item.id} onMouseEnter={() => onSelectItem(item)}>
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
}
