
import React from 'react';
import { AppView } from '../types';

interface HowItWorksPageProps {
  onNavigate: (view: AppView) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  const steps = [
    {
      step: 1,
      title: "Upload your real room",
      caption: "No cleaning required. We see potential.",
      description: "Our AI is trained on thousands of Indian apartments. It understands the constraints of a Godrej almirah, the fixed granite countertop, and the lack of sunlight."
    },
    {
      step: 2,
      title: "Set your comfort with spending",
      caption: "Low, mid, or flexible — no pressure.",
      description: "Whether you have ₹5,000 or ₹50,000, we prioritize moves that give you the highest emotional ROI. We're about impact, not shopping lists."
    },
    {
      step: 3,
      title: "Get an honest glow-up plan",
      caption: "Focused on mood, light, and balance.",
      description: "We give you a direct verdict. What to move, what to buy, and most importantly—what to leave alone because it's not worth your money."
    }
  ];

  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-serif-editorial text-white mb-16 text-center">How It Works</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((s) => (
            <div key={s.step} className="bg-indigo-deep border border-white/5 p-8 rounded-[2.5rem] relative group hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 font-bold text-xl mb-6">
                {s.step}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-blue-400 font-medium mb-6">{s.caption}</p>
              <p className="text-slate-400 leading-relaxed text-sm">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-500 mb-8 italic">No contractors. No commissions. No renovation push.</p>
          <button 
            onClick={() => onNavigate('assistant')}
            className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all text-lg"
          >
            Try it on my room
          </button>
        </div>
      </div>
    </div>
  );
};
