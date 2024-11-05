import { SxProps } from '@mui/material'

const style = {
  layout: {
    maxWidth: 1240,
    margin: '0 auto',
    marginTop: '56px',
    padding: 3,
    backgroundColor: '#F5F5F5',

    '@media print': {
      marginTop: 0,
      padding: 0,
      fontSize: 12,
      boxShadow: 'none',
    },
  },
} satisfies SxProps

export default style
