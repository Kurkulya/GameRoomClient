import './Room.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Websocket from 'react-websocket';

class Room extends Component {
    constructor (props) {
        super(props);
        this.state = {
            roomUrl: 'ws://localhost:8050/' + this.props.room.id
        };
    }
    onMessage = (data) => {
        let adata = data;
    };
    render () {
        return (
            <div className='room'>
                <Websocket url={this.state.roomUrl} onMessage={this.onMessage(this)}/>
                <div className='room-title'>
                    <text>{this.props.room.title}</text>
                </div>
                <div className='room-img'>
                    <img src={this.props.room.image}/>
                </div>
                <div className='room-players'>
                    <text>Players {this.props.room.currentPlayers}/{this.props.room.maxPlayers}</text>
                </div>
            </div>
        );
    }
}

Room.propTypes = {
    room: PropTypes.object.isRequired
};

export default Room;
