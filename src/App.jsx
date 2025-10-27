import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 selection:bg-fuchsia-200 selection:text-fuchsia-900">
      <Navbar />
      <main>
        <Hero3D />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
