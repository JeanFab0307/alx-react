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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'h') {
      alert('Logging you out');
      this.logOut;
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleLogOut);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleLogOut);
  }

  render() {
    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: getLatestNotification() }
    ];
    const {isLoggedIn, logOut} = this.props;
    return (
      <>
      <div className={css(styles.App)}>
        <div className="HeaderSection">
          <Notifications listNotifications={listNotifications}/>
          <Header />
        </div>
        {isLoggedIn ?
        (
          <BodySectionWithMarginBottom title='CourseList'>
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
        ) :
        (
          <BodySectionWithMarginBottom title='Log in to continue'>
            <Login />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title='News from the School'>
          <p>I am Having fun studying</p>
        </BodySection>
        <Footer />
      </div>
    </>
  );
}
}

App.proptypes = {
  isLoggedIn: Proptypes.bool,
  logOut: Proptypes.func
};

App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {return;}
};

// Styles
const styles = StyleSheet.create({
  App: {
    position: "relative",
    height: "100vh",
    maxwidth: "100%",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    boxSizing: "content-box",
    margin: 0
  }
});

export default App;
