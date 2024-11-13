import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Box, Stack, useTheme } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'

import useStyle from './style'
import { printDuration } from '../../helpers'
import { useLocale } from '../../hooks'

type Props = {
  titles: string[]
  company: string
  companyLogoSrc: string
  location: string
  startDate: Date
  endDate?: Date
  logoWidth?: number
}

const JobTitle = ({
  titles,
  company,
  companyLogoSrc,
  location,
  startDate,
  endDate,
  logoWidth = 120,
}: Props) => {
  const intl = useIntl()
  const locale = useLocale()
  const theme = useTheme()
  const style = useStyle(theme)

  return (
    <Stack direction="column" position="relative">
      <Box sx={style.itemWrapper({ reverse: true })}>
        <Stack direction="column" alignItems="flex-start" marginBottom={1}>
          {titles.map((title) => (
            <Box sx={style.jobTitle} key={title}>
              {title}
            </Box>
          ))}
        </Stack>
        <Box
          component="img"
          src={companyLogoSrc}
          alt={company}
          width={logoWidth}
          sx={style.companyLogo}
        />
      </Box>

      <Box sx={style.itemWrapper({ reverse: false })}>
        <Stack direction="row" gap={1} alignItems="center" textAlign="left">
          <CalendarMonthIcon />
          {printDuration({ intl, startDate, endDate })}
          <Box component="span" sx={style.date}>
            ({startDate.toLocaleString(locale, { month: 'short' })} {startDate.getFullYear()} -{' '}
            {endDate ? (
              `${endDate.toLocaleString(locale, { month: 'short' })} ${endDate.getFullYear()}`
            ) : (
              <FormattedMessage id="JobTitle.Current" defaultMessage="Current position" />
            )}
            )
          </Box>
        </Stack>
        <Stack direction="row" gap={1} alignItems="center">
          <LocationOnIcon />
          {location}
        </Stack>
      </Box>
    </Stack>
  )
}

export default JobTitle
