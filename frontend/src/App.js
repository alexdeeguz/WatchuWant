//libraries and assets
import React from 'react';
import './App.css';

//react routing
import { AuthRoute, ProtectedRoute } from '../src/util/route_util';
import { Switch, Route } from 'react-router-dom';

//components
import NavBarContainer from './components/nav/navbar_container';
import MainPage from './components/main/main_page';
import LoginFormContainer from './components/session/login_form_container';
import SignupFormContainer from './components/session/signup_form_container';
import UserShowContainer from './components/users/user_show_container';
import Footer from './components/footer/footer';
import Preferences from './components/preferences/preferences'


const App = () => {
  return (
    <div className='App'>
        <NavBarContainer className="nav-bar"/>
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute  path="/preferences" component={Preferences} />
            
            <ProtectedRoute exact path="/" component={UserShowContainer} />
        </Switch>
    </div>
  );
}

export default App;
