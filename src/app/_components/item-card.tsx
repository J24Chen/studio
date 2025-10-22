import Image from 'next/image';
import type { Item } from '@/lib/types';

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="group relative block bg-[#121212] rounded-md overflow-hidden transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 w-[50px] h-[50px]">
      <Image
        src={item.imageUrl}
        alt={item.name}
        fill
        sizes="50px"
        className="object-contain"
        data-ai-hint={`${item.name.toLowerCase()}`}
      />
    </div>
  );
}
