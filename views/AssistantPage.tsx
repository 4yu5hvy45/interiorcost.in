
import React, { useState, useRef } from 'react';
import { analyzeRoom } from '../services/geminiService';
import { SpendingAppetite, MoodTarget, VerdictData } from '../types';

interface AssistantPageProps {
  onAnalysisComplete: (image: string, verdict: VerdictData) => void;
}

export const AssistantPage: React.FC<AssistantPageProps> = ({ onAnalysisComplete }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [budget, setBudget] = useState<SpendingAppetite>('Low');
  const [mood, setMood] = useState<MoodTarget>('Calm Indian');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStart = async () => {
    if (!image) return;
    setLoading(true);
    try {
      const verdict = await analyzeRoom(image, budget, mood);
      onAnalysisComplete(image, verdict);
    } catch (err) {
      console.error(err);
      alert("Something went wrong with the analysis. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <div className="bg-indigo-deep/50 border border-white/5 rounded-[3rem] p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-pink-500 opacity-50"></div>
        
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-900/40">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Honest Glow-Up Assistant</h1>
          <p className="text-slate-400 text-lg">
            “Let’s be honest — most Indian rooms don’t need renovation. Upload a photo and I’ll show you what’s actually worth fixing.”
          </p>
        </div>

        <div className="space-y-10">
          {/* Step 1: Image Upload */}
          <div className="space-y-4">
            <label className="text-white font-medium block">1. Upload a photo of your space</label>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all ${image ? 'border-green-500/50 bg-green-500/5' : 'border-white/10 hover:border-white/20 hover:bg-white/5'}`}
            >
              {image ? (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10">
                  <img src={image} alt="Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold">Change Photo</span>
                  </div>
                </div>
              ) : (
                <>
                  <svg className="w-10 h-10 text-slate-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-slate-400">Click to select a photo</p>
                </>
              )}
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileChange} 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 2: Spending Appetite */}
            <div className="space-y-4">
              <label className="text-white font-medium block">2. Spending Appetite</label>
              <div className="flex gap-2">
                {(['Low', 'Mid', 'Flexible'] as SpendingAppetite[]).map((app) => (
                  <button
                    key={app}
                    onClick={() => setBudget(app)}
                    className={`flex-1 py-3 rounded-xl border text-sm font-bold transition-all ${budget === app ? 'bg-blue-600 border-blue-500 text-white' : 'border-white/10 text-slate-400 hover:border-white/20'}`}
                  >
                    {app}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Current Mood Target */}
            <div className="space-y-4">
              <label className="text-white font-medium block">3. Target Mood</label>
              <select 
                value={mood}
                onChange={(e) => setMood(e.target.value as MoodTarget)}
                className="w-full bg-midnight border border-white/10 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:ring-0"
              >
                {(['Calm Indian', 'Japandi', 'Minimal', 'Cozy', 'Clean'] as MoodTarget[]).map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleStart}
            disabled={!image || loading}
            className={`w-full py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${!image || loading ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-white text-midnight hover:scale-[1.02] shadow-xl'}`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-midnight border-t-transparent rounded-full animate-spin"></div>
                Analyzing your space...
              </>
            ) : (
              'Get Honest Verdict'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
