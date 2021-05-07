import './App.css';
import { BrowserRouter, Route, Router, Switch, useHistory } from "react-router-dom";
import Login from './components/login';
import Dashboard from './components/dashboard';
import Signup from "./components/registration"

function App() {

  let uN = localStorage.getItem('username')
  let pwd = localStorage.getItem('password')

  let history = useHistory()

  return (
    <div>

      <BrowserRouter>
      <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
