import MenuIcon from '@mui/icons-material/Menu'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import PrintIcon from '@mui/icons-material/Print'
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Switch,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import useStyle from './style'
import { SAVED_LOCALE_KEY } from '../../App'
import { useLocale } from '../../hooks'
import { Locale } from '../../hooks/types'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import FranceFlagIcon from '../../shared-resources/france-flag-icon.svg'
import UnitedKingdomFlagIcon from '../../shared-resources/united-kingdom-flag-icon.svg'

type Props = {
  children: React.ReactNode
}

const Header = ({ children }: Props) => {
  const locale = useLocale()
  const theme = useTheme()
  const style = useStyle(theme)
  const [, setSavedLocale] = useLocalStorage<Locale>(SAVED_LOCALE_KEY, 'en')

  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setIsMobileOpen((prevState) => !prevState)
  }

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en'
    setSavedLocale(newLocale)
    window.location.replace(`?locale=${newLocale}`)
  }

  const onSaveClick = () => {
    const fileName = `joris_harnetiaux_${locale.toLocaleUpperCase()}`
    const pdfUrl = `resources/${fileName}.pdf`
    const link = document.createElement('a')

    link.href = pdfUrl
    link.download = fileName

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={style.alignCenter}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Joris Harnetiaux
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={style.alignCenter} onClick={window.print}>
            <ListItemIcon>
              <PrintIcon />
            </ListItemIcon>
            <FormattedMessage id="Header.Print" defaultMessage="Print" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={style.alignCenter} onClick={onSaveClick}>
            <ListItemIcon>
              <PictureAsPdfIcon />
            </ListItemIcon>
            <FormattedMessage id="Header.SavePDF" defaultMessage="Save as PDF" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  const container = window.document.body

  return (
    <>
      <Box sx={style.headerContainer}>
        <AppBar component="nav">
          <Toolbar sx={style.toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={style.menuIcon}
            >
              <MenuIcon />
            </IconButton>
            <Box component="img" src="resources/logo.png" alt="logo" width={70} marginRight={1} />
            <Typography variant="h6" component="div" sx={style.toolbarLogo}>
              Joris
              <br />
              &nbsp;&nbsp;Harnetiaux
            </Typography>

            <Stack direction="row" gap={2} alignItems="center">
              <Button
                startIcon={<PrintIcon />}
                variant="contained"
                color="secondary"
                onClick={window.print}
                sx={style.button}
              >
                <FormattedMessage id="Header.Print" defaultMessage="Print" />
              </Button>

              <Button
                startIcon={<PictureAsPdfIcon />}
                variant="contained"
                color="secondary"
                onClick={onSaveClick}
                sx={style.button}
              >
                <FormattedMessage id="Header.SavePDF" defaultMessage="Save as PDF" />
              </Button>

              <Stack direction="row" spacing={1} alignItems="center">
                <Box component="img" src={UnitedKingdomFlagIcon} alt="EN" width={24} />
                <Switch checked={locale === 'fr'} onChange={toggleLocale} sx={style.switch} />
                <Box component="img" src={FranceFlagIcon} alt="FR" width={24} />
              </Stack>
            </Stack>
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
            sx={style.drawer}
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
