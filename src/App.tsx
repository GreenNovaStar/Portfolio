import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      {/* Ambient background layers (fixed, behind content) */}
      <div className="aura" aria-hidden="true" />
      <div className="grid-floor" aria-hidden="true" />

      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
