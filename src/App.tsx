import { useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import Scene from './three/Scene';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Recruitment from './components/sections/Recruitment';
import Contact from './components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setLoading(false)} />
      {!loading && <Cursor />}
      
      <div className="relative w-full min-h-screen bg-background text-white selection:bg-glow-purple">
        {/* Fixed 3D Canvas Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Scene />
        </div>

        {/* Global Sticky NewGenX Logo */}
        <div className="fixed top-8 left-8 md:top-12 md:left-12 z-[100] pointer-events-auto select-none mix-blend-exclusion">
          <span className="text-xl md:text-2xl font-black uppercase tracking-[0.3em] text-white">
            NewGen<span className="text-glow-cyan">X</span>
          </span>
        </div>

        {/* Scrollable Content */}
        <ReactLenis root>
          <main className="relative z-10 w-full overflow-hidden">
            <Hero />
            <About />
            <Services />
            <Process />
            <Recruitment />
            <Contact />
          </main>
        </ReactLenis>
      </div>
    </>
  );
}

export default App;
