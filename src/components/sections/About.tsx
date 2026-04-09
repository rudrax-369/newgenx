import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TechGrid, AbstractNodes } from '../ui/VectorHUD';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.about-item');

      gsap.fromTo(cards,
        { opacity: 0, scale: 0.8, y: 80 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen py-20 lg:py-32 px-6 flex flex-col items-center justify-center overflow-hidden">
      <TechGrid />
      <div className="absolute left-0 bottom-10 w-[400px] h-[400px] pointer-events-none opacity-30 mix-blend-screen">
        <AbstractNodes />
      </div>

      <div className="max-w-6xl w-full relative z-10 glass-card p-8 md:p-16 lg:p-20 border border-white/10 group">
        {/* Ambient Glow inside card */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-glow-solar/5 blur-[100px] rounded-full group-hover:bg-glow-solar/10 transition-colors duration-1000" />

        <h2 className="about-item text-4xl md:text-7xl font-black mb-12 text-center text-glow-solar tracking-tighter relative z-10">
          About Me.
        </h2>

        <div className="about-item mb-16 text-center relative z-10">
          <p className="text-2xl md:text-5xl text-high-contrast leading-[1.1] tracking-tight">
            I build systems that <span className="font-black" style={{color: '#ff4500', textShadow: '0 0 20px rgba(255,69,0,0.6), 0 0 40px rgba(255,204,0,0.3)'}}>automate, scale, and generate revenue,</span> whilst providing recruitment for <span className="font-black" style={{color: '#00f0ff', textShadow: '0 0 20px rgba(0,240,255,0.6), 0 0 40px rgba(0,240,255,0.3)'}}>Global Tech & Non-Tech talent.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          {[
            "⚡ Build AI-powered systems to automate workflows",
            "💻 Source elite developers and engineers for specialized Tech roles",
            "📊 Create data-driven dashboards and tracking systems",
            "🏢 Place top-tier candidates across high-impact Non-Tech profiles",
            "🚀 Develop scalable web & mobile applications",
            "🎓 Paid mentorship programs to train candidates for targeted roles"
          ].map((item, idx) => (
            <div key={idx} className="about-item bg-white/[0.03] border border-white/5 px-6 py-6 flex items-center pop-hover glow-border rounded-[1.5rem] transition-all duration-300">
              <p className="text-white text-lg md:text-xl font-dark">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
