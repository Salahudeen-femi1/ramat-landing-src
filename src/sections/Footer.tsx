import { brand, footerLinks } from '../content';
import { Logo } from '../components/ui/Logo';

export function Footer() {
  return (
    <footer className="border-t border-line bg-sand/60">
      <div className="wrap flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-[320px]">
          <Logo />
          <p className="mt-4 text-[14px] leading-[1.7] text-muted">{brand.tagline}</p>
          <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
            {brand.kitchen} · {brand.area}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {footerLinks.map((l) => (
            <a key={l.label} href={l.href} className="focus-ring rounded text-[14px] font-medium text-muted transition-colors hover:text-leaf">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="wrap py-6 text-[13px] text-muted">© 2026 {brand.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
