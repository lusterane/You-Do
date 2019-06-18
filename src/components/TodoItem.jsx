import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            border: '1px solid grey',
            padding: '10px',
            background: '#ecf9a2',
            textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none' 
        };
    }

    getBtnStyle = () => {
        return {
            float: 'right',
            color: 'white',
            background: 'red',
            borderRadius: '25px',
            border: 'none',
            width: '25px',
            height: '25px',
            cursor: 'pointer',
        };
    }


    render() {
        const {id, title} = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <input 
                    type="checkbox"
                    onChange={this.props.onChecked.bind(this, id)}
                /> {' '}
                {title}
                <input style={this.getBtnStyle()}
                    type="submit"
                    onClick={this.props.onDelete.bind(this, id)}
                    value="X"
                />
            </div>
        );
    }
}

export default TodoItem

