import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Gauge, 
  Accessibility, 
  Smartphone, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { fadeIn, staggerContainer } from '../utils/motion';

export const About = () => {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: Layers,
      title: 'Modular Component Architecture',
      description:
        'Building reusable, decoupled React components with clean props interfaces, atomic patterns, and strict TypeScript contracts.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Gauge,
      title: 'Performance & Sub-Second LCP',
      description:
        'Optimizing bundle size, code-splitting with dynamic imports, lazy loading, and fine-tuning rendering cycles for 98+ Core Web Vitals.',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Accessibility,
      title: 'WCAG 2.1 AA Accessibility',
      description:
        'Engineering semantic HTML5 layouts with keyboard focus states, high-contrast themes, ARIA attributes, and assistive tech support.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform & Mobile-First',
      description:
        'Seamlessly scaling interfaces from handheld iOS/Android viewports (React Native / responsive web) up to multi-monitor 4K enterprise displays.',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Staggered Viewport Entrance */}
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={fadeIn('up', 0.1)}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-300 text-xs font-mono font-semibold mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            <span>ENGINEERING PHILOSOPHY</span>
          </motion.div>
          <motion.h2
            variants={fadeIn('up', 0.15)}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Architecting Scalable Frontends with Precision
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.2)}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400"
          >
            {personal.bio}
          </motion.p>
        </motion.div>

        {/* 4 Core Pillars Grid with Spotlight Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard
                  tiltMax={6}
                  spotlightColor="rgba(99, 102, 241, 0.12)"
                  spotlightSize={280}
                  className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-500/50 transition-all duration-300 shadow-sm hover:shadow-lg group h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Engineering Highlights Banner */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial-glow opacity-30 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Senior Front-End Toolkit
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
                From Design System Tokens to Production CDN
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether translating complex multi-page Figma design systems into pixel-perfect Tailwind themes, implementing fault-tolerant Redux state machines, or tuning Webpack/Vite bundle chunking—I deliver codebases that scale cleanly alongside expanding engineering teams.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">
                  Zero Technical Debt Mindset
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">
                  Agile Sprint Delivery & Code Review
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">
                  Rigorous Cross-Browser Testing
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
