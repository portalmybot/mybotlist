import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

import axios from "axios";
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/';

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
