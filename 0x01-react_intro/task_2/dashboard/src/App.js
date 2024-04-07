import './App.css';
import logo from './holberton-logo.jpg';
import {getFullYear, getFooterCopy} from './utils';

function App() {
  const year = getFullYear();
  const footer = getFooterCopy(false);
  return (
    <>
      <div className='App-header'>
        <img src={logo} alt="Holberton logo"/>
        <h1>School dashboard</h1>
      </div>

      <div className='App-body'>
        <p>Login to acceess the full dashboard</p>
        <label>Email</label>
        <input></input>
        <label>Password</label>
        <input type='text'/>
        <button>OK</button>
      </div>

      <div className='App-footer'>
        <p>Copyright {year} - {footer}</p>
      </div>
    </>
  );
}

export default App;
