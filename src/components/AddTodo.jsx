import React, { Component } from 'react'

export class AddTodo extends Component {
    getStyle = () => {
        return {
            display: 'flex',
            height: '35px',
        };
    }

    getBtnStyle = () => {
        return {
            width:'10%'
        };
    }

    // styling for input textbox
    getTxtStyle = () => {
        return {
            width: '90%',
        };
    }

    handleChange = (event) => {
        this.setState({ text: event.target.value });
    }

    state={
        text: ''
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <input 
                    style={this.getTxtStyle()}
                    type="text"
                    placeholder="Add Todo"
                    value={this.state.text}
                    onChange={this.handleChange.bind(this)}
                />
                <input
                    style={this.getBtnStyle()}
                    type="submit"
                    onClick={this.props.handleSubmit.bind(this, this.state.text)}
                />
            </div>
        )
    }
}

export default AddTodo
