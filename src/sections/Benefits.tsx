import { Flame, Timer, Wallet } from 'lucide-react';
import { benefits } from '../content';
import { SectionHead } from '../components/ui/SectionHead';

const icons = { flame: Flame, wallet: Wallet, timer: Timer };

export function Benefits() {
  return (
    <section id="why" className="relative overflow-hidden bg-forest py-24 text-paper lg:py-32">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-leaf/40" />
      <div className="wrap relative">
        <SectionHead tone="light" eyebrow="Why pickup" title={<>Better than waiting for a rider.</>}>
          Collecting your own order sounds like extra work. It ends up faster, cheaper and hotter.
        </SectionHead>
        <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] bg-paper/15 md:grid-cols-3">
          {benefits.map((b) => {
            const Icon = icons[b.icon];
            return (
              <article key={b.title} className="group bg-forest p-8 transition-colors hover:bg-[#1d3a20] sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-paper/10 text-kraft transition-transform duration-300 group-hover:-rotate-6">
                  <Icon size={22} strokeWidth={2} aria-hidden />
                </span>
                <h3 className="mt-8 font-display text-[26px] font-bold leading-[1.1] tracking-[-0.03em]">{b.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-paper/65">{b.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
