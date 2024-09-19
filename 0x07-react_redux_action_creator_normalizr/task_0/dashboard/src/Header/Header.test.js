import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header component', () => {
  it('render  without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('renders an img ans h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists('img')).toEqual(true);
    expect(wrapper.exists('h1')).toEqual(true);
  });

});

