import React, { Component } from 'react'

export class AddTodo extends Component {
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
                    className='form-control mr-sm-2'
                    type="text"
                    placeholder="Add Todo"
                    value={this.state.text}
                    onChange={this.handleChange.bind(this)}
                />
                <input
                    className='btn btn-outline-success my-2 my-sm-0'
                    type="submit"
                    onClick={this.props.handleSubmit.bind(this, this.state.text)}
                />
            </div>
        )
    }

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

}

export default AddTodo
