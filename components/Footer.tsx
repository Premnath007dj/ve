import React from 'react';
// 1. Import NavLink for correct internal site navigation
import { NavLink } from 'react-router-dom';

const Logo: React.FC = () => (
    <div className="flex items-center space-x-3">
        <img src="images/Veenus_nova_logo.webp" alt="Veenus Nova Logo" className="h-8" />
    </div>
);

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    // Added target="_blank" to open social links in a new tab
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-text hover:text-saffron-yellow transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group">
        <div className="group-hover:animate-jiggle">{children}</div>
    </a>
);

const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
];

const Footer: React.FC = () => {
 return (
    <footer className="bg-charcoal-bg text-slate-text">
      {/* This decorative element was removed as it was causing layout issues */}
      {/* You can add a simpler border-t border-saffron-yellow if desired */}
      <div className="container mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            {/* 2. Changed <a> to NavLink */}
            <NavLink to="/" className="flex items-center mb-4">
              <Logo />
              <span className="ml-3 text-xl font-bold font-display text-heading-text">VEENUS NOVA</span>
            </NavLink>
            <p className="text-sm text-slate-text/80">Engineering the future of motion with precision and partnership.</p>
          </div>
          <div className="lg:col-start-3">
            <h3 className="font-semibold text-heading-text uppercase tracking-wider mb-4 text-sm font-display">Quick Links</h3>
            <ul className="space-y-2 text-slate-text">
              {footerLinks.map(link => (
                  <li key={link.name}>
                      {/* 3. Changed <a> to NavLink */}
                      <NavLink to={link.href} className="hover:text-saffron-yellow transition-all duration-300 inline-block transform hover:-translate-y-0.5">
                          {link.name}
                      </NavLink>
                  </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-heading-text uppercase tracking-wider mb-4 text-sm font-display">Connect</h3>
            <div className="flex space-x-4">
              {/* Facebook Icon (example) */}
              <SocialIcon href="https://www.facebook.com/">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </SocialIcon>
              {/* 4. Updated LinkedIn URL */}
              <SocialIcon href="https://www.linkedin.com/in/veenus-nova-innovation-center-b25233379">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-paper-white/10 text-center text-sm text-slate-text/80">
          <p>&copy; {new Date().getFullYear()} Veenus Nova. All rights reserved.</p>
        </div>
      </div>
    </footer>
 );
};

export default Footer;