
import React from 'react';
import { AppView } from '../types';

interface PhilosophyPageProps {
  onNavigate: (view: AppView) => void;
}

export const PhilosophyPage: React.FC<PhilosophyPageProps> = ({ onNavigate }) => {
  const sections = [
    {
      title: "The Temporary Living Mindset",
      content: "We spend years in rented flats or childhood homes 'waiting' for a permanent house before we invest in ourselves. But those years are our lives. Your current room isn't just a place to sleep; it's your mental state."
    },
    {
      title: "Renovation Hesitation is Real",
      content: "Deep down, we're afraid that if we start fixing things, it will cost lakhs or disturb the landlord. So we do nothing. We live with the harsh tube light and the awkward layout because the alternative feels like a headache."
    },
    {
      title: "Pinterest vs. Reality",
      content: "Social media feeds us 'aspirational' homes that cost more than a car. We don't need a moodboard of marble and velvet. We need a way to stop the visual noise and start the flow."
    }
  ];

  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif-editorial text-white mb-16">
          Why most Indian homes<br />
          <span className="italic text-slate-400">never get ‘done’</span>
        </h1>

        <div className="space-y-20 mb-24">
          {sections.map((section, idx) => (
            <div key={idx} className="group border-l-2 border-white/5 pl-8 py-4 hover:border-blue-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-6">{section.title}</h3>
              <p className="text-lg text-slate-400 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600/10 border border-blue-500/20 p-12 rounded-[3rem] text-center mb-16">
          <p className="text-3xl md:text-4xl font-serif-editorial italic text-white mb-8">
            “We don’t fix properties. We fix how it feels to live in them.”
          </p>
          <button 
            onClick={() => onNavigate('assistant')}
            className="px-8 py-4 bg-white text-midnight font-bold rounded-2xl hover:scale-105 transition-all"
          >
            See what your room actually needs
          </button>
        </div>
      </div>
    </div>
  );
};
