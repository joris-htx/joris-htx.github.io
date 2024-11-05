import { ensureLocale } from './helpers'
import { Locale } from './types'

export const useLocale = (): Locale => {
  const { searchParams } = new URL(document.location.toString())
  const localeQueryParam = searchParams.get('locale')

  if (ensureLocale(localeQueryParam)) {
    return localeQueryParam
  }

  return 'en'
}
