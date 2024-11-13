import { SxProps, Theme } from '@mui/material'

const useStyle = (theme: Theme) =>
  ({
    mainContentContainer: {
      position: 'relative',
      height: '100%',
      marginLeft: 4,
      padding: 2,
      zIndex: 1,

      [theme.breakpoints.up('md')]: {
        marginLeft: 0,
      },

      '@media print': {
        marginLeft: 0,
        paddingBottom: 3,
      },
    },
    wave: {
      display: 'block',
      position: 'relative',
      height: 40,
      width: '100%',
      marginLeft: 4,
      marginBottom: 2,
      backgroundColor: '#C9CDD4',
      transform: 'scale(1, 1)',
      zIndex: 0,

      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        borderRadius: '100%',
        width: '100%',
        height: 300,
        backgroundColor: '#F5F5F5',
        right: '-25%',
        top: 20,
        zIndex: 0,

        '@media print': {
          backgroundColor: '#FFFFFF',
        },
      },

      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        borderRadius: '100%',
        width: '100%',
        height: 300,
        backgroundColor: '#C9CDD4',
        left: '-25%',
        top: -240,
        clipPath: 'ellipse(100 % 15 % at - 15 % 100 %)',
        zIndex: 0,
      },
    },
    waveCurve: {
      content: '""',
      display: 'block',
      position: 'absolute',
      backgroundColor: 'transparent',
      bottom: -50,
      left: -32,
      height: 50,
      width: 30,
      borderTopLeftRadius: 25,
      boxShadow: '-11px -25px 0 10px #C9CDD4',
      zIndex: 0,
    },
    title: {
      alignItems: 'center',
    },
    divider: {
      marginTop: 3,
    },
  }) satisfies SxProps

export default useStyle
