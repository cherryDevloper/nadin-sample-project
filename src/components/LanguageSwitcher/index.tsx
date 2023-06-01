import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('fa')}>Farsi</button>
      <button onClick={() => handleLanguageChange('en')}>English</button>
    </div>
  );
}

export default LanguageSwitcher;
