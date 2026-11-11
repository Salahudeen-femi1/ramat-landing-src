import { brand } from '../../content';

/** Floating order ticket used in the hero and final call to action. */
export function Ticket({ className = '' }: { className?: string }) {
  return (
    <div className={`drop-shadow-[0_22px_30px_rgba(23,48,25,0.28)] ${className}`}>
      <div className="ticket w-[218px] bg-paper px-5 pb-5 pt-4 text-ink" style={{ ['--notch' as string]: '58%' }}>
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          <span>Order</span>
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping2 rounded-full bg-amber" />
              <span className="relative h-2 w-2 rounded-full bg-amber" />
            </span>
            Preparing
          </span>
        </div>
        <div className="mt-2 font-mono text-[30px] font-medium leading-none tracking-[0.02em] text-ink">
          {brand.sampleCode}
        </div>
        <div className="mt-5 border-t border-dashed border-ink/25 pt-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Ready in about</div>
          <div className="mt-1 font-display text-[26px] font-bold leading-none tracking-[-0.03em]">15 minutes</div>
          <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
            {brand.kitchen} · {brand.area}
          </div>
        </div>
      </div>
    </div>
  );
}
