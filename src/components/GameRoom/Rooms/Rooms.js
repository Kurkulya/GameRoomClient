import './Rooms.scss';
import React, { Component } from 'react';
import Room from './Room/Room';

const UPDATE_GAMES = 'updateGames';

class Rooms extends Component {
    constructor (props) {
        super(props);
        this.state = {
            rooms: []
        };
        this.props.webSocket.addEventListener('message', this.onMessageRooms);
    }
    onMessageRooms = (data) => {
        const response = JSON.parse(data.data);
        switch (response.type) {
        case UPDATE_GAMES:
            this.setState({rooms: response.data});
            break;
        }
    };
    render () {
        return (
            <div className='rooms'>
                <div>
                    <ul>
                        {this.state.rooms.map((room) =>
                            <li><a><Room key={room.Id} room={room}/></a></li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Rooms;
