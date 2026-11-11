import { useState } from 'react';
import { steps } from '../content';
import { SectionHead } from '../components/ui/SectionHead';
import { PhoneFrame } from '../components/ui/PhoneFrame';
import { ScreenCode, ScreenMenu, ScreenPay, ScreenTrack } from '../components/screens/Screens';

const screens = [ScreenMenu, ScreenPay, ScreenTrack, ScreenCode];
const labels = [
  'Menu screen with Jollof Rice and Fried Rice',
  'Payment screen with Moniepoint selected',
  'Order tracking screen, preparing your order',
  'Order confirmed screen with pickup code',
];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const Screen = screens[active];

  return (
    <section id="how" className="overflow-hidden border-y border-line bg-sand/60 py-24 lg:py-32">
      <div className="wrap grid items-center gap-16 lg:grid-cols-[1fr_auto] lg:gap-24">
        <div className="min-w-0">
          <SectionHead eyebrow="How it works" title={<>Four taps from hungry to <span className="text-leaf">collected.</span></>} />
          <ol className="mt-12 flex flex-col gap-3" role="tablist" aria-label="Ordering steps">
            {steps.map((s, i) => {
              const on = i === active;
              return (
                <li key={s.title} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    id={`step-${i}`}
                    aria-selected={on}
                    aria-controls="step-screen"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`focus-ring group flex w-full items-start gap-5 rounded-[22px] border p-5 text-left transition-all sm:p-6 ${
                      on ? 'border-leaf/30 bg-white shadow-soft' : 'border-transparent hover:bg-white/60'
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-mono text-[14px] font-medium transition-colors ${
                        on ? 'bg-leaf text-paper' : 'bg-white text-muted ring-1 ring-line'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-[21px] font-bold tracking-[-0.025em]">{s.title}</span>
                      <span
                        className={`grid transition-all duration-300 ${on ? 'mt-1.5 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                      >
                        <span className="overflow-hidden text-[15px] leading-[1.65] text-muted">{s.text}</span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="relative mx-auto" id="step-screen" role="tabpanel" aria-labelledby={`step-${active}`}>
          <div aria-hidden className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint" />
          <div className="relative scale-[0.92] sm:scale-100">
            <PhoneFrame label={labels[active]}>
              <div key={active} className="h-full animate-rise"><Screen /></div>
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
