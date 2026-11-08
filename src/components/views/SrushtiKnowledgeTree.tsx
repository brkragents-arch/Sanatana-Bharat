import React, { useState } from 'react';
import { VEDANTA_KNOWLEDGE_TREE_NODES, type VedantaTreeNode } from '../../data/srushtiRahasyaData';
import { ZoomIn, ZoomOut, RotateCcw, Info, Sparkles, ChevronRight, X, Layers, CheckCircle2 } from 'lucide-react';

interface Props {
  isParchmentMode?: boolean;
}

export const SrushtiKnowledgeTree: React.FC<Props> = ({ isParchmentMode = true }) => {
  const [selectedNode, setSelectedNode] = useState<VedantaTreeNode | null>(VEDANTA_KNOWLEDGE_TREE_NODES[0]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const categories = [
    { id: 'divine_origin', label: 'స్థాయి 1: పరబ్రహ్మ & సంకల్పం' },
    { id: 'cosmic_laws', label: 'స్థాయి 2: ప్రకృతి, కాలం & స్వభావం' },
    { id: 'manifestation', label: 'స్థాయి 3: సృష్టి & జీవాత్మ' },
    { id: 'soul_journey', label: 'స్థాయి 4: కర్మ & ఆత్మ విచారణ' },
    { id: 'liberation', label: 'స్థాయి 5: మోక్షం (పరమపదం)' }
  ];

  const handleZoom = (delta: number) => {
    setZoomLevel(prev => Math.min(Math.max(0.7, prev + delta), 1.4));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const openNodeDetails = (node: VedantaTreeNode) => {
    setSelectedNode(node);
    setModalOpen(true);
  };

  return (
    <div className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
      isParchmentMode 
        ? 'bg-[#fffaf0]/90 border-[#d4af37]/40 shadow-xl shadow-amber-900/10' 
        : 'bg-slate-900/80 border-amber-500/30 shadow-2xl shadow-indigo-950/60'
    }`}>
      {/* Header Bar */}
      <div className={`p-6 border-b flex flex-wrap items-center justify-between gap-4 ${
        isParchmentMode ? 'border-[#d4af37]/30 bg-[#fbf5e6]/60' : 'border-slate-800 bg-slate-950/40'
      }`}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className={`text-xs uppercase tracking-widest font-semibold ${isParchmentMode ? 'text-amber-800' : 'text-amber-400'}`}>
              వేదాంత జ్ఞాన వృక్ష దర్శనం
            </span>
          </div>
          <h3 className={`text-2xl font-bold font-serif ${isParchmentMode ? 'text-stone-900' : 'text-amber-100'}`}>
            పరమాత్మ నుండి మోక్షం వరకు ఆధ్యాత్మిక ప్రయాణం
          </h3>
          <p className={`text-sm mt-1 ${isParchmentMode ? 'text-stone-600' : 'text-slate-400'}`}>
            ఒక్కో అంశాన్ని క్లిక్ చేసి సమగ్ర తాత్త్విక విశేషాలు, ఆధునిక అనుసంధానం మరియు ఉపనిషత్ సూత్రాలను తెలుసుకోండి.
          </p>
        </div>

        {/* Zoom & Action Controls */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => handleZoom(-0.1)}
            aria-label="Zoom Out"
            className={`p-2 rounded-lg border transition ${
              isParchmentMode 
                ? 'border-amber-700/30 hover:bg-amber-100/60 text-stone-700' 
                : 'border-slate-700 hover:bg-slate-800 text-slate-300'
            }`}
            title="జూమ్ తగ్గించు (Zoom Out)"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button 
            onClick={handleResetZoom}
            className={`px-2.5 py-1.5 rounded-lg border text-xs font-mono transition ${
              isParchmentMode 
                ? 'border-amber-700/30 hover:bg-amber-100/60 text-stone-700' 
                : 'border-slate-700 hover:bg-slate-800 text-slate-300'
            }`}
            title="రీసెట్ చేయండి"
          >
            {Math.round(zoomLevel * 100)}%
          </button>
          <button 
            onClick={() => handleZoom(0.1)}
            aria-label="Zoom In"
            className={`p-2 rounded-lg border transition ${
              isParchmentMode 
                ? 'border-amber-700/30 hover:bg-amber-100/60 text-stone-700' 
                : 'border-slate-700 hover:bg-slate-800 text-slate-300'
            }`}
            title="జూమ్ పెంచు (Zoom In)"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button 
            onClick={handleResetZoom}
            aria-label="Reset View"
            className={`p-2 rounded-lg border transition ${
              isParchmentMode 
                ? 'border-amber-700/30 hover:bg-amber-100/60 text-stone-700' 
                : 'border-slate-700 hover:bg-slate-800 text-slate-300'
            }`}
            title="మొదటి స్థితికి రండి"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Category Filters */}
      <div className={`px-6 py-3 border-b flex flex-wrap gap-2 items-center ${
        isParchmentMode ? 'border-amber-200/50 bg-[#f7eed9]/40' : 'border-slate-800/80 bg-slate-900/40'
      }`}>
        <span className={`text-xs font-bold mr-2 flex items-center gap-1.5 ${isParchmentMode ? 'text-amber-900' : 'text-slate-400'}`}>
          <Layers className="w-3.5 h-3.5" /> విభాగం:
        </span>
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-3 py-1 rounded-full text-xs font-medium transition ${
            activeCategory === 'all'
              ? 'bg-amber-600 text-white shadow-sm'
              : isParchmentMode
                ? 'bg-amber-100/80 text-amber-900 hover:bg-amber-200/60'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          అన్నీ (10 సోపానాలు)
        </button>
        {categories.map(c => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition ${
              activeCategory === c.id
                ? 'bg-amber-600 text-white shadow-sm'
                : isParchmentMode
                  ? 'bg-amber-100/80 text-amber-900 hover:bg-amber-200/60'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Main Interactive Stage */}
      <div className="p-6 md:p-8 overflow-x-auto min-h-[460px]">
        <div 
          className="transition-transform duration-300 origin-top flex flex-col items-center gap-6 min-w-[720px]"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Level 1: Root - Paramatma & Sankalpam */}
          {(activeCategory === 'all' || activeCategory === 'divine_origin') && (
            <div className="flex flex-col items-center w-full">
              <div className="text-xs uppercase tracking-widest font-bold text-amber-600 mb-2">దశ 1: పరబ్రహ్మ & సంకల్పం</div>
              <div className="flex justify-center gap-6 w-full max-w-2xl">
                {VEDANTA_KNOWLEDGE_TREE_NODES.filter(n => n.category === 'divine_origin').map(node => (
                  <TreeNodeCard 
                    key={node.id} 
                    node={node} 
                    isSelected={selectedNode?.id === node.id}
                    onClick={() => openNodeDetails(node)}
                    isParchmentMode={isParchmentMode}
                  />
                ))}
              </div>
              <div className="w-0.5 h-6 bg-gradient-to-b from-amber-500 to-amber-400 my-1"></div>
            </div>
          )}

          {/* Level 2: Cosmic Laws - Prakriti, Kalam, Svabhavam */}
          {(activeCategory === 'all' || activeCategory === 'cosmic_laws') && (
            <div className="flex flex-col items-center w-full">
              <div className="text-xs uppercase tracking-widest font-bold text-amber-600 mb-2">దశ 2: ప్రకృతి, కాలం & స్వభావం</div>
              <div className="flex justify-center flex-wrap gap-4 md:gap-6 w-full max-w-4xl">
                {VEDANTA_KNOWLEDGE_TREE_NODES.filter(n => n.category === 'cosmic_laws').map(node => (
                  <TreeNodeCard 
                    key={node.id} 
                    node={node} 
                    isSelected={selectedNode?.id === node.id}
                    onClick={() => openNodeDetails(node)}
                    isParchmentMode={isParchmentMode}
                  />
                ))}
              </div>
              <div className="w-0.5 h-6 bg-gradient-to-b from-amber-500 to-amber-400 my-1"></div>
            </div>
          )}

          {/* Level 3: Manifestation - Srushti & Jiva */}
          {(activeCategory === 'all' || activeCategory === 'manifestation') && (
            <div className="flex flex-col items-center w-full">
              <div className="text-xs uppercase tracking-widest font-bold text-amber-600 mb-2">దశ 3: విశ్వావిర్భావం & జీవాత్మ</div>
              <div className="flex justify-center gap-6 w-full max-w-2xl">
                {VEDANTA_KNOWLEDGE_TREE_NODES.filter(n => n.category === 'manifestation').map(node => (
                  <TreeNodeCard 
                    key={node.id} 
                    node={node} 
                    isSelected={selectedNode?.id === node.id}
                    onClick={() => openNodeDetails(node)}
                    isParchmentMode={isParchmentMode}
                  />
                ))}
              </div>
              <div className="w-0.5 h-6 bg-gradient-to-b from-amber-500 to-amber-400 my-1"></div>
            </div>
          )}

          {/* Level 4: Soul Journey - Karma & Atma Vichara */}
          {(activeCategory === 'all' || activeCategory === 'soul_journey') && (
            <div className="flex flex-col items-center w-full">
              <div className="text-xs uppercase tracking-widest font-bold text-amber-600 mb-2">దశ 4: కర్మ చక్రం & ఆత్మ విచారణ</div>
              <div className="flex justify-center gap-6 w-full max-w-2xl">
                {VEDANTA_KNOWLEDGE_TREE_NODES.filter(n => n.category === 'soul_journey').map(node => (
                  <TreeNodeCard 
                    key={node.id} 
                    node={node} 
                    isSelected={selectedNode?.id === node.id}
                    onClick={() => openNodeDetails(node)}
                    isParchmentMode={isParchmentMode}
                  />
                ))}
              </div>
              <div className="w-0.5 h-6 bg-gradient-to-b from-amber-500 to-emerald-500 my-1"></div>
            </div>
          )}

          {/* Level 5: Liberation - Moksha */}
          {(activeCategory === 'all' || activeCategory === 'liberation') && (
            <div className="flex flex-col items-center w-full">
              <div className="text-xs uppercase tracking-widest font-bold text-emerald-600 mb-2">దశ 5: పరమ గమ్యం (మోక్షం)</div>
              <div className="flex justify-center gap-6 w-full max-w-xl">
                {VEDANTA_KNOWLEDGE_TREE_NODES.filter(n => n.category === 'liberation').map(node => (
                  <TreeNodeCard 
                    key={node.id} 
                    node={node} 
                    isSelected={selectedNode?.id === node.id}
                    onClick={() => openNodeDetails(node)}
                    isParchmentMode={isParchmentMode}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Embedded Details Panel (visible if selected) */}
      {selectedNode && (
        <div className={`p-6 md:p-8 border-t ${
          isParchmentMode ? 'bg-[#f8f1de]/70 border-amber-300/40 text-stone-800' : 'bg-slate-950/60 border-slate-800 text-slate-200'
        }`}>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-600 border border-amber-500/30">
                  క్రమం {selectedNode.order} • {selectedNode.category}
                </span>
                <span className={`text-xs font-mono ${isParchmentMode ? 'text-stone-500' : 'text-slate-400'}`}>
                  {selectedNode.subtitleTe}
                </span>
              </div>
              <h4 className={`text-2xl font-bold font-serif ${isParchmentMode ? 'text-amber-950' : 'text-amber-200'}`}>
                {selectedNode.titleTe} ({selectedNode.titleEn})
              </h4>
            </div>
            <button
              onClick={() => openNodeDetails(selectedNode)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition shadow-sm"
            >
              <Info className="w-3.5 h-3.5" /> పూర్తి వివరాలు
            </button>
          </div>

          <p className={`text-base leading-relaxed mb-4 ${isParchmentMode ? 'text-stone-700' : 'text-slate-300'}`}>
            {selectedNode.descTe}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className={`p-3.5 rounded-xl border ${
              isParchmentMode ? 'bg-amber-50/70 border-amber-200/60' : 'bg-slate-900/60 border-slate-800'
            }`}>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">వేదాంత సూత్రం / ప్రామాణిక గ్రంథం</div>
              <div className="text-sm italic font-serif">{selectedNode.keyScripture}</div>
            </div>

            <div className={`p-3.5 rounded-xl border ${
              isParchmentMode ? 'bg-amber-50/70 border-amber-200/60' : 'bg-slate-900/60 border-slate-800'
            }`}>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">ఆంగ్ల వివరణ (English Overview)</div>
              <div className="text-sm">{selectedNode.descEn}</div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Dialog for In-Depth Node Inspection */}
      {modalOpen && selectedNode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className={`max-w-2xl w-full rounded-3xl border shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[90vh] ${
            isParchmentMode 
              ? 'bg-[#fffaf2] border-amber-600/40 text-stone-900' 
              : 'bg-slate-900 border-amber-500/40 text-slate-100'
          }`}>
            <div className="flex items-center justify-between pb-4 border-b border-amber-500/20 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  వేదాంత జ్ఞాన వృక్ష అధ్యయనం
                </span>
                <h3 className="text-2xl font-bold font-serif text-amber-700 dark:text-amber-300">
                  {selectedNode.titleTe}
                </h3>
                <div className="text-sm text-stone-500 dark:text-slate-400 font-mono">
                  {selectedNode.titleEn} • {selectedNode.subtitleTe}
                </div>
              </div>
              <button 
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-slate-800 transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <h5 className="text-xs font-bold uppercase text-amber-600 tracking-wider mb-1">తెలుగు వివరణ & తత్వం</h5>
                <p className="text-base leading-relaxed">{selectedNode.descTe}</p>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 dark:border-slate-800 space-y-2">
                <h5 className="text-xs font-bold uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
                  ప్రామాణిక శాస్త్ర ఆధారం
                </h5>
                <p className="text-sm leading-relaxed">{selectedNode.keyScripture}</p>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 dark:border-slate-800 space-y-2">
                <h5 className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">
                  English Perspective
                </h5>
                <p className="text-sm leading-relaxed">{selectedNode.descEn}</p>
              </div>

              {selectedNode.connectedTo && selectedNode.connectedTo.length > 0 && (
                <div className="pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">అనుసంధానమైన సోపానాలు:</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedNode.connectedTo.map(childId => {
                      const childNode = VEDANTA_KNOWLEDGE_TREE_NODES.find(n => n.id === childId);
                      return childNode ? (
                        <button
                          key={childId}
                          onClick={() => setSelectedNode(childNode)}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg border border-amber-500/30 hover:border-amber-500 bg-amber-500/10 transition flex items-center gap-1"
                        >
                          <span>{childNode.titleTe}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2 text-sm font-semibold rounded-xl bg-amber-600 hover:bg-amber-700 text-white transition shadow"
              >
                పూర్తయింది
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface TreeNodeCardProps {
  node: VedantaTreeNode;
  isSelected: boolean;
  onClick: () => void;
  isParchmentMode: boolean;
}

const TreeNodeCard: React.FC<TreeNodeCardProps> = ({ node, isSelected, onClick, isParchmentMode }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative p-4 rounded-2xl border transition-all duration-300 text-left flex-1 min-w-[200px] max-w-[260px] ${
        isSelected
          ? isParchmentMode
            ? 'bg-amber-100/95 border-amber-600 shadow-md ring-2 ring-amber-500/40 scale-105'
            : 'bg-amber-950/40 border-amber-400 shadow-lg shadow-amber-950/60 ring-2 ring-amber-400/40 scale-105'
          : isParchmentMode
            ? 'bg-[#fffdf7] border-[#d4af37]/40 hover:border-amber-600 hover:shadow-md'
            : 'bg-slate-900/90 border-slate-700/80 hover:border-amber-500/60 hover:bg-slate-800/80'
      }`}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
          isParchmentMode ? 'bg-amber-200/80 text-amber-900' : 'bg-slate-800 text-amber-300'
        }`}>
          {node.icon} దశ {node.order}
        </span>
        {isSelected && (
          <CheckCircle2 className="w-4 h-4 text-amber-600" />
        )}
      </div>

      <h4 className={`text-base font-bold font-serif mb-1 group-hover:text-amber-600 transition ${
        isParchmentMode ? 'text-stone-900' : 'text-slate-100'
      }`}>
        {node.titleTe}
      </h4>

      <p className={`text-xs line-clamp-2 leading-relaxed ${
        isParchmentMode ? 'text-stone-600' : 'text-slate-400'
      }`}>
        {node.descTe}
      </p>

      <div className="mt-2.5 pt-2 border-t border-amber-500/10 flex items-center justify-between text-[11px] text-amber-600 font-medium">
        <span>వివరాలు చూడండి</span>
        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
};
