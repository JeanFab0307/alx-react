import React from 'react';
import App from './App/App';
import Notifications from './Notifications/Notifications';
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
