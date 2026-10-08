import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Download, 
  Code2, 
  Briefcase, 
  FolderKanban, 
  GraduationCap, 
  Mail, 
  User
} from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: FolderKanban },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy calculation
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav shadow-lg shadow-black/5 dark:shadow-black/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Magnetic Pull */}
          <MagneticButton
            as="a"
            href="#home"
            strength={0.2}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg cursor-pointer"
            aria-label="Mehtab Alam - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-cyan-500 flex items-center justify-center text-white font-mono font-bold text-lg shadow-md shadow-brand-500/25 group-hover:scale-105 transition-transform duration-300">
              MA
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                Mehtab Alam
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-tight mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Senior Frontend Eng.
              </span>
            </div>
          </MagneticButton>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-800 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                    isActive
                      ? 'bg-white dark:bg-brand-600 text-brand-600 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button with Magnetic Pull */}
            <MagneticButton
              as="button"
              onClick={toggleTheme}
              type="button"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white/70 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 inline-flex items-center justify-center cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-brand-600 hover:-rotate-12 transition-transform duration-300" />
              )}
            </MagneticButton>

            {/* Direct Resume Download CTA with Magnetic Pull */}
            <MagneticButton
              as="a"
              href={portfolioData.personal.resumeUrl}
              download="Mehtab_Alam_Frontend_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-md shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </MagneticButton>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 p-4 shadow-xl backdrop-blur-2xl animate-fade-in">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4 text-brand-500" />
                  {item.name}
                </a>
              );
            })}
            <div className="pt-2 mt-2 border-t border-slate-200 dark:border-slate-800">
              <a
                href={portfolioData.personal.resumeUrl}
                download="Mehtab_Alam_Frontend_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-brand-600 text-white shadow-sm hover:bg-brand-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
