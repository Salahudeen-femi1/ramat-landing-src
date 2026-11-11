import { ShoppingBag } from 'lucide-react';

export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const light = tone === 'light';
  return (
    <a href="#top" className="focus-ring flex items-center gap-2.5 rounded-full" aria-label="Ramat Pickup home">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-[12px] ${
          light ? 'bg-paper text-leaf' : 'bg-leaf text-paper'
        }`}
      >
        <ShoppingBag size={18} strokeWidth={2.2} aria-hidden />
      </span>
      <span className={`font-display text-[19px] font-bold tracking-[-0.03em] ${light ? 'text-paper' : 'text-ink'}`}>
        Ramat Pickup
      </span>
    </a>
  );
}
