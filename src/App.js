import * as React from 'react';
import background from './images/bg-blurred.jpg';
import NavigationBar from './NavigationBar';
import Home from './Home';
// import TestPage from './TestPage';

const App = () => {

  return (

    // <TestPage />

    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
    }}>

      <NavigationBar />

      <Home />

    </div>

  );
}

export default App;

