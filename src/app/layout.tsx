import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Rabbit & Steel Companion',
  description: 'Companion app for the game Rabbit & Steel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body text-foreground antialiased'
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Suspense fallback={<div className="h-14 w-full border-b border-border/40" />}>
            <Header />
          </Suspense>
          <main className="flex-1">
            <Suspense fallback={<div className="flex h-[calc(100vh-3.5rem)] bg-[#1e1e1e]" />}>
              {children}
            </Suspense>
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
