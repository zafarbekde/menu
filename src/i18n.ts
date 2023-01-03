import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",

  resources: {
    en: {
      translation: {
        menu: "Menu",
      },
    },
    ru: {
      translation: {
        menu: "Меню",
      },
    },
  },

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
})
