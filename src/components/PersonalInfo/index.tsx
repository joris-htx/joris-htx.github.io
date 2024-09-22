import CakeIcon from '@mui/icons-material/Cake'
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing'
import EmailIcon from '@mui/icons-material/Email'
import HikingIcon from '@mui/icons-material/Hiking'
import HomeIcon from '@mui/icons-material/Home'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import PhoneIcon from '@mui/icons-material/Phone'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import SpaIcon from '@mui/icons-material/Spa'
import { Avatar, Box, Link, Stack } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'

import IconItem from '../IconItem'
import RankingBar from '../RankingBar'
import FranceFlagIcon from './resources/france-flag-icon.svg'
import JavascriptIcon from './resources/javascript.svg'
import PSMIcon from './resources/psm1.svg'
import ReactIcon from './resources/react.svg'
import UnitedKingdomFlagIcon from './resources/united-kingdom-flag-icon.svg'
import style from './style'

const PersonalInfo = () => {
  const intl = useIntl()

  return (
    <Box component="section" sx={style.personalInfoContainer}>
      <Avatar alt="Joris Harnetiaux" src="resources/Lavender-Waves.jpeg" style={style.avatar} />

      <Box component="section" sx={style.section}>
        <Box component="h3">
          <FormattedMessage id="PersonalInfo.Contact" defaultMessage="Contact" />
        </Box>

        <Stack direction="column" gap={1}>
          <IconItem
            icon={<PhoneIcon />}
            text={
              <Link href="tel:+33669909949" sx={style.link}>
                +33 6 69 90 99 49
              </Link>
            }
          />
          <IconItem
            icon={<EmailIcon />}
            text={
              <Link href="mailto: jorisharnetiaux@gmail.com" sx={style.link}>
                jorisharnetiaux@gmail.com
              </Link>
            }
          />
          <IconItem
            icon={<HomeIcon />}
            text={
              <Box>
                6 bis Boulevard de Montréal - Bt. B1
                <br />
                06200 NICE
              </Box>
            }
          />
        </Stack>
      </Box>

      <Box component="section" sx={style.section}>
        <Box component="h3">
          <FormattedMessage
            id="PersonalInfo.Trainings"
            defaultMessage="Trainings & certifications"
          />
        </Box>

        <Stack direction="column" gap={1}>
          <Stack direction="row" gap={1} alignItems="center" justifyContent="space-between">
            <IconItem
              icon={<Box component="img" src={PSMIcon} alt="" width={20} />}
              text="Professional Scrum Master 1 (2018)"
            />
            <Link
              href="resources/psm-certification.pdf"
              target="_blank"
              download
              sx={style.iconLink}
            >
              <PictureAsPdfIcon />
            </Link>
          </Stack>
          <Stack direction="row" gap={1} alignItems="center" justifyContent="space-between">
            <IconItem
              icon={<Box component="img" src={JavascriptIcon} alt="" width={20} />}
              text="Testing JavaScript (2019)"
            />
            <Link href="https://www.testingjavascript.com/" target="_blank" sx={style.iconLink}>
              <OpenInNewIcon />
            </Link>
          </Stack>
          <Stack direction="row" gap={1} alignItems="center" justifyContent="space-between">
            <IconItem
              icon={<Box component="img" src={ReactIcon} alt="" width={20} />}
              text="Epic React (2020)"
            />
            <Link href="https://www.epicreact.dev/" target="_blank" sx={style.iconLink}>
              <OpenInNewIcon />
            </Link>
          </Stack>
        </Stack>
      </Box>

      <Box component="section" sx={style.section}>
        <Box component="h3">
          <FormattedMessage id="PersonalInfo.Skills" defaultMessage="Skills" />
        </Box>

        <Box component="h5">
          <FormattedMessage
            id="PersonalInfo.Skills.ProgrammingLanguages"
            defaultMessage="Programming languages"
          />
        </Box>
        <Stack direction="column" gap={1}>
          <RankingBar title="HTML5" value={95} />
          <RankingBar title="JS, NodeJS" value={90} />
          <RankingBar title="Typescript" value={70} />
          <RankingBar title="CSS, SASS" value={90} />
        </Stack>

        <Box component="h5">
          <FormattedMessage
            id="PersonalInfo.Skills.Frameworks"
            defaultMessage="Frameworks & libraries"
          />
        </Box>
        <Stack direction="column" gap={1}>
          <RankingBar title="React" value={90} />
          <RankingBar title="NextJS" value={80} />
        </Stack>

        <Box component="h5">
          <FormattedMessage id="PersonalInfo.Skills.Tools" defaultMessage="Tools & technologies" />
        </Box>
        <Stack direction="column" gap={1}>
          <RankingBar title="Material UI" value={85} />
          <RankingBar title="React query" value={80} />
          <RankingBar title="Git, Github" value={90} />
          <RankingBar title="Yarn, NPM" value={70} />
        </Stack>

        <Box component="h5">
          <FormattedMessage id="PersonalInfo.Skills.Testing" defaultMessage="Testing" />
        </Box>
        <Stack direction="column" gap={1}>
          <RankingBar title="Jest, RTL" value={85} />
          <RankingBar title="Cypress" value={66} />
        </Stack>

        <Box component="h5">
          <FormattedMessage id="PersonalInfo.Skills.Design" defaultMessage="Design tools" />
        </Box>
        <Stack direction="column" gap={1}>
          <RankingBar title="Figma" value={50} />
          <RankingBar
            title={intl.formatMessage({
              id: 'PersonalInfo.Skills.Design.Principles',
              defaultMessage: 'UI/UX principles',
            })}
            value={80}
          />
        </Stack>

        <Box component="h5">
          <FormattedMessage id="PersonalInfo.Skills.SoftSkills" defaultMessage="Soft skills" />
        </Box>
        <Stack direction="column" gap={1}>
          <RankingBar title="Scrum, Agile" value={75} />
          <RankingBar
            title={intl.formatMessage({
              id: 'PersonalInfo.Skills.SoftSkills.ProblemSolving',
              defaultMessage: 'Problem solving',
            })}
            value={80}
          />
        </Stack>
      </Box>

      <Box component="section" sx={style.section}>
        <Box component="h3">
          <FormattedMessage id="PersonalInfo.Languages" defaultMessage="Languages" />
        </Box>

        <Stack direction="column" gap={1}>
          <RankingBar iconSrc={UnitedKingdomFlagIcon} value={95} />
          <RankingBar iconSrc={FranceFlagIcon} value={100} />
        </Stack>
      </Box>

      <Box component="section" sx={style.section}>
        <Box component="h3">
          <FormattedMessage id="PersonalInfo.Hobbies" defaultMessage="Hobbies" />
        </Box>

        <Stack direction="column" gap={1}>
          <IconItem
            icon={<HikingIcon />}
            text={
              <>
                <FormattedMessage
                  id="PersonalInfo.Hobbies.Hike"
                  defaultMessage="Hiking / Trekking"
                />
                <br />
                <FormattedMessage
                  id="PersonalInfo.Hobbies.Hike.Description"
                  defaultMessage="(Great crossing of the Alps - 660km)"
                />
              </>
            }
          />
          <IconItem icon={<DownhillSkiingIcon />} text="Skiing" />
          <IconItem icon={<CakeIcon />} text="Baking" />
          <IconItem icon={<SpaIcon />} text="Keeping exotic plants alive" />
        </Stack>
      </Box>
    </Box>
  )
}

export default PersonalInfo
