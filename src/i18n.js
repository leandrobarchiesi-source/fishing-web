import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import it from "./locales/it/common.json";
import en from "./locales/en/common.json";
import es from "./locales/es/common.json";
import fr from "./locales/fr/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({

    resources:{

      it:{translation:it},
      en:{translation:en},
      es:{translation:es},
      fr:{translation:fr}

    },

    fallbackLng:"en",

    supportedLngs:["it","en","es","fr"],

    interpolation:{
      escapeValue:false
    },

    detection:{

      order:[
        "localStorage",
        "navigator"
      ],

      caches:["localStorage"]

    }

  });

export default i18n;