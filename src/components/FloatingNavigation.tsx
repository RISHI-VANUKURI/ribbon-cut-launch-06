import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface NavigationSection {
  id: string;
  label: string;
}

interface FloatingNavigationProps {
  sections: NavigationSection[];
}

const FloatingNavigation = ({ sections }: FloatingNavigationProps) => {
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: 'smooth'
      });
    }
  };

  // Only show navigation if there are sections and we're not on certain pages
  if (sections.length === 0) return null;

  return (
    <nav className="hidden lg:flex fixed top-1/2 -translate-y-1/2 left-4 z-[9999] flex-col space-y-3 bg-white/80 backdrop-blur-md rounded-xl px-2 py-3 shadow-xl hover:w-40 transition-all duration-300 overflow-hidden">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleNavClick(section.id)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition text-center whitespace-nowrap ${
            activeSection === section.id ? 'bg-gold text-white' : 'text-navy hover:bg-gold/20'
          }`}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
};

export default FloatingNavigation;