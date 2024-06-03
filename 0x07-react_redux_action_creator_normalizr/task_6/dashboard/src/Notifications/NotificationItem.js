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
        <span className={css(styles.mobile)}>
        {html ? <li className={type === 'default' ? css(styles.default) : css(styles.urgent)}
        onClick={() => markAsRead(id)} dangerouslySetInnerHTML={{ __html: html }} 
        data-priority={type}></li> : 
        <li className={type === 'default' ? css(styles.default) : css(styles.urgent)}
        onClick={() => markAsRead(id)} data-priority={type}>{value}</li>}
        </span>
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
  type: 'default',
  markAsRead: () => {return;}
};

const screenSize = {
  smallScreen: '@media only screen and (max-width: 900px)'
}

const styles = StyleSheet.create({
  urgent: {
    color: "red"
  },
  default: {
    color: "blue"
  },
  mobile: {
    [screenSize.smallScreen]: {
      position: "relative",
      display:  "block",
      borderBottom: "1px solid black",
      fontSize: "20px",
      padding: "10px 0px 10px 8px",
      listStyle: "none",
      margin: "0px",
      width: "100%"
    }
  }
});

export default NotificationItem;