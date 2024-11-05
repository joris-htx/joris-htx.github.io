import { SxProps } from '@mui/material'
import { grey } from '@mui/material/colors'

const useStyle = {
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '5px',
    height: '100%',
    p: 2,
    bgcolor: 'lightgrey',
  },
  avatar: {
    width: 150,
    height: 150,
    border: 'solid 2px blue',

    '@media print': {
      width: 100,
      height: 100,
    },
  },
  section: {
    width: '100%',
  },
  icon: {
    '@media print': {
      fontSize: 12,
    },
  },
  svgIcon: {
    width: 20,

    '@media print': {
      width: 16,
    },
  },
  link: {
    textDecoration: 'none',
  },
  iconLink: {
    color: grey[600],

    '@media print': {
      display: 'none',
    },
  },
  marginTopOnPrint: {
    '@media print': {
      marginTop: 4,
    },
  },
} satisfies SxProps

export default useStyle
