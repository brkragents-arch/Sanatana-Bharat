import React, { useState, useMemo } from 'react';
import { useMythology } from '../context/MythologyContext';
import { Search, X, ArrowRight, Filter } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { 
    characters, 
    isSearchOpen, 
    setIsSearchOpen, 
    selectCharacter 
  } = useMythology();

  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all'); // all, name, vamsam, parent, spouse, children, event

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return characters.filter(char => {
      if (filterType === 'name') {
        return char.name.toLowerCase().includes(q) || char.altNames.some(a => a.toLowerCase().includes(q));
      }
      if (filterType === 'vamsam') {
        return char.vamsam.toLowerCase().includes(q);
      }
      if (filterType === 'parent') {
        return (char.fatherName && char.fatherName.toLowerCase().includes(q)) ||
               (char.motherName && char.motherName.toLowerCase().includes(q));
      }
      if (filterType === 'spouse') {
        return char.spouseNames.some(sp => sp.toLowerCase().includes(q));
      }
      if (filterType === 'children') {
        return char.childrenNames.some(ch => ch.toLowerCase().includes(q));
      }
      if (filterType === 'event') {
        return char.keyEvents.some(ev => ev.toLowerCase().includes(q)) ||
               char.bhagavatamNarrative.toLowerCase().includes(q);
      }

      // Default: match all fields
      return (
        char.name.toLowerCase().includes(q) ||
        char.altNames.some(a => a.toLowerCase().includes(q)) ||
        char.title.toLowerCase().includes(q) ||
        char.vamsam.toLowerCase().includes(q) ||
        (char.fatherName && char.fatherName.toLowerCase().includes(q)) ||
        (char.motherName && char.motherName.toLowerCase().includes(q)) ||
        char.spouseNames.some(sp => sp.toLowerCase().includes(q)) ||
        char.childrenNames.some(ch => ch.toLowerCase().includes(q)) ||
        char.intro.toLowerCase().includes(q) ||
        char.keyEvents.some(ev => ev.toLowerCase().includes(q))
      );
    });
  }, [characters, query, filterType]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#2C1810]/60 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24 animate-in fade-in">
      <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37] shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Modal Search Header */}
        <div className="bg-[#FAF7F0] p-4 border-b border-[#E8DCC4] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1">
            <Search className="w-5 h-5 text-[#D84315] shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="తెలుగులో శోధించండి (ఉదా: దక్షుడు, సతీదేవి, నరనారాయణ, మరీచి, ప్రసూతి)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent border-none text-sm sm:text-base text-[#2C1810] focus:outline-none placeholder-[#5D4037]/60 font-medium"
            />
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="w-8 h-8 rounded-full bg-[#FFFFFF] hover:bg-[#F4EEDF] text-[#5D4037] flex items-center justify-center border border-[#E8DCC4] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Type Pills */}
        <div className="px-4 py-2 bg-[#FFFDF7] border-b border-[#E8DCC4] flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="font-bold text-[#7B1113] flex items-center gap-1 shrink-0">
            <Filter className="w-3 h-3" />
            <span>శోధన విభాగము:</span>
          </span>
          {[
            { id: 'all', label: 'సమగ్ర శోధన' },
            { id: 'name', label: 'వ్యక్తి పేరు' },
            { id: 'vamsam', label: 'వంశము' },
            { id: 'parent', label: 'తల్లిదండ్రులు' },
            { id: 'spouse', label: 'భార్య / భర్త' },
            { id: 'children', label: 'సంతానము' },
            { id: 'event', label: 'పురాణ సంఘటన' }
          ].map(p => (
            <button
              key={p.id}
              onClick={() => setFilterType(p.id)}
              className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-all cursor-pointer font-semibold ${
                filterType === p.id
                  ? 'bg-[#7B1113] text-[#FFE082]'
                  : 'bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#5D4037] border border-[#E8DCC4]'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {searchResults.map(char => (
            <div
              key={char.id}
              onClick={() => {
                selectCharacter(char.id, true);
                setIsSearchOpen(false);
              }}
              className="p-3 rounded-xl bg-[#FAF7F0] hover:bg-[#FFF8E1] border border-[#E8DCC4] hover:border-[#D84315] cursor-pointer transition-all flex items-center justify-between gap-3 group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-[#FFFFFF] border border-[#D4AF37] flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
                  {char.icon || '🪷'}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-[#7B1113] truncate font-telugu-serif group-hover:text-[#D84315]">
                      {char.name}
                    </h4>
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#FFFFFF] text-[#5D4037] border border-[#E8DCC4]">
                      {char.vamsam}
                    </span>
                  </div>
                  <p className="text-xs text-[#5D4037] truncate mt-0.5">
                    {char.title}
                  </p>
                  {(char.fatherName || char.spouseNames.length > 0) && (
                    <div className="text-[11px] text-[#5D4037]/80 truncate mt-0.5">
                      {char.fatherName && <span>తండ్రి: {char.fatherName} • </span>}
                      {char.spouseNames.length > 0 && <span>భార్య/భర్త: {char.spouseNames.join(', ')}</span>}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs text-[#D84315] font-semibold shrink-0">
                <span>చూడండి</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}

          {query.trim() && searchResults.length === 0 && (
            <div className="text-center py-10 text-[#5D4037]">
              <p className="text-sm font-medium">
                "{query}" తో సరిపోలిన పాత్రలు ఏవీ కనుగొనబడలేదు.
              </p>
              <p className="text-xs text-[#5D4037]/70 mt-1">
                దయచేసి మరొక పేరు లేదా పదాన్ని ప్రయత్నించండి.
              </p>
            </div>
          )}

          {!query.trim() && (
            <div className="text-center py-8 text-[#5D4037]">
              <p className="text-xs font-semibold text-[#7B1113] uppercase tracking-wider mb-2">
                సూచించిన ప్రముఖ శోధనలు:
              </p>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {['దక్ష ప్రజాపతి', 'ప్రసూతి', 'సతీదేవి', 'నరనారాయణ', 'మరీచి', 'స్వాయంభువ మనువు', 'అగ్నిదేవుడు', 'శ్రద్ధ'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1 rounded-full bg-[#FAF7F0] hover:bg-[#FFE082] text-xs text-[#7B1113] font-semibold border border-[#D4AF37] cursor-pointer"
                  >
                    ✦ {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
