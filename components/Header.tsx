import React, { useState, useEffect } from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center space-x-3 group">
        <img src="/images/Veenus_nova_logo.webp" alt="Veenus Nova Logo" className="h-8" />
        <span className="text-xl font-bold font-display text-heading-text tracking-wider hidden sm:block">VEENUS NOVA</span>
    </div>
);

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal-bg/80 backdrop-blur-lg border-b border-saffron-yellow/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" aria-label="Veenus Nova Homepage">
            <Logo />
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-text font-medium hover:text-saffron-yellow transition-all duration-300 relative group transform hover:-translate-y-0.5 hover:drop-shadow-[0_0_4px_rgba(244,180,0,0.5)]">
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saffron-yellow transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        <a href="/contact" className="hidden md:inline-block clip-parallelogram bg-saffron-yellow text-charcoal-bg font-bold py-2 px-8 rounded-sm hover:bg-opacity-90 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-saffron-yellow/20">
            Project Inquiry
        </a>
        <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu" className="text-heading-text">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-charcoal-bg border-b border-saffron-yellow/20 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col items-center space-y-4 py-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={toggleMenu} className="text-slate-text font-medium hover:text-saffron-yellow transition-colors duration-300 text-lg">
                  {link.name}
                </a>
              ))}
              <a href="/contact" onClick={toggleMenu} className="clip-parallelogram bg-saffron-yellow text-charcoal-bg font-bold py-3 px-10 rounded-sm hover:bg-opacity-90 transition-all transform hover:scale-105 text-lg mt-4">
                Project Inquiry
              </a>
          </div>
      </div>
    </header>
  );
};

export default Header;