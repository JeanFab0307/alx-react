import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import {AppContext} from '../App/AppContext';
import { logout } from '../actions/uiActionCreators';

class Header extends React.Component {
  render() {
    const { user, logout } = this.props;
    return (
      <>
        <div className={css(styles.Header)}>
          <img src={logo} alt="Holberton logo"/>
          <h1 className={css(styles.Title)}>School dashboard</h1>
          {
            user && 
            <section id="logoutSection" className={css(styles.logout)}>
              Welcome {user.email} <a href='' onClick={logout}>(logout)</a>
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

const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user'),
  };
};

const mapDispatchToProps = {
  logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);