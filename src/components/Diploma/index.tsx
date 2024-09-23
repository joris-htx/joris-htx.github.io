import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Box, Stack } from '@mui/material'

import style from './style'
import { useLocale } from '../../hooks'

type Props = {
  title: string
  subtitles: string[]
  schoolName: string
  startDate: Date
  endDate?: Date
  location: string
}

const Diploma = ({ title, subtitles, schoolName, startDate, endDate, location }: Props) => {
  const locale = useLocale()

  return (
    <Stack direction="row" alignItems="stretch" justifyContent="space-between">
      <Stack direction="column" alignItems="flex-start">
        <Box sx={style.title}>{title}</Box>
        {subtitles.map((subtitle) => (
          <Box sx={style.subtitle} key={subtitle}>
            {subtitle}
          </Box>
        ))}
        <Stack direction="row" gap={1} alignItems="center" sx={style.date}>
          <CalendarMonthIcon />
          {startDate.toLocaleString(locale, { month: 'long' })} {startDate.getFullYear()}
          {endDate &&
            ` - ${endDate.toLocaleString(locale, { month: 'long' })} ${endDate.getFullYear()}`}
        </Stack>
      </Stack>

      <Stack direction="column" alignItems="end" justifyContent="space-between">
        <Box sx={style.title}>{schoolName}</Box>
        <Stack direction="row" gap={1} alignItems="center">
          <LocationOnIcon />
          {location}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Diploma
