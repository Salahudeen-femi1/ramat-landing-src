import { ArrowRight, ChefHat, MapPin, Smartphone, Store } from 'lucide-react';
import trays from '../assets/trays.webp';
import handoff from '../assets/handoff.webp';
import { brand } from '../content';
import { SectionHead } from '../components/ui/SectionHead';

const points = [
  { icon: ChefHat, title: 'Made to order', text: 'Party-style jollof, fried rice and pepper stew, prepared once your order is in.' },
  { icon: Smartphone, title: 'Run from your phone', text: 'Menu, payment, tracking and your pickup code all live in one app.' },
  { icon: Store, title: 'One pickup point', text: `Collect from ${brand.kitchen} in ${brand.area}. Show your code and go.` },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="wrap grid items-center gap-16 lg:grid-cols-[1.02fr_1fr] lg:gap-20">
        {/* Photo collage */}
        <div className="relative order-2 mx-auto h-[500px] w-full max-w-[560px] min-w-0 sm:h-[600px] lg:order-1">
          <div aria-hidden className="absolute left-4 top-6 h-[400px] w-[52%] rounded-[32px] bg-kraft sm:h-[480px]" />
          <div className="absolute left-0 top-0 h-[400px] w-[52%] overflow-hidden rounded-[32px] bg-sand shadow-lift sm:h-[480px]">
            <img
              src={handoff}
              alt="A kitchen team member handing a paper bag across the counter"
              width={822}
              height={1042}
              loading="lazy"
              className="h-full w-full object-cover object-[40%_50%]"
            />
          </div>

          <div className="absolute bottom-0 right-0 w-[64%] overflow-hidden rounded-[28px] border-[6px] border-paper bg-sand shadow-lift">
            <img
              src={trays}
              alt="Trays of party jollof, fried rice and pepper stew packed for pickup"
              width={900}
              height={535}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="absolute right-0 top-4 w-[44%] min-w-[168px] rounded-[22px] bg-white p-4 shadow-lift sm:right-2">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              <MapPin size={13} className="text-leaf" aria-hidden /> Pickup point
            </div>
            <div className="mt-2 font-display text-[20px] font-bold leading-tight tracking-[-0.03em]">{brand.kitchen}</div>
            <div className="text-[13px] text-muted">{brand.area}</div>
            <div className="mt-3 flex items-center gap-2 rounded-full bg-mint px-3 py-1.5 text-[12px] font-semibold text-leaf">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping2 rounded-full bg-leaf" />
                <span className="relative h-2 w-2 rounded-full bg-leaf" />
              </span>
              Counter pickup
            </div>
          </div>
        </div>

        <div className="order-1 min-w-0 lg:order-2">
          <SectionHead
            eyebrow="About the kitchen"
            title={
              <>
                A kitchen counter, <span className="text-leaf">minus the queue.</span>
              </>
            }
          >
            {brand.name} puts {brand.kitchen} in your pocket. You pick what you want, the kitchen cooks it, and you collect it when it is
            done. The same food people line up for, without the lining up.
          </SectionHead>

          <ul className="mt-10 border-t border-ink/12">
            {points.map((p) => (
              <li key={p.title} className="group flex gap-5 border-b border-ink/12 py-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint text-leaf transition-colors group-hover:bg-leaf group-hover:text-paper">
                  <p.icon size={22} strokeWidth={2} aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[20px] font-bold tracking-[-0.03em]">{p.title}</h3>
                  <p className="mt-1.5 max-w-[420px] text-[14.5px] leading-[1.65] text-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="#menu"
            className="focus-ring group mt-8 inline-flex items-center gap-2 rounded-full text-[15px] font-semibold text-leaf"
          >
            See the menu
            <ArrowRight size={18} strokeWidth={2.4} className="transition-transform group-hover:translate-x-1" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
