import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Swords,
  BookOpen,
  ListOrdered,
  Sparkles,
  Search,
  Star,
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="container mx-auto px-4 py-16">
        <section className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary-foreground mb-4">
            Rabbit & Steel Companion
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your ultimate guide to mastering Rabbit & Steel. Explore items,
            create tier lists, and get AI-powered insights to enhance your
            gameplay.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/items">
                <Swords className="mr-2 h-5 w-5" /> Explore Items
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/tier-lists">
                <ListOrdered className="mr-2 h-5 w-5" /> View AI Tier Lists
              </Link>
            </Button>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="h-8 w-8 text-primary" />}
              title="Item Database"
              description="A comprehensive database of all Rabbit & Steel items, with detailed descriptions and stats."
            />
            <FeatureCard
              icon={<Sparkles className="h-8 w-8 text-primary" />}
              title="Class-Specific Tier Lists"
              description="AI-generated tier lists customized for each playable class, based on user ratings and analysis."
            />
            <FeatureCard
              icon={<Search className="h-8 w-8 text-primary" />}
              title="Item Search"
              description="Quickly find any item by name or keyword with our powerful and fast search functionality."
            />
            <FeatureCard
              icon={<Star className="h-8 w-8 text-primary" />}
              title="User Rating System"
              description="Rate items based on their effectiveness and contribute to community-driven insights."
            />
            <FeatureCard
              icon={<ListOrdered className="h-8 w-8 text-primary" />}
              title="Your Tier Lists"
              description="Create, view, and share your own tier lists. Get them sorted and analyzed by our AI."
            />
            <FeatureCard
              icon={<Sparkles className="h-8 w-8 text-primary" />}
              title="Synergy Analysis"
              description="Discover how item stats synergize with class kits for optimal build crafting."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-card/50 hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="p-4 bg-muted rounded-full mb-4">{icon}</div>
        <h3 className="text-xl font-headline font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
