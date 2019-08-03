import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './TodoItem.css'

export class TodoItem extends Component {
    handleTodoItemCheck = (event) => {
        console.log('clicked!', event);
    }

    render() {
        const {id, title} = this.props.todo;
        const titleStyle = this.props.todo.isCompleted ? {textDecoration: 'line-through'} : {};
        return (
            <React.Fragment>
                <div className="todo-item-container card">
                    <div className="low-poly-tile">
                        
                        <div className="like-container">
                            {this.props.todo.numberLikes < 20 ? (
                                <div>
                                    <span className="like-counter">{this.props.todo.numberLikes}</span>
                                    <button className="star" onClick={this.props.incrementStar.bind(this, id)}><FontAwesomeIcon icon='star'/></button>
                                </div>
                            ) : (
                                <span className="gold-star"><FontAwesomeIcon icon='star'/></span>
                            )}
                        </div>
                    </div>
                    <div className="text-container">
                        <span className="todo-text" onClick={this.props.updateChecked.bind(this, id)} style={titleStyle}>
                            {title}
                        </span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TodoItem

