import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'

import useStyle from './style'
import { useLocale } from '../../../hooks'
import JobTitle from '../../JobTitle'

const Jobs = () => {
  const intl = useIntl()
  const locale = useLocale()
  const theme = useTheme()
  const style = useStyle(theme)

  return (
    <Stack direction="column" gap={3} textAlign="justify">
      <Stack direction="column" gap={1}>
        <JobTitle
          titles={[
            intl.formatMessage({
              id: 'JobTitle.SeniorFrontEnd',
              defaultMessage: 'Senior Frontend Engineer',
            }),
          ]}
          company="Ricardo"
          companyLogoSrc="resources/ricardo.png"
          location="Valbonne, France"
          startDate={new Date(2019, 6, 19)}
          logoWidth={100}
        />

        <FormattedMessage
          id="Job.Description.Ricardo"
          defaultMessage="Contributing to the development and optimization of the Ricardo platform, the leader in second-hand marketplaces in Switzerland. Working on key features in post-sales management, item listing and buying experience. I leverage modern technologies, ensuring seamless communication with backend services. I collaborate closely with the product and design to align technical needs with business objectives. Additionally, I have been involved in overhauling internal processes to improve team efficiency."
        />
        <Typography variant="subtitle2" color="primary" marginTop={1}>
          <FormattedMessage id="MainContent.KeyAchievements" defaultMessage="Key achievements" />
        </Typography>

        <List sx={style.list}>
          <ListItem sx={style.listItem}>
            <ListItemIcon sx={style.listItemIcon}>
              <ArrowForwardIosIcon sx={style.bullet} color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={style.listText}>
                  <FormattedMessage
                    id="Job.Ricardo.KeyAchievement1"
                    defaultMessage="Led various Frontend topics"
                  />
                </Box>
              }
              secondary={
                <Box sx={style.listText} component="span">
                  <FormattedMessage
                    id="Job.Ricardo.KeyAchievement1.Details"
                    defaultMessage="Payment provider integration (Stripe), Swiss Post integration, improve buying/selling experience, dispute management"
                  />
                  <br />
                  <FormattedMessage
                    id="Job.Ricardo.KeyAchievement1.FEDetails"
                    defaultMessage="Payment provider integration (Stripe), Swiss Post integration, improve buying/selling experience, dispute management"
                  />
                  <br />
                  <FormattedMessage
                    id="Job.Ricardo.KeyAchievement1.BEDetails"
                    defaultMessage="Payment provider integration (Stripe), Swiss Post integration, improve buying/selling experience, dispute management"
                  />
                </Box>
              }
            />
          </ListItem>
          <ListItem sx={style.listItem}>
            <ListItemIcon sx={style.listItemIcon}>
              <ArrowForwardIosIcon sx={style.bullet} color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={style.listText}>
                  <FormattedMessage
                    id="Job.Ricardo.KeyAchievement2"
                    defaultMessage="Facilitated and actively participated to concept & ideation workshops"
                  />
                </Box>
              }
            />
          </ListItem>
          <ListItem sx={style.listItem}>
            <ListItemIcon sx={style.listItemIcon}>
              <ArrowForwardIosIcon sx={style.bullet} color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={style.listText}>
                  <FormattedMessage
                    id="Job.Ricardo.KeyAchievement3"
                    defaultMessage="Successfully migrated from Material UI 4 to Material UI 5"
                  />
                </Box>
              }
            />
          </ListItem>
          <ListItem sx={style.listItem}>
            <ListItemIcon sx={style.listItemIcon}>
              <ArrowForwardIosIcon sx={style.bullet} color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={style.listText}>
                  <FormattedMessage
                    id="Job.Ricardo.KeyAchievement4"
                    defaultMessage="Improved Agile processes within the team"
                  />
                </Box>
              }
            />
          </ListItem>
        </List>
      </Stack>

      <Stack direction="column" gap={1}>
        <JobTitle
          titles={[
            'Scrum Master',
            intl.formatMessage({
              id: 'JobTitle.SeniorFullStack',
              defaultMessage: 'Senior Full Stack Engineer',
            }),
          ]}
          company="CrossKnowledge"
          companyLogoSrc="resources/crossknowledge.png"
          logoWidth={160}
          location="Valbonne, France"
          startDate={new Date(2015, 4, 1)}
          endDate={new Date(2019, 6, 4)}
        />
        <FormattedMessage
          id="Job.Description.CrossKnowledge"
          defaultMessage="Responsible for the development and maintenance of the Learning Management System (LMS) sold by the company. This is a complex web application with an administrator interface and a fully customizable learner interfaces. Working within a SCRUM team, in close collaboration with the QA and IT teams."
        />
        <Typography variant="subtitle2" color="primary" marginTop={1}>
          <FormattedMessage id="MainContent.KeyAchievements" defaultMessage="Key achievements" />
        </Typography>
        <List sx={style.list}>
          <ListItem sx={style.listItem}>
            <ListItemIcon sx={style.listItemIcon}>
              <ArrowForwardIosIcon sx={style.bullet} color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={style.listText}>
                  <FormattedMessage
                    id="Job.CrossKnowledge.KeyAchievement1"
                    defaultMessage="Participated in the company's Agile transition"
                  />
                </Box>
              }
              secondary={
                <Box sx={style.listText} component="span">
                  <FormattedMessage
                    id="Job.CrossKnowledge.KeyAchievement1.Details"
                    defaultMessage="Scrum master of a 8-person team, organized and facilitated the ceremonies, coached the team in Agile principles (1 year)"
                  />
                </Box>
              }
            />
          </ListItem>
          <ListItem sx={style.listItem}>
            <ListItemIcon sx={style.listItemIcon}>
              <ArrowForwardIosIcon sx={style.bullet} color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={style.listText}>
                  <FormattedMessage
                    id="Job.CrossKnowledge.KeyAchievement2"
                    defaultMessage="Migrated from Symfony 2.8 to Symfony 3.4"
                  />
                </Box>
              }
            />
          </ListItem>
          <ListItem sx={[style.listItem, locale === 'en' && style.marginTop]}>
            <ListItemIcon sx={style.listItemIcon}>
              <ArrowForwardIosIcon sx={style.bullet} color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={style.listText}>
                  <FormattedMessage
                    id="Job.CrossKnowledge.KeyAchievement3"
                    defaultMessage="Built a responsive learning tool as an SPA based on social activities (6 persons)"
                  />
                </Box>
              }
              secondary={
                <Box sx={style.listText} component="span">
                  <FormattedMessage
                    id="Job.CrossKnowledge.KeyAchievement3.FEDetails"
                    defaultMessage="Frontend: Backbone.JS, HTML5, CSS3, gulp, responsive emails"
                  />
                  <br />
                  <FormattedMessage
                    id="Job.CrossKnowledge.KeyAchievement3.BEDetails"
                    defaultMessage="Backend : PHP 5, Symfony 2, Node.JS, MySQL, DynamoDB, Propel"
                  />
                </Box>
              }
            />
          </ListItem>
          <ListItem sx={style.listItem}>
            <ListItemIcon sx={style.listItemIcon}>
              <ArrowForwardIosIcon sx={style.bullet} color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={style.listText}>
                  <FormattedMessage
                    id="Job.CrossKnowledge.KeyAchievement4"
                    defaultMessage="Built a customizable search engine powered by SOLR (4 persons)"
                  />
                </Box>
              }
            />
          </ListItem>
        </List>
      </Stack>

      <Stack direction="column" gap={1}>
        <JobTitle
          titles={[
            intl.formatMessage({
              id: 'JobTitle.FullStack',
              defaultMessage: 'Full Stack Engineer',
            }),
          ]}
          company="AUSY"
          companyLogoSrc="resources/ausy.png"
          logoWidth={80}
          location="Sophia Antipolis, France"
          startDate={new Date(2014, 9, 31)}
          endDate={new Date(2015, 4, 1)}
        />
        <FormattedMessage
          id="Job.Description.Ausy"
          defaultMessage="Contracted by CrossKnowledge for 6 months. Then hired by the company."
        />
      </Stack>

      <Stack direction="column" gap={1}>
        <JobTitle
          titles={[
            intl.formatMessage({
              id: 'JobTitle.FullStackApprentice',
              defaultMessage: 'Full Stack Developer - Apprentice',
            }),
          ]}
          company="Air France"
          companyLogoSrc="resources/airfrance.png"
          location="Sophia Antipolis, France"
          startDate={new Date(2013, 8, 1)}
          endDate={new Date(2014, 9, 1)}
        />
        <FormattedMessage
          id="Job.Description.AirFrance"
          defaultMessage="Within the DGSI at Air France, responsible for technical migrations and database optimizations for airport applications used by ground staff. Main objectives: reducing technical debt, optimizing maintenance costs, and improving overall performance."
        />

        <Typography variant="subtitle2" color="primary" marginTop={1}>
          <FormattedMessage id="MainContent.KeyAchievements" defaultMessage="Key achievements" />
        </Typography>

        <List sx={style.list}>
          <ListItem sx={style.listItem}>
            <ListItemIcon sx={style.listItemIcon}>
              <ArrowForwardIosIcon sx={style.bullet} color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={style.listText}>
                  <FormattedMessage
                    id="Job.AirFrance.KeyAchievement1"
                    defaultMessage="Migrated Air France's salon management application to newest technical stack"
                  />
                </Box>
              }
              secondary={
                <Box sx={style.listText} component="span">
                  <FormattedMessage
                    id="Job.AirFrance.KeyAchievement1.Details"
                    defaultMessage="Migration from Java 4 to Java 7, Tomcat 7 migration"
                  />
                  <br />
                  Maven, Spring, Hibernate
                </Box>
              }
            />
          </ListItem>
          <ListItem sx={style.listItem}>
            <ListItemIcon sx={style.listItemIcon}>
              <ArrowForwardIosIcon sx={style.bullet} color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={style.listText}>
                  <FormattedMessage
                    id="Job.AirFrance.KeyAchievement2"
                    defaultMessage="Optimized database performances"
                  />
                </Box>
              }
              secondary={
                <Box sx={style.listText} component="span">
                  <FormattedMessage
                    id="Job.AirFrance.KeyAchievement2.Details1"
                    defaultMessage="Index purge & optimization"
                  />
                  <br />
                  <FormattedMessage
                    id="Job.AirFrance.KeyAchievement2.Details2"
                    defaultMessage="Technical qualification (estimated usage metrics)"
                  />
                </Box>
              }
            />
          </ListItem>
          <ListItem sx={style.listItem}>
            <ListItemIcon sx={style.listItemIcon}>
              <ArrowForwardIosIcon sx={style.bullet} color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={style.listText}>
                  <FormattedMessage
                    id="Job.AirFrance.KeyAchievement3"
                    defaultMessage="Estimated and planned migration of a Java Swing heavy client application to a web client"
                  />
                </Box>
              }
            />
          </ListItem>
        </List>
      </Stack>

      {/* <Stack direction="column" gap={1} display="none">
        <JobTitle
          titles={[
            intl.formatMessage({
              id: 'JobTitle.BackendIntern',
              defaultMessage: 'Backend Developer - Intern',
            }),
          ]}
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

      <Stack direction="column" gap={1} display="none">
        <JobTitle
          titles={[
            intl.formatMessage({
              id: 'JobTitle.FullStackIntern',
              defaultMessage: 'Full Stack Developer - Intern',
            }),
          ]}
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
      </Stack> */}
    </Stack>
  )
}

export default Jobs
