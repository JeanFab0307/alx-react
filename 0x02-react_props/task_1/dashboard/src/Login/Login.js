import React from 'react';
import './Login.css';

function Login() {
  return (
    <>
      <div className='App-body'>
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

export default Login;
