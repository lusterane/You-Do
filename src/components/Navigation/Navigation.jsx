import React, { Component } from 'react'
// import { Media } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css'

import * as ROUTES from '../../constants/routes'

export class Navigation extends Component {
    getListStyle = {
        textDecoration: 'none',
        color: '#ffffff',
    };
    
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <Link className='navbar-brand' to={ROUTES.HOME}>YOU-DO</Link>
                <ul className='navbar-nav'>
                    <li className='nav-item active'>
                        <a className='nav-link'><Link className='nav-link' to={ROUTES.HOME}>Home</Link></a>
                    </li>
                    <li className='nav-item active'>
                        <a className='nav-link'><Link className='nav-link' to={ROUTES.SIGN_IN}>Sign In</Link></a>
                    </li>
                    <li className='nav-item active'>
                        <a className='nav-link'><Link className='nav-link' to={ROUTES.SIGN_UP}>Sign Up</Link></a>
                    </li>
                    <li className='nav-item active'>
                        <a className='nav-link'><Link className='nav-link' to={ROUTES.ACCOUNT}>Account</Link></a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation
