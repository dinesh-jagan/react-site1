import React, { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ServiceSection from './components/ServiceSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ProjectSection from './components/ProjectSection';

function App() {
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);

  const sections = ['about', 'service', 'project', 'contact'];
  const [activeSection, setActiveSection] = useState('about');

  const handleNavClick = (section) => {
    const sectionRefs = {
      about: aboutRef,
      service: serviceRef,
      project: projectRef,
      contact: contactRef,
    };

    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Optional: Update activeSection on scroll (for navbar highlight)
  useEffect(() => {
    const sectionMap = {
      about: aboutRef,
      service: serviceRef,
      project: projectRef,
      contact: contactRef,
    };

    const handleScroll = () => {
      const offset = window.innerHeight / 2;
      let current = 'about';

      for (const key of sections) {
        const ref = sectionMap[key];
        if (ref.current) {
          const top = ref.current.getBoundingClientRect().top;
          if (top - offset < 0) {
            current = key;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar
        sections={sections}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />

      {/* About Section — Visible First */}
      <div ref={aboutRef} style={{ minHeight: '100vh', padding: '2rem' }}>
        <AboutSection />
      </div>

      {/* Service */}
      <div ref={serviceRef}>
        <ServiceSection />
      </div>

      {/* Placeholder Project Section */}
      <div ref={projectRef} style={{ height: '100vh' }}>
        <ProjectSection/>
      </div>

      {/* Custom Contact */}
      <div ref={contactRef} style={{}}>
      <ContactSection
        sections={['about', 'service', 'project', 'contact']}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
      </div>
    </>
  );
}
export default App;
