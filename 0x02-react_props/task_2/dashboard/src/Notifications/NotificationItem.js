import React from 'react';

function NotificationItem(props) {
  return (
    <>
    {props.html ? <li dangerouslySetInnerHTML={{ __html: props.html }} 
    data-priority={props.type}>{props.value}</li> : 
    <li data-priority={props.type}>{props.value}</li>}
    </>
    
  );
}

export default NotificationItem;