import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div>
                <input type="checkbox"/> {' '}
                {this.props.title}
            </div>
        );
    }
}

export default TodoItem

