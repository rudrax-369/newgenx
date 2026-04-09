import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hiring', href: '#hiring' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-white">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl md:text-2xl font-black uppercase tracking-[0.3em] transition-all duration-300 group-hover:tracking-[0.4em]">
            NewGen<span className="text-glow-cyan">X</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-medium text-white/50 hover:text-glow-cyan transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle (Simple) */}
        <div className="md:hidden flex items-center">
          <div className="w-6 h-1 bg-white opacity-50 rounded-full relative after:absolute after:top-2 after:left-0 after:w-4 after:h-full after:bg-white after:rounded-full before:absolute before:-top-2 before:left-0 before:w-8 before:h-full before:bg-white before:rounded-full"></div>
        </div>
      </div>
    </nav>
  );
}
