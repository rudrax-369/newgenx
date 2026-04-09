import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative w-full min-h-screen py-32 px-6 md:px-24 flex items-center justify-center">
      <div className="w-full max-w-4xl flex flex-col items-center glass-card p-10 md:p-20 relative overflow-hidden group text-center pop-hover glow-border">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-glow-purple/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none transition-transform duration-1000 group-hover:translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-glow-cyan/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none transition-transform duration-1000 group-hover:-translate-x-1/4" />

        <div className="relative z-10 text-center mb-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-glow">
            Let’s Connect & Build Something Powerful
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-light">
            Whether you're starting from scratch or scaling fast — <br className="hidden md:block"/>I can help you build, optimize, and grow. Reach out directly!
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-8 w-full justify-center px-4 sm:px-0">
          <a href="https://wa.me/917303686363" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-4 py-4 bg-white text-background font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-lg hover:bg-glow-cyan hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300">
            WhatsApp <ArrowUpRight size={14} />
          </a>
          <a href="https://www.instagram.com/rudrax__singh/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-4 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-lg hover:border-glow-cyan hover:bg-glow-cyan/10 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300">
            Instagram <ArrowUpRight size={14} />
          </a>
          <a href="https://www.linkedin.com/in/rudrax-chhonkar" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-4 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-lg hover:border-glow-purple hover:bg-glow-purple/10 hover:shadow-[0_0_30px_rgba(176,38,255,0.2)] transition-all duration-300">
            LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-[10px] md:text-xs tracking-[0.2em] uppercase whitespace-nowrap text-center w-full px-6">
        © 2026 Rudrax Chhonkar. <br className="md:hidden"/> Built with Strategy + Code.
      </div>
    </section>
  );
}
