import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmitState = this.handleSubmitState.bind(this);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }
  
  handleSubmitState() {
    if (this.state.email !== "" && this.state.password !== ""){
      this.setState({ enableSubmit: true})
    } else {
      this.setState({ enableSubmit: false})
    }
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, this.handleSubmitState);
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, this.handleSubmitState);
  }

  render() {
    return (
      <>
        <div className={css(styles.Login)}>
          <p>Login to acceess the full dashboard</p>
          <form>
            <label htmlFor='email'>Email: </label>
            <input 
              type='email'
              name='email'
              id='email'
              onChange={this.handleChangeEmail}
              value={this.state.email}
              />
            <label htmlFor='password'>Password: </label>
            <input
              type='password'
              name='=password'
              id='password'
              onChange={this.handleChangePassword}
              value={this.state.password}
              />
            <input
              type='submit'
              value='OK'
              onClick={this.handleLoginSubmit}
              disabled={!this.state.enableSubmit}
              />
          </form>
        </div>
      </>
    );
  }
}


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
