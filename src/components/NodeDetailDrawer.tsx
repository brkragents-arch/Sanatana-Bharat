import React from 'react';
import { useMythology } from '../context/MythologyContext';
import { VEDAS_DATA } from '../data/vedasData';
import { 
  X, 
  GitFork, 
  BookOpen, 
  ExternalLink, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';

export const NodeDetailDrawer: React.FC = () => {
  const { 
    selectedCharacter, 
    isDrawerOpen, 
    closeDrawer, 
    selectCharacter, 
    navigateToParent, 
    navigateToChildren,
    setViewMode,
    characters,
    language
  } = useMythology();

  if (!isDrawerOpen || !selectedCharacter) return null;

  const char = selectedCharacter;
  const isEn = language === 'en';
  const matchingVeda = VEDAS_DATA.find(v => v.charId === char.id);

  // Find related character objects
  const relatedChars = characters.filter(c => char.relatedPersonIds.includes(c.id));

  return (
    <aside 
      className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] lg:w-[540px] bg-[#FFFFFF] shadow-2xl border-l-3 border-[#D4AF37] flex flex-col transform transition-transform duration-300 ease-out animate-in slide-in-from-right"
    >
      {/* Drawer Header */}
      <div className="bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] px-5 py-4 border-b-2 border-[#C99700] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FFE082] to-[#FF8F00] text-[#7B1113] flex items-center justify-center text-2xl shadow-sm border border-[#FFF8E1]">
            {char.icon || '🪷'}
          </div>
          <div>
            <span className="text-[10px] text-[#FFE082]/90 uppercase font-semibold tracking-wider block">
              {isEn ? (char.titleEn || char.title) : char.title}
            </span>
            <h2 className="text-xl font-bold font-telugu-serif text-[#FFF8E1] leading-tight">
              {isEn ? (char.nameEn || char.name) : char.name}
            </h2>
            {isEn && char.nameEn && (
              <span className="text-xs text-[#FFE082]/80 font-medium">({char.name})</span>
            )}
          </div>
        </div>

        <button
          onClick={closeDrawer}
          className="w-8 h-8 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/25 text-[#FFE082] flex items-center justify-center transition-colors cursor-pointer"
          title={isEn ? 'Close' : 'మూసివేయండి'}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Drawer Body - The 10 Required Explanatory Sections */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5 text-[#2C1810]">
        
        {/* Quick Navigation Action Strip */}
        <div className="flex items-center gap-2 flex-wrap text-xs pb-3 border-b border-[#F0E6D2]">
          <button
            onClick={() => {
              setViewMode('tree');
              closeDrawer();
            }}
            className="px-2.5 py-1 rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#7B1113] border border-[#D4AF37] font-semibold flex items-center gap-1 cursor-pointer"
          >
            <GitFork className="w-3.5 h-3.5 text-[#D84315]" />
            <span>{isEn ? 'View in Family Tree' : 'ఈ వంశవృక్షంలో చూడండి'}</span>
          </button>

          {(char.fatherId || char.motherId) && (
            <button
              onClick={() => navigateToParent(char.id)}
              className="px-2.5 py-1 rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#5D4037] border border-[#E8DCC4] font-semibold flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isEn ? 'Go to Parents' : 'తల్లిదండ్రుల వద్దకు'}</span>
            </button>
          )}

          {char.childrenIds.length > 0 && (
            <button
              onClick={() => navigateToChildren(char.id)}
              className="px-2.5 py-1 rounded-lg bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#5D4037] border border-[#E8DCC4] font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>{isEn ? 'Show Children' : 'సంతానాన్ని చూపించండి'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 1. Name & Titles */}
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-[#7B1113] uppercase tracking-wide">
              {isEn ? '1. Name & Alternative Titles:' : '1. నామధేయము & బిరుదులు:'}
            </h3>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37] font-bold">
              {isEn ? `Generation ${char.generation}` : `తరము ${char.generation}`}
            </span>
          </div>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {(isEn && char.altNamesEn && char.altNamesEn.length > 0 ? char.altNamesEn : char.altNames).map((alt, i) => (
              <span key={i} className="text-xs px-2 py-0.5 rounded-md bg-[#FAF7F0] border border-[#E8DCC4] text-[#5D4037]">
                • {alt}
              </span>
            ))}
          </div>
        </div>

        {/* 2. Intro */}
        <div className="p-3 rounded-xl bg-[#FFFDF7] border border-[#D4AF37]/40 shadow-2xs">
          <h3 className="text-xs font-bold text-[#D84315] uppercase tracking-wider mb-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isEn ? '2. Brief Introduction:' : '2. సంక్షిప్త పరిచయం:'}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed">
            {isEn ? (char.introEn || char.intro) : char.intro}
          </p>
        </div>

        {/* 3. Birth Story */}
        <div>
          <h3 className="text-xs font-bold text-[#7B1113] uppercase tracking-wide mb-1">
            {isEn ? '3. Scriptural Origin & Birth Narrative:' : '3. పురాణ జన్మ వృత్తాంతము:'}
          </h3>
          <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed bg-[#FAF7F0] p-3 rounded-xl border border-[#E8DCC4]">
            {isEn ? (char.birthStoryEn || char.birthStory) : char.birthStory}
          </p>
        </div>

        {/* 4 & 5 & 6. Lineage: Parents, Spouses, Children */}
        <div className="p-3.5 rounded-xl bg-[#FFFFFF] border-2 border-[#E8DCC4] shadow-xs space-y-2.5">
          {/* 4. Parents */}
          <div>
            <span className="text-xs font-bold text-[#7B1113] block mb-0.5">
              {isEn ? '4. Parents (Lineage Origin):' : '4. తల్లిదండ్రులు:'}
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              {(char.fatherName || char.fatherNameEn) && (
                <span 
                  onClick={() => char.fatherId && selectCharacter(char.fatherId)}
                  className="px-2 py-1 rounded-md bg-[#FAF7F0] border border-[#D4AF37] text-[#7B1113] font-semibold cursor-pointer hover:bg-[#FFE082]"
                >
                  {isEn ? 'Father:' : 'తండ్రి:'} {isEn ? (char.fatherNameEn || char.fatherName) : char.fatherName}
                </span>
              )}
              {(char.motherName || char.motherNameEn) && (
                <span 
                  onClick={() => char.motherId && selectCharacter(char.motherId)}
                  className="px-2 py-1 rounded-md bg-[#FAF7F0] border border-[#D4AF37] text-[#7B1113] font-semibold cursor-pointer hover:bg-[#FFE082]"
                >
                  {isEn ? 'Mother:' : 'తల్లి:'} {isEn ? (char.motherNameEn || char.motherName) : char.motherName}
                </span>
              )}
              {!char.fatherName && !char.motherName && (
                <span className="text-xs text-[#5D4037] italic">
                  {isEn ? 'Svayambhu (Self-Manifested / Unborn)' : 'స్వయంభూవు / జన్మరహితుడు'}
                </span>
              )}
            </div>
          </div>

          {/* 5. Spouses */}
          {char.spouseNames.length > 0 && (
            <div className="pt-2 border-t border-[#F0E6D2]">
              <span className="text-xs font-bold text-[#7B1113] block mb-0.5">
                {isEn ? '5. Conjugal Relations (Spouse):' : '5. వివాహ సంబంధాలు (భార్య / భర్త):'}
              </span>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {(isEn && char.spouseNamesEn && char.spouseNamesEn.length > 0 ? char.spouseNamesEn : char.spouseNames).map((sp, i) => (
                  <span 
                    key={i} 
                    onClick={() => {
                      if (char.spouseIds[i]) selectCharacter(char.spouseIds[i]);
                    }}
                    className="px-2 py-0.5 rounded-md bg-[#FFF8E1] border border-[#D4AF37] text-[#D84315] font-semibold cursor-pointer hover:bg-[#FFD54F]"
                  >
                    💍 {sp}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 6. Children */}
          {char.childrenNames.length > 0 && (
            <div className="pt-2 border-t border-[#F0E6D2]">
              <span className="text-xs font-bold text-[#7B1113] block mb-0.5">
                {isEn ? `6. Descendants / Children (${char.childrenNames.length}):` : `6. సంతానము (${char.childrenNames.length}):`}
              </span>
              <div className="flex flex-wrap gap-1 text-xs">
                {(isEn && char.childrenNamesEn && char.childrenNamesEn.length > 0 ? char.childrenNamesEn : char.childrenNames).map((ch, i) => (
                  <span 
                    key={i} 
                    onClick={() => {
                      if (char.childrenIds[i]) selectCharacter(char.childrenIds[i]);
                    }}
                    className="px-2 py-0.5 rounded-md bg-[#FAF7F0] border border-[#E8DCC4] text-[#5D4037] cursor-pointer hover:bg-[#F4EEDF]"
                  >
                    • {ch}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 7. Vamsam */}
          <div className="pt-2 border-t border-[#F0E6D2]">
            <span className="text-xs font-bold text-[#7B1113] block mb-0.5">
              {isEn ? '7. Lineage / Vamsam:' : '7. వంశపరంపర:'}
            </span>
            <span className="text-xs text-[#5D4037] font-semibold">
              {isEn ? (char.vamsamEn || char.vamsam) : char.vamsam}
            </span>
          </div>
        </div>

        {/* Vedas Shakhas Preservation & Loss Card (if this is one of the 4 Vedas) */}
        {matchingVeda && matchingVeda.shakhaLossStats && (
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FFFDF7] to-[#FFF8E7] border-2 border-[#D4AF37] shadow-sm space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#D4AF37]/50 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">🏛️</span>
                <div>
                  <h4 className="text-xs font-bold text-[#7B1113] uppercase tracking-wider font-telugu-serif">
                    {isEn ? `${matchingVeda.title} Shakhas Preservation & Loss` : `${matchingVeda.titleTe} – శాఖల పరిరక్షణ & నష్ట విశ్లేషణ`}
                  </h4>
                  <span className="text-[10.5px] text-[#5D4037]">
                    {isEn ? `Compiled by Sage Veda Vyasa • Total: ${matchingVeda.shakhaLossStats.totalShakhas}` : `వేదవ్యాస మహర్షి క్రోడీకరణ • మొత్తం శాఖలు: ${matchingVeda.shakhaLossStats.totalShakhas}`}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#1B5E20] border border-[#A5D6A7] text-[10.5px] font-bold">
                  ✅ {matchingVeda.shakhaLossStats.availableShakhas}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#FFEBEE] text-[#B71C1C] border border-[#EF9A9A] text-[10.5px] font-bold">
                  ⚠️ {matchingVeda.shakhaLossStats.lostShakhas}
                </span>
              </div>
            </div>

            {/* Surviving Shakhas List */}
            <div className="p-2.5 rounded-xl bg-white border border-[#A5D6A7] text-xs space-y-1">
              <span className="text-[10.5px] font-bold text-[#2E7D32] block">
                🌿 {isEn ? 'Surviving Recensions Today:' : 'నేడు లభ్యమవుతున్న సజీవ శాఖలు:'}
              </span>
              <ul className="space-y-0.5 text-[#1B5E20] font-medium text-[11px]">
                {(isEn ? matchingVeda.shakhaLossStats.survivingNames : matchingVeda.shakhaLossStats.survivingNamesTe).map((sn, i) => (
                  <li key={i} className="flex items-start gap-1">
                    <span>✓</span>
                    <span>{sn}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4-Fold Structure */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10.5px] font-bold text-[#7B1113] uppercase tracking-wider block">
                📚 {isEn ? '4-Fold Structure per Shakha:' : 'ప్రతి శాఖలోని 4 ప్రధాన విభాగాలు:'}
              </span>
              <div className="grid grid-cols-2 gap-2 text-[10.5px]">
                <div className="p-2 rounded-lg bg-white border border-[#D4AF37]/40">
                  <strong className="text-[#7B1113] block">1. సంహిత:</strong>
                  <span className="text-[#4E342E]">{isEn ? matchingVeda.shakhaLossStats.structure.samhita : matchingVeda.shakhaLossStats.structure.samhitaTe}</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-[#D4AF37]/40">
                  <strong className="text-[#D84315] block">2. బ్రాహ్మణం:</strong>
                  <span className="text-[#4E342E]">{isEn ? matchingVeda.shakhaLossStats.structure.brahmana : matchingVeda.shakhaLossStats.structure.brahmanaTe}</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-[#D4AF37]/40">
                  <strong className="text-[#C2185B] block">3. అరణ్యకం:</strong>
                  <span className="text-[#4E342E]">{isEn ? matchingVeda.shakhaLossStats.structure.aranyaka : matchingVeda.shakhaLossStats.structure.aranyakaTe}</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-[#D4AF37]/40">
                  <strong className="text-[#2E7D32] block">4. ఉపనిషత్తు:</strong>
                  <span className="text-[#4E342E]">{isEn ? matchingVeda.shakhaLossStats.structure.upanishad : matchingVeda.shakhaLossStats.structure.upanishadTe}</span>
                </div>
              </div>
            </div>

            {/* Quick Link to Mind Map */}
            <button
              type="button"
              onClick={() => {
                closeDrawer();
                setViewMode('mindmap');
              }}
              className="w-full py-1.5 px-3 rounded-xl bg-[#7B1113] hover:bg-[#5C0D0E] text-[#FFE082] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>📜</span>
              <span>{isEn ? 'Explore All 4 Vedas & 1,180 Shakhas in Mind Map' : 'చతుర్వేదాలు & 1,180 శాఖల పూర్తి విశ్లేషణ తెరవండి'}</span>
            </button>
          </div>
        )}

        {/* 8. Detailed Narrative */}
        <div>
          <h3 className="text-xs font-bold text-[#7B1113] uppercase tracking-wide mb-1.5">
            {isEn ? '8. Detailed Scriptural Narrative:' : '8. విస్తృత భాగవత కథనం:'}
          </h3>
          <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed bg-[#FFFDF7] p-3.5 rounded-xl border border-[#D4AF37]/50 shadow-2xs whitespace-pre-line">
            {isEn ? (char.bhagavatamNarrativeEn || char.bhagavatamNarrative) : char.bhagavatamNarrative}
          </p>
        </div>

        {/* 9. Scripture Reference & Verse */}
        <div className="p-3.5 rounded-xl bg-[#FFF9E6] border-l-4 border-[#7B1113] shadow-xs space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xs font-bold text-[#7B1113] uppercase tracking-wider flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#D84315]" />
              <span>{isEn ? '9. Srimad Bhagavatam Source Citation:' : '9. భాగవత పురాణ ఆధారము:'}</span>
            </h3>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFFFFF] text-[#2E7D32] border border-[#2E7D32]/30 font-bold">
              {isEn ? (char.scripture.sourceConfidenceEn || 'Authentic Scriptural Source') : char.scripture.sourceConfidence}
            </span>
          </div>

          <div className="text-xs text-[#5D4037]">
            <strong>{isEn ? 'Citation:' : 'ఆధార స్థానము:'}</strong> {isEn ? `${char.scripture.skandhaEn || char.scripture.skandha}, ${char.scripture.adhyayaEn || char.scripture.adhyaya}` : `${char.scripture.skandha}, ${char.scripture.adhyaya}`}
          </div>

          {char.scripture.pothanaVerse && (
            <div className="mt-2 p-2.5 rounded-lg bg-[#FFFFFF] border border-[#D4AF37]/40">
              <pre className="font-telugu-serif text-xs text-[#4A0012] leading-relaxed whitespace-pre-wrap">
                {char.scripture.pothanaVerse}
              </pre>
            </div>
          )}

          {char.scripture.verseMeaning && (
            <p className="text-xs text-[#5D4037] italic mt-1">
              <strong>{isEn ? 'Meaning / Purport:' : 'భావము:'}</strong> {isEn ? (char.scripture.verseMeaningEn || char.scripture.verseMeaning) : char.scripture.verseMeaning}
            </p>
          )}

          <div className="pt-2 border-t border-[#D4AF37]/30 flex justify-end">
            <a
              href={char.scripture.teluguBhagavatamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#D84315] hover:underline flex items-center gap-1 font-bold"
            >
              <span>{isEn ? 'View at telugubhagavatam.org' : 'telugubhagavatam.org లో చూడండి'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 10. Related Characters */}
        {relatedChars.length > 0 && (
          <div>
            <h3 className="text-xs font-bold text-[#7B1113] uppercase tracking-wide mb-1.5">
              {isEn ? '10. Connected Characters in Lineage:' : '10. ఇతర అనుసంధానమైన వ్యక్తులు:'}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {relatedChars.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => selectCharacter(rel.id)}
                  className="p-2 rounded-lg bg-[#FAF7F0] hover:bg-[#FFF8E1] border border-[#E8DCC4] hover:border-[#D4AF37] cursor-pointer transition-all flex items-center gap-2 group"
                >
                  <span className="text-base group-hover:scale-110 transition-transform">
                    {rel.icon || '✦'}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h5 className="text-xs font-bold text-[#7B1113] truncate font-telugu-serif">
                      {isEn ? (rel.nameEn || rel.name) : rel.name}
                    </h5>
                    <p className="text-[10px] text-[#5D4037] truncate">
                      {isEn ? (rel.titleEn || rel.title) : rel.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Drawer Footer Actions */}
      <div className="bg-[#FAF7F0] p-4 border-t border-[#E8DCC4] flex items-center justify-between">
        <button
          onClick={closeDrawer}
          className="px-4 py-2 rounded-xl bg-[#FFFFFF] hover:bg-[#F4EEDF] text-[#5D4037] border border-[#E8DCC4] text-xs font-bold cursor-pointer"
        >
          {isEn ? 'Close Panel' : 'మూసివేయండి'}
        </button>

        <button
          onClick={() => {
            setViewMode('tree');
            closeDrawer();
          }}
          className="px-5 py-2 rounded-xl bg-[#7B1113] hover:bg-[#5B0E10] text-[#FFE082] text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
        >
          <GitFork className="w-4 h-4" />
          <span>{isEn ? 'Locate in Family Tree' : 'వంశవృక్షంలో స్థానం చూడండి'}</span>
        </button>
      </div>
    </aside>
  );
};
