import React from 'react';
import './App.css';
import Todo from './components/Todo'
import Header from './components/layouts/Header'

class App extends React.Component {
    state = {
        items: [
            {
                id: 1,
                title: 'get money',
                isCompleted: false
            },
            {
                id: 2,
                title: 'get more money',
                isCompleted: false
            },
            {
                id: 3,
                title: 'win',
                isCompleted: false
            }
        ]
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
            item.id != id    
        )});
    }

    render(){
        return (
            <div className="App">
                <Header />
                <Todo todo={this.state.items} updateChecked={this.updateChecked} onDelete={this.updateDelete}/>
            </div>
        );
    }
}

export default App;
