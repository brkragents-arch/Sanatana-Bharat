import React, { useState } from 'react';
import { useMythology } from '../../context/MythologyContext';
import { 
  Users, 
  Heart, 
  ChevronDown, 
  ChevronRight, 
  BookOpen 
} from 'lucide-react';

export const DakshaPrasutiSection: React.FC = () => {
  const { selectCharacter } = useMythology();

  // Active filter for spouse categories:
  // all | dharma | agni | pitru | shiva
  const [spouseFilter, setSpouseFilter] = useState<string>('all');
  const [expandedDaughters, setExpandedDaughters] = useState<Record<string, boolean>>({
    'murti': true,
    'sati-devi': true,
    'swaha': true,
    'swadha': true
  });

  const toggleDaughter = (id: string) => {
    setExpandedDaughters(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    daughtersList.forEach(d => { allExpanded[d.id] = true; });
    setExpandedDaughters(allExpanded);
  };

  const collapseAll = () => {
    setExpandedDaughters({});
  };

  // Structured Data for all 16 daughters of Daksha-Prasuti as in Pothana Bhagavatam Canto 4 Chapter 1
  const daughtersList = [
    // 13 MARRIED TO DHARMA:
    {
      id: 'shraddha',
      name: 'శ్రద్ధా దేవి',
      husband: 'ధర్మదేవుడు',
      husbandVamsa: 'ధర్మ వంశము (బ్రహ్మ వక్షోద్భవుడు)',
      group: 'dharma',
      children: 'శుభుడు (సమస్త శుభకార్య ప్రదాత)',
      meaning: 'విశ్వాస రూపము',
      significance: 'శ్రద్ధతో కూడిన ధర్మాచరణ వలన సకల కార్యములు శుభప్రదముగా నెరవేరును.',
      events: ['ధర్మదేవునితో ప్రథమ వివాహము', 'శుభుని జననము'],
      cantoRef: 'చతుర్థ స్కంధము – 1వ అధ్యాయము (శ్లోకములు 49-50)',
      icon: '🙏'
    },
    {
      id: 'maitri',
      name: 'మైత్రీ దేవి',
      husband: 'ధర్మదేవుడు',
      husbandVamsa: 'ధర్మ వంశము',
      group: 'dharma',
      children: 'ప్రసాదం (చిత్తప్రసాదము / శాంతి)',
      meaning: 'స్నేహ భావము',
      significance: 'మైత్రీ భావముతో ధర్మమును నడిపినప్పుడు లోకమునందు ప్రసాదము (చిత్తశాంతి) వెల్లివిరియును.',
      events: ['ధర్మదేవునితో వివాహము', 'ప్రసాదుని జననము'],
      cantoRef: 'చతుర్థ స్కంధము – 1వ అధ్యాయము',
      icon: '🤝'
    },
    {
      id: 'daya',
      name: 'దయా దేవి',
      husband: 'ధర్మదేవుడు',
      husbandVamsa: 'ధర్మ వంశము',
      group: 'dharma',
      children: 'అభయం (భయరాహిత్యము)',
      meaning: 'కరుణ / ఆర్తరక్షణ',
      significance: 'దయ ఉన్నచోట సకల ప్రాణులకు అభయము లభించును. భయము నశించును.',
      events: ['ధర్మదేవునితో వివాహము', 'అభయుని జననము'],
      cantoRef: 'చతుర్థ స్కంధము – 1వ అధ్యాయము',
      icon: '🕊️'
    },
    {
      id: 'shanti',
      name: 'శాంతి దేవి',
      husband: 'ధర్మదేవుడు',
      husbandVamsa: 'ధర్మ వంశము',
      group: 'dharma',
      children: 'సుఖం (నిజమైన ఆనందము)',
      meaning: 'ప్రశాంత చిత్తము',
      significance: 'శాంతి ఉన్న హృదయమునందే నిజమైన సుఖము నెలకొనును.',
      events: ['ధర్మదేవునితో వివాహము', 'సుఖుని జననము'],
      cantoRef: 'చతుర్థ స్కంధము – 1వ అధ్యాయము',
      icon: '☮️'
    },
    {
      id: 'tushti',
      name: 'తుష్టి దేవి',
      husband: 'ధర్మదేవుడు',
      husbandVamsa: 'ధర్మ వంశము',
      group: 'dharma',
      children: 'ముదం (సంతోషము / హర్షము)',
      meaning: 'సంతృప్తి',
      significance: 'లభించిన దానితో తృప్తి చెందు మనస్తత్వము వలన జీవితమున ముదము (హర్షము) కలుగును.',
      events: ['ధర్మదేవునితో వివాహము', 'ముదుని జననము'],
      cantoRef: 'చతుర్థ స్కంధము – 1వ అధ్యాయము',
      icon: '😊'
    },
    {
      id: 'pushti',
      name: 'పుష్టి దేవి',
      husband: 'ధర్మదేవుడు',
      husbandVamsa: 'ధర్మ వంశము',
      group: 'dharma',
      children: 'స్మయం (గర్వము / సమృద్ధి)',
      meaning: 'శారీరక, మానసిక పోషణ',
      significance: 'పోషణ మరియు బలము వలన సమృద్ధి, స్మయము ప్రాప్తించును.',
      events: ['ధర్మదేవునితో వివాహము'],
      cantoRef: 'చతుర్థ స్కంధము – 1వ అధ్యాయము',
      icon: '💪'
    },
    {
      id: 'kriya',
      name: 'క్రియా దేవి',
      husband: 'ధర్మదేవుడు',
      husbandVamsa: 'ధర్మ వంశము',
      group: 'dharma',
      children: 'యోగము మరియు దండము',
      meaning: 'సత్కర్మ ఆచరణ',
      significance: 'క్రియాశీలత వలన సాధకునకు యోగసిద్ధి, లోకమునకు న్యాయబద్ధమైన దండనీతి ఏర్పడును.',
      events: ['ధర్మదేవునితో వివాహము', 'యోగ-దండాల జననము'],
      cantoRef: 'చతుర్థ స్కంధము – 1వ అధ్యాయము',
      icon: '⚙️'
    },
    {
      id: 'unnati',
      name: 'ఉన్నతి దేవి',
      husband: 'ధర్మదేవుడు',
      husbandVamsa: 'ధర్మ వంశము',
      group: 'dharma',
      children: 'మహత్తు (దర్పం / ఔన్నత్యం)',
      meaning: 'అభ్యుదయము',
      significance: 'ధర్మాచరణతో సాధించే ఉన్నతి వలన వ్యక్తికి మహనీయమైన ఘనత ప్రాప్తించును.',
      events: ['ధర్మదేవునితో వివాహము', 'మహత్తు జననము'],
      cantoRef: 'చతుర్థ స్కంధము – 1వ అధ్యాయము',
      icon: '⛰️'
    },
    {
      id: 'buddhi',
      name: 'బుద్ధి దేవి',
      husband: 'ధర్మదేవుడు',
      husbandVamsa: 'ధర్మ వంశము',
      group: 'dharma',
      children: 'బోధుడు (వివేక జ్ఞానము)',
      meaning: 'వివేచన శక్తి',
      significance: 'సద్బుద్ధి వలన సత్యబోధ వికసించును.',
      events: ['ధర్మదేవునితో వివాహము', 'బోధుని జననము'],
      cantoRef: 'చతుర్థ స్కంధము – 1వ అధ్యాయము',
      icon: '💡'
    },
    {
      id: 'medha',
      name: 'మేధా దేవి',
      husband: 'ధర్మదేవుడు',
      husbandVamsa: 'ధర్మ వంశము',
      group: 'dharma',
      children: 'స్మృతి (జ్ఞాపక శక్తి / సంస్కారము)',
      meaning: 'ధారణా శక్తి',
      significance: 'శాస్త్ర జ్ఞానమును నిలుపుకొను మేధస్సు వలన స్మృతి పుట్టును.',
      events: ['ధర్మదేవునితో వివాహము', 'స్మృతి జననము'],
      cantoRef: 'చతుర్థ స్కంధము – 1వ అధ్యాయము',
      icon: '📖'
    },
    {
      id: 'titiksha',
      name: 'తితిక్షా దేవి',
      husband: 'ధర్మదేవుడు',
      husbandVamsa: 'ధర్మ వంశము',
      group: 'dharma',
      children: 'క్షేమం (రక్షణ / భద్రత)',
      meaning: 'సహనము / ఓర్పు',
      significance: 'కష్టసుఖాలను సమానంగా స్వీకరించు ఓర్పు ఉన్నవానికి సర్వదా క్షేమము కలుగును.',
      events: ['ధర్మదేవునితో వివాహము', 'క్షేముని జననము'],
      cantoRef: 'చతుర్థ స్కంధము – 1వ అధ్యాయము',
      icon: '🛡️'
    },
    {
      id: 'hri',
      name: 'హ్రీ దేవి',
      husband: 'ధర్మదేవుడు',
      husbandVamsa: 'ధర్మ వంశము',
      group: 'dharma',
      children: 'ప్రశ్రయుడు (వినయము)',
      meaning: 'సద్గుణ లజ్జ / వినమ్రత',
      significance: 'చెడు పనులకు సిగ్గుపడు మనస్తత్వము వలన వినయ సంపద కలుగును.',
      events: ['ధర్మదేవునితో వివాహము', 'ప్రశ్రయుని జననము'],
      cantoRef: 'చతుర్థ స్కంధము – 1వ అధ్యాయము',
      icon: '🪞'
    },
    {
      id: 'murti',
      name: 'మూర్తీ దేవి ⭐',
      husband: 'ధర్మదేవుడు',
      husbandVamsa: 'ధర్మ వంశము',
      group: 'dharma',
      children: 'శ్రీ నర-నారాయణ మహర్షులు (శ్రీమహావిష్ణువు సాక్షాత్ ప్రత్యక్షావతారాలు)',
      meaning: 'సర్వసద్గుణ మూర్తి',
      significance: 'సాక్షాత్ శ్రీహరి ఈమె గర్భమునందే నర-నారాయణులుగా జన్మించి బదరికాశ్రమములో తపస్సు చేసిరి. ద్వాపరమున కృష్ణార్జునులుగా అవతరించిరి.',
      events: [
        'ధర్మదేవునితో వివాహము',
        'శ్రీ నర-నారాయణుల దివ్యావతార జననము',
        'బదరికాశ్రమ తపఃస్థాపన',
        'ఊర్వశీ దివ్యసృష్టి'
      ],
      cantoRef: 'చతుర్థ స్కంధము – 1వ అధ్యాయము (శ్లోకములు 52-58)',
      icon: '🌟',
      isAvatar: true
    },

    // 14TH: SWAHA (అగ్నిదేవునికి)
    {
      id: 'swaha',
      name: 'స్వాహా దేవి 🔥',
      husband: 'అగ్నిదేవుడు (పావకుడు)',
      husbandVamsa: 'పావక / అగ్ని వంశము (బ్రహ్మ ముఖోద్భవుడు)',
      group: 'agni',
      children: 'పావకుడు, పవమానుడు, శుచి మరియు 49 మంది అగ్నిదేవతలు',
      meaning: 'యజ్ఞ హవిర్భాగ శక్తి',
      significance: 'ఈమె మంత్రము పలకనిదే దేవతలు యజ్ఞ హవిస్సులను స్వీకరించలేరు. సకల అగ్నుల ఉత్పత్తికి మాత.',
      events: ['అగ్నిదేవునితో వివాహము', 'పావక, పవమాన, శుచుల జననము', '49 అగ్నుల విస్తరణ'],
      cantoRef: 'చతుర్థ స్కంధము – 1వ అధ్యాయము (శ్లోకములు 60-62)',
      icon: '🔥',
      isAgni: true
    },

    // 15TH: SWADHA (పితృదేవతలకు)
    {
      id: 'swadha',
      name: 'స్వధా దేవి 🌾',
      husband: 'పితృదేవతలు (అగ్నిష్వాత్తులు, బర్హిషదులు)',
      husbandVamsa: 'పితృ వంశము',
      group: 'pitru',
      children: 'వయున మరియు ధారిణి (బ్రహ్మవాదినులు, వేదాంత విదుషులు)',
      meaning: 'పితృతర్పణ కవ్యశక్తి',
      significance: 'పితృదేవతలకు సమర్పించు పిండ ప్రదానములు, తర్పణములు స్వధాకారముతోనే ఫలించును.',
      events: ['పితృదేవతలతో వివాహము', 'వయున, ధారిణుల జననము'],
      cantoRef: 'చతుర్థ స్కంధము – 1వ అధ్యాయము (శ్లోకములు 63-64)',
      icon: '🌾',
      isPitru: true
    },

    // 16TH: SATI DEVI (పరమశివునికి)
    {
      id: 'sati-devi',
      name: 'సతీదేవి (దాక్షాయని) 🔱',
      husband: 'పరమశివుడు (రుద్రుడు / మహాదేవుడు)',
      husbandVamsa: 'ఈశ్వర తత్త్వము (లయకారకుడు)',
      group: 'shiva',
      children: '(సతీ రూపములో ప్రత్యక్ష సంతానము లేదు; తదుపరి పార్వతీదేవిగా పునర్జన్మించి గణపతి, సుబ్రహ్మణ్యులను కనెను)',
      meaning: 'ఆది పరాశక్తి అవతారము',
      significance: 'శివనిందను సహింపలేక దక్షాధ్వరమున యోగాగ్నియందు దేహత్యాగము చేసి, శక్తిపీఠాల ఆవిర్భావమునకు కారణమైన జగన్మాత.',
      events: [
        'పరమశివునితో వివాహము',
        'దక్షుని అహంకార పూరిత యజ్ఞమునకు వెళ్ళుట',
        'తండ్రి సభామధ్యమున పతినిందను ఖండించి యోగాగ్ని ప్రవేశము',
        'వీరభద్రుని సృష్టి – దక్షయజ్ఞ విధ్వంసము',
        'హిమవంతుని పుత్రికగా పార్వతీదేవిగా పునర్జన్మ'
      ],
      cantoRef: 'చతుర్థ స్కంధము – 2 నుండి 7వ అధ్యాయములు (దక్షయజ్ఞ ఘట్టము)',
      icon: '🔱',
      isShiva: true
    }
  ];

  const filteredDaughters = daughtersList.filter(d => {
    if (spouseFilter === 'all') return true;
    return d.group === spouseFilter;
  });

  return (
    <div className="flex flex-col bg-[#FAF7F0] rounded-2xl border-2 border-[#D4AF37] shadow-lg overflow-hidden min-h-[750px]">
      {/* Top Banner */}
      <div className="bg-[#FFFFFF] px-4 py-4 border-b border-[#E8DCC4] flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-[#FFF8E1] to-[#FFE082] border border-[#D4AF37]">
            <Users className="w-5 h-5 text-[#D84315]" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#7B1113] font-telugu-serif">
              దక్ష ప్రజాపతి – ప్రసూతి దేవి సంపూర్ణ వంశవృక్షము
            </h3>
            <p className="text-xs text-[#5D4037]">
              పదహారు మంది దివ్య పుత్రికలు, వారి భర్తలు, సంతానము మరియు తదుపరి తరాల విశేషాలు
            </p>
          </div>
        </div>

        {/* Marriage Statistics Badge */}
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="px-3 py-1 rounded-full bg-[#FFF8E1] text-[#7B1113] border border-[#D4AF37] font-bold">
            👑 దక్షుడు ➕ ప్రసూతి
          </span>
          <span className="px-3 py-1 rounded-full bg-[#D84315] text-white font-bold">
            16 మంది కన్యలు
          </span>
        </div>
      </div>

      {/* Main Couple Overview Card */}
      <div className="p-4 sm:p-6 bg-gradient-to-r from-[#FFFDF7] via-[#FFF9E6] to-[#FFFDF7] border-b border-[#E8DCC4]">
        <div className="max-w-4xl mx-auto bg-[#FFFFFF] p-5 rounded-2xl border-2 border-[#D4AF37] shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Groom: Daksha Prajapati */}
            <div 
              onClick={() => selectCharacter('daksha-prajapati', true)}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7F0] border border-[#D4AF37] hover:border-[#D84315] cursor-pointer flex-1 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFE082] border-2 border-[#7B1113] flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                👑
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#D84315] uppercase tracking-wider">వరుడు</span>
                <h4 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif group-hover:text-[#D84315]">
                  దక్ష ప్రజాపతి
                </h4>
                <p className="text-xs text-[#5D4037]">బ్రహ్మ కుడి బొటనవేలి ఉద్భవుడు • ప్రజాపతుల అధిపతి</p>
              </div>
            </div>

            {/* Sacred Marriage Knot */}
            <div className="flex flex-col items-center shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#D84315] text-white flex items-center justify-center shadow-md">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <span className="text-[10px] font-bold text-[#7B1113] mt-1 bg-[#FFF8E1] px-2 py-0.5 rounded-full border border-[#D4AF37]">
                పవిత్ర పాణిగ్రహణం
              </span>
            </div>

            {/* Bride: Prasuti Devi */}
            <div 
              onClick={() => selectCharacter('prasuti', true)}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7F0] border border-[#D4AF37] hover:border-[#D84315] cursor-pointer flex-1 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFD1DC] border-2 border-[#7B1113] flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                🌺
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#D84315] uppercase tracking-wider">వధువు</span>
                <h4 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif group-hover:text-[#D84315]">
                  ప్రసూతి దేవి
                </h4>
                <p className="text-xs text-[#5D4037]">స్వాయంభువ మనువు - శతరూపల మూడవ కుమార్తె</p>
              </div>
            </div>

          </div>

          <div className="mt-3 pt-3 border-t border-[#F0E6D2] text-center text-xs text-[#5D4037]">
            <strong>భాగవత ప్రమాణము:</strong> "ప్రసూతి యందు దక్షునకుం బదునారువురు కన్యకలు జనియించిరి..." (చతుర్థ స్కంధము 1వ అధ్యాయము).
          </div>
        </div>
      </div>

      {/* Spouse Category Filter Pills */}
      <div className="px-4 sm:px-6 py-3 bg-[#FFFFFF] border-b border-[#E8DCC4] flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-[#7B1113] mr-1">జామాతలు (అల్లుళ్ళు):</span>
          
          <button
            onClick={() => setSpouseFilter('all')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              spouseFilter === 'all'
                ? 'bg-[#7B1113] text-[#FFE082] shadow-xs'
                : 'bg-[#FAF7F0] hover:bg-[#F4EEDF] text-[#5D4037] border border-[#E8DCC4]'
            }`}
          >
            అన్ని సంబంధాలు (16)
          </button>

          <button
            onClick={() => setSpouseFilter('dharma')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              spouseFilter === 'dharma'
                ? 'bg-[#1976D2] text-white shadow-xs'
                : 'bg-[#FAF7F0] hover:bg-[#E3F2FD] text-[#1976D2] border border-[#BBDEFB]'
            }`}
          >
            ⚖️ ధర్మదేవుడు (13 పత్నులు)
          </button>

          <button
            onClick={() => setSpouseFilter('agni')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              spouseFilter === 'agni'
                ? 'bg-[#D84315] text-white shadow-xs'
                : 'bg-[#FAF7F0] hover:bg-[#FBE9E7] text-[#D84315] border border-[#FFCCBC]'
            }`}
          >
            🔥 అగ్నిదేవుడు (స్వాహాదేవి)
          </button>

          <button
            onClick={() => setSpouseFilter('pitru')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              spouseFilter === 'pitru'
                ? 'bg-[#5D4037] text-white shadow-xs'
                : 'bg-[#FAF7F0] hover:bg-[#EFEBE9] text-[#5D4037] border border-[#D7CCC8]'
            }`}
          >
            🌾 పితృదేవతలు (స్వధాదేవి)
          </button>

          <button
            onClick={() => setSpouseFilter('shiva')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              spouseFilter === 'shiva'
                ? 'bg-[#C62828] text-white shadow-xs'
                : 'bg-[#FAF7F0] hover:bg-[#FFEBEE] text-[#C62828] border border-[#FFCDD2]'
            }`}
          >
            🔱 పరమశివుడు (సతీదేవి)
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-xs">
          <button
            onClick={expandAll}
            className="px-2.5 py-1 rounded-md bg-[#FAF7F0] hover:bg-[#F4EEDF] border border-[#E8DCC4] text-[#5D4037] font-semibold cursor-pointer"
          >
            అన్నీ తెరవండి
          </button>
          <button
            onClick={collapseAll}
            className="px-2.5 py-1 rounded-md bg-[#FAF7F0] hover:bg-[#F4EEDF] border border-[#E8DCC4] text-[#5D4037] font-semibold cursor-pointer"
          >
            ముగించండి
          </button>
        </div>
      </div>

      {/* 16 Daughters Expandable Cards Grid */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto max-h-[750px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDaughters.map((d, index) => {
            const isExpanded = expandedDaughters[d.id];

            return (
              <div
                key={d.id}
                className={`bg-[#FFFFFF] rounded-2xl border-2 transition-all duration-200 overflow-hidden shadow-xs hover:shadow-md ${
                  d.isAvatar
                    ? 'border-[#D4AF37] ring-2 ring-[#FFD54F]/50 bg-gradient-to-b from-[#FFFDF7] to-[#FFF9E6]'
                    : d.isShiva
                    ? 'border-[#C62828]/50 bg-gradient-to-b from-[#FFFDF7] to-[#FFF5F5]'
                    : 'border-[#E8DCC4]'
                }`}
              >
                {/* Daughter Card Header */}
                <div
                  onClick={() => toggleDaughter(d.id)}
                  className="p-4 flex items-center justify-between cursor-pointer select-none bg-[#FFFDF7] hover:bg-[#FAF7F0] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#FFF8E1] border border-[#D4AF37] text-xs font-bold text-[#7B1113] flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-2xl">{d.icon}</span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm sm:text-base font-bold text-[#7B1113] font-telugu-serif">
                          {d.name}
                        </h4>
                        {d.isAvatar && (
                          <span className="text-[10px] px-2 py-0.2 rounded-full bg-[#D84315] text-white font-bold">
                            నరనారాయణ జనని
                          </span>
                        )}
                        {d.isShiva && (
                          <span className="text-[10px] px-2 py-0.2 rounded-full bg-[#C62828] text-white font-bold">
                            దాక్షాయని
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#5D4037] font-medium mt-0.5">
                        భర్త: <strong>{d.husband}</strong> ({d.meaning})
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#D84315] font-semibold hidden sm:inline">
                      {isExpanded ? 'కుదించు' : 'వివరాలు'}
                    </span>
                    {isExpanded ? <ChevronDown className="w-5 h-5 text-[#7B1113]" /> : <ChevronRight className="w-5 h-5 text-[#7B1113]" />}
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="p-4 border-t border-[#F0E6D2] space-y-3 bg-[#FFFFFF] text-xs sm:text-sm">
                    {/* Lineage & Husband Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2.5 rounded-xl bg-[#FAF7F0] border border-[#E8DCC4]">
                      <div>
                        <span className="text-[11px] font-bold text-[#7B1113] block">భర్త & వంశము:</span>
                        <span className="font-semibold text-[#2C1810]">{d.husband}</span>
                        <span className="text-[11px] text-[#5D4037] block mt-0.5">({d.husbandVamsa})</span>
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#7B1113] block">సంతానము:</span>
                        <span className="font-semibold text-[#D84315]">{d.children}</span>
                      </div>
                    </div>

                    {/* Significance */}
                    <div>
                      <span className="text-[11px] font-bold text-[#7B1113] uppercase">పౌరాణిక తత్త్వము:</span>
                      <p className="text-xs text-[#5D4037] mt-0.5 leading-relaxed">
                        {d.significance}
                      </p>
                    </div>

                    {/* Key Events */}
                    <div>
                      <span className="text-[11px] font-bold text-[#7B1113] uppercase">ముఖ్యమైన ఘట్టాలు:</span>
                      <ul className="mt-1 space-y-1">
                        {d.events.map((ev, i) => (
                          <li key={i} className="text-xs text-[#5D4037] flex items-start gap-1.5">
                            <span className="text-[#D84315] text-[10px] mt-0.5">✦</span>
                            <span>{ev}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Scripture Reference Link */}
                    <div className="pt-2 border-t border-[#F0E6D2] flex items-center justify-between flex-wrap gap-2">
                      <span className="text-[11px] text-[#5D4037] flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-[#C99700]" />
                        <span>ఆధారము: {d.cantoRef}</span>
                      </span>

                      <button
                        onClick={() => selectCharacter(d.id, true)}
                        className="px-3 py-1 rounded-lg bg-[#FFF8E1] hover:bg-[#FFE082] text-[#7B1113] border border-[#D4AF37] text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>సంపూర్ణ కథ & ఆధారము</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
