import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Box, Stack, useTheme } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import useStyle from './style'
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
        <Stack direction="row" gap={1} alignItems="center" sx={style.date}>
          <CalendarMonthIcon />
          {startDate.toLocaleString(locale, { month: 'long' })} {startDate.getFullYear()} -{' '}
          {endDate ? (
            `${endDate.toLocaleString(locale, { month: 'long' })} ${endDate.getFullYear()}`
          ) : (
            <FormattedMessage id="JobTitle.Current" defaultMessage="Current position" />
          )}
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
