import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Post from './Components/Post/Post';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/portfolio/' component={Portfolio} />
        <Route path='/contact/' component={Contact} />
        <Route path={`/item/:id`} component={Post} />
    </Switch>
)