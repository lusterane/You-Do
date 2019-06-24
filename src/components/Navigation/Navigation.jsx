import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css'

import * as ROUTES from '../../constants/Routes'

export class Navigation extends Component {
    getListStyle = {
        textDecoration: 'none',
        color: '#ffffff',
    };
    
    render() {
        return (
            <div className={styles['navigation']}>
                <ul className={styles['navigation-list']}>
                    <li className={styles['navigation-list-item']}>
                        <Link style={this.getListStyle} to={ROUTES.SIGN_IN}>Sign In</Link>
                    </li>
                    <li className={styles['navigation-list-item']}>
                        <Link style={this.getListStyle} to={ROUTES.SIGN_UP}>Sign Up</Link>
                    </li>
                    <li className={styles['navigation-list-item']}>
                        <Link style={this.getListStyle} to={ROUTES.LANDING}>Landing</Link>
                    </li>
                    <li className={styles['navigation-list-item']}>
                        <Link style={this.getListStyle} to={ROUTES.HOME}>Home</Link>
                    </li>
                    <li className={styles['navigation-list-item']}>
                        <Link style={this.getListStyle} to={ROUTES.ACCOUNT}>Account</Link>
                    </li>
                    <li className={styles['navigation-list-item']}>
                        <Link style={this.getListStyle} to={ROUTES.ADMIN}>Admin</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navigation
