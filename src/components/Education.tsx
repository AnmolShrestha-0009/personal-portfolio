import React from 'react';
import { educationList } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-24 relative bg-slate-950/40 border-t border-slate-900/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3 uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education Timeline
          </h2>
          <p className="mt-3 max-w-xl text-slate-400 text-sm sm:text-base leading-relaxed">
            Consistent academic excellence spanning secondary education to computer engineering at Nepal's premier engineering institution.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
          {educationList.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:scale-125 transition-transform" />

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-slate-900/60 dark:bg-[#0c1220]/80 border border-slate-800/80 hover:border-slate-700 transition-all shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.degree}
                  </h3>
                  {item.grade && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <Award className="w-3.5 h-3.5" />
                      {item.grade}
                    </span>
                  )}
                </div>

                <div className="text-sm font-medium text-slate-300 mb-3">
                  {item.institution}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {item.location}
                  </span>
                </div>

                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1 font-bold">▪</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
