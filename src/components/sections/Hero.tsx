import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { OrbitalRings } from '../ui/VectorHUD';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-text',
        { opacity: 0, y: 100, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)', delay: 2.7 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center justify-center pointer-events-none px-6"
    >
      <div className="absolute right-[-10%] md:right-10 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-40 mix-blend-screen hidden lg:block">
        <OrbitalRings />
      </div>

      <div className="hero-text z-10 flex flex-col items-start mt-20 md:mt-32 pointer-events-auto max-w-4xl glass-card p-6 md:p-16 relative text-left mx-4 md:mx-0">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 text-glow leading-tight">
          I Build Scalable <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-glow-cyan to-glow-purple">Tech + Growth + Recruitment Systems</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/70 font-light max-w-3xl">
          Full Stack Developer, Data Strategist, and Growth Engineer helping startups and businesses transform ideas into powerful digital products and revenue-generating systems.
        </p>
      </div>
    </section>
  );
}
