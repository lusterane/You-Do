import React, { Component } from 'react'

import Todo from '../Todo';
import Header from '../layouts/Header';
import AddTodo from '../AddTodo';

export class Landing extends Component {
    state = {
        items: []
    }
    updateChecked = (id) => {
        this.setState({ items: this.state.items.map(item => {
            if(item.id === id){
                item.isCompleted = !item.isCompleted;
            }
            return item;
        })});
    }

    updateDelete = (id) => {
        this.setState({ items: this.state.items.filter(item =>
            item.id !== id    
        )});
    }

    handleAddTodo = (title) => {
        this.setState( { items: this.state.items.concat({id: this.state.items.length+1, title: title, isCompleted: false})

        })
    }
    componentDidUpdate = () => {
        console.log("updated");
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <AddTodo handleSubmit={this.handleAddTodo}/>
                <Todo todo={this.state.items} updateChecked={this.updateChecked} onDelete={this.updateDelete}/>
            </React.Fragment>
        )
    }
}

export default Landing
