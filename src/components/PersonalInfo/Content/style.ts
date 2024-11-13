import { SxProps, Theme } from '@mui/material'

const useStyle = (theme: Theme) =>
  ({
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '5px',
      borderTopRightRadius: 0,
      height: '100%',
      p: 2,
      paddingBottom: 0,
      backgroundColor: '#C9CDD4',
    },
    avatar: {
      maxWidth: 200,
      maxHeight: 200,
      width: '100%',
      height: 'auto',
      border: `solid 2px ${theme.palette.secondary.main}`,
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
      '@media print': {
        display: 'none',
      },
    },
    marginTopOnPrint: {
      '@media print': {
        marginTop: 6,
      },
    },
  }) satisfies SxProps

export default useStyle
