import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';
import { PokerNexusVisual } from './ProjectVisuals/PokerNexusVisual';
import { RiskScoringVisual } from './ProjectVisuals/RiskScoringVisual';
import { WorldCupVisual } from './ProjectVisuals/WorldCupVisual';
import { SentimentAnalysisVisual } from './ProjectVisuals/SentimentAnalysisVisual';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderVisual = () => {
    switch (project.visualType) {
      case 'poker':
        return <PokerNexusVisual />;
      case 'risk':
        return <RiskScoringVisual />;
      case 'worldcup':
        return <WorldCupVisual />;
      case 'sentiment':
        return <SentimentAnalysisVisual />;
      default:
        return null;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 dark:bg-[#0c1220] border border-slate-700/60 dark:border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3 tracking-wide uppercase">
            {project.category.replace('-', ' ')}
          </div>
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Interactive Visual Dashboard Preview */}
        <div className="mb-6">
          <div className="text-xs uppercase tracking-wider text-slate-400 mb-2 font-mono flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Interactive Architecture &amp; Telemetry Simulation</span>
          </div>
          {renderVisual()}
          {project.disclaimer && (
            <p className="mt-2 text-[11px] text-slate-400 italic font-mono">
              {project.disclaimer}
            </p>
          )}
        </div>

        {/* Technologies Used */}
        <div className="mb-6">
          <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2.5">
            Technologies &amp; Libraries
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800 text-slate-300 border border-slate-700/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Contributions */}
        <div className="mb-6">
          <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Key Contributions</span>
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.keyContributions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-emerald-400 mt-1 font-bold text-xs">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture & Workflow */}
        {project.architectureSteps.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-violet-400" />
              <span>Workflow &amp; Pipeline Architecture</span>
            </h3>
            <div className="space-y-2">
              {project.architectureSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2.5"
                >
                  <span className="font-mono text-cyan-400 font-bold">{idx + 1}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions Footer */}
        <div className="pt-4 mt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-lg shadow-blue-500/20"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          ) : (
            <div className="text-xs text-slate-400 font-mono bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700/50">
              Repository URL configurable upon release
            </div>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors ml-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
