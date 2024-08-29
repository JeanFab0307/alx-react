import React from 'react';
import App from './App.js';
import { shallow } from 'enzyme';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';

describe('App component', () => {
  it('render  without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('contains Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notifications />)).toEqual(true);
  });

  it('contains Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toEqual(true);
  });

  it('contains Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toEqual(true);
  });

  it('contains Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toEqual(true);
    });
});
