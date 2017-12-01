import './Room.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Room extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className='room'>
                <div className='room-title'>
                    <text>Room {this.props.room.title}</text>
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
