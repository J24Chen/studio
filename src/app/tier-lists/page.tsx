'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/layout/page-header';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { WandSparkles } from 'lucide-react';
import { gameClasses, items } from '@/lib/data';
import { generateClassSpecificTierList } from '@/ai/flows/generate-class-specific-tier-list';
import type { Tier, GameClass } from '@/lib/types';
import { TierListDisplay } from './_components/tier-list-display';
import { TierListSkeleton } from './_components/tier-list-skeleton';
import { sleep } from '@/lib/utils';

export default function TierListsPage() {
  const [selectedClass, setSelectedClass] = useState<GameClass | null>(null);
  const [tierList, setTierList] = useState<Record<string, string[]> | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!selectedClass) {
      setError('Please select a class to generate a tier list.');
      return;
    }
    setError('');
    setLoading(true);
    setTierList(null);

    await sleep(1000); // Simulate network latency

    try {
      const itemDescriptions = items.map(
        (item) => `${item.name}: ${item.description}`
      );
      const itemUserRatings = items.reduce((acc, item) => {
        acc[item.name] = item.rating;
        return acc;
      }, {} as Record<string, number>);

      const result = await generateClassSpecificTierList({
        className: selectedClass.name,
        itemDescriptions,
        itemUserRatings,
      });

      setTierList(result.tierList);
    } catch (e) {
      setError('Failed to generate tier list. Please try again.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-8">
      <PageHeader
        title="AI-Generated Tier Lists"
        description="Select a class to generate a tier list powered by AI. The AI considers item stats, class kits, and community ratings to create an optimized ranking."
      />
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg bg-card">
        <Select
          onValueChange={(classId) => {
            const newClass = gameClasses.find((c) => c.id === classId) || null;
            setSelectedClass(newClass);
          }}
        >
          <SelectTrigger className="w-full sm:w-[280px]">
            <SelectValue placeholder="Select a Class" />
          </SelectTrigger>
          <SelectContent>
            {gameClasses.map((c) => (
              <SelectItem key={c.id} value={c.id}>
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleGenerate} disabled={loading || !selectedClass}>
          <WandSparkles className="mr-2 h-4 w-4" />
          {loading ? 'Generating...' : 'Generate Tier List'}
        </Button>
      </div>

      {error && (
        <p className="mt-4 text-center text-destructive text-sm">{error}</p>
      )}

      <div className="mt-8">
        {loading && <TierListSkeleton />}
        {tierList && <TierListDisplay tierList={tierList} items={items} />}
        {!loading && !tierList && (
           <div className="text-center py-20 text-muted-foreground border-2 border-dashed rounded-lg">
             <p className="text-lg">Your generated tier list will appear here.</p>
           </div>
        )}
      </div>
    </div>
  );
}
