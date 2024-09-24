import { Box, Divider } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import Diplomas from './Diplomas'
import Jobs from './Jobs'
import style from './style'

const MainContent = () => (
  <Box sx={style.mainContentContainer}>
    <Box component="h1">Joris Harnetiaux</Box>
    <Box component="h2">
      <FormattedMessage id="MainContent.JobTitle" defaultMessage="Senior Frontend Developer" />
    </Box>

    <Box component="section">
      <Box component="h3">
        <FormattedMessage id="MainContent.Profile" defaultMessage="Profile" />
      </Box>
      <FormattedMessage
        id="MainContent.Profile.Description"
        defaultMessage="Senior Frontend Engineer with solid experience within a multidisciplinary team of 8 people. Passionate about creating impactful user experiences, I prioritize a product-oriented approach, always striving to blend technology with user needs. My technical skills enable me to contribute effectively to projects, but it's the opportunity to transform ideas into concrete solutions that motivates me the most. I am committed to adding real value at every stage of development by collaborating closely with my colleagues to design intuitive and high-performing interfaces."
      />
    </Box>

    <Box component="section">
      <Box component="h3">
        <FormattedMessage id="MainContent.Experiences" defaultMessage="Work experiences" />
      </Box>

      <Jobs />
    </Box>

    <Divider sx={style.divider} />

    <Box component="section">
      <Box component="h3">
        <FormattedMessage id="MainContent.Education" defaultMessage="Education" />
      </Box>

      <Diplomas />
    </Box>
  </Box>
)

export default MainContent
