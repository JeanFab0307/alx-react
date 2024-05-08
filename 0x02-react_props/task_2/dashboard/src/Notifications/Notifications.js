import './Notifications.css';
import React from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem.js'

function Notifications () {
  const latestNotification = getLatestNotification();
  return (
    <div className="Notifications">
      <button
      style={{ 
        position: 'absolute',
        right: '15px',
        cursor: 'pointer',
        border: 'none',
        background: 'none',
       }}
       aria-label='Close'
       onClick={() => console.log('Close button has been clicked')}>
        <img src={closeIcon} alt='close Icon' width='15px'/>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem value="New course available" type="default"/>
        <NotificationItem value="New resume availablee" type="urgent"/>
        <NotificationItem html={latestNotification} type="urgent"/>
      </ul>
    </div>
  );
}

export default Notifications;