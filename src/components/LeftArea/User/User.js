import './User.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className='user'>
                <div className='user-img'>
                    <p><text><strong>{this.props.user.Name}</strong></text></p>
                    <img src='http://www.sp-fan.ru/upload/iblock/a94/sp_wow_guy.png'/>
                </div>
            </div>
        );
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired
};

export default User;
