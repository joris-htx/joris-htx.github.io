import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'

import style from './style'
import Diploma from '../Diploma'
import JobTitle from '../JobTitle'

const MainContent = () => {
  const intl = useIntl()
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
          <FormattedMessage id="MainContent.Experiences" defaultMessage="Work experiences" />
        </Box>

        <Stack direction="column" gap={3}>
          <Stack direction="column" gap={1}>
            <JobTitle
              titles={['Senior Frontend Developer']}
              company="Ricardo"
              companyLogoSrc="resources/ricardo.png"
              location="Valbonne, France"
              startDate={new Date(2019, 6)}
            />

            <FormattedMessage
              id="Job.Description.Ricardo"
              defaultMessage="Contributing to the development and optimization of the Ricardo platform, working on key features in post-sale management, item listing and buyer experience. I leverage modern technologies, ensuring seamless communication with backend services. I collaborate closely with the product and design to align technical needs with business objectives. Additionally, I have been involved in overhauling internal processes to improve team efficiency."
            />
            <Box component="h5" marginBottom={1}>
              <FormattedMessage
                id="MainContent.KeyAchievements"
                defaultMessage="Key achievements"
              />
            </Box>

            <List sx={style.list}>
              <ListItem sx={style.listItem}>
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <FormattedMessage
                      id="Job.Ricardo.KeyAchievement1"
                      defaultMessage="Led various Frontend topics"
                    />
                  }
                  secondary={
                    <FormattedMessage
                      id="Job.Ricardo.KeyAchievement1.Details"
                      defaultMessage="Payment provider integration (Stripe), Swiss Post integration, improve buying/selling experience, dispute management"
                    />
                  }
                />
              </ListItem>
              <ListItem sx={style.listItem}>
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <FormattedMessage
                      id="Job.Ricardo.KeyAchievement2"
                      defaultMessage="Facilitated and actively participated to concept & ideation workshops"
                    />
                  }
                />
              </ListItem>
              <ListItem sx={style.listItem}>
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <FormattedMessage
                      id="Job.Ricardo.KeyAchievement3"
                      defaultMessage="Successfully migrated from Material UI 4 to Material UI 5"
                    />
                  }
                />
              </ListItem>
              <ListItem sx={style.listItem}>
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <FormattedMessage
                      id="Job.Ricardo.KeyAchievement4"
                      defaultMessage="Improved Agile processes within the team"
                    />
                  }
                />
              </ListItem>
            </List>
          </Stack>

          <Stack direction="column" gap={1}>
            <JobTitle
              titles={['Scrum master', 'Senior Full stack Developer']}
              company="CrossKnowledge"
              companyLogoSrc="resources/crossknowledge.png"
              logoWidth={160}
              location="Valbonne, France"
              startDate={new Date(2015, 4)}
              endDate={new Date(2019, 6)}
            />
            <FormattedMessage
              id="Job.Description.CrossKnowledge"
              defaultMessage="Responsible for the development and maintenance of the Learning Management System (LMS) sold by the company. This is a complex web application with an administrator interface and a fully customizable learner interfaces. Working within a SCRUM team, in close collaboration with the QA and IT teams."
            />
            <Box component="h5" marginBottom={1}>
              <FormattedMessage
                id="MainContent.KeyAchievements"
                defaultMessage="Key achievements"
              />
            </Box>
            <List sx={style.list}>
              <ListItem sx={style.listItem}>
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <FormattedMessage
                      id="Job.CrossKnowledge.KeyAchievement1"
                      defaultMessage="Participated in the company's Agile transition"
                    />
                  }
                  secondary={
                    <FormattedMessage
                      id="Job.CrossKnowledge.KeyAchievement1.Details"
                      defaultMessage="Scrum master of a 8-person team, organized and facilitated the ceremonies, coached the team in Agile principles (1 year)"
                    />
                  }
                />
              </ListItem>
              <ListItem sx={style.listItem}>
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText
                  primary={intl.formatMessage({
                    id: 'Job.CrossKnowledge.KeyAchievement2',
                    defaultMessage: 'Technical migration from Symfony 2.8 to Symfony 3.4',
                  })}
                />
              </ListItem>
              <ListItem sx={style.listItem}>
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <FormattedMessage
                      id="Job.CrossKnowledge.KeyAchievement3"
                      defaultMessage="Built a responsive learning tool as an SPA based on social activities (6 persons)"
                    />
                  }
                  secondary={
                    <>
                      <FormattedMessage
                        id="Job.CrossKnowledge.KeyAchievement3.FEDetails"
                        defaultMessage="Frontend: Backbone.JS, HTML5, CSS3, gulp, responsive emails"
                      />
                      <br />
                      <FormattedMessage
                        id="Job.CrossKnowledge.KeyAchievement3.BEDetails"
                        defaultMessage="Backend : PHP 5, Symfony 2, Node.JS, MySQL, DynamoDB, Propel"
                      />
                    </>
                  }
                />
              </ListItem>
              <ListItem sx={style.listItem}>
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <FormattedMessage
                      id="Job.CrossKnowledge.KeyAchievement4"
                      defaultMessage="Built a customizable search engine powered by SOLR (4 persons)"
                    />
                  }
                />
              </ListItem>
            </List>
          </Stack>

          <Stack direction="column" gap={1}>
            <JobTitle
              titles={['Full stack Developer']}
              company="AUSY"
              companyLogoSrc="resources/ausy.png"
              logoWidth={80}
              location="Sophia Antipolis, France"
              startDate={new Date(2014, 9)}
              endDate={new Date(2015, 4)}
            />
            <FormattedMessage
              id="Job.Description.AUSY"
              defaultMessage="Contracted by CrossKnowledge for 6 months. Then hired by the company."
            />
          </Stack>

          <Stack direction="column" gap={1}>
            <JobTitle
              titles={['Full stack Developer - Apprentice']}
              company="Air France"
              companyLogoSrc="resources/airfrance.png"
              location="Sophia Antipolis, France"
              startDate={new Date(2013, 8)}
              endDate={new Date(2014, 9)}
            />
            <FormattedMessage
              id="Job.Description.AirFrance"
              defaultMessage="Within the DGSI at Air France, in the department responsible for airport applications used by ground staff. In charge of technical migrations and database optimizations with the goal of reducing technical debt, lowering maintenance costs, and improving performance."
            />

            <Box component="h5" marginBottom={1}>
              <FormattedMessage
                id="MainContent.KeyAchievements"
                defaultMessage="Key achievements"
              />
            </Box>

            <List sx={style.list}>
              <ListItem sx={style.listItem}>
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <FormattedMessage
                      id="Job.AirFrance.KeyAchievement1"
                      defaultMessage="Technical migration of Air France's salon management application"
                    />
                  }
                  secondary={
                    <>
                      <FormattedMessage
                        id="Job.AirFrance.KeyAchievement1.Details1"
                        defaultMessage="Migration from Java 4 to Java 7, Tomcat 7 migration"
                      />
                      <br />
                      <FormattedMessage
                        id="Job.AirFrance.KeyAchievement1.Details2"
                        defaultMessage="Maven, Spring, Hibernate"
                      />
                    </>
                  }
                />
              </ListItem>
              <ListItem sx={style.listItem}>
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <FormattedMessage
                      id="Job.AirFrance.KeyAchievement2"
                      defaultMessage="Database optimization"
                    />
                  }
                  secondary={
                    <>
                      <FormattedMessage
                        id="Job.AirFrance.KeyAchievement2.Details1"
                        defaultMessage="Index purge & optimization"
                      />
                      <br />
                      <FormattedMessage
                        id="Job.AirFrance.KeyAchievement2.Details2"
                        defaultMessage="Technical qualification (estimated usage metrics)"
                      />
                    </>
                  }
                />
              </ListItem>
              <ListItem sx={style.listItem}>
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <FormattedMessage
                      id="Job.AirFrance.KeyAchievement3"
                      defaultMessage="Migration study of a Java Swing heavy client application to a web client"
                    />
                  }
                />
              </ListItem>
            </List>
          </Stack>

          <Stack direction="column" gap={1}>
            <JobTitle
              titles={['Backend developer - Intern']}
              company="Supralog"
              companyLogoSrc="resources/supralog.png"
              location="Antibes, France"
              startDate={new Date(2013, 5)}
              endDate={new Date(2013, 7)}
            />

            <FormattedMessage
              id="Job.Description.Supralog"
              defaultMessage="Responsible for the development of an external monitoring tool for the application usage of an ERP used by large organizations, enabling the consultation of precise metrics and the generation of Word and PDF documents."
            />
          </Stack>

          <Stack direction="column" gap={1}>
            <JobTitle
              titles={['Full stack developer - Intern']}
              company="OverLink"
              companyLogoSrc="resources/overlink.png"
              location="Sophia Antipolis, France"
              startDate={new Date(2011, 3)}
              endDate={new Date(2011, 5)}
            />

            <FormattedMessage
              id="Job.Description.OverLink"
              defaultMessage="Participated in the complete overhaul of the company's customer ticket management ERP, migrating from WinDev to a C# .NET desktop application."
            />
          </Stack>
        </Stack>
      </Box>

      <Divider sx={style.divider} />

      <Box component="section">
        <Box component="h3">
          <FormattedMessage id="MainContent.Education" defaultMessage="Education" />
        </Box>

        <Stack direction="column" gap={3}>
          <Diploma
            title={intl.formatMessage({
              id: 'MainContent.Diploma.Engineer',
              defaultMessage: 'Computer science engineering degree',
            })}
            subtitles={['Specialization software architecture']}
            schoolName="Polytech' Nice Sophia"
            startDate={new Date(2011, 8)}
            endDate={new Date(2014, 6)}
            location="Sophia Antipolis, France"
          />

          <Diploma
            title={intl.formatMessage({
              id: 'MainContent.Diploma.Master',
              defaultMessage: 'Master of Computer Science',
            })}
            subtitles={['Apprenticeship']}
            schoolName="Polytech' Nice Sophia"
            startDate={new Date(2013, 8)}
            endDate={new Date(2014, 9)}
            location="Sophia Antipolis, France"
          />

          <Diploma
            title={intl.formatMessage({
              id: 'MainContent.Diploma.DUT',
              defaultMessage: 'Two-year university degree (DUT)',
            })}
            subtitles={['Computer science']}
            schoolName="Université de Nice Sophia Antipolis"
            startDate={new Date(2009, 8)}
            endDate={new Date(2011, 6)}
            location="Nice, France"
          />

          <Diploma
            title={intl.formatMessage({
              id: 'MainContent.Diploma.Baccalaureate',
              defaultMessage: 'Scientific baccalaureate',
            })}
            subtitles={['Specialization in engineering sciences']}
            schoolName="Lycée général et technologique de Lorgues"
            startDate={new Date(2009, 6)}
            location="Lorgues, France"
          />
        </Stack>
      </Box>
    </Box>
  )
}

export default MainContent
