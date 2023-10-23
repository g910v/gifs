import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import RU from './RU.json';
import EN from './EN.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: EN,
      },
      ru: {
        translation: RU,
      },
    },
    fallbackLng: 'en',
  });
