import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Button, Drawer, Typography, useTheme } from '@mui/material'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Content from './Content'
import useStyle from './style'

const PersonalInfo = () => {
  const theme = useTheme()
  const style = useStyle(theme)

  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setIsMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Content />
    </Box>
  )

  const container = window.document.body
  const drawerWidth = 260

  return (
    <>
      <Button variant="contained" sx={style.personalInfoButton} onClick={handleDrawerToggle}>
        <Typography variant="button">
          <FormattedMessage id="PersonalInfo.SeeMore" defaultMessage="See more" />
        </Typography>
        <ArrowForwardIosIcon />
      </Button>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={isMobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="section" sx={style.personalInfoContainer}>
        <Content />
      </Box>
    </>
  )
}

export default PersonalInfo
