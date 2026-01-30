
import React from 'react';
import { AppView } from '../types';

interface FooterProps {
  onNavigate: (view: AppView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-white/5 py-16 bg-indigo-deep/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="text-xl font-bold text-white mb-4">InteriorCost<span className="text-blue-400">.in</span></div>
            <p className="text-slate-400 max-w-sm mb-6">
              Built for Indian homes that are lived-in — not staged. We help you find clarity and comfort without breaking the bank.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Navigate</h4>
            <div className="flex flex-col gap-2 text-slate-400">
              <button onClick={() => onNavigate('landing')} className="text-left hover:text-white">Home</button>
              <button onClick={() => onNavigate('philosophy')} className="text-left hover:text-white">Philosophy</button>
              <button onClick={() => onNavigate('how-it-works')} className="text-left hover:text-white">How it works</button>
              <button onClick={() => onNavigate('community')} className="text-left hover:text-white">Community</button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Indian Context</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">
              "Most Indian homes are transient. We shouldn't have to wait for a 'forever home' to feel at peace."
            </p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} InteriorCost.in. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
