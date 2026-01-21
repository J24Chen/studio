import type { Item, Gem } from '@/lib/types';
import { cn } from '@/lib/utils';
import { gameClasses } from '@/lib/data';

interface ItemDetailsProps {
  item: Item | Gem;
  classId?: string;
}

const tierColors: { [key: string]: string } = {
  S: 'text-red-500',
  A: 'text-orange-400',
  B: 'text-yellow-400',
  C: 'text-green-400',
  D: 'text-blue-400',
  F: 'text-gray-500',
};

export function ItemDetails({ item, classId }: ItemDetailsProps) {
  const isGem = 'details' in item;

  const description = isGem
    ? classId && item.details[classId]
      ? item.details[classId].description
      : undefined
    : item.description;

  return (
    <div className="space-y-4 text-sm">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-yellow-300 underline">{item.name.toUpperCase()}</h2>
        </div>
        <div className="relative w-16 h-16 rounded-md overflow-hidden border border-gray-600">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.imageUrl}
            alt={item.name}
            width="64"
            height="64"
            className="object-contain w-full h-full"
            data-ai-hint={isGem ? 'gem' : item.name.toLowerCase()}
          />
        </div>
      </div>
      <p className="text-base italic text-gray-400">"{description || 'No description available.'}"</p>

      <hr className="border-gray-600" />
      
      {isGem && classId ? (
        <div className="space-y-2">
          <h3 className="font-bold text-base text-gray-300">Class Tier:</h3>
          {item.details[classId] ? (
            <div>
              <span className="font-semibold text-gray-400">{gameClasses.find(gc => gc.id === classId)?.name || classId}: </span>
              <span className={cn('font-bold', tierColors[item.details[classId].tier])}>{item.details[classId].tier}</span>
            </div>
          ) : (
            <div>No details for this class.</div>
          )}
        </div>
      ) : !isGem && item.tiers ? (
        <div className="space-y-2">
          <h3 className="font-bold text-base text-gray-300">Class Tiers:</h3>
          <div className="grid grid-cols-3 gap-x-4 gap-y-2 text-xs">
            {Object.entries(item.tiers).map(([classId, tier]) => {
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
      ) : null}
    </div>
  );
}
