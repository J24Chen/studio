import type { Gem } from '@/lib/types';
import { cn } from '@/lib/utils';
import { gameClasses } from '@/lib/data';

interface GemDetailsProps {
  gem: Gem;
  classId: string;
}

const tierColors: { [key: string]: string } = {
  S: 'text-red-500',
  A: 'text-orange-400',
  B: 'text-yellow-400',
  C: 'text-green-400',
  D: 'text-blue-400',
  F: 'text-gray-500',
};

export function GemDetails({ gem, classId }: GemDetailsProps) {
  const details = gem.details[classId];
  if (!details) {
    return <div>No details for this class.</div>
  }

  return (
    <div className="space-y-4 text-sm">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-yellow-300 underline">{gem.name.toUpperCase()}</h2>
        </div>
        <div className="relative w-16 h-16 rounded-md overflow-hidden border border-gray-600">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={gem.imageUrl}
            alt={gem.name}
            width="64"
            height="64"
            className="object-contain w-full h-full"
            data-ai-hint="gem"
          />
        </div>
      </div>
      <p className="text-base italic text-gray-400">"{details.description}"</p>

      <hr className="border-gray-600" />
      
      <div className="space-y-2">
        <h3 className="font-bold text-base text-gray-300">Class Tier:</h3>
        <div>
          <span className="font-semibold text-gray-400">{gameClasses.find(gc => gc.id === classId)?.name || classId}: </span>
          <span className={cn('font-bold', tierColors[details.tier])}>{details.tier}</span>
        </div>
      </div>
    </div>
  );
}
