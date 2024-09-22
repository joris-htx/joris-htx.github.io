import { Stack } from '@mui/material'
import PersonalInfo from '../PersonalInfo'
import MainContent from '../MainContent'

const CV = () => {
  return (
    <Stack direction="row">
      <PersonalInfo />
      <MainContent />
    </Stack>
  )
}

export default CV
