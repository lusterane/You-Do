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
  render(){
    return (
      <div className="App">
        <Header />
        <Todo todo={this.state.items}/>
      </div>
    );
  }
}

export default App;
