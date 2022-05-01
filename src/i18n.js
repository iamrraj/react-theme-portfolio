import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./Components/Language/English/en";
import pl from "./Components/Language/Polish/pl";

const resources = {
  pl: pl,
  en: en,
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    // lng: "pl", // default language
    fallbackLng: ["en", "pl"],
    preload: ["en", "pl"],
    whitelist: ["en", "pl"],
    debug: true,
    initImmediate: false,
    saveMissing: true,
    interpolation: {
      escapeValue: false,
      formatSeparator: ".",
    },
    react: {
      wait: true,
    },
  });

export default i18n;
