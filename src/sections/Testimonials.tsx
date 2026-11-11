import { testimonials } from '../content';
import { SectionHead } from '../components/ui/SectionHead';

/** Renders only when real quotes exist in content.ts. */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section id="reviews" className="py-24 lg:py-32">
      <div className="wrap">
        <SectionHead eyebrow="Customers" title="What people say after pickup." />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-[24px] border border-line bg-white p-8 shadow-soft">
              <blockquote className="text-[17px] leading-[1.65]">“{t.quote}”</blockquote>
              <figcaption className="mt-6 text-[14px]">
                <span className="font-semibold">{t.name}</span>
                {t.detail && <span className="text-muted"> · {t.detail}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
