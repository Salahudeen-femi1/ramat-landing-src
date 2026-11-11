import type { ReactNode } from 'react';

/** Fixed 264 x 540 device. Scale it from the parent with CSS transform if needed. */
export function PhoneFrame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative h-[560px] w-[274px] shrink-0 rounded-[42px] bg-[#101a10] p-[5px] shadow-lift ring-1 ring-black/40"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[37px] bg-paper font-sans text-ink">
        <div className="absolute left-1/2 top-2 z-20 h-[18px] w-[72px] -translate-x-1/2 rounded-full bg-[#101a10]" />
        {children}
      </div>
    </div>
  );
}
