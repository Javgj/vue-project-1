// vue
import Vue from 'vue'
// i18n
import VueI18n from 'vue-i18n'
// messages
import messages from '@/translations/locales/en.json'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  messages
})

const loadedLanguages = ['en']

/**
 * @param {String} lang
 * @returns {String}
 */
function setI18nLanguage (lang) {
  i18n.locale = lang
  // Vue.prototype.$http.defaults.headers.common['Accept-Language'] = lang
  return lang
}

/**
 * @param {String} lang
 * @returns {String}
 */
export async function loadedLanguageAsync (lang = 'en') {
  if (typeof lang !== 'string') return Promise.resolve(lang)

  if (i18n.locale === lang || loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  try {
    const messages = await import(`@/translations/locales/${lang}.json`)

    if (messages) {
      i18n.setLocaleMessage(lang, messages[lang])
      loadedLanguages.push(lang)

      return setI18nLanguage(lang)
    }
  } catch (error) {
    throw new Error(`Cannot find module './${lang}.json'`)
  }
}
