import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'ghost' | 'light';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  arrow?: boolean;
  children: ReactNode;
}

const styles: Record<Variant, string> = {
  primary: 'bg-leaf text-paper shadow-[0_14px_26px_-10px_rgba(45,90,39,0.7)] hover:bg-forest',
  ghost: 'border border-ink/15 bg-transparent text-ink hover:border-ink/40 hover:bg-white',
  light: 'bg-paper text-forest hover:bg-white',
};

export function Button({ variant = 'primary', arrow, className = '', children, ...rest }: ButtonProps) {
  return (
    <a
      {...rest}
      className={`group focus-ring inline-flex h-14 items-center justify-center gap-3 rounded-full px-7 text-[15px] font-semibold transition-colors ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          size={18}
          strokeWidth={2.4}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </a>
  );
}
