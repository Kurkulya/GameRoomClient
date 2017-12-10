import './Window.scss';
import React, { Component } from 'react';
import GameRoom from '../GameRoom/GameRoom';
import Info from '../LeftArea/Info/Info';
import User from '../LeftArea/User/User';

class Window extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div>
                <div className='window'>
                    <div className='left-area'>
                        <div> <User user = {this.props.user}/> </div>
                        <Info webSocket={this.props.webSocket}/>
                    </div>
                    <GameRoom />
                </div>
            </div>
        );
    }
}

export default Window;
