import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation'
import LandingPage from './components/Landing/Landing';
import SignUpPage from './components/SignUp/SignUp';
import SignInPage from './components/SignIn/SignIn';
import PasswordForgetPage from './components/PasswordForget/PasswordForget';
import HomePage from './components/Home/Home';
import AccountPage from './components/Account/Account';
import AdminPage from './components/Admin/Admin';

import * as ROUTES from './constants/Routes'

class App extends React.Component {
    render(){
        return (
            <div className="App">
                <Router>
                    <div>
                        <Navigation />

                        <hr />

                        <Route exact path={ROUTES.LANDING} component={LandingPage} />
                        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                        <Route path={ROUTES.HOME} component={HomePage} />
                        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                        <Route path={ROUTES.ADMIN} component={AdminPage} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
