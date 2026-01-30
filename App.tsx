
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './views/LandingPage';
import { PhilosophyPage } from './views/PhilosophyPage';
import { HowItWorksPage } from './views/HowItWorksPage';
import { AssistantPage } from './views/AssistantPage';
import { VerdictPage } from './views/VerdictPage';
import { CommunityPage } from './views/CommunityPage';
import { AppView, VerdictData } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('landing');
  const [activeVerdict, setActiveVerdict] = useState<VerdictData | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (view: AppView) => setCurrentView(view);

  const handleStartAnalysis = (image: string, verdict: VerdictData) => {
    setUploadedImage(image);
    setActiveVerdict(verdict);
    setCurrentView('verdict');
  };

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage onNavigate={navigateTo} />;
      case 'philosophy':
        return <PhilosophyPage onNavigate={navigateTo} />;
      case 'how-it-works':
        return <HowItWorksPage onNavigate={navigateTo} />;
      case 'assistant':
        return <AssistantPage onAnalysisComplete={handleStartAnalysis} />;
      case 'verdict':
        return activeVerdict && uploadedImage ? (
          <VerdictPage 
            data={activeVerdict} 
            image={uploadedImage} 
            onReset={() => setCurrentView('assistant')} 
          />
        ) : <LandingPage onNavigate={navigateTo} />;
      case 'community':
        return <CommunityPage onNavigate={navigateTo} />;
      default:
        return <LandingPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-midnight transition-colors duration-500">
      <Navbar onNavigate={navigateTo} activeView={currentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
