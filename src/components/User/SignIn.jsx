import './SignForm.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const LOGIN_SUCCESSFULL = 'loginSuccessfull';
const REGISTRATION_SUCCESSFULL = 'registrationSuccessfull';
const USER_NOT_FOUND = 'userNotFound';
const USER_ALREADY_EXISTS = 'userAlreadyExists';
const INCORRECT_PASSWORD = 'incorrectPassword';
const USER_ALREADY_LOGIN = 'userAlreadyLogin';

class SignIn extends Component {
    constructor (props) {
        super(props);
        this.state = {
            signInForm: true
        };
        this.props.webSocket.addEventListener('message', this.onMessage);
    }
    handleClick = () => {
        if (this.state.signInForm === true) {
            let name = this.refs.name_SI.value.trim();
            let password = this.refs.password_SI.value.trim();
            this.props.webSocket.send(JSON.stringify(
                {
                    type: 'loginUser',
                    data: {
                        name: name,
                        password: password
                    }
                }
            ));
        } else {
            let name = this.refs.name_SU.value.trim();
            let password = this.refs.password_SU.value.trim();
            let pc = this.refs.pc.value.trim();
            if (name.length < 3 || password.length < 6) {
                alert('Incorrect name or password input!');
            } else if (pc !== password) {
                alert('Passwords do not match!');
            } else {
                this.props.webSocket.send(JSON.stringify(
                    {
                        type: 'registerUser',
                        data: {
                            name: name,
                            password: password
                        }
                    }
                ));
            }
        }
    };
    onMessage = (data) => {
        const response = JSON.parse(data.data);
        switch (response.type) {
        case LOGIN_SUCCESSFULL:
            this.props.signIn(response.data);
            break;
        case REGISTRATION_SUCCESSFULL:
            this.setState({signInForm: true});
            break;
        case USER_ALREADY_EXISTS:
            alert('User with this name already exists!');
            break;
        case USER_NOT_FOUND:
            alert('User with this name does not exist!');
            break;
        case INCORRECT_PASSWORD:
            alert('Incorrect password');
            break;
        case USER_ALREADY_LOGIN:
            alert('User already signedIn!');
            break;
        }
    };
    goToSignUp = () => {
        this.setState({signInForm: false});
    };
    goToSignIn = () => {
        this.setState({signInForm: true});
    };
    render () {
        const signInForm =
            <div>
                <div className='top-button'>
                    <p>Don`t have an account? <button onClick={this.goToSignUp}>Sign up</button></p>
                </div>
                <div className="sign-form">
                    <strong>SignIn</strong>
                    <input name='nickname' placeholder="NickName" ref="name_SI"/>
                    <input type="password" placeholder="Password" ref="password_SI"/>
                    <div>
                        <button onClick={this.handleClick}>Sign in</button>
                    </div>
                </div>
            </div>;
        const signUpFrom =
            <div>
                <div className='top-button'>
                    <p> Already has an account? <button onClick={this.goToSignIn}>Sign in</button></p>
                </div>
                <div className="sign-form">
                    <strong>SignUp</strong>
                    <input name='nickname' placeholder="NickName" ref="name_SU"/>
                    <input type="password" placeholder="Password" ref="password_SU"/>
                    <input type="password" placeholder="Confirm password" ref="pc"/>
                    <div>
                        <button onClick={this.handleClick}>Sign up</button>
                    </div>
                </div>
            </div>;
        return (
            <div className='sign-form-wrap'>
                {this.state.signInForm ? signInForm : signUpFrom}
            </div>
        );
    }
}

SignIn.propsType = {
    signIn: PropTypes.func.isRequired
};

export default SignIn;
