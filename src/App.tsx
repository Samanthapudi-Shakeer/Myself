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

import MyPhoto from './img.png';
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
      <div
        className="h-screen w-full flex flex-col items-center justify-center text-amber bg-cover bg-center"
        style={{ backgroundImage: `url('https://cdn.mos.cms.futurecdn.net/HuGGeENt6kGyixe3hT9tnY-1200-80.jpg')` }} // Place space-bg.jpg in public folder
      >
        <img
          src={MyPhoto}
          alt="My Photo"
          className="w-40 h-40 rounded-full mb-6 rounded-sm shadow-lg"
        />
        <h1 className="text-5xl font-bold animate-pulse">Greetings</h1>
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
