import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Item from './Components/Item/Item';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/portfolio/' component={Portfolio} />
        <Route path='/contact/' component={Contact} />
        <Route path={`/item/:id`} component={Item} />
    </Switch>
)