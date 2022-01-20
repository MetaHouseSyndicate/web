import { AppBar, Avatar, Box, Button, Container, Icon, IconButton, MenuItem, Toolbar, Tooltip } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import MHSLogo from './icons/MHS_Logo_Transparent_Trimmed.png';

const pages = ['Home', 'Collections', 'About Us'];

const NavigationBar = () => {

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
                            <Button sx={{ mr: 2, color: 'black', fontFamily: 'inherit', fontWeight: 400 }}>{page}</Button>
                        ))}
                    </Box>

                    {/* Menu - Mobile */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton size='large' color='inherit'>
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    {/* MHS Logo - Mobile */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton>
                            <Avatar src={MHSLogo} alt='MHS Logo' sx={{ width: 40, height: 40 }}></Avatar>
                        </IconButton>
                    </Box>
                    
                    {/* Staff Login - Desktop/Mobile */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title='Staff Login' enterDelay={200} leaveDelay={200}>
                            <Button sx={{ color: 'black' }}><LoginIcon /></Button>
                        </Tooltip>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavigationBar;
