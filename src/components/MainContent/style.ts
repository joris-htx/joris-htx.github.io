import { SxProps, Theme } from '@mui/material'

const useStyle = (theme: Theme) =>
  ({
    mainContentContainer: {
      height: '100%',
      marginLeft: 4,
      p: 2,

      [theme.breakpoints.up('md')]: {
        marginLeft: 0,
      },
    },
    divider: {
      marginTop: 3,
    },
  }) satisfies SxProps

export default useStyle
