import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <>
      <div className={css(styles.Header)}>
        <img src={logo} alt="Holberton logo"/>
        <h1 className={css(styles.Title)}>School dashboard</h1>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  Header: {
     display: "flex",
     borderBottom: "2px solid #e0354b",
     height: "25vh",
  },
  Title: {
    display: "inline",
    fontSize: "1.8rem",
    alignContent: "center",
    color: "#e0354b"
  }
});

export default Header;