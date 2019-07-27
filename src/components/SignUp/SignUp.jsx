import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/Routes'

const SignUpPage = () => (
    <div>
        <h1>Sign Up</h1>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '', 
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE}
    }

    onSubmit = event => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE});
            })
            .catch(error => {
                this.setState({ error });
            });

            event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;
        
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form className='form-group' onSubmit={this.onSubmit}>
                <input
                    className='form-control'
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Username"
                />
                <input
                    className='form-control'
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Enter Email"
                />
                <input
                    className='form-control'
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input 
                    className='form-control'
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button type="submit" className='btn btn-primary' disabled={isInvalid}>Sign Up</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpForm = withFirebase(SignUpFormBase);

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
)

export default SignUpPage;

export { SignUpForm, SignUpLink };