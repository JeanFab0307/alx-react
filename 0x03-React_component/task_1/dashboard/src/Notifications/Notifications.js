import React from 'react';
import PropTypes from'prop-types';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem.js'
import NotificationItemShape from './NotificationItemShape.js'
import './Notifications.css';

const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <>
    {displayDrawer ?
    (<>
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
        {listNotifications.length === 0 ?
        (<ul>
          <NotificationItem value="No new notification for now" type="default"/>
        </ul>
        ) : (
          <>  
            <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map(({id, value, type, html}) => (
                <NotificationItem key={id} value={value} type={type} html={html}/>
                ))}
              </ul>
          </>
        )
        }
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
  displayDrawer: PropTypes.bool,
  listNotifications:PropTypes.arrayOf(
    PropTypes.shape(NotificationItemShape))
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;