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
            width:'10%',
            cursor:'pointer',
            border: 'none',
            background: '#20303E',
            color: 'white',
        };
    }

    // styling for input textbox
    getTxtStyle = () => {
        return {
            width: '90%',
            fontSize: '20px',
            border: 'none',
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
