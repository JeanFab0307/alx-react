import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';


describe('Notifiaction component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toBeDefined();
  });

  // it('render three NotificationItem components', () => {
  //   const wrapper = shallow(<Notifications />);
  //   expect(wrapper.children(<NotificationItem />)).toEqual(true);
  // });

});