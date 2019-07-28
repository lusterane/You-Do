import React, { Component } from 'react'
import TodoItem from '../TodoItem/TodoItem'

export class Todo extends Component {
    render() {
        const filteredItems = this.props.todo.length ? this.props.todo.filter(item =>  item.id !== 10) : [];
        
        return (filteredItems.map((todo_item) => 
        <TodoItem todo={todo_item} key={todo_item.id} onChecked={this.props.updateChecked} onDelete={this.props.onDelete.bind(this)}/>));
    }
}

export default Todo
