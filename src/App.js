import * as React from 'react';
import background from './images/bg-blurred.jpg';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const App = () => {

  return (
    <Box style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
    }}>

      <Navbar />

      <Outlet />

    </Box>
  );
}

export default App;

