import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Lang, ContentMap } from '../data/content';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (map: ContentMap) => string;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem('wedding-lang');
      if (saved === 'en' || saved === 'gu') return saved;
    } catch {}
    return 'en';
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem('wedding-lang', l);
    } catch {}
  };

  useEffect(() => {
    document.documentElement.lang = lang === 'gu' ? 'gu' : 'en';
  }, [lang]);

  const t = (map: ContentMap) => map[lang];
  const toggleLang = () => setLang(lang === 'gu' ? 'en' : 'gu');

  return (
    <LangContext.Provider value={{ lang, setLang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
