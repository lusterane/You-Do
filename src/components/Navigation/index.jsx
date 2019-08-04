import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut'
import { AuthUserContext } from '../Session'

import * as ROUTES from '../../constants/routes'

import './Navigation.css'

class Navigation extends React.Component {
    
    render() {
        return(
        <AuthUserContext.Consumer>
            { authUser =>
                authUser ? <NavigationAuth page={this.props.page}/> : <NavigationNoAuth page={this.props.page}/>
            }
        </AuthUserContext.Consumer>

        );
    }
}
class NavigationAuth extends Component {
    
    getNavStyling = () => {
        console.log("props", this.props)
        return (
            (this.props.page === 'home') ? 'navbar navbar-expand-lg navbar-dark' : 'navbar navbar-expand-lg navbar-light bg-light'
        );
    }
    render() {
        
        const logoStyle = (this.props.page === 'home') ? {
            width: '6em',
            transform: 'rotate(-13deg)',
            filter: 'invert(100%)',
        } : {
            width: '6em',
            transform: 'rotate(-13deg)',
        } 
        return (
            <React.Fragment>
                <nav className={this.getNavStyling()} id="navbar">
                    <Link className='navbar-brand' to={ROUTES.HOME}>
                        <img style={logoStyle} src={require('../../assets/you-do-logo.png')} alt="YOU-DO"></img>
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className='navbar-nav'>
                            <li>
                                <a className='nav-link'><Link className='nav-link' to={ROUTES.HOME}>Home</Link></a>
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

class NavigationNoAuth extends Component {
    
    getNavStyling = () => {
        console.log("props", this.props)
        return (
            (this.props.page === 'home') ? 'navbar navbar-expand-lg navbar-dark' : 'navbar navbar-expand-lg navbar-light bg-light'
        );
    }
    render() {
        const logoStyle = (this.props.page === 'home') ? {
            width: '6em',
            transform: 'rotate(-13deg)',
            filter: 'invert(100%)',
        } : {
            width: '6em',
            transform: 'rotate(-13deg)',
        } 
        return (
            <React.Fragment>
                <nav className={this.getNavStyling()} id="navbar">
                    <Link className='navbar-brand' to={ROUTES.HOME}>
                        <img style={logoStyle} src={require('../../assets/you-do-logo.png')} alt="YOU-DO"></img>
                    </Link>
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
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navigation
