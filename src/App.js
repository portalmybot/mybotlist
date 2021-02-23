import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ProtectedRoute } from "./components/router/Protected";

import theme from './assets/theme';
import Home from './pages/Home';
import Register from './pages/Register';
import Bot from './pages/Bot';
import Add from './pages/AddBot';
import Login from './Login';
import Me from './pages/Me';
/* import Tos from './pages/Tos';
 */
const guestRoutes = [
  { path: "/", component: Home, exact: true },
  { path: "/auth/discord", component: Login, exact: true },
  { path: "/register", component: Register, exact: true },
  { path: "/bot", component: Bot, exact: true },
];

const protectedRoutes = [
  { path: "/me", component: Me, exact: true },
  { path: "/add", component: Add, exact: true },
];

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
          {protectedRoutes.map((route, key) => {
              return (
                 <ProtectedRoute
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                  key={key}
                />
              )
            })
          }

          <Redirect to="/" />
        </Switch>
        
      </Router>

    </ThemeProvider>
  );
}

export default App;
