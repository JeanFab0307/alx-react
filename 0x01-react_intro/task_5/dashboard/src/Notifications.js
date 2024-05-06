import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

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
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li 
        data-priority='urgent'
        dangerouslySetInnerHTML={{__html:latestNotification}}
        ></li> 
      </ul>
    </div>
  );
}

export default Notifications;