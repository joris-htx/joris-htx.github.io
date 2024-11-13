import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#153152',
    },
    secondary: {
      main: '#FF7043',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#FF7043',
        },
      },
    },
  },
})
