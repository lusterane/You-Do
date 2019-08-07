import React from 'react';

import Navigation from '../Layouts/Navigation';
import { PasswordForgetForm } from '../PasswordForget';
import { PasswordChangeForm } from '../PasswordChange';

import { withAuthorization, AuthUserContext } from '../Session'

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <React.Fragment>
                <Navigation />
                <h1>Account Page</h1>
                <span>Account: {authUser.email}</span>
                <PasswordForgetForm />
                <PasswordChangeForm />
            </React.Fragment>
        )}
    </AuthUserContext.Consumer>
)

const condition = authUser => authUser != null;

export default withAuthorization(condition)(AccountPage);
