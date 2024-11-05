import { SxProps } from '@mui/material'

const style = {
  rankingBar: {
    width: '100%',
    height: 10,
    borderRadius: 5,
  },
  icon: {
    width: 20,

    '@media print': {
      width: 16,
    },
  },
  label: {
    flexBasis: '50%',
  },
} satisfies SxProps

export default style
