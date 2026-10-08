import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Globe2,
  HeartHandshake
} from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { fadeIn, staggerContainer } from '../utils/motion';

export const Education = () => {
  const { education, strengths, languages } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-28 relative">
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
            <span>ACADEMIC FOUNDATION & ETHICS</span>
          </motion.div>
          <motion.h2
            variants={fadeIn('up', 0.15)}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Education & Professional Credentials
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.2)}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400"
          >
            Rigorous computer science scholarship coupled with continuous lifelong learning, professional dedication, and multi-lingual communication.
          </motion.p>
        </motion.div>

        {/* 2-Column Grid: Education & Strengths/Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-brand-500" />
              <span>Academic Degrees</span>
            </h3>

            {education.map((edu) => (
              <SpotlightCard
                key={edu.degree}
                tiltMax={5}
                spotlightSize={260}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-500/50 shadow-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-brand-500" />
                      {edu.period}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-mono font-semibold my-3">
                  <Award className="w-3.5 h-3.5 text-brand-500" />
                  <span>{edu.score}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.details}
                </p>
              </SpotlightCard>
            ))}
          </div>

          {/* Right Column: Strengths & Languages */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Core Strengths */}
            <SpotlightCard
              tiltMax={4}
              spotlightSize={240}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2.5 mb-4">
                <HeartHandshake className="w-5 h-5 text-emerald-500" />
                <span>Core Engineering Values</span>
              </h3>
              
              <div className="space-y-3.5">
                {strengths.map((st) => (
                  <div key={st.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {st.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>

            {/* Languages */}
            <SpotlightCard
              tiltMax={4}
              spotlightSize={240}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2.5 mb-4">
                <Globe2 className="w-5 h-5 text-cyan-500" />
                <span>Languages</span>
              </h3>

              <div className="space-y-3">
                {languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {lang.language}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>

          </div>

        </div>

      </div>
    </section>
  );
};
