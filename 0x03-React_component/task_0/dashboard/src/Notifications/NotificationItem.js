import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, value, html }) => {
  return (
    <>
    {html ? <li dangerouslySetInnerHTML={{ __html: html }} 
    data-priority={type}>{value}</li> : 
    <li data-priority={type}>{value}</li>}
    </>
  )
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
		html: PropTypes.string
	})
};

NotificationItem.defaultProps = {
  type: 'default'
};

export default NotificationItem;