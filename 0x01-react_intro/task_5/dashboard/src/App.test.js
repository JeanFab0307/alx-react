import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App component', () => {
  it('render  without crashing', () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });

  it('renders a div with the class App-header', () => {
    const app = shallow(<App />);
    expect(app.find(<div className='App-header'/>)).toBeDefined();
  });

  it('renders a div with the class App-body', () => {
    const app = shallow(<App />);
    expect(app.find(<div className='App-body'/>)).toBeDefined();
  });

  it('renders a div with the class App-footer', () => {
    const app = shallow(<App />);
    expect(app.find(<div className='App-footer'/>)).toBeDefined();
  });
});
