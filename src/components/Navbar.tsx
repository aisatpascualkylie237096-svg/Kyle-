import React, { useState, useEffect } from 'react';
import { portfolio } from '../data/portfolio';
import { Menu, X, Terminal, FileCode2 } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'RESUME', href: '#resume', id: 'resume' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#E21B2D]/40 shadow-lg shadow-[#050505]/80'
          : 'bg-[#050505]/60 backdrop-blur-sm border-b border-[#123A73]/40'
      }`}
    >
      {/* Top micro comic stripe */}
      <div className="h-0.5 w-full bg-gradient-to-r from-[#E21B2D] via-[#123A73] to-[#E21B2D]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Superhero Brand Logo */}
          <a
            id="nav-logo"
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#E21B2D] rounded px-1"
          >
            {/* Custom geometric superhero emblem */}
            <div className="relative w-8 h-8 flex items-center justify-center bg-[#07111F] border-2 border-[#E21B2D] transform rotate-45 group-hover:bg-[#E21B2D] group-hover:rotate-0 transition-all duration-300 shadow-[0_0_12px_rgba(226,27,45,0.5)]">
              <span className="font-comic font-black text-sm text-white transform -rotate-45 group-hover:rotate-0 transition-transform">
                K
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-comic font-black text-2xl tracking-wider text-white group-hover:text-[#E21B2D] transition-colors leading-none">
                {portfolio.name.toUpperCase()}
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#D9D9D9] uppercase">
                DEV_HQ // CS 2027
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 font-comic text-lg tracking-wider transition-all duration-200 uppercase ${
                    isActive
                      ? 'text-[#E21B2D] font-bold'
                      : 'text-[#D9D9D9] hover:text-white hover:bg-[#123A73]/20 rounded'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#E21B2D] shadow-[0_0_8px_#E21B2D]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Status indicator & Download CV quick link */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#07111F] border border-[#123A73] text-[11px] font-mono text-[#D9D9D9]">
              <span className="w-2 h-2 rounded-full bg-[#E21B2D] animate-ping" />
              <span className="text-white font-medium">SYS: ONLINE</span>
            </div>

            <a
              id="nav-quick-cv-btn"
              href={portfolio.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded font-comic text-sm tracking-wider uppercase bg-[#E21B2D] hover:bg-[#8B0A16] text-white border border-[#E21B2D] shadow-[0_0_10px_rgba(226,27,45,0.4)] transition-all hover:scale-105"
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-nav-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-[#07111F] border border-[#123A73] text-white hover:border-[#E21B2D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E21B2D]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E21B2D]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-dropdown"
          className="md:hidden bg-[#050505] border-b-2 border-[#E21B2D] px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="px-2 py-1 text-xs font-mono text-[#D9D9D9] flex items-center justify-between border-b border-[#123A73]/50 mb-3 pb-2">
            <span>COMMAND_TERMINAL</span>
            <span className="text-[#E21B2D]">ONLINE</span>
          </div>

          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 font-comic text-xl tracking-wider uppercase rounded transition-colors ${
                  isActive
                    ? 'bg-[#E21B2D] text-white font-bold'
                    : 'text-[#D9D9D9] hover:bg-[#07111F] hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <div className="pt-3 border-t border-[#123A73]/50">
            <a
              id="mobile-nav-cv-btn"
              href={portfolio.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded bg-[#07111F] border border-[#E21B2D] text-white font-comic text-lg uppercase tracking-wider hover:bg-[#E21B2D] transition-colors"
            >
              <FileCode2 className="w-4 h-4 text-[#E21B2D]" />
              <span>DOWNLOAD RESUME (CV)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
