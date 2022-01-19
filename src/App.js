import * as React from 'react';
import background from './images/imageonline-co-blurimage.png';
import NavigationBar from './NavigationBar';
import Home from './Home';

function App() {

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover'
    }}>

      {/* <NavigationBar /> */}

      <Home />

    </div>

  );
}

export default App;

