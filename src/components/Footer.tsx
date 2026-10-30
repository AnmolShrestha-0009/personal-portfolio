import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & info */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-lg font-mono font-extrabold tracking-wider text-white hover:text-blue-400 transition-colors"
            >
              ANMOL<span className="text-blue-500">.</span>SHRESTHA
            </a>
            <p className="mt-1 text-xs text-slate-400 font-mono">
              Designed and built with curiosity.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-slate-400">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-white transition-colors p-1"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-blue-400 transition-colors p-1"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="hover:text-cyan-400 transition-colors p-1"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-mono border border-slate-800 transition-all shadow-sm"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-500 font-mono">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
