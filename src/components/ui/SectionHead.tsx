import type { ReactNode } from 'react';

interface Props {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  tone?: 'dark' | 'light';
  className?: string;
}

export function SectionHead({ eyebrow, title, children, tone = 'dark', className = '' }: Props) {
  const light = tone === 'light';
  return (
    <div className={`max-w-[640px] ${className}`}>
      <p className={`eyebrow ${light ? '!text-kraft' : ''}`}>{eyebrow}</p>
      <h2 className={`h-display mt-4 text-[clamp(34px,5vw,56px)] leading-[1] ${light ? '!text-paper' : ''}`}>{title}</h2>
      {children && (
        <p className={`mt-5 text-[16px] leading-[1.7] ${light ? 'text-paper/70' : 'text-muted'}`}>{children}</p>
      )}
    </div>
  );
}
