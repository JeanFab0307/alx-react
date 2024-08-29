import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifiaction component', () => {
  it('renders without crashing', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications).toBeDefined();
  });

  it('render list items', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('li')).toBeDefined();
  });

  it('render three list items', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('li')).toHaveLength(3);
  });

  it('render the right Notifications text', () => {
    const notifications = shallow(<Notifications />);
    const message = 'Here is the list of notifications';
    expect(notifications.find('p').text()).toBe(message);
  });
});