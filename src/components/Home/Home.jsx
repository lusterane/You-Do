import React, { Component } from 'react'

import TodoSection from './TodoSection/TodoSection';
import Navigation from '../Navigation'

import './Home.css';

const HomePage = () => (
    <React.Fragment>
        <Navigation page={'home'}/>
        <Home />
    </React.Fragment>
)

class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            items: this.getTestItems(),
            text: "",
        }
    }

    getTestItems = () =>{ 
        const testTitle = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas";
        return (
    
            [
                {
                    id: 1, 
                    title: testTitle, 
                    isCompleted: false, 
                    numberLikes: 20,
                    colorId: 1
                },
                {
                    id: 2, 
                    title: testTitle, 
                    isCompleted: false, 
                    numberLikes:  20,
                    colorId: 2
                },
                {
                    id: 3, 
                    title: testTitle, 
                    isCompleted: false, 
                    numberLikes: 20,
                    colorId: 3
                },
                {
                    id: 4, 
                    title: testTitle, 
                    isCompleted: false, 
                    numberLikes:1,
                    colorId: 1
                },
                {
                    id: 5, 
                    title: testTitle, 
                    isCompleted: false, 
                    numberLikes:1,
                    colorId: 2
                },
                {
                    id: 6, 
                    title: testTitle, 
                    isCompleted: false, 
                    numberLikes:1,
                    colorId:3
                },
            ]
        )
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
                <div className="logo-container">
                    <img className="logo-jumbotron" src={require('../../assets/you-do-logo.png')} alt="YOU-DO" />
                </div>
                <div className="container-home">
                    <div className="background-image"/>
                        <div className="submit-box-wrapper">
                            <form onSubmit={this.handleSubmit}>
                                <input 
                                    className='form-control mr-sm-2'
                                    type="text"
                                    id="submit-box"
                                    placeholder="Make your mark"
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

export default HomePage;
