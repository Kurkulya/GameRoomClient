import Adapter from 'enzyme-adapter-react-15';
import { configure } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import configureStore from '../../src/redux/configureStore';
import React from 'react';
import shallowWithStore from '../../__mocks__/shallowRenderWrapper';
import SignIn from '../../src/components/User/SignIn';
// import sinon from 'sinon';
import thunk from 'redux-thunk';
// import toJson from 'enzyme-to-json';

const store = configureStore({});
const mockStore = configureMockStore([thunk]);
configure({ adapter: new Adapter() });

describe('SignIn ', () => {
    test('should render without crashing when unsignedIn', () => {
        const component = shallowWithStore(<SignIn />, store);
        expect(component).toMatchSnapshot();
    });
    test('should render itself with 2 inputs and 1 button', () => {
        const component = shallowWithStore(<SignIn />, store);
        expect(component.dive().find('input').length).toEqual(2);
        expect(component.dive().find('button').length).toEqual(1);
    });
    // test('should invoke callback function ', () => {
    //     const component = shallowWithStore(<SignIn />, store);
    //     const spy = sinon.stub(component.dive().instance(), 'handleClick');
    //     component.dive().find('button').simulate('click');
    //     expect(spy.called).toEqual(true);
    // });
});