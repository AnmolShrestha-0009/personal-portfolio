import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';
import { PokerNexusVisual } from './ProjectVisuals/PokerNexusVisual';
import { RiskScoringVisual } from './ProjectVisuals/RiskScoringVisual';
import { WorldCupVisual } from './ProjectVisuals/WorldCupVisual';
import { SentimentAnalysisVisual } from './ProjectVisuals/SentimentAnalysisVisual';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
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
    <div className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/70 dark:bg-[#0c1220]/90 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 p-6 backdrop-blur-sm">
      <div>
        {/* Top bar with category tag and action buttons */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
            {project.category.replace('-', ' ')}
          </span>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2.5">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-300 dark:text-slate-400 leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Visual Component */}
        <div className="mb-5 overflow-hidden rounded-xl border border-slate-800/80 group-hover:border-slate-700 transition-colors">
          {renderVisual()}
        </div>

        {/* Key Contributions */}
        <div className="mb-5">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Key Contributions
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {project.keyContributions.map((contribution, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">▸</span>
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* Technologies badges */}
        <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-800/60">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Card Footer Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={() => onViewDetails(project)}
            className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:border-blue-500/60 transition-all"
          >
            <span>View Details &amp; Architecture</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Repo</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          ) : (
            <span className="text-[10px] font-mono text-slate-500 px-2.5 py-1 rounded bg-slate-800/40 border border-slate-800">
              Configurable URL
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
