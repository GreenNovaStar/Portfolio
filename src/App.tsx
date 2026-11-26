import { Sidebar } from './components/Sidebar';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { Sky } from './components/Sky';

export default function App() {
  return (
    <>
      <Sky />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <About />
          <Experience />
          <Projects />
          <Education />
          <Footer />
        </main>
      </div>
      <CommandPalette />
    </>
  );
}
