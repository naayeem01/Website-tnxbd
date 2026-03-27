import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

import logoSrc from '../../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Products', path: '/products' },
    { name: 'Clients', path: '/clients' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logoSrc} 
            alt="TNXBD Logo" 
            className="w-auto h-12 object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold hover:text-primary transition-colors relative group ${
                location.pathname === link.path ? 'text-primary' : 'text-text-secondary'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                location.pathname === link.path ? 'w-full' : ''
              }`}></span>
            </Link>
          ))}
          <Link to="/contact" className="btn-primary py-2.5 px-6 text-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 rounded-lg hover:bg-bg-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className="text-text-primary" /> : <Menu size={28} className="text-text-primary" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass-dark border-t border-white/10 animate-fade-in p-6 shadow-2xl">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white text-lg font-medium hover:text-primary transition-colors flex justify-between items-center"
                onClick={() => setIsOpen(false)}
              >
                {link.name} <ChevronRight size={18} opacity={0.5} />
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="btn-primary justify-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Start Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
