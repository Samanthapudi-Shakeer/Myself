import { useEffect, useState } from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Acheivements from './components/Acheivements';
import ResearchPublications from './components/ResearchPublications';

import './App.css'; 

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = '#111827';

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileRegex = /android|iphone|ipad|mobile/i;
    setIsMobile(mobileRegex.test(userAgent));

    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (isMobile) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white px-6 text-center">
  <div className="p-8 rounded-2xl shadow-2xl bg-gray-950 border border-gray-700 max-w-md w-full animate-pulse">
    <h1 className="text-3xl font-bold mb-4 text-red-400">⚠️ Mobile View Not Supported</h1>
    <p className="text-lg text-gray-300 mb-2">This website is optimized for larger screens.</p>
    <p className="text-md text-gray-400">Please switch to a <span className="text-blue-400 font-semibold">Desktop Site</span> 🖥️</p>
  </div>
</div>

    );
  }

  if (showGreeting) {
    return (
      <div className="greeting-screen h-screen w-full flex items-center justify-center overflow-hidden px-6 text-white">
        <div className="greeting-orb greeting-orb-one" />
        <div className="greeting-orb greeting-orb-two" />
        <div className="greeting-grid" />

        <div className="greeting-card relative z-10 max-w-4xl text-center">
          <p className="mb-5 text-sm uppercase tracking-[0.45em] text-cyan-200/80">
            Welcome to my portfolio
          </p>
          <h1 className="greeting-title mb-6 text-6xl font-black md:text-8xl">
            Greetings
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-200 md:text-2xl">
            Exploring AI, Machine Learning, NLP, XAI, GenAI, and full-stack products that turn research into real-world impact.
          </p>
          <div className="mt-8 flex justify-center gap-3 text-sm font-semibold text-cyan-100">
            <span className="greeting-chip">AI/ML</span>
            <span className="greeting-chip">RAG</span>
            <span className="greeting-chip">Data Science</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Background />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Acheivements />
      <ResearchPublications />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
