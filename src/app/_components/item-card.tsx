import type { Item } from '@/lib/types';

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="group relative block bg-[#1e1e1e] rounded-md overflow-hidden transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 w-[50px] h-[50px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.imageUrl}
        alt={item.name}
        width="50"
        height="50"
        className="object-contain w-full h-full"
        data-ai-hint={`${item.name.toLowerCase()}`}
      />
    </div>
  );
}
