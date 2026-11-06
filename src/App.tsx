import React from 'react';
import { MythologyProvider, useMythology } from './context/MythologyContext';
import { Header } from './components/Header';
import { IntroductionView } from './components/views/IntroductionView';
import { FamilyTreeView } from './components/views/FamilyTreeView';
import { BrahmaFamilyView } from './components/views/BrahmaFamilyView';
import { MindMapView } from './components/views/MindMapView';
import { ChronologyFlowView } from './components/views/ChronologyFlowView';
import { SanatanaChronologyView } from './components/views/SanatanaChronologyView';
import { IndianHistoryView } from './components/views/IndianHistoryView';
import { DakshaPrasutiSection } from './components/views/DakshaPrasutiSection';
import { ScriptureLibraryView } from './components/views/ScriptureLibraryView';
import { NodeDetailDrawer } from './components/NodeDetailDrawer';
import { SearchModal } from './components/SearchModal';
import { AdminCmsModal } from './components/views/AdminCmsModal';
import { AdityasModal } from './components/AdityasModal';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const { viewMode, setViewMode } = useMythology();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#2C1810]">
      {/* Top Application Header with English/Telugu translation toggle & OM player */}
      <Header />

      {/* Main Interactive View: Each button renders its own full dedicated page */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-3 sm:px-4 py-4 sm:py-6">
        {viewMode === 'intro' && <IntroductionView />}
        {viewMode === 'brahma_family' && <BrahmaFamilyView />}
        {viewMode === 'tree' && <FamilyTreeView />}
        {viewMode === 'mindmap' && <MindMapView />}
        {viewMode === 'sanatana_chronology' && <SanatanaChronologyView />}
        {viewMode === 'indian_history' && <IndianHistoryView />}
        {viewMode === 'flow' && <ChronologyFlowView />}
        {viewMode === 'daksha_vamsa' && <DakshaPrasutiSection />}
        {viewMode === 'scriptures' && <ScriptureLibraryView />}
      </main>

      {/* Slide-out Node Detail Drawer (Clickable Node Explanation System with English & Telugu) */}
      <NodeDetailDrawer />

      {/* Advanced Telugu & English Search Modal */}
      <SearchModal />

      {/* 12 Mandi Adityas (Dvadasha Adityas) Pop-up Window */}
      <AdityasModal />

      {/* Administrator Content Management System (CMS) */}
      <AdminCmsModal />

      {/* Footer with References & Citations */}
      <Footer 
        onNavigateToSection={(mode) => {
          setViewMode(mode);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
      />
    </div>
  );
};

export default function App() {
  return (
    <MythologyProvider>
      <AppContent />
    </MythologyProvider>
  );
}
