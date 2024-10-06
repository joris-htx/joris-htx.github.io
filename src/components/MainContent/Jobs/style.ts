import { SxProps, Theme } from '@mui/material'

const style = (theme: Theme) =>
  ({
    list: {
      padding: 0,
    },
    listItem: {
      py: 0,
      paddingLeft: 1,

      [theme.breakpoints.up('sm')]: {
        paddingLeft: 2,
      },
    },
    listItemIcon: {
      minWidth: 16,

      [theme.breakpoints.up('sm')]: {
        minWidth: 54,
      },
    },
  }) satisfies SxProps

export default style
