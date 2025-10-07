'use client';

import { useState } from 'react';
import { items } from '@/lib/data';
import type { Item } from '@/lib/types';
import { ItemGrid } from './items/_components/item-grid';
import { ItemDetails } from './items/_components/item-details';

export default function ItemsPage() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div className="flex h-screen bg-[#1e1e1e] text-white">
      <div className="w-[350px] flex-shrink-0 bg-[#121212] p-6 overflow-y-auto">
        {selectedItem ? (
          <ItemDetails item={selectedItem} />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">Hover over an item to see details</p>
          </div>
        )}
      </div>
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="mb-4">
            <h1 className="text-3xl font-bold">THE BINDING OF ISAAC: REPENTANCE</h1>
            <p className="text-lg text-muted-foreground">REPENTANCE ITEMS ({items.length})</p>
        </div>
        <hr className="border-gray-600 mb-6" />
        <ItemGrid items={items} onSelectItem={setSelectedItem} />
      </div>
    </div>
  );
}
