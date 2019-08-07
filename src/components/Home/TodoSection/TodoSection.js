import React, { Component } from 'react'
import TodoItem from '../TodoItem/TodoItem'

import "./TodoSection.css"

export class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            dark:true
        }
    }

    handleClick = () => {
        this.setState({dark: !this.state.dark})
    }
    render() {
        return (
            <React.Fragment>
                <button 
                    type="button"
                    class="btn btn-primary" 
                    onClick={this.handleClick}
                    style={{position: 'fixed', top: '80%', right: '0', zAxis: '5'}}
                    disabled={true}
                >Change Colors (testing)</button>
                <div className="card todo-section-container" id="todo-section-card">
                    {this.props.todo.map((todo_item) => 
                        <TodoItem todo={todo_item} key={todo_item.id} updateChecked={this.props.updateChecked} incrementStar={this.props.incrementStar} dark={this.state.dark}/>)}
                </div>
            </React.Fragment>
        )}
}

export default Todo
