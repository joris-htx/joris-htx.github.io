import { Box } from '@mui/material'

import style from './style'

type Props = {
  icon: React.ReactNode
  text: React.ReactNode
  halfWidth?: boolean
}

const IconItem = ({ icon, text, halfWidth }: Props) => {
  return (
    <Box sx={style.iconItem({ halfWidth })}>
      {icon}
      {text}
    </Box>
  )
}

export default IconItem
