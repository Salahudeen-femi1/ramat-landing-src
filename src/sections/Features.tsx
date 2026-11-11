import { useMemo, useState } from 'react';
import { Check, Plus } from 'lucide-react';
import { brand, menu, naira } from '../content';
import { SectionHead } from '../components/ui/SectionHead';

const BASE = 2000;

function Customiser() {
  const [picked, setPicked] = useState<string[]>(['Fried Chicken']);
  const total = useMemo(
    () => BASE + menu.extras.filter((e) => picked.includes(e.name)).reduce((a, e) => a + e.price, 0),
    [picked],
  );
  const toggle = (name: string) => setPicked((p) => (p.includes(name) ? p.filter((x) => x !== name) : [...p, name]));

  return (
    <div className="flex h-full flex-col rounded-[28px] border border-line bg-white p-7 shadow-soft sm:p-9">
      <p className="eyebrow">Make it yours</p>
      <h3 className="h-display mt-3 text-[clamp(26px,3vw,36px)] leading-[1.05]">Build the plate you actually want.</h3>
      <p className="mt-3 max-w-[460px] text-[15px] leading-[1.65] text-muted">
        Add extras to any meal and watch the total update. Try it below.
      </p>
      <div className="mt-7 flex flex-wrap gap-2.5" role="group" aria-label="Extras for Jollof Rice">
        {menu.extras.map((e) => {
          const on = picked.includes(e.name);
          return (
            <button
              key={e.name}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(e.name)}
              className={`focus-ring flex h-11 items-center gap-2 rounded-full border px-4 text-[14px] font-medium transition-all ${
                on ? 'border-leaf bg-leaf text-paper' : 'border-line bg-paper hover:border-leaf/50'
              }`}
            >
              {on ? <Check size={15} strokeWidth={3} aria-hidden /> : <Plus size={15} aria-hidden />}
              {e.name}
              <span className={`font-mono text-[12px] ${on ? 'text-paper/75' : 'text-muted'}`}>+{naira(e.price)}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-auto flex items-end justify-between border-t border-dashed border-ink/20 pt-6">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Jollof Rice, 1 plate</div>
          <div className="mt-1 text-[13px] text-muted">{picked.length ? picked.join(', ') : 'No extras'}</div>
        </div>
        <div aria-live="polite" className="font-display text-[40px] font-bold leading-none tracking-[-0.04em] text-leaf">{naira(total)}</div>
      </div>
    </div>
  );
}

function Tracker() {
  const rows = [
    ['Order received', '15:13', 'done'],
    ['Payment confirmed', '15:14', 'done'],
    ['Preparing your order', 'Now', 'now'],
    ['Ready for pickup', '', 'next'],
  ];
  return (
    <div className="flex h-full flex-col rounded-[28px] bg-mint p-7 sm:p-9">
      <p className="eyebrow">Live tracking</p>
      <h3 className="h-display mt-3 text-[clamp(24px,2.6vw,30px)] leading-[1.08]">See every step, in time.</h3>
      <ol className="mt-7 flex flex-col">
        {rows.map(([t, time, s], i) => (
          <li key={t} className="flex gap-3.5">
            <div className="flex flex-col items-center">
              <span className={`flex h-6 w-6 items-center justify-center rounded-full ${s === 'done' ? 'bg-leaf text-paper' : s === 'now' ? 'bg-amber text-white' : 'border-2 border-leaf/25 bg-paper'}`}>
                {s === 'done' && <Check size={13} strokeWidth={3} aria-hidden />}
                {s === 'now' && <span className="h-2 w-2 animate-pulse rounded-full bg-white" />}
              </span>
              {i < rows.length - 1 && <span className={`h-7 w-0.5 ${s === 'done' ? 'bg-leaf' : 'bg-leaf/20'}`} />}
            </div>
            <div className="flex flex-1 justify-between gap-3 pb-4 text-[14px]">
              <span className={s === 'now' ? 'font-semibold' : s === 'next' ? 'text-muted' : ''}>{t}</span>
              <span className="font-mono text-[12px] text-muted">{time}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function CodeCard() {
  return (
    <div className="relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-[28px] bg-kraft p-7 text-forest sm:p-9 lg:flex-row lg:items-center">
      <div aria-hidden className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-paper/30" />
      <div className="relative">
        <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em]">One code</p>
        <h3 className="h-display mt-3 text-[clamp(24px,2.6vw,30px)] leading-[1.08] !text-forest">Nothing to say at the counter.</h3>
      </div>
      <div className="relative rounded-2xl bg-paper px-8 py-5 text-center shadow-soft lg:w-[340px]">
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Pickup code</div>
        <div className="font-mono text-[34px] font-medium tracking-[0.05em] text-ink">{brand.sampleCode}</div>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="wrap">
        <SectionHead eyebrow="In the app" title={<>Everything between hungry and <span className="text-leaf">handed over.</span></>} />
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <Customiser />
          <div className="grid gap-5">
            <Tracker />
          </div>
          <div className="lg:col-span-2"><CodeBand /></div>
        </div>
      </div>
    </section>
  );
}

function CodeBand() {
  return <CodeCard />;
}
