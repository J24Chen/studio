import { TierListDisplay } from '@/app/tier-lists/_components/tier-list-display';
import type { Item } from '@/lib/types';

interface UserTierListDisplayProps {
  tierList: Record<string, string[]>;
  items: Item[];
}

export function UserTierListDisplay({
  tierList,
  items,
}: UserTierListDisplayProps) {
  return <TierListDisplay tierList={tierList} items={items} />;
}
