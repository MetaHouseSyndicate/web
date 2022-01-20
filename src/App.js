import * as React from 'react';
import background from './images/imageonline-co-blurimage.png';
import Home from './Home';

function App() {

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover'
    }}>

      <Home />

    </div>

  );
}

export default App;

