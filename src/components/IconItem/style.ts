import { SxProps } from '@mui/material'

const style = {
  iconItem: ({ halfWidth }: { halfWidth?: boolean }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
    flexBasis: halfWidth ? '50%' : 'none',
  }),
} satisfies SxProps

export default style
