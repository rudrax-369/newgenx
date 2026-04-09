import { useState, useMemo } from 'react';
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

// Lenis options tuned for a premium, buttery-smooth scroll feel
const LENIS_OPTIONS = {
  lerp: 0.1,           // Smoothing factor — 0.1 = silky, 0.15 = snappier
  smoothWheel: true,   // Enable smooth wheel scrolling
  duration: 1.2,       // Deceleration duration
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo ease-out
};

function App() {
  const [loading, setLoading] = useState(true);

  // Detect touch device once — no re-render needed
  const isTouch = useMemo(() =>
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0),
  []);

  return (
    <>
      <LoadingScreen onComplete={() => setLoading(false)} />
      {!loading && (
        <>
          {/* Custom cursor is meaningless on touch devices */}
          {!isTouch && <Cursor />}
          <Navbar />
        </>
      )}
      
      <div className="relative w-full min-h-screen bg-background text-white selection:bg-glow-purple">
        {/* Fixed 3D Canvas Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Scene />
        </div>

        {/* Scrollable Content */}
        <ReactLenis root options={LENIS_OPTIONS}>
          <main className="relative z-10 w-full overflow-x-hidden overflow-y-visible">
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
