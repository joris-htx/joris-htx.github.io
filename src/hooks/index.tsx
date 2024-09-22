export const useLocale = () => {
  const searchParams = new URL(document.location.toString()).searchParams
  const locale = searchParams.get('locale') || 'en'

  return locale
}
