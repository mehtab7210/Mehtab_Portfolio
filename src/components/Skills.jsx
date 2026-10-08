import React, { useState, useMemo } from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Layout, 
  Wrench, 
  Search, 
  Sparkles, 
  Star,
  CheckCircle2
} from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { MagneticButton } from './MagneticButton';
import { fadeIn, staggerContainer } from '../utils/motion';

export const Skills = () => {
  const { skillCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    Code2: Code2,
    Database: Database,
    Layout: Layout,
    Wrench: Wrench
  };

  // Filter skills based on category and search query
  const filteredCategories = useMemo(() => {
    return skillCategories
      .map(cat => {
        const matchesCategory = selectedCategory === 'all' || cat.id === selectedCategory;
        if (!matchesCategory) return null;

        const filteredSkills = cat.skills.filter(skill =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.level.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (filteredSkills.length === 0 && searchQuery.trim() !== '') {
          return null;
        }

        return {
          ...cat,
          skills: filteredSkills
        };
      })
      .filter(Boolean);
  }, [skillCategories, selectedCategory, searchQuery]);

  // Total skill count
  const totalSkillsCount = useMemo(() => {
    return skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [skillCategories]);

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Staggered Viewport Entrance */}
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div
            variants={fadeIn('up', 0.1)}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-300 text-xs font-mono font-semibold mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            <span>TECHNICAL PROFICIENCY</span>
          </motion.div>
          <motion.h2
            variants={fadeIn('up', 0.15)}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Comprehensive Engineering Stack
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.2)}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400"
          >
            A battle-tested repertoire of {totalSkillsCount}+ modern frontend technologies, architectural patterns, and development tools engineered for enterprise velocity.
          </motion.p>
        </motion.div>

        {/* Controls: Search Bar & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Pills with Magnetic Pull */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <MagneticButton
              as="button"
              onClick={() => setSelectedCategory('all')}
              type="button"
              strength={0.2}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                  : 'glass-card text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800'
              }`}
            >
              All Categories ({totalSkillsCount})
            </MagneticButton>
            {skillCategories.map((cat) => (
              <MagneticButton
                key={cat.id}
                as="button"
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                strength={0.2}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                    : 'glass-card text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800'
                }`}
              >
                {cat.name}
              </MagneticButton>
            ))}
          </div>

          {/* Interactive Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, Redux)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Skill Category Cards Grid with SpotlightCard & Viewport Reveals */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredCategories.map((category) => {
              const Icon = categoryIcons[category.icon] || Code2;

              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <SpotlightCard
                    tiltMax={5}
                    spotlightColor="rgba(99, 102, 241, 0.14)"
                    spotlightSize={300}
                    className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${category.color} flex items-center justify-center text-white shadow-md shrink-0`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                            {category.name}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      {/* Skills Pill Badges with Micro-interactions */}
                      <div className="flex flex-wrap gap-2.5 mt-5">
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className={`group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                              skill.popular
                                ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/80 shadow-xs hover:border-brand-400'
                                : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-500'
                            }`}
                          >
                            {skill.popular && (
                              <Star className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0" />
                            )}
                            <span>{skill.name}</span>

                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400 font-normal">
                              {skill.years}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Card Summary */}
                    <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      <span>{category.skills.length} Technologies Indexed</span>
                      <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Production Ready
                      </span>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 glass-card rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-base text-slate-600 dark:text-slate-400">
              No technologies match "{searchQuery}".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-600 text-white hover:bg-brand-500 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
