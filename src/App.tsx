import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t('greeting')}</h1>
      <LanguageSwitcher />
    </>
  );
}

export default App;
