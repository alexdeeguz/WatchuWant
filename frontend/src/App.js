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
<<<<<<< HEAD
import Preferences from './components/preferences/preferences'

=======
// import testingContainer from './components/indev/testingContainer';
>>>>>>> ac3846b8787b5efe5bb67afb0b834a369747e52c

const App = () => {
  return (
    <div className='App'>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
<<<<<<< HEAD
            <ProtectedRoute  path="/preferences" component={Preferences} />
=======
>>>>>>> ac3846b8787b5efe5bb67afb0b834a369747e52c
            <ProtectedRoute exact path="/" component={UserShowContainer} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
