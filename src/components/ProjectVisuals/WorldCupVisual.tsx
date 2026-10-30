import React from 'react';
import { Trophy, Compass } from 'lucide-react';

export const WorldCupVisual: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0f1d] dark:bg-[#080d1a] border border-emerald-900/30 rounded-xl p-4 font-mono text-xs text-slate-300 shadow-inner select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/10">
        <div className="flex items-center gap-2 text-emerald-400">
          <Trophy className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold tracking-wider text-[11px] uppercase">Tournament Outcome Matrix</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-300 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
          <Compass className="w-3 h-3 text-emerald-400" />
          <span>Stage: Quarter-Final Model</span>
        </div>
      </div>

      {/* Bracket simulation matchup */}
      <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 mb-3">
        <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-2 flex justify-between">
          <span>Predicted Matchup Simulation</span>
          <span className="text-emerald-400 font-semibold">Classification: Win / Draw / Loss</span>
        </div>

        {/* Team 1 vs Team 2 */}
        <div className="space-y-2">
          {/* France */}
          <div>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="font-bold text-slate-200">Team A (Top 3 FIFA Seed)</span>
              <span className="text-emerald-400 font-bold">58.4% Win Prob</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[58.4%]" />
            </div>
          </div>

          {/* Draw */}
          <div>
            <div className="flex justify-between text-[10px] mb-1 text-slate-400">
              <span>Regulation Draw / Overtime</span>
              <span>22.1%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="bg-slate-500 h-full w-[22.1%]" />
            </div>
          </div>

          {/* Opponent */}
          <div>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-slate-300">Team B (Top 10 FIFA Seed)</span>
              <span className="text-rose-400 font-bold">19.5% Win Prob</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="bg-rose-500/80 h-full w-[19.5%]" />
            </div>
          </div>
        </div>
      </div>

      {/* Model Input Indicators */}
      <div className="grid grid-cols-3 gap-2 text-[10px] text-center">
        <div className="bg-slate-950/60 p-1.5 rounded border border-slate-800">
          <div className="text-slate-400">Elo Differential</div>
          <div className="text-emerald-400 font-bold mt-0.5">+142 pts</div>
        </div>
        <div className="bg-slate-950/60 p-1.5 rounded border border-slate-800">
          <div className="text-slate-400">Rolling Form</div>
          <div className="text-emerald-400 font-bold mt-0.5">W-W-D-W</div>
        </div>
        <div className="bg-slate-950/60 p-1.5 rounded border border-slate-800">
          <div className="text-slate-400">Goal Delta / 90</div>
          <div className="text-emerald-400 font-bold mt-0.5">+1.85</div>
        </div>
      </div>
    </div>
  );
};
