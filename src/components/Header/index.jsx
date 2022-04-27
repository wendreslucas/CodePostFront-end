import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { UserContext } from '../../context/UserContext'
import { SettingContext } from '../../context/SettingContext'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/styles'

const Ancor = styled.a`
  text-decoration: none;
`

const useStyles = makeStyles({
  diplayMenu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  padding: {
    padding: '30px'
  }
})

const Header = () => {
  const classes = useStyles()
  const { userName } = useContext(UserContext)
  const {
    handleNovoPost,
    handlePosts,
    handleHome,
    handleLogout,
    handleProfile
  } = useContext(SettingContext)

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Ancor href="/">
              <img
                src="/postcode_logo.svg"
                alt="CodeLeap Logo"
                width="90"
                height="30"
              />
            </Ancor>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              <MenuItem onClick={handleNovoPost}>
                <Typography textAlign="center">Novo</Typography>
              </MenuItem>
              <MenuItem onClick={handlePosts}>
                <Typography textAlign="center">Posts</Typography>
              </MenuItem>
              <MenuItem onClick={handleHome}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Ancor href="/">
              <img
                src="/codeleap_logo_black.png"
                alt="CodeLeap Logo"
                width="80"
                height="30"
              />
            </Ancor>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleNovoPost}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              NOVO
            </Button>
            <Button
              onClick={handlePosts}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              POSTS
            </Button>
            <Button
              onClick={handleHome}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              HOME
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={userName}
                  src={`https://github.com/${userName}.png`}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem className={classes.diplayMenu} onClick={handleProfile}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>

              <MenuItem className={classes.diplayMenu} onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
