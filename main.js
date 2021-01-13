const Router = window.ReactRouterDOM.BrowserRouter;
const Route = window.ReactRouterDOM.Route;
const Link = window.ReactRouterDOM.Link;
const NavLink = window.ReactRouterDOM.NavLink;
const Prompt = window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

const RouterList = () => (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Portal
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/bots" activeClassName="active">
            Bots
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/tags" activeClassName="active">
            Tags
          </NavLink>
        </li>
      </ul>
      <hr/>

      <Route exact path="/" component={Portal} />
      <Route path="/bots" component={Bots} />
      <Route path="/tags" component={Tags} />
    </div>
  </Router>
);
const Portal = () => (
  <div>
    <h2>Portal</h2>
  </div>
);

const Bots = () => (
  <div>
    <h2>Bots</h2>
    <ul>
      <li>FaceFun</li>
      <li>MyBOT Team</li>
      <li>Cody</li>
    </ul>
    
  </div>
);

const Tags = ({ match }) => (
  <div>
    <h2>Tags</h2>
    <ul>
      <li>
        <NavLink activeClassName="active" to={`${match.url}/admin`}>
          Administración
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to={`${match.url}/util`}>
          Util
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to={`${match.url}/moderacion`}>
          Moderación
        </NavLink>
      </li>
    </ul>
    <Route path={`${match.url}/:tagId`} component={Tag} />
    <Route 
      exact 
      path={match.url} 
      render={() => <h3>Seleccione una categoria </h3>} 
    />
  </div>
);

const Tag = ({ match }) => (
  <div>
    <h3>{match.params.tagId}</h3>
  </div>
);

const domContainer = document.querySelector('#root');
ReactDOM.render(<RouterList />, domContainer);