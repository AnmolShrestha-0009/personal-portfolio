import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { NeuralBackground } from './NeuralBackground';
import { ArrowRight, Mail, Terminal, Cpu, Activity, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import type { Theme } from '../hooks/useTheme';

export const Hero: React.FC<{ theme: Theme }> = ({ theme }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Neural / Particle Canvas */}
      <NeuralBackground isLight={theme === 'light'} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Bio, CTAs, Socials */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status / Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 dark:bg-[#0c1220]/80 border border-slate-700/60 dark:border-blue-500/20 text-xs text-slate-300 font-mono mb-6 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalInfo.statusBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400">Intelligent Systems</span> Through AI &amp; Code.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              {personalInfo.heroSupporting}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm transition-colors border border-slate-700/80 backdrop-blur-md"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social Links & Key Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/80 text-xs font-mono text-slate-400">
              <span className="text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <span className="hidden sm:inline text-slate-700">•</span>
              <span className="hidden sm:flex items-center gap-1.5 text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-violet-400" />
                <span>Kathmandu, Nepal</span>
              </span>
            </div>
          </div>

          {/* Right Column: AI / ML Systems & Code Architecture Console (No photo/picture icon) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md group">
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 rounded-3xl opacity-35 group-hover:opacity-60 blur-lg transition duration-500" />

              {/* Console Container */}
              <div className="relative rounded-2xl bg-slate-950 dark:bg-[#090d18] border border-slate-800/90 shadow-2xl overflow-hidden backdrop-blur-md font-mono text-xs text-slate-300">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-slate-400 text-[11px] ml-2">intelligent_systems.py</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                    <span>PIPELINE ACTIVE</span>
                  </div>
                </div>

                {/* Code & Architecture Body */}
                <div className="p-4 sm:p-5 space-y-4">
                  {/* Code snippet */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-[11px] leading-relaxed">
                    <div className="text-slate-500"># Predictive Modeling &amp; Simulation Engine</div>
                    <div>
                      <span className="text-violet-400 font-semibold">class</span>{' '}
                      <span className="text-cyan-300 font-semibold">IntelligentPipeline</span>:
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-blue-400">def</span>{' '}
                      <span className="text-amber-300">evaluate_state</span>(self, features):
                    </div>
                    <div className="pl-8 text-slate-400">
                      equity = self.<span className="text-cyan-300">monte_carlo_rollout</span>(N=<span className="text-amber-400">50000</span>)
                    </div>
                    <div className="pl-8 text-slate-400">
                      risk = self.<span className="text-cyan-300">predict_priority</span>(features)
                    </div>
                    <div className="pl-8 text-slate-300">
                      <span className="text-violet-400 font-semibold">return</span> {'{'} <span className="text-emerald-400">"status"</span>: <span className="text-emerald-400">"optimal"</span>, <span className="text-cyan-400">"score"</span>: risk {'}'}
                    </div>
                  </div>

                  {/* Neural Flow & Architecture Node Diagram */}
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60 space-y-3">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-400">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>System Architecture Flow</span>
                      </span>
                      <span className="text-slate-500 font-mono">End-to-End</span>
                    </div>

                    {/* Visual 3-stage pipeline */}
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                      <div className="p-2 rounded-lg bg-slate-800/70 border border-slate-700/60">
                        <div className="text-cyan-400 font-semibold">Input Stream</div>
                        <div className="text-slate-400 mt-0.5 text-[9px]">Tabular &amp; Raw Data</div>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-800/70 border border-slate-700/60">
                        <div className="text-violet-400 font-semibold">ML Engine</div>
                        <div className="text-slate-400 mt-0.5 text-[9px]">Models &amp; Simulation</div>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-800/70 border border-slate-700/60">
                        <div className="text-emerald-400 font-semibold">Analytics</div>
                        <div className="text-slate-400 mt-0.5 text-[9px]">Risk &amp; Predictions</div>
                      </div>
                    </div>
                  </div>

                  {/* Telemetry metrics */}
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-400 shrink-0" />
                      <div>
                        <div className="text-slate-400">Focus Areas</div>
                        <div className="text-white font-semibold">AI / ML &amp; Data Science</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <div className="text-slate-400">Curriculum</div>
                        <div className="text-white font-semibold">Pulchowk Campus (IOE)</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Status Bar */}
                <div className="px-4 py-2 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Python 3.11 • C++ • Scikit-learn</span>
                  </span>
                  <span className="text-slate-500 font-mono">Kathmandu, NP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
