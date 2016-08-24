import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from '../components/Layout.js';
import Settings from '../components/Settings.js';
import History from '../components/History.js';
import Public from '../components/Public.js';
import About from '../components/About.js';
import Home from '../components/Home/Home.js';
import Work from '../components/work/Work.js';
import OurPrinciples from '../components/OurPrinciples.js';

const AppRoutes =
        (
        <Router history={hashHistory} >
          <Route path='/' component={ Layout } >
            <IndexRoute component={ Home } ></IndexRoute>
            <Route path="about" component={ Home } ></Route>
            <Route path="work" component={ Work } ></Route>
          </Route>
        </Router>
      );
export default AppRoutes;
