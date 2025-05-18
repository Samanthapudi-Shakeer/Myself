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

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = '#111827'; // bg-gray-900

    // Basic mobile detection
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileRegex = /android|iphone|ipad|mobile/i;
    setIsMobile(mobileRegex.test(userAgent));

    // Show greeting for 3 seconds
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isMobile) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white text-xl">
        This website is not available on mobile devices.
      </div>
    );
  }

  if (showGreeting) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white text-5xl font-bold animate-pulse">
        Greetings
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

