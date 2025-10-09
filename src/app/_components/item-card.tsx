import Image from 'next/image';
import type { Item } from '@/lib/types';

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="group block bg-[#121212] rounded-md overflow-hidden transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
      <Image
        src={item.imageUrl}
        alt={item.name}
        width={50}
        height={50}
        className="object-contain w-full aspect-square"
        data-ai-hint={`${item.name.toLowerCase()}`}
      />
    </div>
  );
}
