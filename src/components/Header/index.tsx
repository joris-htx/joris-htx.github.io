import MenuIcon from '@mui/icons-material/Menu'
import PrintIcon from '@mui/icons-material/Print'
import {
  AppBar,
  Box,
  Button,
  // CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import React from 'react'
import { FormattedMessage } from 'react-intl'

type Props = {
  children: React.ReactNode
}

const drawerWidth = 240
const navItems = ['Home', 'About', 'Contact']

const Header = ({ children }: Props) => {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setIsMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Joris Harnetiaux
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
              <ListItemIcon>
                <PrintIcon />
                <FormattedMessage id="print" defaultMessage="Print" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container = window.document.body

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {/* <CssBaseline /> */}
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, lineHeight: 0.9 }}
            >
              Joris
              <br />
              &nbsp;&nbsp;Harnetiaux
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
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
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
      <Box>{children}</Box>
    </>
  )
}

export default Header
