import './ModalContent.scss';
import ChatClient from './ChatClient';
import PropTypes from 'prop-types';
import React from 'react';
import RoomInfo from './RoomInfo';

class ModalContent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isJoinedToGame: false,
            websocket: new WebSocket(this.props.room.WebSocketUrl)
        };
    }
    changeJoinGameState =() => {
        this.setState({isJoinedToGame: true});
    };
    render () {
        return (
            <div className='modal-content'>
                <div className='room-info'>
                    <RoomInfo room={this.props.room} websocket={this.state.websocket}/>
                    <div className='modalButtons'>
                        <button onClick={this.changeJoinGameState}>Join Game</button>
                        <button onClick={this.props.onRequestClose}>Exit Room</button>
                    </div>
                </div>
                <div className='game-instance'>
                    {this.state.isJoinedToGame &&
                    <ChatClient websocket={this.state.websocket}/>}
                </div>
            </div>
        );
    }
}

ModalContent.propTypes = {
    room: PropTypes.object.isRequired
};

export default ModalContent;
