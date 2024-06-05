import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import { AppContext, user} from './AppContext';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  logout,
  loginRequest
} from '../actions/uiActionCreators';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user,
    };

    this.listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];
  }
  
    componentDidMount() {
      document.addEventListener('keydown', this.handleLogOut);
    }
  
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleLogOut);
    }

  handleLogOut(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'h') {
      alert('Logging you out');
      this.props.logout();
    }
  }

  render() {
    const {
      isLoggedIn,
      displayDrawer,
      displayNotificationDrawer,
      hideNotificationDrawer,
      login,
      logout,
    } = this.props
    return (
      <>
      <AppContext.Provider value={{user: this.state.user,}}>
        <div className={css(styles.App)}>
          <div className="HeaderSection">
            <Notifications
            displayDrawer={displayDrawer}
            handleDisplayDrawer={displayNotificationDrawer}
            handleHideDrawer={hideNotificationDrawer}
            />
            <Header />
          </div>
          <div className={css(styles.appBody)}>
            {isLoggedIn ?
            (
              <BodySectionWithMarginBottom title='CourseList'>
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) :
            (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login logIn={login}/>
              </BodySectionWithMarginBottom>
            )}
            <BodySection title='News from the School'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis at tempora odio, necessitatibus repudiandae
                reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo
                ipsa iste vero dolor voluptates.
              </p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
      </>
    );
  }
}

App.defaultProps = {
	isLoggedIn: false,
	displayDrawer: false,
	displayNotificationDrawer: () => {},
	hideNotificationDrawer: () => {},
  login: () => {},
  logout: () => {},
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	displayDrawer: PropTypes.bool,
	displayNotificationDrawer: PropTypes.func,
	hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
  logout: PropTypes.func,
};

// Styles
const styles = StyleSheet.create({
  App: {
    position: "relative",
    height: "100vh",
    maxwidth: "100vw",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    boxSizing: "content-box",
    margin: 0,
  },
  appBody: {
    margin: "10px 25px",
    textAlign: "justify"
  }
});

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.get('isUserLoggedIn'),
    displayDrawer: state.ui.get('isNotificationDrawerVisible'),
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
