import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/portfolio/' component={Portfolio} />
        <Route path='/contact/' component={Contact} />
    </Switch>
)