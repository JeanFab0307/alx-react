import React from 'react';
import PropTypes from'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem.js'
import NotificationItemShape from './NotificationItemShape.js'

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been masked as read`);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.listNotifications.length < nextProps.listNotifications.length) {
      return true;
    }
    return false;
  }
  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
      {displayDrawer ?
      (<>
        <div className={css(styles.NotificationSection, styles.NotificationDrawer)}>
          <button
          className={css(styles.CloseButton)}
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
                  <NotificationItem markAsRead={this.markAsRead} key={id} value={value} type={type} html={html}/>
                  ))}
                </ul>
            </>
          )
          }
        </div>
      </>) : 
      (<div className={css(styles.NotificationSection, styles.NotificationDisplayer)}>
        <p>Your notifications</p>
      </div>)
      }
      </>
    )
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications:PropTypes.arrayOf(
    PropTypes.shape(NotificationItemShape))
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

const styles = StyleSheet.create({
  NotificationSection: {
    position: "absolute",
    right: "5px",
    width: "35vw",
    backgroundColor: "white",
    padding: ".7em"
  },
  NotificationDrawer: {
    border: "1px dashed #e0354b",
    textAlign: "left"
  },
  NotificationDisplayer: {
    color: "#e0354b",
    textAlign: "right"
  },
  CloseButton: {
    position: 'absolute',
    right: '5px',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
  }
});

export default Notifications;