import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Login from './Pantallas/Login';
import MainPage from './Pantallas/MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login}>
        </Route>
        <Route path="/bands" component={MainPage}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
