
import React from 'react';
import { AppView } from '../types';

interface NavbarProps {
  onNavigate: (view: AppView) => void;
  activeView: AppView;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-midnight/80 backdrop-blur-md border-b border-white/5 py-4">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate('landing')}
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-pink-500 rounded-lg group-hover:rotate-12 transition-transform duration-300"></div>
          <span className="text-xl font-bold tracking-tight text-white">InteriorCost<span className="text-blue-400">.in</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <button 
            onClick={() => onNavigate('philosophy')}
            className={`hover:text-white transition-colors ${activeView === 'philosophy' ? 'text-white underline decoration-blue-500 underline-offset-8' : ''}`}
          >
            Philosophy
          </button>
          <button 
            onClick={() => onNavigate('community')}
            className={`hover:text-white transition-colors ${activeView === 'community' ? 'text-white underline decoration-blue-500 underline-offset-8' : ''}`}
          >
            Community
          </button>
        </div>

        <button 
          onClick={() => onNavigate('assistant')}
          className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-900/20"
        >
          Try the Honest Glow-Up
        </button>
      </div>
    </nav>
  );
};
