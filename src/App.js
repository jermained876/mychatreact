import logo from './logo.svg';
import './App.css';
import Login from './component/login'
import Register from './component/register'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>

        </Switch>
   
    </Router>
  );
}

export default App;
