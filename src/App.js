import React from 'react';
import './App.css';
import Todo from './components/Todo'
import Header from './components/layouts/Header'
import AddTodo from './components/AddTodo'

class App extends React.Component {
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
    render(){
        return (
            <div className="App">
                <Header />
                <AddTodo handleSubmit={this.handleAddTodo}/>
                <Todo todo={this.state.items} updateChecked={this.updateChecked} onDelete={this.updateDelete}/>
            </div>
        );
    }
}

export default App;
