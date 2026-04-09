import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Recruitment() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.recruit-wrapper',
        { opacity: 0, scale: 0.8, y: 80 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen py-32 px-6 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full recruit-wrapper">
        <div className="glass-card p-10 md:p-16 lg:p-24 relative overflow-hidden flex flex-col items-center border border-glow-cyan/20">
          {/* Ambient Lighting Backgrounds inside the Card */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glow-cyan/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-glow-purple/10 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="text-center mb-16 relative z-10 w-full">
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-glow tracking-tighter">
              We're Hiring.
            </h2>
            <p className="text-2xl md:text-3xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed">
              Recruitment & Profile Training perfectly tailored to your ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10 w-full">
            
            {/* Non Paid Option */}
            <div className="group bg-background/40 border border-white/10 rounded-[2rem] p-10 md:p-14 flex flex-col items-start gap-8 transition-all duration-500 hover:-translate-y-3 hover:border-glow-cyan/40 hover:bg-background/60 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] relative overflow-hidden backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-glow-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 p-6 rounded-2xl glass transition-all duration-500 group-hover:text-glow-cyan bg-glow-cyan/5 shadow-inner">
                <Briefcase size={56} className="opacity-90 group-hover:opacity-100" />
              </div>
              <div className="relative z-10 w-full">
                <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">Standard Application</h3>
                <div className="inline-block px-6 py-3 border border-white/20 bg-white/5 rounded-xl text-3xl font-black text-white tracking-widest mb-8">
                  FREE
                </div>
                <p className="text-xl text-white/70 leading-relaxed font-light">
                  Apply for any of our available roles. If your existing skills and portfolio match our engineering standards, you proceed directly to our rigorous placement pipeline.
                </p>
              </div>
            </div>

            {/* Paid Option */}
            <div className="group bg-background/40 border border-white/10 rounded-[2rem] p-10 md:p-14 flex flex-col items-start gap-8 transition-all duration-500 hover:-translate-y-3 hover:border-glow-purple/50 hover:bg-background/60 hover:shadow-[0_0_50px_rgba(176,38,255,0.2)] relative overflow-hidden backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-glow-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 p-6 rounded-2xl glass transition-all duration-500 group-hover:text-glow-purple bg-glow-purple/5 shadow-inner">
                <GraduationCap size={56} className="opacity-90 group-hover:opacity-100" />
              </div>
              <div className="relative z-10 w-full">
                <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-glow-purple">Priority Training & Placement</h3>
                <div className="inline-flex items-baseline px-6 py-3 border border-glow-purple/40 bg-glow-purple/10 rounded-xl text-3xl font-black text-glow-purple tracking-widest mb-6 shadow-[0_0_30px_rgba(176,38,255,0.2)]">
                  ₹15,000 <span className="text-base text-white/60 font-light ml-2 uppercase tracking-wide">/ Total</span>
                </div>
                <p className="text-xl text-white/70 leading-relaxed font-light mb-6">
                  Aiming for a specific profile but lack the exact technical stack? We will personally train you on the required skills specifically tailored to guarantee you clear the applied position. 
                </p>

                <div className="w-full p-6 bg-white/5 border border-white/10 rounded-xl flex flex-col gap-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-glow-purple shadow-[0_0_15px_#b026ff]"></div>
                  <h4 className="font-bold tracking-wide text-white/90 uppercase text-sm mb-1">Flexible Payment Plans :</h4>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-glow-cyan shadow-[0_0_10px_#00f0ff] shrink-0"></div>
                    <p className="text-white/80 font-light leading-relaxed">
                      <strong className="text-white tracking-wide font-semibold">1. Standard:</strong> ₹15,000 paid upfront once training begins.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-glow-purple shadow-[0_0_10px_#b026ff] shrink-0"></div>
                    <p className="text-white/80 font-light leading-relaxed">
                      <strong className="text-white tracking-wide font-semibold">2. Split Approach:</strong> 
                      ₹7,500 upfront when you receive your offer letter, and the remaining 50% paid strictly only after your very first salary gets credited!
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
