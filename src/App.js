import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { Header } from './components/Header';

function App() {
  return <div className="App">
    <Header/>
    <Switch>
      <Route path='/'exact component={Home}/>
      <Route path='/auth'exact component={Auth}/>
    </Switch>
  </div>;
}

export default App;
