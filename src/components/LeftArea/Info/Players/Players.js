import './Players.scss';
import React from 'react';

const UPDATE_USERS = 'updateUsers';
const GET_ONLINE_USERS = 'getOnlineUsers';

class Players extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            users: []
        };
        this.props.webSocket.addEventListener('message', this.onMessage);
    }
    componentWillMount () {
        this.props.webSocket.send(JSON.stringify({type: GET_ONLINE_USERS}));
    }
    onMessage = (data) => {
        const response = JSON.parse(data.data);
        switch (response.type) {
        case UPDATE_USERS:
            this.setState({users: response.data});
            break;
        }
    };
    render () {
        return (
            <div className='players'>
                <h2>Active Players</h2>
                <ul>
                    {this.state.users.map((user) => <li key={user.Id}><a>{user.Name}</a></li>)}
                </ul>
            </div>
        );
    }
}

export default Players;
