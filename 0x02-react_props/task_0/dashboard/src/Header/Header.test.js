import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header component', () => {
  it('render  without crashing', () => {
    const header = shallow(<Header />);
    expect(header).toBeDefined();
  });

  it('renders a div with the class App-header', () => {
    const header = shallow(<Header />);
    expect(header.find(<div className='App-header'/>)).toBeDefined();
  });
});
