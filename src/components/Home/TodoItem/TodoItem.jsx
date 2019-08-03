import React, { Component } from 'react'

import './TodoItem.css'

export class TodoItem extends Component {
    handleTodoItemCheck = (event) => {
        console.log('clicked');
    }

    render() {
        const {id, title} = this.props.todo;

        return (
            <div className="todo-item-container card">
                <input 
                    type="checkbox"
                    onChange={this.props.onChecked.bind(this, id)}
                /> {' '}
                <div className="todo-title" onClick={this.handleTodoItemCheck()}>
                    {title}
                </div>
                <input 
                    type="submit"
                    onClick={this.props.onDelete.bind(this, id)}
                    value="X"
                />
            </div>
        );
    }

    getStyle = () => {
        return {
            border: '1px solid grey',
            padding: '10px',
            background: '#445358',
            color: 'white',
            textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none' ,
        };
    }

    getBtnStyle = () => {
        return {
            float: 'right',
            color: 'white',
            background: '#BCCC6B',
            borderRadius: '25px',
            border: 'none',
            width: '25px',
            height: '25px',
            cursor: 'pointer',
        };
    }
}

export default TodoItem

