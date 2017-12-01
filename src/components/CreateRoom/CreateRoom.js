import './CreateRoom.scss';
import React, { Component } from 'react';
import Modal from 'react-modal';
import ModalContent from '../ModalContent/ModalContent';

class CreateRoom extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <Modal isOpen={true} contentLabel="Game Lobby">
                <ModalContent room={this.props.room} onRequestClose={this.props.onCloseModal}/>
            </Modal>
        );
    }
}

export default CreateRoom;
