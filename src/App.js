import React from 'react';
import './App.css';
import Sign from './components/pages/Sign';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import News from './components/pages/News';
import Consumption from './components/pages/Consumption';
import Graph from './components/pages/Graph';
import Decision from './components/pages/Decision';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Decision2 from './components/pages/Decision2';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Sign} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route exact path='/home' component={Home} />
        <Route path='/consumption' component={Consumption} />
        <Route path='/news' component={News} />
        <Route path='/graph' component={Graph} />
        <Route path='/decision' component={Decision} />
        <Route path='/decision2' component={Decision2} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;





