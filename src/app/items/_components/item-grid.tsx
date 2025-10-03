'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { ItemCard } from './item-card';
import type { Item } from '@/lib/types';
import { Search } from 'lucide-react';

interface ItemGridProps {
  items: Item[];
}

export function ItemGrid({ items }: ItemGridProps) {
  const [search, setSearch] = useState('');

  const filteredItems = useMemo(() => {
    if (!search) return items;
    return items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, items]);

  return (
    <div>
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for items by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-lg pl-10"
        />
      </div>
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <p>No items found matching your search.</p>
        </div>
      )}
    </div>
  );
}
