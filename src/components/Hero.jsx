import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Copy, 
  Check, 
  ShieldCheck, 
  Zap, 
  Terminal
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { SpotlightCard } from './SpotlightCard';
import { MagneticButton } from './MagneticButton';
import { fadeIn, staggerContainer } from '../utils/motion';

const ROLES = [
  'React.js Architect',
  'Next.js Specialist',
  'Cross-Platform Mobile Engineer',
  'Design Systems & UI Architect',
  'Core Web Vitals Specialist',
];

export const Hero = ({ onCopyToast }) => {
  const { personal, stats } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle headline role every 3.2s
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    if (onCopyToast) {
      onCopyToast(`Email copied: ${personal.email}`);
    }
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-glow">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <motion.div
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Cycling Role, Bio, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill Badge */}
            <motion.div
              variants={fadeIn('up', 0.1)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Senior & Lead Opportunities</span>
              <span className="text-slate-400 dark:text-slate-500">|</span>
              <span className="text-slate-600 dark:text-slate-300 font-mono">New Delhi, India</span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.h1
              variants={fadeIn('up', 0.15)}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4"
            >
              Hi, I'm{' '}
              <span className="text-gradient hover:opacity-95 transition-opacity">
                {personal.name}
              </span>
            </motion.h1>

            {/* Dynamic Text Reveal: Cycling Senior Headline */}
            <motion.div
              variants={fadeIn('up', 0.2)}
              className="flex items-center gap-3 mb-6 min-h-[38px] flex-wrap"
            >
              <div className="inline-flex items-center h-9 px-3.5 py-1 rounded-xl bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-300 border border-brand-500/25 shadow-xs">
                <span className="font-mono text-xs sm:text-sm font-semibold mr-2 opacity-75">
                  &gt;
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="font-mono text-xs sm:text-sm font-bold tracking-wide"
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="ml-1.5 w-2 h-4 bg-brand-500 inline-block animate-pulse rounded-sm" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 font-mono">
                TypeScript • React 19 • Next.js
              </span>
            </motion.div>

            {/* Value Proposition */}
            <motion.p
              variants={fadeIn('up', 0.25)}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8"
            >
              {personal.valueProposition}
            </motion.p>

            {/* Action Buttons with Magnetic Pull */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              <MagneticButton
                as="a"
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500 cursor-pointer"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                as="a"
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 bg-white/60 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 cursor-pointer"
              >
                <span>Get In Touch</span>
              </MagneticButton>

              <MagneticButton
                as="a"
                href={personal.resumeUrl}
                download="Mehtab_Alam_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border border-brand-500/30 text-brand-600 dark:text-brand-300 bg-brand-500/5 hover:bg-brand-500/10 transition-colors cursor-pointer"
                title="Download Mehtab Alam's Resume PDF"
              >
                <Download className="w-4 h-4" />
                <span>Resume PDF</span>
              </MagneticButton>
            </motion.div>

            {/* Social Links & Copy Email Chip */}
            <motion.div
              variants={fadeIn('up', 0.35)}
              className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 w-full"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect:
              </span>

              {/* Copy Email Button with Magnetic Pull */}
              <MagneticButton
                as="button"
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 cursor-pointer"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>{personal.email}</span>
                    <Copy className="w-3 h-3 text-slate-400" />
                  </>
                )}
              </MagneticButton>

              {/* LinkedIn with Magnetic Pull */}
              <MagneticButton
                as="a"
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 inline-flex items-center justify-center cursor-pointer"
              >
                <LinkedinIcon className="w-4 h-4" />
              </MagneticButton>

              {/* GitHub with Magnetic Pull */}
              <MagneticButton
                as="a"
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 inline-flex items-center justify-center cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" />
              </MagneticButton>
            </motion.div>

          </div>

          {/* Right Column: 3D Tilt Spotlight Profile Card */}
          <motion.div
            variants={fadeIn('left', 0.25)}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-500 via-indigo-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 dark:opacity-40 animate-pulse-slow" />

              {/* 3D Tilt & Spotlight Card Wrapper */}
              <SpotlightCard
                className="rounded-3xl glass-card p-3 sm:p-4 border border-slate-200/80 dark:border-slate-800 shadow-2xl"
                tiltMax={7}
                spotlightColor="rgba(99, 102, 241, 0.18)"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/40 dark:border-slate-700/50 group">
                  <img
                    src={personal.avatar}
                    alt="Mehtab Alam - Senior Frontend Engineer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Bottom Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Overlay Title on Portrait */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-mono uppercase tracking-wider text-cyan-300">
                      Frontend Architect
                    </p>
                    <p className="text-base font-bold">
                      Mehtab Alam
                    </p>
                    <p className="text-xs text-slate-300">
                      React.js • Next.js • React Native
                    </p>
                  </div>
                </div>

                {/* Floating Badge 1: Experience (Top Right) */}
                <div className="absolute -top-4 -right-4 sm:-right-6 glass-card px-3.5 py-2 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-xl flex items-center gap-2.5 animate-float pointer-events-none">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white shadow-md">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                      2.5+ Years
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      Industry Exp.
                    </p>
                  </div>
                </div>

                {/* Floating Badge 2: Enterprise Logistics & PC Builder (Bottom Left) */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 glass-card px-3.5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-xl flex items-center gap-3 pointer-events-none">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                      Enterprise Grade
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      WCAG AA & 98+ Vitals
                    </p>
                  </div>
                </div>

                {/* Floating Badge 3: Code Tag (Right Middle) */}
                <div className="hidden sm:flex absolute top-1/2 -right-8 glass-card px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-xl items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 pointer-events-none">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>&lt;TS / React / Next /&gt;</span>
                </div>

              </SpotlightCard>
            </div>
          </motion.div>

        </div>

        {/* Metric Stats Banner with Staggered Viewport Reveals */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          className="mt-16 sm:mt-20 pt-8 border-t border-slate-200/80 dark:border-slate-800/80"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <SpotlightCard
                key={stat.label}
                className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/40 dark:hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1 group"
                tiltMax={5}
                spotlightSize={240}
              >
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-brand-500 transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 font-mono">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-0.5">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                  {stat.description}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};
