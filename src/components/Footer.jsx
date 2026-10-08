import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowUp, 
  Code2, 
  ShieldCheck
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { MagneticButton } from './MagneticButton';

// Pure constant computed outside of component render
const CURRENT_YEAR = typeof window !== 'undefined' ? new Date().getFullYear() : 2026;

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md py-12 transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-slate-200/60 dark:border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-cyan-500 flex items-center justify-center text-white font-mono font-bold text-base shadow-md">
                MA
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white tracking-tight">
                  {personal.name}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">
                  Senior Frontend Engineer & UI/UX Architect
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mt-1 leading-relaxed">
              Engineering resilient web applications, enterprise dashboards, and mobile experiences with clean component architecture and performance excellence.
            </p>
          </div>

          {/* Nav Anchors & Back to Top */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3">
            <a
              href="#about"
              className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              About
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a
              href="#skills"
              className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              Skills
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a
              href="#experience"
              className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              Experience
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a
              href="#projects"
              className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              Projects
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a
              href="#contact"
              className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              Contact
            </a>

            {/* Social Icons in Footer with Magnetic Pull */}
            <MagneticButton
              as="a"
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors inline-flex items-center justify-center cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton
              as="a"
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors inline-flex items-center justify-center cursor-pointer"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </MagneticButton>

            {/* Back to top button with Magnetic Pull */}
            <MagneticButton
              as="button"
              onClick={scrollToTop}
              type="button"
              aria-label="Back to top"
              className="ml-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 inline-flex items-center justify-center cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </MagneticButton>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div>
            © {CURRENT_YEAR} Mehtab Alam. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-brand-500" />
              React 19 & Tailwind CSS
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              WCAG 2.1 AA Compliant
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
