import { Contact } from './components/Contact';
import { Cv } from './components/Cv';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Nav } from './components/Nav';
import { Publications } from './components/Publications';
import { Skills } from './components/Skills';

function App() {
  return (
    <div id="top" className="min-h-screen bg-alice text-jet dark:bg-jet dark:text-alice">
      <Nav />
      <main>
        <Hero />
        <Highlights />
        <Experience />
        <Publications />
        <Skills />
        <Cv />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
