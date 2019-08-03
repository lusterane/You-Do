import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './TodoItem.css'

export class TodoItem extends Component {
    render() {
        const {id, title} = this.props.todo;
        const textBodyStyle = this.props.todo.isCompleted ? {textDecoration: 'line-through'} : {};
        return (
            <React.Fragment>
                <div className="todo-item-container card">
                    <div className="low-poly-tile" style={tileStyle(this.props)}>
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
                        <span className="todo-text" onClick={this.props.updateChecked.bind(this, id)} style={textBodyStyle}>
                            {title}
                        </span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const tileStyle = (props) => {
    let colorHex = '';
    switch(props.todo.colorId){
        case 1:
            colorHex='#DD0000';
            break;
        case 2:
            colorHex='#FFCC00';
            break;
        case 3:
            colorHex='#002FDB';
            break;
        default:
            colorHex='#000000';
    }
    return {
        height: '8vw',
        backgroundColor: colorHex,
        padding: '1em',
        textAlign: 'right',
    }
};
export default TodoItem

