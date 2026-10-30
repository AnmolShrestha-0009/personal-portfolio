import React from 'react';
import { achievementsList } from '../data/portfolioData';
import { Award, Compass, Zap, Sparkles } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'academic-consistency':
        return <Award className="w-5 h-5 text-amber-400" />;
      case 'learning-discipline':
        return <Compass className="w-5 h-5 text-blue-400" />;
      case 'rapid-acquisition':
        return <Zap className="w-5 h-5 text-cyan-400" />;
      case 'applied-mindset':
        return <Sparkles className="w-5 h-5 text-violet-400" />;
      default:
        return <Award className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Core Strengths</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Academic Consistency &amp; Technical Mindset
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsList.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-slate-900/50 dark:bg-[#0c1220]/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded border border-slate-700/40">
                    {item.badge}
                  </span>
                </div>
                <div className="text-xs font-mono font-semibold text-cyan-400 mb-1">
                  {item.highlight}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
