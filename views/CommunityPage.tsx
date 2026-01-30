
import React from 'react';
import { AppView } from '../types';

interface CommunityPageProps {
  onNavigate: (view: AppView) => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ onNavigate }) => {
  const examples = [
    {
      id: 1,
      image: "https://picsum.photos/seed/home1/800/600",
      title: "The Rental 1BHK Shift",
      insight: "Removed the heavy curtains and used warm lamps. Visual noise dropped by 70%.",
      tags: ["Rental", "Low Budget"]
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/home2/800/600",
      title: "Old Childhood Bedroom",
      insight: "Repainted one wall and decluttered the desk. Flow improved instantly.",
      tags: ["Old Apartment", "Minimalist"]
    },
    {
      id: 3,
      image: "https://picsum.photos/seed/home3/800/600",
      title: "Shared Living Flow",
      insight: "Swapped the sofa position to clear the balcony path. The room feels twice as big.",
      tags: ["Furniture Layout", "High Impact"]
    },
    {
      id: 4,
      image: "https://picsum.photos/seed/home4/800/600",
      title: "Studio Mood Glow",
      insight: "Added warm LED strips behind the bed. Night-time calm is on another level.",
      tags: ["Lighting", "₹2,000 Spend"]
    },
    {
      id: 5,
      image: "https://picsum.photos/seed/home5/800/600",
      title: "Balcony Integration",
      insight: "Brought in three hardy plants. The barrier between inside and outside is gone.",
      tags: ["Nature", "Cozy"]
    },
    {
      id: 6,
      image: "https://picsum.photos/seed/home6/800/600",
      title: "Kitchen Corner Peace",
      insight: "Changed the overhead tube light to a warm pendant. Cooking is no longer a chore.",
      tags: ["Kitchen", "Mood"]
    }
  ];

  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif-editorial text-white mb-6">Real homes. Real decisions.</h1>
          <p className="text-xl text-slate-400">No staging. No luxury. Just honest fixes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {examples.map((ex) => (
            <div key={ex.id} className="bg-indigo-deep border border-white/5 rounded-[2.5rem] overflow-hidden group hover:border-blue-500/20 transition-all">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img src={ex.image} alt={ex.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {ex.tags.map(t => (
                    <span key={t} className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] text-white font-bold uppercase tracking-wider">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3">{ex.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  “{ex.insight}”
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-[3rem] p-16 text-center text-white">
          <h2 className="text-4xl font-serif-editorial mb-6 italic">Ready to see the potential in your mess?</h2>
          <button 
            onClick={() => onNavigate('assistant')}
            className="px-10 py-5 bg-white text-midnight font-bold rounded-2xl hover:scale-105 transition-all text-lg"
          >
            Start your Glow-up
          </button>
        </div>
      </div>
    </div>
  );
};
