import { SxProps, Theme } from '@mui/material'

const style = (theme: Theme) =>
  ({
    layout: {
      maxWidth: 1240,
      margin: '0 auto',
      marginTop: '56px',
      paddingLeft: 3,
      backgroundColor: '#F5F5F5',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

      [theme.breakpoints.up('md')]: {
        padding: 3,
      },

      '@media print': {
        marginTop: 0,
        padding: 0,
        fontSize: 12,
        boxShadow: 'none',
        backgroundColor: '#FFFFFF',
      },
    },
  }) satisfies SxProps

export default style
