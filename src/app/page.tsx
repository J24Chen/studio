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

export default function ItemsPage() {
  const [hoveredItem, setHoveredItem] = useState<Item | null>(null);
  const [inspectedItem, setInspectedItem] = useState<Item | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('all');

  const filteredItems = useMemo(() => {
    let filtered = items;

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
    <div className="flex h-screen bg-[#1e1e1e] text-white">
      <div className="hidden [@media(min-width:600px)]:flex w-[250px] flex-shrink-0 bg-[#121212] p-6 overflow-y-auto flex-col">
        {hoveredItem ? (
          <ItemDetails item={hoveredItem} />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">Hover over an item to see details</p>
          </div>
        )}
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
                    <h2 className="text-3xl font-bold text-primary">{tier}</h2>
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
