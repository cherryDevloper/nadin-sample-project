import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './constants/routes';
import Layout from './components/Layout';
import { darkTheme, lightTheme } from './theme';
import Spin from './components/Spin';

function App() {
  //theme
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };
  //language
  const { i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  const handleButtonClick = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'fa' : 'en';
    // Set the HTML dir attribute based on the new language
    document.documentElement.dir = newLanguage === 'fa' ? 'rtl' : 'ltr';
    changeLanguage(newLanguage);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout toggleTheme={toggleTheme} handleButtonClick={handleButtonClick}>
          <Suspense fallback={<Spin />}>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Suspense>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
