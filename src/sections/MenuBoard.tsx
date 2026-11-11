import { useMemo, useState } from 'react';
import { Check, ChevronLeft, GlassWater, Plus } from 'lucide-react';
import { menu, naira } from '../content';
import { SectionHead } from '../components/ui/SectionHead';
import { PhoneFrame } from '../components/ui/PhoneFrame';

type Meal = (typeof menu.meals)[number];

/** The app's meal screen, driven by the selection on the left. */
function MealScreen({ meal, picked, total }: { meal: Meal; picked: string[]; total: number }) {
  return (
    <div className="relative flex h-full flex-col">
      <div className="relative h-[200px] shrink-0 bg-mint">
        {meal.image ? (
          <img src={meal.image} alt="" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-leaf">
            <GlassWater size={64} strokeWidth={1.4} aria-hidden />
          </div>
        )}
        <span className="absolute left-3 top-9 flex h-8 w-8 items-center justify-center rounded-full bg-paper/95 shadow-soft">
          <ChevronLeft size={15} aria-hidden />
        </span>
      </div>
      <div className="relative -mt-5 flex-1 rounded-t-[24px] bg-paper px-4 pt-4">
        <div className="flex items-start justify-between gap-2">
          <div className="text-[16px] font-bold leading-tight tracking-tight">{meal.name}</div>
          <div className="text-[14px] font-bold text-leaf">{naira(meal.price)}</div>
        </div>
        <p className="mt-1 text-[10px] leading-snug text-muted">{meal.note}</p>
        <div className="mt-3 text-[11px] font-semibold">Extras</div>
        <ul className="mt-1.5 flex flex-col gap-1.5">
          {menu.extras.map((e) => {
            const on = picked.includes(e.name);
            return (
              <li
                key={e.name}
                className={`flex items-center justify-between rounded-[12px] border px-2.5 py-1.5 text-[10.5px] transition-colors ${
                  on ? 'border-leaf bg-mint' : 'border-line bg-white'
                }`}
              >
                <span className="flex items-center gap-2 font-medium">
                  <span className={`flex h-4 w-4 items-center justify-center rounded-full ${on ? 'bg-leaf text-paper' : 'border border-line'}`}>
                    {on && <Check size={10} strokeWidth={3} aria-hidden />}
                  </span>
                  {e.name}
                </span>
                <span className="font-mono text-muted">+{naira(e.price)}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="absolute inset-x-3 bottom-3 flex h-11 items-center justify-between rounded-full bg-leaf px-5 text-[11.5px] font-semibold text-paper shadow-lg">
        <span>Add to cart</span>
        <span className="font-mono">{naira(total)}</span>
      </div>
    </div>
  );
}

export function MenuBoard() {
  const [sel, setSel] = useState(0);
  const [picked, setPicked] = useState<string[]>(['Fried Chicken']);
  const meal = menu.meals[sel];
  const total = useMemo(
    () => meal.price + menu.extras.filter((e) => picked.includes(e.name)).reduce((a, e) => a + e.price, 0),
    [meal, picked],
  );
  const toggle = (n: string) => setPicked((p) => (p.includes(n) ? p.filter((x) => x !== n) : [...p, n]));

  return (
    <section id="menu" className="overflow-hidden bg-sand/60 py-24 lg:py-32">
      <div className="wrap grid items-center gap-16 lg:grid-cols-[1.1fr_auto] lg:gap-24">
        <div className="min-w-0">
          <SectionHead eyebrow="The menu" title={<>Pick a plate. <span className="text-leaf">Make it yours.</span></>}>
            A short menu the kitchen does well, with extras for every plate. Choose below and watch the app screen update.
          </SectionHead>

          <div role="radiogroup" aria-label="Choose a meal" className="mt-10 flex flex-col gap-3">
            {menu.meals.map((m, i) => {
              const on = i === sel;
              return (
                <button
                  key={m.name}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setSel(i)}
                  className={`focus-ring group flex items-center gap-4 rounded-[22px] border p-3 pr-5 text-left transition-all ${
                    on ? 'border-leaf bg-white shadow-soft' : 'border-transparent hover:bg-white/70'
                  }`}
                >
                  <span className="flex h-[64px] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-[16px] bg-mint text-leaf">
                    {m.image ? <img src={m.image} alt="" className="h-full w-full object-cover" /> : <GlassWater size={26} aria-hidden />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[19px] font-bold tracking-[-0.03em]">{m.name}</span>
                    <span className="block truncate text-[13px] text-muted">{m.note}</span>
                  </span>
                  <span className={`font-mono text-[15px] font-medium ${on ? 'text-leaf' : 'text-ink'}`}>{naira(m.price)}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Add extras</div>
            <div className="mt-3 flex flex-wrap gap-2.5" role="group" aria-label="Extras">
              {menu.extras.map((e) => {
                const on = picked.includes(e.name);
                return (
                  <button
                    key={e.name}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(e.name)}
                    className={`focus-ring flex h-11 items-center gap-2 rounded-full border px-4 text-[14px] font-medium transition-all ${
                      on ? 'border-leaf bg-leaf text-paper' : 'border-line bg-white hover:border-leaf/50'
                    }`}
                  >
                    {on ? <Check size={15} strokeWidth={3} aria-hidden /> : <Plus size={15} aria-hidden />}
                    {e.name}
                    <span className={`font-mono text-[12px] ${on ? 'text-paper/75' : 'text-muted'}`}>+{naira(e.price)}</span>
                  </button>
                );
              })}
            </div>
            <p className="mt-5 flex items-baseline gap-3 text-[14px] text-muted" aria-live="polite">
              Your plate
              <span className="font-display text-[34px] font-bold leading-none tracking-[-0.04em] text-leaf">{naira(total)}</span>
            </p>
          </div>
        </div>

        <div className="relative mx-auto">
          <div aria-hidden className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint" />
          <div className="relative scale-[0.94] sm:scale-100">
            <PhoneFrame label={`Ramat Pickup meal screen for ${meal.name}, total ${naira(total)}`}>
              <MealScreen meal={meal} picked={picked} total={total} />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
