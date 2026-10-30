import React from 'react';
import { MessageSquareText, Sparkles, Terminal } from 'lucide-react';

export const SentimentAnalysisVisual: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0f1d] dark:bg-[#080d1a] border border-cyan-900/30 rounded-xl p-4 font-mono text-xs text-slate-300 shadow-inner select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-cyan-500/10">
        <div className="flex items-center gap-2 text-cyan-400">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="font-semibold tracking-wider text-[11px] uppercase">NLP Text Classification Pipeline</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Polarity Classifier</span>
        </div>
      </div>

      {/* Sample text tokenization preview */}
      <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 mb-3">
        <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <MessageSquareText className="w-3 h-3 text-cyan-400" /> Preprocessed Token Stream
          </span>
          <span className="text-[10px] text-slate-400">Class: Positive</span>
        </div>
        
        {/* Token chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className="bg-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-300 border border-slate-700">
            "exceptional"
          </span>
          <span className="bg-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-300 border border-slate-700">
            "predictive"
          </span>
          <span className="bg-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-300 border border-slate-700">
            "efficiency"
          </span>
          <span className="bg-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-300 border border-slate-700">
            "robust"
          </span>
          <span className="bg-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-300 border border-slate-700">
            "pipeline"
          </span>
        </div>
      </div>

      {/* Probability classes */}
      <div className="space-y-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
        <div className="text-[10px] text-slate-400 uppercase tracking-wider">Classification Confidence Scores</div>
        <div className="space-y-1.5">
          <div>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-emerald-400 font-bold">Positive</span>
              <span className="text-emerald-400 font-bold">84%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[84%]" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] mb-1 text-slate-400">
              <span>Neutral</span>
              <span>11%</span>
            </div>
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="bg-slate-500 h-full w-[11%]" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] mb-1 text-slate-400">
              <span className="text-rose-400">Negative</span>
              <span className="text-rose-400">5%</span>
            </div>
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="bg-rose-500/70 h-full w-[5%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
