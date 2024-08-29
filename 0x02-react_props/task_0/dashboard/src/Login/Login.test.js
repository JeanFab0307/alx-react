import React from 'react';
import Login from './Login.js';
import { shallow } from 'enzyme';

describe('Login component', () => {
  it('render  without crashing', () => {
    const login = shallow(<Login />);
    expect(login).toBeDefined();
  });


  it('renders a div with the class App-body', () => {
    const login = shallow(<Login />);
    expect(login.find(<div className='App-body'/>)).toBeDefined();
  });

});
