import { SxProps, Theme } from '@mui/material'

const style = (theme: Theme) =>
  ({
    alignCenter: {
      textAlign: 'center',
    },
    headerContainer: {
      display: 'flex',

      '@media print': {
        display: 'none',
      },
    },
    toolbar: {
      justifyContent: 'space-between',
    },
    menuIcon: {
      marginRight: 2,

      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbarLogo: {
      flexGrow: 1,
      display: 'none',
      lineHeight: 0.9,

      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    drawer: {
      display: {
        xs: 'block',
        sm: 'none',
      },

      '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: 240,
      },
    },
    button: {
      color: '#fff',
      display: 'none',

      [theme.breakpoints.up('sm')]: {
        display: 'inline-flex',
      },
    },
    switch: {
      '& .MuiSwitch-root': {
        width: 62,
        height: 34,
      },

      '& .MuiSwitch-switchBase': {
        marginTop: 0.5,
        padding: 0,
        transform: 'translateX(6px)',

        '&.Mui-checked': {
          color: '#fff',
          transform: 'translateX(22px)',

          '& + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: '#aab4be',
          },
        },
      },

      '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.secondary.main,
        width: 28,
        height: 28,
      },

      '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        borderRadius: 20 / 2,
      },
    },
  }) satisfies SxProps

export default style
