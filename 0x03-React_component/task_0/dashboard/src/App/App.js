import React from 'react';
import './App.css'
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import Proptypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
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
    const {isLoggedIn} = this.props;
    return (
      <>
      <div className="root-notifications">
        <Notifications listNotifications={listNotifications}/>
      </div>
      <div className='App'>
        <Header />
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        <Footer />
      </div>
    </>
  );
}
}

App.proptypes = {
  isLoggedIn: Proptypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;
