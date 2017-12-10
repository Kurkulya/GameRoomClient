import './Room.scss';
import React, { Component } from 'react';
import Modal from 'react-modal';
import ModalContent from '../../../ModalContent/ModalContent';
import PropTypes from 'prop-types';

class Room extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isShowingModal: false
        };
    }
    handleClick = () => {
        this.setState({isShowingModal: true});
    };
    closeModal = () => {
        this.setState({isShowingModal: false});
    };
    render () {
        return (
            <div className='room'>
                {this.state.isShowingModal &&
                <Modal isOpen={true} contentLabel="Game Lobby">
                    <ModalContent room={this.props.room} onRequestClose={this.closeModal}/>
                </Modal>}
                <div className='room-title'>
                    <strong>Room {this.props.room.Title}</strong>
                </div>
                <div className='room-img'>
                    <img src={this.props.room.ImageUrl} onClick={this.handleClick}/>
                </div>
                <div className='room-players'>
                    <strong>{this.props.room.CurrentPlayers}/{this.props.room.MaxPlayers}</strong>
                </div>
            </div>
        );
    }
}

Room.propTypes = {
    room: PropTypes.object.isRequired
};

export default Room;
