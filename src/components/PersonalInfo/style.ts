import { SxProps, Theme } from '@mui/material'

const useStyle = (theme: Theme) =>
  ({
    personalInfoButton: {
      position: 'fixed',
      flexDirection: 'column',
      width: 50,
      minWidth: 50,
      height: '100%',
      marginLeft: -3,
      marginTop: -3,
      borderRadius: 0,
      writingMode: 'vertical-lr',
      textOrientation: 'upright',
      textAlign: 'center',
      zIndex: 1,

      [theme.breakpoints.up('md')]: {
        display: 'none',
      },

      '@media print': {
        display: 'none',
      },
    },
    personalInfoContainer: {
      display: 'none',

      [theme.breakpoints.up('md')]: {
        display: 'block',
      },

      '@media print': {
        display: 'block',
        p: 0,
        maxWidth: 200,
      },
    },
  }) satisfies SxProps

export default useStyle
