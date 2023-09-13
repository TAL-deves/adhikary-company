"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';
import Link from '@mui/material/Link';
// import Logo from "./../public/LT.png"

const pages = [{name:'Home',link:"/"},
{name:'About',link:"/about"}, 
{name:'Services',link:"/services"}, 
{name:'Our Team',link:"/ourTeam"}, 
{name:'Our Client',link:"/ourClient"}, 
{name:'Certificates',link:"/certificates"}, 
{name:'Contact',link:"/contact"},];
// const pages = ['Home', 'About', 'Services', 'Our Team', 'Our Client', 'Certificates', 'Contact'];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] =React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // console.log('\x1b[1m' + 'This is bold text' + '\x1b[1m');

  return (
    <AppBar position="static" sx={{bgcolor:"white", color:"#6E2F4A"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon  /> */}

         <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
         <Image
        src="/LT.png" // Path to your image in the public directory
        alt="Logo Image"
        width={160}
        height={100}
      />
         </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Adhikary&Com.
          </Typography> */}

 {/* small device menu sec */}
          <Box sx={{ flexGrow: 1,color: '#6E2F4A',":hover": {
                  bgcolor: '#6EAB49'
              }, display: { xs: 'flex', md: 'none' } }}>
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
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{color:"black",
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link href={page.link}>
                   <Typography textAlign="center" variant='h6' sx={{color: '#6E2F4A',":hover": {
                  color: '#color'
              },}}>{page.name}</Typography>
              </Link>
              </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* small device image sec */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr:"30%" }}>
          <Image
        src="/LT.png" // Path to your image in the public directory
        alt="Logo Image"
        width={160}
        height={100}
      />
          </Box>

           {/* large device menu sec */}
          <Box sx={{ flexGrow: 0 ,fontSize: 12, display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#6E2F4A',":hover": {
                  color: '#370617'
              }, display: 'block' }}
              href={page.link}
              >
                <Typography variant='body1'>
                {page.name}
                </Typography>
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;