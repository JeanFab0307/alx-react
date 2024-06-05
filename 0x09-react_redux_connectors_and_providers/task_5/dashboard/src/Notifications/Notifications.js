import React from 'react';
import PropTypes from'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem.js'
import { fetchNotifications } from '../actions/notificationActionCreators.js';

class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const {
            displayDrawer,
            handleDisplayDrawer,
            handleHideDrawer,
            markNotificationAsRead,
            listNotifications
          } = this.props;

    return (
      <>
      {displayDrawer ?
      (<>
        <div className={css(styles.NotificationSection, styles.NotificationDrawer)}>
          <button
          className={css(styles.CloseButton)}
          aria-label='Close'
          onClick={() => {
            console.log('Close button has been clicked');
            handleHideDrawer();
          }}>
            <img src={closeIcon} alt='close Icon' width='15px'/>
          </button>
          {listNotifications === null ?
          (<ul>
            <NotificationItem value="No new notification for now" type="default"/>
          </ul>
          ) : (
            <>  
              <p>Here is the list of notifications</p>
                <ul className={css(styles.ul)}>
                {listNotifications &&
                  Object.values(listNotifications).map((notification) => (
									<NotificationItem
										key={notification.guid}
										id={notification.guid}
										type={notification.type}
										value={notification.value}
										html={notification.html}
										markAsRead={markNotificationAsRead}
									/>
                  ))}
                </ul>
            </>
          )
          }
        </div>
      </>) : 
      (<div
        className={css(styles.NotificationSection, styles.NotificationDisplayer)}
        onClick={() => handleDisplayDrawer()}>
        <p>Your notifications</p>
      </div>)
      }
      </>
    )
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
};

const screenSize = {
  smallScreen: '@media only screen and (max-width: 900px)'
}

const styles = StyleSheet.create({
  NotificationSection: {
    position: "absolute",
    right: "5px",
    width: "35vw",
  },
  NotificationDrawer: {
    border: "1px dashed #e0354b",
    backgroundColor: "white",
    textAlign: "left",
    padding: ".7em",
    [screenSize.smallScreen]: {
      width: "100%",
      height: "100vh",
      border: "none",
      left: "0px",
      fontSize: "20px",
      padding: "0px 0px 0px 0px"
    }
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
    padding: "0px"
  },
  ul: {
    [screenSize.smallScreen]: {
      padding: "0px",
      margin: "0px"
    },
  } 
});

const mapStateToProps = (state) => {
  return {
    listNotifications: state.notifications.get(['messages']),
  };
};

const mapDispatchToProps = {
  fetchNotifications,
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);