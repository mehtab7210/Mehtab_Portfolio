import React, { useState, useMemo } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { SpotlightCard } from './SpotlightCard';
import { MagneticButton } from './MagneticButton';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Sparkles, 
  Search, 
  ArrowUpRight, 
  BookOpen
} from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/motion';

export const Projects = () => {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web Apps', 'Enterprise / Dashboards', 'Mobile / Utility'];

  // Filter projects by category and search
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/40 relative">
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
            <span>PRODUCTION DELIVERABLES</span>
          </motion.div>
          <motion.h2
            variants={fadeIn('up', 0.15)}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Featured Projects & Enterprise Applications
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.2)}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400"
          >
            Real-world platforms built with React, Next.js, and TypeScript—spanning cold-chain logistics, hardware configurators, US health-tech, Web3, and high-scale consumer portals.
          </motion.p>
        </motion.div>

        {/* Filter Tabs & Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs with Magnetic Pull */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <MagneticButton
                key={cat}
                as="button"
                onClick={() => setActiveCategory(cat)}
                type="button"
                strength={0.2}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                    : 'glass-card text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </MagneticButton>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Projects Grid with 3D Tilt Spotlight Cards & Staggered Viewport Entrance */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="h-full flex"
              >
                <SpotlightCard
                  tiltMax={8}
                  spotlightColor="rgba(99, 102, 241, 0.16)"
                  spotlightSize={340}
                  className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-500/50 shadow-sm hover:shadow-2xl transition-all duration-300 w-full flex flex-col justify-between group"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Top Badge & Organization */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 border border-brand-200/80 dark:border-brand-800/80">
                          {project.category}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          {project.organization}
                        </span>
                      </div>

                      {/* Project Header Banner Preview */}
                      <div className={`h-28 rounded-2xl bg-gradient-to-r ${project.accentColor} p-4 text-white flex flex-col justify-between mb-5 shadow-sm group-hover:shadow-md transition-shadow`}>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-md font-semibold">
                            {project.badge}
                          </span>
                          <div className="w-6 h-6 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center">
                            <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-base sm:text-lg leading-tight drop-shadow-sm text-white">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Project Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons Row with Magnetic Interaction */}
                    <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-2 mt-auto">
                      <MagneticButton
                        as="button"
                        onClick={() => setSelectedProject(project)}
                        type="button"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Case Study</span>
                      </MagneticButton>

                      {project.liveUrl && (
                        <MagneticButton
                          as="a"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-brand-600 dark:bg-white dark:hover:bg-brand-500 text-white dark:text-slate-900 dark:hover:text-white transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 cursor-pointer"
                        >
                          <span>Live Preview</span>
                          <ExternalLink className="w-3 h-3" />
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 glass-card rounded-2xl border border-slate-200 dark:border-slate-800 max-w-md mx-auto">
            <p className="text-base text-slate-600 dark:text-slate-400">
              No projects found for "{searchQuery}".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-3 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-600 text-white hover:bg-brand-500 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
