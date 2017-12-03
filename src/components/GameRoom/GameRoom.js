import './GameRoom.scss';
import React, { Component } from 'react';
import {getRooms} from '../../Requests/roomRequests';
import Room from '../Room/Room';

class GameRoom extends Component {
    constructor (props) {
        super(props);
        this.state = {
            rooms: []
        };
    }
    componentWillMount () {
        getRooms().then((response) => {
            this.setState({ rooms: response });
        });
    }
    render () {
        return (
            <div className='game-room'>
                <h1>Game Rooms</h1>
                <div className='rooms'>
                    {this.state.rooms.map((room) =>
                        <Room key={room.Id} room={room}/>
                    )}
                </div>
            </div>
        );
    }
}

export default GameRoom;
