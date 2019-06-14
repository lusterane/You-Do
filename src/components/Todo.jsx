import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class Todo extends Component {
    
    render() {
        return (this.props.todo.map((todo_item) => 
            <TodoItem title={todo_item.title} key={todo_item.id}/>
        ));
    }
}

export default Todo
