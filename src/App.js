import * as React from 'react';
import background from './images/bg-blurred.jpg';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
    }}>

      <Navbar />

      <Outlet />

    </div>
  );
}

export default App;

