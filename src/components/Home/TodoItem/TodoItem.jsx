import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './TodoItem.css'

export class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        const {id, title} = this.props.todo;
        const textBodyStyle = this.props.todo.isCompleted ? {textDecoration: 'line-through'} : {};
        return (
            <React.Fragment>
                <div className="todo-item-container card">
                    <div className="low-poly-tile" style={this.props.dark ? darkTileStyle(this.props): tileStyle(this.props)}>
                        <div className="like-container">
                            <div>color id: {this.props.todo.colorId}</div>
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
            colorHex='#f76a23';
            break;
        case 2:
            colorHex='#2f7ef5';
            break;
        case 3:
            colorHex='#f5d81d';
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

const darkTileStyle = (props) => {
    let colorHex = '';
    switch(props.todo.colorId){
        case 1:
            colorHex='#a84413';
            break;
        case 2:
            colorHex='#1d54a8';
            break;
        case 3:
            colorHex='#a39012';
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
}
export default TodoItem

