'use client';

import { GemCard } from './gem-card';
import type { Gem } from '@/lib/types';

interface GemGridProps {
  gems: Gem[];
  onHoverGem: (gem: Gem) => void;
  onClickGem: (gem: Gem) => void;
}

export function GemGrid({ gems, onHoverGem, onClickGem }: GemGridProps) {
  return (
    <div
      className="grid gap-2"
      style={{ gridTemplateColumns: 'repeat(auto-fit, 50px)' }}
    >
      {gems.map((gem) => (
        <div
          key={gem.name}
          onMouseEnter={() => onHoverGem(gem)}
          onClick={() => onClickGem(gem)}
          className="cursor-pointer"
        >
          <GemCard gem={gem} />
        </div>
      ))}
    </div>
  );
}
