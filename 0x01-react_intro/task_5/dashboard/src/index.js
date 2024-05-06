import React from 'react';
import App from './App';
import Notifications from './Notifications';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
