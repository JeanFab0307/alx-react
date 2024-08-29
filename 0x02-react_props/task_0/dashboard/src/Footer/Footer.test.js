import React from 'react';
import Footer from './Footer.js';
import { shallow } from 'enzyme';

describe('Footer component', () => {
  it('render  without crashing', () => {
    const footer = shallow(<Footer />);
    expect(footer).toBeDefined();
  });

  it('renders a div with the class App-footer', () => {
    const footer = shallow(<Footer />);
    expect(footer.find(<div className='App-footer'/>)).toBeDefined();
  });
});
