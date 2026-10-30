import React from 'react';
import { Activity, Cpu, Percent } from 'lucide-react';

export const PokerNexusVisual: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0f1d] dark:bg-[#080d1a] border border-blue-900/30 rounded-xl p-4 font-mono text-xs text-slate-300 shadow-inner select-none">
      {/* Header telemetry */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-blue-500/10">
        <div className="flex items-center gap-2 text-blue-400">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span className="font-semibold tracking-wider text-[11px] uppercase">Monte Carlo Equity Engine</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">
          <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
          <span>N = 50,000 Rollouts</span>
        </div>
      </div>

      {/* Card Matchup & Board */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        {/* Hero Hand */}
        <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1.5 flex justify-between">
            <span>Hand (Suited Broadways)</span>
            <span className="text-cyan-400 font-bold">67.8% Equity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-slate-800 text-cyan-300 font-bold px-2 py-1 rounded border border-cyan-500/30 flex items-center gap-1 shadow-sm">
              <span>A</span>
              <span className="text-cyan-400">♠</span>
            </div>
            <div className="bg-slate-800 text-cyan-300 font-bold px-2 py-1 rounded border border-cyan-500/30 flex items-center gap-1 shadow-sm">
              <span>K</span>
              <span className="text-cyan-400">♠</span>
            </div>
            <span className="text-[10px] text-slate-500 ml-auto">vs Villain Range</span>
          </div>
        </div>

        {/* Board */}
        <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1.5">
            <span>Community Board (Flop)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="bg-slate-800 text-cyan-300 font-bold px-1.5 py-1 rounded border border-slate-700">
              10<span className="text-cyan-400">♠</span>
            </div>
            <div className="bg-slate-800 text-cyan-300 font-bold px-1.5 py-1 rounded border border-slate-700">
              J<span className="text-cyan-400">♠</span>
            </div>
            <div className="bg-slate-800 text-rose-400 font-bold px-1.5 py-1 rounded border border-slate-700">
              4<span className="text-rose-500">♦</span>
            </div>
            <div className="text-[10px] text-slate-500 italic ml-2">Royal Draw + Nut Overcards</div>
          </div>
        </div>
      </div>

      {/* Equity Probability Distribution */}
      <div className="space-y-1.5 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
        <div className="flex justify-between items-center text-[10px] text-slate-400">
          <span className="flex items-center gap-1">
            <Percent className="w-3 h-3 text-cyan-400" /> Win Probability Distribution
          </span>
          <span className="text-emerald-400 font-bold">P(Win) &gt; 0.65</span>
        </div>

        {/* Multi-segment equity bar */}
        <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden flex shadow-inner">
          <div className="bg-cyan-500 h-full transition-all duration-500" style={{ width: '67.8%' }} title="Hero Win: 67.8%" />
          <div className="bg-amber-400 h-full transition-all duration-500" style={{ width: '2.4%' }} title="Split / Tie: 2.4%" />
          <div className="bg-rose-500/80 h-full transition-all duration-500" style={{ width: '29.8%' }} title="Villain Win: 29.8%" />
        </div>

        <div className="flex justify-between text-[10px] text-slate-400 pt-1">
          <span className="text-cyan-400">Win: 67.8%</span>
          <span className="text-amber-400">Tie: 2.4%</span>
          <span className="text-rose-400">Loss: 29.8%</span>
        </div>
      </div>
    </div>
  );
};
