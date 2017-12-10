import './App.scss';
import React, { Component } from 'react';
import SignIn from '../User/SignIn';
import Window from '../Window/Window';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isSignedIn: false,
            user: {},
            webSocket: new WebSocket('ws://localhost:8888/Users')
        };
    }
    signIn = (user) => {
        this.setState({isSignedIn: true, user: user});
    };
    render () {
        return (
            <div className='App'>
                {this.state.isSignedIn ? <Window user={this.state.user} webSocket={this.state.webSocket}/> : <SignIn signIn={this.signIn} webSocket={this.state.webSocket}/>}
            </div>
        );
    }
}

export default App;
