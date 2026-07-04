import { useState } from 'react';
//import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Sidebar />
      <div className="ml-24 w-full"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
