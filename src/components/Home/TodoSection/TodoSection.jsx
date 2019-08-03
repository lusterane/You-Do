import React, { Component } from 'react'
import TodoItem from '../TodoItem/TodoItem'

import "./TodoSection.css"

export class Todo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card todo-section-container" id="todo-section-card">
                    {this.props.todo.map((todo_item) => 
                        <TodoItem todo={todo_item} key={todo_item.id} updateChecked={this.props.updateChecked} incrementStar={this.props.incrementStar}/>)}
                </div>
            </React.Fragment>
        )}
}

export default Todo
