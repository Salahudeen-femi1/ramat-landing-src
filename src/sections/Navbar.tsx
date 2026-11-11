import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav } from '../content';
import { Logo } from '../components/ui/Logo';
import { Button } from '../components/ui/Button';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-paper/90 backdrop-blur-md' : 'border-b border-transparent bg-paper'
      }`}
      style={{ top: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="wrap flex h-[72px] items-center justify-between">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="focus-ring rounded-full px-4 py-2 text-[14px] font-medium text-muted transition-colors hover:bg-mint hover:text-leaf"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button href="#download" className="!h-11 !px-5 !text-[14px] max-md:hidden">
            Get the app
          </Button>
          <button
            type="button"
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-nav" className="border-t border-line bg-paper md:hidden">
          <div className="wrap flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-2xl px-4 py-3 text-[16px] font-medium hover:bg-mint"
              >
                {n.label}
              </a>
            ))}
            <Button href="#download" className="mt-2" onClick={() => setOpen(false)}>
              Get the app
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
