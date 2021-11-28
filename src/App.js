import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import PrivateRoute from './Components/Auth/PrivateRoute';
import RestrictedRoute from "./Components/Auth/RestrictedRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path='/' component={Home}/>
        <RestrictedRoute exact path='/login' component={Login} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
