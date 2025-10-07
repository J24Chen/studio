'use client';

import { useState, useMemo } from 'react';
import { items, gameClasses } from '@/lib/data';
import type { Item, GameClass } from '@/lib/types';
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

export default function ItemsPage() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('all');

  const filteredItems = useMemo(() => {
    let filtered = items;

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Class filtering logic will be added later
    if (selectedClass !== 'all') {
      // Placeholder for class filtering
    }

    return filtered;
  }, [searchTerm, selectedClass]);


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
        <header className="mb-4">
          <h1 className="text-3xl font-bold">RABBIT & STEEL</h1>
          <p className="text-lg text-muted-foreground">ITEM BROWSER ({filteredItems.length})</p>
        </header>
         <div className="flex gap-4 mb-6">
          <Input
            type="text"
            placeholder="Search for an item..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#2a2a2a] border-gray-600 text-white"
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
        <hr className="border-gray-600 mb-6" />
        <ItemGrid items={filteredItems} onSelectItem={setSelectedItem} />
      </div>
    </div>
  );
}
