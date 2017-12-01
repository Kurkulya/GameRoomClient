import PropTypes from 'prop-types';
import React from 'react';
import {startGame} from '../../Requests/roomRequests';

class ModalContent extends React.Component {
    constructor (props) {
        super(props);
    }
    connectToGame =() => {
        startGame();
    };
    render () {
        const maxPlayersArray = [];
        for (let i = 1; i <= this.props.room.maxPlayers; i++) {
            maxPlayersArray.push(i);
        }
        return (
            <div className='modal-content'>
                <div className='game-info'>
                    <img src={this.props.room.image}/>
                    <h3>{this.props.room.title}</h3>
                </div>
                <div className='host-info'>
                    <h3>Host:</h3>
                    <h3>Vampirqer</h3>
                </div>
                <div className='game-settings'>
                    <h3>Game settings:</h3>
                    <div className='playercount'>
                        {maxPlayersArray.map((player) =>
                            <input type="radio" placeholder={player} name="322"/>
                        )}
                    </div>
                </div>
                <div className='game-info-'>
                    <h3>Players:</h3>
                    <div className='playerscount'>
                        {['player1', 'player2'].map((players) =>
                            <h4>{players}</h4>
                        )}
                    </div>
                </div>
                <div className='modalButtons'>
                    <a ref='startGame' href={this.props.room.gameServer} target="_blank" onClick={this.connectToGame}>Start Game</a>
                    <input type="button" value="Cancel" onClick={this.props.onRequestClose}/>
                </div>
            </div>
        );
    }
}

ModalContent.propTypes = {
    room: PropTypes.object.isRequired
};

export default ModalContent;
