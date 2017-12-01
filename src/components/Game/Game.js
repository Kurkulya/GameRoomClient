import './Game.scss';
import React, { Component } from 'react';
import {createRoom} from '../../Requests/roomRequests';
import CreateRoom from '../CreateRoom/CreateRoom';
import PropTypes from 'prop-types';

class Game extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isShowingModal: false,
            room: {}
        };
    }
    handleClick = () => {
        createRoom(this.props.game).then((response) => {
            this.setState({isShowingModal: true, room: response});
        });
    };
    closeModal = () => {
        this.setState({isShowingModal: false});
    };
    render () {
        return (
            <div className='game'>
                {this.state.isShowingModal && <CreateRoom room={this.state.room} onCloseModal={this.closeModal}/>}
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
