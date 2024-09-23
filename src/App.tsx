import './App.css'
import { Box } from '@mui/material'
import { IntlProvider } from 'react-intl'

import CV from './components/CV'
import Layout from './components/Layout'
import { useLocale } from './hooks'
import messagesInFrench from './translations/fr.json'

const App = () => {
  const locale = useLocale()

  return (
    <Box sx={{ background: '#EEE' }}>
      <IntlProvider
        messages={locale === 'fr' ? messagesInFrench : {}}
        locale="locale"
        defaultLocale="en"
      >
        <Layout>
          <CV />
        </Layout>
      </IntlProvider>
    </Box>
  )
}

export default App
