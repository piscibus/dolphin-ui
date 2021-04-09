import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

/*Supported Langs */
const resources = {
    en: {
        translation: require('./localisations/en.json'),
    },
    ar: {
        translation: require('./localisations/ar.json'),
    },
}
/**Config i18next */
i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem('appLang'),
        fallbackLng: 'en',
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    })
