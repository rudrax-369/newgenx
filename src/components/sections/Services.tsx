import { useEffect, useRef } from 'react';
import { Code2, Bot, LineChart, TrendingUp, UserCheck, Users } from 'lucide-react';
import gsap from 'gsap';

const services = [
  { 
    title: 'Engineering & Development', 
    icon: Code2, 
    color: 'group-hover:text-glow-cyan group-hover:shadow-[0_0_20px_#00f0ff]',
    desc: 'Scalable Full Stack Development, robust APIs, database design, and high-performance Web & Mobile applications.'
  },
  { 
    title: 'AI & Automation Systems', 
    icon: Bot, 
    color: 'group-hover:text-glow-purple group-hover:shadow-[0_0_20px_#b026ff]',
    desc: 'Integrating AI workflows (LLMs, GPT) and automation pipelines using n8n & Make.com to eliminate manual work.'
  },
  { 
    title: 'Data & Analytics', 
    icon: LineChart, 
    color: 'group-hover:text-glow-cyan group-hover:shadow-[0_0_20px_#00f0ff]',
    desc: 'Actionable business intelligence, Tableau dashboards, funnel analytics, and data-driven decision making.'
  },
  { 
    title: 'Growth Engineering', 
    icon: TrendingUp, 
    color: 'group-hover:text-glow-purple group-hover:shadow-[0_0_20px_#b026ff]',
    desc: 'Lead generation systems, automated outreach pipelines, conversion optimization, and end-to-end growth scaling.'
  },
  { 
    title: 'Tech Talent Sourcing', 
    icon: UserCheck, 
    color: 'group-hover:text-glow-cyan group-hover:shadow-[0_0_20px_#00f0ff]',
    desc: 'Connecting you with pre-vetted, high-quality engineers, developers, and tech specialists perfectly matched to your stack.'
  },
  { 
    title: 'Non-Tech Placements', 
    icon: Users, 
    color: 'group-hover:text-glow-purple group-hover:shadow-[0_0_20px_#b026ff]',
    desc: 'Scaling your enterprise with skilled professionals across management, marketing, sales, and core operational roles.'
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { opacity: 0, scale: 0.85, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'back.out(1.2)',
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
    <section ref={containerRef} className="relative w-full min-h-screen py-24 px-6 md:px-24 flex flex-col justify-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center tracking-tighter text-glow">
        Skills & Expertise
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div 
              key={idx}
              className="service-card group glass-card p-6 md:p-10 flex flex-col items-start gap-6 pop-hover glow-border"
            >
              <div className={`p-4 rounded-xl glass transition-all duration-500 group-hover:scale-110 ${service.color}`}>
                <Icon size={32} className="opacity-80 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="text-2xl font-semibold tracking-wide group-hover:text-glow-cyan transition-colors duration-300">{service.title}</h3>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
