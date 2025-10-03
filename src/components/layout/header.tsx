'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Rabbit } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/items', label: 'Items' },
  { href: '/tier-lists', label: 'AI Tier Lists' },
  { href: '/my-tier-lists', label: 'My Tier Lists' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Rabbit className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline">
            Rabbit & Steel Companion
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === link.href
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
