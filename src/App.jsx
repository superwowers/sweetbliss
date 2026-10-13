import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf6f7] dark:bg-[#120a10] text-[#301a22] dark:text-[#f7f2f5] transition-colors duration-300 flex flex-col selection:bg-mulberry/30 selection:text-[#301a22] dark:selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
