import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/index' exact component={Login} />
          <Route path='/login' exact component={Login} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/dashboard/vaccine' exact component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>      
    </div>
  );
}

export default App;
