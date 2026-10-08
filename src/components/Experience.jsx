import React, { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp 
} from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { fadeIn, staggerContainer } from '../utils/motion';

export const Experience = () => {
  const { experiences } = portfolioData;
  const timelineRef = useRef(null);

  // Scroll-driven vertical trace line that fills with color
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 55%'],
  });

  const traceScaleY = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Viewport Entrance */}
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
            <span>CAREER TRAJECTORY</span>
          </motion.div>
          <motion.h2
            variants={fadeIn('up', 0.15)}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Professional Experience & Architectural Ownership
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.2)}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400"
          >
            A proven record of engineering enterprise dashboards, high-traffic consumer portals, and cross-platform mobile apps with measurable business impact.
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          
          {/* Static Vertical Timeline Guide Track */}
          <div
            aria-hidden="true"
            className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-slate-200 dark:bg-slate-800"
          />

          {/* Dynamic Scroll-Driven Animated Trace Line */}
          <motion.div
            style={{ scaleY: traceScaleY }}
            aria-hidden="true"
            className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-brand-500 via-indigo-500 to-cyan-400 origin-top shadow-[0_0_12px_rgba(99,102,241,0.6)] z-0"
          />

          {/* Experience Cards with Viewport Reveals */}
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-12 sm:pl-20 group"
              >
                {/* Timeline Node Marker with Ambient Glow */}
                <div
                  className={`absolute left-1.5 sm:left-5.5 top-6 -translate-x-1/2 w-6 h-6 rounded-full border-4 ${
                    idx === 0 
                      ? 'bg-brand-500 border-white dark:border-slate-900 shadow-md shadow-brand-500/50' 
                      : 'bg-slate-300 dark:bg-slate-700 border-white dark:border-slate-900 group-hover:bg-brand-500 transition-colors'
                  } transition-transform group-hover:scale-125 duration-300 z-10 flex items-center justify-center`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-slate-900" />
                </div>

                {/* 3D Spotlight Card Container */}
                <SpotlightCard
                  tiltMax={5}
                  spotlightColor="rgba(99, 102, 241, 0.14)"
                  spotlightSize={320}
                  className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-500/50 transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                  
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {exp.company}
                        </h3>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                        {exp.role}
                      </p>
                    </div>

                    {/* Period & Location Pills */}
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700">
                        <Calendar className="w-3.5 h-3.5 text-brand-500" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Tagline Scope */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic mb-4 font-medium">
                    "{exp.tagline}"
                  </p>

                  {/* Key Metrics Chip */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-5">
                    <TrendingUp className="w-4 h-4 shrink-0" />
                    <span>{exp.metrics}</span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500 mr-1">
                      Stack:
                    </span>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </SpotlightCard>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
