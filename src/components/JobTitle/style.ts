import { SxProps, Theme } from '@mui/material'

const useStyle = (theme: Theme) =>
  ({
    itemWrapper: ({ reverse }: { reverse?: boolean }) => ({
      display: 'flex',
      flexDirection: reverse ? 'column-reverse' : 'column',
      gap: 1,

      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 0,
      },
    }),
    jobTitle: {
      fontSize: 16,
      fontWeight: 700,
      color: '#333',
    },
    companyLogo: {
      [theme.breakpoints.up('sm')]: {
        position: 'absolute',
        right: 0,
      },
    },
    date: {
      textTransform: 'capitalize',
    },
  }) satisfies SxProps

export default useStyle
