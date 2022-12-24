'use strict';

import i18n, { t } from "i18next";
import { initReactI18next } from "react-i18next";
import hindi from "./hi.json";
import english from "./en.json";

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3', 
    fallbackLng: "en",
    lng: "en",
    resources: {
        en: {
            translations: english,
        },
        hi: {
            translations: hindi,
        },
    },
    ns: ["translations"],
    defaultNS: "translations",
});

i18n.languages = ["en", "hi"];

export { default } from "i18next";
