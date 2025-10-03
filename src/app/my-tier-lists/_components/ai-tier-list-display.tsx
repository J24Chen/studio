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
import type { SortUserTierListsByAIOutput } from '@/ai/flows/sort-user-tier-lists-by-ai';
import { ArrowRight } from 'lucide-react';

interface AITierListDisplayProps {
  aiSortedList: SortUserTierListsByAIOutput;
  items: Item[];
}

const tierColors: Record<string, string> = {
  S: 'bg-red-500',
  A: 'bg-orange-500',
  B: 'bg-yellow-500',
  C: 'bg-green-500',
  D: 'bg-blue-500',
  F: 'bg-gray-500',
};

export function AITierListDisplay({
  aiSortedList,
  items,
}: AITierListDisplayProps) {
  const itemMap = new Map(items.map((item) => [item.name, item]));

  const sortedBySuggestedTier = [...aiSortedList].sort((a, b) => {
    const tierA = Tiers.indexOf(a.suggestedTier as Tier);
    const tierB = Tiers.indexOf(b.suggestedTier as Tier);
    return tierA - tierB;
  });

  const tierGroups = sortedBySuggestedTier.reduce((acc, item) => {
    const tier = item.suggestedTier as Tier;
    if (!acc[tier]) {
      acc[tier] = [];
    }
    acc[tier].push(item);
    return acc;
  }, {} as Record<Tier, SortUserTierListsByAIOutput>);

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
                {tierGroups[tier]?.map((aiItem) => {
                  const item = itemMap.get(aiItem.item);
                  if (!item) return null;
                  return (
                    <Tooltip key={item.id} delayDuration={100}>
                      <TooltipTrigger asChild>
                        <div className="relative">
                          <Link href={`/items/${item.id}`}>
                            <Image
                              src={item.imageUrl}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="rounded-md object-cover aspect-square border-2 border-transparent hover:border-primary transition-all"
                            />
                          </Link>
                           {aiItem.tier !== aiItem.suggestedTier && (
                              <div className="absolute -top-2 -right-2 bg-background rounded-full p-0.5 flex items-center text-xs">
                                <span className={cn("font-bold px-1", tierColors[aiItem.tier], "text-white rounded-l-full")}>{aiItem.tier}</span>
                                <ArrowRight className="h-3 w-3 mx-0.5 text-muted-foreground" />
                                <span className={cn("font-bold px-1", tierColors[aiItem.suggestedTier], "text-white rounded-r-full")}>{aiItem.suggestedTier}</span>
                              </div>
                           )}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs" side="bottom">
                        <p className="font-bold mb-2">{item.name}</p>
                        <p>{aiItem.aiAnalysis}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
                {(!tierGroups[tier] || tierGroups[tier].length === 0) && (
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
