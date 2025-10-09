import type { Item } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { gameClasses } from '@/lib/data';

interface ItemDetailsProps {
  item: Item;
}

const categoryColors: { [key: string]: string } = {
  Common: 'bg-gray-500',
  Rare: 'bg-blue-500',
  Legendary: 'bg-yellow-500',
  Cursed: 'bg-red-500',
};

const tierColors: { [key: string]: string } = {
  S: 'text-red-500',
  A: 'text-orange-400',
  B: 'text-yellow-400',
  C: 'text-green-400',
  D: 'text-blue-400',
  F: 'text-gray-500',
};

export function ItemDetails({ item }: ItemDetailsProps) {
  return (
    <div className="space-y-4 text-sm">
      <p className="text-xs text-muted-foreground">ItemID: {item.id.replace(/[^0-9]/g, '') || 'N/A'}</p>
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-yellow-300 underline">{item.name.toUpperCase()}</h2>
          <Badge
            className={cn(
              'w-fit text-white',
              categoryColors[item.category]
            )}
          >
            {item.category}
          </Badge>
        </div>
        <Image
          src={item.imageUrl}
          alt={item.name}
          width={64}
          height={64}
          className="rounded-md object-contain border border-gray-600"
          data-ai-hint={`${item.name.toLowerCase()}`}
        />
      </div>
      <p className="text-base italic text-gray-400">"{item.description}"</p>

      <hr className="border-gray-600" />
      
      <div className="text-xs text-muted-foreground pt-2">
        <p>TYPE: {item.category.toUpperCase()}</p>
      </div>

      <div className="space-y-2">
        <h3 className="font-bold text-base text-gray-300">Class Tiers:</h3>
        <div className="grid grid-cols-3 gap-x-4 gap-y-2 text-xs">
          {item.tiers && Object.entries(item.tiers).map(([classId, tier]) => {
            const gameClass = gameClasses.find(gc => gc.id === classId);
            return (
              <div key={classId} className="flex flex-col">
                <span className="font-semibold text-gray-400">{gameClass?.name || classId}:</span>
                <span className={cn('font-bold', tierColors[tier])}>{tier}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
