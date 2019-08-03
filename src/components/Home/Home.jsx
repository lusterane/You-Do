import React, { Component } from 'react'

import TodoSection from './TodoSection/TodoSection';
import Header from '../Layouts/Header/Header'

import './Home.css';

export class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            items: [],
            text: "",
        }
    }

    updateChecked = (id) => {
        this.setState({ items: this.state.items.map(item => {
            if(item.id === id){
                item.isCompleted = !item.isCompleted;
            }
            return item;
        })});
    }
/*
    updateDelete = (id) => {
        const deleted = this.state.items.length !== 1 ? (
            this.setState({ 
                items: this.state.items.filter(item =>  item.id !== id)
            })) : alert("Cannot delete last item");
    }*/

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.text.length !== 0){
            this.setState({items: this.state.items.concat({
                id: this.state.items.length, 
                title: this.state.text, 
                isCompleted: false, 
                numberLikes: 0
            })});
        }
        else {
            // replace with toaster
            alert("Please enter a value")
        }
        this.cancel();
    }

    cancel = () => {
        this.setState({text: ""});
    }

    updateText = (event) => {
        this.setState({text: event.target.value})
    }

    handleStarClick = (id) => {
        this.setState({items: this.state.items.map(item => {
            if(item.id === id){
                item.numberLikes += 1;
            }
            return item;
        })});
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container-home">
                    <div className="background-image"/>
                        <div className="submit-box-wrapper">
                            <form onSubmit={this.handleSubmit}>
                                <input 
                                    className='form-control mr-sm-2'
                                    type="text"
                                    id="submit-box"
                                    placeholder="Add Todo"
                                    maxLength="280"
                                    value={this.state.text}
                                    onChange={this.updateText}
                                />
                            </form>
                        </div>
                    </div>
                <TodoSection todo={this.state.items} updateChecked={this.updateChecked} incrementStar={this.handleStarClick}/>
            </React.Fragment>
        )
    }
}

export default Home
