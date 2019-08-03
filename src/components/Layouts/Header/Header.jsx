import React, { Component } from 'react'
import { hidden } from 'ansi-colors';
import './Header.css'

export class Header extends Component {
    state = {
        quote: {
            message: "",
            uid: 0,
        },
        quoteInEdit: "",
        writer: "Anonymous",
        updated: false
    }
    
    componentDidUpdate() {
        // refactor with prev state?
        if(this.state.quote != null && this.state.quote.message != "" && !this.state.updated){
            this.setState({quoteInEdit: this.state.quote.message, updated: true})
        }
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
                    <form onSubmit={this.handleSubmit}>
                    {this.state.quoteInEdit ? (
                        <div className="quote-wrapper">
                            <p className="quote"><i>"{this.state.quoteInEdit}"</i> -{this.state.writer}</p> 
                        </div>    
                        ) : ""}
                    </form>
                    <input 
                            maxlength="150"
                            type="text"
                            className="form-control"
                            id="quote-box"
                            value={this.state.quoteInEdit}
                            placeholder="Quote Testing"
                            onChange={this.updateQuote}>        
                    </input>
                </div>
            </React.Fragment>
        )
    }
}

export default Header
