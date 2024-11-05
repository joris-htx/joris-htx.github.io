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
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
        p: 2,
      },

      '@media print': {
        display: 'flex',
        flexDirection: 'column',
        p: 0,
        maxWidth: 200,
        borderRight: 'solid 1px #D7D7D7',
      },
    },
  }) satisfies SxProps

export default useStyle
