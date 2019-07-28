import React, { Component } from 'react'
import { base } from '../../base';
import { hidden } from 'ansi-colors';
import firebase from 'firebase';
import './Header.css'

export class Header extends Component {
    state = {
        quote: {
            message: "",
            uid: 0,
        },
        quoteInEdit: ""
    }

    componentWillMount(){
        this.itemsRef = base.syncState('quote', {
            context: this,
            state: 'quote'
        });
    }
    componentDidMount(){
        console.log(this.state.quote)
    }
    componentWillUnmount(){
        base.removeBinding(this.itemsRef);
    }

    handleSubmit = () => {
        this.setState({quote: {message: this.state.quoteInEdit, uid:1}})
    }

    updateQuote = (event) => {
        this.setState({quoteInEdit: event.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <div className="title">
                        YOU-DO
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            className="quote"
                            value={this.state.quoteInEdit}
                            placeholder="Temporary texbox for quotes"
                            onChange={this.updateQuote}
                        >        
                        </input>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Header
