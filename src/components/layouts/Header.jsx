import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="Header" style={this.getStyle()}>
                YOU-DO
            </div>
        )
    }
    getStyle = () => {
        return { 
            background: '#61A49C',
            color: '#FFF',
            textAlign: 'center',
            padding: '10px',
            fontSize: '50px'
        };
    }
}

export default Header
