import { Box, Stack } from '@mui/material'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import style from './style'
import Diploma from '../Diploma'
import JobTitle from '../JobTitle'

const MainContent = () => {
  return (
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
          <FormattedMessage id="MainContent.Experience" defaultMessage="Work experience" />
        </Box>

        <Stack direction="column" gap={3}>
          <JobTitle
            titles={['Senior Frontend Developer']}
            company="Ricardo"
            companyLogoSrc="resources/ricardo.png"
            location="Valbonne, France"
            startDate={new Date(2019, 7)}
          />

          <JobTitle
            titles={['Scrum master', 'Senior Full stack Developer']}
            company="CrossKnowledge"
            companyLogoSrc="resources/crossknowledge.png"
            logoWidth={160}
            location="Valbonne, France"
            startDate={new Date(2015, 5)}
            endDate={new Date(2019, 7)}
          />

          <JobTitle
            titles={['Full stack Developer']}
            company="AUSY"
            companyLogoSrc="resources/ausy.png"
            logoWidth={80}
            location="Sophia Antipolis, France"
            startDate={new Date(2014, 10)}
            endDate={new Date(2015, 5)}
          />

          <JobTitle
            titles={['Full stack Developer - Apprentice']}
            company="Air France"
            companyLogoSrc="resources/airfrance.png"
            location="Sophia Antipolis, France"
            startDate={new Date(2013, 9)}
            endDate={new Date(2014, 10)}
          />

          <JobTitle
            titles={['Backend developer - Intern']}
            company="Supralog"
            companyLogoSrc="resources/supralog.png"
            location="Antibes, France"
            startDate={new Date(2013, 6)}
            endDate={new Date(2013, 8)}
          />

          <JobTitle
            titles={['Full stack developer - Intern']}
            company="OverLink"
            companyLogoSrc="resources/overlink.png"
            location="Sophia Antipolis, France"
            startDate={new Date(2011, 4)}
            endDate={new Date(2011, 6)}
          />
        </Stack>
      </Box>

      <Box component="section">
        <Box component="h3">
          <FormattedMessage id="MainContent.Education" defaultMessage="Education" />
        </Box>

        <Diploma
          title="Engineer in Computer Science"
          subtitles={['Specialization software architecture']}
          schoolName="Polytech' Nice Sophia"
          startDate={new Date(2011, 9)}
          endDate={new Date(2014, 9)}
          location="Sophia Antipolis, France"
        />
      </Box>
    </Box>
  )
}

export default MainContent
