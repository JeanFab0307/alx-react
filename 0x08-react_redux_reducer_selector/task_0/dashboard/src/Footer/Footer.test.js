import React from 'react';
import Footer from './Footer.js';
import { shallow } from 'enzyme';

describe('Footer component', () => {
  it('render  without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('render the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').text()).toMatch(/Copyright/);
  });
});
