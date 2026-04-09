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

      <div className="hero-text z-10 flex flex-col items-start mt-20 md:mt-32 pointer-events-auto max-w-6xl w-full glass-card p-10 md:p-20 lg:p-24 relative text-left mx-4 md:mx-0 border border-white/10 group">
        {/* Ambient Glow inside card */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-glow-cyan/5 blur-[100px] rounded-full group-hover:bg-glow-cyan/10 transition-colors duration-1000 pointer-events-none" />
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 transition-all duration-700 hover:tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative z-10">
          <span className="text-glow block mb-2">Build. Develop.</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-glow-cyan via-white to-glow-solar drop-shadow-[0_0_40px_rgba(255,69,0,0.4)]">
            Scale Fast.
          </span>
        </h1>
        <p className="text-xl md:text-3xl text-high-contrast max-w-3xl leading-snug mb-10 relative z-10">
          Founder of NewGenX. Engineering <span className="text-glow-solar font-black">Growth Systems</span> & <span className="text-glow-cyan font-black">Tech Products</span> for the global market.
        </p>
        <div className="flex gap-6 relative z-10">
          <div className="h-px w-24 bg-gradient-to-r from-glow-cyan to-transparent self-center opacity-50" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold">Available for Global Projects</span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-glow-cyan to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-white rotate-90">Scroll</span>
      </div>
    </section>
  );
}
