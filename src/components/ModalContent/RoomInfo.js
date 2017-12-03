import PropTypes from 'prop-types';
import React from 'react';

class RoomInfo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            players: this.props.room.CurrentPlayers
        };
        this.props.websocket.onmessage = this.onMessage;
    }
    onMessage = (data) => {
        if (JSON.parse(data.data).type === 'userJoined') {
            this.setState({players: JSON.parse(data.data).players});
        }
    };
    render () {
        return (
            <div >
                <div className='game-info'>
                    <img src={this.props.room.ImageUrl}/>
                    <h3>{this.props.room.Title}</h3>
                </div>
                <div className='host-info'>
                    <h3>Host: {this.props.room.Host}</h3>
                </div>
                <div className='game-info-'>
                    <h3>Players: {this.state.players}</h3>
                </div>
            </div>
        );
    }
}

RoomInfo.propTypes = {
    room: PropTypes.object.isRequired
};

export default RoomInfo;
