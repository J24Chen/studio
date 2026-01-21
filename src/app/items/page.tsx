'use client';

import { useState, useMemo } from 'react';
import { items, gameClasses } from '@/lib/data';
import type { Item, Tier } from '@/lib/types';
import { ItemGrid } from './_components/item-grid';
import { ItemDetails } from './_components/item-details';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Tiers } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const tierColors: { [key: string]: string } = {
  S: 'text-red-500',
  A: 'text-orange-400',
  B: 'text-yellow-400',
  C: 'text-green-400',
  D: 'text-blue-400',
  F: 'text-gray-500',
};

export default function ItemsPage() {
  const [inspectedItem, setInspectedItem] = useState<Item | null>(null);
  const [hoveredItem, setHoveredItem] = useState<Item | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('all');

  const filteredItems = useMemo(() => {
    let filtered = [...items].sort((a, b) => a.name.localeCompare(b.name));

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [searchTerm]);

  const tieredItems: { [key in Tier]?: Item[] } = useMemo(() => {
    if (selectedClass === 'all') {
      return {};
    }
  
    const grouped: { [key in Tier]?: Item[] } = {};
  
    for (const item of filteredItems) {
      const tier = item.tiers?.[selectedClass];
      if (tier) {
        if (!grouped[tier]) {
          grouped[tier] = [];
        }
        grouped[tier]!.push(item);
      }
    }
    return grouped;
  }, [selectedClass, filteredItems]);

  return (
    <div className="flex h-[calc(100vh-3.5rem)] bg-[#1e1e1e] text-white">
      <div className="w-80 p-4 border-r border-gray-700 bg-[#121212] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Item Details</h2>
        {hoveredItem ? <ItemDetails item={hoveredItem} /> : <div className="text-gray-500 text-sm">Hover over an item to see its details.</div>}
      </div>
      <div className="flex-1 p-8 overflow-y-auto">
        <header className="mb-4 text-center">
          <h1 className="text-3xl font-bold">RABBIT & STEEL</h1>
          <p className="text-lg text-muted-foreground">ITEM BROWSER ({filteredItems.length})</p>
        </header>
         <div className="flex gap-4 mb-6">
          <Input
            type="text"
            placeholder="Search for an item..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#2a2a2a] border-gray-600 text-white min-w-[160px]"
          />
          <Select onValueChange={setSelectedClass} defaultValue="all">
            <SelectTrigger className="w-[200px] bg-[#2a2a2a] border-gray-600 text-white">
              <SelectValue placeholder="Filter by class" />
            </SelectTrigger>
            <SelectContent className="bg-[#2a2a2a] border-gray-600 text-white">
              <SelectItem value="all">All Classes</SelectItem>
              {gameClasses.map((gc) => (
                <SelectItem key={gc.id} value={gc.id}>
                  {gc.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {selectedClass !== 'all' && Object.keys(tieredItems).length > 0 ? (
          <div className="space-y-4">
            {(Object.keys(tieredItems) as Tier[]).sort((a, b) => Tiers.indexOf(a) - Tiers.indexOf(b)).map((tier) => (
              tieredItems[tier] && tieredItems[tier]!.length > 0 && (
                <div key={tier}>
                  <div className="flex items-center gap-4 my-4">
                    <div className="flex-1 border-t border-gray-600"></div>
                    <h2 className={cn('text-3xl font-bold', tierColors[tier])}>{tier}</h2>
                    <div className="flex-1 border-t border-gray-600"></div>
                  </div>
                  <ItemGrid items={tieredItems[tier]!} onHoverItem={setHoveredItem} onClickItem={setInspectedItem} />
                </div>
              )
            ))}
          </div>
        ) : (
          <div>
            <hr className="border-gray-600 mb-6" />
            <ItemGrid items={filteredItems} onHoverItem={setHoveredItem} onClickItem={setInspectedItem} />
          </div>
        )}

      </div>
      <Dialog open={!!inspectedItem} onOpenChange={(open) => !open && setInspectedItem(null)}>
        <DialogContent className="bg-[#121212] border-gray-700 text-white max-w-sm">
          {inspectedItem && <ItemDetails item={inspectedItem} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
