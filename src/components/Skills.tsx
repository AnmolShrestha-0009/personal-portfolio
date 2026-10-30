import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code2, Brain, BarChart2, Database, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'ml-ai':
        return <Brain className="w-5 h-5 text-cyan-400" />;
      case 'data-science':
        return <BarChart2 className="w-5 h-5 text-violet-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Wrench className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-24 relative bg-slate-950/40 border-y border-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3 uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed">
            Technologies, libraries, and workflows I have worked with across predictive modeling, software engineering, and analytical projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col justify-between rounded-2xl bg-slate-900/60 dark:bg-[#0c1220]/70 border border-slate-800 hover:border-slate-700/80 transition-all p-6 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    {getCategoryIcon(category.id)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded border border-slate-700/40">
                    {category.badge}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {category.description}
                </p>
              </div>

              {/* Skills Badges */}
              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700/80 text-slate-200 border border-slate-700/70 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Context Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500 font-mono">
            * Listed technologies represent tools and libraries applied in active engineering projects and coursework.
          </p>
        </div>
      </div>
    </section>
  );
};
