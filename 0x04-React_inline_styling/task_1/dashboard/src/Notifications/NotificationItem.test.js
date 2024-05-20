import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotifiactionItem component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('render the correct html when given the props value and type', () => {
    const wrapper = shallow(<NotificationItem value="test" type="default"/>);
    expect(wrapper.html()).toEqual('<li data-priority="default">test</li>');
  });

  it('render the correct html when given a html string', () => {
    const wrapper = shallow(<NotificationItem html="<u>test</u>"/>);
    expect(wrapper.html()).toEqual('<li><u>test</u></li>');
  });
});