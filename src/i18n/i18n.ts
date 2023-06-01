// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpBackend)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'fa'],
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['path', 'navigator'],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
