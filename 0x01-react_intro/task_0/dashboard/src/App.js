import './App.css';
import logo from './holberton-logo.jpg';

function App() {
  return (
    <>
      <div className='App-header'>
        <img src={logo} alt="Holberton logo"/>
        <h1>School dashboard</h1>
      </div>

      <div className='App-body'>
        <p>Login to acceess the full dashboard</p>
      </div>

      <div className='App-footer'>
        <p>Copyright 2020 - holberton School</p>
      </div>
    </>
  );
}

export default App;
