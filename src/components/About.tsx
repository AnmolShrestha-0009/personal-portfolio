import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Hammer, BrainCircuit, Target, Sparkles, UserCheck } from 'lucide-react';

export const About: React.FC = () => {
  const getThemeIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Hammer className="w-5 h-5 text-blue-400" />;
      case 1:
        return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
      case 2:
        return <Target className="w-5 h-5 text-violet-400" />;
      case 3:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      default:
        return <UserCheck className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-3 uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Profile &amp; Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {personalInfo.aboutTitle}
          </h2>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative paragraphs */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-800">
            {personalInfo.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx} className="relative">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-800 flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                IOE Pulchowk Campus
              </span>
              <span>•</span>
              <span>Kathmandu, Nepal</span>
              <span>•</span>
              <span>BE Computer Engineering</span>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalInfo.themes.map((theme, idx) => (
              <div
                key={theme.title}
                className="p-5 rounded-2xl bg-slate-900/60 dark:bg-[#0c1220]/80 border border-slate-800 hover:border-slate-700 transition-all shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-slate-800/80 w-fit mb-3 border border-slate-700/60">
                  {getThemeIcon(idx)}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {theme.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
