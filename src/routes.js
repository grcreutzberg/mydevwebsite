import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Main from './pages/main';
import Products from './pages/product';
import binToDec from './pages/binToDec';
import decToBin from './pages/decToBin';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/bin2dec" component={binToDec} />
            <Route path="/dec2bin" component={decToBin} />
            <Route path="/mainTeste" component={Main} />
            <Route path="/products/:id" component={Products} />
        </Switch>
    </BrowserRouter>
);

export default Routes;