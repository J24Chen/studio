import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Item } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ItemCardProps {
  item: Item;
}

const categoryColors = {
  Common: 'bg-gray-500',
  Rare: 'bg-blue-500',
  Legendary: 'bg-yellow-500',
  Cursed: 'bg-red-500',
};

export function ItemCard({ item }: ItemCardProps) {
  return (
    <Link href={`/items/${item.id}`} className="group block">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 h-full">
        <CardContent className="p-0">
          <div className="relative">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={400}
              height={400}
              className="object-cover w-full aspect-square"
              data-ai-hint={`${item.name.toLowerCase()}`}
            />
            <Badge
              className={cn(
                'absolute top-2 right-2 text-white',
                categoryColors[item.category]
              )}
            >
              {item.category}
            </Badge>
          </div>
          <div className="p-4">
            <h3 className="font-semibold font-headline text-lg truncate" title={item.name}>
              {item.name}
            </h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
