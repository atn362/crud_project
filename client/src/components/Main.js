import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Search from './Search';
import Comment from './Comment';
import Login from './Login';
import Results from './Results'


const Main = () => (
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route path="/search" component={Search} />
    <Route path="/comment" component={Comment} />
    <Route path="/results" component={Results} />
  </Switch>
);

export default Main;