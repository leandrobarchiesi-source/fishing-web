import { translations } from './translations'

export function t(language, key) {

  return (
    translations[language]?.[key] ||
    translations.it[key] ||
    key
  )

}