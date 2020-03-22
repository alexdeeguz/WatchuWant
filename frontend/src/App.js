//libraries and assets
import React from 'react';
import './App.css';

//react routing
import { AuthRoute, ProtectedRoute } from '../src/util/route_util';
import { Route, Switch } from 'react-router-dom';

//components
import NavBarContainer from './components/nav/navbar_container';
import UserShowContainer from './components/users/user_show_container';
import PreferencesContainer from './components/preferences/preferences_container'
import RestaurantContainer from './components/restaurant/restaurant_container';
import Loading from './components/loading/spinner';
import Team from './components/team/team.js'

import SplashCarousel from './components/carousel/splash';


const App = () => {
  return (
    <div className='App'>
        <Route path='/' component={NavBarContainer}/>
        <Switch>
          <Route path='/JAKT_Team' component={Team}/>
          <ProtectedRoute path='/loading' component={Loading} />
          <ProtectedRoute path='/restaurants/:id' component={RestaurantContainer}/>
          <ProtectedRoute path="/preferences" component={PreferencesContainer} />
          <ProtectedRoute path="/user" component={UserShowContainer} />
          <AuthRoute path="/" component={SplashCarousel} />
        </Switch>
        
    </div>
  );
}

export default App;
