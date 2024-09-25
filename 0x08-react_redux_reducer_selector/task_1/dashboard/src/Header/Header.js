import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import {AppContext} from '../App/AppContext';

class Header extends React.Component {
  render() {
    const { user, logOut } = this.context;
    return (
      <>
        <div className={css(styles.Header)}>
          <img src={logo} alt="Holberton logo"/>
          <h1 className={css(styles.Title)}>School dashboard</h1>
          {
            user.isLoggedIn && 
            <section id="logoutSection" className={css(styles.logout)}>
              Welcome {user.email} <a href='' onClick={() => logOut}>(logout)</a>
            </section>
          }
        </div>
      </>
    );
  }
}

Header.contextType = AppContext;

const styles = StyleSheet.create({
  Header: {
     display: "flex",
     borderBottom: "2px solid #e0354b",
     height: "125px",
  },
  Title: {
    display: 'inline',
    fontSize: "1.8rem",
    alignContent: "center",
    color: "#e0354b"
  },
  logout: {
    display: "block",
    bottom: '0'
  }
});

export default Header;