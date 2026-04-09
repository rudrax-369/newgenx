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
    <section ref={containerRef} className="relative w-full min-h-screen py-32 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      <TechGrid />
      <div className="absolute left-0 bottom-10 w-[400px] h-[400px] pointer-events-none opacity-30 mix-blend-screen">
        <AbstractNodes />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <h2 className="about-item text-4xl md:text-7xl font-black mb-12 text-center text-glow-solar tracking-tighter">
          About Me.
        </h2>
        <div className="about-item glass-card p-10 md:p-14 mb-10 text-center glow-border">
          <p className="text-2xl md:text-4xl font-light text-white/90 leading-tight">
            I build systems that <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-glow-solar to-glow-cyan drop-shadow-[0_0_10px_rgba(255,69,0,0.3)]">automate, scale, and generate revenue,</span> whilst providing recruitment for <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-glow-gold to-glow-cyan">Global Tech & Non-Tech talent.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "⚡ Build AI-powered systems to automate workflows",
            "💻 Source elite developers and engineers for specialized Tech roles",
            "📊 Create data-driven dashboards and tracking systems",
            "🏢 Place top-tier candidates across high-impact Non-Tech profiles",
            "🚀 Develop scalable web & mobile applications",
            "🎓 Paid mentorship programs to train candidates for targeted roles"
          ].map((item, idx) => (
            <div key={idx} className="about-item glass-card px-6 py-5 flex items-center pop-hover glow-border">
              <p className="text-white/80 text-lg md:text-xl font-light">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
