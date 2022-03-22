import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import messagesEn from '@app/assets/localization/en.json'
import messagesDe from '@app/assets/localization/de.json'

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: messagesEn
    },
    de: {
      translation: messagesDe
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})
