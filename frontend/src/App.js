//libraries and assets
import React from 'react';
import './App.css';

//react routing
import { AuthRoute, ProtectedRoute } from '../src/util/route_util';
import { Switch} from 'react-router-dom';

//components
import NavBarContainer from './components/nav/navbar_container';
import UserShowContainer from './components/users/user_show_container';
import PreferencesContainer from './components/preferences/preferences_container'
import RestaurantContainer from './components/restaurant/restaurant_container';
import Loading from './components/loading/spinner';
// import Main from './components/main/main';

// testing
// import {Route} from 'react-router-dom';
import SplashCarousel from './components/carousel/splash';


const App = () => {
  return (
    <div className='App'>
        <NavBarContainer className="nav-bar"/>
        <Switch>
          <ProtectedRoute path='/loading' component={Loading} />
          <ProtectedRoute path='/restaurants/:id' component={RestaurantContainer}/>
          <ProtectedRoute path="/preferences" component={PreferencesContainer} />
          <ProtectedRoute path="/user" component={UserShowContainer} />
          <AuthRoute path="/" component={SplashCarousel} />
          {/* <AuthRoute path="/" component={ Main } /> */}
        </Switch>
        
    </div>
  );
}

export default App;
