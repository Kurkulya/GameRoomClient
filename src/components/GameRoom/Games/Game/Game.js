import './Game.scss';
import React, { Component } from 'react';
import Modal from 'react-modal';
import ModalContent from '../../../ModalContent/ModalContent';
import PropTypes from 'prop-types';

const GET_CREATED_ROOM = 'getCreatedRoom';
const CREATE_ROOM = 'createRoom';

class Game extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isShowingModal: false,
            room: {}
        };
        this.props.webSocket.addEventListener('message', this.onMessageGame);
    }
    onMessageGame = (data) => {
        const response = JSON.parse(data.data);
        switch (response.type) {
        case GET_CREATED_ROOM:
            this.setState({isShowingModal: true, room: response.room});
            break;
        }
    };
    handleClick = () => {
        this.props.webSocket.send(JSON.stringify({
            type: CREATE_ROOM,
            room: {
                title: 'Room',
                imageUrl: this.props.game.image,
                maxPlayers: this.props.game.maxPlayers,
                host: 'Vampirqer'
            }
        }));
    };
    closeModal = () => {
        this.setState({isShowingModal: false});
    };
    render () {
        return (
            <div className='game'>
                {this.state.isShowingModal &&
                <Modal isOpen={true} contentLabel="Game Lobby">
                    <ModalContent room={this.state.room} onRequestClose={this.closeModal}/>
                </Modal>}
                <div className='game-img'>
                    <img src={this.props.game.image} onClick={this.handleClick}/>
                </div>
            </div>
        );
    }
}

Game.propTypes = {
    game: PropTypes.object.isRequired
};

export default Game;
