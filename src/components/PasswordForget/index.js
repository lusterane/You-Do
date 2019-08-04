import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'
import { withFirebase } from '../Firebase'

import Navigation from '../Navigation'

import './PasswordForget.css'

const PasswordForgetPage = () => (
    <React.Fragment>
        <Navigation />
        <PasswordForgetForm />
    </React.Fragment>
);

class PasswordForgetFormBase extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            error: null,
        }
    }

    onSubmit = event => {
        event.preventDefault();

        this.props.firebase
            .doPasswordReset(this.state.email)
            .then(() => {
                this.clear();
                this.props.history.push(ROUTES.SIGN_IN);
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
            this.state.email !== ''
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
                    <h1>PASSWORD FORGET</h1>
                <form onSubmit={this.onSubmit} className='form-group'>
                    <input
                        className='form-control'
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Email Address"
                        />
                    <button disabled={this.checkValidity} type="submit" className='btn btn-primary' id='submit-btn'>
                        Reset My Password
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

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password</Link>
    </p>
)

export default PasswordForgetPage;

const PasswordForgetForm = compose(
    withFirebase,
    withRouter,
)(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
