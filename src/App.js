import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './assets/theme';
import Home from './pages/Home';
import Register from './pages/Register';
import AppBot from './pages/AddBot';
import Login from './Login';
import Me from './pages/Me';
import Tos from './pages/Tos';

import axios from "axios";
const tokenString = localStorage.getItem('token');
const userToken = JSON.parse(tokenString);

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/';
axios.defaults.headers.common['Authorization'] = userToken;
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/me">
            <Me />
          </Route>
          <Route path="/tos">
            <Tos />
          </Route>
          <Route path="/add">
            <AppBot />
          </Route>
          <Route exact path="/auth/discord" component={Login} />
          <Redirect to="/" />
        </Switch>
      </Router>

    </ThemeProvider>
  );
}

export default App;
