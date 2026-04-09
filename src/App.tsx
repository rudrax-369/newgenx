import { useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scene from './three/Scene';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Deliveries from './components/sections/Deliveries';
import Recruitment from './components/sections/Recruitment';
import Contact from './components/sections/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setLoading(false)} />
      {!loading && (
        <>
          <Cursor />
          <Navbar />
        </>
      )}
      
      <div className="relative w-full min-h-screen bg-background text-white selection:bg-glow-purple">
        {/* Fixed 3D Canvas Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Scene />
        </div>

        {/* Scrollable Content */}
        <ReactLenis root>
          <main className="relative z-10 w-full overflow-hidden">
            <Hero />
            <div id="about"><About /></div>
            <div id="services"><Services /></div>
            <div id="projects"><Process /></div>
            <div id="deliveries"><Deliveries /></div>
            <div id="hiring"><Recruitment /></div>
            <div id="contact"><Contact /></div>
          </main>
        </ReactLenis>
      </div>
    </>
  );
}

export default App;
