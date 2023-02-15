import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import hindi from '../lib/hi.json'
import english from '../lib/en.json'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: english
    },
    hi: {
      translations: hindi
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
})

i18n.languages = ['en', 'hi']

export { default } from 'i18next'
export { Translation } from 'react-i18next'
