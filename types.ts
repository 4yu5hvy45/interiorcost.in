
export type AppView = 'landing' | 'philosophy' | 'how-it-works' | 'assistant' | 'verdict' | 'community';

export type SpendingAppetite = 'Low' | 'Mid' | 'Flexible';
export type MoodTarget = 'Calm Indian' | 'Japandi' | 'Minimal' | 'Cozy' | 'Clean';

export interface VerdictData {
  realityCheck: string;
  energyImprovements: string[];
  worthSpendingOn: {
    item: string;
    range: string;
    impact: string;
  }[];
  dontOverInvest: string[];
  conceptualMood: string;
}

export interface HistoryItem {
  id: string;
  image: string;
  verdict: VerdictData;
}
