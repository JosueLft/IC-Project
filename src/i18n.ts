import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';
import pt from './locales/pt/translation.json';

const resources = {
    pt: { translation: pt },
};

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'pt',
        fallbackLng: 'pt',
        supportedLngs: Object.keys(resources),
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        }
    });

export const t = i18n.t.bind(i18n);

export default i18n;