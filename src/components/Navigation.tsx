
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Activities', path: '/activities' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 mx-4 my-2 rounded-2xl animate-slideInUp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[95px]">
          {/* Logo - moved to complete left */}
          <div className="flex items-center animate-slideInLeft">
            <img 
              src="/lovable-uploads/a1c87734-c5ab-42a6-b0f6-d4236740a573.png" 
              alt="BMRS Group of Schools Logo" 
              className="h-20 w-20 mr-3 rounded-full object-cover border-3 border-navy shadow-lg hover-scale animate-bounceIn"
            />
            <Link to="/" className="flex flex-col animate-fadeInUp delay-200">
              <span className="text-xl md:text-3xl font-bold leading-tight text-yellow-400" 
                    style={{ 
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5), -1px -1px 2px rgba(255,255,255,0.8)', 
                      WebkitTextStroke: '1px #dc2626'
                    }}>
                BMRS
              </span>
              <span className="text-sm md:text-lg font-black leading-tight text-red-600" 
                    style={{ 
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5), -1px -1px 2px rgba(255,255,255,0.8)', 
                      WebkitTextStroke: '0.5px #fbbf24'
                    }}>
                Group of Schools
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block animate-slideInRight">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 animate-fadeIn hover-lift ${
                    isActive(item.path)
                      ? 'text-gold bg-navy/5'
                      : 'text-gray-700 hover:text-navy hover:bg-gray-50'
                  }`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-gold hover:bg-gold/90 text-white ml-4 hover-lift animate-scaleIn delay-600">
                Admissions
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden animate-fadeIn delay-300">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-navy hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy transition-all duration-200 hover-scale"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6 transition-transform duration-200`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6 transition-transform duration-200`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-slideInUp">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t rounded-b-xl">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 animate-fadeIn hover-lift ${
                  isActive(item.path)
                    ? 'text-gold bg-navy/5'
                    : 'text-gray-700 hover:text-navy hover:bg-gray-50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button className="bg-gold hover:bg-gold/90 text-white w-full hover-lift animate-scaleIn delay-400">
                Admissions
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
