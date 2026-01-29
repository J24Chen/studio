'use client';

import { useMemo, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { gems } from '@/lib/gems';
import { gameClasses } from '@/lib/data';
import type { Gem, Tier } from '@/lib/types';
import { ItemGrid } from '../_components/item-grid';
import { ItemDetails } from '../_components/item-details';
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

const tierColors: { [key: string]: string } = {
  S: 'text-red-500',
  A: 'text-orange-400',
  B: 'text-yellow-400',
  C: 'text-green-400',
  D: 'text-blue-400',
  F: 'text-gray-500',
};

export default function GemsPage() {
  const [inspectedItem, setInspectedItem] = useState<Gem | null>(null);
  const [hoveredItem, setHoveredItem] = useState<Gem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const classFromUrl = searchParams.get('class');
  const selectedClass = (classFromUrl && classFromUrl !== 'all') ? classFromUrl : 'wizard';

  const handleClassChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('class', value);
    router.push(`${pathname}?${params.toString()}`);
  };

  const filteredItems = useMemo(() => {
    let filtered = [...gems].sort((a, b) => a.name.localeCompare(b.name));

    if (searchTerm) {
      filtered = filtered.filter((gem) =>
        gem.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [searchTerm]);

  const tieredItems: { [key in Tier]?: Gem[] } = useMemo(() => {
    const grouped: { [key in Tier]?: Gem[] } = {};
  
    for (const gem of filteredItems) {
      const tier = gem.details[selectedClass]?.tier;
      if (tier) {
        if (!grouped[tier]) {
          grouped[tier] = [];
        }
        grouped[tier]!.push(gem);
      }
    }
    return grouped;
  }, [selectedClass, filteredItems]);

  return (
    <div className="flex h-[calc(100vh-3.5rem)] bg-[#1e1e1e] text-white">
      <div className="w-80 p-4 border-r border-gray-700 bg-[#121212] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Gem Details</h2>
        {hoveredItem ? <ItemDetails item={hoveredItem} classId={selectedClass} /> : <div className="text-gray-500 text-sm">Hover over a gem to see its details.</div>}
      </div>
      <div className="flex-1 p-8 overflow-y-auto">
        <header className="mb-4 text-center">
          <h1 className="text-3xl font-bold">RABBIT & STEEL</h1>
          <p className="text-lg text-muted-foreground">GEM BROWSER ({filteredItems.length})</p>
        </header>
         <div className="flex gap-4 mb-6">
          <Input
            type="text"
            placeholder="Search for a gem..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#2a2a2a] border-gray-600 text-white min-w-[160px]"
          />
          <Select onValueChange={handleClassChange} value={selectedClass}>
            <SelectTrigger className="w-[200px] bg-[#2a2a2a] border-gray-600 text-white">
              <SelectValue placeholder="Filter by class" />
            </SelectTrigger>
            <SelectContent className="bg-[#2a2a2a] border-gray-600 text-white">
              {gameClasses.map((gc) => (
                <SelectItem key={gc.id} value={gc.id}>
                  {gc.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
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

      </div>
      <Dialog open={!!inspectedItem} onOpenChange={(open) => !open && setInspectedItem(null)}>
        <DialogContent className="bg-[#121212] border-gray-700 text-white max-w-sm">
          {inspectedItem && <ItemDetails item={inspectedItem} classId={selectedClass} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
