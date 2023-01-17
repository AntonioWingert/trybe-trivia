import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Feedback from './pages/Feedback/Feedback';
import Game from './pages/Game/Game';
import Login from './pages/Login/Login';
import Ranking from './pages/Ranking/Ranking';
import Settings from './pages/Settings/Settings';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/settings" render={ (props) => <Settings { ...props } /> } />
      <Route path="/game" component={ Game } />
      <Route path="/feedback" component={ Feedback } />
      <Route path="/ranking" component={ Ranking } />
    </Switch>
  );
}
