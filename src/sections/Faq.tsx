import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqs } from '../content';
import { SectionHead } from '../components/ui/SectionHead';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <SectionHead eyebrow="Questions" title={<>Before you <span className="text-leaf">order.</span></>}>
          Can't find your answer? Ask the kitchen when you collect your first order.
        </SectionHead>
        <div className="min-w-0 border-t border-ink/15">
          {faqs.map((f, i) => {
            const on = open === i;
            return (
              <div key={f.q} className="border-b border-ink/15">
                <h3>
                  <button
                    type="button"
                    aria-expanded={on}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(on ? null : i)}
                    className="focus-ring group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-[clamp(19px,2.2vw,23px)] font-semibold tracking-[-0.025em]">{f.q}</span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        on ? 'rotate-45 border-leaf bg-leaf text-paper' : 'border-line bg-white group-hover:border-leaf/50'
                      }`}
                    >
                      <Plus size={18} aria-hidden />
                    </span>
                  </button>
                </h3>
                <div id={`faq-${i}`} role="region" aria-labelledby={undefined} className={`grid transition-all duration-300 ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="max-w-[560px] pb-6 text-[15px] leading-[1.75] text-muted">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
