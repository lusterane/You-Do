import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Header from './components/Layouts/Header';

import Navigation from './components/Navigation/Navigation'
import SignUpPage from './components/SignUp/SignUp';
import SignInPage from './components/SignIn/SignIn';
import PasswordForgetPage from './components/PasswordForget/PasswordForget';
import HomePage from './components/Home/Home';
import AccountPage from './components/Account/Account';

import * as ROUTES from './constants/Routes'

class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>            

                    <script src="https://www.gstatic.com/firebasejs/6.3.3/firebase-app.js"></script>
                <Router>
                    <div className="app">
                        <Navigation />
                        <Header />
                        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                        <Route path={ROUTES.HOME} component={HomePage} />
                        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
