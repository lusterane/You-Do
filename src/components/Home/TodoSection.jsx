import React, { Component } from 'react'
import TodoItem from './TodoItem/TodoItem'

export class Todo extends Component {
    render() {
        const filteredItems = this.props.todo.filter(item =>  item.id !== 0)
        return (filteredItems.map((todo_item) => 
        <TodoItem todo={todo_item} key={todo_item.id} onChecked={this.props.updateChecked} onDelete={this.props.onDelete}/>));
    }
}

export default Todo
