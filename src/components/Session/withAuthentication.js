import React from 'react';

import { withFirebase } from '../Firebase'
import AuthUserContext from './Context'

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        constructor(props){
            super(props);
    
            this.state = {
                authUser: null,
            };
        }
    
        componentDidMount() {
            this.props.firebase.auth.onAuthStateChanged (authUser => {
                authUser
                    ? this.setState({ authUser })
                    : this.setState({ authUser: null})
            })
        }
    
        componentWillUnmount() {
            // removes listener
            this.listener();
        }
        render() {
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    {console.log("authUser: ", this.state.authUser)}
                    <Component {...this.props} />;
                </AuthUserContext.Provider>
            )
        }
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;