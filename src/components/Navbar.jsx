import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.08)] border-b border-outline-variant/30'
          : 'bg-surface/90 backdrop-blur-sm border-b border-outline-variant/20'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group decoration-transparent select-none"
        >
          <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface transition-colors group-hover:text-primary">
            Samavia Siddiqui
          </span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary-container group-hover:scale-125 transition-transform duration-200"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-body-md text-on-surface/85 hover:text-primary font-medium tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center bg-primary-container text-on-primary-fixed font-label-lg text-label-lg rounded-xl px-5 py-2.5 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-bold"
          >
            Let's Talk
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
            className="md:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-on-surface hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-surface-container-low border-b border-outline-variant/30 px-margin py-6 flex flex-col gap-4 shadow-[0_8px_16px_rgba(0,0,0,0.06)] animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface py-2 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="inline-flex items-center justify-center bg-primary-container text-on-primary-fixed font-label-lg text-label-lg rounded-xl px-5 py-2.5 text-center mt-2 shadow-sm active:scale-[0.98] transition-all font-bold"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}
