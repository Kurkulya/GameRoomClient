import './Info.scss';
import 'react-tabs/style/react-tabs.scss';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Players from './Players/Players';
import React from 'react';

class Info extends React.Component {
    constructor (props) {
        super(props);
        this.state = { tabIndex: 0 };
    }
    render () {
        return (
            <div className='players-online' >
                <Players webSocket={this.props.webSocket}/>
            </div>
        );
    }
}

export default Info;
