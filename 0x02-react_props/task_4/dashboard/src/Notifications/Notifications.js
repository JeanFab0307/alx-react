import React from 'react';
import PropTypes from'prop-types';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem.js'
import './Notifications.css';

const Notifications = ({ displayDrawer }) => {
  return (
    <>
    {displayDrawer ?
    (<>
      <div className='menuItem'>
        <p>Your notifications</p>
      </div>
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
          <NotificationItem html={getLatestNotification()} type="urgent"/>
        </ul>
      </div>
    </>) : 
    (<div className='menuItem'>
      <p>Your notifications</p>
    </div>)
    }
    </>
  )
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
  displayDrawer: false
};

export default Notifications;