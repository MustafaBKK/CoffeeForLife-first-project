'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageContextType = {
  language: 'tr' | 'en';
  setLanguage: (lang: 'tr' | 'en') => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'tr' | 'en';
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 