import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Main from './pages/main';
import Products from './pages/product';
import convBinario from './pages/convBinario';
import diceRoll from './pages/diceRoll';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/convBinario" component={convBinario} />
            <Route path="/diceRoll" component={diceRoll} />
            <Route path="/mainTeste" component={Main} />
            <Route path="/products/:id" component={Products} />
        </Switch>
    </BrowserRouter>
);

export default Routes;