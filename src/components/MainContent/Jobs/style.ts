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

      '@media print': {
        py: 0,
        paddingLeft: 1,
      },
    },
    listItemIcon: {
      minWidth: 16,

      [theme.breakpoints.up('sm')]: {
        minWidth: 54,
      },

      '@media print': {
        minWidth: 16,
      },
    },
    bullet: {
      '@media print': {
        fontSize: 12,
      },
    },
    listText: {
      '@media print': {
        fontSize: 12,
      },
    },
    marginTop: {
      '@media print': {
        marginTop: 7,
      },
    },
  }) satisfies SxProps

export default style
