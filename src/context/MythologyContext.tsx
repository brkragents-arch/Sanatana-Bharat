import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import type { MythologicalCharacter, ViewMode, AppLanguage } from '../types/mythology';
import { INITIAL_BHAGAVATAM_CHARACTERS } from '../data/bhagavatamData';

const LOCAL_STORAGE_KEY = 'bhagavatam_genealogy_characters_v1';
const LANGUAGE_KEY = 'bhagavatam_language_v1';

interface MythologyContextType {
  characters: MythologicalCharacter[];
  selectedCharacterId: string | null;
  selectedCharacter: MythologicalCharacter | undefined;
  viewMode: ViewMode;
  searchQuery: string;
  isDrawerOpen: boolean;
  isSearchOpen: boolean;
  isAdminOpen: boolean;
  isAdityasOpen: boolean;
  language: AppLanguage;
  breadcrumbs: string[]; // history of clicked character IDs
  highlightedNodeIds: Set<string>;
  
  // Navigation & View Actions
  selectCharacter: (id: string, openDrawer?: boolean) => void;
  closeDrawer: () => void;
  setViewMode: (mode: ViewMode) => void;
  setSearchQuery: (query: string) => void;
  setIsSearchOpen: (open: boolean) => void;
  setIsAdminOpen: (open: boolean) => void;
  setIsAdityasOpen: (open: boolean) => void;
  setLanguage: (lang: AppLanguage) => void;
  toggleLanguage: () => void;
  navigateToParent: (characterId: string) => void;
  navigateToChildren: (characterId: string) => void;
  navigateToRoot: () => void;

  // Ancestor / Descendant Tree Highlights
  getAncestors: (id: string) => string[];
  getDescendants: (id: string) => string[];

  // Admin CMS CRUD & Persistence
  addCharacter: (newChar: MythologicalCharacter) => void;
  updateCharacter: (id: string, updates: Partial<MythologicalCharacter>) => void;
  deleteCharacter: (id: string) => void;
  resetToDefaults: () => void;
  exportDataJson: () => string;
  importDataJson: (jsonStr: string) => boolean;
}

const MythologyContext = createContext<MythologyContextType | undefined>(undefined);

export const MythologyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [characters, setCharacters] = useState<MythologicalCharacter[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Could not parse saved genealogy data, falling back to default:', e);
    }
    return INITIAL_BHAGAVATAM_CHARACTERS;
  });

  const [language, setLanguageState] = useState<AppLanguage>(() => {
    try {
      const savedLang = localStorage.getItem(LANGUAGE_KEY);
      if (savedLang === 'en' || savedLang === 'te') return savedLang;
    } catch {}
    return 'te';
  });

  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>('chaturmukha-brahma');
  const [viewMode, setViewMode] = useState<ViewMode>('sanatana_chronology');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [isAdityasOpen, setIsAdityasOpen] = useState<boolean>(false);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>(['chaturmukha-brahma']);

  // Save characters to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(characters));
    } catch (e) {
      console.error('Failed to save characters to localStorage:', e);
    }
  }, [characters]);

  // Save language to localStorage
  const setLanguage = useCallback((lang: AppLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANGUAGE_KEY, lang);
    } catch {}
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => {
      const next = prev === 'te' ? 'en' : 'te';
      try {
        localStorage.setItem(LANGUAGE_KEY, next);
      } catch {}
      return next;
    });
  }, []);

  // Map for fast character lookups
  const characterMap = useMemo(() => {
    const map = new Map<string, MythologicalCharacter>();
    characters.forEach(c => map.set(c.id, c));
    return map;
  }, [characters]);

  const selectedCharacter = useMemo(() => {
    if (!selectedCharacterId) return undefined;
    return characterMap.get(selectedCharacterId);
  }, [selectedCharacterId, characterMap]);

  // Ancestor tracing
  const getAncestors = useCallback((id: string): string[] => {
    const ancestors: string[] = [];
    let current = characterMap.get(id);
    const visited = new Set<string>();

    while (current && !visited.has(current.id)) {
      visited.add(current.id);
      if (current.fatherId && characterMap.has(current.fatherId)) {
        ancestors.push(current.fatherId);
        current = characterMap.get(current.fatherId);
      } else if (current.motherId && characterMap.has(current.motherId)) {
        ancestors.push(current.motherId);
        current = characterMap.get(current.motherId);
      } else {
        break;
      }
    }
    return ancestors;
  }, [characterMap]);

  // Descendant tracing
  const getDescendants = useCallback((id: string): string[] => {
    const descendants: string[] = [];
    const queue = [id];
    const visited = new Set<string>([id]);

    while (queue.length > 0) {
      const currId = queue.shift()!;
      const curr = characterMap.get(currId);
      if (curr && curr.childrenIds) {
        for (const childId of curr.childrenIds) {
          if (!visited.has(childId)) {
            visited.add(childId);
            descendants.push(childId);
            queue.push(childId);
          }
        }
      }
    }
    return descendants;
  }, [characterMap]);

  // Active highlighted nodes: self + ancestors + direct descendants
  const highlightedNodeIds = useMemo(() => {
    if (!selectedCharacterId) return new Set<string>();
    const set = new Set<string>();
    set.add(selectedCharacterId);
    getAncestors(selectedCharacterId).forEach(id => set.add(id));
    getDescendants(selectedCharacterId).forEach(id => set.add(id));
    return set;
  }, [selectedCharacterId, getAncestors, getDescendants]);

  const selectCharacter = useCallback((id: string, openDrawer = true) => {
    setSelectedCharacterId(id);
    if (openDrawer) {
      setIsDrawerOpen(true);
    }
    setBreadcrumbs(prev => {
      if (prev[prev.length - 1] === id) return prev;
      return [...prev.slice(-8), id];
    });
  }, []);

  const closeDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const navigateToRoot = useCallback(() => {
    selectCharacter('chaturmukha-brahma', true);
  }, [selectCharacter]);

  const navigateToParent = useCallback((characterId: string) => {
    const char = characterMap.get(characterId);
    if (char?.fatherId && characterMap.has(char.fatherId)) {
      selectCharacter(char.fatherId);
    } else if (char?.motherId && characterMap.has(char.motherId)) {
      selectCharacter(char.motherId);
    }
  }, [characterMap, selectCharacter]);

  const navigateToChildren = useCallback((characterId: string) => {
    const char = characterMap.get(characterId);
    if (char && char.childrenIds && char.childrenIds.length > 0) {
      selectCharacter(char.childrenIds[0]);
    }
  }, [characterMap, selectCharacter]);

  // Admin CRUD
  const addCharacter = useCallback((newChar: MythologicalCharacter) => {
    setCharacters(prev => [...prev, { ...newChar, isCustom: true }]);
    setSelectedCharacterId(newChar.id);
  }, []);

  const updateCharacter = useCallback((id: string, updates: Partial<MythologicalCharacter>) => {
    setCharacters(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
  }, []);

  const deleteCharacter = useCallback((id: string) => {
    setCharacters(prev => prev.filter(c => c.id !== id));
    if (selectedCharacterId === id) {
      setSelectedCharacterId('chaturmukha-brahma');
    }
  }, [selectedCharacterId]);

  const resetToDefaults = useCallback(() => {
    setCharacters(INITIAL_BHAGAVATAM_CHARACTERS);
    setSelectedCharacterId('chaturmukha-brahma');
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }, []);

  const exportDataJson = useCallback(() => {
    return JSON.stringify(characters, null, 2);
  }, [characters]);

  const importDataJson = useCallback((jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setCharacters(parsed);
        return true;
      }
    } catch (e) {
      console.error('Invalid JSON imported:', e);
    }
    return false;
  }, []);

  return (
    <MythologyContext.Provider
      value={{
        characters,
        selectedCharacterId,
        selectedCharacter,
        viewMode,
        searchQuery,
        isDrawerOpen,
        isSearchOpen,
        isAdminOpen,
        isAdityasOpen,
        language,
        breadcrumbs,
        highlightedNodeIds,
        selectCharacter,
        closeDrawer,
        setViewMode,
        setSearchQuery,
        setIsSearchOpen,
        setIsAdminOpen,
        setIsAdityasOpen,
        setLanguage,
        toggleLanguage,
        navigateToParent,
        navigateToChildren,
        navigateToRoot,
        getAncestors,
        getDescendants,
        addCharacter,
        updateCharacter,
        deleteCharacter,
        resetToDefaults,
        exportDataJson,
        importDataJson
      }}
    >
      {children}
    </MythologyContext.Provider>
  );
};

export const useMythology = () => {
  const context = useContext(MythologyContext);
  if (!context) {
    throw new Error('useMythology must be used within a MythologyProvider');
  }
  return context;
};
