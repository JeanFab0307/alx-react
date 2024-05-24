import React from 'react';
import Proptypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import { AppContext, user} from './AppContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);

    this.state = {
      displayDrawer: false,
      user,
      logOut: () => { user.isLoggedIn = false },
    };

    this.listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];
    this.listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: getLatestNotification() }
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
      this.logOut;
    }
  }

  handleDisplayDrawer() {
    this.setState({displayDrawer: true});
  }

  handleHideDrawer() {
    this.setState({displayDrawer: false});
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    })
  }

  logOut() {
    this.setState({
      user,
    })
  }

  render() {
    return (
      <>
      <AppContext.Provider value={
        {user: this.state.user,
        logOut: this.state.logOut}
      }>
        <div className={css(styles.App)}>
          <div className="HeaderSection">
            <Notifications
            listNotifications={this.listNotifications}
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}/>
            <Header />
          </div>
          <div className={css(styles.appBody)}>
            {this.state.user.isLoggedIn ?
            (
              <BodySectionWithMarginBottom title='CourseList'>
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) :
            (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login logIn={this.logIn}/>
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

App.proptypes = {
  isLoggedIn: Proptypes.bool,
  logOut: Proptypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {return;}
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

export default App;
