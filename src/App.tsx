import './App.css'
import CV from './components/CV'
import Layout from './components/Layout'
import { IntlProvider } from 'react-intl'
import messagesInFrench from './translations/fr.json'
import { Box } from '@mui/material'
import { useLocale } from './hooks'

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
