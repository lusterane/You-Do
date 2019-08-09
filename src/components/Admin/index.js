import React, { Component } from 'react'

import { compose } from 'recompose';
import { withFirebase } from '../Firebase'
import { withAuthorization, AuthUserContext } from '../Session'

import Navigation from '../Layouts/Navigation'

class AdminPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            users: [],
        }
    }

    componentDidMount() {
        this.setState({ loading: true });

        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();

            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));

            this.setState({
                users: usersList,
                loading: false,
            })
        })
    }

    componentWillUnmount(){
        this.props.firebase.users().off();
    }

    render() {
        const {users, loading} = this.state;

        return (
            <AuthUserContext.Consumer>
                {authUser => (
                    <React.Fragment>
                        <Navigation />
                        <h1>Admin</h1>
                        {loading && <div>Loading ... </div>}

                        <UserList users={users} />
                        </React.Fragment>
                )}
            </AuthUserContext.Consumer>
        )
    }
}

const condition = authUser => authUser && authUser.role === 'ADMIN';

const UserList = ({ users }) => (
    <ul>
        {users.map(user => (
            <li key={user.uid}>
                <span>
                    <strong>ID: </strong> {user.uid}
                </span>
                <br></br>
                <span>
                    <strong>E-Mail: </strong> {user.email}
                </span>
                <br></br>
                <span>
                    <strong>To-do: </strong> {user.todo}
                </span>
                <br></br>
            </li>
        ))}
    </ul>
)

export default compose(
    withFirebase, 
    withAuthorization(condition),
)(AdminPage);
