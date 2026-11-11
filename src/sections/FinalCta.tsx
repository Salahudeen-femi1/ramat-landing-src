import type { ReactNode } from 'react';
import { brand } from '../content';
import { Ticket } from '../components/ui/Ticket';

function AppleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function PlayLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
      <path d="M3.6 2.1 13.2 12 3.6 21.9c-.35-.2-.6-.6-.6-1.1V3.2c0-.5.25-.9.6-1.1Z" fill="#00A0FF" />
      <path d="M3.6 2.1 16.6 9.4 13.2 12Z" fill="#32D07A" />
      <path d="M3.6 21.9 16.6 14.6 13.2 12Z" fill="#FF3A44" />
      <path d="M16.6 9.4 20.4 11.5c.7.4.7 1.6 0 2L16.6 14.6 13.2 12Z" fill="#FFD400" />
    </svg>
  );
}

function StoreButton({ logo, small, big, label }: { logo: ReactNode; small: string; big: string; label: string }) {
  return (
    <a
      href="#download"
      aria-label={label}
      className="focus-ring group flex h-[58px] min-w-[170px] items-center gap-3 rounded-[14px] border border-paper/30 bg-black px-4 text-white transition-all hover:-translate-y-0.5 hover:border-paper/60"
    >
      {logo}
      <span className="flex flex-col leading-none">
        <span className="text-[10.5px] font-medium tracking-wide text-white/80">{small}</span>
        <span className="mt-1 font-sans text-[20px] font-semibold tracking-[-0.01em]">{big}</span>
      </span>
    </a>
  );
}

export function FinalCta() {
  return (
    <section id="download" className="pb-24 lg:pb-32">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[36px] bg-leaf px-7 py-14 text-paper sm:px-14 sm:py-20">
          <div aria-hidden className="absolute -right-20 -top-28 h-[420px] w-[420px] rounded-full bg-[#3a7332]/70" />
          <div aria-hidden className="absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-[#356b2d]/60" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div className="min-w-0">
              <p className="eyebrow !text-kraft">Get the app</p>
              <h2 className="h-display mt-4 text-[clamp(38px,6vw,76px)] leading-[0.96] !text-paper">
                Your meal is ready when you are.
              </h2>
              <p className="mt-6 max-w-[460px] text-[17px] leading-[1.7] text-paper/75">
                Download {brand.name}, order from {brand.kitchen} and skip the queue. {brand.tagline}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <StoreButton logo={<AppleLogo />} small="Download on the" big="App Store" label="Download Ramat Pickup on the App Store" />
                <StoreButton logo={<PlayLogo />} small="GET IT ON" big="Google Play" label="Get Ramat Pickup on Google Play" />
              </div>
            </div>
            <div className="relative mx-auto h-[300px] w-[260px] lg:mx-0 lg:justify-self-end">
              <Ticket className="absolute left-4 top-6 rotate-[-4deg] scale-[1.12]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
