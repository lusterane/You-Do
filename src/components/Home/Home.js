import React, { Component } from 'react'

import TodoSection from './TodoSection/TodoSection';
import Navigation from'../Layouts/Navigation'

import { withFirebase } from '../Firebase';
import key from 'weak-key';
import Time from 'react-time';

import './Home.css';

const HomePage = () => (
    <React.Fragment>
        <Navigation page={'home'}/>
        <Home />
    </React.Fragment>
)

class HomeBase extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            loading: false,
            items: [],
            text: "",
        }
    }

    componentDidMount(){
        this.setState({ loading: true });

        this.props.firebase.todos().on('value', snapshot => {
            const todosObject = snapshot.val();

            const todosList = Object.keys(todosObject).map(key => ({
                ...todosObject[key],
            }));

            this.setState({
                items: todosList,
                loading: false,
            })
        })
    }

    componentWillUnmount(){
        this.props.firebase.todos().off();
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

        const normalizedCurrentDate = (
            JSON.stringify(new Date())
            .substring(1, 25));

        const newTodo = {
            title: this.state.text,
            isCompleted: false,
            numberLikes: 0,
            currentDateTime: normalizedCurrentDate
        }
        this.props.firebase
            .todo(key(newTodo))
                .set(newTodo);
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

const Home = withFirebase(HomeBase)

export default HomePage;

export { Home };
