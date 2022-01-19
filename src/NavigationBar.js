import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import React from 'react'
import MHSLogo from './icons/MHS_Logo_Transparent.png';

function NavigationBar() {
    return (
        <AppBar position='static' color='transparent'>
            <Toolbar>
                <IconButton><img src={MHSLogo} width={40} /></IconButton>
                <MenuItem>Home</MenuItem>
                <MenuItem>Collections</MenuItem>
                <MenuItem>About Us</MenuItem>
                
            </Toolbar>
        </AppBar>
    )
}

export default NavigationBar;
