import * as React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import background from './images/bg-blurred.jpg';
import NavigationBar, { pages } from './NavigationBar';
import Home from './Home';
import Collections from './Collections';
import AboutUs from './AboutUs';
// import TestPage from './TestPage';

const App = () => {

  return (
    <BrowserRouter>

      <div style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}>

        <NavigationBar />

        <Switch>
          {pages.map((page) => (
            <Route exact path={page.link} component={Home} />
        ))}
          <Route exact path='/' component={Home} />
          <Route exact path='/collections' component={Collections} />
          <Route exact path='/about' component={AboutUs} />
        </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;

