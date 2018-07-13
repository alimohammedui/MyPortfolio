import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Landingpage from './Landingpage';

import Contacts from './Contacts';
import Projects from './Projects';
import Resume from './Resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />

    <Route exact path="/Contacts" component={Contacts} />
    <Route exact path="/Projects" component={Projects} />
    <Route exact path="/Resume" component={Resume} />
  </Switch>
)

export default Main;
