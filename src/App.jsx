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
    <div className="min-h-screen bg-[#F5E9E5] dark:bg-[#2F171F] text-[#3A1E26] dark:text-[#FDF7F5] transition-colors duration-300 flex flex-col selection:bg-mulberry selection:text-white">
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
