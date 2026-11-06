import React, { useState } from 'react';
import { SCRIPTURE_VERSES_LIBRARY } from '../../data/scriptureVersesData';
import { BookOpen, Search, ExternalLink, Copy, Check } from 'lucide-react';

export const ScriptureLibraryView: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');
  const [activeSkandha, setActiveSkandha] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredVerses = SCRIPTURE_VERSES_LIBRARY.filter(verse => {
    const matchesSkandha = activeSkandha === 'all' || verse.skandha.includes(activeSkandha);
    const matchesSearch = !filterQuery || (
      verse.topic.toLowerCase().includes(filterQuery.toLowerCase()) ||
      verse.teluguVerse.toLowerCase().includes(filterQuery.toLowerCase()) ||
      verse.taatparyam.toLowerCase().includes(filterQuery.toLowerCase())
    );
    return matchesSkandha && matchesSearch;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex flex-col bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] shadow-lg overflow-hidden min-h-[750px]">
      {/* Header */}
      <div className="bg-[#FFFFFF] px-4 py-4 border-b border-[#E8DCC4] flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-[#FFF8E1] to-[#FFE082] border border-[#D4AF37]">
            <BookOpen className="w-5 h-5 text-[#7B1113]" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif">
              పోతన తెలుగు భాగవత పురాణ ఆధారాలు & పద్య రత్న భాండాగారము
            </h3>
            <p className="text-xs text-[#5D4037]">
              మూల గ్రంథ సూచనలు, పద్యములు, ప్రతిపదార్థ తాత్పర్యములు మరియు అధికారిక లింకులు
            </p>
          </div>
        </div>

        {/* Primary Reference Badge */}
        <a
          href="https://telugubhagavatam.org/?Details&Branch=vamsa_vrukshalu&Fruit=Daksha%20Prajapathi%20-%20Prasuthi#VV_chaturmukha"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-1.5 rounded-full bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
        >
          <span>telugubhagavatam.org మూల పత్రం</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Filter and Search Bar */}
      <div className="px-4 sm:px-6 py-3 bg-[#FFFFFF] border-b border-[#E8DCC4] flex items-center justify-between flex-wrap gap-3">
        {/* Skandha Filters */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-bold text-[#7B1113] mr-1">స్కంధములు:</span>
          <button
            onClick={() => setActiveSkandha('all')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeSkandha === 'all'
                ? 'bg-[#7B1113] text-[#FFE082]'
                : 'bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#5D4037] border border-[#E8DCC4]'
            }`}
          >
            అన్ని పద్యాలు
          </button>
          <button
            onClick={() => setActiveSkandha('తృతీయ')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeSkandha === 'తృతీయ'
                ? 'bg-[#7B1113] text-[#FFE082]'
                : 'bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#5D4037] border border-[#E8DCC4]'
            }`}
          >
            తృతీయ స్కంధము (సృష్టి & బ్రహ్మోద్భవము)
          </button>
          <button
            onClick={() => setActiveSkandha('చతుర్థ')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeSkandha === 'చతుర్థ'
                ? 'bg-[#7B1113] text-[#FFE082]'
                : 'bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#5D4037] border border-[#E8DCC4]'
            }`}
          >
            చతుర్థ స్కంధము (దక్ష ప్రజాపతి వంశము)
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-[#5D4037] absolute left-2.5 top-2.5" />
          <input
            type="text"
            placeholder="పద్యాలలో వెతకండి (ఉదా: నాభి, అంగుష్ఠము, నరనారాయణ)..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="pl-8 pr-3 py-1 text-xs rounded-full bg-[#FAF7F0] border border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D84315] w-64"
          />
        </div>
      </div>

      {/* Verses Cards List */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto max-h-[750px] space-y-6">
        {filteredVerses.map((entry) => (
          <div
            key={entry.id}
            className="bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37] p-5 shadow-sm hover:shadow-md transition-shadow relative"
          >
            {/* Top Info Strip */}
            <div className="flex items-center justify-between gap-2 border-b border-[#F0E6D2] pb-3 mb-3 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37] text-xs font-bold">
                  {entry.skandha}
                </span>
                <span className="text-xs font-semibold text-[#5D4037]">
                  {entry.adhyaya}
                </span>
                <span className="text-xs text-[#D84315] font-semibold">
                  • {entry.verseType}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(entry.id, entry.teluguVerse)}
                  className="px-2.5 py-1 rounded-md bg-[#FAF7F0] hover:bg-[#F4EEDF] border border-[#E8DCC4] text-[11px] font-semibold text-[#7B1113] flex items-center gap-1 cursor-pointer"
                  title="పద్యాన్ని కాపీ చేయండి"
                >
                  {copiedId === entry.id ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedId === entry.id ? 'కాపీ అయింది!' : 'పద్యం కాపీ'}</span>
                </button>
                <a
                  href={entry.teluguBhagavatamRefUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#D84315] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>మూలం చూడండి</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Verse Topic Heading */}
            <h4 className="text-base font-bold text-[#7B1113] font-telugu-serif mb-3">
              {entry.topic}
            </h4>

            {/* Pothana Telugu Verse in Sacred Traditional Block */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#FFF9E6] via-[#FFFDF7] to-[#FFF9E6] border-l-4 border-[#7B1113] my-3">
              <pre className="font-telugu-serif text-sm sm:text-base text-[#4A0012] leading-relaxed whitespace-pre-wrap font-medium">
                {entry.teluguVerse}
              </pre>
            </div>

            {/* Word Meaning */}
            <div className="mt-3 p-3 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4] text-xs space-y-1">
              <span className="font-bold text-[#7B1113] block uppercase tracking-wider">
                ప్రతిపదార్థ సంగ్రహము:
              </span>
              <p className="text-[#5D4037] leading-relaxed">
                {entry.wordMeaning}
              </p>
            </div>

            {/* Taatparyam */}
            <div className="mt-3 text-xs sm:text-sm text-[#2C1810] space-y-1">
              <span className="font-bold text-[#D84315] block uppercase tracking-wider">
                భావము / తాత్పర్యము:
              </span>
              <p className="leading-relaxed text-[#5D4037]">
                {entry.taatparyam}
              </p>
            </div>
          </div>
        ))}

        {filteredVerses.length === 0 && (
          <div className="text-center py-12 text-[#5D4037]">
            <p className="text-sm">ఎటువంటి పద్యాలు కనుగొనబడలేదు.</p>
          </div>
        )}
      </div>
    </div>
  );
};
