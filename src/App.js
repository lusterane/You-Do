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
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                </head>
            
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
