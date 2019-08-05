import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes'
import { withFirebase } from '../Firebase'

import Navigation from'../Layouts/Navigation'

import './PasswordChange.css'

const PasswordChangePage = () => (
    <React.Fragment>
        <Navigation />
        <PasswordChangeForm />
    </React.Fragment>
);

class PasswordChangeFormBase extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            passwordOne: '',
            passwordTwo: '',
            error: null,
        }
    }

    onSubmit = event => {
        event.preventDefault();

        this.props.firebase
            .doPasswordUpdate(this.state.passwordOne)
            .then(() => {
                this.clear();
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    clear = () => {
        this.setState({
            email: '',
            error: null,
        })
    }

    checkValidity = () => {
        return(
            this.state.passwordOne !== this.state.passwordTwo || this.state.passwordOne.length < 6
        );
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="card">
                        <h1>PASSWORD CHANGE</h1>
                        <form onSubmit={this.onSubmit} className='form-group'>
                            <input
                                className='form-control'
                                name="passwordOne"
                                value={this.state.passwordOne}
                                onChange={this.handleChange}
                                type="password"
                                placeholder="New Password"
                                />
                            <input
                                className='form-control'
                                name="passwordTwo"
                                value={this.state.passwordTwo}
                                onChange={this.handleChange}
                                type="password"
                                placeholder="Confirm New Password"
                                />
                            <button disabled={this.checkValidity()} type="submit" className='btn btn-primary' id='submit-btn'>
                                Change Password
                            </button>
                            <div className='form-footer'>

                            {this.state.error && <p>{this.state.error.message}</p>}
                            </div>
                        </form>
                    </div> 
                </div>
            </React.Fragment>
        )
    }
}

const PasswordChangeLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Change Password</Link>
    </p>
)

export default PasswordChangePage;

const PasswordChangeForm = withFirebase(PasswordChangeFormBase);

export { PasswordChangeForm, PasswordChangeLink };
