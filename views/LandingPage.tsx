
import React from 'react';
import { AppView } from '../types';

interface LandingPageProps {
  onNavigate: (view: AppView) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-pink-900/10 blur-[120px] rounded-full"></div>

        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-900/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 border border-blue-800/30">
            Grounded in Indian reality
          </span>
          
          <h1 className="text-6xl md:text-8xl font-serif-editorial text-white mb-8 leading-[1.05]">
            Indian homes aren’t boring.<br />
            <span className="italic text-slate-400">They’re just lived-in.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Most of us live in rented flats, old apartments, or temporary homes. 
            InteriorCost.in helps improve how your space feels — without renovation or overspending.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <button 
              onClick={() => onNavigate('assistant')}
              className="w-full sm:w-auto px-10 py-5 bg-white text-midnight font-bold rounded-2xl hover:scale-105 transition-all text-lg shadow-xl"
            >
              Try the Honest Glow-Up
            </button>
            <button 
              onClick={() => onNavigate('how-it-works')}
              className="w-full sm:w-auto px-10 py-5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all text-lg"
            >
              How it works
            </button>
          </div>

          {/* Hero Visual Upload Area Placeholder */}
          <div 
            onClick={() => onNavigate('assistant')}
            className="max-w-3xl mx-auto p-1 bg-gradient-to-br from-blue-500/20 via-transparent to-pink-500/20 rounded-[3rem] cursor-pointer group"
          >
            <div className="bg-indigo-deep border border-white/10 rounded-[2.9rem] py-24 flex flex-col items-center justify-center transition-all group-hover:border-white/20">
              <div className="w-20 h-20 bg-blue-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Show us the room you’re tired of.</h3>
              <p className="text-slate-500">Messy is okay. That’s real life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Teaser */}
      <section className="py-32 px-6 bg-indigo-deep/20 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif-editorial italic text-white mb-8">
            “Good interiors are about clarity, not cost.”
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            We’ve built something for the 90% of Indians who don’t want to hire an architect but hate their current vibe. No contractors, no commissions, no renovation push.
          </p>
          <button 
            onClick={() => onNavigate('philosophy')}
            className="text-blue-400 font-bold hover:underline"
          >
            Read our philosophy →
          </button>
        </div>
      </section>
    </div>
  );
};
