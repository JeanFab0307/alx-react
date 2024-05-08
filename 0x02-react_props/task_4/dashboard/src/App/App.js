import React from 'react';
import './App.css'
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import Proptypes from 'prop-types';

function App({ isLoggedIn }) {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className='App'>
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </>
  );
}

App.proptypes = {
  isLoggedIn: Proptypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;
