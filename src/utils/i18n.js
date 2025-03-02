import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzlang from "./locales/uz.json";
import rulang from "./locales/ru.json";
import enlang from "./locales/en.json";

const resources = {
  en: {
    translation: enlang,
  },
  uz: {
    translation: uzlang,
  }
  , ru: {
    translation: rulang,
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: "en",
    lng: "ru",
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;