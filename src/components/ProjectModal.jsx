import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Layers, 
  Target, 
  Cpu, 
  Award
} from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  // Handle escape key
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="glass-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close case study details"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {project.organization}
            </span>
          </div>

          <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {project.description}
          </p>
        </div>

        {/* Architectural Case Study Breakdown */}
        {project.caseStudy && (
          <div className="mt-6 space-y-6 pt-6 border-t border-slate-200/80 dark:border-slate-800">
            
            {/* The Challenge / Problem */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  The Engineering Challenge
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {project.caseStudy.problem}
                </p>
              </div>
            </div>

            {/* The Solution */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 border border-brand-500/20">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Frontend Architecture & Solution
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {project.caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Implementation Highlights
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {project.caseStudy.architecture}
                </p>
              </div>
            </div>

            {/* Measurable Impact */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Production Impact & Metrics
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {project.caseStudy.impact}
                </p>
              </div>
            </div>

          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800">
          <p className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500 mb-2.5">
            Technologies & Frameworks Utilized:
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Direct production build
          </span>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-md shadow-brand-500/25 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <span>Visit Live Platform</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
