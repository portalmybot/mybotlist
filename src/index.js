import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';

import {
  ThemeProvider
} from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import Particles from 'react-particles-js';
/* import ParticlesModel from './layouts/ParticlesModel.js';
 */
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      {/* <ParticlesModel /> */}
      <App />
      {/* <Particles 
        className='example1'/>  */}

  </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
