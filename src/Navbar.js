import { AppBar, Avatar, Box, Button, Collapse, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';

import Home from './Home';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';

import { React, useState } from 'react'
import MHSLogo from './icons/MHS_Logo_Transparent_Trimmed.png';
import { Link } from 'react-router-dom';

export const pages = [
    // { name: 'Home', link: '/', component: <Home />, icon: <HomeIcon sx={{ mr: 1 }} /> },
];

const Navbar = (props) => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = (event) => {
        setAnchorElNav(null);
    }

    return (
        <AppBar position='static' color='transparent' elevation={0} sx={{ mb: 3 }} {...props}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>

                    {/* MHS Logo - Desktop */}
                    <IconButton component={Link} to='/' sx={{ mr: 2, display: { xs: 'none', sm: 'flex' } }}>
                        <Avatar src={MHSLogo} alt='MHS Logo' width={40}></Avatar>
                    </IconButton>

                    {/* Pages - Desktop */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                        {pages.map((page) => (
                            <Button sx={{ mr: 2, color: 'black', fontFamily: 'inherit', fontWeight: 400 }}>{page.name}</Button>
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
                                    <MenuItem key={page.name} onClick={handleCloseNavMenu} sx={{ width: '100vh' }}>
                                        {page.icon}
                                        <Typography fontFamily='Lato' textAlign='center'>{page.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Collapse>
                    </Box>

                    {/* MHS Logo - Mobile */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton component={Link} to='/'>
                            <Avatar src={MHSLogo} alt='MHS Logo' sx={{ width: 40, height: 40 }}></Avatar>
                        </IconButton>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;