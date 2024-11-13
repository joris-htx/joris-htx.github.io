import { Box, ThemeProvider } from '@mui/material'
import React from 'react'
import { IntlProvider } from 'react-intl'

import CV from './components/CV'
import Layout from './components/Layout'
import { useLocale } from './hooks'
import { theme } from './theme'
import messagesInEnglish from './translations/en.json'
import messagesInFrench from './translations/fr.json'

export const SAVED_LOCALE_KEY = 'locale'

const App = () => {
  const locale = useLocale()

  return (
    <Box sx={{ background: '#E5E5E5' }}>
      <IntlProvider
        messages={locale === 'fr' ? messagesInFrench : messagesInEnglish}
        locale={locale}
        defaultLocale="en"
      >
        <ThemeProvider theme={theme}>
          <Layout>
            <CV />
          </Layout>
        </ThemeProvider>
      </IntlProvider>
    </Box>
  )
}

export default App
