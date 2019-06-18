import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            border: '1px solid grey',
            padding: '10px',
            background: '#ecf9a2',
            textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none' 
        };
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <input 
                    type="checkbox"
                    onChange={this.props.onChecked.bind(this, this.props.todo.id)}
                /> {' '}
                {this.props.todo.title}
            </div>
        );
    }
}

export default TodoItem

