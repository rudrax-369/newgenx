import { ArrowUpRight, MessageSquare, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative w-full py-32 px-6 md:px-24 mb-20">
      <div className="max-w-4xl mx-auto items-start flex flex-col">
        <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter text-glow-solar leading-none">
          Let's Scale <br />
          <span className="text-glow underline decoration-glow-cyan/50 underline-offset-[12px]">Together</span>.
        </h2>
        
        <p className="text-xl md:text-3xl text-high-contrast max-w-2xl mb-16 leading-relaxed">
          Whether you're looking to build a <span className="text-glow-cyan font-black">new product</span>, optimize your <span className="text-glow-solar font-black">growth funnel</span>, or scale your <span className="text-glow-cyan font-black">engineering team</span>—I'm ready to help you hit the next peak.
        </p>

        <div className="flex flex-wrap gap-6 w-full">
          <a 
            href="https://wa.me/917521876543" 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 min-w-[280px] px-10 py-6 glass-card pop-hover flex items-center justify-between group border-glow-cyan/20 hover:border-glow-cyan/50 shadow-[0_0_30px_rgba(0,240,255,0.1)]"
          >
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-xl bg-glow-cyan/10 text-glow-cyan group-hover:scale-110 transition-transform">
                <MessageSquare size={28} />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1">Direct Chat</span>
                <span className="text-xl font-bold tracking-tight">WhatsApp</span>
              </div>
            </div>
            <ArrowUpRight className="text-white/20 group-hover:text-glow-cyan transition-colors" />
          </a>

          <a 
            href="https://www.linkedin.com/in/rudrax-singh-951978253" 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 min-w-[280px] px-10 py-6 glass-card pop-hover flex items-center justify-between group border-glow-solar/20 hover:border-glow-solar/50 shadow-[0_0_30px_rgba(255,69,0,0.1)]"
          >
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-xl bg-glow-solar/10 text-glow-solar group-hover:scale-110 transition-transform">
                <Linkedin size={28} />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1">Professional</span>
                <span className="text-xl font-bold tracking-tight">LinkedIn</span>
              </div>
            </div>
            <ArrowUpRight className="text-white/20 group-hover:text-glow-solar transition-colors" />
          </a>

          <a 
            href="https://www.instagram.com/rudrax__singh/" 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 min-w-[280px] px-10 py-6 glass-card pop-hover flex items-center justify-between group border-white/5 hover:border-white/20"
          >
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-xl bg-white/5 text-white/60 group-hover:scale-110 group-hover:text-white transition-all">
                <Instagram size={28} />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1">Visual Log</span>
                <span className="text-xl font-bold tracking-tight">Instagram</span>
              </div>
            </div>
            <ArrowUpRight className="text-white/20 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-[10px] md:text-xs tracking-[0.2em] uppercase whitespace-nowrap text-center w-full px-6">
        © 2026 Rudrax Chhonkar. <br className="md:hidden"/> Built with Strategy + Code.
      </div>
    </section>
  );
}
