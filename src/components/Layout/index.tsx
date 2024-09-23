import { Paper } from '@mui/material'

import style from './style'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Paper elevation={1} sx={style.layout}>
      {children}
    </Paper>
  )
}

export default Layout
