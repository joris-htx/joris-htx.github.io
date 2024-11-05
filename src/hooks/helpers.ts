import { Locale } from './types'

export const ensureLocale = (locale: unknown): locale is Locale => {
  return locale === 'en' || locale === 'fr'
}
