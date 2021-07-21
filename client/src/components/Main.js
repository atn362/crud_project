import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Search from './Search';
import Comment from './Comment';


const Main = () => (
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/comment" component={Comment} />
  </Switch>
);

export default Main;