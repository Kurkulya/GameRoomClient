import PropTypes from 'prop-types';
import React from 'react';

const UPDATE_PLAYERS = 'updatePlayers';

class RoomInfo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            players: this.props.room.CurrentPlayers
        };
        this.props.websocket.onmessage = this.onMessage;
    }
    onMessage = (data) => {
        const response = JSON.parse(data.data);
        switch (response.type) {
        case UPDATE_PLAYERS:
            this.setState({players: response.data});
            break;
        }
    };
    render () {
        return (
            <div className='game-info'>
                <h3>Players: {this.state.players}</h3>
            </div>
        );
    }
}

RoomInfo.propTypes = {
    room: PropTypes.object.isRequired
};

export default RoomInfo;
