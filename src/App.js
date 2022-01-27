import * as React from 'react';
import background from './images/bg-blurred.jpg';
import Home from './Home';


const App = () => {

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
    }}>

      <Home />

    </div>
  );
}

export default App;

