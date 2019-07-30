import React, { Component } from 'react'


export class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            error: null,
        }
    }
    
    onSubmit = event => {
        const { email, password } = this.state;
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
            email == '' ||
            password == ''

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

                            {error && <p>{error.message}</p>}
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SignIn
