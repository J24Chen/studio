'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const navItems = [
    { href: '/items', label: 'Items', imageUrl: 'https://static.wikitide.net/rnswiki/4/42/Spr_item_lucky_0.png' },
    { href: '/gems', label: 'Gems', imageUrl: 'https://static.wikitide.net/rnswiki/9/96/Spr_upgrade_green_0.png' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-end">
        <nav className="flex -mb-[1px] items-center gap-2">
          {navItems.map((item) => {
            const params = new URLSearchParams(searchParams.toString());
            const href = `${item.href}?${params.toString()}`;
            return (
              <Link
                key={item.href}
                href={href}
                className={cn(
                  'flex items-center gap-3 rounded-t-md px-4 py-2 text-lg font-medium border-x border-t',
                  pathname?.startsWith(item.href)
                    ? 'border-border bg-[#1e1e1e] text-foreground'
                    : 'border-transparent text-foreground/60 hover:bg-secondary/90'
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.imageUrl} alt={`${item.label} icon`} className="h-6 w-6 object-contain" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
