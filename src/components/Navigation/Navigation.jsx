import React, { Component } from 'react'
// import { Media } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
import SignOutButton from '../SignOut'

import * as ROUTES from '../../constants/routes'

export class Navigation extends Component {
    
    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
                    <Link className='navbar-brand' to={ROUTES.HOME}>YOU-DO</Link>
                    <div className="collapse navbar-collapse">
                        <ul className='navbar-nav'>
                            <li>
                                <a className='nav-link'><Link className='nav-link' to={ROUTES.HOME}>Home</Link></a>
                            </li>
                            <li>
                                <a className='nav-link'><Link className='nav-link' to={ROUTES.SIGN_IN}>Sign In</Link></a>
                            </li>
                            <li>
                                <a className='nav-link'><Link className='nav-link' to={ROUTES.SIGN_UP}>Sign Up</Link></a>
                            </li>
                            <li>
                                <a className='nav-link'><Link className='nav-link' to={ROUTES.ACCOUNT}>Account</Link></a>
                            </li>
                        </ul>
                    </div>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className='nav-link'><SignOutButton /></a>
                        </li>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navigation
