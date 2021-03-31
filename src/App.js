import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './assets/theme';
import Home from './pages/Home';
import Bot from './pages/Bot';
import Add from './pages/AddBot';
import Me from './pages/Me';

const guestRoutes = [
  { path: "/", component: Home, exact: true },
  { path: "/bot/demo", component: Bot, exact: true },
  { path: "/me", component: Me, exact: true },
  { path: "/add", component: Add, exact: true },
];
;

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Switch>
          {guestRoutes.map((route, key) => {
              return (
                <Route 
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                  key={key}
                />
              );
            })
          }
          <Redirect to="/" />
        </Switch>
        
      </Router>

    </ThemeProvider>
  );
}

export default App;
