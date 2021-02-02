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
/* import Register from './pages/Register';
import AppBot from './pages/AddBot'; */
import Login from './Login';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/register">
            <Register />
          </Route>
          <Route path="/add">
            <AppBot />
          </Route> */}
          <Route exact path="/auth/discord" component={Login} />
          <Redirect to="/" />
        </Switch>
      </Router>

    </ThemeProvider>
  );
}

export default App;
