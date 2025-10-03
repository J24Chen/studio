'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { WandSparkles } from 'lucide-react';
import type { GameClass, Item, UserTierList, Tier } from '@/lib/types';
import {
  sortUserTierListsByAI,
  type SortUserTierListsByAIOutput,
} from '@/ai/flows/sort-user-tier-lists-by-ai';
import { UserTierListDisplay } from './user-tier-list-display';
import { AITierListDisplay } from './ai-tier-list-display';
import { sleep } from '@/lib/utils';
import { TierListSkeleton } from '@/app/tier-lists/_components/tier-list-skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


interface UserTierListContainerProps {
  initialTierList: UserTierList;
  gameClass?: GameClass;
  items: Item[];
}

export function UserTierListContainer({
  initialTierList,
  gameClass,
  items,
}: UserTierListContainerProps) {
  const [aiSortedList, setAiSortedList] =
    useState<SortUserTierListsByAIOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSortByAI = async () => {
    setLoading(true);
    setError('');
    setAiSortedList(null);

    await sleep(1000); // Simulate network latency

    try {
      const input = {
        tierList: initialTierList.items.map((item) => ({
          ...item,
          class: initialTierList.class,
        })),
      };
      const result = await sortUserTierListsByAI(input);
      setAiSortedList(result);
    } catch (e) {
      setError('Failed to sort tier list with AI. Please try again.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const initialTierListAsRecord = initialTierList.items.reduce((acc, curr) => {
    if (!acc[curr.tier]) {
      acc[curr.tier] = [];
    }
    acc[curr.tier].push(curr.item);
    return acc;
  }, {} as Record<string, string[]>);


  return (
    <div className="p-6 border rounded-lg bg-card">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold font-headline">
          {initialTierList.class} Tier List
        </h2>
        <Button onClick={handleSortByAI} disabled={loading}>
          <WandSparkles className="mr-2 h-4 w-4" />
          {loading ? 'Analyzing...' : 'Analyze with AI'}
        </Button>
      </div>

       {error && <p className="text-destructive text-sm text-center mb-4">{error}</p>}

      {loading ? (
        <TierListSkeleton />
      ) : aiSortedList ? (
        <Tabs defaultValue="ai-analysis" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="your-list">Your List</TabsTrigger>
            <TabsTrigger value="ai-analysis">AI Analysis</TabsTrigger>
          </TabsList>
          <TabsContent value="your-list">
             <UserTierListDisplay tierList={initialTierListAsRecord} items={items} />
          </TabsContent>
          <TabsContent value="ai-analysis">
            <AITierListDisplay aiSortedList={aiSortedList} items={items} />
          </TabsContent>
        </Tabs>
      ) : (
        <UserTierListDisplay tierList={initialTierListAsRecord} items={items} />
      )}
    </div>
  );
}
