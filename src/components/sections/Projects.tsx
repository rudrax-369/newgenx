import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: 'Project Nexus', num: '01' },
  { title: 'Aura Protocol', num: '02' },
  { title: 'Cybernetic UI', num: '03' },
  { title: 'Gravity Engine', num: '04' },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.project-card');
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => '+=' + scrollWrapperRef.current?.offsetWidth,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-background/50 backdrop-blur-sm">
      <div className="absolute top-12 left-12 md:left-24 z-20">
        <h2 className="text-3xl font-bold tracking-widest uppercase text-white/50">Featured Work</h2>
      </div>
      
      <div ref={scrollWrapperRef} className="h-full flex flex-nowrap items-center pt-20 px-12 md:px-24">
        {projects.map((proj, i) => (
          <div key={i} className="project-card w-[80vw] md:w-[50vw] h-[60vh] shrink-0 mr-12 md:mr-24 relative group cursor-pointer perspective-[1000px]">
            <div className="w-full h-full glass-card border-none bg-gradient-to-br from-white/5 to-white/0 overflow-hidden relative transition-transform duration-700 transform-style-3d group-hover:rotate-y-12">
              {/* Abstract decorative background instead of an image to match the procedural theme */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-glow-cyan/50 via-background to-background scale-150 transition-transform duration-1000 group-hover:scale-100 mix-blend-screen" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-between z-10 translate-z-[50px]">
                <span className="text-6xl font-black text-transparent bg-clip-text bg-white/20">
                  {proj.num}
                </span>
                
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-glow-cyan transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <div className="h-[2px] w-0 bg-glow-cyan group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
