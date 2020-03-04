import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Main from './pages/main';
import Products from './pages/product';
import convBinario from './pages/convBinario';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/convBinario" component={convBinario} />
            <Route path="/mainTeste" component={Main} />
            <Route path="/products/:id" component={Products} />
        </Switch>
    </BrowserRouter>
);

export default Routes;