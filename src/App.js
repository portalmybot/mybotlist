import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ProtectedRoute } from "./components/router/Protected";

import theme from './assets/theme';
import Home from './pages/Home';
import Register from './pages/Register';
import Bot from './pages/Bot';
import Tag from './pages/Tag';
import List from './pages/List';
import Add from './pages/AddBot';
import Edit from './pages/EditBot';
import Vote from './pages/VoteBot';
import Login from './Login';
import Me from './pages/Me';
import Premium from './pages/Premium';
import Subscribe from './pages/Subscribe';
import Team from './pages/Team';
import Certified from './pages/Certified';


const guestRoutes = [
  { path: "/", component: Home, exact: true },
  { path: "/auth/discord", component: Login, exact: true },
  { path: "/register", component: Register, exact: true },
  { path: "/bot/:id", component: Bot, exact: true },
  { path: "/tag/:id", component: Tag, exact: true },
  { path: "/bots/:id", component: List, exact: true },
  { path: "/premium", component: Subscribe, exact: true },
  { path: "/team", component: Team, exact: true },
  { path: "/certified", component: Certified, exact: true },
];

const protectedRoutes = [
  { path: "/me", component: Me, exact: true },
  { path: "/me/premium", component: Premium, exact: true },
  { path: "/add", component: Add, exact: true },
  { path: "/bot/:id/edit", component: Edit, exact: true },
  { path: "/bot/:id/vote", component: Vote, exact: true },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router basename={'/list'}>
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
