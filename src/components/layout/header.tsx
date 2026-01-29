'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/items', label: 'Items' },
    { href: '/gems', label: 'Gems' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-end">
        <nav className="flex -mb-[1px] items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-t-md px-6 py-2 text-lg font-medium',
                pathname?.startsWith(item.href)
                  ? 'border-x border-t border-border bg-[#1e1e1e] text-foreground'
                  : 'border border-border bg-secondary text-foreground/60 hover:bg-secondary/90'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
