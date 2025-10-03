import { items, gameClasses } from '@/lib/data';
import type { Item } from '@/lib/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, WandSparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SynergyGenerator } from './_components/synergy-generator';

interface ItemPageProps {
  params: {
    id: string;
  };
}

const categoryColors = {
  Common: 'bg-gray-500',
  Rare: 'bg-blue-500',
  Legendary: 'bg-yellow-500',
  Cursed: 'bg-red-500',
};

export default function ItemPage({ params }: ItemPageProps) {
  const item = items.find((i) => i.id === params.id);

  if (!item) {
    notFound();
  }

  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex flex-col items-center">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={600}
                height={600}
                className="rounded-lg object-cover w-full aspect-square"
                data-ai-hint={`${item.name.toLowerCase()}`}
              />
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Badge
            className={cn(
              'w-fit text-white',
              categoryColors[item.category]
            )}
          >
            {item.category}
          </Badge>
          <h1 className="font-headline text-4xl lg:text-5xl font-bold tracking-tighter">
            {item.name}
          </h1>
          <p className="text-xl text-muted-foreground">{item.description}</p>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">{item.stats}</p>
            </CardContent>
          </Card>

          <Card>
             <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                Community Rating
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{item.rating.toFixed(1)} / 5.0</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <WandSparkles className="w-5 h-5 mr-2 text-primary" />
                AI Synergy Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SynergyGenerator item={item} classes={gameClasses} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
