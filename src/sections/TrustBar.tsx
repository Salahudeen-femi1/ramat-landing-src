import { Check } from 'lucide-react';
import { brand, trust } from '../content';

/* Small slices of the real app UI, one per promise. */
function Fresh() {
  return (
    <div className="w-full max-w-[220px] rounded-[18px] bg-white p-3.5 shadow-soft">
      <div className="flex items-center gap-2 text-[11px] font-semibold text-[#8a5a06]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inset-0 animate-ping2 rounded-full bg-amber" />
          <span className="relative h-2 w-2 rounded-full bg-amber" />
        </span>
        Preparing your order
      </div>
      <div className="mt-3 flex gap-1.5">
        <span className="h-1.5 flex-1 rounded-full bg-leaf" />
        <span className="h-1.5 flex-1 rounded-full bg-leaf" />
        <span className="h-1.5 flex-1 rounded-full bg-amber" />
        <span className="h-1.5 flex-1 rounded-full bg-line" />
      </div>
      <div className="mt-2.5 flex justify-between font-mono text-[10px] text-muted">
        <span>Confirmed 15:15</span>
        <span>Now</span>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="w-full max-w-[220px] rounded-[18px] bg-amber/15 p-4">
      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8a5a06]">In the kitchen</div>
      <div className="mt-1 font-display text-[30px] font-bold leading-none tracking-[-0.04em]">Ready in 20 mins</div>
    </div>
  );
}

function Pay() {
  return (
    <div className="flex w-full max-w-[220px] items-center gap-3 rounded-[18px] border-2 border-leaf bg-white p-3.5 shadow-soft">
      <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-mint text-[15px] font-bold text-leaf">M</span>
      <div className="min-w-0 flex-1 leading-tight">
        <div className="text-[13px] font-semibold">Moniepoint</div>
        <div className="text-[11px] text-muted">Pay securely in the app</div>
      </div>
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-leaf text-paper">
        <Check size={12} strokeWidth={3} aria-hidden />
      </span>
    </div>
  );
}

function Code() {
  return (
    <div className="w-full max-w-[220px] rounded-[18px] bg-white p-4 text-center shadow-soft">
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Pickup code</div>
      <div className="mt-0.5 font-mono text-[28px] font-medium tracking-[0.05em]">{brand.sampleCode}</div>
    </div>
  );
}

const fragments = { fresh: Fresh, time: Time, pay: Pay, code: Code };

export function TrustBar() {
  return (
    <section aria-labelledby="inside-app" className="relative overflow-hidden bg-forest py-20 text-paper lg:py-24">
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-leaf/30" />
      <div className="wrap relative">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-[560px]">
            <p className="eyebrow !text-kraft">Inside the app</p>
            <h2 id="inside-app" className="h-display mt-4 text-[clamp(32px,4.4vw,52px)] leading-[1] !text-paper">
              Everything you need to know, <span className="text-kraft">before you arrive.</span>
            </h2>
          </div>
          <p className="max-w-[360px] text-[15px] leading-[1.7] text-paper/65">
            Four things the app does so you never stand around guessing.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => {
            const Fragment = fragments[t.kind];
            return (
              <li
                key={t.title}
                className="group flex min-w-0 flex-col rounded-[26px] bg-paper p-3 text-ink transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="flex h-[150px] items-center justify-center rounded-[20px] bg-mint px-4">
                  <Fragment />
                </div>
                <div className="px-3 pb-4 pt-5">
                  <h3 className="font-display text-[21px] font-bold tracking-[-0.03em]">{t.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-muted">{t.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
