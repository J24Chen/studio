import type { Item } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ItemDetailsProps {
  item: Item;
}

const categoryColors: { [key: string]: string } = {
  Common: 'bg-gray-500',
  Rare: 'bg-blue-500',
  Legendary: 'bg-yellow-500',
  Cursed: 'bg-red-500',
};

export function ItemDetails({ item }: ItemDetailsProps) {
  return (
    <div className="space-y-4 text-sm">
      <p className="text-xs text-muted-foreground">ItemID: {item.id.replace(/[^0-9]/g, '') || 'N/A'}</p>
      <h2 className="text-2xl font-bold text-yellow-300 underline">{item.name.toUpperCase()}</h2>
      <p className="text-base italic text-gray-400">"{item.description}"</p>
      <div className='flex items-center gap-2'>
        <p className="text-base text-gray-300">Quality: {Math.round(item.rating)}</p>
         <Badge
            className={cn(
              'w-fit text-white',
              categoryColors[item.category]
            )}
          >
            {item.category}
          </Badge>
      </div>

      <div className="space-y-3 text-base text-gray-300 py-4">
        {item.stats.split('.').map((stat, index) => stat && <p key={index}>{stat.trim()}.</p>)}
      </div>
      
      <hr className="border-gray-600" />
      
      <div className="text-xs text-muted-foreground pt-2">
        <p>TYPE: {item.category.toUpperCase()}</p>
      </div>
    </div>
  );
}
