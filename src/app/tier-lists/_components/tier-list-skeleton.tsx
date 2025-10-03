import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Tiers, type Tier } from '@/lib/types';

const tierColors: Record<Tier, string> = {
  S: 'bg-red-500',
  A: 'bg-orange-500',
  B: 'bg-yellow-500',
  C: 'bg-green-500',
  D: 'bg-blue-500',
  F: 'bg-gray-500',
};

export function TierListSkeleton() {
  return (
    <Card className="overflow-hidden">
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
              {[...Array(Math.floor(Math.random() * 4) + 2)].map((_, i) => (
                <Skeleton key={i} className="h-16 w-16 rounded-md" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
