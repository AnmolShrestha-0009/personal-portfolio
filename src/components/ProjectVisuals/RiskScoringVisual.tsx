import React from 'react';
import { AlertCircle, BarChart3, ShieldAlert } from 'lucide-react';

export const RiskScoringVisual: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0f1d] dark:bg-[#080d1a] border border-violet-900/30 rounded-xl p-4 font-mono text-xs text-slate-300 shadow-inner select-none">
      {/* Header telemetry */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-violet-500/10">
        <div className="flex items-center gap-2 text-violet-400">
          <ShieldAlert className="w-4 h-4 text-violet-400" />
          <span className="font-semibold tracking-wider text-[11px] uppercase">Risk Ranker &amp; Attribution</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
          <AlertCircle className="w-3 h-3 text-amber-400" />
          <span>Illustrative Sample Data</span>
        </div>
      </div>

      {/* Account prioritization sample rows */}
      <div className="space-y-1.5 mb-3">
        <div className="text-[10px] text-slate-400 uppercase tracking-wider flex justify-between px-1">
          <span>Account ID</span>
          <span>Risk Probability</span>
          <span>Priority</span>
        </div>

        {/* Row 1 */}
        <div className="flex items-center justify-between bg-rose-950/20 border border-rose-900/40 px-2.5 py-1.5 rounded-lg">
          <span className="text-slate-200 font-semibold">ACC-9042</span>
          <div className="flex items-center gap-2">
            <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="bg-rose-500 h-full w-[89%]" />
            </div>
            <span className="text-rose-400 font-bold">0.89</span>
          </div>
          <span className="text-[10px] bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded font-semibold border border-rose-500/30">
            HIGH
          </span>
        </div>

        {/* Row 2 */}
        <div className="flex items-center justify-between bg-amber-950/20 border border-amber-900/40 px-2.5 py-1.5 rounded-lg">
          <span className="text-slate-200 font-semibold">ACC-3188</span>
          <div className="flex items-center gap-2">
            <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="bg-amber-400 h-full w-[64%]" />
            </div>
            <span className="text-amber-400 font-bold">0.64</span>
          </div>
          <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-semibold border border-amber-500/30">
            MED
          </span>
        </div>

        {/* Row 3 */}
        <div className="flex items-center justify-between bg-slate-900/60 border border-slate-800 px-2.5 py-1.5 rounded-lg">
          <span className="text-slate-300">ACC-7210</span>
          <div className="flex items-center gap-2">
            <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="bg-emerald-400 h-full w-[18%]" />
            </div>
            <span className="text-emerald-400 font-bold">0.18</span>
          </div>
          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-semibold border border-emerald-500/20">
            LOW
          </span>
        </div>
      </div>

      {/* Feature Importance Attribution Breakdown */}
      <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5">
          <span className="flex items-center gap-1">
            <BarChart3 className="w-3 h-3 text-violet-400" /> Key Explanatory Features
          </span>
          <span className="text-violet-300">SHAP / Weight</span>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-slate-300 truncate max-w-[140px]">tx_velocity_deviation</span>
            <div className="flex items-center gap-1.5">
              <div className="w-20 h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="bg-violet-400 h-full w-[82%]" />
              </div>
              <span className="text-slate-400">+0.38</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-slate-300 truncate max-w-[140px]">unusual_amount_ratio</span>
            <div className="flex items-center gap-1.5">
              <div className="w-20 h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="bg-violet-400 h-full w-[60%]" />
              </div>
              <span className="text-slate-400">+0.27</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
