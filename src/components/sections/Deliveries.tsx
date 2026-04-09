import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ExternalLink, Globe2 } from 'lucide-react';

const deliveries = [
  {
    title: 'IBA - International Boxing Association',
    desc: 'Official global platform for the International Boxing Association, serving millions of fans and athletes worldwide.',
    link: 'https://www.iba.sport/',
    type: 'Global Confederation'
  },
  {
    title: 'Boxing Federation of India',
    desc: 'The national governing body for Olympic Boxing in India, managing elite athletes and national tournaments.',
    link: 'https://boxingfederation.in/',
    type: 'National Federation'
  },
  {
    title: 'We Founder Circle',
    desc: 'A global community of successful founders & strategic angels leveraging tech to invest in early-stage startups.',
    link: 'https://wefoundercircle.com/',
    type: 'Investment Network'
  },
  {
    title: 'Elive Networks - Dynamic Platform',
    desc: 'Specialized web application featuring social integration and dynamic content management for the Elive network community.',
    link: 'https://gkwsca.web.app/',
    type: 'Digital Network'
  }
];

export default function Deliveries() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.delivery-card',
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto items-center flex flex-col">
        <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-glow tracking-tighter">
            Proven Impact: Successfully Delivered
          </h2>
          <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl">
            A selection of global platforms and high-performance systems engineering for industry-leading organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {deliveries.map((item, idx) => (
            <a 
              key={idx}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="delivery-card group glass-card p-10 flex flex-col gap-6 pop-hover glow-border relative overflow-hidden"
            >
              <div className="flex justify-between items-start relative z-10">
                <div className="p-3 rounded-lg bg-glow-cyan/10 text-glow-cyan border border-glow-cyan/20">
                  <Globe2 size={24} />
                </div>
                <div className="text-white/40 group-hover:text-glow-cyan transition-colors duration-300">
                  <ExternalLink size={20} />
                </div>
              </div>

              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-glow-cyan/60 font-bold mb-2 block">
                  {item.type}
                </span>
                <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              {/* Decorative background glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-glow-cyan/5 blur-[80px] rounded-full group-hover:bg-glow-cyan/10 transition-colors duration-500" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
