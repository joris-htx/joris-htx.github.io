import { Box, Divider, Typography, useTheme } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import Diplomas from './Diplomas'
import Jobs from './Jobs'
import useStyle from './style'

const MainContent = () => {
  const theme = useTheme()
  const style = useStyle(theme)

  return (
    <Box component="section" overflow="hidden">
      <Box sx={style.wave}>
        <Box sx={style.waveCurve} />
      </Box>
      <Box sx={style.mainContentContainer}>
        <Typography variant="h5" sx={style.title} color="primary">
          Joris Harnetiaux{' - '}
          <FormattedMessage id="MainContent.JobTitle" defaultMessage="Senior Frontend Engineer" />
          <br />
          <FormattedMessage
            id="MainContent.AgeXp"
            defaultMessage="33 years old - 11 years of experience"
          />
        </Typography>

        <Box component="section" textAlign="justify">
          <Typography variant="h6" color="primary" marginTop={1}>
            <FormattedMessage id="MainContent.Profile" defaultMessage="Profile" />
          </Typography>
          <FormattedMessage
            id="MainContent.Profile.Description"
            defaultMessage="Senior Frontend Engineer with solid experience within a multidisciplinary team of 8 people. Passionate about creating impactful user experiences, I prioritize a product-oriented approach, always striving to blend technology with user needs. My technical skills enable me to contribute effectively to projects, but it's the opportunity to transform ideas into concrete solutions that motivates me the most. I am committed to adding real value at every stage of development by collaborating closely with my colleagues to design intuitive and high-performing interfaces."
          />
        </Box>

        <Box component="section">
          <Typography variant="h6" color="primary" marginTop={2}>
            <FormattedMessage id="MainContent.Experiences" defaultMessage="Work experiences" />
          </Typography>

          <Jobs />
        </Box>

        <Divider sx={style.divider} />

        <Box component="section">
          <Typography variant="h6" color="primary" marginTop={1}>
            <FormattedMessage id="MainContent.Education" defaultMessage="Education" />
          </Typography>

          <Diplomas />
        </Box>
      </Box>
    </Box>
  )
}

export default MainContent
