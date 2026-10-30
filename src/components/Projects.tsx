import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import type { Project } from '../types';
import { Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Technical Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical AI/ML projects exploring probabilistic simulations, financial risk scoring, sports analytics, and natural language processing.
          </p>

          {/* Filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai-ml', label: 'Machine Learning' },
              { id: 'data-science', label: 'Data Science' },
              { id: 'systems', label: 'Systems & Simulation' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
