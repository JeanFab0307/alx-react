import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, value, html, markAsRead, id } = this.props;
      return (
        <>
        {html ? <li className={type === 'default' ? css(styles.default) : css(styles.urgent)}
        onClick={() => markAsRead(id)} dangerouslySetInnerHTML={{ __html: html }} 
        data-priority={type}></li> : 
        <li className={type === 'default' ? css(styles.default) : css(styles.urgent)}
        onClick={() => markAsRead(id)} data-priority={type}>{value}</li>}
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

const styles = StyleSheet.create({
  urgent: {
    color: "red"
  },
  default: {
    color: "blue"
  }
});

export default NotificationItem;