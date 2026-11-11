import { Clock, ShieldCheck, ShoppingBag, Smartphone } from 'lucide-react';
import { brand } from '../content';
import { Button } from '../components/ui/Button';
import { PhoneFrame } from '../components/ui/PhoneFrame';
import { ScreenCart, ScreenMenu, ScreenTrack } from '../components/screens/Screens';

/** Slowly rotating text badge. Pure SVG, no assets. */
function SpinBadge() {
  return (
    <div className="relative h-[112px] w-[112px]">
      <svg viewBox="0 0 120 120" className="absolute inset-0 animate-[spin_22s_linear_infinite]" aria-hidden>
        <defs>
          <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text className="fill-forest font-mono text-[10.5px] font-medium uppercase" letterSpacing="2.6">
          <textPath href="#badge-circle" textLength="270" lengthAdjust="spacing">Fresh · Hot · Ready · Pickup ·</textPath>
        </text>
      </svg>
      <span className="absolute inset-[26px] flex items-center justify-center rounded-full bg-leaf text-paper shadow-soft">
        <ShoppingBag size={22} strokeWidth={2.2} aria-hidden />
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="dots-kraft pointer-events-none absolute right-0 top-0 h-[560px] w-[60%] opacity-70 [mask-image:radial-gradient(closest-side,#000,transparent)]"
      />
      <div className="wrap relative grid items-center gap-12 pb-20 pt-8 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pb-28 lg:pt-14">
        <div className="min-w-0">
          <p className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-line bg-white py-2 pl-3 pr-4 text-[13px] font-medium shadow-soft">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-ping2 rounded-full bg-leaf" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-leaf" />
            </span>
            <Smartphone size={14} className="text-leaf" aria-hidden />
            The {brand.name} app
          </p>

          <h1
            className="h-display animate-rise mt-7 text-[clamp(48px,7.6vw,96px)] leading-[0.92]"
            style={{ animationDelay: '.08s' }}
          >
            Order from your phone.{' '}
            <span className="relative inline-block whitespace-nowrap text-leaf">
              Collect it hot.
              <svg
                aria-hidden
                viewBox="0 0 300 14"
                preserveAspectRatio="none"
                className="absolute -bottom-1.5 left-0 h-[0.14em] w-full text-kraft"
              >
                <path d="M2 9 C 60 2, 120 13, 190 6 S 270 4, 298 8" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="animate-rise mt-8 max-w-[500px] text-[17px] leading-[1.7] text-muted" style={{ animationDelay: '.16s' }}>
            The app for ordering from {brand.kitchen} in {brand.area}. Browse the menu, customise your plate, pay securely, follow it live, then show your code and collect.
          </p>

          <div className="animate-rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: '.24s' }}>
            <Button href="#download" arrow>
              Get the app
            </Button>
            <Button href="#how" variant="ghost">
              See how it works
            </Button>
          </div>

          <ul
            className="animate-rise mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/10 pt-6 text-[14px] text-muted"
            style={{ animationDelay: '.32s' }}
          >
            <li className="flex items-center gap-2">
              <Clock size={16} className="text-leaf" aria-hidden /> Ready in about 20 minutes
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-leaf" aria-hidden /> Pay with Moniepoint
            </li>
          </ul>
        </div>

        {/* App showcase: three real screens in a fan */}
        <div className="relative flex h-[430px] w-full min-w-0 justify-center max-sm:overflow-x-clip sm:h-[690px]">
          <div
            aria-hidden
            className="absolute left-1/2 top-[8%] h-[84%] w-[92%] max-w-[520px] -translate-x-1/2 rounded-t-[999px] rounded-b-[40px] bg-mint"
          />
          <div className="relative h-[690px] w-[560px] shrink-0 origin-top scale-[0.62] sm:scale-100">
            <div className="absolute left-[-18px] top-[96px] z-0 -rotate-[8deg] scale-[0.9] opacity-95">
              <PhoneFrame label="Ramat Pickup cart screen with two meals and a checkout button">
                <ScreenCart />
              </PhoneFrame>
            </div>
            <div className="absolute right-[-18px] top-[96px] z-0 rotate-[8deg] scale-[0.9] opacity-95">
              <PhoneFrame label="Ramat Pickup order tracking screen showing the order is being prepared">
                <ScreenTrack />
              </PhoneFrame>
            </div>
            <div className="absolute left-1/2 top-[24px] z-10 -translate-x-1/2">
              <div className="animate-float">
                <PhoneFrame label="Ramat Pickup menu screen with Jollof Rice and Fried Rice">
                  <ScreenMenu />
                </PhoneFrame>
              </div>
            </div>

            <div className="absolute left-[-24px] top-[-4px] z-20">
              <SpinBadge />
            </div>
            <div className="absolute right-[-4px] top-[420px] z-20 flex items-center gap-2.5 rounded-full bg-paper py-2 pl-2 pr-4 text-[13px] font-semibold shadow-lift">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mint text-leaf"><ShieldCheck size={16} aria-hidden /></span>
              Pay with Moniepoint
            </div>
            <div className="absolute left-[-14px] top-[500px] z-20 flex items-center gap-2.5 rounded-full bg-paper py-2 pl-2 pr-4 text-[13px] font-semibold shadow-lift">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FBEBC8] text-[#C47F0A]"><Clock size={16} aria-hidden /></span>
              Ready in 20 mins
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
