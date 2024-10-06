import { Paper } from '@mui/material'

import style from './style'
import Header from '../Header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Header>
      <Paper elevation={1} sx={style.layout}>
        {children}
      </Paper>
    </Header>
  )
}

export default Layout
