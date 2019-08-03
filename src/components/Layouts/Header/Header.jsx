import React, { Component } from 'react'
import { hidden } from 'ansi-colors';
import './Header.css'

export class Header extends Component {
    state = {

    }

    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <div className="logo">YOU-DO</div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header
