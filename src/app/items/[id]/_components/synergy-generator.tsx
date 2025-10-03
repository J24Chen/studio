'use client';

import { useState } from 'react';
import { generateItemSynergyDescription } from '@/ai/flows/generate-item-synergy-description';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { GameClass, Item } from '@/lib/types';
import { WandSparkles } from 'lucide-react';
import { sleep } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface SynergyGeneratorProps {
  item: Item;
  classes: GameClass[];
}

export function SynergyGenerator({ item, classes }: SynergyGeneratorProps) {
  const [selectedClass, setSelectedClass] = useState<GameClass | null>(null);
  const [synergy, setSynergy] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!selectedClass) {
      setError('Please select a class first.');
      return;
    }
    setError('');
    setLoading(true);
    setSynergy('');
    
    await sleep(1000); // Simulate network latency

    try {
      const result = await generateItemSynergyDescription({
        itemName: item.name,
        itemStats: item.stats,
        className: selectedClass.name,
        classKitDescription: selectedClass.kit,
      });
      setSynergy(result.synergyDescription);
    } catch (e) {
      setError('Failed to generate synergy analysis. Please try again.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground">
        Select a class to see how {`"${item.name}"`} synergizes with their kit.
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <Select
          onValueChange={(classId) => {
            const newClass = classes.find((c) => c.id === classId) || null;
            setSelectedClass(newClass);
          }}
        >
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Select a class" />
          </SelectTrigger>
          <SelectContent>
            {classes.map((c) => (
              <SelectItem key={c.id} value={c.id}>
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleGenerate} disabled={loading || !selectedClass}>
          <WandSparkles className="mr-2 h-4 w-4" />
          {loading ? 'Generating...' : 'Generate Analysis'}
        </Button>
      </div>

      {error && <p className="text-destructive text-sm">{error}</p>}
      
      {loading && (
        <Card className="bg-muted/50">
          <CardContent className="p-4 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </CardContent>
        </Card>
      )}

      {synergy && (
        <Card className="bg-muted/50">
          <CardContent className="p-4">
            <p className="whitespace-pre-wrap">{synergy}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
