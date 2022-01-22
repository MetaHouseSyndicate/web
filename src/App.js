import * as React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import background from './images/bg-blurred.jpg';
import NavigationBar, { pages } from './NavigationBar';

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
                    { pages.map((page) => (
                        <Route exact path={page.link} component={page.component} />
                    )) }
                </Switch>
            </div>

        </BrowserRouter>
    );
}

export default App;

