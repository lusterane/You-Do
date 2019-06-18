import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="Header" style={this.getStyle()}>
                REACT TODO LIST
            </div>
        )
    }
    getStyle = () => {
        return { 
            background: '#000',
            color: '#fff',
            textAlign: 'center',
            padding: '10px',
            fontSize: '50px'
        };
    }
}

export default Header
