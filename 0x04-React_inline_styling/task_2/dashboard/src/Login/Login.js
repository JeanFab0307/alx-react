import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <>
      <div className={css(styles.Login)}>
        <p>Login to acceess the full dashboard</p>
        <label>Email: </label>
        <input></input>
        <label>Password: </label>
        <input type='text'/>
        <button>OK</button>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  Login: {
    height: "30vh",
    padding: "5px 30px"
  }
});

export default Login;
