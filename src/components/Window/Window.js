import './Window.scss';
import React, { Component } from 'react';
import GameRoom from '../GameRoom/GameRoom';
import Games from '../Games/Games';
import Info from '../LeftArea/Info';
import User from '../LeftArea/User';
import {userData} from '../../../__mocks__/userDataMock';

class Window extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div>
                <div className='window'>
                    <div className='left-area'>
                        <div>
                            <User {...userData}/>
                        </div>
                        <Info/>
                    </div>
                    <GameRoom />
                    <Games />
                </div>
            </div>
        );
    }
}

export default Window;
