import React from 'react';
import Login from './Login.js';
import { shallow } from 'enzyme';

describe('Login component', () => {
  it('render  without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true)
  });


  it('renders 2 input and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });

});
