import React, { useState } from 'react';
import { useMythology } from '../../context/MythologyContext';
import type { MythologicalCharacter } from '../../types/mythology';
import { 
  Settings, 
  X, 
  Plus, 
  Edit3, 
  Trash2, 
  Save, 
  RotateCcw, 
  Download, 
  Upload, 
  Check, 
  AlertCircle 
} from 'lucide-react';

export const AdminCmsModal: React.FC = () => {
  const { 
    characters, 
    isAdminOpen, 
    setIsAdminOpen, 
    addCharacter, 
    updateCharacter, 
    deleteCharacter, 
    resetToDefaults,
    exportDataJson,
    importDataJson
  } = useMythology();

  const [activeTab, setActiveTab] = useState<'list' | 'edit' | 'import_export'>('list');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form State for Adding/Editing Character
  const [formData, setFormData] = useState<Partial<MythologicalCharacter>>({
    id: '',
    name: '',
    altNames: [],
    title: '',
    category: 'prajapati',
    generation: 2,
    vamsam: 'బ్రహ్మ వంశము',
    fatherName: '',
    motherName: '',
    spouseNames: [],
    childrenNames: [],
    intro: '',
    birthStory: '',
    bhagavatamNarrative: '',
    significance: '',
    icon: '✨',
    scripture: {
      skandha: 'చతుర్థ స్కంధము',
      adhyaya: '1వ అధ్యాయము',
      slokaPadyam: '',
      pothanaVerse: '',
      verseMeaning: '',
      teluguBhagavatamUrl: 'https://telugubhagavatam.org/?Details&Branch=vamsa_vrukshalu&Fruit=Daksha%20Prajapathi%20-%20Prasuthi#VV_chaturmukha',
      sourceConfidence: 'ప్రమాణ బద్ధము (భాగవత మూలము)'
    },
    keyEvents: [],
    relatedPersonIds: []
  });

  const [altNamesInput, setAltNamesInput] = useState('');
  const [spouseInput, setSpouseInput] = useState('');
  const [childrenInput, setChildrenInput] = useState('');
  const [importJsonText, setImportJsonText] = useState('');

  const startEdit = (char: MythologicalCharacter) => {
    setEditingId(char.id);
    setFormData({ ...char });
    setAltNamesInput(char.altNames.join(', '));
    setSpouseInput(char.spouseNames.join(', '));
    setChildrenInput(char.childrenNames.join(', '));
    setActiveTab('edit');
  };

  const startAddNew = () => {
    const newId = 'char-' + Date.now();
    setEditingId(null);
    setFormData({
      id: newId,
      name: '',
      altNames: [],
      title: '',
      category: 'descendant',
      generation: 4,
      vamsam: 'దక్ష వంశము',
      fatherName: 'దక్ష ప్రజాపతి',
      motherName: 'ప్రసూతి దేవి',
      spouseNames: [],
      childrenNames: [],
      intro: '',
      birthStory: '',
      bhagavatamNarrative: '',
      significance: '',
      icon: '🌸',
      scripture: {
        skandha: 'చతుర్థ స్కంధము',
        adhyaya: '1వ అధ్యాయము',
        teluguBhagavatamUrl: 'https://telugubhagavatam.org/?Details&Branch=vamsa_vrukshalu&Fruit=Daksha%20Prajapathi%20-%20Prasuthi#VV_chaturmukha',
        sourceConfidence: 'ప్రమాణ బద్ధము (భాగవత మూలము)'
      },
      keyEvents: [],
      relatedPersonIds: ['daksha-prajapati', 'prasuti']
    });
    setAltNamesInput('');
    setSpouseInput('');
    setChildrenInput('');
    setActiveTab('edit');
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name?.trim()) {
      setErrorMsg('దయచేసి పాత్ర పేరును నమోదు చేయండి.');
      return;
    }

    const processedChar: MythologicalCharacter = {
      id: formData.id || 'char-' + Date.now(),
      name: formData.name.trim(),
      altNames: altNamesInput.split(',').map(s => s.trim()).filter(Boolean),
      title: formData.title || 'పురాణ పురుషుడు/స్త్రీ',
      category: formData.category || 'descendant',
      generation: Number(formData.generation) || 3,
      vamsam: formData.vamsam || 'బ్రహ్మ వంశము',
      fatherName: formData.fatherName?.trim() || undefined,
      motherName: formData.motherName?.trim() || undefined,
      spouseIds: [],
      spouseNames: spouseInput.split(',').map(s => s.trim()).filter(Boolean),
      childrenIds: [],
      childrenNames: childrenInput.split(',').map(s => s.trim()).filter(Boolean),
      intro: formData.intro || '',
      birthStory: formData.birthStory || '',
      bhagavatamNarrative: formData.bhagavatamNarrative || '',
      significance: formData.significance || '',
      keyEvents: formData.keyEvents || [],
      scripture: formData.scripture || {
        skandha: 'చతుర్థ స్కంధము',
        adhyaya: '1వ అధ్యాయము',
        teluguBhagavatamUrl: 'https://telugubhagavatam.org/?Details&Branch=vamsa_vrukshalu&Fruit=Daksha%20Prajapathi%20-%20Prasuthi#VV_chaturmukha',
        sourceConfidence: 'ప్రమాణ బద్ధము (భాగవత మూలము)'
      },
      relatedPersonIds: formData.relatedPersonIds || [],
      icon: formData.icon || '🪷'
    };

    if (editingId) {
      updateCharacter(editingId, processedChar);
      setSuccessMsg(`"${processedChar.name}" వివరాలు విజయవంతంగా నవీకరించబడ్డాయి!`);
    } else {
      addCharacter(processedChar);
      setSuccessMsg(`కొత్త పాత్ర "${processedChar.name}" వంశవృక్షములో చేర్చబడింది!`);
    }

    setTimeout(() => {
      setSuccessMsg(null);
      setActiveTab('list');
    }, 1500);
  };

  const handleExport = () => {
    const jsonStr = exportDataJson();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pothana_bhagavatam_genealogy_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    if (!importJsonText.trim()) return;
    const ok = importDataJson(importJsonText);
    if (ok) {
      setSuccessMsg('వంశవృక్ష దత్తాంశం విజయవంతంగా దిగుమతి చేయబడింది!');
      setTimeout(() => {
        setSuccessMsg(null);
        setActiveTab('list');
      }, 1500);
    } else {
      setErrorMsg('సరైన JSON ఫార్మాట్ కాదు. దయచేసి పరిశీలించండి.');
    }
  };

  if (!isAdminOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#2C1810]/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37] shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#4A0012] via-[#7B1113] to-[#4A0012] text-[#FFE082] px-5 py-4 border-b-2 border-[#C99700] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Settings className="w-5 h-5 text-[#FFD54F]" />
            <div>
              <h3 className="text-base sm:text-lg font-bold font-telugu-serif text-[#FFF8E1]">
                కంటెంట్ నిర్వాహక పీఠము (Administrator CMS)
              </h3>
              <p className="text-xs text-[#FFE082]/80">
                పౌరాణిక పాత్రల చేరిక, మార్పులు, వంశ సంబంధాలు & భాగవత ఆధారాల నిర్వహణ
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAdminOpen(false)}
            className="w-8 h-8 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/25 text-[#FFE082] flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="bg-[#FAF7F0] px-5 py-2.5 border-b border-[#E8DCC4] flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('list')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                activeTab === 'list'
                  ? 'bg-[#7B1113] text-[#FFE082]'
                  : 'bg-[#FFFFFF] text-[#5D4037] border border-[#E8DCC4]'
              }`}
            >
              సమస్త పాత్రల జాబితా ({characters.length})
            </button>

            <button
              onClick={startAddNew}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1 ${
                activeTab === 'edit'
                  ? 'bg-[#7B1113] text-[#FFE082]'
                  : 'bg-[#D84315] text-white hover:bg-[#BF360C]'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>కొత్త పాత్రను చేర్చండి</span>
            </button>

            <button
              onClick={() => setActiveTab('import_export')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                activeTab === 'import_export'
                  ? 'bg-[#7B1113] text-[#FFE082]'
                  : 'bg-[#FFFFFF] text-[#5D4037] border border-[#E8DCC4]'
              }`}
            >
              ఎగుమతి / దిగుమతి (JSON)
            </button>
          </div>

          <button
            onClick={() => {
              if (window.confirm('మీరు నిజంగానే డేటాను మూల భాగవత స్థానానికి రీసెట్ చేయాలనుకుంటున్నారా?')) {
                resetToDefaults();
                setSuccessMsg('డేటా మూల స్థితికి రీసెట్ చేయబడింది!');
                setTimeout(() => setSuccessMsg(null), 1500);
              }
            }}
            className="px-2.5 py-1 rounded-lg bg-[#FAF7F0] hover:bg-[#FFEBEE] text-[#C62828] border border-[#FFCDD2] font-semibold flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>డిఫాల్ట్ పునరుద్ధరణ</span>
          </button>
        </div>

        {/* Notifications */}
        {successMsg && (
          <div className="mx-5 mt-3 p-3 rounded-xl bg-green-50 border border-green-300 text-green-800 text-xs flex items-center gap-2">
            <Check className="w-4 h-4 text-green-600" />
            <span>{successMsg}</span>
          </div>
        )}
        {errorMsg && (
          <div className="mx-5 mt-3 p-3 rounded-xl bg-red-50 border border-red-300 text-red-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Tab 1: Character List View */}
        {activeTab === 'list' && (
          <div className="flex-1 overflow-y-auto p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {characters.map(char => (
                <div
                  key={char.id}
                  className="bg-[#FAF7F0] p-3 rounded-xl border border-[#E8DCC4] flex items-center justify-between gap-2 shadow-2xs hover:border-[#D4AF37]"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-xl">{char.icon || '🪷'}</span>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-[#7B1113] truncate font-telugu-serif">
                        {char.name}
                      </h4>
                      <p className="text-[11px] text-[#5D4037] truncate">
                        {char.title}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => startEdit(char)}
                      className="p-1.5 rounded-lg bg-white hover:bg-[#FFE082] text-[#7B1113] border border-[#E8DCC4] cursor-pointer"
                      title="సవరించండి"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    {char.isCustom && (
                      <button
                        onClick={() => {
                          if (window.confirm(`"${char.name}" పాత్రను తొలగించాలనుకుంటున్నారా?`)) {
                            deleteCharacter(char.id);
                          }
                        }}
                        className="p-1.5 rounded-lg bg-white hover:bg-red-100 text-red-600 border border-[#E8DCC4] cursor-pointer"
                        title="తొలగించండి"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Edit / Add Character Form */}
        {activeTab === 'edit' && (
          <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="font-bold text-[#7B1113] block mb-1">
                  పాత్ర తెలుగు పేరు *
                </label>
                <input
                  type="text"
                  required
                  placeholder="ఉదా: దక్ష ప్రజాపతి, సతీదేవి"
                  value={formData.name || ''}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2 rounded-lg bg-[#FAF7F0] border border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D84315]"
                />
              </div>

              <div>
                <label className="font-bold text-[#7B1113] block mb-1">
                  బిరుదు / హోదా
                </label>
                <input
                  type="text"
                  placeholder="ఉదా: ప్రజాపతుల అధిపతి"
                  value={formData.title || ''}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  className="w-full p-2 rounded-lg bg-[#FAF7F0] border border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D84315]"
                />
              </div>

              <div>
                <label className="font-bold text-[#7B1113] block mb-1">
                  తరము (Generation)
                </label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={formData.generation ?? 3}
                  onChange={e => setFormData({ ...formData, generation: Number(e.target.value) })}
                  className="w-full p-2 rounded-lg bg-[#FAF7F0] border border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D84315]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="font-bold text-[#7B1113] block mb-1">
                  ఇతర పేర్లు (కామాలతో విభజించండి)
                </label>
                <input
                  type="text"
                  placeholder="ఉదా: అంగుష్ఠోద్భవుడు, ప్రజాపతీశ్వరుడు"
                  value={altNamesInput}
                  onChange={e => setAltNamesInput(e.target.value)}
                  className="w-full p-2 rounded-lg bg-[#FAF7F0] border border-[#E8DCC4] focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-[#7B1113] block mb-1">
                  వంశము
                </label>
                <input
                  type="text"
                  value={formData.vamsam || ''}
                  onChange={e => setFormData({ ...formData, vamsam: e.target.value })}
                  className="w-full p-2 rounded-lg bg-[#FAF7F0] border border-[#E8DCC4] focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-[#7B1113] block mb-1">
                  ఐకాన్ (Emoji)
                </label>
                <input
                  type="text"
                  value={formData.icon || '🪷'}
                  onChange={e => setFormData({ ...formData, icon: e.target.value })}
                  className="w-full p-2 rounded-lg bg-[#FAF7F0] border border-[#E8DCC4] focus:outline-none"
                />
              </div>
            </div>

            {/* Parents, Spouses, Children */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-[#FAF7F0] rounded-xl border border-[#E8DCC4]">
              <div>
                <label className="font-bold text-[#7B1113] block mb-1">తండ్రి పేరు</label>
                <input
                  type="text"
                  value={formData.fatherName || ''}
                  onChange={e => setFormData({ ...formData, fatherName: e.target.value })}
                  className="w-full p-2 rounded-lg bg-white border border-[#E8DCC4]"
                />
              </div>

              <div>
                <label className="font-bold text-[#7B1113] block mb-1">తల్లి పేరు</label>
                <input
                  type="text"
                  value={formData.motherName || ''}
                  onChange={e => setFormData({ ...formData, motherName: e.target.value })}
                  className="w-full p-2 rounded-lg bg-white border border-[#E8DCC4]"
                />
              </div>

              <div>
                <label className="font-bold text-[#7B1113] block mb-1">భార్య / భర్తల పేర్లు (కామాతో)</label>
                <input
                  type="text"
                  value={spouseInput}
                  onChange={e => setSpouseInput(e.target.value)}
                  className="w-full p-2 rounded-lg bg-white border border-[#E8DCC4]"
                />
              </div>

              <div>
                <label className="font-bold text-[#7B1113] block mb-1">సంతానము (కామాతో)</label>
                <input
                  type="text"
                  value={childrenInput}
                  onChange={e => setChildrenInput(e.target.value)}
                  className="w-full p-2 rounded-lg bg-white border border-[#E8DCC4]"
                />
              </div>
            </div>

            {/* Telugu Narratives */}
            <div>
              <label className="font-bold text-[#7B1113] block mb-1">సంక్షిప్త పరిచయం</label>
              <textarea
                rows={2}
                value={formData.intro || ''}
                onChange={e => setFormData({ ...formData, intro: e.target.value })}
                className="w-full p-2 rounded-lg bg-[#FAF7F0] border border-[#E8DCC4] focus:outline-none"
              />
            </div>

            <div>
              <label className="font-bold text-[#7B1113] block mb-1">జన్మ వృత్తాంతము</label>
              <textarea
                rows={2}
                value={formData.birthStory || ''}
                onChange={e => setFormData({ ...formData, birthStory: e.target.value })}
                className="w-full p-2 rounded-lg bg-[#FAF7F0] border border-[#E8DCC4] focus:outline-none"
              />
            </div>

            <div>
              <label className="font-bold text-[#7B1113] block mb-1">విస్తృత భాగవత కథనం</label>
              <textarea
                rows={3}
                value={formData.bhagavatamNarrative || ''}
                onChange={e => setFormData({ ...formData, bhagavatamNarrative: e.target.value })}
                className="w-full p-2 rounded-lg bg-[#FAF7F0] border border-[#E8DCC4] focus:outline-none"
              />
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-[#E8DCC4] flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveTab('list')}
                className="px-4 py-2 rounded-lg bg-[#FAF7F0] text-[#5D4037] border border-[#E8DCC4] font-semibold cursor-pointer"
              >
                రద్దు చేయండి
              </button>

              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-[#7B1113] hover:bg-[#5B0E10] text-[#FFE082] font-bold flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Save className="w-4 h-4" />
                <span>భద్రపరచండి (Save)</span>
              </button>
            </div>
          </form>
        )}

        {/* Tab 3: JSON Import & Export */}
        {activeTab === 'import_export' && (
          <div className="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
            <div className="p-4 rounded-xl bg-[#FFF9E6] border border-[#D4AF37]/50 space-y-2">
              <h4 className="text-sm font-bold text-[#7B1113]">
                దత్తాంశ ఎగుమతి (Export to JSON)
              </h4>
              <p className="text-[#5D4037]">
                ప్రస్తుత వంశవృక్ష దత్తాంశాన్ని పూర్తిగా కంప్యూటర్‌లో బ్యాకప్ చేసుకొనుటకు డౌన్‌లోడ్ చేయవచ్చు.
              </p>
              <button
                onClick={handleExport}
                className="px-4 py-2 rounded-lg bg-[#7B1113] hover:bg-[#5B0E10] text-[#FFE082] font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>JSON ఫైల్‌ను డౌన్‌లోడ్ చేసుకోండి</span>
              </button>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4] space-y-2">
              <h4 className="text-sm font-bold text-[#7B1113]">
                దత్తాంశ దిగుమతి (Import from JSON)
              </h4>
              <p className="text-[#5D4037]">
                సేవ్ చేయబడిన వంశవృక్ష JSON ఫైల్ కంటెంట్‌ను ఇక్కడ పేస్ట్ చేసి సేవ్ చేయండి.
              </p>
              <textarea
                rows={6}
                placeholder="[ { id: '...', name: '...' } ]"
                value={importJsonText}
                onChange={e => setImportJsonText(e.target.value)}
                className="w-full p-2.5 rounded-lg bg-white border border-[#E8DCC4] font-mono text-[11px]"
              />
              <button
                onClick={handleImport}
                className="px-4 py-2 rounded-lg bg-[#D84315] hover:bg-[#BF360C] text-white font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>JSON దిగుమతి చేయండి</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
