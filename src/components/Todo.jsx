import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class Todo extends Component {


    render() {
        return (this.props.todo.map((todo_item) => 
            <TodoItem todo={todo_item} key={todo_item.id} onChecked={this.props.updateChecked}/>
        ));
    }
}

export default Todo
