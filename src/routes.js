/* router related codes, should separated when complicated */
import React from 'react';
import { Route, IndexRoute } from 'react-router'

import MainView from './containers/App/'
import HomeView from './containers/Home/'
import AboutView from './containers/About/'

var routes = (
    <Route path='/' component={MainView}>
        <IndexRoute component={HomeView} />
        <Route path='home' component={HomeView} />
        <Route path='about' component={AboutView} />
    </Route>)

export default routes