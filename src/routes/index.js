import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from '../components/Layout.js';
import About from '../components/About.js';
import Home from '../components/Home/Home.js';
import FrontEnd from '../components/front-end/FrontEnd.js';
import Agile from '../components/agile/Agile.js';
import ApplicationArchitecture from '../components/application-architecture/ApplicationArchitecture.js';


const AppRoutes =
        (
        <Router history={hashHistory} >
          <Route path='/' component={ Layout } >
            <IndexRoute component={ Home } ></IndexRoute>
            <Route path="about-me" component={ About } ></Route>
            <Route path="front-end" component={ FrontEnd } ></Route>
            <Route path="agile" component={ Agile } ></Route>
            <Route path="application-architecture" component={ ApplicationArchitecture } ></Route>
          </Route>
        </Router>
      );
export default AppRoutes;
