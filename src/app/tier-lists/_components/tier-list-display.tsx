import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Item, Tier } from '@/lib/types';
import { Tiers } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';


interface TierListDisplayProps {
  tierList: Record<string, string[]>;
  items: Item[];
}

const tierColors: Record<Tier, string> = {
  S: 'bg-red-500',
  A: 'bg-orange-500',
  B: 'bg-yellow-500',
  C: 'bg-green-500',
  D: 'bg-blue-500',
  F: 'bg-gray-500',
};

export function TierListDisplay({ tierList, items }: TierListDisplayProps) {
  const itemMap = new Map(items.map((item) => [item.name, item]));

  return (
    <Card>
      <TooltipProvider>
        <div className="flex flex-col">
          {Tiers.map((tier) => (
            <div key={tier} className="flex border-b last:border-b-0 min-h-[80px]">
              <div
                className={cn(
                  'w-24 flex items-center justify-center text-4xl font-bold font-headline text-white',
                  tierColors[tier]
                )}
              >
                {tier}
              </div>
              <div className="flex-1 p-4 flex flex-wrap gap-3 items-center bg-card/50">
                {tierList[tier]?.map((itemName) => {
                  const item = itemMap.get(itemName);
                  if (!item) return null;
                  return (
                     <Tooltip key={item.id}>
                      <TooltipTrigger asChild>
                        <Link href={`/items/${item.id}`}>
                           <Image
                            src={item.imageUrl}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="rounded-md object-cover aspect-square border-2 border-transparent hover:border-primary transition-all"
                          />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
                 {(!tierList[tier] || tierList[tier].length === 0) && (
                  <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                    -
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </TooltipProvider>
    </Card>
  );
}
