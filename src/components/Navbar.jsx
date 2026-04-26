import React, { useState, useEffect } from 'react';
import { Menu, X, Laptop } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll effect logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    // Agar id '#' hai toh top par scroll karega, varna specific section par
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false); // Mobile menu band karne ke liye
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Ads', href: '#ads' },          // Naya Link
    { name: 'Long Form', href: '#long-form' },
    { name: 'Contact', href: '#contact' } // Naya Link
    
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 px-8 py-4 ${
        isScrolled 
          ? 'bg-[#FFFFF0]/80 backdrop-blur-md shadow-lg border-b border-[#DAA520]/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section - Top par jane ke liye */}
        <div 
          onClick={() => scrollToSection('#')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="bg-[#4B0082] p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Laptop size={24} className="text-[#DAA520]" />
          </div>
          <span className="text-2xl font-['Playfair_Display'] font-black text-[#4B0082] tracking-tighter">
            SAM<span className="text-[#DAA520]">.</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-['Plus_Jakarta_Sans']">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-[#4B0082] font-bold text-sm uppercase tracking-widest hover:text-[#DAA520] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAA520] transition-all group-hover:w-full"></span>
            </button>
          ))}
        
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-[#4B0082]">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FFFFF0] border-b border-[#DAA520]/20 p-6 flex flex-col gap-4 md:hidden shadow-xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-[#4B0082] font-bold text-lg text-left hover:text-[#DAA520] transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('#contact')}
            className="bg-[#4B0082] text-white px-6 py-3 rounded-full font-bold text-center mt-2 shadow-lg"
          >
            HIRE ME
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;