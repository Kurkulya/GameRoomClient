import React, { Component } from 'react';

class ChatClient extends Component {
    constructor (props) {
        super(props);
        this.props.websocket.onmessage = this.onMessage;
    }
    sendMessage = () => {
        this.props.websocket.send(this.refs.input.value);
        this.refs.chatarea.value += '\nYou: ' + this.refs.input.value;
    };
    onMessage = (evt) => {
        if (JSON.parse(evt.data).type === 'messageSended') {
            this.refs.chatarea.value += '\nServer: ' + JSON.parse(evt.data).message;
        }
    };
    render () {
        return (
            <div>
                <textarea ref='chatarea' id="cha" rows="10" cols="30"/>
                <p>Your message: <input ref='input' type="text" id="input" />
                    <button onClick={this.sendMessage}>Send</button>
                </p>
            </div>
        );
    }
}

export default ChatClient;
