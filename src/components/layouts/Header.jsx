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
        quoteInEdit: "",
        updated: false
    }

    componentWillMount() {
        this.itemsRef = base.syncState('quote', {
            context: this,
            state: 'quote'
        });

    }
    
    componentDidUpdate() {
        // refactor with prev state?
        if(this.state.quote != null && this.state.quote.message != "" && !this.state.updated){
            this.setState({quoteInEdit: this.state.quote.message, updated: true})
        }
    }
    componentWillUnmount(){
        base.removeBinding(this.itemsRef);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const message = this.state.quoteInEdit;
        if(message == null || message == this.state.quote.message || message.length > 30){
            alert("Header Change Unsuccessful")
        }
        else{
            this.setState({quote: {message: this.state.quoteInEdit, uid:1}})
            alert("Successfully Changed Header")
        }
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
                    {`"`}
                    <input 
                            type="text"
                            className="quote"
                            value={this.state.quoteInEdit}
                            placeholder="Temporary texbox for quotes"
                            onChange={this.updateQuote}>        
                    </input>
                    {`"`}
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Header
