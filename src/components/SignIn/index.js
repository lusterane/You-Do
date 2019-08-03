import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp'
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
    <React.Fragment>
        <SignInForm />
        <div className="form-footer">
            <SignUpLink />
        </div>
    </React.Fragment>
)

class SignInFormBase extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            error: null,
        }
    }
    
    clearState = () => {
        this.setState({
            email: '',
            password:'',
            error: null,
        });
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.clearState();
                this.props.history.push(ROUTES.HOME);
            })
            .catch( error => {
                this.setState({ error });
            });
        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {
        const {
            email,
            password,
            error,
        } = this.state;
        
        const isInvalid =
            email === '' ||
            password === ''

        return (
            <React.Fragment>
                <div className="container">
                    <div className="card">
                        <h1>SIGN IN</h1>
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
                                name="password"
                                value={password}
                                onChange={this.onChange}
                                type="password"
                                placeholder="Password"
                            />
                            <button type="submit" className='btn btn-primary' id="submit-btn" disabled={isInvalid}>SIGN IN</button>
                        </form>
                        <div className="form-footer">
                            {error && <p>{error.message}</p>}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const SignInForm = withFirebase(SignInFormBase);

export default SignInPage;

export { SignInForm }