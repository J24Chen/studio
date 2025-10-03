import { Rabbit } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Rabbit className="h-5 w-5 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Rabbit & Steel Companion.
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
