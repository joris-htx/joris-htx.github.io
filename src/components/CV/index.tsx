import { Stack } from '@mui/material'

import MainContent from '../MainContent'
import PersonalInfo from '../PersonalInfo'

const CV = () => {
  return (
    <Stack direction="row">
      <PersonalInfo />
      <MainContent />
    </Stack>
  )
}

export default CV
