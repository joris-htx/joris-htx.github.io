import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Box, Stack, useTheme } from '@mui/material'

import useStyle from './style'
import { useLocale } from '../../hooks'

type Props = {
  title: string
  subtitles: string[]
  schoolName: string
  startDate: Date
  endDate?: Date
}

const Diploma = ({ title, subtitles, schoolName, startDate, endDate }: Props) => {
  const locale = useLocale()
  const theme = useTheme()
  const style = useStyle(theme)

  return (
    <Box sx={style.diplomaWrapper}>
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

      <Stack direction="column" alignItems="end" justifyContent="end">
        <Stack direction="row" gap={1} alignItems="center">
          <LocationOnIcon />
          {schoolName}
        </Stack>
      </Stack>
    </Box>
  )
}

export default Diploma
