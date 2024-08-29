import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import './App.css'

function App() {

  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className='App'>
      <Header />
      <Login />
      <Footer />
      </div>
    </>
  );
}

export default App;
