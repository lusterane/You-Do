import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './SignUp.css';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

const SignUpPage = () => (
    <React.Fragment>
        <SignUpForm />
    </React.Fragment>
)

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            passwordOne: '',
            passwordTwo: '',
            error: null,
        }
    }

    clearState = () => {
        this.setState({
            email: '',
            passwordOne: '',
            passwordTwo: '',
            error: null,
        });
    }
    onSubmit = event => {
        const { email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.clearState();
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error })
            });

        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {
        const {
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;
        
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '';
        return (
            <React.Fragment>
                <div className="container">
                    <div className="card">
                        <h1>SIGN UP</h1>
                        <form className='form-group' onSubmit={this.onSubmit}>
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
                            <button type="submit" className='btn btn-primary' id="submit-btn" disabled={isInvalid}>SIGN UP</button>

                            {error && <p>{error.message}</p>}
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const SignUpHome = withRouter(withFirebase(SignUpFormBase));

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
)

const SignUpForm = withFirebase(SignUpFormBase);

export default SignUpForm;

export { SignUpLink, SignUpForm };