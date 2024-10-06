import { SxProps, Theme } from '@mui/material'

const useStyle = (theme: Theme) =>
  ({
    diplomaWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,

      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        gap: 0,
      },
    },
    title: {
      marginBottom: 0.5,
      fontSize: 16,
      fontWeight: 700,
      color: '#333',
    },
    subtitle: {
      marginBottom: 1,
      fontSize: 14,
      fontWeight: 700,
      color: '#777',
    },
    date: {
      textTransform: 'capitalize',
    },
  }) satisfies SxProps

export default useStyle
