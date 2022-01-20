import { AppBar, Avatar, Box, Button, Collapse, Container, Icon, IconButton, Menu, MenuItem, Slide, Toolbar, Tooltip, Typography, Zoom } from '@mui/material';

import Home from './Home';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

import { React, useState } from 'react'
import MHSLogo from './icons/MHS_Logo_Transparent_Trimmed.png';
import Collections from './Collections';
import AboutUs from './AboutUs';
import { Link } from 'react-router-dom';
import { NFTCalendar } from './CustomIcons';

export const pages = [
    { name: 'Home', link: '/', component: <Home />, icon: <HomeIcon sx={{ mr: 1 }} /> },
    { name: 'Collections', link: '/collections', component: <Collections />, icon: <CollectionsIcon sx={{ mr: 1 }} /> },
    { name: 'About Us', link: '/about', component: <AboutUs />, icon: <InfoTwoToneIcon sx={{ mr: 1 }} /> },
];

const NavigationBar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = (event) => {
        setAnchorElNav(null);
    }

    return (
        <AppBar position='static' color='transparent' elevation={0} sx={{ mb: 3 }}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>

                    {/* MHS Logo - Desktop */}
                    <IconButton sx={{ mr: 2, display: { xs: 'none', sm: 'flex' } }}>
                        <Avatar src={MHSLogo} alt='MHS Logo' width={40}></Avatar>
                    </IconButton>

                    {/* Pages - Desktop */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                        {pages.map((page) => (
                            <Button component={Link} to={page.link} sx={{ mr: 2, color: 'black', fontFamily: 'inherit', fontWeight: 400 }}>{page.name}</Button>
                        ))}
                    </Box>

                    {/* Menu - Mobile */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton size='large' color='inherit' onClick={handleOpenNavMenu}>
                            {!Boolean(anchorElNav) ? <MenuIcon /> : <MenuOpenIcon />}
                        </IconButton>

                        <Collapse in={anchorElNav}>
                            <Menu
                                id='menu-appbar'
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
                                elevation={0}
                                sx={{ mt: 1, display: { xs: 'flex', sm: 'none' } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem component={Link} to={page.link} key={page.name} onClick={handleCloseNavMenu} sx={{ width: '100vh' }}>
                                        {page.icon}
                                        <Typography fontFamily='Lato' textAlign='center'>{page.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Collapse>
                    </Box>

                    {/* MHS Logo - Mobile */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton>
                            <Avatar src={MHSLogo} alt='MHS Logo' sx={{ width: 40, height: 40 }}></Avatar>
                        </IconButton>
                    </Box>

                    {/* Staff Login - Desktop/Mobile */}
                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title='Staff Login' enterDelay={200} leaveDelay={200}>
                            <Button sx={{ color: 'black' }}><LoginIcon /></Button>
                        </Tooltip>
                    </Box> */}

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavigationBar;
