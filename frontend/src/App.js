//libraries and assets
import React from 'react';
import './App.css';

//react routing
import { AuthRoute, ProtectedRoute } from '../src/util/route_util';
import { Switch } from 'react-router-dom';

//components
import NavBarContainer from './components/nav/navbar_container';
import MainPage from './components/main/main_page';
import LoginFormContainer from './components/session/login_form_container';
import SignupFormContainer from './components/session/signup_form_container';
import UserShowContainer from './components/users/user_show_container';
import Footer from './components/footer/footer';


const App = () => {
  return (
    <div className='App'>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

            <ProtectedRoute exact path="/" component={UserShowContainer} />
        </Switch>
        {/* <Footer /> */}
        {/* <Route path='/testroute' component={}/> */}
    </div>
  );
}

export default App;
