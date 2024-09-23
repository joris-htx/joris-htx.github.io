import { SxProps } from '@mui/material'
import { grey } from '@mui/material/colors'

const style = {
  personalInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '5px',
    height: '100%',
    p: 2,
    bgcolor: 'lightgrey',
  },
  avatar: {
    width: 200,
    height: 200,
    border: 'solid 2px blue',
  },
  section: {
    width: '100%',
  },
  link: {
    textDecoration: 'none',
  },
  iconLink: {
    color: grey[600],
  },
} satisfies SxProps

export default style
