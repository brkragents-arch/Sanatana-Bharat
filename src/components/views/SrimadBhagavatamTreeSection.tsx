import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  Sparkles, 
  Search, 
  Maximize2, 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  BookOpen, 
  Heart,
  Compass,
  ChevronRight,
  ChevronDown,
  Layers,
  Minimize2,
  Move
} from 'lucide-react';
import { 
  BHAGAVATAM_TREE_ROOT, 
  BHAGAVATAM_NODES,
  type BhagavatamHierarchyNode,
  type BhagavatamNode 
} from '../../data/srimadBhagavatamTreeData';

export const SrimadBhagavatamTreeSection: React.FC = () => {
  const [treeZoom, setTreeZoom] = useState<number>(0.95);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 80, y: 180 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragInfoRef = useRef<{ startX: number; startY: number; panX: number; panY: number; moved: boolean } | null>(null);
  const touchInfoRef = useRef<{ startX: number; startY: number; panX: number; panY: number; moved: boolean } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const treeContentRef = useRef<HTMLDivElement>(null);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedNodeData, setSelectedNodeData] = useState<BhagavatamNode | null>(null);
  const [popupPosition, setPopupPosition] = useState<{ x: number; y: number } | null>(null);
  const [popupPlacement, setPopupPlacement] = useState<'right' | 'left' | 'bottom' | 'top'>('right');
  const [isPosterModalOpen, setIsPosterModalOpen] = useState<boolean>(false);
  const [posterZoom, setPosterZoom] = useState<number>(1);

  // Wheel listener: direct mouse roll (wheel) inside window zooms in/out without requiring Ctrl
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Prevent parent page scroll so rolling inside the tree canvas smoothly zooms
      e.preventDefault();
      const zoomDelta = e.deltaY < 0 ? 0.08 : -0.08;
      setTreeZoom(prev => Math.min(Math.max(Number((prev + zoomDelta).toFixed(2)), 0.35), 2.2));
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Pan Mouse Handlers with drag threshold to protect click interactions
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a')) return;

    dragInfoRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      panX: pan.x,
      panY: pan.y,
      moved: false
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragInfoRef.current) return;
    const dx = e.clientX - dragInfoRef.current.startX;
    const dy = e.clientY - dragInfoRef.current.startY;
    if (!dragInfoRef.current.moved) {
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
        dragInfoRef.current.moved = true;
        setIsDragging(true);
      }
    }
    if (dragInfoRef.current.moved) {
      setPan({
        x: dragInfoRef.current.panX + dx,
        y: dragInfoRef.current.panY + dy
      });
    }
  };

  const handleMouseUp = () => {
    dragInfoRef.current = null;
    setIsDragging(false);
  };

  // Touch handlers for mobile / tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a')) return;
      touchInfoRef.current = {
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY,
        panX: pan.x,
        panY: pan.y,
        moved: false
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchInfoRef.current || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - touchInfoRef.current.startX;
    const dy = e.touches[0].clientY - touchInfoRef.current.startY;
    if (!touchInfoRef.current.moved) {
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
        touchInfoRef.current.moved = true;
        setIsDragging(true);
      }
    }
    if (touchInfoRef.current.moved) {
      setPan({
        x: touchInfoRef.current.panX + dx,
        y: touchInfoRef.current.panY + dy
      });
    }
  };

  const handleTouchEnd = () => {
    touchInfoRef.current = null;
    setIsDragging(false);
  };

  // Center the tree at the center of the window canvas
  const centerTree = useCallback(() => {
    const container = containerRef.current;
    const content = treeContentRef.current;
    if (!container || !content) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const contentWidth = content.offsetWidth || content.scrollWidth;
    const contentHeight = content.offsetHeight || content.scrollHeight;

    const initialZoom = 0.95;
    const x = Math.max(20, (containerWidth - contentWidth * initialZoom) / 2);
    const y = Math.max(20, (containerHeight - contentHeight * initialZoom) / 2);

    setTreeZoom(initialZoom);
    setPan({ x: Math.round(x), y: Math.round(y) });
  }, []);

  const resetPanAndZoom = () => {
    centerTree();
  };

  // Helper map for detail modal
  const nodeDetailsMap = useMemo(() => {
    const map = new Map<string, BhagavatamNode>();
    BHAGAVATAM_NODES.forEach(n => map.set(n.id, n));
    return map;
  }, []);

  // Helper to collect all node IDs that have children
  const getAllParentIds = useCallback((node: BhagavatamHierarchyNode): string[] => {
    const ids: string[] = [];
    if (node.children && node.children.length > 0) {
      ids.push(node.id);
      node.children.forEach(c => ids.push(...getAllParentIds(c)));
    }
    return ids;
  }, []);

  // By default display the tree collapsed at the cosmic stem (Parabrahma -> Mahavishnu, Garbhodakasayi collapsed)
  const defaultExpandedIds = useMemo(() => {
    return new Set<string>(['parabrahma', 'mahavishnu']);
  }, []);

  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(defaultExpandedIds);

  const toggleNode = useCallback((id: string) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const expandAll = useCallback(() => {
    const allIds = getAllParentIds(BHAGAVATAM_TREE_ROOT);
    setExpandedNodes(new Set(allIds));
  }, [getAllParentIds]);

  const collapseAll = useCallback(() => {
    setExpandedNodes(new Set(['parabrahma', 'mahavishnu']));
    setTimeout(() => centerTree(), 50);
  }, [centerTree]);

  // Center tree on initial component mount and on window resize
  useEffect(() => {
    const timer = setTimeout(() => {
      centerTree();
    }, 80);
    const handleResize = () => centerTree();
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [centerTree]);

  // Check search match
  const matchesSearch = useCallback((node: BhagavatamHierarchyNode): boolean => {
    if (!searchQuery.trim()) return false;
    const q = searchQuery.toLowerCase().trim();
    return (
      node.name.toLowerCase().includes(q) ||
      node.nameEn.toLowerCase().includes(q) ||
      (node.role ? node.role.toLowerCase().includes(q) : false) ||
      (node.spouse ? node.spouse.toLowerCase().includes(q) : false)
    );
  }, [searchQuery]);

  // Click on a node to view detailed Bhagavatam scripture story in a small window positioned near the clicked box
  const handleNodeClick = (e: React.MouseEvent, node: BhagavatamHierarchyNode) => {
    // Prevent triggering when clicking buttons or expand/collapse toggles
    const target = e.target as HTMLElement;
    if (target.closest('button')) return;

    const detail = nodeDetailsMap.get(node.id);
    const nodeObj: BhagavatamNode = detail || {
      id: node.id,
      name: node.name,
      nameEn: node.nameEn,
      title: node.role || '',
      titleEn: node.role || '',
      branch: 'cosmic',
      image: node.image,
      canto: node.canto || '',
      description: node.role ? `${node.name} (${node.nameEn}) — ${node.role}` : `${node.name} (${node.nameEn})`,
      descriptionEn: node.role ? `${node.nameEn} — ${node.role}` : node.nameEn,
      spouse: node.spouse
    };

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const popupWidth = Math.min(370, window.innerWidth - 32);
    const popupHeight = 390;

    let x = 0;
    let y = 0;
    let placement: 'right' | 'left' | 'bottom' | 'top' = 'right';

    // Check if right has enough room
    if (rect.right + 12 + popupWidth <= window.innerWidth - 10) {
      placement = 'right';
      x = rect.right + 12;
      y = rect.top - 8;
    } else if (rect.left - 12 - popupWidth >= 10) {
      // Left has enough room
      placement = 'left';
      x = rect.left - popupWidth - 12;
      y = rect.top - 8;
    } else if (rect.bottom + 12 + popupHeight <= window.innerHeight - 10) {
      // Below has enough room
      placement = 'bottom';
      x = Math.max(12, Math.min(window.innerWidth - popupWidth - 12, rect.left));
      y = rect.bottom + 12;
    } else {
      // Top or clamped fallback
      placement = 'top';
      x = Math.max(12, Math.min(window.innerWidth - popupWidth - 12, rect.left));
      y = Math.max(12, rect.top - popupHeight - 12);
    }

    // Clamp inside viewport
    if (y + popupHeight > window.innerHeight - 12) {
      y = Math.max(12, window.innerHeight - popupHeight - 12);
    }
    if (y < 12) {
      y = 12;
    }

    setPopupPlacement(placement);
    setPopupPosition({ x: Math.round(x), y: Math.round(y) });
    setSelectedNodeData(nodeObj);
  };

  // ============================================================
  // RECURSIVE HORIZONTAL TREE BRANCH RENDERER
  // ============================================================
  const renderTreeNode = (node: BhagavatamHierarchyNode, depth: number = 0): React.ReactNode => {
    const hasChildren = !!node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(node.id);
    const isMatched = matchesSearch(node);
    const isSelected = selectedNodeData?.id === node.id;

    // Color theme based on node properties
    const themeStyles = {
      gold: {
        border: 'border-[#D4AF37]',
        bg: 'bg-gradient-to-r from-[#FFFDF2] to-[#FFF8DC]',
        text: 'text-[#7B1113]',
        badge: 'bg-[#D4AF37]/25 text-[#7B1113]'
      },
      blue: {
        border: 'border-blue-300',
        bg: 'bg-gradient-to-r from-blue-50/90 to-sky-50/80',
        text: 'text-blue-950',
        badge: 'bg-blue-100 text-blue-900'
      },
      amber: {
        border: 'border-amber-400',
        bg: 'bg-gradient-to-r from-amber-50/90 to-orange-50/80',
        text: 'text-amber-950',
        badge: 'bg-amber-100 text-amber-900'
      },
      green: {
        border: 'border-emerald-400',
        bg: 'bg-gradient-to-r from-emerald-50/90 to-green-50/80',
        text: 'text-emerald-950',
        badge: 'bg-emerald-100 text-emerald-900'
      },
      crimson: {
        border: 'border-rose-400',
        bg: 'bg-gradient-to-r from-rose-50/90 to-red-50/80',
        text: 'text-rose-950',
        badge: 'bg-rose-100 text-rose-900'
      },
      purple: {
        border: 'border-purple-300',
        bg: 'bg-gradient-to-r from-purple-50/90 to-indigo-50/80',
        text: 'text-purple-950',
        badge: 'bg-purple-100 text-purple-900'
      },
      slate: {
        border: 'border-stone-300',
        bg: 'bg-gradient-to-r from-stone-50 to-neutral-50',
        text: 'text-stone-800',
        badge: 'bg-stone-100 text-stone-700'
      }
    }[node.color || 'amber'];

    return (
      <div key={node.id} className="flex items-center my-2">
        {/* The Node Card itself */}
        <div className="flex items-center shrink-0">
          {/* Hexagon shape for the Supreme Root (matching 'Me' in reference image) */}
          {node.isHexagon ? (
            <div
              onClick={(e) => handleNodeClick(e, node)}
              className={`relative cursor-pointer transition-all duration-200 transform hover:scale-105 group p-4 shadow-2xl flex flex-col items-center justify-center text-center select-none ${
                isMatched ? 'ring-4 ring-amber-400 scale-105' : ''
              } ${isSelected ? 'ring-4 ring-[#D4AF37] ring-offset-2 scale-105 shadow-2xl' : ''}`}
              style={{
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                background: 'linear-gradient(135deg, #FFE57F 0%, #D4AF37 50%, #B71C1C 100%)',
                width: '170px',
                height: '150px'
              }}
            >
              <div className="w-13 h-13 rounded-full p-0.5 bg-gradient-to-tr from-[#FFD54F] via-[#FF8F00] to-[#E65100] border-2 border-[#D4AF37] shadow-lg overflow-hidden mb-1 flex items-center justify-center">
                <img 
                  src={node.image} 
                  alt={node.name} 
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="font-black text-sm font-telugu-serif text-[#3E0A0C] tracking-tight leading-tight">
                {node.name}
              </span>
              {node.role && (
                <span className="text-[9px] font-bold text-[#4A0012] leading-tight mt-0.5 px-1 truncate max-w-[140px]">
                  {node.role}
                </span>
              )}
              <span className="text-[9.5px] font-semibold text-white/95 drop-shadow-xs">
                {node.nameEn}
              </span>
            </div>
          ) : (
            /* Rounded Pill Card matching the reference diagram style */
            <div
              onClick={(e) => handleNodeClick(e, node)}
              className={`relative flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border-2 shadow-xs transition-all duration-200 select-none group cursor-pointer hover:shadow-md hover:scale-102 ${
                themeStyles.border
              } ${themeStyles.bg} ${themeStyles.text} ${
                isMatched ? 'ring-4 ring-amber-400 scale-105 bg-amber-100' : ''
              } ${node.isSpecial ? 'ring-1 ring-[#D4AF37]/60' : ''} ${
                isSelected ? 'ring-3 ring-[#D4AF37] ring-offset-2 bg-amber-50 scale-102 shadow-lg' : ''
              }`}
              style={{ minWidth: depth === 1 ? '200px' : '180px' }}
            >
              {/* Medallion Avatar with round frame if present */}
              {node.image ? (
                <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-[#D4AF37] via-[#FFE57F] to-[#B71C1C] shrink-0 overflow-hidden shadow-xs flex items-center justify-center">
                  <img 
                    src={node.image} 
                    alt={node.name} 
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full bg-[#FFF8E7] border border-[#D4AF37]/50 flex items-center justify-center text-[10px] font-bold shrink-0 text-[#7B1113]">
                  {node.isSpecial ? '★' : '•'}
                </div>
              )}

              {/* Text Information */}
              <div className="flex-1 min-w-0 pr-1 text-left leading-tight">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-bold text-xs sm:text-sm font-telugu-serif tracking-tight truncate">
                    {node.name}
                  </span>
                  {node.spouse && (
                    <span className="text-[9px] text-[#B71C1C] font-semibold flex items-center gap-0.5 bg-white/80 px-1.5 py-0.2 rounded-md border border-[#D4AF37]/30">
                      <Heart className="w-2.5 h-2.5 text-[#D84315] fill-[#D84315]" /> {node.spouse}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-[10px] opacity-80 mt-0.5">
                  <span className="truncate">{node.nameEn}</span>
                  {node.canto && (
                    <span className={`text-[9px] font-bold px-1 rounded-sm ${themeStyles.badge}`}>
                      {node.canto}
                    </span>
                  )}
                </div>

                {node.role && (
                  <p className="text-[10px] text-[#8E24AA] font-medium line-clamp-1 mt-0.5">
                    {node.role}
                  </p>
                )}
              </div>

              {/* Expand / Collapse Button Pill on the right edge */}
              {hasChildren && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleNode(node.id);
                  }}
                  className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold transition-all shadow-xs cursor-pointer ${
                    isExpanded 
                      ? 'bg-[#7B1113] text-[#FFE57F] border-[#D4AF37]' 
                      : 'bg-white hover:bg-[#FFE57F] text-[#7B1113] border-[#D4AF37]'
                  }`}
                  title={isExpanded ? 'కుదించు (Collapse)' : `విస్తరించు (${node.children!.length} శాఖలు)`}
                >
                  {isExpanded ? (
                    <ChevronDown className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5" />
                  )}
                </button>
              )}
            </div>
          )}
        </div>

        {/* If Node has Children and is Expanded: Render Connecting Curved Bracket & Children */}
        {hasChildren && isExpanded && (
          <div className="flex items-center relative pl-8">
            {/* Curved Golden Bracket connector lines (like in the reference image) */}
            <svg 
              className="absolute left-0 top-0 bottom-0 pointer-events-none"
              style={{ width: '32px', height: '100%' }}
              preserveAspectRatio="none"
            >
              {/* Horizontal line extending from parent center */}
              <line 
                x1="0" 
                y1="50%" 
                x2="16" 
                y2="50%" 
                stroke="#EAB308" 
                strokeWidth="2.5" 
              />
              {/* Vertical line connecting children span */}
              <line 
                x1="16" 
                y1="22" 
                x2="16" 
                y2="calc(100% - 22px)" 
                stroke="#EAB308" 
                strokeWidth="2.5" 
                strokeLinecap="round"
              />
              {/* Little curve/stem to right */}
            </svg>

            {/* Children Column */}
            <div className="flex flex-col relative">
              {node.children!.map((child) => (
                <div key={child.id} className="relative flex items-center">
                  {/* Stem connecting from the vertical bracket to child's left */}
                  <div className="w-4 h-0.5 bg-[#EAB308] mr-2 -ml-4" />
                  {renderTreeNode(child, depth + 1)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="srimad-bhagavatam-tree" className="mt-14 pt-8 border-t-2 border-[#D4AF37]/40">
      {/* ============================================================ */}
      {/* 1. SECTION BANNER & CONTROLS                                 */}
      {/* ============================================================ */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3E0A0C] via-[#7B1113] to-[#2B0608] text-white p-6 sm:p-8 shadow-2xl border-2 border-[#D4AF37]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF9933]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#FFE57F] text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD54F]" />
              <span>శ్రీమద్భాగవత సంపూర్ణ దివ్య వంశవృక్షము • The Srimad Bhagavatam Family Tree</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-telugu-serif text-[#FFF8E7] drop-shadow-md">
              శాఖోపశాఖల వంశవృక్షం (Expandable Family Tree)
            </h2>
            <p className="text-xs sm:text-sm text-[#FFE082] mt-1 font-medium">
              సూచిక ప్రకారం ఎడమనుండి కుడికి విస్తరించే ఆర్గానిక్ వంశవృక్షం • విస్తరించు (+) మరియు కుదించు (-) సదుపాయంతో
            </p>
          </div>
        </div>

        {/* Tree Toolbar: Expand/Collapse All, Search & Zoom */}
        <div className="mt-6 pt-5 border-t border-[#D4AF37]/30 flex flex-wrap items-center justify-between gap-3">
          {/* Action Buttons: Expand All & Collapse All */}
          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFE57F] hover:bg-[#FFF9C4] text-[#3E0A0C] text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>అన్నీ విస్తరించు (Expand All)</span>
            </button>
            <button
              onClick={collapseAll}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 text-white/90 text-xs font-bold border border-white/20 transition-all cursor-pointer"
            >
              <Minimize2 className="w-3.5 h-3.5" />
              <span>అన్నీ కుదించు (Collapse All)</span>
            </button>
          </div>

          {/* Search & Zoom Controls */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-white/60 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="వృక్షంలో వెతకండి (ఉదా: రాముడు, కృష్ణ, ధ్రువ)..."
                className="pl-8 pr-3 py-1.5 text-xs rounded-lg bg-black/40 border border-[#D4AF37]/50 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-[#FFE57F] w-48 sm:w-60"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white/70 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Pan & Zoom Hint Badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/30 border border-[#D4AF37]/40 text-[#FFE57F] text-xs font-semibold">
              <Move className="w-3.5 h-3.5 text-[#FFD54F]" />
              <span>మౌస్ వీల్ తో జూమ్ • డ్రాగ్ చేసి పాన్ (Mouse Wheel to Zoom • Drag to Pan)</span>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center bg-black/40 rounded-lg p-0.5 border border-[#D4AF37]/40">
              <button
                onClick={() => setTreeZoom(prev => Math.min(prev + 0.1, 2.0))}
                className="p-1.5 text-[#FFE57F] hover:bg-white/10 rounded cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-mono px-2 text-[#FFE57F]">
                {Math.round(treeZoom * 100)}%
              </span>
              <button
                onClick={() => setTreeZoom(prev => Math.max(prev - 0.1, 0.4))}
                className="p-1.5 text-[#FFE57F] hover:bg-white/10 rounded cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={resetPanAndZoom}
                className="p-1.5 text-[#FFE57F] hover:bg-white/10 rounded cursor-pointer"
                title="Reset Pan & Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. THE HORIZONTAL EXPANDABLE FAMILY TREE CANVAS              */}
      {/* ============================================================ */}
      <div className="mt-6 bg-[#FAF7F0] rounded-3xl border-2 border-[#D4AF37] shadow-xl overflow-hidden relative">
        {/* Scrollable & Pannable Tree Area */}
        <div 
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`relative overflow-hidden h-[540px] sm:h-[600px] select-none p-6 sm:p-10 bg-[radial-gradient(#D4AF37_0.75px,transparent_0.75px)] [background-size:24px_24px] ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          <div 
            ref={treeContentRef}
            style={{ 
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${treeZoom})`, 
              transformOrigin: '0 0',
              transition: isDragging ? 'none' : 'transform 0.2s ease-out',
              display: 'inline-block'
            }}
            className="p-4"
          >
            {renderTreeNode(BHAGAVATAM_TREE_ROOT)}
          </div>
        </div>

        {/* Tree Bottom Legend & మూల సచిత్ర పటాలు at the bottom of the section */}
        <div className="p-3 bg-gradient-to-r from-[#F5E6CA] via-[#FFF8E7] to-[#F5E6CA] border-t border-[#D4AF37]/50 flex flex-wrap items-center justify-between text-xs text-[#7B1113] font-semibold gap-3">
          <div className="flex items-center gap-1.5 flex-1 min-w-[260px]">
            <Compass className="w-4 h-4 text-[#D84315] shrink-0" />
            <span>సూచన: ఏదైనా కార్డ్ లోని <strong>[ + / - ]</strong> బటన్ పై క్లిక్ చేసి శాఖలను విస్తరించవచ్చు లేదా కుదించవచ్చు.</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-bold text-[#7B1113]">మూల సచిత్ర పటాలు:</span>
            <button
              type="button"
              onClick={() => {
                setPosterZoom(1);
                setIsPosterModalOpen(true);
              }}
              className="text-[#7B1113] hover:text-[#D84315] font-bold underline flex items-center gap-1.5 cursor-pointer bg-white/80 hover:bg-white px-2.5 py-1 rounded-lg border border-[#D4AF37]/60 shadow-2xs transition-all"
            >
              <span>🖼️</span>
              <span>శ్రీమద్భాగవత సంపూర్ణ వంశవృక్ష మూల పటం (వీక్షించండి)</span>
              <Maximize2 className="w-3.5 h-3.5 text-[#D84315]" />
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. CHARACTER DETAIL POPUP (Directly anchored near click via Portal) */}
      {/* ============================================================ */}
      {selectedNodeData && popupPosition && typeof document !== 'undefined' && createPortal(
        <>
          {/* Transparent click-away layer: no dark overlay, click outside to close */}
          <div 
            onClick={() => {
              setSelectedNodeData(null);
              setPopupPosition(null);
            }}
            className="fixed inset-0 z-[9999] bg-transparent cursor-default"
          />

          {/* Contextual Small Window positioned directly near the clicked card */}
          <div 
            style={{ 
              position: 'fixed',
              top: `${popupPosition.y}px`, 
              left: `${popupPosition.x}px`,
              zIndex: 10000
            }}
            onClick={(e) => e.stopPropagation()}
            className="w-[92vw] sm:w-[370px] bg-[#FFFDF7] rounded-2xl overflow-visible shadow-2xl border-2 border-[#D4AF37] max-h-[82vh] flex flex-col animate-in fade-in zoom-in-95 duration-150 ring-2 ring-[#D4AF37]/40"
          >
            {/* Directional pointer arrow indicating the clicked box */}
            {popupPlacement === 'right' && (
              <div 
                className="hidden sm:block absolute -left-2 top-7 w-4 h-4 bg-[#FFF8E7] border-l-2 border-b-2 border-[#D4AF37] rotate-45 pointer-events-none z-20" 
              />
            )}
            {popupPlacement === 'left' && (
              <div 
                className="hidden sm:block absolute -right-2 top-7 w-4 h-4 bg-[#FFF8E7] border-r-2 border-t-2 border-[#D4AF37] rotate-45 pointer-events-none z-20" 
              />
            )}
            {popupPlacement === 'bottom' && (
              <div 
                className="hidden sm:block absolute left-8 -top-2 w-4 h-4 bg-[#FFF8E7] border-l-2 border-t-2 border-[#D4AF37] rotate-45 pointer-events-none z-20" 
              />
            )}
            {popupPlacement === 'top' && (
              <div 
                className="hidden sm:block absolute left-8 -bottom-2 w-4 h-4 bg-[#FAF7F0] border-r-2 border-b-2 border-[#D4AF37] rotate-45 pointer-events-none z-20" 
              />
            )}

            {/* Inner Content Container with rounded-2xl overflow-hidden */}
            <div className="w-full h-full flex flex-col overflow-hidden rounded-[14px]">
              {/* Header: Warm Light Golden/Ivory (no dark background) */}
              <div className="relative bg-gradient-to-r from-[#FFF8E7] via-[#FFFDF7] to-[#FFF4DE] border-b-2 border-[#D4AF37]/40 p-3 sm:p-3.5 shrink-0">
                <button
                  onClick={() => {
                    setSelectedNodeData(null);
                    setPopupPosition(null);
                  }}
                  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-[#7B1113]/10 hover:bg-[#7B1113]/25 text-[#7B1113] flex items-center justify-center transition-colors cursor-pointer"
                  title="Close"
                >
                  <X className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3 pr-6">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#FFD54F] via-[#FF8F00] to-[#E65100] border-2 border-[#D4AF37] shadow-sm shrink-0 overflow-hidden flex items-center justify-center">
                    {selectedNodeData.image ? (
                      <img 
                        src={selectedNodeData.image} 
                        alt={selectedNodeData.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-[#FFF8E7] flex items-center justify-center text-xl font-bold text-[#7B1113]">
                        ॐ
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    {selectedNodeData.canto && (
                      <span className="inline-block px-2 py-0.2 rounded-full bg-[#D4AF37]/20 text-[#7B1113] text-[9.5px] font-bold mb-0.5 border border-[#D4AF37]/40">
                        {selectedNodeData.canto}
                      </span>
                    )}
                    <h3 className="text-base sm:text-lg font-black font-telugu-serif text-[#7B1113] leading-tight truncate">
                      {selectedNodeData.name}
                    </h3>
                    <p className="text-[11px] font-bold text-[#B71C1C] truncate">
                      {selectedNodeData.nameEn}
                    </p>
                    {selectedNodeData.title && (
                      <p className="text-[10px] text-[#5D4037] font-medium truncate mt-0.5">
                        {selectedNodeData.title}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Content: Clean Warm & Compact */}
              <div className="p-3 sm:p-3.5 overflow-y-auto space-y-2.5 text-[#3E0A0C] text-xs flex-1">
                {/* Relations Box */}
                {(selectedNodeData.parents?.length || selectedNodeData.spouse || selectedNodeData.children?.length) && (
                  <div className="space-y-1 bg-[#FFF8E7] p-2 rounded-xl border border-[#D4AF37]/40 text-[11px]">
                    {selectedNodeData.parents && selectedNodeData.parents.length > 0 && (
                      <div>
                        <span className="font-bold text-[#7B1113]">మూలము / తల్లిదండ్రులు: </span>
                        <span className="text-[#5D4037]">{selectedNodeData.parents.join(', ')}</span>
                      </div>
                    )}
                    {selectedNodeData.spouse && (
                      <div>
                        <span className="font-bold text-[#7B1113]">సహధర్మచారిణి / భర్త: </span>
                        <span className="text-[#5D4037]">{selectedNodeData.spouse}</span>
                      </div>
                    )}
                    {selectedNodeData.children && selectedNodeData.children.length > 0 && (
                      <div>
                        <span className="font-bold text-[#7B1113]">ముఖ్య సంతతి: </span>
                        <span className="text-[#5D4037]">{selectedNodeData.children.join(', ')}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Telugu Context */}
                {selectedNodeData.description && (
                  <div>
                    <h4 className="text-[11px] font-bold text-[#7B1113] flex items-center gap-1 mb-1 font-telugu-serif">
                      <BookOpen className="w-3 h-3 text-[#D84315]" />
                      శ్రీమద్భాగవత పురాణ గాథ & విశిష్టత
                    </h4>
                    <p className="text-xs leading-relaxed text-[#4E342E] bg-white p-2.5 rounded-lg border border-[#E8DFC8]">
                      {selectedNodeData.description}
                    </p>
                  </div>
                )}

                {/* English Description */}
                {selectedNodeData.descriptionEn && (
                  <div>
                    <h4 className="text-[10px] font-bold text-[#5D4037] uppercase tracking-wider mb-0.5">
                      Scriptural Significance in English
                    </h4>
                    <p className="text-[11px] leading-relaxed text-[#5D4037] bg-[#FAF7F0] p-2.5 rounded-lg border border-[#E0D7C6]">
                      {selectedNodeData.descriptionEn}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-2 sm:p-2.5 bg-[#FAF7F0] border-t border-[#D4AF37]/30 flex justify-end shrink-0">
                <button
                  onClick={() => {
                    setSelectedNodeData(null);
                    setPopupPosition(null);
                  }}
                  className="px-3.5 py-1 rounded-md bg-[#7B1113] hover:bg-[#8E1C1E] text-[#FFE57F] text-xs font-bold transition-colors cursor-pointer shadow-xs"
                >
                  ముగించు (Close)
                </button>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}

      {/* ============================================================ */}
      {/* 4. ORIGINAL POSTER LIGHTBOX MODAL                             */}
      {/* ============================================================ */}
      {isPosterModalOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95 animate-in fade-in duration-200">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#2B0608] to-[#120203] border-b border-[#D4AF37]/50 text-white shrink-0">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#FFD54F]" />
              <div>
                <h3 className="font-bold text-sm sm:text-base font-telugu-serif text-[#FFE57F]">
                  మూల శ్రీమద్భాగవత వంశవృక్ష పటం (Original Chart)
                </h3>
                <p className="text-[11px] text-white/70">
                  The Srimad Bhagavatam Family Tree • High Resolution Master Copy
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPosterZoom(prev => Math.min(prev + 0.25, 3))}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFE57F] transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={() => setPosterZoom(prev => Math.max(prev - 0.25, 0.5))}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFE57F] transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={() => setPosterZoom(1)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#FFE57F] transition-colors"
                title="Reset Zoom"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-[#FFE57F] px-2">
                {Math.round(posterZoom * 100)}%
              </span>
              <button
                onClick={() => setIsPosterModalOpen(false)}
                className="p-2 ml-2 rounded-lg bg-[#B71C1C] hover:bg-[#D32F2F] text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto p-4 flex items-center justify-center">
            <div 
              style={{ transform: `scale(${posterZoom})`, transformOrigin: 'top center', transition: 'transform 0.2s ease-out' }}
              className="max-w-4xl shadow-2xl rounded-xl overflow-hidden border-2 border-[#D4AF37]"
            >
              <img 
                src="./images/srimad_bhagavatam_tree_full.jpg" 
                alt="The Srimad Bhagavatam Family Tree Original"
                className="w-full h-auto block select-none"
              />
            </div>
          </div>

          <div className="p-2 bg-black/80 text-center text-[11px] text-[#FFE57F]/80 border-t border-white/10">
            సూచన: స్పష్టంగా అక్షరాలను చదవడానికి జూమ్ (Zoom In) బటన్ ఉపయోగించండి లేదా స్క్రోల్ చేయండి.
          </div>
        </div>
      )}
    </section>
  );
};
