import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Post from './Components/Post/Post';
import Success from './Components/Success/Success';
import About from './Components/About/About';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/portfolio/' component={Portfolio} />
        <Route path='/contact/' component={Contact} />
        <Route path={`/item/:id`} component={Post} />
        <Route path={`/success/`} component={Success} />
        <Route path={`/about/`} component={About} />
    </Switch>
)