import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavBar from './components/navBar';
import Home from './pages/Home';
import Register from './pages/Register';


function App() {
  return (

    <Home />
  );
}

export default App;
