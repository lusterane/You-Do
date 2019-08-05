import React from 'react';

import Navigation from '../Navigation';
import { PasswordForgetForm } from '../PasswordForget';
import { PasswordChangeForm } from '../PasswordChange';

const AccountPage = () => (
    <React.Fragment>
        <Navigation />

        <h1>Account Page</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
    </React.Fragment>
)

export default AccountPage;
