import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, value, html, markAsRead, id } = this.props;
      return (
        <>
        {html ? <li onClick={() => markAsRead(id)} dangerouslySetInnerHTML={{ __html: html }} 
        data-priority={type}>{value}</li> : 
        <li onClick={() => markAsRead(id)} data-priority={type}>{value}</li>}
        </>
      );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
		html: PropTypes.string
	}),
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default'
};

export default NotificationItem;