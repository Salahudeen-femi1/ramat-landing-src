import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { TrustBar } from './sections/TrustBar';
import { About } from './sections/About';
import { MenuBoard } from './sections/MenuBoard';
import { Features } from './sections/Features';
import { HowItWorks } from './sections/HowItWorks';
import { Benefits } from './sections/Benefits';
import { Testimonials } from './sections/Testimonials';
import { Faq } from './sections/Faq';
import { FinalCta } from './sections/FinalCta';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-leaf focus:px-5 focus:py-3 focus:text-paper"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <About />
        <MenuBoard />
        <Features />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
