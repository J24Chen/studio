import Image from 'next/image';
import type { Item } from '@/lib/types';

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="group block">
      <div className="overflow-hidden transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
        <Image
          src={item.imageUrl}
          alt={item.name}
          width={64}
          height={64}
          className="object-contain w-full aspect-square"
          data-ai-hint={`${item.name.toLowerCase()}`}
        />
      </div>
    </div>
  );
}
