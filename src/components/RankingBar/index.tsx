import { Box, LinearProgress, Stack } from '@mui/material'
import React from 'react'

import IconItem from '../IconItem'
import style from './style'

type Props = {
  value: number
  title?: string
  iconSrc?: string
}

const RankingBar = ({ title = '', value, iconSrc }: Props) => {
  return (
    <Stack direction="row" gap={1} alignItems="center" flexGrow="1">
      {iconSrc ? (
        <IconItem
          icon={<Box component="img" src={iconSrc} alt="" sx={style.icon} />}
          text={title}
          halfWidth
        />
      ) : (
        <Box sx={style.label}>{title}</Box>
      )}
      <LinearProgress variant="determinate" value={value} sx={style.rankingBar} />
    </Stack>
  )
}

export default RankingBar
