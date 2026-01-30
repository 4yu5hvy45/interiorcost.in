
import React from 'react';
import { VerdictData } from '../types';

interface VerdictPageProps {
  data: VerdictData;
  image: string;
  onReset: () => void;
}

export const VerdictPage: React.FC<VerdictPageProps> = ({ data, image, onReset }) => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="flex flex-col md:flex-row gap-12 mb-16">
        {/* Original Image Sidebar */}
        <div className="w-full md:w-1/3">
          <div className="sticky top-24">
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl mb-6">
              <img src={image} alt="Original Room" className="w-full h-auto grayscale-[0.2]" />
            </div>
            <p className="text-center text-slate-500 text-sm italic">The original space</p>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="flex-1 space-y-12">
          {/* AI Reality Check */}
          <div className="bg-indigo-deep border-l-4 border-blue-500 p-8 rounded-[2rem] glow-blue">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block">AI Reality Check</span>
            <p className="text-2xl font-serif-editorial italic text-white leading-relaxed">
              “{data.realityCheck}”
            </p>
          </div>

          {/* Energy Improvements */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">What will improve the energy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.energyImprovements.map((tip, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 p-6 rounded-2xl flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-xs shrink-0 mt-1">
                    ✓
                  </div>
                  <p className="text-slate-300">{tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Budget Reality Check */}
          <section className="bg-indigo-deep border border-white/5 p-8 rounded-[2.5rem]">
            <h2 className="text-2xl font-bold text-white mb-8">Worth spending on</h2>
            <div className="space-y-6">
              {data.worthSpendingOn.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                  <div>
                    <h4 className="text-white font-medium mb-1">{item.item}</h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${item.impact === 'High' ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'}`}>
                      {item.impact} Impact
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">{item.range}</p>
                    <p className="text-slate-500 text-xs">Estimated cost</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Don't Over-Invest */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Don’t over-invest in this space</h2>
            <div className="bg-pink-600/5 border border-pink-500/10 p-8 rounded-[2.5rem]">
              <ul className="space-y-4">
                {data.dontOverInvest.map((text, idx) => (
                  <li key={idx} className="flex gap-4 text-slate-400">
                    <span className="text-pink-500">×</span>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Conceptual Preview */}
          <section className="space-y-6">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-bold text-white">Conceptual mood preview</h2>
                <p className="text-slate-500 text-sm italic">— not a promise</p>
              </div>
            </div>
            <div className="bg-indigo-deep border border-white/5 p-8 rounded-[3rem] soft-gradient">
              <p className="text-xl text-slate-300 leading-relaxed italic">
                {data.conceptualMood}
              </p>
            </div>
          </section>

          <div className="pt-12 text-center">
            <button 
              onClick={onReset}
              className="px-8 py-4 bg-white text-midnight font-bold rounded-2xl hover:scale-105 transition-all"
            >
              Analyze another space
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
