import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
    render() {
        return (
            <React.Fragment>{
                <div className="footer-text">
                    <div>© 2019 Toby Chow</div>
                    <div>All Rights Reserved.</div>
            </div>}
            </React.Fragment>
        )
    }
}

export default Footer
