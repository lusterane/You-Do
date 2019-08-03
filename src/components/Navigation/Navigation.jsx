import React, { Component } from 'react'
// import { Media } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
import SignOutButton from '../SignOut'

import * as ROUTES from '../../constants/routes'

export class Navigation extends Component {
    
    getNavStyle = () => {
        console.log("page", this.props.page === 'home')
        return (
            (this.props.page === 'home') ? 'navbar navbar-expand-lg navbar-dark' : 'navbar navbar-expand-lg navbar-light bg-light'
        );
    }

    render() {
        return (
            <React.Fragment>
                <nav className={this.getNavStyle()} id="navbar">
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
