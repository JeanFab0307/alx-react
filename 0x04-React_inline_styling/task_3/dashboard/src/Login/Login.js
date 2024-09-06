import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <>
      <div className={css(styles.Login)}>
        <p>Login to acceess the full dashboard</p>
        <label htmlFor='email'>Email: </label>
        <input 
          type='email'
          name='email'
          id='email'
          ></input>
        <label htmlFor='password'>Password: </label>
        <input
          type='password'
          name='=password'
          id='password'
          />
        <button>OK</button>
      </div>
    </>
  );
};

const screenSize = {
  smallScreen: '@media only screen and (max-width: 900px)'
}
const styles = StyleSheet.create({
  Login: {
    padding: '10px 30px',
		[screenSize.smallScreen]: {
      display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
			gap: '0.2em',}
  },
});

export default Login;
